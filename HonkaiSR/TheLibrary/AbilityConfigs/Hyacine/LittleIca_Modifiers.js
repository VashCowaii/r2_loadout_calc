const configAbility = {
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2026163190\">Memosprite_HyacineServant_Eidolon6_PenetrateRatio</a>[<span class=\"descriptionNumberColor\">O Sky, Heed My Plea</span>]",
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
                "operator": "Variables[0] (MDF_PenetrateRatio) || RETURN",
                "displayLines": "MDF_PenetrateRatio",
                "constants": [],
                "variables": [
                  "MDF_PenetrateRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PenetrateRatio</span>.",
      "type": "Buff",
      "statusName": "O Sky, Heed My Plea"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__3098173\">Memosprite_HyacineServant_Eidolon6_PenetrateRatio_Halo</a>",
      "stackData": [
        "MDF_PenetrateRatio"
      ],
      "latentQueue": [],
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
              "operator": "Variables[0] (MDF_PenetrateRatio) || RETURN",
              "displayLines": "MDF_PenetrateRatio",
              "constants": [],
              "variables": [
                "MDF_PenetrateRatio"
              ]
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
                "operator": "Variables[0] (MDF_SpeedUpRatio) || RETURN",
                "displayLines": "MDF_SpeedUpRatio",
                "constants": [],
                "variables": [
                  "MDF_SpeedUpRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_SpeedUpRatio</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "Come Sit in My Courtyard"
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
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "MDF_ModifierOwnerCurrentHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
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
                "operator": "Variables[0] (MDF_CurrentHP) || Variables[1] (MDF_MaxHPRatio) || MUL || Variables[2] (MDF_MaxHPValue) || ADD || RETURN",
                "displayLines": "((MDF_CurrentHP * MDF_MaxHPRatio) + MDF_MaxHPValue)",
                "constants": [],
                "variables": [
                  "MDF_CurrentHP",
                  "MDF_MaxHPRatio",
                  "MDF_MaxHPValue"
                ]
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
              "variableName": "MDF_HealValueTotal",
              "value": {
                "operator": "Variables[0] (_ServantHealValueTotal) || Variables[1] (_SummonerHealValueTotal) || ADD || RETURN",
                "displayLines": "(_ServantHealValueTotal + _SummonerHealValueTotal)",
                "constants": [],
                "variables": [
                  "_ServantHealValueTotal",
                  "_SummonerHealValueTotal"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "The tally of healing: <span class=\"descriptionNumberColor\">MDF_HealValueTotal</span>",
      "type": "Other",
      "statusName": "Rainclouds, Time to Go!"
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
          "eventTrigger": "Turn [Pre-action END Phase] [Anyone]",
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
                    "operator": "Variables[0] (0.04) || RETURN",
                    "displayLines": "0.04",
                    "constants": [],
                    "variables": [
                      0.04
                    ]
                  },
                  "dynamicAssignment": "_RealRatio",
                  "attackType": "Pursued"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_ServantMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_ServantLoseHPValue",
                  "value": {
                    "operator": "Variables[0] (_RealRatio) || Variables[1] (_ServantMaxHP) || MUL || RETURN",
                    "displayLines": "(_RealRatio * _ServantMaxHP)",
                    "constants": [],
                    "variables": [
                      "_RealRatio",
                      "_ServantMaxHP"
                    ]
                  }
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
                    "operator": "Variables[0] (_ServantLoseHPValueTotal2) || Variables[1] (_ServantLoseHPValue) || ADD || RETURN",
                    "displayLines": "(_ServantLoseHPValueTotal2 + _ServantLoseHPValue)",
                    "constants": [],
                    "variables": [
                      "_ServantLoseHPValueTotal2",
                      "_ServantLoseHPValue"
                    ]
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
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Summoner}}"
                          },
                          "variableName": "Summoner_MaxHP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                        },
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "healFlat": {
                            "operator": "Variables[0] (Summoner_MaxHP) || Variables[1] (0.02) || MUL || Variables[2] (20) || ADD || RETURN",
                            "displayLines": "((Summoner_MaxHP * 0.02) + 20)",
                            "constants": [],
                            "variables": [
                              "Summoner_MaxHP",
                              0.02,
                              20
                            ]
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
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "variableName": "Summoner_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "healFlat": {
                        "operator": "Variables[0] (Summoner_MaxHP) || Variables[1] (0.02) || MUL || Variables[2] (20) || ADD || RETURN",
                        "displayLines": "((Summoner_MaxHP * 0.02) + 20)",
                        "constants": [],
                        "variables": [
                          "Summoner_MaxHP",
                          0.02,
                          20
                        ]
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
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Summoner}}"
                          },
                          "variableName": "Summoner_MaxHP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                        },
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "healFlat": {
                            "operator": "Variables[0] (Summoner_MaxHP) || Variables[1] (0.02) || MUL || Variables[2] (20) || ADD || RETURN",
                            "displayLines": "((Summoner_MaxHP * 0.02) + 20)",
                            "constants": [],
                            "variables": [
                              "Summoner_MaxHP",
                              0.02,
                              20
                            ]
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
                "operator": "Variables[0] (AbilityP01_P4_LifeTime) || RETURN",
                "displayLines": "AbilityP01_P4_LifeTime",
                "constants": [],
                "variables": [
                  "AbilityP01_P4_LifeTime"
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (_ServantLoseHPValueTotal) || RETURN",
                "displayLines": "_ServantLoseHPValueTotal",
                "constants": [],
                "variables": [
                  "_ServantLoseHPValueTotal"
                ]
              },
              "valuePerStack": {
                "MDF_DamageAddRatio": {
                  "operator": "Variables[0] (AbilityP01_P3_DamageIncrease) || RETURN",
                  "displayLines": "AbilityP01_P3_DamageIncrease",
                  "constants": [],
                  "variables": [
                    "AbilityP01_P3_DamageIncrease"
                  ]
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
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "_ServantHealValue",
              "context": "ContextCaster"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_ServantHealValueTotal",
              "value": {
                "operator": "Variables[0] (_ServantHealValueTotal) || Variables[1] (_ServantHealValue) || ADD || RETURN",
                "displayLines": "(_ServantHealValueTotal + _ServantHealValue)",
                "constants": [],
                "variables": [
                  "_ServantHealValueTotal",
                  "_ServantHealValue"
                ]
              }
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
              "variableName": "_TempServantHealValueTotal",
              "value": {
                "operator": "Variables[0] (_ServantHealValueTotal) || RETURN",
                "displayLines": "_ServantHealValueTotal",
                "constants": [],
                "variables": [
                  "_ServantHealValueTotal"
                ]
              }
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
                        "operator": "Variables[0] (0.04) || RETURN",
                        "displayLines": "0.04",
                        "constants": [],
                        "variables": [
                          0.04
                        ]
                      },
                      "dynamicAssignment": "_RealRatio",
                      "attackType": "Pursued"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_ServantMaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_ServantLoseHPValue",
                      "value": {
                        "operator": "Variables[0] (_RealRatio) || Variables[1] (_ServantMaxHP) || MUL || RETURN",
                        "displayLines": "(_RealRatio * _ServantMaxHP)",
                        "constants": [],
                        "variables": [
                          "_RealRatio",
                          "_ServantMaxHP"
                        ]
                      }
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
                        "operator": "Variables[0] (_ServantLoseHPValueTotal2) || Variables[1] (_ServantLoseHPValue) || ADD || RETURN",
                        "displayLines": "(_ServantLoseHPValueTotal2 + _ServantLoseHPValue)",
                        "constants": [],
                        "variables": [
                          "_ServantLoseHPValueTotal2",
                          "_ServantLoseHPValue"
                        ]
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
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster's Summoner}}"
                              },
                              "variableName": "Summoner_MaxHP",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                            },
                            {
                              "name": "Heal",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "healFlat": {
                                "operator": "Variables[0] (Summoner_MaxHP) || Variables[1] (0.02) || MUL || Variables[2] (20) || ADD || RETURN",
                                "displayLines": "((Summoner_MaxHP * 0.02) + 20)",
                                "constants": [],
                                "variables": [
                                  "Summoner_MaxHP",
                                  0.02,
                                  20
                                ]
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
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Summoner}}"
                          },
                          "variableName": "Summoner_MaxHP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                        },
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "healFlat": {
                            "operator": "Variables[0] (Summoner_MaxHP) || Variables[1] (0.02) || MUL || Variables[2] (20) || ADD || RETURN",
                            "displayLines": "((Summoner_MaxHP * 0.02) + 20)",
                            "constants": [],
                            "variables": [
                              "Summoner_MaxHP",
                              0.02,
                              20
                            ]
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
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster's Summoner}}"
                              },
                              "variableName": "Summoner_MaxHP",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                            },
                            {
                              "name": "Heal",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "healFlat": {
                                "operator": "Variables[0] (Summoner_MaxHP) || Variables[1] (0.02) || MUL || Variables[2] (20) || ADD || RETURN",
                                "displayLines": "((Summoner_MaxHP * 0.02) + 20)",
                                "constants": [],
                                "variables": [
                                  "Summoner_MaxHP",
                                  0.02,
                                  20
                                ]
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
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}