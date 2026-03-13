const configAbility = {
  "fileName": "DazzledbyaFloweryWorld_Ability23053",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1928540134\">LC_23053_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1225919884\">LC_23053_Sub02_Halo</a>[<span class=\"descriptionNumberColor\">Stream Promo</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "description": "Elation increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Elation Boost",
      "statusName": "Stream Promo"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-341531798\">LC_23053_Sub02_Caster</a>",
      "stackType": "RetainGlobalLatestUnique",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1225919884\">LC_23053_Sub02_Halo</a>[<span class=\"descriptionNumberColor\">Stream Promo</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
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
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-62126263\">LC_23053_Sub02</a>[<span class=\"descriptionNumberColor\">Center of Attention</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Elation DMG"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(-MDF_PropertyValue2 * _Layer)"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "_Layer",
              "multiplier": 1
            }
          ]
        }
      ],
      "description": "Each stack enables the Elation DMG dealt to ignore <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span> of the target's DEF.",
      "type": "Buff",
      "effectName": "Ignore Defense",
      "statusName": "Center of Attention"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1180574534\">LC_23053_Sub01_LevelEntity</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Matching Path",
              "target": null,
              "matchToPathFrom": [
                "Elation"
              ],
              "variableName": "_Elation_PreviousCount"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Elation_PreviousCount",
              "value": {
                "operator": "Variables[0] (MIN) || Variables[1] (_Elation_PreviousCount) || Variables[2] (AbilityEquip_P3_BPMaxAddValueMax) || Variables[3] (AbilityEquip_P2_BPMaxAddValue) || DIV || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(_Elation_PreviousCount, (AbilityEquip_P3_BPMaxAddValueMax / AbilityEquip_P2_BPMaxAddValue))",
                "constants": [],
                "variables": [
                  "MIN",
                  "_Elation_PreviousCount",
                  "AbilityEquip_P3_BPMaxAddValueMax",
                  "AbilityEquip_P2_BPMaxAddValue"
                ]
              }
            },
            {
              "name": "Change Skill Point Max",
              "function": "Add",
              "value": {
                "operator": "Variables[0] (AbilityEquip_P2_BPMaxAddValue) || Variables[1] (_Elation_PreviousCount) || MUL || RETURN",
                "displayLines": "(AbilityEquip_P2_BPMaxAddValue * _Elation_PreviousCount)",
                "constants": [],
                "variables": [
                  "AbilityEquip_P2_BPMaxAddValue",
                  "_Elation_PreviousCount"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Skill Point Max",
              "function": "Add",
              "value": {
                "operator": "Variables[0] (AbilityEquip_P2_BPMaxAddValue) || INVERT || Variables[1] (_Elation_PreviousCount) || MUL || RETURN",
                "displayLines": "(-AbilityEquip_P2_BPMaxAddValue * _Elation_PreviousCount)",
                "constants": [],
                "variables": [
                  "AbilityEquip_P2_BPMaxAddValue",
                  "_Elation_PreviousCount"
                ]
              }
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
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": null,
                "compareType": "<=",
                "value2": 0,
                "valueType": "Layer"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Character Path Change [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable with Matching Path",
              "target": null,
              "matchToPathFrom": [
                "Elation"
              ],
              "variableName": "_Elation_CurrentCount"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Elation_CurrentCount",
              "value": {
                "operator": "Variables[0] (MIN) || Variables[1] (_Elation_CurrentCount) || Variables[2] (AbilityEquip_P3_BPMaxAddValueMax) || Variables[3] (AbilityEquip_P2_BPMaxAddValue) || DIV || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(_Elation_CurrentCount, (AbilityEquip_P3_BPMaxAddValueMax / AbilityEquip_P2_BPMaxAddValue))",
                "constants": [],
                "variables": [
                  "MIN",
                  "_Elation_CurrentCount",
                  "AbilityEquip_P3_BPMaxAddValueMax",
                  "AbilityEquip_P2_BPMaxAddValue"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Elation_DeltaCount",
              "value": {
                "operator": "Variables[0] (_Elation_CurrentCount) || Variables[1] (_Elation_PreviousCount) || SUB || RETURN",
                "displayLines": "(_Elation_CurrentCount - _Elation_PreviousCount)",
                "constants": [],
                "variables": [
                  "_Elation_CurrentCount",
                  "_Elation_PreviousCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Elation_PreviousCount",
              "value": {
                "operator": "Variables[0] (_Elation_CurrentCount) || RETURN",
                "displayLines": "_Elation_CurrentCount",
                "constants": [],
                "variables": [
                  "_Elation_CurrentCount"
                ]
              }
            },
            {
              "name": "Change Skill Point Max",
              "function": "Add",
              "value": {
                "operator": "Variables[0] (AbilityEquip_P2_BPMaxAddValue) || Variables[1] (_Elation_DeltaCount) || MUL || RETURN",
                "displayLines": "(AbilityEquip_P2_BPMaxAddValue * _Elation_DeltaCount)",
                "constants": [],
                "variables": [
                  "AbilityEquip_P2_BPMaxAddValue",
                  "_Elation_DeltaCount"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1928540134\">LC_23053_Main</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1180574534\">LC_23053_Sub01_LevelEntity</a>",
              "addStacksPerTrigger": -1,
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_BPCount_Sum",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1180574534\">LC_23053_Sub01_LevelEntity</a>",
              "valuePerStack": {
                "AbilityEquip_P2_BPMaxAddValue": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "AbilityEquip_P3_BPMaxAddValueMax": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                }
              },
              "addStacksPerTrigger": 1,
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "eventTrigger": "Skill Point Changes",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Change_In_Current_Value",
                    "compareType": "<",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with SkillPoint Changes",
                  "variableName": "_BPChange"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_BPCount_Sum",
                  "value": {
                    "operator": "Variables[0] (_BPCount_Sum) || Variables[1] (ABS) || Variables[2] (_BPChange) || PARAM_1 || FUNCTION || ADD || RETURN",
                    "displayLines": "(_BPCount_Sum + &nbsp;<span class=\"descriptionFunctionColor\">ABS</span>(_BPChange))",
                    "constants": [],
                    "variables": [
                      "_BPCount_Sum",
                      "ABS",
                      "_BPChange"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_BPCount_Sum",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (4) || RETURN",
                      "displayLines": "4",
                      "constants": [],
                      "variables": [
                        4
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-341531798\">LC_23053_Sub02_Caster</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-62126263\">LC_23053_Sub02</a>[<span class=\"descriptionNumberColor\">Center of Attention</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "<a class=\"gModGreen\" id=\"-62126263\">LC_23053_Sub02</a>[<span class=\"descriptionNumberColor\">Center of Attention</span>]",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (4) || RETURN",
                          "displayLines": "4",
                          "constants": [],
                          "variables": [
                            4
                          ]
                        },
                        "valueType": "Layer"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-62126263\">LC_23053_Sub02</a>[<span class=\"descriptionNumberColor\">Center of Attention</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (4) || RETURN",
                        "displayLines": "4",
                        "constants": [],
                        "variables": [
                          4
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (0.05) || RETURN",
                          "displayLines": "0.05",
                          "constants": [],
                          "variables": [
                            0.05
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_BPChange) || INVERT || RETURN",
                        "displayLines": "-_BPChange",
                        "constants": [],
                        "variables": [
                          "_BPChange"
                        ]
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
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's CRIT DMG by #1[i]%. While the wearer is on the field, for every 1 Elation character in the team, increases the Skill Point upper limit by #2[i], up to a max increase of #3[i]. For every 1 Skill Point the wearer consumes, enables the Elation DMG dealt by this unit to ignore #6[f1]% of enemy targets' DEF, stacking up to #5[i] times. If #7[i] or more Skill Points are consumed in the same turn, the wearer gains \"Stream Promo,\" which increases all allies' Elation by #4[i]%. Light Cone effects of the same type cannot stack.",
  "params": [
    [
      0.48,
      1,
      3,
      0.2,
      4,
      0.05,
      4
    ],
    [
      0.56,
      1,
      3,
      0.24,
      4,
      0.06,
      4
    ],
    [
      0.64,
      1,
      3,
      0.28,
      4,
      0.07,
      4
    ],
    [
      0.72,
      1,
      3,
      0.32,
      4,
      0.08,
      4
    ],
    [
      0.8,
      1,
      3,
      0.36,
      4,
      0.09,
      4
    ]
  ]
}