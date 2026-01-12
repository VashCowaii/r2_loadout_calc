const compositeAbilityObject = {
  "fullCharacterName": "Tingyun",
  "trimCharacterName": "Tingyun",
  "abilityList": [
    "Tingyun_Tingyun_Trace03",
    "Tingyun_TingYun_PassiveAbility01",
    "Tingyun_TingYun_Ability03_Part02",
    "Tingyun_TingYun_Ability03_Part01",
    "Tingyun_TingYun_Ability03_EnterReady",
    "Tingyun_TingYun_Ability02_Part02",
    "Tingyun_TingYun_Ability02_Part01",
    "Tingyun_TingYun_Ability01_Part02",
    "Tingyun_TingYun_Ability01_Part01",
    "Tingyun_Modifiers"
  ],
  "abilityObject": {
    "Tingyun_Tingyun_Trace03": {
      "fileName": "Tingyun_Tingyun_Trace03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Tingyun_Tree03"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Tingyun_Tree03",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": "Caster",
                  "value": {
                    "operator": "Variables[0] (5) || RETURN",
                    "displayLines": "5",
                    "constants": [],
                    "variables": [
                      5
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Tingyun_TingYun_PassiveAbility01": {
      "fileName": "Tingyun_TingYun_PassiveAbility01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "TingYun_ByIsTingYun"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Nourished Joviality"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Ability02PreShowModifier"
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": 3,
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Ability02PreShowModifier",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": "Owner of this Modifier",
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "NOT",
              "condition": {
                "name": "Has Modifier",
                "target": "Owner of this Modifier",
                "modifier": "Tingyun_Trace_B1_SpeedUp[<span class=\"descriptionNumberColor\">Nourished Joviality</span>]"
              }
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0.2(SPD Change)"
            }
          }
        }
      ]
    },
    "Tingyun_TingYun_Ability03_Part02": {
      "fileName": "Tingyun_TingYun_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event (On Entity)",
          "target": "Single Target (Primary)",
          "popUpText": "Energy Regeneration"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": "Single Target (Primary)",
              "value": {
                "operator": "Variables[0] (50) || Variables[1] (10) || ADD || RETURN",
                "displayLines": "(50 + 10)",
                "constants": [],
                "variables": [
                  50,
                  10
                ]
              },
              "isFixed": "(Fixed)",
              "tag": "ActiveSkillAdd"
            }
          ],
          "failed": [
            {
              "name": "Update Energy",
              "on": "Single Target (Primary)",
              "value": {
                "operator": "Variables[0] (50) || RETURN",
                "displayLines": "50",
                "constants": [],
                "variables": [
                  50
                ]
              },
              "isFixed": "(Fixed)",
              "tag": "ActiveSkillAdd"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Single Target (Primary)",
          "modifier": "TingYun_Ability03DamageUp[<span class=\"descriptionNumberColor\">Amidst the Rejoicing Clouds</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_DamageAddedRatio": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            }
          }
        },
        {
          "name": "Update Energy",
          "on": "Caster",
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "TingYun_Ability03DamageUp[<span class=\"descriptionNumberColor\">Amidst the Rejoicing Clouds</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageAddedRatio) || RETURN",
                    "displayLines": "MDF_DamageAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DamageAddedRatio"
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
          "statusName": "Amidst the Rejoicing Clouds"
        }
      ]
    },
    "Tingyun_TingYun_Ability03_Part01": {
      "fileName": "Tingyun_TingYun_Ability03_Part01",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "TingYun_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Tingyun_TingYun_Ability03_EnterReady": {
      "fileName": "Tingyun_TingYun_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "Tingyun_TingYun_Ability02_Part02": {
      "fileName": "Tingyun_TingYun_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Nourished Joviality"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Tingyun_Trace_B1_SpeedUp[<span class=\"descriptionNumberColor\">Nourished Joviality</span>]",
              "duration": 1,
              "valuePerStack": {
                "Tingyun_SpeedUP_Ratio": {
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
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": "Single Target (Primary)",
          "variableName": "MDF_Target_CurrentAttack",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": "Caster",
          "variableName": "MDF_Tingyun_Attack",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_Target_CurrentAttack",
          "value": {
            "operator": "Variables[0] (MDF_Target_CurrentAttack) || Variables[1] (0.5) || MUL || RETURN",
            "displayLines": "(MDF_Target_CurrentAttack * 0.5)",
            "constants": [],
            "variables": [
              "MDF_Target_CurrentAttack",
              0.5
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_Tingyun_Attack",
          "value": {
            "operator": "Variables[0] (MDF_Tingyun_Attack) || Variables[1] (0.25) || MUL || RETURN",
            "displayLines": "(MDF_Tingyun_Attack * 0.25)",
            "constants": [],
            "variables": [
              "MDF_Tingyun_Attack",
              0.25
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_Target_CurrentAttack",
            "compareType": ">",
            "value2": {
              "operator": "Variables[0] (MDF_Tingyun_Attack) || RETURN",
              "displayLines": "MDF_Tingyun_Attack",
              "constants": [],
              "variables": [
                "MDF_Tingyun_Attack"
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Skill02_Attack",
              "value": {
                "operator": "Variables[0] (MDF_Tingyun_Attack) || RETURN",
                "displayLines": "MDF_Tingyun_Attack",
                "constants": [],
                "variables": [
                  "MDF_Tingyun_Attack"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Skill02_Attack",
              "value": {
                "operator": "Variables[0] (MDF_Target_CurrentAttack) || RETURN",
                "displayLines": "MDF_Target_CurrentAttack",
                "constants": [],
                "variables": [
                  "MDF_Target_CurrentAttack"
                ]
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": [
            {
              "name": "Target List",
              "target": "All Team Members(In Context)"
            },
            {
              "name": "Target List",
              "target": "All Untargetable"
            }
          ],
          "modifier": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "TingYun_EnergyBarLayer",
          "value": 3
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
              "to": "Single Target (Primary)",
              "modifier": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "valuePerStack": {
                "MDF_AttackDelta": {
                  "operator": "Variables[0] (MDF_Skill02_Attack) || RETURN",
                  "displayLines": "MDF_Skill02_Attack",
                  "constants": [],
                  "variables": [
                    "MDF_Skill02_Attack"
                  ]
                },
                "MDF_Eidolon1_SpeedUp": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                },
                "MDF_Eidolon1_Count": 1
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Single Target (Primary)",
              "modifier": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "valuePerStack": {
                "MDF_AttackDelta": {
                  "operator": "Variables[0] (MDF_Skill02_Attack) || RETURN",
                  "displayLines": "MDF_Skill02_Attack",
                  "constants": [],
                  "variables": [
                    "MDF_Skill02_Attack"
                  ]
                },
                "MDF_Eidolon1_SpeedUp": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                },
                "MDF_Eidolon1_Count": 0
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": [
            {
              "name": "Target List",
              "target": "All Team Members(In Context)"
            },
            {
              "name": "Target List",
              "target": "All Untargetable"
            }
          ],
          "modifier": "TingYun_Passive_LeiLing"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": [
            {
              "name": "Target List",
              "target": "All Team Members(In Context)"
            },
            {
              "name": "Target List",
              "target": "All Untargetable"
            }
          ],
          "modifier": "TingYun_Passive_LeiLing_Eidolon1"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": [
            {
              "name": "Target List",
              "target": "All Team Members(In Context)"
            },
            {
              "name": "Target List",
              "target": "All Untargetable"
            }
          ],
          "modifier": "TingYun_Passive_LeiLing_Eidolon2"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": [
            {
              "name": "Target List",
              "target": "All Team Members(In Context)"
            },
            {
              "name": "Target List",
              "target": "All Untargetable"
            }
          ],
          "modifier": "TingYun_Passive_LeiLing_Eidolon4"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Single Target (Primary)",
              "modifier": "TingYun_Passive_LeiLing_Eidolon4",
              "valuePerStack": {
                "MDF_Passive_DamagePercentage": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
                  ]
                },
                "MDF_Passive_DamagePercentageSelf": {
                  "operator": "Variables[0] (0.6) || RETURN",
                  "displayLines": "0.6",
                  "constants": [],
                  "variables": [
                    0.6
                  ]
                },
                "MDF_Eidolon1_SpeedUp": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                },
                "MDF_Eidolon2_SPAdd": {
                  "operator": "Variables[0] (5) || RETURN",
                  "displayLines": "5",
                  "constants": [],
                  "variables": [
                    5
                  ]
                },
                "MDF_Eidolon4_DamagePercentage": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                },
                "MDF_AttackDelta": {
                  "operator": "Variables[0] (MDF_Skill02_Attack) || RETURN",
                  "displayLines": "MDF_Skill02_Attack",
                  "constants": [],
                  "variables": [
                    "MDF_Skill02_Attack"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Single Target (Primary)",
                  "modifier": "TingYun_Passive_LeiLing_Eidolon2",
                  "valuePerStack": {
                    "MDF_Passive_DamagePercentage": {
                      "operator": "Variables[0] (0.4) || RETURN",
                      "displayLines": "0.4",
                      "constants": [],
                      "variables": [
                        0.4
                      ]
                    },
                    "MDF_Passive_DamagePercentageSelf": {
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
                      ]
                    },
                    "MDF_Eidolon1_SpeedUp": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "MDF_Eidolon2_SPAdd": {
                      "operator": "Variables[0] (5) || RETURN",
                      "displayLines": "5",
                      "constants": [],
                      "variables": [
                        5
                      ]
                    },
                    "MDF_AttackDelta": {
                      "operator": "Variables[0] (MDF_Skill02_Attack) || RETURN",
                      "displayLines": "MDF_Skill02_Attack",
                      "constants": [],
                      "variables": [
                        "MDF_Skill02_Attack"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Single Target (Primary)",
                      "modifier": "TingYun_Passive_LeiLing_Eidolon1",
                      "valuePerStack": {
                        "MDF_Passive_DamagePercentage": {
                          "operator": "Variables[0] (0.4) || RETURN",
                          "displayLines": "0.4",
                          "constants": [],
                          "variables": [
                            0.4
                          ]
                        },
                        "MDF_Passive_DamagePercentageSelf": {
                          "operator": "Variables[0] (0.6) || RETURN",
                          "displayLines": "0.6",
                          "constants": [],
                          "variables": [
                            0.6
                          ]
                        },
                        "MDF_Eidolon1_SpeedUp": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "MDF_AttackDelta": {
                          "operator": "Variables[0] (MDF_Skill02_Attack) || RETURN",
                          "displayLines": "MDF_Skill02_Attack",
                          "constants": [],
                          "variables": [
                            "MDF_Skill02_Attack"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Single Target (Primary)",
                      "modifier": "TingYun_Passive_LeiLing",
                      "valuePerStack": {
                        "MDF_Passive_DamagePercentage": {
                          "operator": "Variables[0] (0.4) || RETURN",
                          "displayLines": "0.4",
                          "constants": [],
                          "variables": [
                            0.4
                          ]
                        },
                        "MDF_Passive_DamagePercentageSelf": {
                          "operator": "Variables[0] (0.6) || RETURN",
                          "displayLines": "0.6",
                          "constants": [],
                          "variables": [
                            0.6
                          ]
                        },
                        "MDF_AttackDelta": {
                          "operator": "Variables[0] (MDF_Skill02_Attack) || RETURN",
                          "displayLines": "MDF_Skill02_Attack",
                          "constants": [],
                          "variables": [
                            "MDF_Skill02_Attack"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (TingYun_EnergyBarLayer) || RETURN",
            "displayLines": "TingYun_EnergyBarLayer",
            "constants": [],
            "variables": [
              "TingYun_EnergyBarLayer"
            ]
          },
          "maximum": 3,
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3
        },
        {
          "name": "Update Energy",
          "on": "Caster",
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Tingyun_TingYun_Ability02_Part01": {
      "fileName": "Tingyun_TingYun_Ability02_Part01",
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
          "from": "Caster",
          "ability": "TingYun_Ability02_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Current Action Holder Is",
            "target": "Single Target (Primary)"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "Tingyun_TingYun_Ability01_Part02": {
      "fileName": "Tingyun_TingYun_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Tingyun_Ability01_Trace_B2"
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
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
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
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
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Tingyun_Ability01_Trace_B2"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Tingyun_Ability01_Trace_B2",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Knell Subdual"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Tingyun_TingYun_Ability01_Part01": {
      "fileName": "Tingyun_TingYun_Ability01_Part01",
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
          "from": "Caster",
          "ability": "TingYun_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Tingyun_Modifiers": {
      "fileName": "Tingyun_Modifiers",
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
          "for": "Tingyun_Eidolon2_CD"
        },
        {
          "name": "Modifier Construction",
          "for": "Tingyun_Trace_B1_SpeedUp[<span class=\"descriptionNumberColor\">Nourished Joviality</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (Tingyun_SpeedUP_Ratio) || RETURN",
                    "displayLines": "Tingyun_SpeedUP_Ratio",
                    "constants": [],
                    "variables": [
                      "Tingyun_SpeedUP_Ratio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "Tingyun_SpeedUP_Ratio"
          ],
          "latentQueue": [],
          "description": "SPD +<span class=\"descriptionNumberColor\">Tingyun_SpeedUP_Ratio</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "Nourished Joviality"
        },
        {
          "name": "Modifier Construction",
          "for": "Tingyun_Eidolon1_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Rank01_SpeedUp_01) || RETURN",
                    "displayLines": "MDF_Rank01_SpeedUp_01",
                    "constants": [],
                    "variables": [
                      "MDF_Rank01_SpeedUp_01"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "SPD +<span class=\"descriptionNumberColor\">MDF_Rank01_SpeedUp_01</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "TingYun_PassiveFlag"
        },
        {
          "name": "Modifier Construction",
          "for": "TingYun_PassiveATK_Flag"
        },
        {
          "name": "Modifier Construction",
          "for": "TingYun_ByIsTingYun",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": "Allied Team",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": "Use Prior Target(s) Defined",
                      "valueType": "LifeTime",
                      "variableName": "TingYun_EnergyBarLayer",
                      "modifierName": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TingYun_EnergyBarLayer",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (TingYun_EnergyBarLayer) || RETURN",
                            "displayLines": "TingYun_EnergyBarLayer",
                            "constants": [],
                            "variables": [
                              "TingYun_EnergyBarLayer"
                            ]
                          },
                          "maximum": 3,
                          "assignState": "True",
                          "priorState": "Normal",
                          "bar#": 3
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (TingYun_EnergyBarLayer) || RETURN",
                            "displayLines": "TingYun_EnergyBarLayer",
                            "constants": [],
                            "variables": [
                              "TingYun_EnergyBarLayer"
                            ]
                          },
                          "maximum": 3,
                          "assignState": "True",
                          "priorState": "Active",
                          "bar#": 3
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
                    "name": "Modifier Was",
                    "modifier": "MWTingYun_BPAbility_AttackDelta_LifeTimeChangeMark"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "MWTingYun_BPAbility_AttackDelta_LifeTimeChangeMark"
                    },
                    {
                      "name": "Find New Target",
                      "from": "Allied Team",
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Use Prior Target(s) Defined",
                        "modifier": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": "Use Prior Target(s) Defined",
                          "valueType": "LifeTime",
                          "variableName": "TingYun_EnergyBarLayer",
                          "modifierName": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]",
                          "multiplier": 1
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "TingYun_EnergyBarLayer",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (TingYun_EnergyBarLayer) || RETURN",
                                "displayLines": "TingYun_EnergyBarLayer",
                                "constants": [],
                                "variables": [
                                  "TingYun_EnergyBarLayer"
                                ]
                              },
                              "maximum": 3,
                              "assignState": "True",
                              "priorState": "Normal",
                              "bar#": 3
                            }
                          ],
                          "failed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (TingYun_EnergyBarLayer) || RETURN",
                                "displayLines": "TingYun_EnergyBarLayer",
                                "constants": [],
                                "variables": [
                                  "TingYun_EnergyBarLayer"
                                ]
                              },
                              "maximum": 3,
                              "assignState": "True",
                              "priorState": "Active",
                              "bar#": 3
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
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": "Allied Team",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": "Use Prior Target(s) Defined",
                      "valueType": "LifeTime",
                      "variableName": "TingYun_EnergyBarLayer",
                      "modifierName": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TingYun_EnergyBarLayer",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (TingYun_EnergyBarLayer) || RETURN",
                            "displayLines": "TingYun_EnergyBarLayer",
                            "constants": [],
                            "variables": [
                              "TingYun_EnergyBarLayer"
                            ]
                          },
                          "maximum": 3,
                          "assignState": "True",
                          "priorState": "Normal",
                          "bar#": 3
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (TingYun_EnergyBarLayer) || RETURN",
                            "displayLines": "TingYun_EnergyBarLayer",
                            "constants": [],
                            "variables": [
                              "TingYun_EnergyBarLayer"
                            ]
                          },
                          "maximum": 3,
                          "assignState": "True",
                          "priorState": "Active",
                          "bar#": 3
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Force Modifier Duration Decrement [Anyone]: Start",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": "Allied Team",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": "Use Prior Target(s) Defined",
                      "valueType": "LifeTime",
                      "variableName": "TingYun_EnergyBarLayer",
                      "modifierName": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TingYun_EnergyBarLayer",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (TingYun_EnergyBarLayer) || RETURN",
                            "displayLines": "TingYun_EnergyBarLayer",
                            "constants": [],
                            "variables": [
                              "TingYun_EnergyBarLayer"
                            ]
                          },
                          "maximum": 3,
                          "assignState": "True",
                          "priorState": "Normal",
                          "bar#": 3
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (TingYun_EnergyBarLayer) || RETURN",
                            "displayLines": "TingYun_EnergyBarLayer",
                            "constants": [],
                            "variables": [
                              "TingYun_EnergyBarLayer"
                            ]
                          },
                          "maximum": 3,
                          "assignState": "True",
                          "priorState": "Active",
                          "bar#": 3
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
          "for": "TingYun_Passive_LeiLing_Eidolon4",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Tingyun_Eidolon2_CD"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
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
            },
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "Tingyun_Eidolon2_CD"
                  },
                  "failed": [
                    {
                      "name": "Update Energy",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (MDF_Rank02_SPAdd) || RETURN",
                        "displayLines": "MDF_Rank02_SPAdd",
                        "constants": [],
                        "variables": [
                          "MDF_Rank02_SPAdd"
                        ]
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Tingyun_Eidolon2_CD"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": "Ability Target List",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Use Prior Target(s) Defined",
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "operator": "Variables[0] (MDF_Passive_DamagePercentage) || Variables[1] (MDF_Rank04_DamagePercentage) || ADD || RETURN",
                          "displayLines": "(MDF_Passive_DamagePercentage + MDF_Rank04_DamagePercentage)",
                          "constants": [],
                          "variables": [
                            "MDF_Passive_DamagePercentage",
                            "MDF_Rank04_DamagePercentage"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Enemies (AOE)",
                  "modifier": "TingYun_PassiveFlag"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "TingYun_PassiveATK_Flag"
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Action Target List",
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "operator": "Variables[0] (MDF_Passive_DamagePercentageSelf) || RETURN",
                          "displayLines": "MDF_Passive_DamagePercentageSelf",
                          "constants": [],
                          "variables": [
                            "MDF_Passive_DamagePercentageSelf"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "TingYun_PassiveATK_Flag"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Current Action Owner",
                        "modifier": "TingYun_ByIsTingYun"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "TingYun_PassiveATK_Flag"
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
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Tingyun_Eidolon1_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                      "duration": 1,
                      "valuePerStack": {
                        "MDF_Eidolon1_SpeedUp_01": {
                          "operator": "Variables[0] (MDF_Rank01_SpeedUp) || RETURN",
                          "displayLines": "MDF_Rank01_SpeedUp",
                          "constants": [],
                          "variables": [
                            "MDF_Rank01_SpeedUp"
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
            "MDF_Passive_DamagePercentage",
            "MDF_Passive_DamagePercentageSelf",
            "MDF_Rank01_SpeedUp",
            "MDF_Rank02_SPAdd",
            "MDF_Rank04_DamagePercentage",
            "MDF_AttackDelta"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "TingYun_Passive_LeiLing_Eidolon2",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Tingyun_Eidolon2_CD"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
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
            },
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "Tingyun_Eidolon2_CD"
                  },
                  "failed": [
                    {
                      "name": "Update Energy",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (MDF_Rank02_SPAdd) || RETURN",
                        "displayLines": "MDF_Rank02_SPAdd",
                        "constants": [],
                        "variables": [
                          "MDF_Rank02_SPAdd"
                        ]
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Tingyun_Eidolon2_CD"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": "Ability Target List",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Use Prior Target(s) Defined",
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "operator": "Variables[0] (MDF_Passive_DamagePercentage) || RETURN",
                          "displayLines": "MDF_Passive_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "MDF_Passive_DamagePercentage"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Enemies (AOE)",
                  "modifier": "TingYun_PassiveFlag"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "TingYun_PassiveATK_Flag"
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Action Target List",
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "operator": "Variables[0] (MDF_Passive_DamagePercentageSelf) || RETURN",
                          "displayLines": "MDF_Passive_DamagePercentageSelf",
                          "constants": [],
                          "variables": [
                            "MDF_Passive_DamagePercentageSelf"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "TingYun_PassiveATK_Flag"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Current Action Owner",
                        "modifier": "TingYun_ByIsTingYun"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "TingYun_PassiveATK_Flag"
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
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Tingyun_Eidolon1_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                      "duration": 1,
                      "valuePerStack": {
                        "MDF_Eidolon1_SpeedUp_01": {
                          "operator": "Variables[0] (MDF_Rank01_SpeedUp) || RETURN",
                          "displayLines": "MDF_Rank01_SpeedUp",
                          "constants": [],
                          "variables": [
                            "MDF_Rank01_SpeedUp"
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
            "MDF_Passive_DamagePercentage",
            "MDF_Passive_DamagePercentageSelf",
            "MDF_Rank01_SpeedUp",
            "MDF_Rank02_SPAdd",
            "MDF_AttackDelta"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "TingYun_Passive_LeiLing_Eidolon1",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
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
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": "Ability Target List",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Use Prior Target(s) Defined",
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "operator": "Variables[0] (MDF_Passive_DamagePercentage) || RETURN",
                          "displayLines": "MDF_Passive_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "MDF_Passive_DamagePercentage"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Enemies (AOE)",
                  "modifier": "TingYun_PassiveFlag"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "TingYun_PassiveATK_Flag"
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Action Target List",
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "operator": "Variables[0] (MDF_Passive_DamagePercentageSelf) || RETURN",
                          "displayLines": "MDF_Passive_DamagePercentageSelf",
                          "constants": [],
                          "variables": [
                            "MDF_Passive_DamagePercentageSelf"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "TingYun_PassiveATK_Flag"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Current Action Owner",
                        "modifier": "TingYun_ByIsTingYun"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "TingYun_PassiveATK_Flag"
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
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Tingyun_Eidolon1_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                      "duration": 1,
                      "valuePerStack": {
                        "MDF_Eidolon1_SpeedUp_01": {
                          "operator": "Variables[0] (MDF_Rank01_SpeedUp) || RETURN",
                          "displayLines": "MDF_Rank01_SpeedUp",
                          "constants": [],
                          "variables": [
                            "MDF_Rank01_SpeedUp"
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
            "MDF_Passive_DamagePercentage",
            "MDF_Passive_DamagePercentageSelf",
            "MDF_Rank01_SpeedUp",
            "MDF_AttackDelta"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "TingYun_Passive_LeiLing",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
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
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": "Ability Target List",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Use Prior Target(s) Defined",
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "operator": "Variables[0] (MDF_Passive_DamagePercentage) || RETURN",
                          "displayLines": "MDF_Passive_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "MDF_Passive_DamagePercentage"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Enemies (AOE)",
                  "modifier": "TingYun_PassiveFlag"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "TingYun_PassiveATK_Flag"
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Action Target List",
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "operator": "Variables[0] (MDF_Passive_DamagePercentageSelf) || RETURN",
                          "displayLines": "MDF_Passive_DamagePercentageSelf",
                          "constants": [],
                          "variables": [
                            "MDF_Passive_DamagePercentageSelf"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "TingYun_PassiveATK_Flag"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Current Action Owner",
                        "modifier": "TingYun_ByIsTingYun"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "TingYun_PassiveATK_Flag"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_Passive_DamagePercentage",
            "MDF_Passive_DamagePercentageSelf",
            "MDF_AttackDelta"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Tingyun_Eidolon1_Ability03PreShowModifier",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": "Owner of this Modifier",
            "skillType": [
              "Ultimate"
            ],
            "conditions": {
              "name": "NOT",
              "condition": {
                "name": "Has Modifier",
                "target": "Owner of this Modifier",
                "modifier": "Tingyun_Eidolon1_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
              }
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0.2(SPD Change)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "TingYun_Passive_LeiLing"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "TingYun_Passive_LeiLing_Eidolon1"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "TingYun_Passive_LeiLing_Eidolon2"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "TingYun_Passive_LeiLing_Eidolon4"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "TingYun_EnergyBarLayer",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (TingYun_EnergyBarLayer) || RETURN",
                    "displayLines": "TingYun_EnergyBarLayer",
                    "constants": [],
                    "variables": [
                      "TingYun_EnergyBarLayer"
                    ]
                  },
                  "maximum": 3,
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 3
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Tingyun_Eidolon1_Ability03PreShowModifier"
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
                    "value1": "MDF_Rank01_Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Increases ATK by #1[i] points. Gains SPD Boost after using Ultimate."
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Tingyun_Eidolon1_Ability03PreShowModifier"
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_LifeTime",
              "valueRanges": [
                {
                  "name": "Changes",
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Living/Death State",
                        "state": "Mask_AliveOnly"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "MWTingYun_BPAbility_AttackDelta_LifeTimeChangeMark",
                          "referenceModifier": "MReference_Empty"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AttackDelta",
            "MDF_Rank01_SpeedUp",
            "MDF_Rank01_Count"
          ],
          "latentQueue": [],
          "description": "ATK +<span class=\"descriptionNumberColor\">MDF_AttackDelta</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Benediction"
        }
      ],
      "references": []
    }
  }
}