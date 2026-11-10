const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Hyacine",
  "trimCharacterName": "Hyacine",
  "summonName": "Little Ica",
  "trimSummonName": "LittleIca",
  "abilityList": [
    "Hyacine_Modifiers",
    "Hyacine_LocalPlayer_StandardAbility_AttackBreak",
    "Hyacine_LocalPlayer_Hyacine_TechniqueUsage",
    "Hyacine_LocalPlayer_Hyacine_NormalAtk01",
    "Hyacine_Hyacine_TechniqueInLevel",
    "Hyacine_Hyacine_PassiveAbility01",
    "Hyacine_Hyacine_Ability03_Part02",
    "Hyacine_Hyacine_Ability03_Part01",
    "Hyacine_Hyacine_Ability03_EnterReady",
    "Hyacine_Hyacine_Ability02_Part02",
    "Hyacine_Hyacine_Ability02_Part01",
    "Hyacine_Hyacine_Ability01_Part02",
    "Hyacine_Hyacine_Ability01_Part01",
    "LittleIca_Modifiers",
    "LittleIca_Servant_HyacineServant_DeathRattle",
    "LittleIca_Servant_HyacineServant_BattleCry",
    "LittleIca_Servant_HyacineServant_PassiveAbility",
    "LittleIca_Servant_HyacineServant_Ability01_Part02",
    "LittleIca_Servant_HyacineServant_Ability01_Part01"
  ],
  "abilityObject": {
    "Hyacine_Modifiers": {
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "displayLines": "MDF_PropertyValue"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "displayLines": "MDF_PropertyValue"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                  "value": {
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "displayLines": "_MaxHPAdd"
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
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
                      "value": {
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
    },
    "Hyacine_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Hyacine_LocalPlayer_StandardAbility_AttackBreak",
      "skillTrigger": "MazeCommonPassve01",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"951318209\">ADV_StageAbility_MazeStandard_OnStageEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-247093964\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Standard</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Physical"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"761715744\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Physical</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Fire"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-380086631\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Fire</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Ice"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-97518784\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Ice</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Thunder"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1597144751\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Thunder</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Wind"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1816746695\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Wind</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Quantum"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-418599870\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Quantum</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Imaginary"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1882459002\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Imaginary</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1927069485\">ADV_StageAbility_MazeStandard_ListenEnterBattle_TeamLeader</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Hyacine_LocalPlayer_Hyacine_TechniqueUsage": {
      "fileName": "Hyacine_LocalPlayer_Hyacine_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "140901(SkillMaze)",
          "duration": -1
        },
        "Submit Technique Use"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Hyacine_LocalPlayer_Hyacine_NormalAtk01": {
      "fileName": "Hyacine_LocalPlayer_Hyacine_NormalAtk01",
      "skillTrigger": "NormalAtk",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": "Ability Has a Target",
          "passed": [
            "Deleted bullshit",
            {
              "name": "Shot Fired"
            },
            {
              "name": "Shot Fired",
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance"
                }
              ]
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Shot Fired"
            },
            {
              "name": "Shot Fired",
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance"
                }
              ]
            }
          ]
        }
      ],
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Hyacine_Hyacine_TechniqueInLevel": {
      "fileName": "Hyacine_Hyacine_TechniqueInLevel",
      "childAbilityList": [
        "Hyacine_Hyacine_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1135354482\">StageAbility_Maze_Hyacine_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1998064298\">Hyacine_Maze_AddMaxHp</a>[<span class=\"descriptionNumberColor\">Day So Right, Life So Fine!</span>]",
          "description": "Max HP increases by <span class=\"descriptionNumberColor\">_MaxHPAdd</span>.",
          "type": "Buff",
          "statusName": "Day So Right, Life So Fine!",
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
                    "displayLines": "_MaxHPAdd"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1135354482\">StageAbility_Maze_Hyacine_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
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
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "healPercent": {
                        "displayLines": "0.3"
                      },
                      "healFlat": {
                        "displayLines": "600"
                      },
                      "formula": "Heal from Healer's MaxHP"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1998064298\">Hyacine_Maze_AddMaxHp</a>[<span class=\"descriptionNumberColor\">Day So Right, Life So Fine!</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "valuePerStack": {
                        "_MaxHPAdd": {
                          "displayLines": "0.2"
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
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Hyacine_Hyacine_PassiveAbility01": {
      "fileName": "Hyacine_Hyacine_PassiveAbility01",
      "childAbilityList": [
        "Hyacine_Hyacine_PassiveAbility01"
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
          "name": "Define Custom Variable with Stat",
          "variableName": "_CurrenMaxtHP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "displayLines": "3"
          },
          "assignState": "True",
          "bar#": "Dot"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-151777328\">Hyacine_Passive</a>"
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "variableName": "MDF_Energy_Count",
          "modifierName": "<a class=\"gModGreen\" id=\"1761632932\">Hyacine_IronWater</a>",
          "multiplier": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Gloomy Grin"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"981474753\">Hyacine_PointB1</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Stormy Caress"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"931141896\">Hyacine_PointB2</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.5"
                }
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-151777328\">Hyacine_Passive</a>",
          "execute": [
            {
              "eventTrigger": "Heal Target Start [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1132518124\">Hyacine_Passive_Effect</a>[<span class=\"descriptionNumberColor\">First Light Heals the World</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "stackLimit": {
                    "displayLines": "3"
                  },
                  "valuePerStack": {
                    "MDF_DamageAddRatio": {
                      "displayLines": "0.8"
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "eventTrigger": "Heal Target End [Owner]",
              "execute": [
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
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(_HealCount + 1)"
                      },
                      "variableName": "_HealCount"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Healing",
                  "variableName": "_HealValue",
                  "scope": "ContextCaster",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(_HealValue * (1 + ExtraHealRatio))"
                  },
                  "variableName": "_HealValue"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(_HealValueTotal + _HealValue)"
                  },
                  "variableName": "_HealValueTotal"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "value": {
                    "displayLines": "_HealValueTotal"
                  },
                  "variableName": "_SummonerHealValueTotal"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Memosprite}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"492819159\">Memosprite_HyacineServant_Passive_Mark</a>[<span class=\"descriptionNumberColor\">Rainclouds, Time to Go!</span>]",
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Tempestuous Halt"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1888501948\">Hyacine_PointB3</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"290730475\">Hyacine_Eidolon2_Listen</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Tempestuous Halt"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}.[[getMemosprite]]"
                        }
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1888501948\">Hyacine_PointB3</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_HealCount",
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 99,
                  "onChange": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "value": {
                        "displayLines": "_HealCount"
                      },
                      "variableName": "_SummonerHealCount"
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Tempestuous Halt"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1888501948\">Hyacine_PointB3</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Tempestuous Halt"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1888501948\">Hyacine_PointB3</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Tempestuous Halt"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1888501948\">Hyacine_PointB3</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Tempestuous Halt"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1888501948\">Hyacine_PointB3</a>"
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
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Hyacine_Hyacine_Ability03_Part02": {
      "fileName": "Hyacine_Hyacine_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
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
          "passed": [
            {
              "name": "Summon Memosprite",
              "memoID": 11409,
              "valuePerStack": {
                "_SummonerHealValueTotal": {
                  "displayLines": "_HealValueTotal"
                },
                "AbilityP01_P3_DamageIncrease": {
                  "displayLines": "0.8"
                },
                "AbilityP01_P4_LifeTime": {
                  "displayLines": "2"
                },
                "AbilityP01_P5_Layer": {
                  "displayLines": "3"
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Stormy Caress"
          },
          "passed": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "dispelCount": {
                "displayLines": "1"
              },
              "dispelOrder": "LastAdded"
            }
          ]
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}} - {{Caster}}.[[getMemosprite]]"
          },
          "healPercent": {
            "displayLines": "0.1"
          },
          "healFlat": {
            "displayLines": "200"
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "healPercent": {
            "displayLines": "0.12"
          },
          "healFlat": {
            "displayLines": "240"
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_CurrenMaxtHP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_CurrentHPConvert",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_CurrenMaxtHP - _CurrentHPConvert)"
          },
          "variableName": "_CurrenMaxtHP"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1902777328\">Memosprite_HyacineServant_MaxHpHalo</a>[<span class=\"descriptionNumberColor\">After Rain</span>]",
          "duration": {
            "displayLines": "3"
          },
          "valuePerStack": {
            "MDF_HaloCurrentHP": {
              "displayLines": "_CurrenMaxtHP"
            },
            "MDF_HaloMaxHPRatio": {
              "displayLines": "0.3"
            },
            "MDF_HaloMaxHPValue": {
              "displayLines": "600"
            },
            "MDF_ExtraMaxHPRatio": {
              "displayLines": "0.5"
            }
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target List}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "3"
          },
          "maximum": {
            "displayLines": "3"
          },
          "assignState": "True",
          "bar#": "Dot"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Hyacine_Hyacine_Ability03_Part01": {
      "fileName": "Hyacine_Hyacine_Ability03_Part01",
      "childAbilityList": [
        "Hyacine_Hyacine_Ability03_Camera",
        "Hyacine_Hyacine_Ability03_EnterReady",
        "Hyacine_Hyacine_Ability03_Part01",
        "Hyacine_Hyacine_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Hyacine_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{All Team Members}}"
      }
    },
    "Hyacine_Hyacine_Ability03_EnterReady": {
      "fileName": "Hyacine_Hyacine_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Hyacine_Hyacine_Ability02_Part02": {
      "fileName": "Hyacine_Hyacine_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
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
          "passed": [
            {
              "name": "Summon Memosprite",
              "memoID": 11409,
              "valuePerStack": {
                "_SummonerHealValueTotal": {
                  "displayLines": "_HealValueTotal"
                },
                "AbilityP01_P3_DamageIncrease": {
                  "displayLines": "0.8"
                },
                "AbilityP01_P4_LifeTime": {
                  "displayLines": "2"
                },
                "AbilityP01_P5_Layer": {
                  "displayLines": "3"
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "_IsSummon"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "_IsSummon"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Stormy Caress"
          },
          "passed": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "dispelCount": {
                "displayLines": "1"
              },
              "dispelOrder": "LastAdded"
            }
          ]
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members}} - {{Caster}}.[[getMemosprite]]"
          },
          "healPercent": {
            "displayLines": "0.08"
          },
          "healFlat": {
            "displayLines": "160"
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "healPercent": {
            "displayLines": "0.1"
          },
          "healFlat": {
            "displayLines": "200"
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target List}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          }
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Hyacine_Hyacine_Ability02_Part01": {
      "fileName": "Hyacine_Hyacine_Ability02_Part01",
      "childAbilityList": [
        "Hyacine_Hyacine_Ability02_Camera",
        "Hyacine_Hyacine_Ability02_Part01",
        "Hyacine_Hyacine_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Hyacine_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{All Team Members}}"
      }
    },
    "Hyacine_Hyacine_Ability01_Part02": {
      "fileName": "Hyacine_Hyacine_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "displayLines": "0.5"
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Hyacine_Hyacine_Ability01_Part01": {
      "fileName": "Hyacine_Hyacine_Ability01_Part01",
      "childAbilityList": [
        "Hyacine_Hyacine_Ability01_Camera",
        "Hyacine_Hyacine_Ability01_Part01",
        "Hyacine_Hyacine_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Hyacine_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "LittleIca_Modifiers": {
      "fileName": "LittleIca_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1467878909\">Memosprite_HyacineServant_ChallangeScore</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "ServantInherit_ModifierContinuation"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2026163190\">Memosprite_HyacineServant_Eidolon6_PenetrateRatio</a>[<span class=\"descriptionNumberColor\">O Sky, Heed My Plea</span>]",
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PenetrateRatio</span>.",
          "type": "Buff",
          "statusName": "O Sky, Heed My Plea",
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
                    "displayLines": "MDF_PenetrateRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__3098173\">Memosprite_HyacineServant_Eidolon6_PenetrateRatio_Halo</a>",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2026163190\">Memosprite_HyacineServant_Eidolon6_PenetrateRatio</a>[<span class=\"descriptionNumberColor\">O Sky, Heed My Plea</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PenetrateRatio": {
                  "displayLines": "MDF_PenetrateRatio"
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1897109390\">Memosprite_HyacineServant_Eidolon2SpeedUp</a>[<span class=\"descriptionNumberColor\">Come Sit in My Courtyard</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_SpeedUpRatio</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "Come Sit in My Courtyard",
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
                    "displayLines": "MDF_SpeedUpRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__889204199\">Memosprite_HyacineServant_LoseHpSet</a>",
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "MDF_ModifierOwnerCurrentHP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1255340149\">Memosprite_HyacineServant_Passive_MaxHp_Increase</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
                  "value": {
                    "displayLines": "((MDF_CurrentHP * MDF_MaxHPRatio) + MDF_MaxHPValue)"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__492819159\">Memosprite_HyacineServant_Passive_Mark</a>[<span class=\"descriptionNumberColor\">Rainclouds, Time to Go!</span>]",
          "stackType": "Replace",
          "description": "The tally of healing: <span class=\"descriptionNumberColor\">MDF_HealValueTotal</span>",
          "type": "Other",
          "statusName": "Rainclouds, Time to Go!",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "displayLines": "(_ServantHealValueTotal + _SummonerHealValueTotal)"
                  },
                  "variableName": "MDF_HealValueTotal"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1585516308\">Memosprite_Hyacine_Resist</a>",
          "modifierFlags": [
            "ImmuneDebuff"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1066684227\">Memosprite_HyacineServant_Passive</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Anyone]: End Pre-action Phase",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Consume",
                      "consumeFrom": "MaxHP",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "consumePercent": {
                        "displayLines": "0.04"
                      },
                      "dynamicAssignment": "_RealRatio",
                      "attackType": "Pursued"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "_ServantMaxHP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(_RealRatio * _ServantMaxHP)"
                      },
                      "variableName": "_ServantLoseHPValue"
                    },
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1467878909\">Memosprite_HyacineServant_ChallangeScore</a>",
                      "variable": "_ServantLoseHPValueTotal",
                      "target2": null,
                      "variable2": "_ServantLoseHPValueTotal2"
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1467878909\">Memosprite_HyacineServant_ChallangeScore</a>",
                      "variableName": "_ServantLoseHPValueTotal",
                      "value": {
                        "displayLines": "(_ServantLoseHPValueTotal2 + _ServantLoseHPValue)"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1902777328\">Memosprite_HyacineServant_MaxHpHalo</a>[<span class=\"descriptionNumberColor\">After Rain</span>]"
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "variableName": "Summoner_MaxHP",
                              "readTarget": {
                                "name": "Target Name",
                                "target": "{{Caster's Summoner}}"
                              },
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                            },
                            {
                              "name": "Heal",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "healFlat": {
                                "displayLines": "((Summoner_MaxHP * 0.02) + 20)"
                              },
                              "formula": "Heal from Healer's MaxHP"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable with Stat",
                          "variableName": "Summoner_MaxHP",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Caster's Summoner}}"
                          },
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                        },
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "healFlat": {
                            "displayLines": "((Summoner_MaxHP * 0.02) + 20)"
                          },
                          "formula": "Heal from Healer's MaxHP"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "variableName": "Summoner_MaxHP",
                              "readTarget": {
                                "name": "Target Name",
                                "target": "{{Caster's Summoner}}"
                              },
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                            },
                            {
                              "name": "Heal",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "healFlat": {
                                "displayLines": "((Summoner_MaxHP * 0.02) + 20)"
                              },
                              "formula": "Heal from Healer's MaxHP"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
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
              "eventTrigger": "Action End [Owner]"
            },
            {
              "eventTrigger": "Action End [Anyone]"
            },
            {
              "eventTrigger": "Heal Target Start [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1132518124\">Hyacine_Passive_Effect</a>[<span class=\"descriptionNumberColor\">First Light Heals the World</span>]",
                  "duration": {
                    "displayLines": "AbilityP01_P4_LifeTime"
                  },
                  "stackLimit": {
                    "displayLines": "_ServantLoseHPValueTotal"
                  },
                  "valuePerStack": {
                    "MDF_DamageAddRatio": {
                      "displayLines": "AbilityP01_P3_DamageIncrease"
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "eventTrigger": "Heal Target End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Healing",
                  "variableName": "_ServantHealValue",
                  "scope": "ContextCaster",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(_ServantHealValueTotal + _ServantHealValue)"
                  },
                  "variableName": "_ServantHealValueTotal"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"492819159\">Memosprite_HyacineServant_Passive_Mark</a>[<span class=\"descriptionNumberColor\">Rainclouds, Time to Go!</span>]"
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1585516308\">Memosprite_Hyacine_Resist</a>"
                },
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "Hyacine_Summon",
                  "state": false
                },
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedOverride</span>&nbsp;",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "value1": "_TempServantHealValueTotal",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "variable": "_TempServantHealValueTotal",
                      "target2": null,
                      "variable2": "_ServantHealValueTotal"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"492819159\">Memosprite_HyacineServant_Passive_Mark</a>[<span class=\"descriptionNumberColor\">Rainclouds, Time to Go!</span>]",
                  "casterAssign": "TargetSelf"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "value": {
                    "displayLines": "_ServantHealValueTotal"
                  },
                  "variableName": "_TempServantHealValueTotal"
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "HPChangeValue",
                  "value": "ParamValue"
                },
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
                        "value1": "HPChangeValue",
                        "compareType": "<",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Target",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1902777328\">Memosprite_HyacineServant_MaxHpHalo</a>[<span class=\"descriptionNumberColor\">After Rain</span>]"
                  },
                  "passed": [
                    {
                      "name": "Decrement Buff Durations",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Check Callback Flag Parameter",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Param Flag",
                    "flagName": "CallBack_SettleSkillOrInsertAbility"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Consume",
                          "consumeFrom": "MaxHP",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "consumePercent": {
                            "displayLines": "0.04"
                          },
                          "dynamicAssignment": "_RealRatio",
                          "attackType": "Pursued"
                        },
                        {
                          "name": "Define Custom Variable with Stat",
                          "variableName": "_ServantMaxHP",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(_RealRatio * _ServantMaxHP)"
                          },
                          "variableName": "_ServantLoseHPValue"
                        },
                        {
                          "name": "Define Custom Variable with Copy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1467878909\">Memosprite_HyacineServant_ChallangeScore</a>",
                          "variable": "_ServantLoseHPValueTotal",
                          "target2": null,
                          "variable2": "_ServantLoseHPValueTotal2"
                        },
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"1467878909\">Memosprite_HyacineServant_ChallangeScore</a>",
                          "variableName": "_ServantLoseHPValueTotal",
                          "value": {
                            "displayLines": "(_ServantLoseHPValueTotal2 + _ServantLoseHPValue)"
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster's Summoner}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1902777328\">Memosprite_HyacineServant_MaxHpHalo</a>[<span class=\"descriptionNumberColor\">After Rain</span>]"
                          },
                          "passed": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "variableName": "Summoner_MaxHP",
                                  "readTarget": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Summoner}}"
                                  },
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                                },
                                {
                                  "name": "Heal",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "healFlat": {
                                    "displayLines": "((Summoner_MaxHP * 0.02) + 20)"
                                  },
                                  "formula": "Heal from Healer's MaxHP"
                                },
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable with Stat",
                              "variableName": "Summoner_MaxHP",
                              "readTarget": {
                                "name": "Target Name",
                                "target": "{{Caster's Summoner}}"
                              },
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                            },
                            {
                              "name": "Heal",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "healFlat": {
                                "displayLines": "((Summoner_MaxHP * 0.02) + 20)"
                              },
                              "formula": "Heal from Healer's MaxHP"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "variableName": "Summoner_MaxHP",
                                  "readTarget": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Summoner}}"
                                  },
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                                },
                                {
                                  "name": "Heal",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "healFlat": {
                                    "displayLines": "((Summoner_MaxHP * 0.02) + 20)"
                                  },
                                  "formula": "Heal from Healer's MaxHP"
                                },
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1507711781\">Memosprite_HyacineServant_LoseHpFlag</a>"
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
          ]
        }
      ],
      "references": []
    },
    "LittleIca_Servant_HyacineServant_DeathRattle": {
      "fileName": "LittleIca_Servant_HyacineServant_DeathRattle",
      "childAbilityList": [
        "LittleIca_Servant_HyacineServant_DeathRattle"
      ],
      "skillTrigger": "SkillP04",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1268391312\">Memosprite_HyacineServant_DeathRattle</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1268391312\">Memosprite_HyacineServant_DeathRattle</a>",
          "modifierFlags": [
            "Deathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "(0 - 0.3)"
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "LittleIca_Servant_HyacineServant_BattleCry": {
      "fileName": "LittleIca_Servant_HyacineServant_BattleCry",
      "childAbilityList": [
        "LittleIca_Servant_HyacineServant_BattleCry"
      ],
      "skillTrigger": "SkillP03",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1846136142\">Memosprite_HyacineServant_BattleCry</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1846136142\">Memosprite_HyacineServant_BattleCry</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "value1": "_FirstTimeSummon",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "value": {
                        "displayLines": "(15 + 30)"
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "value": 1,
                      "variableName": "_FirstTimeSummon"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "value": {
                        "displayLines": "15"
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "LittleIca_Servant_HyacineServant_PassiveAbility": {
      "fileName": "LittleIca_Servant_HyacineServant_PassiveAbility",
      "childAbilityList": [
        "LittleIca_Servant_HyacineServant_PassiveAbility"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1066684227\">Memosprite_HyacineServant_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1467878909\">Memosprite_HyacineServant_ChallangeScore</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"124089426\">Memosprite_HyacineServant_LoseHpPassive</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6,
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"3098173\">Memosprite_HyacineServant_Eidolon6_PenetrateRatio_Halo</a>",
              "valuePerStack": {
                "MDF_PenetrateRatio": {
                  "displayLines": "0.2"
                }
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__124089426\">Memosprite_HyacineServant_LoseHpPassive</a>",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"889204199\">Memosprite_HyacineServant_LoseHpSet</a>",
              "haloStatus": true
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "LittleIca_Servant_HyacineServant_Ability01_Part02": {
      "fileName": "LittleIca_Servant_HyacineServant_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "scope": "SummonerEntity",
          "value": 0,
          "variableName": "_HealCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_ServantHealValueTotal + _SummonerHealValueTotal)"
          },
          "variableName": "_ServantHealValueTotal"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "_ServantHealValueTotal"
          },
          "variableName": "_ServantHealValueTotalNew"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6,
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(_ServantHealValueTotal - (_ServantHealValueTotal * 0.5))"
              },
              "variableName": "_ServantHealValueTotal"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(_ServantHealValueTotal - (_ServantHealValueTotal * 0.12))"
              },
              "variableName": "_ServantHealValueTotal"
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_ServantMaxHP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "_SummonerHealValueTotal"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "value": 0,
          "variableName": "_HealValueTotal"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"492819159\">Memosprite_HyacineServant_Passive_Mark</a>[<span class=\"descriptionNumberColor\">Rainclouds, Time to Go!</span>]"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "DamageFlat": {
              "displayLines": "(_ServantHealValueTotalNew * 0.2)"
            },
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "ToughnessDMGType": {
              "DamageType": "Wind"
            },
            "Tags": null,
            "attackType": "Memosprite",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "LittleIca_Servant_HyacineServant_Ability01_Part01": {
      "fileName": "LittleIca_Servant_HyacineServant_Ability01_Part01",
      "childAbilityList": [
        "LittleIca_Servant_HyacineServant_Ability01_Part01",
        "LittleIca_Servant_HyacineServant_Ability01_Part02",
        "LittleIca_Servant_HyacineServant_Insert_Camera",
        "LittleIca_Servant_HyacineServant_Insert_Camera_Charm"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Memosprite",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Servant_HyacineServant_Ability01_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Charm"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    }
  }
}