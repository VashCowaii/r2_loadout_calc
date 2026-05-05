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
            "operator": "Variables[0] ([object Object]) || RETURN",
            "displayLines": "[object Object]",
            "constants": [],
            "variables": [
              {}
            ]
          },
          "valuePerStack": {
            "MDF_DanHengPT_InitShieldValue": {
              "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] ([object Object]) || MUL || Variables[2] ([object Object]) || ADD || RETURN",
              "displayLines": "((DanHengPT_Attack * [object Object]) + [object Object])",
              "constants": [],
              "variables": [
                "DanHengPT_Attack",
                {},
                {}
              ]
            },
            "MDF_MaxShieldRatio": {
              "operator": "Variables[0] ([object Object]) || RETURN",
              "displayLines": "[object Object]",
              "constants": [],
              "variables": [
                {}
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
            "operator": "Variables[0] ([object Object]) || RETURN",
            "displayLines": "[object Object]",
            "constants": [],
            "variables": [
              {}
            ]
          },
          "valuePerStack": {
            "MDF_DanHengPT_InitShieldValue": {
              "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] ([object Object]) || MUL || Variables[2] ([object Object]) || ADD || RETURN",
              "displayLines": "((DanHengPT_Attack * [object Object]) + [object Object])",
              "constants": [],
              "variables": [
                "DanHengPT_Attack",
                {},
                {}
              ]
            },
            "MDF_MaxShieldRatio": {
              "operator": "Variables[0] ([object Object]) || RETURN",
              "displayLines": "[object Object]",
              "constants": [],
              "variables": [
                {}
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
                "operator": "Variables[0] ([object Object]) || RETURN",
                "displayLines": "[object Object]",
                "constants": [],
                "variables": [
                  {}
                ]
              },
              "valuePerStack": {
                "MDF_DanHengPT_InitShieldValue": {
                  "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (#SkillRank_Rank02_P3_ShieldRatio) || MUL || Variables[2] (DanHengPT_IsFreeAction) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || Variables[4] ([object Object]) || MUL || RETURN",
                  "displayLines": "((((DanHengPT_Attack * #SkillRank_Rank02_P3_ShieldRatio) + DanHengPT_IsFreeAction) * DanHengPT_ExtraShieldUPRatio) * [object Object])",
                  "constants": [],
                  "variables": [
                    "DanHengPT_Attack",
                    "#SkillRank_Rank02_P3_ShieldRatio",
                    "DanHengPT_IsFreeAction",
                    "DanHengPT_ExtraShieldUPRatio",
                    {}
                  ]
                },
                "MDF_MaxShieldRatio": {
                  "operator": "Variables[0] ([object Object]) || RETURN",
                  "displayLines": "[object Object]",
                  "constants": [],
                  "variables": [
                    {}
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
                        "operator": "Variables[0] ([object Object]) || RETURN",
                        "displayLines": "[object Object]",
                        "constants": [],
                        "variables": [
                          {}
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DanHengPT_InitShieldValue": {
                          "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] ([object Object]) || MUL || Variables[2] ([object Object]) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || Variables[4] ([object Object]) || MUL || RETURN",
                          "displayLines": "((((DanHengPT_Attack * [object Object]) + [object Object]) * DanHengPT_ExtraShieldUPRatio) * [object Object])",
                          "constants": [],
                          "variables": [
                            "DanHengPT_Attack",
                            {},
                            {},
                            "DanHengPT_ExtraShieldUPRatio",
                            {}
                          ]
                        },
                        "MDF_MaxShieldRatio": {
                          "operator": "Variables[0] ([object Object]) || RETURN",
                          "displayLines": "[object Object]",
                          "constants": [],
                          "variables": [
                            {}
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
                "operator": "Variables[0] ([object Object]) || RETURN",
                "displayLines": "[object Object]",
                "constants": [],
                "variables": [
                  {}
                ]
              },
              "valuePerStack": {
                "MDF_DanHengPT_InitShieldValue": {
                  "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (#SkillRank_Rank02_P3_ShieldRatio) || MUL || Variables[2] (DanHengPT_IsFreeAction) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || RETURN",
                  "displayLines": "(((DanHengPT_Attack * #SkillRank_Rank02_P3_ShieldRatio) + DanHengPT_IsFreeAction) * DanHengPT_ExtraShieldUPRatio)",
                  "constants": [],
                  "variables": [
                    "DanHengPT_Attack",
                    "#SkillRank_Rank02_P3_ShieldRatio",
                    "DanHengPT_IsFreeAction",
                    "DanHengPT_ExtraShieldUPRatio"
                  ]
                },
                "MDF_MaxShieldRatio": {
                  "operator": "Variables[0] ([object Object]) || RETURN",
                  "displayLines": "[object Object]",
                  "constants": [],
                  "variables": [
                    {}
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
                        "operator": "Variables[0] ([object Object]) || RETURN",
                        "displayLines": "[object Object]",
                        "constants": [],
                        "variables": [
                          {}
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DanHengPT_InitShieldValue": {
                          "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] ([object Object]) || MUL || Variables[2] ([object Object]) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || RETURN",
                          "displayLines": "(((DanHengPT_Attack * [object Object]) + [object Object]) * DanHengPT_ExtraShieldUPRatio)",
                          "constants": [],
                          "variables": [
                            "DanHengPT_Attack",
                            {},
                            {},
                            "DanHengPT_ExtraShieldUPRatio"
                          ]
                        },
                        "MDF_MaxShieldRatio": {
                          "operator": "Variables[0] ([object Object]) || RETURN",
                          "displayLines": "[object Object]",
                          "constants": [],
                          "variables": [
                            {}
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