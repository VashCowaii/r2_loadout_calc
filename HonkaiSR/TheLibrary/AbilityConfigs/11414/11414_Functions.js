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
            "operator": "Variables[0] (UnusedUnderThisBase_14001) || RETURN",
            "displayLines": "UnusedUnderThisBase_14001",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_14001"
            ]
          },
          "valuePerStack": {
            "MDF_DanHengPT_InitShieldValue": {
              "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_4994) || MUL || Variables[2] (UnusedUnderThisBase_4984) || ADD || RETURN",
              "displayLines": "((DanHengPT_Attack * UnusedUnderThisBase_4994) + UnusedUnderThisBase_4984)",
              "constants": [],
              "variables": [
                "DanHengPT_Attack",
                "UnusedUnderThisBase_4994",
                "UnusedUnderThisBase_4984"
              ]
            },
            "MDF_MaxShieldRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_4996) || RETURN",
              "displayLines": "UnusedUnderThisBase_4996",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_4996"
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
            "operator": "Variables[0] (UnusedUnderThisBase_5935) || RETURN",
            "displayLines": "UnusedUnderThisBase_5935",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_5935"
            ]
          },
          "valuePerStack": {
            "MDF_DanHengPT_InitShieldValue": {
              "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_4999) || MUL || Variables[2] (UnusedUnderThisBase_5000) || ADD || RETURN",
              "displayLines": "((DanHengPT_Attack * UnusedUnderThisBase_4999) + UnusedUnderThisBase_5000)",
              "constants": [],
              "variables": [
                "DanHengPT_Attack",
                "UnusedUnderThisBase_4999",
                "UnusedUnderThisBase_5000"
              ]
            },
            "MDF_MaxShieldRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_4996) || RETURN",
              "displayLines": "UnusedUnderThisBase_4996",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_4996"
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
                "operator": "Variables[0] (UnusedUnderThisBase_6445) || RETURN",
                "displayLines": "UnusedUnderThisBase_6445",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_6445"
                ]
              },
              "valuePerStack": {
                "MDF_DanHengPT_InitShieldValue": {
                  "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_4980) || MUL || Variables[2] (UnusedUnderThisBase_4976) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || Variables[4] (UnusedUnderThisBase_5759) || MUL || RETURN",
                  "displayLines": "((((DanHengPT_Attack * UnusedUnderThisBase_4980) + UnusedUnderThisBase_4976) * DanHengPT_ExtraShieldUPRatio) * UnusedUnderThisBase_5759)",
                  "constants": [],
                  "variables": [
                    "DanHengPT_Attack",
                    "UnusedUnderThisBase_4980",
                    "UnusedUnderThisBase_4976",
                    "DanHengPT_ExtraShieldUPRatio",
                    "UnusedUnderThisBase_5759"
                  ]
                },
                "MDF_MaxShieldRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_4996) || RETURN",
                  "displayLines": "UnusedUnderThisBase_4996",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_4996"
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
                        "operator": "Variables[0] (UnusedUnderThisBase_6445) || RETURN",
                        "displayLines": "UnusedUnderThisBase_6445",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_6445"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DanHengPT_InitShieldValue": {
                          "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_4978) || MUL || Variables[2] (UnusedUnderThisBase_5006) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || Variables[4] (UnusedUnderThisBase_5759) || MUL || RETURN",
                          "displayLines": "((((DanHengPT_Attack * UnusedUnderThisBase_4978) + UnusedUnderThisBase_5006) * DanHengPT_ExtraShieldUPRatio) * UnusedUnderThisBase_5759)",
                          "constants": [],
                          "variables": [
                            "DanHengPT_Attack",
                            "UnusedUnderThisBase_4978",
                            "UnusedUnderThisBase_5006",
                            "DanHengPT_ExtraShieldUPRatio",
                            "UnusedUnderThisBase_5759"
                          ]
                        },
                        "MDF_MaxShieldRatio": {
                          "operator": "Variables[0] (UnusedUnderThisBase_4996) || RETURN",
                          "displayLines": "UnusedUnderThisBase_4996",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_4996"
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
                "operator": "Variables[0] (UnusedUnderThisBase_6445) || RETURN",
                "displayLines": "UnusedUnderThisBase_6445",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_6445"
                ]
              },
              "valuePerStack": {
                "MDF_DanHengPT_InitShieldValue": {
                  "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_4980) || MUL || Variables[2] (UnusedUnderThisBase_4976) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || RETURN",
                  "displayLines": "(((DanHengPT_Attack * UnusedUnderThisBase_4980) + UnusedUnderThisBase_4976) * DanHengPT_ExtraShieldUPRatio)",
                  "constants": [],
                  "variables": [
                    "DanHengPT_Attack",
                    "UnusedUnderThisBase_4980",
                    "UnusedUnderThisBase_4976",
                    "DanHengPT_ExtraShieldUPRatio"
                  ]
                },
                "MDF_MaxShieldRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_4996) || RETURN",
                  "displayLines": "UnusedUnderThisBase_4996",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_4996"
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
                        "operator": "Variables[0] (UnusedUnderThisBase_6445) || RETURN",
                        "displayLines": "UnusedUnderThisBase_6445",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_6445"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DanHengPT_InitShieldValue": {
                          "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_4978) || MUL || Variables[2] (UnusedUnderThisBase_5006) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || RETURN",
                          "displayLines": "(((DanHengPT_Attack * UnusedUnderThisBase_4978) + UnusedUnderThisBase_5006) * DanHengPT_ExtraShieldUPRatio)",
                          "constants": [],
                          "variables": [
                            "DanHengPT_Attack",
                            "UnusedUnderThisBase_4978",
                            "UnusedUnderThisBase_5006",
                            "DanHengPT_ExtraShieldUPRatio"
                          ]
                        },
                        "MDF_MaxShieldRatio": {
                          "operator": "Variables[0] (UnusedUnderThisBase_4996) || RETURN",
                          "displayLines": "UnusedUnderThisBase_4996",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_4996"
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