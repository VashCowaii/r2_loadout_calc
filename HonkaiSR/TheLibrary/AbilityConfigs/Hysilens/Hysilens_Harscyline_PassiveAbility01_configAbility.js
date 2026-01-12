const configAbility = {
  "fileName": "Hysilens_Harscyline_PassiveAbility01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "Skill03_HaloLifeTime",
      "value": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": {
        "operator": "Variables[0] (Skill03_HaloLifeTime) || RETURN",
        "displayLines": "Skill03_HaloLifeTime",
        "constants": [],
        "variables": [
          "Skill03_HaloLifeTime"
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill03_TriggerDotMaxCount",
          "value": {
            "operator": "Variables[0] (12) || RETURN",
            "displayLines": "12",
            "constants": [],
            "variables": [
              12
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill03_TriggerDotMaxCount",
          "value": {
            "operator": "Variables[0] (8) || RETURN",
            "displayLines": "8",
            "constants": [],
            "variables": [
              8
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill03_DOTDamagePercentage",
          "value": {
            "operator": "Variables[0] (0.8) || Variables[1] (0.2) || ADD || RETURN",
            "displayLines": "(0.8 + 0.2)",
            "constants": [],
            "variables": [
              0.8,
              0.2
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill03_DOTDamagePercentage",
          "value": {
            "operator": "Variables[0] (0.8) || RETURN",
            "displayLines": "0.8",
            "constants": [],
            "variables": [
              0.8
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "The Gladius of Conquest"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Harscyline_Ability03_Halopre"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Harscyline_PassiveRandomDOT"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "The Fiddle of Pearls"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Harscyline_PointB3"
        }
      ]
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
          "to": "Caster",
          "modifier": "Harscyline_DOTDamageUpPre",
          "valuePerStack": {
            "MDF_DamageUpRatio": {
              "operator": "Variables[0] (1.16) || RETURN",
              "displayLines": "1.16",
              "constants": [],
              "variables": [
                1.16
              ]
            }
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Harscyline_PointB3",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Harscyline_PointB3_Sub"
            }
          ],
          "priorityLevel": -80
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateSUM</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 1000000000,
              "whenEnteringRange": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Harscyline_PointB3_Sub"
                }
              ],
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Harscyline_PointB3_Sub"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Harscyline_PointB3_Sub",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": "Caster",
              "variableName": "SkillTree_PointB3_StatusProbabilityPlusConvertValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateSUM</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": "Caster",
              "variableName": "SkillTree_PointB3_StatusProbabilityConvertValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateConverted</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "SkillTree_PointB3_StatusProbabilityValue",
              "value": {
                "operator": "Variables[0] (SkillTree_PointB3_StatusProbabilityPlusConvertValue) || Variables[1] (SkillTree_PointB3_StatusProbabilityConvertValue) || SUB || RETURN",
                "displayLines": "(SkillTree_PointB3_StatusProbabilityPlusConvertValue - SkillTree_PointB3_StatusProbabilityConvertValue)",
                "constants": [],
                "variables": [
                  "SkillTree_PointB3_StatusProbabilityPlusConvertValue",
                  "SkillTree_PointB3_StatusProbabilityConvertValue"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "SkillTree_PointB3_StatusProbabilityValue",
              "value": {
                "operator": "Variables[0] (WHOLE) || Variables[1] (SkillTree_PointB3_StatusProbabilityValue) || Variables[2] (0.6) || SUB || Variables[3] (0.1) || DIV || PARAM_1 || FUNCTION || Variables[4] (0.15) || MUL || RETURN",
                "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(((SkillTree_PointB3_StatusProbabilityValue - 0.6) / 0.1)) * 0.15)",
                "constants": [],
                "variables": [
                  "WHOLE",
                  "SkillTree_PointB3_StatusProbabilityValue",
                  0.6,
                  0.1,
                  0.15
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SkillTree_PointB3_StatusProbabilityValue",
                "compareType": "<=",
                "value2": 0,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SkillTree_PointB3_StatusProbabilityValue",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SkillTree_PointB3_StatusProbabilityValue",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (0.9) || RETURN",
                      "displayLines": "0.9",
                      "constants": [],
                      "variables": [
                        0.9
                      ]
                    },
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SkillTree_PointB3_StatusProbabilityValue",
                      "value": {
                        "operator": "Variables[0] (0.9) || RETURN",
                        "displayLines": "0.9",
                        "constants": [],
                        "variables": [
                          0.9
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SkillTree_PointB3_StatusProbabilityValue",
                "compareType": "<=",
                "value2": 0,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Allied Team(ALL) [Exclude battle mechanics]",
                  "modifier": "Harscyline_PointB3_DamageAdded[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 2
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Caster",
                        "modifier": "Harscyline_Ability03_HaloStatus"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Allied Team(ALL) [Exclude battle mechanics]",
                      "modifier": "Harscyline_PointB3_DamageAdded[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]",
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (SkillTree_PointB3_StatusProbabilityValue) || RETURN",
                          "displayLines": "SkillTree_PointB3_StatusProbabilityValue",
                          "constants": [],
                          "variables": [
                            "SkillTree_PointB3_StatusProbabilityValue"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Harscyline_PointB3_DamageAdded[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]",
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (SkillTree_PointB3_StatusProbabilityValue) || RETURN",
                          "displayLines": "SkillTree_PointB3_StatusProbabilityValue",
                          "constants": [],
                          "variables": [
                            "SkillTree_PointB3_StatusProbabilityValue"
                          ]
                        }
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
    },
    {
      "name": "Modifier Construction",
      "for": "Harscyline_FirstHitFlag"
    },
    {
      "name": "Modifier Construction",
      "for": "Harscyline_PassiveRandomDOT",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Anyone]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": "Use Secondary Prior Target(s) Defined",
                    "team": "TeamLight"
                  },
                  {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": "Use Secondary Prior Target(s) Defined",
                    "invertCondition": true
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamDark"
                  },
                  {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "Harscyline_FirstHitFlag",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Harscyline_RandomDOT_PassiveRandomDOT"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Harscyline_FirstHitFlag"
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
              "to": "All Enemies(All)",
              "modifier": "Harscyline_FirstHitFlag"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Harscyline_Ability03_Halopre",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Harscyline_Ability03_HaloStatus",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DOTDamagePercentageTemp": {
                      "operator": "Variables[0] (Skill03_DOTDamagePercentage) || RETURN",
                      "displayLines": "Skill03_DOTDamagePercentage",
                      "constants": [],
                      "variables": [
                        "Skill03_DOTDamagePercentage"
                      ]
                    },
                    "MDF_TriggerDOTMaxCountTemp": {
                      "operator": "Variables[0] (Skill03_TriggerDotMaxCount) || RETURN",
                      "displayLines": "Skill03_TriggerDotMaxCount",
                      "constants": [],
                      "variables": [
                        "Skill03_TriggerDotMaxCount"
                      ]
                    },
                    "MDF_DefenceDownRatioTemp": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    },
                    "MDF_ResistanceDownRatioTemp": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "MDF_AttackDownRatioTemp": {
                      "operator": "Variables[0] (0.15) || RETURN",
                      "displayLines": "0.15",
                      "constants": [],
                      "variables": [
                        0.15
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}