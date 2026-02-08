const configAbility = {
  "fileName": "Hysilens_Harscyline_PassiveAbility01",
  "childAbilityList": [
    "Hysilens_Harscyline_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"681243570\">Harscyline_Ability03_Halopre</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"92976527\">Harscyline_PassiveRandomDOT</a>"
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2109692643\">Harscyline_PointB3</a>"
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1305457610\">Harscyline_DOTDamageUpPre</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__2109692643\">Harscyline_PointB3</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1047911609\">Harscyline_PointB3_Sub</a>"
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-1047911609\">Harscyline_PointB3_Sub</a>"
                }
              ],
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1047911609\">Harscyline_PointB3_Sub</a>"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1047911609\">Harscyline_PointB3_Sub</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "SkillTree_PointB3_StatusProbabilityPlusConvertValue",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateSUM</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1957610629\">Harscyline_PointB3_DamageAdded</a>[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1383903101\">Harscyline_Ability03_HaloStatus</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1957610629\">Harscyline_PointB3_DamageAdded</a>[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]",
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1957610629\">Harscyline_PointB3_DamageAdded</a>[<span class=\"descriptionNumberColor\">The Fiddle of Pearls</span>]",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1905867121\">Harscyline_FirstHitFlag</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__92976527\">Harscyline_PassiveRandomDOT</a>",
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    },
                    "invertCondition": true
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1905867121\">Harscyline_FirstHitFlag</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"824285103\">Harscyline_RandomDOT_PassiveRandomDOT</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1905867121\">Harscyline_FirstHitFlag</a>"
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
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1905867121\">Harscyline_FirstHitFlag</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__681243570\">Harscyline_Ability03_Halopre</a>",
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1383903101\">Harscyline_Ability03_HaloStatus</a>",
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