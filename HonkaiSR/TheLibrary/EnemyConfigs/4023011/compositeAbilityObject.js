const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4023011,
  "trimCharacterName": 4023011,
  "abilityList": [
    "4023011_Modifiers",
    "4023011_Monster_W4_Griffin_LocalLegend_PassiveAbility_Insert",
    "4023011_Monster_W4_Griffin_LocalLegend_PassiveAbility_Summon",
    "4023011_Monster_W4_Griffin_LocalLegend_PassiveAbilityInitiate",
    "4023011_Monster_W4_Griffin_LocalLegend_Ability04_Part02",
    "4023011_Monster_W4_Griffin_LocalLegend_Ability04_Part01",
    "4023011_Monster_W4_Griffin_LocalLegend_Ability03_Part02",
    "4023011_Monster_W4_Griffin_LocalLegend_Ability03_Part01",
    "4023011_Monster_W4_Griffin_LocalLegend_Ability02_Part02_02",
    "4023011_Monster_W4_Griffin_LocalLegend_Ability02_Part02",
    "4023011_Monster_W4_Griffin_LocalLegend_Ability02_Part01",
    "4023011_Monster_W4_Griffin_Ability01_Part02",
    "4023011_Monster_W4_Griffin_Ability01_Part01",
    "4023011_Functions",
    "4023011_Handling"
  ],
  "abilityObject": {
    "4023011_Modifiers": {
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
                  "variableName": "BattleScoreCount",
                  "scope": "TargetEntity"
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
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 15,
                  "maxValue": 9999,
                  "includeMaxValueInRange": true,
                  "enteringRange": [
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1263736651\">MModifier_W4_Griffin_LocalLegend_AllDamageTaken</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "stackType": "Replace",
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "statusName": "Vulnerability",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>((MDF_Value * 100)) / 100)"
                  },
                  "variableName": "MDF_PropertyValue"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_Value"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-191889698\">MModifier_W4_Griffin_LocalLegend_Revenge</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "Replace",
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>.",
          "type": "Other",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
          "addStacksPerTrigger": 1,
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
                    "displayLines": "(MDF_Layer * MDF_AddedDamageRatio)"
                  },
                  "variableName": "MDF_ShowValue1"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_ShowValue1"
                  }
                }
              ]
            }
          ]
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
                        "livingState": "Mask_AliveOnly"
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
                      }
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
                      "value": 1,
                      "variableName": "InsertCheck02"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Griffin_LocalLegend_PassiveAbility_Summon",
                      "priorityTag": "STAGE_Enemy",
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
                        "livingState": "Mask_AliveOnly"
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
                            "displayLines": "_Phase1Sums"
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_Phase1Sums",
                            "compareType": ">=",
                            "value2": {
                              "displayLines": "_DieSums"
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
                                  "displayLines": "(_SummonCounts * &nbsp;<span class=\"descriptionFunctionColor\">EXP^</span>((_DieSums / _Phase1Sums), _FactorK))"
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
                            "displayLines": "_Phase2Sums"
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_Phase2Sums",
                            "compareType": ">=",
                            "value2": {
                              "displayLines": "_DieSums"
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
                                  "displayLines": "(_SummonCounts * &nbsp;<span class=\"descriptionFunctionColor\">EXP^</span>((_DieSums / _Phase2Sums), _FactorK))"
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
              "eventTrigger": "Waiting in Limbo [Owner]",
              "priorityLevel": -90,
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
                            "compareType": ">=",
                            "stageID": "4260020 (Earthshaker Leo: Solblaze Winged Beast)"
                          },
                          {
                            "name": "Stage ID",
                            "compareType": "<=",
                            "stageID": "4260026 (Earthshaker Leo: Solblaze Winged Beast)"
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
                          "value": 1,
                          "variableName": "_BattleTarget_LocalLegend_S2_1_Check"
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
                      "variableName": "InsertCheck",
                      "scope": "TargetEntity"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "_BonusCheck"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "_SummonCheck"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "_DieSums"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "_DieSumsCheck"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Griffin_LocalLegend_PassiveAbility_Insert",
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-766200550\">Monster_W4_Griffin_LocalLegend_Partner</a>"
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
                  "variableName": "W4_Griffin_00_Debuff_Resolve",
                  "scope": "TargetEntity"
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "W4_Griffin_00_Debuff_Resolve",
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 3,
                  "maxValue": 3,
                  "includeMaxValueInRange": true,
                  "enteringRange": [
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
                  "name": "Change Entity Turn-State",
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
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "PhaseNormal"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1926757602\">Enemy_W4_Griffin_Ability03_Mark</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ]
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
          "description": "Locked on by %CasterName as their attack target.",
          "type": "Other",
          "effectName": "Target Locked On",
          "statusName": "Lock On",
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
                      "TargetList": [
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
                        "TargetList": [
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
          ]
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
          "description": "When a target gains \"Aquila's Mark\" again, dispel all marks, and they take Fire DMG and lose Energy. When a target gains \"Oronyx's Mark\" again, dispel all marks, and they take True DMG based on <span class=\"descriptionNumberColor\">_MixedMark_LoseHpRatio</span> of their Max HP, lose Energy, and have a high chance to be afflicted with Entanglement. After any ally target defeats an enemy target, this mark can be dispelled, prioritizing dispelling the mark from the target that dealt the fatal damage.",
          "type": "Other",
          "effectName": "Aquila's Mark",
          "statusName": "Aquila's Mark",
          "addStacksPerTrigger": 1,
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
                            "displayLines": "(-1 * _GriffinMark_SPCost)"
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
                              "displayLines": "_GriffinMark_DamagePercentage"
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
                          "variableName": "_MaxHP",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Null Type",
                            "DamageFlat": {
                              "displayLines": "(_MaxHP * _MixedMark_LoseHpRatio)"
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
                            "displayLines": "(-1 * _GriffinMark_SPCost)"
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
                            "displayLines": "_UnicornMark_LifeTime"
                          },
                          "baseChance": {
                            "displayLines": "_UnicornMark_Chance"
                          },
                          "valuePerStack": {
                            "MDF_ActionDelayRatio": {
                              "displayLines": "_UnicornMark_ActionDelayRatio"
                            },
                            "Modifier_Entangle_DamagePercentage": {
                              "displayLines": "_UnicornMark_DebuffDamagePercentage"
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
          ]
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
          ]
        }
      ],
      "references": []
    },
    "4023011_Monster_W4_Griffin_LocalLegend_PassiveAbility_Insert": {
      "fileName": "4023011_Monster_W4_Griffin_LocalLegend_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "WAIT FOR",
          "conditions": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "entityType": "Team Characters"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "onlyRemoveOwnersInstance": true
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
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1209574560\">Enemy_W4_Griffin_UltraReady</a>"
        },
        {
          "name": "Assign Target Battle-Location",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "row": 0
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "displayLines": "{[Skill02[1]]}"
          },
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "displayLines": "SummonID02"
              },
              "locationType": "AfterCaster"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-766200550\">Monster_W4_Griffin_LocalLegend_Partner</a>"
        },
        {
          "name": "Create Shared HP Group",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "subTarget": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "removeShields": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "variableName": "_MascotCounts",
          "readTarget": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Mascot}}"
          },
          "living": true
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "(3 - _MascotCounts)"
          },
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1587865992\">W4_Griffin_LocalLegend_Summon</a>"
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1853897030\">Monster_W4_Griffin_LocalLegend_PartChangeMark</a>",
            "invertCondition": true
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Create Shared HP Group",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "subTarget": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
          },
          "removeShields": true
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "AIFlag",
          "resetValue": 1,
          "scope": "TargetEntity"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1763194403\">Monster_W4_Griffin_LocalLegend_PartController_LockHP</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-191889698\">MModifier_W4_Griffin_LocalLegend_Revenge</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1263736651\">MModifier_W4_Griffin_LocalLegend_AllDamageTaken</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Current Turn Owner}}"
            }
          },
          "passed": [
            {
              "name": "Assign Advance/Delay to Current Ability Use",
              "adjustmentValue": 0,
              "adjustmentType": "="
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "set": 0
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "InsertCheck02"
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "PhaseNormal"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4023011_Monster_W4_Griffin_LocalLegend_PassiveAbility_Summon": {
      "fileName": "4023011_Monster_W4_Griffin_LocalLegend_PassiveAbility_Summon",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "WAIT FOR",
          "conditions": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "entityType": "Team Characters"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "FREEVAR"
          },
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1587865992\">W4_Griffin_LocalLegend_Summon</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_DieSumsCheck",
            "compareType": "<",
            "value2": {
              "displayLines": "_DieSums"
            }
          }
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "_DieSums"
          },
          "variableName": "_DieSumsCheck"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "InsertCheck02"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "_SummonCounts"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4023011_Monster_W4_Griffin_LocalLegend_PassiveAbilityInitiate": {
      "fileName": "4023011_Monster_W4_Griffin_LocalLegend_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-757280196\">W4_Griffin_LocalLegend_BattleScore1</a>",
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"203272356\">Enemy_W4_Griffin_Status</a>"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "show": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Set Enemy Phase"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4023011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Earthshaker Leo: Solblaze Winged Beast"
              },
              {
                "name": "Enemy ID",
                "ID": 402301100,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": null
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
              "modifier": "<a class=\"gModGreen\" id=\"1763194403\">Monster_W4_Griffin_LocalLegend_PartController_LockHP</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "{[PassiveSkill02[5]]}"
          },
          "variableName": "_MaxDamageReduce"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": "426007 (Greatsword Guardian: Vanguard Wallbreaker)"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill02[7]]}"
              },
              "variableName": "_FactorK"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill02[1]]}"
              },
              "variableName": "_Phase1Sums"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill02[2]]}"
              },
              "variableName": "_Phase2Sums"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill02[3]]}"
              },
              "variableName": "_BonusInit"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill02[4]]}"
              },
              "variableName": "_BonusSums"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill02[8]]}"
              },
              "variableName": "_Bonus2Init"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill02[9]]}"
              },
              "variableName": "_Bonus2Sums"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill02[10]]}"
              },
              "variableName": "_BonusLimit"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill02[11]]}"
              },
              "variableName": "_Bonus2Limit"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill02[6]]}"
              },
              "variableName": "_FactorK"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill03[0]]}"
              },
              "variableName": "_Phase1Sums"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill03[1]]}"
              },
              "variableName": "_Phase2Sums"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill03[2]]}"
              },
              "variableName": "_BonusInit"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill03[3]]}"
              },
              "variableName": "_BonusSums"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill03[4]]}"
              },
              "variableName": "_Bonus2Init"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill03[5]]}"
              },
              "variableName": "_Bonus2Sums"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill03[6]]}"
              },
              "variableName": "_BonusLimit"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill03[7]]}"
              },
              "variableName": "_Bonus2Limit"
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": 4,
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1587865992\">W4_Griffin_LocalLegend_Summon</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"364693111\">Enemy_W4_Griffin_LocalLegend_Status</a>"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "set": 0
        }
      ],
      "whenAdded": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__203272356\">Enemy_W4_Griffin_Status</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{EVENT[RoT] Mascot}}"
                  },
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "_ListenCorrectInteract",
                    "compareType": "=",
                    "value2": 0
                  },
                  "ifTargetFound": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "ability": "Monster_W4_Mascot_Ability04_LocalLegend_Part03"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-71309847\">Enemy_W4_Mascot_LocalLegend_DeathRattle</a>"
                    }
                  ]
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "AIFlag",
                      "context": "TargetEntity",
                      "value": -1,
                      "max": 20
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 5,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "AIFlag"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1209574560\">Enemy_W4_Griffin_UltraReady</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Stage ID",
                        "compareType": "=",
                        "stageID": "426007 (Greatsword Guardian: Vanguard Wallbreaker)"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"35393434\">Standard_FastAction</a>[<span class=\"descriptionNumberColor\">Stormride</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-191889698\">MModifier_W4_Griffin_LocalLegend_Revenge</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "MDF_AddedDamageRatio": {
                          "displayLines": "{[PassiveSkill02[0]]}"
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
    "4023011_Monster_W4_Griffin_LocalLegend_Ability04_Part02": {
      "fileName": "4023011_Monster_W4_Griffin_LocalLegend_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1209574560\">Enemy_W4_Griffin_UltraReady</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "{[Skill04[0]]}"
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "{[Skill04[0]]}"
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "{[Skill04[0]]}"
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "{[Skill04[0]]}"
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
          "duration": {
            "displayLines": "{[PassiveSkill01[1]]}"
          },
          "baseChance": {
            "displayLines": "{[PassiveSkill01[0]]}"
          },
          "valuePerStack": {
            "Modifier_Burn_DamagePercentage": {
              "displayLines": "{[PassiveSkill01[2]]}"
            }
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
          "onlyRemoveOwnersInstance": true
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4023011_Monster_W4_Griffin_LocalLegend_Ability04_Part01": {
      "fileName": "4023011_Monster_W4_Griffin_LocalLegend_Ability04_Part01",
      "childAbilityList": [
        "4023011_Monster_W4_Griffin_LocalLegend_Ability04_Part01",
        "4023011_Monster_W4_Griffin_LocalLegend_Ability04_Part02",
        "4023011_Monster_W4_Griffin_LocalLegend_Ability04_Camera"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Griffin_LocalLegend_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4023011_Monster_W4_Griffin_LocalLegend_Ability03_Part02": {
      "fileName": "4023011_Monster_W4_Griffin_LocalLegend_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2109418688\">Enemy_W4_Griffin_SignOnAvatar</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1209574560\">Enemy_W4_Griffin_UltraReady</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4023011_Monster_W4_Griffin_LocalLegend_Ability03_Part01": {
      "fileName": "4023011_Monster_W4_Griffin_LocalLegend_Ability03_Part01",
      "childAbilityList": [
        "4023011_Monster_W4_Griffin_LocalLegend_Ability03_Camera",
        "4023011_Monster_W4_Griffin_LocalLegend_Ability03_Part01",
        "4023011_Monster_W4_Griffin_LocalLegend_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Griffin_LocalLegend_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4023011_Monster_W4_Griffin_LocalLegend_Ability02_Part02_02": {
      "fileName": "4023011_Monster_W4_Griffin_LocalLegend_Ability02_Part02_02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "UI Display Event",
          "popUpText": "Triple Waning Moon"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team(Exclude Memosprites)}}"
            },
            "compareType": "=",
            "value2": 4,
            "livingTargets": true
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team(Exclude Memosprites)}}"
                },
                "compareType": "=",
                "value2": 3,
                "livingTargets": true
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team(Exclude Memosprites)}}"
                    },
                    "compareType": "=",
                    "value2": 2,
                    "livingTargets": true
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
          },
          "variable": "#Skill02_P1_DamagePercentage",
          "target2": null,
          "variable2": "Unicorn_Skill02_DamagePercentage"
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
          },
          "variable": "#PassiveSkill01_P1_Debuff_Chance",
          "target2": null,
          "variable2": "Unicorn_Debuff_Chance"
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
          },
          "variable": "#PassiveSkill01_P2_Debuff_LifeTime",
          "target2": null,
          "variable2": "Unicorn_Debuff_LifeTime"
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
          },
          "variable": "#PassiveSkill01_P3_Debuff_ActionDelayRatio",
          "target2": null,
          "variable2": "Unicorn_Debuff_ActionDelayRatio"
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
          },
          "variable": "#PassiveSkill01_P4_Debuff_DamagePercentage",
          "target2": null,
          "variable2": "Unicorn_Debuff_DamagePercentage"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team(Exclude Memosprites)}}"
            },
            "compareType": "=",
            "value2": 4,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-264149361\">Monster_W4_Griffin_LocalLegend_Ability02_Attack01</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1005857972\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack01</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-247371742\">Monster_W4_Griffin_LocalLegend_Ability02_Attack02</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-955525115\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack02</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-230594123\">Monster_W4_Griffin_LocalLegend_Ability02_Attack03</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-972302734\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack03</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team(Exclude Memosprites)}}"
                },
                "compareType": "=",
                "value2": 3,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-264149361\">Monster_W4_Griffin_LocalLegend_Ability02_Attack01</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1005857972\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack01</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-247371742\">Monster_W4_Griffin_LocalLegend_Ability02_Attack02</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-955525115\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack02</a>"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team(Exclude Memosprites)}}"
                    },
                    "compareType": "=",
                    "value2": 2,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-264149361\">Monster_W4_Griffin_LocalLegend_Ability02_Attack01</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1005857972\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack01</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-247371742\">Monster_W4_Griffin_LocalLegend_Ability02_Attack02</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-955525115\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack02</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-264149361\">Monster_W4_Griffin_LocalLegend_Ability02_Attack01</a>"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1005857972\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack01</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-264149361\">Monster_W4_Griffin_LocalLegend_Ability02_Attack01</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Noontide Gryphon: Skill02 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "{[Skill02[0]]}"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Noontide Gryphon: Skill02 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
              "duration": {
                "displayLines": "{[PassiveSkill01[1]]}"
              },
              "baseChance": {
                "displayLines": "{[PassiveSkill01[0]]}"
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "displayLines": "{[PassiveSkill01[2]]}"
                }
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-247371742\">Monster_W4_Griffin_LocalLegend_Ability02_Attack02</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Noontide Gryphon: Skill02 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "{[Skill02[0]]}"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Noontide Gryphon: Skill02 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
              "duration": {
                "displayLines": "{[PassiveSkill01[1]]}"
              },
              "baseChance": {
                "displayLines": "{[PassiveSkill01[0]]}"
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "displayLines": "{[PassiveSkill01[2]]}"
                }
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-230594123\">Monster_W4_Griffin_LocalLegend_Ability02_Attack03</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Noontide Gryphon: Skill02 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "{[Skill02[0]]}"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Noontide Gryphon: Skill02 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
              "duration": {
                "displayLines": "{[PassiveSkill01[1]]}"
              },
              "baseChance": {
                "displayLines": "{[PassiveSkill01[0]]}"
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "displayLines": "{[PassiveSkill01[2]]}"
                }
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1005857972\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack01</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Moonlit Pegasus: Skill02 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "displayLines": "Unicorn_Skill02_DamagePercentage"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Moonlit Pegasus: Skill02 Target 1}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                  "duration": {
                    "displayLines": "Unicorn_Debuff_LifeTime"
                  },
                  "baseChance": {
                    "displayLines": "Unicorn_Debuff_Chance"
                  },
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": {
                      "displayLines": "Unicorn_Debuff_ActionDelayRatio"
                    },
                    "Modifier_Entangle_DamagePercentage": {
                      "displayLines": "Unicorn_Debuff_DamagePercentage"
                    },
                    "Modifier_Entangle_DamageValue": 0
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-955525115\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack02</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Moonlit Pegasus: Skill02 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "displayLines": "Unicorn_Skill02_DamagePercentage"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Moonlit Pegasus: Skill02 Target 2}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                  "duration": {
                    "displayLines": "Unicorn_Debuff_LifeTime"
                  },
                  "baseChance": {
                    "displayLines": "Unicorn_Debuff_Chance"
                  },
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": {
                      "displayLines": "Unicorn_Debuff_ActionDelayRatio"
                    },
                    "Modifier_Entangle_DamagePercentage": {
                      "displayLines": "Unicorn_Debuff_DamagePercentage"
                    },
                    "Modifier_Entangle_DamageValue": 0
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-972302734\">Monster_W4_Unicorn_LocalLegend_Ability02_Attack03</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Moonlit Pegasus: Skill02 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "displayLines": "Unicorn_Skill02_DamagePercentage"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Moonlit Pegasus: Skill02 Target 3}}.[[addMemosprite]].[[removeUnselectable]]"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                  "duration": {
                    "displayLines": "Unicorn_Debuff_LifeTime"
                  },
                  "baseChance": {
                    "displayLines": "Unicorn_Debuff_Chance"
                  },
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": {
                      "displayLines": "Unicorn_Debuff_ActionDelayRatio"
                    },
                    "Modifier_Entangle_DamagePercentage": {
                      "displayLines": "Unicorn_Debuff_DamagePercentage"
                    },
                    "Modifier_Entangle_DamageValue": 0
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4023011_Monster_W4_Griffin_LocalLegend_Ability02_Part02": {
      "fileName": "4023011_Monster_W4_Griffin_LocalLegend_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "UI Display Event",
          "popUpText": "Heralding the Dawn"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            "compareType": "NOT=",
            "value2": 1,
            "livingTargets": true
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            "compareType": ">=",
            "value2": 3,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Noontide Gryphon: Skill02 Target}}"
                  },
                  {
                    "name": "Target Index"
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Noontide Gryphon: Skill02 Target}}"
                  },
                  {
                    "name": "Target Index",
                    "indexValue": 1
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Noontide Gryphon: Skill02 Target}}"
                  },
                  {
                    "name": "Target Index",
                    "indexValue": 2
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1624884388\">Monster_W4_Griffin_Ability02_Attack01</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1675217245\">Monster_W4_Griffin_Ability02_Attack02</a>"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1658439626\">Monster_W4_Griffin_Ability02_Attack03</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
                },
                "compareType": ">=",
                "value2": 2,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Noontide Gryphon: Skill02 Target}}"
                      },
                      {
                        "name": "Target Index"
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Noontide Gryphon: Skill02 Target}}"
                      },
                      {
                        "name": "Target Index",
                        "indexValue": 1
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1624884388\">Monster_W4_Griffin_Ability02_Attack01</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1675217245\">Monster_W4_Griffin_Ability02_Attack02</a>"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Noontide Gryphon: Skill02 Target}}"
                      },
                      {
                        "name": "Target Index"
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"299917600\">Monster_W4_Griffin_Ability02_Attack01_1P</a>"
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
        },
        "Trigger: Ability End"
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__299917600\">Monster_W4_Griffin_Ability02_Attack01_1P</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "TargetList": [
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
                      "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                    }
                  }
                ]
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "{[Skill02[0]]}"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "TargetList": [
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
                      "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
              "duration": {
                "displayLines": "{[PassiveSkill01[1]]}"
              },
              "baseChance": {
                "displayLines": "{[PassiveSkill01[0]]}"
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "displayLines": "{[PassiveSkill01[2]]}"
                }
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1624884388\">Monster_W4_Griffin_Ability02_Attack01</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "TargetList": [
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
                      "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                    }
                  }
                ]
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "{[Skill02[0]]}"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "TargetList": [
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
                      "modifier": "<a class=\"gModGreen\" id=\"1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
              "duration": {
                "displayLines": "{[PassiveSkill01[1]]}"
              },
              "baseChance": {
                "displayLines": "{[PassiveSkill01[0]]}"
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "displayLines": "{[PassiveSkill01[2]]}"
                }
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1675217245\">Monster_W4_Griffin_Ability02_Attack02</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "TargetList": [
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
                      "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                    }
                  }
                ]
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "{[Skill02[0]]}"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "TargetList": [
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
                      "modifier": "<a class=\"gModGreen\" id=\"1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
              "duration": {
                "displayLines": "{[PassiveSkill01[1]]}"
              },
              "baseChance": {
                "displayLines": "{[PassiveSkill01[0]]}"
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "displayLines": "{[PassiveSkill01[2]]}"
                }
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1658439626\">Monster_W4_Griffin_Ability02_Attack03</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Sequence",
                "TargetList": [
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
                      "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                    }
                  }
                ]
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "{[Skill02[0]]}"
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "TargetList": [
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
                      "modifier": "<a class=\"gModGreen\" id=\"1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1990407757\">Standard_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
              "duration": {
                "displayLines": "{[PassiveSkill01[1]]}"
              },
              "baseChance": {
                "displayLines": "{[PassiveSkill01[0]]}"
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "displayLines": "{[PassiveSkill01[2]]}"
                }
              }
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1715953719\">Monster_W4_Griffin_Ability02_Target03</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1699176100\">Monster_W4_Griffin_Ability02_Target02</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1749508957\">Monster_W4_Griffin_Ability02_Target01</a>"
        }
      ]
    },
    "4023011_Monster_W4_Griffin_LocalLegend_Ability02_Part01": {
      "fileName": "4023011_Monster_W4_Griffin_LocalLegend_Ability02_Part01",
      "childAbilityList": [
        "4023011_Monster_W4_Griffin_LocalLegend_Ability02_Camera",
        "4023011_Monster_W4_Griffin_LocalLegend_Ability02_Camera02",
        "4023011_Monster_W4_Griffin_LocalLegend_Ability02_Part01",
        "4023011_Monster_W4_Griffin_LocalLegend_Ability02_Part02",
        "4023011_Monster_W4_Griffin_LocalLegend_Ability02_Part02_02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
                },
                "compareType": "=",
                "value2": 1,
                "livingTargets": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
                },
                "flagName": "Break",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W4_Griffin_LocalLegend_Ability02_Part02_02",
              "isTrigger": true
            },
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W4_Griffin_LocalLegend_Ability02_Part02",
              "isTrigger": true
            },
            "Deleted bullshit"
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
                },
                "compareType": "=",
                "value2": 1,
                "livingTargets": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
                },
                "flagName": "Break",
                "invertCondition": true
              }
            ]
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}",
        "targetIsVariable": true
      },
      "references": []
    },
    "4023011_Monster_W4_Griffin_Ability01_Part02": {
      "fileName": "4023011_Monster_W4_Griffin_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "{[Skill01[0]]}"
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "variableName": "ENEMIES_OBJECT_UNUSED__181"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
              "duration": {
                "displayLines": "UnusedUnderThisBase_13870"
              },
              "baseChance": {
                "displayLines": "UnusedUnderThisBase_13863"
              },
              "valuePerStack": {
                "MDF_DamagePercentage_Layer": {
                  "displayLines": "UnusedUnderThisBase_13871"
                }
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "4023011_Monster_W4_Griffin_Ability01_Part01": {
      "fileName": "4023011_Monster_W4_Griffin_Ability01_Part01",
      "childAbilityList": [
        "4023011_Monster_W4_Griffin_Ability01_Camera",
        "4023011_Monster_W4_Griffin_Ability01_Part01",
        "4023011_Monster_W4_Griffin_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Griffin_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "4023011_Functions": {
      "fileName": "4023011_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 1,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1587865992\">W4_Griffin_LocalLegend_Summon</a>",
          "parse": [
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
                  "variableName": "_SummonCheck",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 4023012,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Earthshaker Leo: Solblaze Winged Beast",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "((_SummonCheck - _Bonus2Init) / _Bonus2Sums)"
                      },
                      "variableName": "_BonusCheck"
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
                  "variableName": "_SummonCheck",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "((_SummonCheck - _BonusInit) / _BonusSums)"
                  },
                  "variableName": "_BonusCheck"
                }
              ]
            },
            {
              "name": "Define Custom Variable with Team Count",
              "variableName": "_MascotCounts",
              "readTarget": {
                "name": "Target Name",
                "target": "{{EVENT[RoT] Mascot}}"
              },
              "living": true
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_BonusCheck",
                "compareType": "=",
                "value2": {
                  "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(_BonusCheck)"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_MascotReadyToSum",
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
                    "value1": "_MascotReadyToSum",
                    "compareType": ">=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_MascotCounts",
                    "compareType": "<=",
                    "value2": 1
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 4023012,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Earthshaker Leo: Solblaze Winged Beast",
                    "invertCondition": true
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "_BonusCheck02",
                            "compareType": "<",
                            "value2": {
                              "displayLines": "_Bonus2Limit"
                            }
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 2
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "_BonusCheck02",
                            "compareType": "<",
                            "value2": {
                              "displayLines": "(_BonusLimit + _Bonus2Limit)"
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
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_MascotReadyToSum",
                  "value": -1
                },
                {
                  "name": "Create Enemies",
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "displayLines": "SummonID03"
                      },
                      "locationType": "FormationRecord"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "displayLines": "_DelayCase"
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "{[Skill02[1]]}"
                          },
                          "variableName": "_DelayRatio"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "{[Skill02[2]]}"
                          },
                          "variableName": "_DelayRatio"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "{[Skill02[3]]}"
                          },
                          "variableName": "_DelayRatio"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "{[Skill02[4]]}"
                          },
                          "variableName": "_DelayRatio"
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
                    "value1": "_DelayCase",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "_DelayCase"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_DelayCase",
                      "value": 1,
                      "max": 3
                    }
                  ]
                },
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "displayLines": "_DelayRatio"
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "displayLines": "SummonID01"
                      },
                      "locationType": "FormationRecord"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            }
          ]
        }
      ],
      "references": []
    },
    "4023011_Handling": {
      "fileName": "4023011_Handling",
      "abilityType": "Handling",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler String",
              "variableName": "CurrentPhase",
              "value": "Phase01"
            },
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 2,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill01"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision02",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 3,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision03",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 4,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill03"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision04",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Compare: Variable",
                      "value1": "HP_Bars_Remaining",
                      "compareType": "=",
                      "value2": 2
                    },
                    "passed": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 5,
                        "scope": "TargetEntity"
                      }
                    ],
                    "failed": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 1,
                        "scope": "TargetEntity"
                      }
                    ]
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill04"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision05",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 6,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill01"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 5,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision06",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 1,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 6,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}