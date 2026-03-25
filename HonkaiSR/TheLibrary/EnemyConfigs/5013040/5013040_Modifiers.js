const configAbility = {
  "fileName": "5013040_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1602736914\">W5_Ranger_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Achievement",
              "relatedAchievements": [
                {
                  "title": "And the Sun Rises",
                  "desc": "During combat against the Daybreak Squadron, hit them with a specific Type attack while they're in the \"Daybreak Forcefield\" state to trigger an immediate action",
                  "rarity": "Low"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-415333397\">Enemy_W5_Ranger_Debuff_Physical</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]",
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span> and Physical RES decreases by <span class=\"descriptionNumberColor\">MDF_ResistanceDelta</span>.",
      "type": "Debuff",
      "effectName": "Disheartened",
      "statusName": "Disheartened"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-443896273\">Enemy_W5_Ranger_Debuff_Imaginary</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]",
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span> and Imaginary RES decreases by <span class=\"descriptionNumberColor\">MDF_ResistanceDelta</span>.",
      "type": "Debuff",
      "effectName": "Disheartened",
      "statusName": "Disheartened"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1680582294\">Enemy_W5_Ranger_Debuff_Fire</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]",
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span> and Fire RES decreases by <span class=\"descriptionNumberColor\">MDF_ResistanceDelta</span>.",
      "type": "Debuff",
      "effectName": "Disheartened",
      "statusName": "Disheartened"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-370236757\">Enemy_W5_Ranger_Debuff_Quantum</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]",
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span> and Quantum RES decreases by <span class=\"descriptionNumberColor\">MDF_ResistanceDelta</span>.",
      "type": "Debuff",
      "effectName": "Disheartened",
      "statusName": "Disheartened"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-258343603\">Enemy_W5_Ranger_Debuff</a>",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                "displayLines": "MDF_AllDamageTypeTakenRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeTakenRatio"
                ]
              }
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurrentRanger) || RETURN",
                "displayLines": "CurrentRanger",
                "constants": [],
                "variables": [
                  "CurrentRanger"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 0,
                  "execute": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_ResistanceDelta) || SUB || RETURN",
                        "displayLines": "(0 - MDF_ResistanceDelta)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_ResistanceDelta"
                        ]
                      }
                    },
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-258343603\">Enemy_W5_Ranger_Debuff</a>",
                      "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-370236757\">Enemy_W5_Ranger_Debuff_Quantum</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFireBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_ResistanceDelta) || SUB || RETURN",
                        "displayLines": "(0 - MDF_ResistanceDelta)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_ResistanceDelta"
                        ]
                      }
                    },
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-258343603\">Enemy_W5_Ranger_Debuff</a>",
                      "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1680582294\">Enemy_W5_Ranger_Debuff_Fire</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceImaginaryBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_ResistanceDelta) || SUB || RETURN",
                        "displayLines": "(0 - MDF_ResistanceDelta)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_ResistanceDelta"
                        ]
                      }
                    },
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-258343603\">Enemy_W5_Ranger_Debuff</a>",
                      "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-443896273\">Enemy_W5_Ranger_Debuff_Imaginary</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistancePhysicalBonus</span>&nbsp;",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (MDF_ResistanceDelta) || SUB || RETURN",
                        "displayLines": "(0 - MDF_ResistanceDelta)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "MDF_ResistanceDelta"
                        ]
                      }
                    },
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-258343603\">Enemy_W5_Ranger_Debuff</a>",
                      "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-415333397\">Enemy_W5_Ranger_Debuff_Physical</a>[<span class=\"descriptionNumberColor\">Disheartened</span>]"
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AllDamageTypeTakenRatio",
        "MDF_ResistanceDelta"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-832135330\">Enemy_W5_Ranger_Shield_Physical</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]",
      "description": "In this state, Daybreak Squadron will continuously release \"Shadow Dance of the Daybreak Blade,\" and is immune to Crowd Control debuffs. This unit's Toughness cannot be reduced. When hit by Physical-Type attacks, it will immediately take action. After being hit a certain number of times, it will use \"Daybreak Dispersal.\"",
      "type": "Buff",
      "effectName": "Daybreak Forcefield",
      "statusName": "Daybreak Forcefield"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__304872220\">Enemy_W5_Ranger_Shield_Imaginary</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]",
      "description": "In this state, Daybreak Squadron will continuously release \"Shadow Dance of the Daybreak Blade,\" and is immune to Crowd Control debuffs. This unit's Toughness cannot be reduced. When hit by Imaginary-Type attacks, it will immediately take action. After being hit a certain number of times, it will use \"Daybreak Dispersal.\"",
      "type": "Buff",
      "effectName": "Daybreak Forcefield",
      "statusName": "Daybreak Forcefield"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1260475625\">Enemy_W5_Ranger_Shield_Fire</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]",
      "description": "In this state, Daybreak Squadron will continuously release \"Shadow Dance of the Daybreak Blade,\" and is immune to Crowd Control debuffs. This unit's Toughness cannot be reduced. When hit by Fire-Type attacks, it will immediately take action. After being hit a certain number of times, it will use \"Daybreak Dispersal.\"",
      "type": "Buff",
      "effectName": "Daybreak Forcefield",
      "statusName": "Daybreak Forcefield"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__743513856\">Enemy_W5_Ranger_Shield_Quantum</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]",
      "description": "In this state, Daybreak Squadron will continuously release \"Shadow Dance of the Daybreak Blade,\" and is immune to Crowd Control debuffs. This unit's Toughness cannot be reduced. When hit by Quantum attacks, it will immediately take action. After being hit a certain number of times, it will use \"Daybreak Dispersal.\"",
      "type": "Buff",
      "effectName": "Daybreak Forcefield",
      "statusName": "Daybreak Forcefield"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1927239462\">Enemy_W5_Ranger_Shield</a>",
      "modifierFlags": [
        "MuteBreak",
        "Endurance"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "revertDefault": true
            },
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "assignState": "False"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_isBeingAttacked",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isBeingAttacked",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "CurrentChargeValue",
                  "value": {
                    "operator": "Variables[0] (MDF_HitCharge) || RETURN",
                    "displayLines": "MDF_HitCharge",
                    "constants": [],
                    "variables": [
                      "MDF_HitCharge"
                    ]
                  },
                  "max": {
                    "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                    "displayLines": "MDF_MaxCharge",
                    "constants": [],
                    "variables": [
                      "MDF_MaxCharge"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentCharge",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                    "displayLines": "MDF_CurrentCharge",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentCharge"
                    ]
                  }
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (CurrentRanger) || RETURN",
                    "displayLines": "CurrentRanger",
                    "constants": [],
                    "variables": [
                      "CurrentRanger"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0,
                      "execute": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                            "displayLines": "MDF_CurrentCharge",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentCharge"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                            "displayLines": "MDF_MaxCharge",
                            "constants": [],
                            "variables": [
                              "MDF_MaxCharge"
                            ]
                          },
                          "assignState": "True"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                            "displayLines": "MDF_CurrentCharge",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentCharge"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                            "displayLines": "MDF_MaxCharge",
                            "constants": [],
                            "variables": [
                              "MDF_MaxCharge"
                            ]
                          },
                          "assignState": "True"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                            "displayLines": "MDF_CurrentCharge",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentCharge"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                            "displayLines": "MDF_MaxCharge",
                            "constants": [],
                            "variables": [
                              "MDF_MaxCharge"
                            ]
                          },
                          "assignState": "True"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                            "displayLines": "MDF_CurrentCharge",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentCharge"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                            "displayLines": "MDF_MaxCharge",
                            "constants": [],
                            "variables": [
                              "MDF_MaxCharge"
                            ]
                          },
                          "assignState": "True"
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentChargeValue",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                      "displayLines": "MDF_MaxCharge",
                      "constants": [],
                      "variables": [
                        "MDF_MaxCharge"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 5
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                          },
                          "failed": [
                            {
                              "name": "Action Advance/Delay",
                              "advanceType": "Set",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "set": 0
                            },
                            {
                              "name": "Assign Advance/Delay to Current Ability Use",
                              "adjustmentValue": 0,
                              "adjustmentType": "="
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "set": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isBeingAttacked",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isBeingAttackedSpecial",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
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
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentRanger",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Attack Type",
                            "attackTypes": [
                              "DOT",
                              "Additional DMG"
                            ],
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "invertCondition": true
                          },
                          {
                            "name": "Is Damage Type/Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "list": [
                              "Quantum"
                            ]
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentRanger",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Attack Type",
                            "attackTypes": [
                              "DOT",
                              "Additional DMG"
                            ],
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "invertCondition": true
                          },
                          {
                            "name": "Is Damage Type/Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "list": [
                              "Fire"
                            ]
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentRanger",
                            "compareType": "=",
                            "value2": 2
                          },
                          {
                            "name": "Attack Type",
                            "attackTypes": [
                              "DOT",
                              "Additional DMG"
                            ],
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "invertCondition": true
                          },
                          {
                            "name": "Is Damage Type/Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "list": [
                              "Imaginary"
                            ]
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentRanger",
                            "compareType": "=",
                            "value2": 3
                          },
                          {
                            "name": "Attack Type",
                            "attackTypes": [
                              "DOT",
                              "Additional DMG"
                            ],
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "invertCondition": true
                          },
                          {
                            "name": "Is Damage Type/Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "list": [
                              "Physical"
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_isBeingAttackedSpecial",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1602736914\">W5_Ranger_BattleScore1</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                          },
                          "failed": [
                            {
                              "name": "Action Advance/Delay",
                              "advanceType": "Set",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "set": 0
                            },
                            {
                              "name": "Assign Advance/Delay to Current Ability Use",
                              "adjustmentValue": 0,
                              "adjustmentType": "="
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "set": 0
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentChargeValue",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                      "displayLines": "MDF_MaxCharge",
                      "constants": [],
                      "variables": [
                        "MDF_MaxCharge"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 6
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                          },
                          "failed": [
                            {
                              "name": "Action Advance/Delay",
                              "advanceType": "Set",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "set": 0
                            },
                            {
                              "name": "Assign Advance/Delay to Current Ability Use",
                              "adjustmentValue": 0,
                              "adjustmentType": "="
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "set": 0
                        }
                      ]
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
              "name": "Define Custom Variable",
              "variableName": "CurrentChargeValue",
              "value": 0
            },
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Protected",
              "valueList": [
                "AllType"
              ]
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (CurrentRanger) || RETURN",
                "displayLines": "CurrentRanger",
                "constants": [],
                "variables": [
                  "CurrentRanger"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 0,
                  "execute": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                        "displayLines": "MDF_CurrentCharge",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentCharge"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                        "displayLines": "MDF_MaxCharge",
                        "constants": [],
                        "variables": [
                          "MDF_MaxCharge"
                        ]
                      },
                      "assignState": "True"
                    },
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1927239462\">Enemy_W5_Ranger_Shield</a>",
                      "modifierNameUpdate": "<a class=\"gModGreen\" id=\"743513856\">Enemy_W5_Ranger_Shield_Quantum</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                        "displayLines": "MDF_CurrentCharge",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentCharge"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                        "displayLines": "MDF_MaxCharge",
                        "constants": [],
                        "variables": [
                          "MDF_MaxCharge"
                        ]
                      },
                      "assignState": "True"
                    },
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1927239462\">Enemy_W5_Ranger_Shield</a>",
                      "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-1260475625\">Enemy_W5_Ranger_Shield_Fire</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                        "displayLines": "MDF_CurrentCharge",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentCharge"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                        "displayLines": "MDF_MaxCharge",
                        "constants": [],
                        "variables": [
                          "MDF_MaxCharge"
                        ]
                      },
                      "assignState": "True"
                    },
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1927239462\">Enemy_W5_Ranger_Shield</a>",
                      "modifierNameUpdate": "<a class=\"gModGreen\" id=\"304872220\">Enemy_W5_Ranger_Shield_Imaginary</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentCharge) || RETURN",
                        "displayLines": "MDF_CurrentCharge",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentCharge"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (MDF_MaxCharge) || RETURN",
                        "displayLines": "MDF_MaxCharge",
                        "constants": [],
                        "variables": [
                          "MDF_MaxCharge"
                        ]
                      },
                      "assignState": "True"
                    },
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1927239462\">Enemy_W5_Ranger_Shield</a>",
                      "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-832135330\">Enemy_W5_Ranger_Shield_Physical</a>[<span class=\"descriptionNumberColor\">Daybreak Forcefield</span>]"
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Completed [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_isBeingAttacked",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_isBeingAttackedSpecial",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target Count SUM",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Target List}}"
                    },
                    "conditions": {
                      "name": "Compare: Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentRanger",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Quantum"
                            }
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentRanger",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Fire"
                            }
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentRanger",
                            "compareType": "=",
                            "value2": 2
                          },
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Imaginary"
                            }
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentRanger",
                            "compareType": "=",
                            "value2": 3
                          },
                          {
                            "name": "Has Element",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "DamageType": {
                              "name": "Damage Type Source",
                              "sourceType": "Physical"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (CurrentRanger) || RETURN",
                    "displayLines": "CurrentRanger",
                    "constants": [],
                    "variables": [
                      "CurrentRanger"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0,
                      "execute": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "trigger": "SpEff_Trigger"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "trigger": "SpEff_Trigger"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "trigger": "SpEff_Trigger"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "trigger": "SpEff_Trigger"
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_MaxCharge",
        "MDF_HitCharge"
      ],
      "latentQueue": []
    }
  ],
  "references": []
}