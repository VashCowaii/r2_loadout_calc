const configAbility = {
  "fileName": "Evernight_Modifiers",
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
      "for": "Evernight_Weapon_Show_2",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_Weapon_Show_1",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "EnduranceLogicOnly"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character UI",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Change Character UI",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue",
        "MDF_PropertyValue_2"
      ],
      "latentQueue": [],
      "description": "This unit and their memosprite are immune to Crowd Control debuffs, and the DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Darkest Riddle",
      "statusName": "Darkest Riddle",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Join Targets",
            "TargetList": [
              {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            ]
          },
          "modifier": "Evernight_UltraMode_Bonus",
          "aliveOnly": "True",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
              "displayLines": "MDF_PropertyValue",
              "constants": [],
              "variables": [
                "MDF_PropertyValue"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "Evernight_UltraMode_Debuff[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]",
          "aliveOnly": "True",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_PropertyValue_2) || RETURN",
              "displayLines": "MDF_PropertyValue_2",
              "constants": [],
              "variables": [
                "MDF_PropertyValue_2"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_UltraMode_Debuff[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
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
      "statusName": "Darkest Riddle"
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_UltraMode_Energy_0[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]",
      "execute": [
        {
          "eventTrigger": "Turn Start [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Evernight_TryRemoveUltra_Flag"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Evernight_UltraMode_Effect"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "Evernight_UltraMode_Effect_Normal"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Evernight_UltraMode[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Evernight_UltraMode_Energy[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Evernight_UltraMode_Energy_0[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
                }
              ]
            }
          ]
        }
      ],
      "description": "When Evernight's turn begins, she exits the \"Darkest Riddle\" state.",
      "type": "Other",
      "statusName": "Darkest Riddle"
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_TryRemoveUltra_Flag"
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_UltraMode_Energy[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]",
      "counter": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Evernight_UltraMode_Energy_0[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Evernight_UltraMode_Energy_Cost"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Evernight_UltraMode_Energy_Cost"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Evernight_UltraMode_Energy[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]",
                    "compareType": ">",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": null,
                      "function": "Add"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Evernight_UltraMode_Energy_0[<span class=\"descriptionNumberColor\">Darkest Riddle</span>]"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "The memosprite Evey consumes 1 Charge after it uses \"Dream, Dissolving, as Dew.\" When Evernight's turn begins, if no Charge remains, she exits the \"Darkest Riddle\" state.",
      "type": "Other",
      "statusName": "Darkest Riddle"
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_UltraMode_Energy_Cost"
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_UltraMode_Effect",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "modifier": "Evernight_UltraMode_Effect_Normal",
              "casterAssign": "TargetSelf"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_UltraMode_Effect_Normal",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_ServantTarget",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_Ability02_ChangeSkill",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill02",
              "skillSlot": "Skill",
              "enableSecondaryType": "ControlSkill02"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill21",
              "skillSlot": "Skill",
              "enableSecondaryType": "ControlSkill02"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_TryKillServant_Flag"
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_UltraMode_Bonus",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_Ability02_Bonus_PointB3[<span class=\"descriptionNumberColor\">Kindle the Morn, Drop the Rain</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Kindle the Morn, Drop the Rain"
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_Ability02_Bonus_Buff[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MDF_CritBase",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] (MDF_Conv) || Variables[1] (MDF_CritBase) || MUL || RETURN",
                "displayLines": "(MDF_Conv * MDF_CritBase)",
                "constants": [],
                "variables": [
                  "MDF_Conv",
                  "MDF_CritBase"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              },
              "isRefresh": true
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_PropertyValue",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 9999999,
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  },
                  "isRefresh": true
                }
              ]
            }
          ]
        }
      ],
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Day Gently Slips"
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_Ability02_Bonus[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "S02_ExtraRatio",
          "from": "ContextCaster",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_CritBase",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Conv",
                  "value": {
                    "operator": "Variables[0] (0.24) || Variables[1] (S02_ExtraRatio) || ADD || RETURN",
                    "displayLines": "(0.24 + S02_ExtraRatio)",
                    "constants": [],
                    "variables": [
                      0.24,
                      "S02_ExtraRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_TMP_NEW_VAL",
                  "value": {
                    "operator": "Variables[0] (MDF_Conv) || Variables[1] (MDF_CritBase) || MUL || RETURN",
                    "displayLines": "(MDF_Conv * MDF_CritBase)",
                    "constants": [],
                    "variables": [
                      "MDF_Conv",
                      "MDF_CritBase"
                    ]
                  }
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[getMemosprite]]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Evernight_Ability02_Bonus_Buff[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]"
                      },
                      "passed": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifierName": "Evernight_Ability02_Bonus_Buff[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
                          "variableName": "MDF_PropertyValue",
                          "value": {
                            "operator": "Variables[0] (_TMP_NEW_VAL) || RETURN",
                            "displayLines": "_TMP_NEW_VAL",
                            "constants": [],
                            "variables": [
                              "_TMP_NEW_VAL"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Evernight_Ability02_Bonus_Buff[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
                          "valuePerStack": {
                            "MDF_Conv": {
                              "operator": "Variables[0] (MDF_CritBase) || RETURN",
                              "displayLines": "MDF_CritBase",
                              "constants": [],
                              "variables": [
                                "MDF_CritBase"
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
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_CritBase",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_TMP_NEW_VAL",
                  "value": {
                    "operator": "Variables[0] (MDF_Conv) || Variables[1] (MDF_CritBase) || MUL || RETURN",
                    "displayLines": "(MDF_Conv * MDF_CritBase)",
                    "constants": [],
                    "variables": [
                      "MDF_Conv",
                      "MDF_CritBase"
                    ]
                  }
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[getMemosprite]]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Evernight_Ability02_Bonus_Buff[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]"
                      },
                      "passed": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifierName": "Evernight_Ability02_Bonus_Buff[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
                          "variableName": "MDF_PropertyValue",
                          "value": {
                            "operator": "Variables[0] (_TMP_NEW_VAL) || RETURN",
                            "displayLines": "_TMP_NEW_VAL",
                            "constants": [],
                            "variables": [
                              "_TMP_NEW_VAL"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Evernight_Ability02_Bonus_Buff[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
                          "valuePerStack": {
                            "MDF_Conv": {
                              "operator": "Variables[0] (MDF_CritBase) || RETURN",
                              "displayLines": "MDF_CritBase",
                              "constants": [],
                              "variables": [
                                "MDF_CritBase"
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
          ]
        }
      ],
      "stackData": [
        "MDF_Conv",
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "_S02_Char_Count"
      ],
      "description": "While this effect persists, CRIT DMG increases for all ally memosprites.",
      "type": "Other",
      "statusName": "Day Gently Slips",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[getMemosprite]]"
          },
          "modifier": "Evernight_Ability02_Bonus_Buff[<span class=\"descriptionNumberColor\">Day Gently Slips</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_Conv": {
              "operator": "Variables[0] (MDF_CritBase) || RETURN",
              "displayLines": "MDF_CritBase",
              "constants": [],
              "variables": [
                "MDF_CritBase"
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[getMemosprite]]"
          },
          "modifier": "Evernight_Ability02_Bonus_PointB3[<span class=\"descriptionNumberColor\">Kindle the Morn, Drop the Rain</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Trace Activated",
                "conditionList": "Kindle the Morn, Drop the Rain"
              },
              {
                "name": "Compare: Variable",
                "value1": "MDF_PropertyValue",
                "compareType": ">",
                "value2": 0
              }
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
              "displayLines": "MDF_PropertyValue",
              "constants": [],
              "variables": [
                "MDF_PropertyValue"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_Eidolon2_Crit[<span class=\"descriptionNumberColor\">Listen Up, the Slumber Speaks Soft</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Listen Up, the Slumber Speaks Soft"
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_Passive_Bonus[<span class=\"descriptionNumberColor\">With Me, This Night</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "With Me, This Night"
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_HPChange_Trigger",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Evernight_Passive_Bonus[<span class=\"descriptionNumberColor\">With Me, This Night</span>]",
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
                  "operator": "Variables[0] (0.6) || RETURN",
                  "displayLines": "0.6",
                  "constants": [],
                  "variables": [
                    0.6
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "modifier": "Evernight_Passive_Bonus[<span class=\"descriptionNumberColor\">With Me, This Night</span>]",
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
                  "operator": "Variables[0] (0.6) || RETURN",
                  "displayLines": "0.6",
                  "constants": [],
                  "variables": [
                    0.6
                  ]
                }
              }
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_Eidolon4_Bonus[<span class=\"descriptionNumberColor\">Wake Up, the Tomorrow is Yours</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster's Memosprite}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue_1) || Variables[1] (MDF_PropertyValue_2) || ADD || RETURN",
                    "displayLines": "(MDF_PropertyValue_1 + MDF_PropertyValue_2)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue_1",
                      "MDF_PropertyValue_2"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue_1) || RETURN",
                    "displayLines": "MDF_PropertyValue_1",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue_1"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
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
        "MDF_PropertyValue_1",
        "MDF_PropertyValue_2"
      ],
      "latentQueue": [
        "_Evernight_PL_Layer"
      ],
      "description": "Weakness Break Efficiency increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Wake Up, the Tomorrow is Yours"
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_Eidolon6_Bonus[<span class=\"descriptionNumberColor\">Like This, Always</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
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
      "latentQueue": [
        "_Evernight_PL_Layer"
      ],
      "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Like This, Always"
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_HPChange",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Check_isHeal",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Dealt Damage while Crowd/Mind Controlled [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Check_isCharmAttack",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Check_isCharmAttack",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Check_isAttack",
                  "value": 1
                }
              ]
            }
          ],
          "priorityLevel": -100
        },
        {
          "eventTrigger": "Dealt Damage (END) while Crowd/Mind Controlled [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Check_isCharmAttack",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Check_isAttack",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Check_isAttack",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Check_AttackStart",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Check_isHeal",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity a Battle Event/Summon",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Check_AttackStart",
                    "compareType": "<",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Check_isAttack",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Check_AttackStart",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Check_isAttack",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT",
                      "Additional DMG"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Check_AttackStart",
                        "compareType": "<",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Check_isAttack",
                          "value": 1
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
          "eventTrigger": "Receiving Heal Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Healing",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_HealValue"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_HealValue",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Check_isHeal",
                  "value": 1
                }
              ]
            }
          ],
          "priorityLevel": 200
        },
        {
          "eventTrigger": "Receiving Heal End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Check_isHeal",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Check_isHeal",
                "compareType": ">",
                "value2": 0
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Check_isAttack",
                        "compareType": "<",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Check_AttackStart",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "_Partner_Count_Show",
                          "value": {
                            "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
                            "displayLines": "(MDF_PropertyValue + _Evernight_00_Extra_Energy)",
                            "constants": [],
                            "variables": [
                              "MDF_PropertyValue",
                              "_Evernight_00_Extra_Energy"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Target Count",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster's Memosprite}}"
                            },
                            "compareType": ">",
                            "value2": 0,
                            "livingTargets": true
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster's Memosprite}}"
                              },
                              "variableName": "_Partner_Count",
                              "context": "TargetEntity",
                              "value": {
                                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (_Evernight_00_Extra_Energy) || ADD || RETURN",
                                "displayLines": "(MDF_PropertyValue + _Evernight_00_Extra_Energy)",
                                "constants": [],
                                "variables": [
                                  "MDF_PropertyValue",
                                  "_Evernight_00_Extra_Energy"
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
                          "modifier": "Evernight_HPChange_Trigger",
                          "casterAssign": "TargetSelf"
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
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Check_AttackStart",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Check_isAttack",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Check_AttackStart",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "_Evernight_PL_Layer"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_PointB1_Crit[<span class=\"descriptionNumberColor\">Dark the Night, Still the Moon</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
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
      "description": "CRIT Rate increases <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Dark the Night, Still the Moon"
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_SummonServantPreshow",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "entityType": "Servant",
        "entityID": 11413,
        "skillType": [
          "Skill",
          "Ultimate"
        ],
        "conditions": {
          "name": "Compare: Target Count",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "compareType": "<=",
          "value2": 0,
          "livingTargets": true
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0(Set AV)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_PointB1_Bonus[<span class=\"descriptionNumberColor\">Dark the Night, Still the Moon</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "Dark the Night, Still the Moon"
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_PointB1_Servant",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "Consume",
              "consumeFrom": "CurrentHP",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "consumePercent": {
                "operator": "Variables[0] (MDF_Cost) || RETURN",
                "displayLines": "MDF_Cost",
                "constants": [],
                "variables": [
                  "MDF_Cost"
                ]
              },
              "consumeFloor": 1,
              "attackType": "Unknown"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Evernight_PointB1_Bonus[<span class=\"descriptionNumberColor\">Dark the Night, Still the Moon</span>]",
              "duration": {
                "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                "displayLines": "MDF_LifeTime",
                "constants": [],
                "variables": [
                  "MDF_LifeTime"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "modifier": "Evernight_PointB1_Bonus[<span class=\"descriptionNumberColor\">Dark the Night, Still the Moon</span>]",
              "duration": {
                "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                "displayLines": "MDF_LifeTime",
                "constants": [],
                "variables": [
                  "MDF_LifeTime"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Evernight_PointB1_Aura",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "Consume",
              "consumeFrom": "CurrentHP",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "consumePercent": {
                "operator": "Variables[0] (MDF_Cost) || RETURN",
                "displayLines": "MDF_Cost",
                "constants": [],
                "variables": [
                  "MDF_Cost"
                ]
              },
              "consumeFloor": 1,
              "attackType": "Unknown"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Evernight_PointB1_Bonus[<span class=\"descriptionNumberColor\">Dark the Night, Still the Moon</span>]",
              "duration": {
                "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                "displayLines": "MDF_LifeTime",
                "constants": [],
                "variables": [
                  "MDF_LifeTime"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "modifier": "Evernight_PointB1_Bonus[<span class=\"descriptionNumberColor\">Dark the Night, Still the Moon</span>]",
              "duration": {
                "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                "displayLines": "MDF_LifeTime",
                "constants": [],
                "variables": [
                  "MDF_LifeTime"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                  "displayLines": "MDF_PropertyValue",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue"
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue",
        "MDF_Cost",
        "MDF_LifeTime"
      ],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "modifier": "Evernight_PointB1_Servant",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
              "displayLines": "MDF_PropertyValue",
              "constants": [],
              "variables": [
                "MDF_PropertyValue"
              ]
            },
            "MDF_Cost": {
              "operator": "Variables[0] (MDF_Cost) || RETURN",
              "displayLines": "MDF_Cost",
              "constants": [],
              "variables": [
                "MDF_Cost"
              ]
            },
            "MDF_LifeTime": {
              "operator": "Variables[0] (MDF_LifeTime) || RETURN",
              "displayLines": "MDF_LifeTime",
              "constants": [],
              "variables": [
                "MDF_LifeTime"
              ]
            }
          }
        }
      ]
    }
  ],
  "references": []
}