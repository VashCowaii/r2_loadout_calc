const configAbility = {
  "fileName": "Hyacine_Modifiers",
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
      "for": "Hyacine_Ability03_MaxHP_Grow[<span class=\"descriptionNumberColor\">After Rain</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ExtraMaxHPRatio",
                  "value": 0
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] (MDF_MaxHPRatio) || Variables[1] (MDF_ExtraMaxHPRatio) || ADD || RETURN",
                "displayLines": "(MDF_MaxHPRatio + MDF_ExtraMaxHPRatio)",
                "constants": [],
                "variables": [
                  "MDF_MaxHPRatio",
                  "MDF_ExtraMaxHPRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
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
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_MaxHPValue) || RETURN",
                "displayLines": "MDF_MaxHPValue",
                "constants": [],
                "variables": [
                  "MDF_MaxHPValue"
                ]
              }
            }
          ]
        }
      ],
      "description": "Max HP increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> plus <span class=\"descriptionNumberColor\">MDF_MaxHPValue</span>.",
      "type": "Buff",
      "statusName": "After Rain"
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_HyacineServant_MuteSpeed",
      "modifierFlags": [
        "MuteSpeed"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Hyacine_Eidolon2_Listen",
      "execute": [
        {
          "eventTrigger": "HP Change [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Memosprite_HyacineServant_Eidolon2SpeedUp[<span class=\"descriptionNumberColor\">Come Sit in My Courtyard</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_SpeedUpRatio": {
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
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Memosprite_HyacineServant_MaxHpHalo[<span class=\"descriptionNumberColor\">After Rain</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Energy",
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (_Energy) || RETURN",
                "displayLines": "_Energy",
                "constants": [],
                "variables": [
                  "_Energy"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "assignState": "True",
              "bar#": "Dot"
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Owner][?]",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "LifeTime",
              "variableName": "_Energy",
              "modifierName": "Memosprite_HyacineServant_MaxHpHalo[<span class=\"descriptionNumberColor\">After Rain</span>]",
              "multiplier": 1
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (_Energy) || RETURN",
                "displayLines": "_Energy",
                "constants": [],
                "variables": [
                  "_Energy"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "assignState": "True",
              "bar#": "Dot"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ExtraMaxHPRatio",
                  "value": 0
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] (MDF_HaloMaxHPRatio) || Variables[1] (MDF_ExtraMaxHPRatio) || ADD || RETURN",
                "displayLines": "(MDF_HaloMaxHPRatio + MDF_ExtraMaxHPRatio)",
                "constants": [],
                "variables": [
                  "MDF_HaloMaxHPRatio",
                  "MDF_ExtraMaxHPRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
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
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_HaloMaxHPValue) || RETURN",
                "displayLines": "MDF_HaloMaxHPValue",
                "constants": [],
                "variables": [
                  "MDF_HaloMaxHPValue"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "LifeTime",
              "variableName": "_Energy",
              "modifierName": "Memosprite_HyacineServant_MaxHpHalo[<span class=\"descriptionNumberColor\">After Rain</span>]",
              "multiplier": 1
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (_Energy) || RETURN",
                "displayLines": "_Energy",
                "constants": [],
                "variables": [
                  "_Energy"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "assignState": "True",
              "bar#": "Dot"
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
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
                      "target": "{{Parameter Target}}"
                    },
                    "team": "TeamLight"
                  },
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (0.08) || RETURN",
                    "displayLines": "0.08",
                    "constants": [],
                    "variables": [
                      0.08
                    ]
                  },
                  "formula": "Heal from Healer's MaxHP"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Inject Extra-Turn",
              "actionTag": null,
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "afterInjection": [],
              "priorityTag": "Character_HighPriorityAction"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster's Memosprite}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "LifeTime",
                  "variableName": "_Energy",
                  "modifierName": "Memosprite_HyacineServant_MaxHpHalo[<span class=\"descriptionNumberColor\">After Rain</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_Energy) || RETURN",
                    "displayLines": "_Energy",
                    "constants": [],
                    "variables": [
                      "_Energy"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "assignState": "True",
                  "bar#": "Dot"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_HaloCurrentHP",
        "MDF_HaloMaxHPRatio",
        "MDF_HaloMaxHPValue",
        "MDF_ExtraMaxHPRatio"
      ],
      "latentQueue": [],
      "description": "Max HP increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> plus <span class=\"descriptionNumberColor\">MDF_HaloMaxHPValue</span>.",
      "type": "Buff",
      "effectName": "After Rain",
      "statusName": "After Rain",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}} - {{Caster}}"
          },
          "modifier": "Hyacine_Ability03_MaxHP_Grow[<span class=\"descriptionNumberColor\">After Rain</span>]",
          "aliveOnly": "False",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_CurrentHP": {
              "operator": "Variables[0] (_CurrenMaxtHP) || RETURN",
              "displayLines": "_CurrenMaxtHP",
              "constants": [],
              "variables": [
                "_CurrenMaxtHP"
              ]
            },
            "MDF_MaxHPRatio": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "MDF_MaxHPValue": {
              "operator": "Variables[0] (600) || RETURN",
              "displayLines": "600",
              "constants": [],
              "variables": [
                600
              ]
            },
            "MDF_ExtraMaxHPRatio": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Hyacine_Passive_Effect[<span class=\"descriptionNumberColor\">First Light Heals the World</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_DamageAddRatioTotal",
              "value": {
                "operator": "Variables[0] (MDF_DamageAddRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_DamageAddRatio * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_DamageAddRatio",
                  "MDF_Layer"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageAddRatioTotal) || RETURN",
                "displayLines": "MDF_DamageAddRatioTotal",
                "constants": [],
                "variables": [
                  "MDF_DamageAddRatioTotal"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageAddRatio"
      ],
      "latentQueue": [],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageAddRatioTotal</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "First Light Heals the World"
    },
    {
      "name": "Modifier Construction",
      "for": "Hyacine_PointB2",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
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
      "for": "Hyacine_PointB1_Effect",
      "execute": [
        {
          "eventTrigger": "Heal Target Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (MDF_HPRatio) || RETURN",
                  "displayLines": "MDF_HPRatio",
                  "constants": [],
                  "variables": [
                    "MDF_HPRatio"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Healing Stats",
                  "on": "Healer",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_HealRatio) || RETURN",
                    "displayLines": "MDF_HealRatio",
                    "constants": [],
                    "variables": [
                      "MDF_HealRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
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
                "operator": "Variables[0] (MDF_CritChance) || RETURN",
                "displayLines": "MDF_CritChance",
                "constants": [],
                "variables": [
                  "MDF_CritChance"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Hyacine_PointB1",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Hyacine_PointB1_Effect",
              "valuePerStack": {
                "MDF_CritChance": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "MDF_HPRatio": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                },
                "MDF_HealRatio": {
                  "operator": "Variables[0] (0.25) || RETURN",
                  "displayLines": "0.25",
                  "constants": [],
                  "variables": [
                    0.25
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Caster}}.[[getMemosprite]]"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Hyacine_PointB1_Effect",
                  "valuePerStack": {
                    "MDF_CritChance": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "MDF_HPRatio": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    },
                    "MDF_HealRatio": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
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
      "for": "Hyacine_PointB3_Effect[<span class=\"descriptionNumberColor\">Tempestuous Halt</span>]",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (_MaxHPAdd) || RETURN",
                "displayLines": "_MaxHPAdd",
                "constants": [],
                "variables": [
                  "_MaxHPAdd"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (_HealHPRatioAdd) || RETURN",
                "displayLines": "_HealHPRatioAdd",
                "constants": [],
                "variables": [
                  "_HealHPRatioAdd"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_MaxCritDmgAdd",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Max HP increases by #1[i]%, Outgoing Healing increases by #2[i]%, and CRIT DMG increases by #3[i]%."
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_MaxCritDmgAdd) || RETURN",
                    "displayLines": "_MaxCritDmgAdd",
                    "constants": [],
                    "variables": [
                      "_MaxCritDmgAdd"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "description": "Max HP increases by <span class=\"descriptionNumberColor\">_MaxHPAdd</span> and Outgoing Healing increases by <span class=\"descriptionNumberColor\">_HealHPRatioAdd</span>.",
      "type": "Buff",
      "statusName": "Tempestuous Halt"
    },
    {
      "name": "Modifier Construction",
      "for": "Hyacine_PointB3",
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
              "variableName": "_CurrentSpeed",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "_CurrentSpeed",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (200) || RETURN",
                  "displayLines": "200",
                  "constants": [],
                  "variables": [
                    200
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_CurrentSpeedConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CurrentSpeed",
                  "value": {
                    "operator": "Variables[0] (_CurrentSpeed) || Variables[1] (_CurrentSpeedConvert) || SUB || RETURN",
                    "displayLines": "(_CurrentSpeed - _CurrentSpeedConvert)",
                    "constants": [],
                    "variables": [
                      "_CurrentSpeed",
                      "_CurrentSpeedConvert"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_OverCountSpeedValue",
                  "value": {
                    "operator": "Variables[0] (_CurrentSpeed) || Variables[1] (200) || SUB || RETURN",
                    "displayLines": "(_CurrentSpeed - 200)",
                    "constants": [],
                    "variables": [
                      "_CurrentSpeed",
                      200
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_OverCountSpeedValue",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (200) || RETURN",
                      "displayLines": "200",
                      "constants": [],
                      "variables": [
                        200
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_OverCountSpeedValue",
                      "value": {
                        "operator": "Variables[0] (200) || RETURN",
                        "displayLines": "200",
                        "constants": [],
                        "variables": [
                          200
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_OverCountSpeedValue",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_HealHPRatioAdd",
                      "value": {
                        "operator": "Variables[0] (FLOOR) || Variables[1] (_OverCountSpeedValue) || Variables[2] (1) || DIV || PARAM_1 || FUNCTION || Variables[3] (0.01) || MUL || RETURN",
                        "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((_OverCountSpeedValue / 1)) * 0.01)",
                        "constants": [],
                        "variables": [
                          "FLOOR",
                          "_OverCountSpeedValue",
                          1,
                          0.01
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 4
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_MaxCritDmgAdd",
                          "value": {
                            "operator": "Variables[0] (FLOOR) || Variables[1] (_OverCountSpeedValue) || Variables[2] (1) || DIV || PARAM_1 || FUNCTION || Variables[3] (0.02) || MUL || RETURN",
                            "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((_OverCountSpeedValue / 1)) * 0.02)",
                            "constants": [],
                            "variables": [
                              "FLOOR",
                              "_OverCountSpeedValue",
                              1,
                              0.02
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_HealHPRatioAdd",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_MaxCritDmgAdd",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}+{{Caster's Memosprite}}"
                  },
                  "modifier": "Hyacine_PointB3_Effect[<span class=\"descriptionNumberColor\">Tempestuous Halt</span>]",
                  "valuePerStack": {
                    "_MaxHPAdd": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "_HealHPRatioAdd": {
                      "operator": "Variables[0] (_HealHPRatioAdd) || RETURN",
                      "displayLines": "_HealHPRatioAdd",
                      "constants": [],
                      "variables": [
                        "_HealHPRatioAdd"
                      ]
                    },
                    "_MaxCritDmgAdd": {
                      "operator": "Variables[0] (_MaxCritDmgAdd) || RETURN",
                      "displayLines": "_MaxCritDmgAdd",
                      "constants": [],
                      "variables": [
                        "_MaxCritDmgAdd"
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
                    "target": "{{Caster}}+{{Caster's Memosprite}}"
                  },
                  "modifier": "Hyacine_PointB3_Effect[<span class=\"descriptionNumberColor\">Tempestuous Halt</span>]"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_SummonerHealCount"
      ]
    }
  ],
  "references": []
}