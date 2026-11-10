const configAbility = {
  "fileName": "Castorice_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__326484510\">ADV_StageAbility_Maze_Castorice_RadiusFlag</a>",
      "counter": 1,
      "stackType": "Refresh",
      "modifierFlags": [
        "NoAlert",
        "Stun"
      ],
      "onCreation": [
        "Deleted bullshit"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1699701312\">ADV_StageAbility_Maze_Castorice_AttackRadius</a>",
      "counter": 1,
      "stackType": "Refresh"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1885580718\">ADV_StageAbility_Maze_Castorice_Attack</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1034446396\">ADV_StageAbility_Maze_Castorice_Radius</a>",
      "counter": 1,
      "stackType": "Merge",
      "onCreation": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Team Leader",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            }
          },
          "passed": [
            {
              "name": "Create Overworld Entity",
              "summonID": 14071
            }
          ]
        }
      ],
      "onRemoval": [
        {
          "name": "Remove Overworld Entity",
          "targetSummonEntity": {
            "name": "Add Target by Summoned Units",
            "targetSummoner": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "summonID": 14071
          }
        },
        {
          "name": "Remove Overworld Entity",
          "targetSummonEntity": {
            "name": "Add Target by Summoned Units",
            "targetSummoner": {
              "name": "Target Name",
              "target": "{{Adventure Player}}"
            },
            "summonID": 14071
          }
        }
      ],
      "onStageExit": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "overworldID": 140704
        },
        {
          "name": "Remove Overworld Entity",
          "targetSummonEntity": {
            "name": "Add Target by Summoned Units",
            "targetSummoner": {
              "name": "Target Name",
              "target": "{{Adventure Player}}"
            },
            "summonID": 14071
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1273066371\">ADV_GlobalAbility_Maze_Castorice</a>",
      "stackType": "Replace"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-459849199\">Castorice_Eidolon6_QuantumPenetrate</a>[<span class=\"descriptionNumberColor\">Await for Years to Loom</span>]",
      "description": "When dealing DMG, increases Quantum RES PEN by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Await for Years to Loom",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumPEN</span>&nbsp;",
                  "value": "MDF_PropertyValue"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1861384440\">Castorice_Eidolon4_HealTakenRatio</a>[<span class=\"descriptionNumberColor\">Rest in Songs of Gloom</span>]",
      "description": "The HP restored when receiving healing increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "HP Restoration Boost",
      "statusName": "Rest in Songs of Gloom",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
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
      "for": "<a class=\"gModGreen\" id=\"mod__555330029\">Castorice_Eidolon2_Count</a>[<span class=\"descriptionNumberColor\">Ardent Will</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Can be used to offset the HP cost of Netherwing's Memosprite Skill, \"Breath Scorches the Shadow.\" A maximum of <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> \"Ardent Will\" can be possessed at any given time.",
      "type": "Other",
      "effectName": "Ardent Will",
      "statusName": "Ardent Will",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_PropertyValue",
              "multiplier": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2083586529\">Castorice_Eidolon2_OnListenValueChange</a>",
      "stackType": "ReplaceByCaster",
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "Castorice_Rank02_Count",
          "scope": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 9999999,
              "onChange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"555330029\">Castorice_Eidolon2_Count</a>[<span class=\"descriptionNumberColor\">Ardent Will</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"555330029\">Castorice_Eidolon2_Count</a>[<span class=\"descriptionNumberColor\">Ardent Will</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Castorice_Rank02_Count",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"555330029\">Castorice_Eidolon2_Count</a>[<span class=\"descriptionNumberColor\">Ardent Will</span>]",
                      "counter": {
                        "displayLines": "Castorice_Rank02_Count"
                      },
                      "valuePerStack": {
                        "MDF_MaxLayer": {
                          "displayLines": "2"
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__176252830\">Castorice_Eidolon2_Check</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-799988230\">Castorice_PointB3_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">Where the West Wind Dwells</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Every stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, lasting until the end of this turn.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Where the West Wind Dwells",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Action-End Phase",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "statValue": {
                "displayLines": "(MDF_PropertyValue * MDF_Layer)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2144053419\">Castorice_PointB1_HealTaxesListen</a>",
      "execute": [
        {
          "eventTrigger": "Receiving Heal End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Healing",
              "variableName": "Castorice_BeingHealValue",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "Castorice_MaxSpecialSP",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">MaxSpecialEnergy</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Castorice_MaxSpecialSP * Castorice_PointB1_HealRatioDown)"
              },
              "variableName": "Castorice_MaxSpecialSP",
              "skipWhenMindControlled": false
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((Castorice_BeingHealValue * Castorice_PointB1_HPPercent), (Castorice_MaxSpecialSP - Castorice_SumBeingHealValue))"
              },
              "variableName": "HealAmount_CasterAdd",
              "skipWhenMindControlled": false
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HealAmount_CasterAdd",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(Castorice_SumBeingHealValue + HealAmount_CasterAdd)"
                  },
                  "variableName": "Castorice_SumBeingHealValue",
                  "skipWhenMindControlled": false
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1159652346\">Memosprite_CastoriceServant_Passive</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "HealAmount_CasterAdd"
                      },
                      "variableName": "HealAmount_ServantAdd",
                      "skipWhenMindControlled": false
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "CastoriceServant_CurrentHP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Memosprite}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1793501095\">Memosprite_CastoriceServant_GoDie</a>"
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Living State",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster's Memosprite}}"
                            },
                            "livingState": "Mask_AliveOnly"
                          },
                          "passed": [
                            {
                              "name": "Set HP Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster's Memosprite}}"
                              },
                              "setValue": {
                                "displayLines": "(CastoriceServant_CurrentHP + HealAmount_ServantAdd)"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1401999190\">Castorice_AddSpecialSP</a>",
                      "variables": {
                        "_FixedAddValue": {
                          "displayLines": "HealAmount_CasterAdd"
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
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "Castorice_SumBeingHealValue",
              "skipWhenMindControlled": false
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "Castorice_MaxFlag",
              "skipWhenMindControlled": false
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "Castorice_SumBeingHealValue",
              "skipWhenMindControlled": false
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "Castorice_MaxFlag",
              "skipWhenMindControlled": false
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__950021136\">Castorice_PointB1_HealTaxes</a>",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}} - {{Caster}}.[[getMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2144053419\">Castorice_PointB1_HealTaxesListen</a>",
          "haloStatus": true,
          "valuePerStack": {
            "Castorice_PointB1_HPPercent": {
              "displayLines": "1"
            },
            "Castorice_PointB1_HealRatioDown": {
              "displayLines": "0.12"
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2103337058\">Memosprite_Castorice_SpeedRatio</a>[<span class=\"descriptionNumberColor\">Inverted Torch</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "Inverted Torch",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
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
      "for": "<a class=\"gModGreen\" id=\"mod__115720497\">Memosprite_Castorice_PointB2_OnListen</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
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
                "value1": "CurrentHP%",
                "compareType": ">=",
                "value2": {
                  "displayLines": "Castorice_PointB2_HPRatio"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2103337058\">Memosprite_Castorice_SpeedRatio</a>[<span class=\"descriptionNumberColor\">Inverted Torch</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "Castorice_PointB2_SpeedRatio"
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "onChange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "Castorice_PointB2_HPRatio"
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
                        "modifier": "<a class=\"gModGreen\" id=\"2103337058\">Memosprite_Castorice_SpeedRatio</a>[<span class=\"descriptionNumberColor\">Inverted Torch</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2103337058\">Memosprite_Castorice_SpeedRatio</a>[<span class=\"descriptionNumberColor\">Inverted Torch</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "displayLines": "Castorice_PointB2_SpeedRatio"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2103337058\">Memosprite_Castorice_SpeedRatio</a>[<span class=\"descriptionNumberColor\">Inverted Torch</span>]"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2103337058\">Memosprite_Castorice_SpeedRatio</a>[<span class=\"descriptionNumberColor\">Inverted Torch</span>]"
                        }
                      ]
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
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__635972074\">Castorice_Passive_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. This effect stacks up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> time(s).",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "statValue": {
                "displayLines": "(MDF_PropertyValue * MDF_Layer)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-658097441\">Castorice_Ability03_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]",
      "stackType": "ReplaceByCaster",
      "description": "All-Type RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, lasting until the Territory ends.",
      "type": "Debuff",
      "effectName": "All-Type RES Reduction",
      "statusName": "All-Type RES Reduction",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
              "statValue": {
                "displayLines": "(0 - MDF_PropertyValue)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-604294216\">Castorice_Ability03_Field</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "SpecialBattleArea"
      ],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-658097441\">Castorice_Ability03_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]",
          "aliveOnly": "False",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.2"
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
              "scope": "AITag",
              "value": 100,
              "variableName": "DamageCarry"
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
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": "Hide",
              "abilityName": "Skill"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "Castorice_Passive_Count"
              },
              "displaySubType": "Percent",
              "displayShowIcon": "False",
              "maximum": {
                "displayLines": "Castorice_Passive_MaxCount"
              },
              "assignState": "True",
              "bar#": "Number"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "scope": "AITag",
              "value": 10,
              "variableName": "DamageCarry"
            },
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Ultimate"
              ]
            },
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill21",
              "skillSlot": "Skill",
              "enableSecondaryType": "ControlSkill02"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": "Show",
              "abilityName": "Skill"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__445281600\">Castorice_LoseHPPreShow</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
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
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Unselectable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "MDF_PreShowCurrentHP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-604294216\">Castorice_Ability03_Field</a>"
                      },
                      "passed": [
                        {
                          "name": "Update UI Preview",
                          "show": "Show",
                          "skillType": [
                            "Skill"
                          ],
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "previewType": null,
                          "previewValue": {
                            "displayLines": "(MDF_PreShowCurrentHP * MDF_LoseHPRatio02)"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update UI Preview",
                          "show": "Show",
                          "skillType": [
                            "Skill"
                          ],
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "previewType": null,
                          "previewValue": {
                            "displayLines": "(MDF_PreShowCurrentHP * MDF_LoseHPRatio01)"
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
      ]
    }
  ],
  "references": []
}