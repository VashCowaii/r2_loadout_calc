const configAbility = {
  "fileName": "11414_Functions",
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
            "operator": "Variables[0] (UnusedUnderThisBase_14241) || RETURN",
            "displayLines": "UnusedUnderThisBase_14241",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_14241"
            ]
          },
          "valuePerStack": {
            "MDF_DanHengPT_InitShieldValue": {
              "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_5081) || MUL || Variables[2] (UnusedUnderThisBase_5071) || ADD || RETURN",
              "displayLines": "((DanHengPT_Attack * UnusedUnderThisBase_5081) + UnusedUnderThisBase_5071)",
              "constants": [],
              "variables": [
                "DanHengPT_Attack",
                "UnusedUnderThisBase_5081",
                "UnusedUnderThisBase_5071"
              ]
            },
            "MDF_MaxShieldRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_5083) || RETURN",
              "displayLines": "UnusedUnderThisBase_5083",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_5083"
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
            "operator": "Variables[0] (UnusedUnderThisBase_6022) || RETURN",
            "displayLines": "UnusedUnderThisBase_6022",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_6022"
            ]
          },
          "valuePerStack": {
            "MDF_DanHengPT_InitShieldValue": {
              "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_5086) || MUL || Variables[2] (UnusedUnderThisBase_5087) || ADD || RETURN",
              "displayLines": "((DanHengPT_Attack * UnusedUnderThisBase_5086) + UnusedUnderThisBase_5087)",
              "constants": [],
              "variables": [
                "DanHengPT_Attack",
                "UnusedUnderThisBase_5086",
                "UnusedUnderThisBase_5087"
              ]
            },
            "MDF_MaxShieldRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_5083) || RETURN",
              "displayLines": "UnusedUnderThisBase_5083",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_5083"
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
                "operator": "Variables[0] (UnusedUnderThisBase_6532) || RETURN",
                "displayLines": "UnusedUnderThisBase_6532",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_6532"
                ]
              },
              "valuePerStack": {
                "MDF_DanHengPT_InitShieldValue": {
                  "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_5067) || MUL || Variables[2] (UnusedUnderThisBase_5063) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || Variables[4] (UnusedUnderThisBase_5846) || MUL || RETURN",
                  "displayLines": "((((DanHengPT_Attack * UnusedUnderThisBase_5067) + UnusedUnderThisBase_5063) * DanHengPT_ExtraShieldUPRatio) * UnusedUnderThisBase_5846)",
                  "constants": [],
                  "variables": [
                    "DanHengPT_Attack",
                    "UnusedUnderThisBase_5067",
                    "UnusedUnderThisBase_5063",
                    "DanHengPT_ExtraShieldUPRatio",
                    "UnusedUnderThisBase_5846"
                  ]
                },
                "MDF_MaxShieldRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_5083) || RETURN",
                  "displayLines": "UnusedUnderThisBase_5083",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_5083"
                  ]
                },
                "MDF_MainTarget": 1
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "PointB3"
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
                        "operator": "Variables[0] (UnusedUnderThisBase_6532) || RETURN",
                        "displayLines": "UnusedUnderThisBase_6532",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_6532"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DanHengPT_InitShieldValue": {
                          "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_5065) || MUL || Variables[2] (UnusedUnderThisBase_5093) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || Variables[4] (UnusedUnderThisBase_5846) || MUL || RETURN",
                          "displayLines": "((((DanHengPT_Attack * UnusedUnderThisBase_5065) + UnusedUnderThisBase_5093) * DanHengPT_ExtraShieldUPRatio) * UnusedUnderThisBase_5846)",
                          "constants": [],
                          "variables": [
                            "DanHengPT_Attack",
                            "UnusedUnderThisBase_5065",
                            "UnusedUnderThisBase_5093",
                            "DanHengPT_ExtraShieldUPRatio",
                            "UnusedUnderThisBase_5846"
                          ]
                        },
                        "MDF_MaxShieldRatio": {
                          "operator": "Variables[0] (UnusedUnderThisBase_5083) || RETURN",
                          "displayLines": "UnusedUnderThisBase_5083",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_5083"
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
                "operator": "Variables[0] (UnusedUnderThisBase_6532) || RETURN",
                "displayLines": "UnusedUnderThisBase_6532",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_6532"
                ]
              },
              "valuePerStack": {
                "MDF_DanHengPT_InitShieldValue": {
                  "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_5067) || MUL || Variables[2] (UnusedUnderThisBase_5063) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || RETURN",
                  "displayLines": "(((DanHengPT_Attack * UnusedUnderThisBase_5067) + UnusedUnderThisBase_5063) * DanHengPT_ExtraShieldUPRatio)",
                  "constants": [],
                  "variables": [
                    "DanHengPT_Attack",
                    "UnusedUnderThisBase_5067",
                    "UnusedUnderThisBase_5063",
                    "DanHengPT_ExtraShieldUPRatio"
                  ]
                },
                "MDF_MaxShieldRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_5083) || RETURN",
                  "displayLines": "UnusedUnderThisBase_5083",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_5083"
                  ]
                },
                "MDF_MainTarget": 1
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "PointB3"
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
                        "operator": "Variables[0] (UnusedUnderThisBase_6532) || RETURN",
                        "displayLines": "UnusedUnderThisBase_6532",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_6532"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DanHengPT_InitShieldValue": {
                          "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_5065) || MUL || Variables[2] (UnusedUnderThisBase_5093) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || RETURN",
                          "displayLines": "(((DanHengPT_Attack * UnusedUnderThisBase_5065) + UnusedUnderThisBase_5093) * DanHengPT_ExtraShieldUPRatio)",
                          "constants": [],
                          "variables": [
                            "DanHengPT_Attack",
                            "UnusedUnderThisBase_5065",
                            "UnusedUnderThisBase_5093",
                            "DanHengPT_ExtraShieldUPRatio"
                          ]
                        },
                        "MDF_MaxShieldRatio": {
                          "operator": "Variables[0] (UnusedUnderThisBase_5083) || RETURN",
                          "displayLines": "UnusedUnderThisBase_5083",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_5083"
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
}