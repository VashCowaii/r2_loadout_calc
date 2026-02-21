const configAbility = {
  "fileName": "4023011_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-757280196\">W4_Griffin_LocalLegend_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "BattleScoreCount"
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    }
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    },
                    "team": "Enemy Team",
                    "invertCondition": true
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
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 402201,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Enemy ID",
                                "ID": 401205,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": null,
                                "isCompareUniqueID": true
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "DieWithBonus",
                                "compareType": "=",
                                "value2": 1
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "BattleScoreCount",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "BattleScoreCount",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 15,
              "maxValue": 9999,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Transcendent Shot",
                      "desc": "In any difficulty against Earthshaker Leo, ally targets defeat \"Back Row Target\" #1 times",
                      "rarity": "Low",
                      "params": [
                        15
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1263736651\">MModifier_W4_Griffin_LocalLegend_AllDamageTaken</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] (CEIL) || Variables[1] (MDF_Value) || Constants[0] (100) || MUL || PARAM_1 || FUNCTION || Constants[0] (100) || DIV || RETURN",
                "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>((MDF_Value * 100)) / 100)",
                "constants": [
                  100
                ],
                "variables": [
                  "CEIL",
                  "MDF_Value"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Value) || RETURN",
                "displayLines": "MDF_Value",
                "constants": [],
                "variables": [
                  "MDF_Value"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "statusName": "Vulnerability"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-191889698\">MModifier_W4_Griffin_LocalLegend_Revenge</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
              "variableName": "MDF_ShowValue1",
              "value": {
                "operator": "Variables[0] (MDF_Layer) || Variables[1] (MDF_AddedDamageRatio) || MUL || RETURN",
                "displayLines": "(MDF_Layer * MDF_AddedDamageRatio)",
                "constants": [],
                "variables": [
                  "MDF_Layer",
                  "MDF_AddedDamageRatio"
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
                "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                "displayLines": "MDF_ShowValue1",
                "constants": [],
                "variables": [
                  "MDF_ShowValue1"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AddedDamageRatio"
      ],
      "latentQueue": [
        "_ListenCorrectInteract",
        "AIFlag"
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>.",
      "type": "Other",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__364693111\">Enemy_W4_Griffin_LocalLegend_Status</a>",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Living/Death State",
                    "state": "Mask_AliveOnly"
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 402201,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 401205,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "stayInTeam": false
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_SummonCounts",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "_SummonCounts",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "InsertCheck02",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "InsertCheck02",
                  "value": 1
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Griffin_LocalLegend_PassiveAbility_Summon",
                  "priorityTag": "LevelPerformMonster",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Living/Death State",
                    "state": "Mask_AliveOnly"
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 402201,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 401205,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "DieWithBonus",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "_MonsterChangeCnt02",
                  "context": "TargetEntity",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_DieSums",
                      "value": 1,
                      "max": {
                        "operator": "Variables[0] (_Phase1Sums) || RETURN",
                        "displayLines": "_Phase1Sums",
                        "constants": [],
                        "variables": [
                          "_Phase1Sums"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Phase1Sums",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (_DieSums) || RETURN",
                          "displayLines": "_DieSums",
                          "constants": [],
                          "variables": [
                            "_DieSums"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1263736651\">MModifier_W4_Griffin_LocalLegend_AllDamageTaken</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                          "valuePerStack": {
                            "MDF_Value": {
                              "operator": "Variables[0] (_SummonCounts) || Variables[1] (EXP^) || Variables[2] (_DieSums) || Variables[3] (_Phase1Sums) || DIV || Variables[4] (_FactorK) || PARAM_2 || FUNCTION || MUL || RETURN",
                              "displayLines": "(_SummonCounts * &nbsp;<span class=\"descriptionFunctionColor\">EXP^</span>((_DieSums / _Phase1Sums), _FactorK))",
                              "constants": [],
                              "variables": [
                                "_SummonCounts",
                                "EXP^",
                                "_DieSums",
                                "_Phase1Sums",
                                "_FactorK"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_DieSums",
                      "value": 1,
                      "max": {
                        "operator": "Variables[0] (_Phase2Sums) || RETURN",
                        "displayLines": "_Phase2Sums",
                        "constants": [],
                        "variables": [
                          "_Phase2Sums"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Phase2Sums",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (_DieSums) || RETURN",
                          "displayLines": "_DieSums",
                          "constants": [],
                          "variables": [
                            "_DieSums"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}} + {{EVENT[RoT] Noontide Gryphon: Partner}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1263736651\">MModifier_W4_Griffin_LocalLegend_AllDamageTaken</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
                          "valuePerStack": {
                            "MDF_Value": {
                              "operator": "Variables[0] (_SummonCounts) || Variables[1] (EXP^) || Variables[2] (_DieSums) || Variables[3] (_Phase2Sums) || DIV || Variables[4] (_FactorK) || PARAM_2 || FUNCTION || MUL || RETURN",
                              "displayLines": "(_SummonCounts * &nbsp;<span class=\"descriptionFunctionColor\">EXP^</span>((_DieSums / _Phase2Sums), _FactorK))",
                              "constants": [],
                              "variables": [
                                "_SummonCounts",
                                "EXP^",
                                "_DieSums",
                                "_Phase2Sums",
                                "_FactorK"
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
      "stackData": [],
      "latentQueue": [
        "_MaxDamageReduce"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1853897030\">Monster_W4_Griffin_LocalLegend_PartChangeMark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1763194403\">Monster_W4_Griffin_LocalLegend_PartController_LockHP</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "InsertCheck",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "ID": 4260020,
                        "compareType": ">=",
                        "characterName": "Earthshaker Leo: Solblaze Winged Beast"
                      },
                      {
                        "name": "Stage ID",
                        "ID": 4260026,
                        "compareType": "<=",
                        "characterName": "Earthshaker Leo: Solblaze Winged Beast"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "_BattleTarget_LocalLegend_S2_1_Check",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Harpy}}"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Mascot}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1853897030\">Monster_W4_Griffin_LocalLegend_PartChangeMark</a>"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "InsertCheck"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_BonusCheck",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_SummonCheck",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DieSums",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DieSumsCheck",
                  "value": 0
                },
                {
                  "name": "Set Enemy Phase",
                  "mode": "Inc"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Griffin_LocalLegend_PassiveAbility_Insert",
                  "priorityTag": "MonsterChangePhase",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-766200550\">Monster_W4_Griffin_LocalLegend_Partner</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1673158785\">Monster_W4_Griffin_LocalLegend_UnicornMark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1065862437\">W4_Griffin_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "W4_Griffin_00_Debuff_Resolve"
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "W4_Griffin_00_Debuff_Resolve",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 3,
              "maxValue": 3,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Fading Light",
                      "desc": "Remove #1 \"Aquila's Mark(s)\" through defeating enemy targets in a single battle",
                      "rarity": "Low",
                      "params": [
                        3
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1273402705\">Monster_W4_Griffin_NoSummon</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1209574560\">Enemy_W4_Griffin_UltraReady</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "PhaseNormal"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "PhaseNormal"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1926757602\">Enemy_W4_Griffin_Ability03_Mark</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2106879681\">Enemy_W4_Griffin_AttackSign_OnAvatar</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "AttackSign"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
              "onlyRemoveOwnersInstance": true
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
      ],
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
              "modifier": "<a class=\"gModGreen\" id=\"2106879681\">Enemy_W4_Griffin_AttackSign_OnAvatar</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2106879681\">Enemy_W4_Griffin_AttackSign_OnAvatar</a>",
              "onlyRemoveOwnersInstance": true
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Sequence",
                  "Sequence": [
                    {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"203272356\">Enemy_W4_Griffin_Status</a>"
                      }
                    }
                  ]
                },
                "compareType": ">",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                          "invertCondition": true,
                          "casterFilter": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          }
                        }
                      }
                    ]
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Locked on by %CasterName as their attack target.",
      "type": "Other",
      "effectName": "Target Locked On",
      "statusName": "Lock On"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1452860689\">Enemy_W4_Griffin_RemoveSignAvatar</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-716514127\">Enemy_W4_Griffin_Debuff_FirstNotice</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-964877890\">Enemy_W4_Griffin_Debuff_UITop</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "RemoveWhenCasterUnstage"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__478350921\">Enemy_W4_Griffin_Debuff_TriggerMix_Mark</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-86216455\">Enemy_W4_Griffin_Debuff_Trigger_Mark</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "RemoveWhenCasterUnstage"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1506863241\">Enemy_W4_Griffin_Debuff_Status</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-964877890\">Enemy_W4_Griffin_Debuff_UITop</a>"
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
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1065862437\">W4_Griffin_BattleScore1</a>",
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "modifierName": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
              "multiplier": 1
            },
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
                    "value1": "MDF_Layer",
                    "compareType": "<",
                    "value2": 2
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-964877890\">Enemy_W4_Griffin_Debuff_UITop</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-716514127\">Enemy_W4_Griffin_Debuff_FirstNotice</a>",
                    "invertCondition": true
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-716514127\">Enemy_W4_Griffin_Debuff_FirstNotice</a>"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Layer",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-86216455\">Enemy_W4_Griffin_Debuff_Trigger_Mark</a>"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] (_GriffinMark_SPCost) || MUL || RETURN",
                        "displayLines": "(-1 * _GriffinMark_SPCost)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_GriffinMark_SPCost"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "Damage": {
                          "operator": "Variables[0] (_GriffinMark_DamagePercentage) || RETURN",
                          "displayLines": "_GriffinMark_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "_GriffinMark_DamagePercentage"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                      "removeAllInstances": true
                    },
                    "Modifier Deletes Itself"
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"478350921\">Enemy_W4_Griffin_Debuff_TriggerMix_Mark</a>"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": {}
                        },
                        "DamageFlat": {
                          "operator": "Variables[0] (_MaxHP) || Variables[1] (_MixedMark_LoseHpRatio) || MUL || RETURN",
                          "displayLines": "(_MaxHP * _MixedMark_LoseHpRatio)",
                          "constants": [],
                          "variables": [
                            "_MaxHP",
                            "_MixedMark_LoseHpRatio"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "True DMG"
                      }
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] (_GriffinMark_SPCost) || MUL || RETURN",
                        "displayLines": "(-1 * _GriffinMark_SPCost)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_GriffinMark_SPCost"
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                      "duration": {
                        "operator": "Variables[0] (_UnicornMark_LifeTime) || RETURN",
                        "displayLines": "_UnicornMark_LifeTime",
                        "constants": [],
                        "variables": [
                          "_UnicornMark_LifeTime"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (_UnicornMark_Chance) || RETURN",
                        "displayLines": "_UnicornMark_Chance",
                        "constants": [],
                        "variables": [
                          "_UnicornMark_Chance"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_ActionDelayRatio": {
                          "operator": "Variables[0] (_UnicornMark_ActionDelayRatio) || RETURN",
                          "displayLines": "_UnicornMark_ActionDelayRatio",
                          "constants": [],
                          "variables": [
                            "_UnicornMark_ActionDelayRatio"
                          ]
                        },
                        "Modifier_Entangle_DamagePercentage": {
                          "operator": "Variables[0] (_UnicornMark_DebuffDamagePercentage) || RETURN",
                          "displayLines": "_UnicornMark_DebuffDamagePercentage",
                          "constants": [],
                          "variables": [
                            "_UnicornMark_DebuffDamagePercentage"
                          ]
                        },
                        "Modifier_Entangle_DamageValue": 0
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]",
                      "removeAllInstances": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1656896295\">Enemy_W4_Unicorn_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Oronyx's Mark</span>]",
                      "removeAllInstances": true
                    },
                    "Modifier Deletes Itself"
                  ]
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
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1506863241\">Enemy_W4_Griffin_Debuff_Status</a>"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "_GriffinMark_SPCost",
        "_GriffinMark_DamagePercentage",
        "_MixedMark_LoseHpRatio",
        "_UnicornMark_Chance",
        "_UnicornMark_LifeTime",
        "_UnicornMark_ActionDelayRatio",
        "_UnicornMark_DebuffDamagePercentage",
        "_UnicornMark_DamagePercentage"
      ],
      "latentQueue": [
        "_Location"
      ],
      "description": "When a target gains \"Aquila's Mark\" again, dispel all marks, and they take Fire DMG and lose Energy. When a target gains \"Oronyx's Mark\" again, dispel all marks, and they take True DMG based on <span class=\"descriptionNumberColor\">_MixedMark_LoseHpRatio</span> of their Max HP, lose Energy, and have a high chance to be afflicted with Entanglement. After any ally target defeats an enemy target, this mark can be dispelled, prioritizing dispelling the mark from the target that dealt the fatal damage.",
      "type": "Other",
      "effectName": "Aquila's Mark",
      "statusName": "Aquila's Mark",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1506863241\">Enemy_W4_Griffin_Debuff_Status</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "W4_Griffin_00_Debuff_Resolve",
                  "value": 1,
                  "max": 3
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]"
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "W4_Griffin_00_Debuff_Resolve",
                      "value": 1,
                      "max": 3
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"26062276\">Enemy_W4_Griffin_Debuff_Mark</a>[<span class=\"descriptionNumberColor\">Aquila's Mark</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_Location"
      ]
    }
  ],
  "references": []
}