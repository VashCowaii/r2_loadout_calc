const configAbility = {
  "fileName": "Mydei_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1569520574\">Mydeimos_UltraTargetSpecialMark</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
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
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Owner}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate",
                    "activeSkill": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count SUM",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player's Aim Primary-Target}}"
                    },
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
                    }
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "trigger": "State_Active"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2061988688\">Mydeimos_UltraTarget</a>[<span class=\"descriptionNumberColor\">Throne of Bones</span>]"
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark"
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
      "for": "<a class=\"gModGreen\" id=\"mod__2061988688\">Mydeimos_UltraTarget</a>[<span class=\"descriptionNumberColor\">Throne of Bones</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Prioritizes attacking this target in the next \"Godslayer Be God.\"",
      "type": "Other",
      "statusName": "Throne of Bones"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__18109462\">Mydeimos_InsertActionAbortFlag</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_MydeimosRemoveTransfer"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__951504069\">Mydeimos_Trace01</a>[<span class=\"descriptionNumberColor\">Earth and Water</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "description": "During the \"Vendetta\" state, Mydei will not exit the \"Vendetta\" state when receiving a killing blow.",
      "type": "Buff",
      "effectName": "Earth and Water",
      "statusName": "Earth and Water"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1739027787\">Mydeimos_Eidolon4</a>[<span class=\"descriptionNumberColor\">Siren Jolts the Laconic Lion</span>]",
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
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
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
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                    "displayLines": "MDF_PropertyValue2",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue2"
                    ]
                  },
                  "formula": "Heal from Healer's MaxHP"
                }
              ]
            }
          ]
        }
      ],
      "description": "Increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "CRIT DMG Boost",
      "statusName": "Siren Jolts the Laconic Lion"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1839693501\">Mydeimos_Eidolon2</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": "(0 - MDF_PropertyValue)"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Receiving Heal End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_ForceEnergyBarChange",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Healing",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_BeingHealValue"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_MaxHPValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_SumBeingHealValue",
                  "value": {
                    "operator": "Variables[0] (_SumBeingHealValue) || Variables[1] (_BeingHealValue) || Variables[2] (MDF_PropertyValue2) || MUL || Variables[3] (_MaxHPValue) || DIV || Constants[0] (100) || MUL || ADD || RETURN",
                    "displayLines": "(_SumBeingHealValue + (((_BeingHealValue * MDF_PropertyValue2) / _MaxHPValue) * 100))",
                    "constants": [
                      100
                    ],
                    "variables": [
                      "_SumBeingHealValue",
                      "_BeingHealValue",
                      "MDF_PropertyValue2",
                      "_MaxHPValue"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_SumBeingHealValue",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (40) || RETURN",
                          "displayLines": "40",
                          "constants": [],
                          "variables": [
                            40
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_MaxFlag",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "_EnergyBar_CurrentValue",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (40) || Variables[1] (_SumBeingHealValue) || Variables[2] (_BeingHealValue) || Variables[3] (MDF_PropertyValue2) || MUL || Variables[4] (_MaxHPValue) || DIV || Constants[0] (100) || MUL || SUB || SUB || RETURN",
                        "displayLines": "(40 - (_SumBeingHealValue - (((_BeingHealValue * MDF_PropertyValue2) / _MaxHPValue) * 100)))",
                        "constants": [
                          100
                        ],
                        "variables": [
                          40,
                          "_SumBeingHealValue",
                          "_BeingHealValue",
                          "MDF_PropertyValue2",
                          "_MaxHPValue"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_MaxFlag",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "_EnergyBar_CurrentValue",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (_BeingHealValue) || Variables[1] (MDF_PropertyValue2) || MUL || Variables[2] (_MaxHPValue) || DIV || Constants[0] (100) || MUL || RETURN",
                        "displayLines": "(((_BeingHealValue * MDF_PropertyValue2) / _MaxHPValue) * 100)",
                        "constants": [
                          100
                        ],
                        "variables": [
                          "_BeingHealValue",
                          "MDF_PropertyValue2",
                          "_MaxHPValue"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_SumBeingHealValue",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_MaxFlag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_SumBeingHealValue",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_MaxFlag",
              "value": 0
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-242497681\">Mydeimos_Trace03_Sub</a>[<span class=\"descriptionNumberColor\">Bloodied Chiton</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Multipler",
              "value": {
                "operator": "Variables[0] (FLOOR) || Variables[1] (_MaxHPFixValue) || Variables[2] (MYDEI_OBJECT_UNUSED_6[100]) || DIV || PARAM_1 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((_MaxHPFixValue / MYDEI_OBJECT_UNUSED_6[100]))",
                "constants": [],
                "variables": [
                  "FLOOR",
                  "_MaxHPFixValue",
                  "MYDEI_OBJECT_UNUSED_6[100]"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] (_Multipler) || Variables[1] (0.012) || MUL || RETURN",
                "displayLines": "(_Multipler * 0.012)",
                "constants": [],
                "variables": [
                  "_Multipler",
                  0.012
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue2",
              "value": {
                "operator": "Variables[0] (_Multipler) || Variables[1] (0.025) || MUL || RETURN",
                "displayLines": "(_Multipler * 0.025)",
                "constants": [],
                "variables": [
                  "_Multipler",
                  0.025
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Tree03_BeingHitRatio",
              "value": {
                "operator": "Variables[0] (_Multipler) || Variables[1] (0.025) || MUL || RETURN",
                "displayLines": "(_Multipler * 0.025)",
                "constants": [],
                "variables": [
                  "_Multipler",
                  0.025
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue3",
              "value": {
                "operator": "Variables[0] (_Multipler) || Variables[1] (0.0075) || MUL || RETURN",
                "displayLines": "(_Multipler * 0.0075)",
                "constants": [],
                "variables": [
                  "_Multipler",
                  0.0075
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue3) || RETURN",
                "displayLines": "MDF_PropertyValue3",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue3"
                ]
              }
            }
          ]
        }
      ],
      "description": "CRIT Rate increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, Charge ratio from enemy targets' DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>, and the HP restored when receiving healing increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue3</span>.",
      "type": "Buff",
      "effectName": "Bloodied Chiton",
      "statusName": "Bloodied Chiton"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__917948831\">Mydeimos_Trace03</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CurrentHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CurrentHPConvert",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CurrentRealHP",
              "value": {
                "operator": "Variables[0] (MDF_CurrentHP) || Variables[1] (MDF_CurrentHPConvert) || SUB || RETURN",
                "displayLines": "(MDF_CurrentHP - MDF_CurrentHPConvert)",
                "constants": [],
                "variables": [
                  "MDF_CurrentHP",
                  "MDF_CurrentHPConvert"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_CurrentRealHP",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (4000) || Variables[1] (MYDEI_OBJECT_UNUSED_6[100]) || ADD || RETURN",
                  "displayLines": "(4000 + MYDEI_OBJECT_UNUSED_6[100])",
                  "constants": [],
                  "variables": [
                    4000,
                    "MYDEI_OBJECT_UNUSED_6[100]"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-242497681\">Mydeimos_Trace03_Sub</a>[<span class=\"descriptionNumberColor\">Bloodied Chiton</span>]",
                  "valuePerStack": {
                    "_MaxHPFixValue": {
                      "operator": "Variables[0] (MDF_CurrentRealHP) || Variables[1] (4000) || SUB || RETURN",
                      "displayLines": "(MDF_CurrentRealHP - 4000)",
                      "constants": [],
                      "variables": [
                        "MDF_CurrentRealHP",
                        4000
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"917948831\">Mydeimos_Trace03</a>"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_ForceEnergyBarChange"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1759525523\">Mydeimos_Transfer_LockDEF</a>",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEFOverride</span>&nbsp;",
              "value": 0
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "DV_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "DV_HPConvert",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (DV_MaxHP) || Variables[1] (DV_HPConvert) || SUB || Variables[2] (0.5) || MUL || RETURN",
                "displayLines": "((DV_MaxHP - DV_HPConvert) * 0.5)",
                "constants": [],
                "variables": [
                  "DV_MaxHP",
                  "DV_HPConvert",
                  0.5
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1763336434\">Mydeimos_Transfer</a>[<span class=\"descriptionNumberColor\">Vendetta</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "Crazy"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character UI"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_BPSkill21_Plus",
              "value": 0
            },
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill02",
              "skillSlot": "Skill",
              "enableSecondaryType": "ControlSkill02"
            },
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill01",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Overwrite Value",
              "variableName": "_EnergyBar_CurrentValue",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "maximum": {
                "operator": "Variables[0] (MYDEI_OBJECT_UNUSED_8[100]) || RETURN",
                "displayLines": "MYDEI_OBJECT_UNUSED_8[100]",
                "constants": [],
                "variables": [
                  "MYDEI_OBJECT_UNUSED_8[100]"
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 4
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"18109462\">Mydeimos_InsertActionAbortFlag</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1759525523\">Mydeimos_Transfer_LockDEF</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Change Character UI"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DV_ReviveCount",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1759525523\">Mydeimos_Transfer_LockDEF</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"18109462\">Mydeimos_InsertActionAbortFlag</a>"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "DV_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "DV_HPConvert",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_HPAddValue",
              "value": {
                "operator": "Variables[0] (DV_MaxHP) || Variables[1] (DV_HPConvert) || SUB || Variables[2] (0.5) || MUL || RETURN",
                "displayLines": "((DV_MaxHP - DV_HPConvert) * 0.5)",
                "constants": [],
                "variables": [
                  "DV_MaxHP",
                  "DV_HPConvert",
                  0.5
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_BPSkill21_Plus",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
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
            },
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Basic ATK"
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Thirty Tyrants"
              },
              "passed": [
                {
                  "name": "Add Flags to Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagName": [
                    "Endurance"
                  ],
                  "modifierName": "<a class=\"gModGreen\" id=\"-1763336434\">Mydeimos_Transfer</a>[<span class=\"descriptionNumberColor\">Vendetta</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Waiting for Healing in Limbo",
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
                    "value1": "CurrentHP",
                    "compareType": "<=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": {
                      "operator": "Variables[0] (MDF_HPAddValue) || RETURN",
                      "displayLines": "MDF_HPAddValue",
                      "constants": [],
                      "variables": [
                        "MDF_HPAddValue"
                      ]
                    }
                  },
                  "abilityName": "Mydeimos_PassiveAbility01_InsertExit",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "AvatarReviveSelf",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "valuePerStack": {
                    "DV_HealRatio": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  },
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1759525523\">Mydeimos_Transfer_LockDEF</a>"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "DV_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "DV_HPConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HPAddValue",
                  "value": {
                    "operator": "Variables[0] (DV_MaxHP) || Variables[1] (DV_HPConvert) || SUB || Variables[2] (0.5) || MUL || RETURN",
                    "displayLines": "((DV_MaxHP - DV_HPConvert) * 0.5)",
                    "constants": [],
                    "variables": [
                      "DV_MaxHP",
                      "DV_HPConvert",
                      0.5
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1759525523\">Mydeimos_Transfer_LockDEF</a>"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "DV_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "DV_HPConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HPAddValue",
                  "value": {
                    "operator": "Variables[0] (DV_MaxHP) || Variables[1] (DV_HPConvert) || SUB || Variables[2] (0.5) || MUL || RETURN",
                    "displayLines": "((DV_MaxHP - DV_HPConvert) * 0.5)",
                    "constants": [],
                    "variables": [
                      "DV_MaxHP",
                      "DV_HPConvert",
                      0.5
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1759525523\">Mydeimos_Transfer_LockDEF</a>"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "DV_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "DV_HPConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HPAddValue",
                  "value": {
                    "operator": "Variables[0] (DV_MaxHP) || Variables[1] (DV_HPConvert) || SUB || Variables[2] (0.5) || MUL || RETURN",
                    "displayLines": "((DV_MaxHP - DV_HPConvert) * 0.5)",
                    "constants": [],
                    "variables": [
                      "DV_MaxHP",
                      "DV_HPConvert",
                      0.5
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DV_CanTransfer"
      ],
      "description": "Max HP increases by <span class=\"descriptionNumberColor\">MDF_HPAddValue</span>. DEF remains at 0.",
      "type": "Other",
      "effectName": "Vendetta",
      "statusName": "Vendetta",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1839693501\">Mydeimos_Eidolon2</a>",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.15) || RETURN",
              "displayLines": "0.15",
              "constants": [],
              "variables": [
                0.15
              ]
            },
            "MDF_PropertyValue2": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1739027787\">Mydeimos_Eidolon4</a>[<span class=\"descriptionNumberColor\">Siren Jolts the Laconic Lion</span>]",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "MDF_PropertyValue2": {
              "operator": "Variables[0] (0.1) || RETURN",
              "displayLines": "0.1",
              "constants": [],
              "variables": [
                0.1
              ]
            }
          }
        }
      ]
    }
  ],
  "references": []
}