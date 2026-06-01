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
            "operator": "Variables[0] (UnusedUnderThisBase_13145) || RETURN",
            "displayLines": "UnusedUnderThisBase_13145",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_13145"
            ]
          },
          "valuePerStack": {
            "MDF_DanHengPT_InitShieldValue": {
              "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_4602) || MUL || Variables[2] (UnusedUnderThisBase_4592) || ADD || RETURN",
              "displayLines": "((DanHengPT_Attack * UnusedUnderThisBase_4602) + UnusedUnderThisBase_4592)",
              "constants": [],
              "variables": [
                "DanHengPT_Attack",
                "UnusedUnderThisBase_4602",
                "UnusedUnderThisBase_4592"
              ]
            },
            "MDF_MaxShieldRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_4604) || RETURN",
              "displayLines": "UnusedUnderThisBase_4604",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_4604"
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
            "operator": "Variables[0] (UnusedUnderThisBase_5541) || RETURN",
            "displayLines": "UnusedUnderThisBase_5541",
            "constants": [],
            "variables": [
              "UnusedUnderThisBase_5541"
            ]
          },
          "valuePerStack": {
            "MDF_DanHengPT_InitShieldValue": {
              "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_4607) || MUL || Variables[2] (UnusedUnderThisBase_4608) || ADD || RETURN",
              "displayLines": "((DanHengPT_Attack * UnusedUnderThisBase_4607) + UnusedUnderThisBase_4608)",
              "constants": [],
              "variables": [
                "DanHengPT_Attack",
                "UnusedUnderThisBase_4607",
                "UnusedUnderThisBase_4608"
              ]
            },
            "MDF_MaxShieldRatio": {
              "operator": "Variables[0] (UnusedUnderThisBase_4604) || RETURN",
              "displayLines": "UnusedUnderThisBase_4604",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_4604"
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
                "operator": "Variables[0] (UnusedUnderThisBase_6051) || RETURN",
                "displayLines": "UnusedUnderThisBase_6051",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_6051"
                ]
              },
              "valuePerStack": {
                "MDF_DanHengPT_InitShieldValue": {
                  "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_4588) || MUL || Variables[2] (UnusedUnderThisBase_4584) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || Variables[4] (UnusedUnderThisBase_5365) || MUL || RETURN",
                  "displayLines": "((((DanHengPT_Attack * UnusedUnderThisBase_4588) + UnusedUnderThisBase_4584) * DanHengPT_ExtraShieldUPRatio) * UnusedUnderThisBase_5365)",
                  "constants": [],
                  "variables": [
                    "DanHengPT_Attack",
                    "UnusedUnderThisBase_4588",
                    "UnusedUnderThisBase_4584",
                    "DanHengPT_ExtraShieldUPRatio",
                    "UnusedUnderThisBase_5365"
                  ]
                },
                "MDF_MaxShieldRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_4604) || RETURN",
                  "displayLines": "UnusedUnderThisBase_4604",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_4604"
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
                        "operator": "Variables[0] (UnusedUnderThisBase_6051) || RETURN",
                        "displayLines": "UnusedUnderThisBase_6051",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_6051"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DanHengPT_InitShieldValue": {
                          "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_4586) || MUL || Variables[2] (UnusedUnderThisBase_4614) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || Variables[4] (UnusedUnderThisBase_5365) || MUL || RETURN",
                          "displayLines": "((((DanHengPT_Attack * UnusedUnderThisBase_4586) + UnusedUnderThisBase_4614) * DanHengPT_ExtraShieldUPRatio) * UnusedUnderThisBase_5365)",
                          "constants": [],
                          "variables": [
                            "DanHengPT_Attack",
                            "UnusedUnderThisBase_4586",
                            "UnusedUnderThisBase_4614",
                            "DanHengPT_ExtraShieldUPRatio",
                            "UnusedUnderThisBase_5365"
                          ]
                        },
                        "MDF_MaxShieldRatio": {
                          "operator": "Variables[0] (UnusedUnderThisBase_4604) || RETURN",
                          "displayLines": "UnusedUnderThisBase_4604",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_4604"
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
                "operator": "Variables[0] (UnusedUnderThisBase_6051) || RETURN",
                "displayLines": "UnusedUnderThisBase_6051",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_6051"
                ]
              },
              "valuePerStack": {
                "MDF_DanHengPT_InitShieldValue": {
                  "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_4588) || MUL || Variables[2] (UnusedUnderThisBase_4584) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || RETURN",
                  "displayLines": "(((DanHengPT_Attack * UnusedUnderThisBase_4588) + UnusedUnderThisBase_4584) * DanHengPT_ExtraShieldUPRatio)",
                  "constants": [],
                  "variables": [
                    "DanHengPT_Attack",
                    "UnusedUnderThisBase_4588",
                    "UnusedUnderThisBase_4584",
                    "DanHengPT_ExtraShieldUPRatio"
                  ]
                },
                "MDF_MaxShieldRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_4604) || RETURN",
                  "displayLines": "UnusedUnderThisBase_4604",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_4604"
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
                        "operator": "Variables[0] (UnusedUnderThisBase_6051) || RETURN",
                        "displayLines": "UnusedUnderThisBase_6051",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_6051"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DanHengPT_InitShieldValue": {
                          "operator": "Variables[0] (DanHengPT_Attack) || Variables[1] (UnusedUnderThisBase_4586) || MUL || Variables[2] (UnusedUnderThisBase_4614) || ADD || Variables[3] (DanHengPT_ExtraShieldUPRatio) || MUL || RETURN",
                          "displayLines": "(((DanHengPT_Attack * UnusedUnderThisBase_4586) + UnusedUnderThisBase_4614) * DanHengPT_ExtraShieldUPRatio)",
                          "constants": [],
                          "variables": [
                            "DanHengPT_Attack",
                            "UnusedUnderThisBase_4586",
                            "UnusedUnderThisBase_4614",
                            "DanHengPT_ExtraShieldUPRatio"
                          ]
                        },
                        "MDF_MaxShieldRatio": {
                          "operator": "Variables[0] (UnusedUnderThisBase_4604) || RETURN",
                          "displayLines": "UnusedUnderThisBase_4604",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_4604"
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