const configAbility = {
  "fileName": "SilverWolf_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_Tree03_AttackUp[<span class=\"descriptionNumberColor\">Side Note</span>]",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
      "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Side Note"
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_Tree03_StatusProbabilityShow",
      "stackType": "ReplaceByCaster",
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
                  "functionName": "Silwolf_Tree03_Sub"
                }
              ],
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Silwolf_Tree03_Sub"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Silwolf_Tree03_Sub",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_StatusProbability",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateSUM</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_StatusProbabilityConvert",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateConverted</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "SkillTree_PointB3_StatusProbabilityValue",
              "value": {
                "operator": "Variables[0] (_StatusProbability) || Variables[1] (_StatusProbabilityConvert) || SUB || RETURN",
                "displayLines": "(_StatusProbability - _StatusProbabilityConvert)",
                "constants": [],
                "variables": [
                  "_StatusProbability",
                  "_StatusProbabilityConvert"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "SkillTree_PointB3_StatusProbabilityValue",
              "value": {
                "operator": "Variables[0] (WHOLE) || Variables[1] (SkillTree_PointB3_StatusProbabilityValue) || Variables[2] (0.1) || DIV || PARAM_1 || FUNCTION || Variables[3] (0.1) || MUL || RETURN",
                "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((SkillTree_PointB3_StatusProbabilityValue / 0.1)) * 0.1)",
                "constants": [],
                "variables": [
                  "WHOLE",
                  "SkillTree_PointB3_StatusProbabilityValue",
                  0.1,
                  0.1
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
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Advanced_Silwolf_Tree03_AttackUp[<span class=\"descriptionNumberColor\">Side Note</span>]"
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
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    },
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SkillTree_PointB3_StatusProbabilityValue",
                      "value": {
                        "operator": "Variables[0] (0.5) || RETURN",
                        "displayLines": "0.5",
                        "constants": [],
                        "variables": [
                          0.5
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Advanced_Silwolf_Tree03_AttackUp[<span class=\"descriptionNumberColor\">Side Note</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_Ultimate_DefenceRatioDown[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_DefenceDown"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyValue)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "DEF Reduction",
      "statusName": "DEF Reduction"
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_Eidolon2_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
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
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Vulnerability"
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_BPAbility_AllDamageTypeResistanceDown[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyValue)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "All-Type RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "All-Type RES Reduction",
      "statusName": "All-Type RES Reduction"
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedDown"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyValue)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "SPD decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Slow",
      "statusName": "Type-3 Bug"
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_Normal_Bug2[<span class=\"descriptionNumberColor\">Type-2 Bug</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_DefenceDown"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyValue)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "DEF Reduction",
      "statusName": "Type-2 Bug"
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_Normal_Bug1[<span class=\"descriptionNumberColor\">Type-1 Bug</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_AttackDown"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyValue)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "ATK decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "ATK Reduction",
      "statusName": "Type-1 Bug"
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_BPAbility_WeakType_Imaginary[<span class=\"descriptionNumberColor\">Additional Imaginary Weakness</span>]",
      "stackType": "Replace",
      "description": "Additionally implanted Imaginary Weakness. Imaginary RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Implant a Weakness",
      "statusName": "Additional Imaginary Weakness"
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_BPAbility_WeakType_Quantum[<span class=\"descriptionNumberColor\">Additional Quantum Weakness</span>]",
      "stackType": "Replace",
      "description": "Additionally implanted Quantum Weakness. Quantum RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Implant a Weakness",
      "statusName": "Additional Quantum Weakness"
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_BPAbility_WeakType_Thunder[<span class=\"descriptionNumberColor\">Additional Lightning Weakness</span>]",
      "stackType": "Replace",
      "description": "Additionally implanted Lightning Weakness. Lightning RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Implant a Weakness",
      "statusName": "Additional Lightning Weakness"
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_BPAbility_WeakType_Physical[<span class=\"descriptionNumberColor\">Additional Physical Weakness</span>]",
      "stackType": "Replace",
      "description": "Additionally implanted Physical Weakness. Physical RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Implant a Weakness",
      "statusName": "Additional Physical Weakness"
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_BPAbility_WeakType_Wind[<span class=\"descriptionNumberColor\">Additional Wind Weakness</span>]",
      "stackType": "Replace",
      "description": "Additionally implanted Wind Weakness. Wind RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Implant a Weakness",
      "statusName": "Additional Wind Weakness"
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_BPAbility_WeakType_Ice[<span class=\"descriptionNumberColor\">Additional Ice Weakness</span>]",
      "stackType": "Replace",
      "description": "Additionally implanted Ice Weakness. Ice RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Implant a Weakness",
      "statusName": "Additional Ice Weakness"
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_BPAbility_WeakType_Fire[<span class=\"descriptionNumberColor\">Additional Fire Weakness</span>]",
      "stackType": "Replace",
      "description": "Additionally implanted Fire Weakness. Fire RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Implant a Weakness",
      "statusName": "Additional Fire Weakness"
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_BPAbility_WeakType_Extra[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "STAT_AttachWeakness"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Implant Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "element": null,
              "resReduction": {
                "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                "displayLines": "(0 - MDF_PropertyValue)",
                "constants": [
                  0
                ],
                "variables": [
                  "MDF_PropertyValue"
                ]
              },
              "maxImplant": 1,
              "returnWeaknessVar": [
                "Advanced_Silwolf_BPAbility_WeakType_01",
                "Advanced_Silwolf_BPAbility_WeakType_02"
              ]
            }
          ]
        }
      ],
      "description": "Additionally implanted Weakness. Corresponding RES is lowered by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Implant a Weakness",
      "statusName": "Extra Weakness"
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_Passive_Deathrattle_Sub",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Advanced_Silwolf_PassiveAbility01_WeakTypeTransfer",
                  "variables": {
                    "_WeakType": {
                      "operator": "Variables[0] (_WeakType) || RETURN",
                      "displayLines": "_WeakType",
                      "constants": [],
                      "variables": [
                        "_WeakType"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_AttachWeakness",
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_WeakType",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (_TheFirstAvatarWeakType) || RETURN",
                    "displayLines": "_TheFirstAvatarWeakType",
                    "constants": [],
                    "variables": [
                      "_TheFirstAvatarWeakType"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": null,
                          "resReduction": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          },
                          "maxImplant": 1,
                          "prefWeakness": "Physical",
                          "returnWeaknessVar": [
                            "Advanced_Silwolf_BPAbility_WeakType_01",
                            "Advanced_Silwolf_BPAbility_WeakType_02"
                          ],
                          "noNewWeaknesses": [
                            "Modifier Deletes Itself"
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_WeakType",
                          "value": {
                            "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                            "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                            "constants": [],
                            "variables": [
                              "Advanced_Silwolf_BPAbility_WeakType_01"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": null,
                          "resReduction": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          },
                          "maxImplant": 1,
                          "prefWeakness": "Fire",
                          "returnWeaknessVar": [
                            "Advanced_Silwolf_BPAbility_WeakType_01",
                            "Advanced_Silwolf_BPAbility_WeakType_02"
                          ],
                          "noNewWeaknesses": [
                            "Modifier Deletes Itself"
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_WeakType",
                          "value": {
                            "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                            "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                            "constants": [],
                            "variables": [
                              "Advanced_Silwolf_BPAbility_WeakType_01"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": null,
                          "resReduction": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          },
                          "maxImplant": 1,
                          "prefWeakness": "Ice",
                          "returnWeaknessVar": [
                            "Advanced_Silwolf_BPAbility_WeakType_01",
                            "Advanced_Silwolf_BPAbility_WeakType_02"
                          ],
                          "noNewWeaknesses": [
                            "Modifier Deletes Itself"
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_WeakType",
                          "value": {
                            "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                            "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                            "constants": [],
                            "variables": [
                              "Advanced_Silwolf_BPAbility_WeakType_01"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 8,
                      "execute": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": null,
                          "resReduction": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          },
                          "maxImplant": 1,
                          "prefWeakness": "Lightning",
                          "returnWeaknessVar": [
                            "Advanced_Silwolf_BPAbility_WeakType_01",
                            "Advanced_Silwolf_BPAbility_WeakType_02"
                          ],
                          "noNewWeaknesses": [
                            "Modifier Deletes Itself"
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_WeakType",
                          "value": {
                            "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                            "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                            "constants": [],
                            "variables": [
                              "Advanced_Silwolf_BPAbility_WeakType_01"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 16,
                      "execute": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": null,
                          "resReduction": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          },
                          "maxImplant": 1,
                          "prefWeakness": "Wind",
                          "returnWeaknessVar": [
                            "Advanced_Silwolf_BPAbility_WeakType_01",
                            "Advanced_Silwolf_BPAbility_WeakType_02"
                          ],
                          "noNewWeaknesses": [
                            "Modifier Deletes Itself"
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_WeakType",
                          "value": {
                            "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                            "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                            "constants": [],
                            "variables": [
                              "Advanced_Silwolf_BPAbility_WeakType_01"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 32,
                      "execute": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": null,
                          "resReduction": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          },
                          "maxImplant": 1,
                          "prefWeakness": "Quantum",
                          "returnWeaknessVar": [
                            "Advanced_Silwolf_BPAbility_WeakType_01",
                            "Advanced_Silwolf_BPAbility_WeakType_02"
                          ],
                          "noNewWeaknesses": [
                            "Modifier Deletes Itself"
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_WeakType",
                          "value": {
                            "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                            "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                            "constants": [],
                            "variables": [
                              "Advanced_Silwolf_BPAbility_WeakType_01"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 64,
                      "execute": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": null,
                          "resReduction": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          },
                          "maxImplant": 1,
                          "prefWeakness": "Imaginary",
                          "returnWeaknessVar": [
                            "Advanced_Silwolf_BPAbility_WeakType_01",
                            "Advanced_Silwolf_BPAbility_WeakType_02"
                          ],
                          "noNewWeaknesses": [
                            "Modifier Deletes Itself"
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_WeakType",
                          "value": {
                            "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                            "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                            "constants": [],
                            "variables": [
                              "Advanced_Silwolf_BPAbility_WeakType_01"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ],
              "failed": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (_WeakType) || RETURN",
                    "displayLines": "_WeakType",
                    "constants": [],
                    "variables": [
                      "_WeakType"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": null,
                          "resReduction": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          },
                          "maxImplant": 1,
                          "prefWeakness": "Physical",
                          "returnWeaknessVar": [
                            "Advanced_Silwolf_BPAbility_WeakType_01",
                            "Advanced_Silwolf_BPAbility_WeakType_02"
                          ],
                          "noNewWeaknesses": [
                            "Modifier Deletes Itself"
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_WeakType",
                          "value": {
                            "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                            "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                            "constants": [],
                            "variables": [
                              "Advanced_Silwolf_BPAbility_WeakType_01"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": null,
                          "resReduction": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          },
                          "maxImplant": 1,
                          "prefWeakness": "Fire",
                          "returnWeaknessVar": [
                            "Advanced_Silwolf_BPAbility_WeakType_01",
                            "Advanced_Silwolf_BPAbility_WeakType_02"
                          ],
                          "noNewWeaknesses": [
                            "Modifier Deletes Itself"
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_WeakType",
                          "value": {
                            "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                            "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                            "constants": [],
                            "variables": [
                              "Advanced_Silwolf_BPAbility_WeakType_01"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 4,
                      "execute": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": null,
                          "resReduction": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          },
                          "maxImplant": 1,
                          "prefWeakness": "Ice",
                          "returnWeaknessVar": [
                            "Advanced_Silwolf_BPAbility_WeakType_01",
                            "Advanced_Silwolf_BPAbility_WeakType_02"
                          ],
                          "noNewWeaknesses": [
                            "Modifier Deletes Itself"
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_WeakType",
                          "value": {
                            "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                            "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                            "constants": [],
                            "variables": [
                              "Advanced_Silwolf_BPAbility_WeakType_01"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 8,
                      "execute": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": null,
                          "resReduction": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          },
                          "maxImplant": 1,
                          "prefWeakness": "Lightning",
                          "returnWeaknessVar": [
                            "Advanced_Silwolf_BPAbility_WeakType_01",
                            "Advanced_Silwolf_BPAbility_WeakType_02"
                          ],
                          "noNewWeaknesses": [
                            "Modifier Deletes Itself"
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_WeakType",
                          "value": {
                            "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                            "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                            "constants": [],
                            "variables": [
                              "Advanced_Silwolf_BPAbility_WeakType_01"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 16,
                      "execute": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": null,
                          "resReduction": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          },
                          "maxImplant": 1,
                          "prefWeakness": "Wind",
                          "returnWeaknessVar": [
                            "Advanced_Silwolf_BPAbility_WeakType_01",
                            "Advanced_Silwolf_BPAbility_WeakType_02"
                          ],
                          "noNewWeaknesses": [
                            "Modifier Deletes Itself"
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_WeakType",
                          "value": {
                            "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                            "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                            "constants": [],
                            "variables": [
                              "Advanced_Silwolf_BPAbility_WeakType_01"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 32,
                      "execute": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": null,
                          "resReduction": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          },
                          "maxImplant": 1,
                          "prefWeakness": "Quantum",
                          "returnWeaknessVar": [
                            "Advanced_Silwolf_BPAbility_WeakType_01",
                            "Advanced_Silwolf_BPAbility_WeakType_02"
                          ],
                          "noNewWeaknesses": [
                            "Modifier Deletes Itself"
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_WeakType",
                          "value": {
                            "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                            "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                            "constants": [],
                            "variables": [
                              "Advanced_Silwolf_BPAbility_WeakType_01"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 64,
                      "execute": [
                        {
                          "name": "Implant Weaknesses",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "element": null,
                          "resReduction": {
                            "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                            "displayLines": "(0 - MDF_PropertyValue)",
                            "constants": [
                              0
                            ],
                            "variables": [
                              "MDF_PropertyValue"
                            ]
                          },
                          "maxImplant": 1,
                          "prefWeakness": "Imaginary",
                          "returnWeaknessVar": [
                            "Advanced_Silwolf_BPAbility_WeakType_01",
                            "Advanced_Silwolf_BPAbility_WeakType_02"
                          ],
                          "noNewWeaknesses": [
                            "Modifier Deletes Itself"
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_WeakType",
                          "value": {
                            "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                            "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                            "constants": [],
                            "variables": [
                              "Advanced_Silwolf_BPAbility_WeakType_01"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Advanced_Silwolf_Ability02_OverrideNameForStatus",
              "variables": {
                "DF_WeakType": {
                  "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                  "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                  "constants": [],
                  "variables": [
                    "Advanced_Silwolf_BPAbility_WeakType_01"
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Advanced_Silwolf_PassiveAbility01_WeakTypeTransfer",
                  "variables": {
                    "_WeakType": {
                      "operator": "Variables[0] (_WeakType) || RETURN",
                      "displayLines": "_WeakType",
                      "constants": [],
                      "variables": [
                        "_WeakType"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Before Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Advanced_Silwolf_Passive_Deathrattle_Sub",
              "valuePerStack": {
                "_WeakType": {
                  "operator": "Variables[0] (_WeakType) || RETURN",
                  "displayLines": "_WeakType",
                  "constants": [],
                  "variables": [
                    "_WeakType"
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue",
        "_WeakType",
        "_TheFirstAvatarWeakType"
      ],
      "latentQueue": [],
      "description": "Additionally implanted Weakness. Corresponding RES is lowered by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "Implant a Weakness",
      "statusName": "Extra Weakness"
    }
  ],
  "references": []
}