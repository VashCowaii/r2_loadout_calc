const configAbility = {
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
      "functionName": "DanHengPT_AddShield",
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
          "modifier": "DanHengPT_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
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
      "functionName": "DanHengPT_Ability03_AddShield",
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
          "modifier": "DanHengPT_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
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
      "functionName": "DanHengPT_BE_AddShield",
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
                "modifier": "DanHengPT_Eidolon2_LastBoostEnergyFlag"
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
              "modifier": "DanHengPT_Eidolon2_LastBoostEnergyFlag"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "DanHengPT_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
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
                      "modifier": "DanHengPT_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
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
              "modifier": "DanHengPT_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
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
                      "modifier": "DanHengPT_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
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
}