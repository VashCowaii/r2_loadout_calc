const configAbility = {
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1819337398\">Tingyun_Trace_B1_SpeedUp</a>[<span class=\"descriptionNumberColor\">Nourished Joviality</span>]",
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
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "variableName": "MDF_Target_CurrentAttack",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
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
      "modifier": "<a class=\"gModGreen\" id=\"-525409503\">MWTingYun_BPAbility_AttackDelta</a>[<span class=\"descriptionNumberColor\">Benediction</span>]"
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
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-525409503\">MWTingYun_BPAbility_AttackDelta</a>[<span class=\"descriptionNumberColor\">Benediction</span>]",
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
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-525409503\">MWTingYun_BPAbility_AttackDelta</a>[<span class=\"descriptionNumberColor\">Benediction</span>]",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1351488572\">TingYun_Passive_LeiLing</a>"
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
      "modifier": "<a class=\"gModGreen\" id=\"-972525776\">TingYun_Passive_LeiLing_Eidolon1</a>"
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
      "modifier": "<a class=\"gModGreen\" id=\"-922192919\">TingYun_Passive_LeiLing_Eidolon2</a>"
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
      "modifier": "<a class=\"gModGreen\" id=\"-888637681\">TingYun_Passive_LeiLing_Eidolon4</a>"
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
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-888637681\">TingYun_Passive_LeiLing_Eidolon4</a>",
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
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-922192919\">TingYun_Passive_LeiLing_Eidolon2</a>",
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-972525776\">TingYun_Passive_LeiLing_Eidolon1</a>",
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1351488572\">TingYun_Passive_LeiLing</a>",
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
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End"
  ],
  "references": []
}