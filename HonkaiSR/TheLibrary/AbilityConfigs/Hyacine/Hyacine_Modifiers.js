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
      "for": "<a class=\"gModGreen\" id=\"mod__-2050919884\">ADV_StageAbility_Maze_Hyacine_00</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__593318455\">Hyacine_Ability03_MaxHP_Grow</a>[<span class=\"descriptionNumberColor\">After Rain</span>]",
      "description": "Max HP increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> plus <span class=\"descriptionNumberColor\">MDF_MaxHPValue</span>.",
      "type": "Buff",
      "statusName": "After Rain",
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
                  "value": 0,
                  "variableName": "MDF_ExtraMaxHPRatio"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_MaxHPRatio + MDF_ExtraMaxHPRatio)"
              },
              "variableName": "MDF_PropertyValue"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_MaxHPValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1347756164\">Memosprite_HyacineServant_MuteSpeed</a>",
      "modifierFlags": [
        "MuteSpeed"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__290730475\">Hyacine_Eidolon2_Listen</a>",
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
                    "target1": {
                      "name": "Target Name",
                      "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1897109390\">Memosprite_HyacineServant_Eidolon2SpeedUp</a>[<span class=\"descriptionNumberColor\">Come Sit in My Courtyard</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "MDF_SpeedUpRatio": {
                      "displayLines": "0.3"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1902777328\">Memosprite_HyacineServant_MaxHpHalo</a>[<span class=\"descriptionNumberColor\">After Rain</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
          "modifier": "<a class=\"gModGreen\" id=\"593318455\">Hyacine_Ability03_MaxHP_Grow</a>[<span class=\"descriptionNumberColor\">After Rain</span>]",
          "aliveOnly": "False",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_CurrentHP": {
              "displayLines": "_CurrenMaxtHP"
            },
            "MDF_MaxHPRatio": {
              "displayLines": "0.3"
            },
            "MDF_MaxHPValue": {
              "displayLines": "600"
            },
            "MDF_ExtraMaxHPRatio": {
              "displayLines": "0.5"
            }
          }
        }
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "_Energy"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "_Energy"
              },
              "maximum": {
                "displayLines": "3"
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
              "modifierName": "<a class=\"gModGreen\" id=\"-1902777328\">Memosprite_HyacineServant_MaxHpHalo</a>[<span class=\"descriptionNumberColor\">After Rain</span>]",
              "multiplier": 1
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "_Energy"
              },
              "maximum": {
                "displayLines": "3"
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
                  "value": 0,
                  "variableName": "MDF_ExtraMaxHPRatio"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_HaloMaxHPRatio + MDF_ExtraMaxHPRatio)"
              },
              "variableName": "MDF_PropertyValue"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_HaloMaxHPValue"
              }
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "LifeTime",
              "variableName": "_Energy",
              "modifierName": "<a class=\"gModGreen\" id=\"-1902777328\">Memosprite_HyacineServant_MaxHpHalo</a>[<span class=\"descriptionNumberColor\">After Rain</span>]",
              "multiplier": 1
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "_Energy"
              },
              "maximum": {
                "displayLines": "3"
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
                    "team": "Player Team"
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
                    "displayLines": "0.08"
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
              "priorityTag": "CharacterChainedSkill"
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
                  "modifierName": "<a class=\"gModGreen\" id=\"-1902777328\">Memosprite_HyacineServant_MaxHpHalo</a>[<span class=\"descriptionNumberColor\">After Rain</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "_Energy"
                  },
                  "maximum": {
                    "displayLines": "3"
                  },
                  "assignState": "True",
                  "bar#": "Dot"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1132518124\">Hyacine_Passive_Effect</a>[<span class=\"descriptionNumberColor\">First Light Heals the World</span>]",
      "stackType": "Replace",
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageAddRatioTotal</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "First Light Heals the World",
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
              "value": {
                "displayLines": "(MDF_DamageAddRatio * MDF_Layer)"
              },
              "variableName": "MDF_DamageAddRatioTotal"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_DamageAddRatioTotal"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__931141896\">Hyacine_PointB2</a>",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__672502407\">Hyacine_PointB1_Effect</a>",
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
                  "displayLines": "MDF_HPRatio"
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Healing Stats",
                  "on": "Healer",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
                  "value": {
                    "displayLines": "MDF_HealRatio"
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_CritChance"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__981474753\">Hyacine_PointB1</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"672502407\">Hyacine_PointB1_Effect</a>",
              "valuePerStack": {
                "MDF_CritChance": {
                  "displayLines": "1"
                },
                "MDF_HPRatio": {
                  "displayLines": "0.5"
                },
                "MDF_HealRatio": {
                  "displayLines": "0.25"
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
                  "modifier": "<a class=\"gModGreen\" id=\"672502407\">Hyacine_PointB1_Effect</a>",
                  "valuePerStack": {
                    "MDF_CritChance": {
                      "displayLines": "1"
                    },
                    "MDF_HPRatio": {
                      "displayLines": "0.5"
                    },
                    "MDF_HealRatio": {
                      "displayLines": "0.25"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1110430040\">Hyacine_PointB3_Effect</a>[<span class=\"descriptionNumberColor\">Tempestuous Halt</span>]",
      "stackType": "Replace",
      "description": "Max HP increases by <span class=\"descriptionNumberColor\">_MaxHPAdd</span> and Outgoing Healing increases by <span class=\"descriptionNumberColor\">_HealHPRatioAdd</span>.",
      "type": "Buff",
      "statusName": "Tempestuous Halt",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "statValue": {
                "displayLines": "_MaxHPAdd"
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingConverted</span>&nbsp;",
              "statValue": {
                "displayLines": "_HealHPRatioAdd"
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
                  "popUpText": "Max HP increases by <span class=\"descriptionNumberColor\">_MaxHPAdd</span>, Outgoing Healing increases by <span class=\"descriptionNumberColor\">_HealHPRatioAdd</span>, and CRIT DMG increases by <span class=\"descriptionNumberColor\">_MaxCritDmgAdd</span>."
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
                  "statValue": {
                    "displayLines": "_MaxCritDmgAdd"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1888501948\">Hyacine_PointB3</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "_CurrentSpeed",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
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
                  "displayLines": "200"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "_CurrentSpeedConvert",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(_CurrentSpeed - _CurrentSpeedConvert)"
                  },
                  "variableName": "_CurrentSpeed"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(_CurrentSpeed - 200)"
                  },
                  "variableName": "_OverCountSpeedValue"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_OverCountSpeedValue",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "200"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "200"
                      },
                      "variableName": "_OverCountSpeedValue"
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
                      "displayLines": "1"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((_OverCountSpeedValue / 1)) * 0.01)"
                      },
                      "variableName": "_HealHPRatioAdd"
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
                          "value": {
                            "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((_OverCountSpeedValue / 1)) * 0.02)"
                          },
                          "variableName": "_MaxCritDmgAdd"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "_HealHPRatioAdd"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "_MaxCritDmgAdd"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}+{{Caster's Memosprite}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1110430040\">Hyacine_PointB3_Effect</a>[<span class=\"descriptionNumberColor\">Tempestuous Halt</span>]",
                  "valuePerStack": {
                    "_MaxHPAdd": {
                      "displayLines": "0.2"
                    },
                    "_HealHPRatioAdd": {
                      "displayLines": "_HealHPRatioAdd"
                    },
                    "_MaxCritDmgAdd": {
                      "displayLines": "_MaxCritDmgAdd"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1110430040\">Hyacine_PointB3_Effect</a>[<span class=\"descriptionNumberColor\">Tempestuous Halt</span>]"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}