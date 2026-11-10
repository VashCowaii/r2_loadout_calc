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
              "displayLines": "0.2"
            }
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "MDF_Target_CurrentAttack",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "MDF_Tingyun_Attack",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(MDF_Target_CurrentAttack * 0.5)"
      },
      "variableName": "MDF_Target_CurrentAttack"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(MDF_Tingyun_Attack * 0.25)"
      },
      "variableName": "MDF_Tingyun_Attack"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "MDF_Target_CurrentAttack",
        "compareType": ">",
        "value2": {
          "displayLines": "MDF_Tingyun_Attack"
        }
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "MDF_Tingyun_Attack"
          },
          "variableName": "MDF_Skill02_Attack"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "MDF_Target_CurrentAttack"
          },
          "variableName": "MDF_Skill02_Attack"
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
      "value": 3,
      "variableName": "TingYun_EnergyBarLayer"
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
            "displayLines": "3"
          },
          "valuePerStack": {
            "MDF_AttackDelta": {
              "displayLines": "MDF_Skill02_Attack"
            },
            "MDF_Eidolon1_SpeedUp": {
              "displayLines": "0.2"
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
            "displayLines": "3"
          },
          "valuePerStack": {
            "MDF_AttackDelta": {
              "displayLines": "MDF_Skill02_Attack"
            },
            "MDF_Eidolon1_SpeedUp": {
              "displayLines": "0.2"
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
              "displayLines": "0.4"
            },
            "MDF_Passive_DamagePercentageSelf": {
              "displayLines": "0.6"
            },
            "MDF_Eidolon1_SpeedUp": {
              "displayLines": "0.2"
            },
            "MDF_Eidolon2_SPAdd": {
              "displayLines": "5"
            },
            "MDF_Eidolon4_DamagePercentage": {
              "displayLines": "0.2"
            },
            "MDF_AttackDelta": {
              "displayLines": "MDF_Skill02_Attack"
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
                  "displayLines": "0.4"
                },
                "MDF_Passive_DamagePercentageSelf": {
                  "displayLines": "0.6"
                },
                "MDF_Eidolon1_SpeedUp": {
                  "displayLines": "0.2"
                },
                "MDF_Eidolon2_SPAdd": {
                  "displayLines": "5"
                },
                "MDF_AttackDelta": {
                  "displayLines": "MDF_Skill02_Attack"
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
                      "displayLines": "0.4"
                    },
                    "MDF_Passive_DamagePercentageSelf": {
                      "displayLines": "0.6"
                    },
                    "MDF_Eidolon1_SpeedUp": {
                      "displayLines": "0.2"
                    },
                    "MDF_AttackDelta": {
                      "displayLines": "MDF_Skill02_Attack"
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
                      "displayLines": "0.4"
                    },
                    "MDF_Passive_DamagePercentageSelf": {
                      "displayLines": "0.6"
                    },
                    "MDF_AttackDelta": {
                      "displayLines": "MDF_Skill02_Attack"
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
        "displayLines": "TingYun_EnergyBarLayer"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}