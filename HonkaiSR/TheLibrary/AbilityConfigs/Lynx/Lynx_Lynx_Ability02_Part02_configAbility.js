const configAbility = {
  "fileName": "Lynx_Lynx_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "target": "Caster",
      "variableName": "MDF_Lynx_MaxHpValue",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": "Caster",
      "variableName": "MDF_Lynx_MaxHpConvert",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
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
            "name": "OR",
            "conditionList": [
              {
                "name": "Target is Pathstrider",
                "path": [
                  "Destruction"
                ],
                "target": "Single Target (Primary)"
              },
              {
                "name": "Target is Pathstrider",
                "path": [
                  "Preservation"
                ],
                "target": "Single Target (Primary)"
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Single Target (Primary)",
              "modifier": "Lynx_HPAddedRatio02[<span class=\"descriptionNumberColor\">Survival Response</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_Lynx_MaxHpValue) || Variables[1] (MDF_Lynx_MaxHpConvert) || SUB || Variables[2] (0.075) || Variables[3] (0.06) || ADD || MUL || Variables[4] (200) || ADD || RETURN",
                  "displayLines": "(((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * (0.075 + 0.06)) + 200)",
                  "constants": [],
                  "variables": [
                    "MDF_Lynx_MaxHpValue",
                    "MDF_Lynx_MaxHpConvert",
                    0.075,
                    0.06,
                    200
                  ]
                },
                "MDF_HPAddValueConvert": {
                  "operator": "Variables[0] (MDF_Lynx_MaxHpValue) || Variables[1] (MDF_Lynx_MaxHpConvert) || SUB || Variables[2] (0.075) || Variables[3] (0.06) || ADD || MUL || RETURN",
                  "displayLines": "((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * (0.075 + 0.06))",
                  "constants": [],
                  "variables": [
                    "MDF_Lynx_MaxHpValue",
                    "MDF_Lynx_MaxHpConvert",
                    0.075,
                    0.06
                  ]
                },
                "MDF_HPDelta": {
                  "operator": "Variables[0] (200) || RETURN",
                  "displayLines": "200",
                  "constants": [],
                  "variables": [
                    200
                  ]
                },
                "MDF_AggroUp": {
                  "operator": "Variables[0] (5) || RETURN",
                  "displayLines": "5",
                  "constants": [],
                  "variables": [
                    5
                  ]
                },
                "MDF_AddStatusResistance": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Single Target (Primary)",
              "modifier": "Lynx_HPAddedRatio02[<span class=\"descriptionNumberColor\">Survival Response</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_Lynx_MaxHpValue) || Variables[1] (MDF_Lynx_MaxHpConvert) || SUB || Variables[2] (0.075) || Variables[3] (0.06) || ADD || MUL || Variables[4] (200) || ADD || RETURN",
                  "displayLines": "(((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * (0.075 + 0.06)) + 200)",
                  "constants": [],
                  "variables": [
                    "MDF_Lynx_MaxHpValue",
                    "MDF_Lynx_MaxHpConvert",
                    0.075,
                    0.06,
                    200
                  ]
                },
                "MDF_HPAddValueConvert": {
                  "operator": "Variables[0] (MDF_Lynx_MaxHpValue) || Variables[1] (MDF_Lynx_MaxHpConvert) || SUB || Variables[2] (0.075) || Variables[3] (0.06) || ADD || MUL || RETURN",
                  "displayLines": "((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * (0.075 + 0.06))",
                  "constants": [],
                  "variables": [
                    "MDF_Lynx_MaxHpValue",
                    "MDF_Lynx_MaxHpConvert",
                    0.075,
                    0.06
                  ]
                },
                "MDF_HPDelta": {
                  "operator": "Variables[0] (200) || RETURN",
                  "displayLines": "200",
                  "constants": [],
                  "variables": [
                    200
                  ]
                },
                "MDF_AggroUp": 0,
                "MDF_AddStatusResistance": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
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
            "name": "OR",
            "conditionList": [
              {
                "name": "Target is Pathstrider",
                "path": [
                  "Destruction"
                ],
                "target": "Single Target (Primary)"
              },
              {
                "name": "Target is Pathstrider",
                "path": [
                  "Preservation"
                ],
                "target": "Single Target (Primary)"
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Single Target (Primary)",
              "modifier": "Lynx_HPAddedRatio01[<span class=\"descriptionNumberColor\">Survival Response</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_Lynx_MaxHpValue) || Variables[1] (MDF_Lynx_MaxHpConvert) || SUB || Variables[2] (0.075) || MUL || Variables[3] (200) || ADD || RETURN",
                  "displayLines": "(((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * 0.075) + 200)",
                  "constants": [],
                  "variables": [
                    "MDF_Lynx_MaxHpValue",
                    "MDF_Lynx_MaxHpConvert",
                    0.075,
                    200
                  ]
                },
                "MDF_HPAddValueConvert": {
                  "operator": "Variables[0] (MDF_Lynx_MaxHpValue) || Variables[1] (MDF_Lynx_MaxHpConvert) || SUB || Variables[2] (0.075) || MUL || RETURN",
                  "displayLines": "((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * 0.075)",
                  "constants": [],
                  "variables": [
                    "MDF_Lynx_MaxHpValue",
                    "MDF_Lynx_MaxHpConvert",
                    0.075
                  ]
                },
                "MDF_HPDelta": {
                  "operator": "Variables[0] (200) || RETURN",
                  "displayLines": "200",
                  "constants": [],
                  "variables": [
                    200
                  ]
                },
                "MDF_AggroUp": {
                  "operator": "Variables[0] (5) || RETURN",
                  "displayLines": "5",
                  "constants": [],
                  "variables": [
                    5
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Single Target (Primary)",
              "modifier": "Lynx_HPAddedRatio01[<span class=\"descriptionNumberColor\">Survival Response</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_Lynx_MaxHpValue) || Variables[1] (MDF_Lynx_MaxHpConvert) || SUB || Variables[2] (0.075) || MUL || Variables[3] (200) || ADD || RETURN",
                  "displayLines": "(((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * 0.075) + 200)",
                  "constants": [],
                  "variables": [
                    "MDF_Lynx_MaxHpValue",
                    "MDF_Lynx_MaxHpConvert",
                    0.075,
                    200
                  ]
                },
                "MDF_HPAddValueConvert": {
                  "operator": "Variables[0] (MDF_Lynx_MaxHpValue) || Variables[1] (MDF_Lynx_MaxHpConvert) || SUB || Variables[2] (0.075) || MUL || RETURN",
                  "displayLines": "((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * 0.075)",
                  "constants": [],
                  "variables": [
                    "MDF_Lynx_MaxHpValue",
                    "MDF_Lynx_MaxHpConvert",
                    0.075
                  ]
                },
                "MDF_HPDelta": {
                  "operator": "Variables[0] (200) || RETURN",
                  "displayLines": "200",
                  "constants": [],
                  "variables": [
                    200
                  ]
                },
                "MDF_AggroUp": 0
              }
            }
          ]
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
          "to": "Single Target (Primary)",
          "modifier": "Lynx_Eidolon2_Resist[<span class=\"descriptionNumberColor\">Debuff RES</span>]"
        }
      ]
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
          "modifier": "Lynx_Eidolon4_AddAttackRatio[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "duration": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_Lynx_MaxHpValue) || Variables[1] (MDF_Lynx_MaxHpConvert) || SUB || Variables[2] (0.03) || MUL || RETURN",
              "displayLines": "((MDF_Lynx_MaxHpValue - MDF_Lynx_MaxHpConvert) * 0.03)",
              "constants": [],
              "variables": [
                "MDF_Lynx_MaxHpValue",
                "MDF_Lynx_MaxHpConvert",
                0.03
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Heal",
      "target": "Single Target (Primary)",
      "healPercent": {
        "operator": "Variables[0] (0.12) || RETURN",
        "displayLines": "0.12",
        "constants": [],
        "variables": [
          0.12
        ]
      },
      "healFlat": {
        "operator": "Variables[0] (320) || RETURN",
        "displayLines": "320",
        "constants": [],
        "variables": [
          320
        ]
      },
      "formula": "Heal from Healer's MaxHP"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Survival in the Extreme"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Single Target (Primary)",
          "modifier": "Lynx_HOT_HealByMaxHp[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
          "duration": {
            "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
            "displayLines": "(2 + 1)",
            "constants": [],
            "variables": [
              2,
              1
            ]
          },
          "valuePerStack": {
            "MDF_HOT_HOTPercentage": {
              "operator": "Variables[0] (0.036) || RETURN",
              "displayLines": "0.036",
              "constants": [],
              "variables": [
                0.036
              ]
            },
            "MDF_HOT_HealValue": {
              "operator": "Variables[0] (96) || RETURN",
              "displayLines": "96",
              "constants": [],
              "variables": [
                96
              ]
            },
            "MDF_HOT_AggroUp_HOTPercentage": {
              "operator": "Variables[0] (0.044999998) || RETURN",
              "displayLines": "0.044999998",
              "constants": [],
              "variables": [
                0.044999998
              ]
            },
            "MDF_HOT_AggroUp_HealValue": {
              "operator": "Variables[0] (120) || RETURN",
              "displayLines": "120",
              "constants": [],
              "variables": [
                120
              ]
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Single Target (Primary)",
          "modifier": "Lynx_HOT_HealByMaxHp[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_HOT_HOTPercentage": {
              "operator": "Variables[0] (0.036) || RETURN",
              "displayLines": "0.036",
              "constants": [],
              "variables": [
                0.036
              ]
            },
            "MDF_HOT_HealValue": {
              "operator": "Variables[0] (96) || RETURN",
              "displayLines": "96",
              "constants": [],
              "variables": [
                96
              ]
            },
            "MDF_HOT_AggroUp_HOTPercentage": {
              "operator": "Variables[0] (0.044999998) || RETURN",
              "displayLines": "0.044999998",
              "constants": [],
              "variables": [
                0.044999998
              ]
            },
            "MDF_HOT_AggroUp_HealValue": {
              "operator": "Variables[0] (120) || RETURN",
              "displayLines": "120",
              "constants": [],
              "variables": [
                120
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": "Caster",
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Current Action Holder Is",
        "target": "Single Target (Primary)"
      }
    },
    {
      "name": "Find New Target",
      "from": "Skill Target List",
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Target",
        "target": "Use Prior Target(s) Defined",
        "target2": "Caster",
        "invertCondition": true
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}