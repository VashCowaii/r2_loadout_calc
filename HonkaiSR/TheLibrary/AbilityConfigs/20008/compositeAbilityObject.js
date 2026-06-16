const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 20008,
  "trimCharacterName": 20008,
  "abilityList": [
    "20008_Modifiers",
    "20008_BattleEventAbility_W2_LycanKing_Summon",
    "20008_BattleEventAbility_Monster_W2_LycanKing_SummonMonster"
  ],
  "abilityObject": {
    "20008_Modifiers": {
      "fileName": "20008_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__268414254\">W2_LycanKing_BattleScore2Mark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-535542021\">W2_LycanKing_BattleScore2</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Veiled Moon, Ceased Sheen",
                      "desc": "Hoolay could not unleash \"Lupine Chase Calls Bloody Gleam\" in Moon Rage's duration",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-518764402\">W2_LycanKing_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__167"
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
                  "noTargetFound": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Lone Wolf's Howl",
                          "desc": "There are no other Wolftrooper enemies on the field when Hoolay triggers Moon Rage",
                          "rarity": "Low"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2068184553\">Enemy_W2_LycanKing_RageEffect</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__168"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "HP_Bars_Remaining",
                            "compareType": ">=",
                            "value2": 3
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__168",
                            "invertCondition": true
                          },
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "HP_Bars_Remaining",
                                "compareType": ">=",
                                "value2": 2
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1370655977\">Enemy_W2_LycanKing_MainStoryPhase2Mark</a>"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__168"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "HP_Bars_Remaining",
                            "compareType": ">=",
                            "value2": 3
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__168",
                            "invertCondition": true
                          },
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "HP_Bars_Remaining",
                                "compareType": ">=",
                                "value2": 2
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1370655977\">Enemy_W2_LycanKing_MainStoryPhase2Mark</a>"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1708829325\">Enemy_W2_LycanKing_RageEffectFadeout</a>"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-1708829325\">Enemy_W2_LycanKing_RageEffectFadeout</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__563066245\">Enemy_W2_LycanKing_BloodRageMark</a>[<span class=\"descriptionNumberColor\">Irate</span>]",
          "stackType": "Replace",
          "description": "Hoolay currently possesses <span class=\"descriptionNumberColor\">MDF_Layer</span> stack(s) of Irate.",
          "type": "Other",
          "effectName": "Irate",
          "statusName": "Irate",
          "addStacksPerTrigger": 1,
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
                    "compareType": "<=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "MDF_Layer",
                      "multiplier": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-2054251220\">Enemy_W2_LycanKing_BloodRage</a>"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__435779874\">Monster_W2_LycanKing_RefreshEnergyBar</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (WolfBoss_BloodRageCount) || RETURN",
                    "displayLines": "WolfBoss_BloodRageCount",
                    "constants": [],
                    "variables": [
                      "WolfBoss_BloodRageCount"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (WolfBoss_BloodRageMaxCount) || RETURN",
                    "displayLines": "WolfBoss_BloodRageMaxCount",
                    "constants": [],
                    "variables": [
                      "WolfBoss_BloodRageMaxCount"
                    ]
                  },
                  "assignState": "True",
                  "barType": "Hulei"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-717129648\">Enemy_W2_LycanKing_RageStatusEnhanceSelf</a>[<span class=\"descriptionNumberColor\">Lupine Lord's Majesty</span>]",
          "stackType": "Replace",
          "description": "Hoolay's SPD increases by <span class=\"descriptionNumberColor\">MDF_SpeedAddRatioPerLayer</span> due to the presence of Sableclaw Wolftrooper and Eclipse Wolftrooper on the field.",
          "type": "Buff",
          "effectName": "Lupine Lord's Majesty",
          "statusName": "Lupine Lord's Majesty",
          "addStacksPerTrigger": 1,
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
                    "compareType": "<=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1729331430\">Enemy_W2_LycanKing_RageStatusEnhance</a>[<span class=\"descriptionNumberColor\">Lupine Lord's Majesty</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "When entering Moon Rage, the effect of Moon Rage will be Enhanced.",
          "type": "Buff",
          "effectName": "Lupitoxin",
          "statusName": "Lupine Lord's Majesty",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__545997619\">Monster_W2_LycanKing_Revive</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (Wolf_AttackCount) || RETURN",
                        "displayLines": "Wolf_AttackCount",
                        "constants": [],
                        "variables": [
                          "Wolf_AttackCount"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                        "displayLines": "Wolf_MaxAttackCount",
                        "constants": [],
                        "variables": [
                          "Wolf_MaxAttackCount"
                        ]
                      },
                      "assignState": "True",
                      "state": "Normal"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
                    }
                  ]
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"979801477\">Monster_Standard_Endurance</a>"
                },
                {
                  "name": "Set Enemy Phase",
                  "mode": "Inc"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__168"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Monster_W2_LycanKing_RLBoss_PassiveAbility_Insert",
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Monster_W2_LycanKing_PassiveAbility_Insert",
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ]
        }
      ],
      "references": []
    },
    "20008_BattleEventAbility_W2_LycanKing_Summon": {
      "fileName": "20008_BattleEventAbility_W2_LycanKing_Summon",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Stage Ability",
          "abilityName": "BattleEventAbility_Monster_W2_LycanKing_SummonMonster",
          "parameters": {}
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"746359205\">Modifier_BattleEventAbility_SummonMonster</a>"
        },
        {
          "name": "Assign Unique Name",
          "uniqueName": "LycanSummon",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__746359205\">Modifier_BattleEventAbility_SummonMonster</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<",
                    "value2": 5
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "BattleEventAbility_Monster_W2_LycanKing_SummonMonster",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "EnemyChangeState",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "20008_BattleEventAbility_Monster_W2_LycanKing_SummonMonster": {
      "fileName": "20008_BattleEventAbility_Monster_W2_LycanKing_SummonMonster",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__168"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "P1_Lycan00Chance",
              "value": 0.75
            },
            {
              "name": "Define Custom Variable",
              "variableName": "P2_Lycan01Chance",
              "value": 0.25
            }
          ],
          "noTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "P1_Lycan00Chance",
              "value": 0.5
            },
            {
              "name": "Define Custom Variable",
              "variableName": "P2_Lycan01Chance",
              "value": 0.5
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "=",
            "value2": 4
          },
          "ifTargetFound": [
            {
              "name": "Random Event",
              "isUnique": true,
              "odds": [
                {
                  "operator": "Variables[0] (P1_Lycan00Chance) || RETURN",
                  "displayLines": "P1_Lycan00Chance",
                  "constants": [],
                  "variables": [
                    "P1_Lycan00Chance"
                  ]
                },
                {
                  "operator": "Variables[0] (P2_Lycan01Chance) || RETURN",
                  "displayLines": "P2_Lycan01Chance",
                  "constants": [],
                  "variables": [
                    "P2_Lycan01Chance"
                  ]
                }
              ],
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] (P3_Lycan01Delay) || RETURN",
                        "displayLines": "P3_Lycan01Delay",
                        "constants": [],
                        "variables": [
                          "P3_Lycan01Delay"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfID01) || RETURN",
                            "displayLines": "WolfID01",
                            "constants": [],
                            "variables": [
                              "WolfID01"
                            ]
                          },
                          "locationType": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] (P3_Lycan01Delay) || RETURN",
                        "displayLines": "P3_Lycan01Delay",
                        "constants": [],
                        "variables": [
                          "P3_Lycan01Delay"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfID01) || RETURN",
                            "displayLines": "WolfID01",
                            "constants": [],
                            "variables": [
                              "WolfID01"
                            ]
                          },
                          "locationType": "Last"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] (P3_Lycan01Delay) || RETURN",
                        "displayLines": "P3_Lycan01Delay",
                        "constants": [],
                        "variables": [
                          "P3_Lycan01Delay"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfID02) || RETURN",
                            "displayLines": "WolfID02",
                            "constants": [],
                            "variables": [
                              "WolfID02"
                            ]
                          },
                          "locationType": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] (P3_Lycan01Delay) || RETURN",
                        "displayLines": "P3_Lycan01Delay",
                        "constants": [],
                        "variables": [
                          "P3_Lycan01Delay"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfID02) || RETURN",
                            "displayLines": "WolfID02",
                            "constants": [],
                            "variables": [
                              "WolfID02"
                            ]
                          },
                          "locationType": "Last"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1370655977\">Enemy_W2_LycanKing_MainStoryPhase2Mark</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Random Event",
                  "isUnique": true,
                  "odds": [
                    {
                      "operator": "Variables[0] (P1_Lycan00Chance) || RETURN",
                      "displayLines": "P1_Lycan00Chance",
                      "constants": [],
                      "variables": [
                        "P1_Lycan00Chance"
                      ]
                    },
                    {
                      "operator": "Variables[0] (P2_Lycan01Chance) || RETURN",
                      "displayLines": "P2_Lycan01Chance",
                      "constants": [],
                      "variables": [
                        "P2_Lycan01Chance"
                      ]
                    }
                  ],
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team",
                        "location": "Left"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (P4_Lycan02Delay) || RETURN",
                            "displayLines": "P4_Lycan02Delay",
                            "constants": [],
                            "variables": [
                              "P4_Lycan02Delay"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (WolfID01) || RETURN",
                                "displayLines": "WolfID01",
                                "constants": [],
                                "variables": [
                                  "WolfID01"
                                ]
                              },
                              "locationType": "First"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (P4_Lycan02Delay) || RETURN",
                            "displayLines": "P4_Lycan02Delay",
                            "constants": [],
                            "variables": [
                              "P4_Lycan02Delay"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (WolfID01) || RETURN",
                                "displayLines": "WolfID01",
                                "constants": [],
                                "variables": [
                                  "WolfID01"
                                ]
                              },
                              "locationType": "Last"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team",
                        "location": "Left"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (P4_Lycan02Delay) || RETURN",
                            "displayLines": "P4_Lycan02Delay",
                            "constants": [],
                            "variables": [
                              "P4_Lycan02Delay"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (WolfID02) || RETURN",
                                "displayLines": "WolfID02",
                                "constants": [],
                                "variables": [
                                  "WolfID02"
                                ]
                              },
                              "locationType": "First"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (P4_Lycan02Delay) || RETURN",
                            "displayLines": "P4_Lycan02Delay",
                            "constants": [],
                            "variables": [
                              "P4_Lycan02Delay"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (WolfID02) || RETURN",
                                "displayLines": "WolfID02",
                                "constants": [],
                                "variables": [
                                  "WolfID02"
                                ]
                              },
                              "locationType": "Last"
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": ">=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Random Event",
                  "isUnique": true,
                  "odds": [
                    {
                      "operator": "Variables[0] (P1_Lycan00Chance) || RETURN",
                      "displayLines": "P1_Lycan00Chance",
                      "constants": [],
                      "variables": [
                        "P1_Lycan00Chance"
                      ]
                    },
                    {
                      "operator": "Variables[0] (P2_Lycan01Chance) || RETURN",
                      "displayLines": "P2_Lycan01Chance",
                      "constants": [],
                      "variables": [
                        "P2_Lycan01Chance"
                      ]
                    }
                  ],
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team",
                        "location": "Left"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (P5_Lycan03Delay) || RETURN",
                            "displayLines": "P5_Lycan03Delay",
                            "constants": [],
                            "variables": [
                              "P5_Lycan03Delay"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (WolfID01) || RETURN",
                                "displayLines": "WolfID01",
                                "constants": [],
                                "variables": [
                                  "WolfID01"
                                ]
                              },
                              "locationType": "First"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (P5_Lycan03Delay) || RETURN",
                            "displayLines": "P5_Lycan03Delay",
                            "constants": [],
                            "variables": [
                              "P5_Lycan03Delay"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (WolfID01) || RETURN",
                                "displayLines": "WolfID01",
                                "constants": [],
                                "variables": [
                                  "WolfID01"
                                ]
                              },
                              "locationType": "Last"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team",
                        "location": "Left"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (P5_Lycan03Delay) || RETURN",
                            "displayLines": "P5_Lycan03Delay",
                            "constants": [],
                            "variables": [
                              "P5_Lycan03Delay"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (WolfID02) || RETURN",
                                "displayLines": "WolfID02",
                                "constants": [],
                                "variables": [
                                  "WolfID02"
                                ]
                              },
                              "locationType": "First"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (P5_Lycan03Delay) || RETURN",
                            "displayLines": "P5_Lycan03Delay",
                            "constants": [],
                            "variables": [
                              "P5_Lycan03Delay"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (WolfID02) || RETURN",
                                "displayLines": "WolfID02",
                                "constants": [],
                                "variables": [
                                  "WolfID02"
                                ]
                              },
                              "locationType": "Last"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Random Event",
                  "isUnique": true,
                  "odds": [
                    {
                      "operator": "Variables[0] (P1_Lycan00Chance) || RETURN",
                      "displayLines": "P1_Lycan00Chance",
                      "constants": [],
                      "variables": [
                        "P1_Lycan00Chance"
                      ]
                    },
                    {
                      "operator": "Variables[0] (P2_Lycan01Chance) || RETURN",
                      "displayLines": "P2_Lycan01Chance",
                      "constants": [],
                      "variables": [
                        "P2_Lycan01Chance"
                      ]
                    }
                  ],
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team",
                        "location": "Left"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (P6_Lycan04Delay) || RETURN",
                            "displayLines": "P6_Lycan04Delay",
                            "constants": [],
                            "variables": [
                              "P6_Lycan04Delay"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (WolfID01) || RETURN",
                                "displayLines": "WolfID01",
                                "constants": [],
                                "variables": [
                                  "WolfID01"
                                ]
                              },
                              "locationType": "First"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (P6_Lycan04Delay) || RETURN",
                            "displayLines": "P6_Lycan04Delay",
                            "constants": [],
                            "variables": [
                              "P6_Lycan04Delay"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (WolfID01) || RETURN",
                                "displayLines": "WolfID01",
                                "constants": [],
                                "variables": [
                                  "WolfID01"
                                ]
                              },
                              "locationType": "Last"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team",
                        "location": "Left"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (P6_Lycan04Delay) || RETURN",
                            "displayLines": "P6_Lycan04Delay",
                            "constants": [],
                            "variables": [
                              "P6_Lycan04Delay"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (WolfID02) || RETURN",
                                "displayLines": "WolfID02",
                                "constants": [],
                                "variables": [
                                  "WolfID02"
                                ]
                              },
                              "locationType": "First"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] (P6_Lycan04Delay) || RETURN",
                            "displayLines": "P6_Lycan04Delay",
                            "constants": [],
                            "variables": [
                              "P6_Lycan04Delay"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (WolfID02) || RETURN",
                                "displayLines": "WolfID02",
                                "constants": [],
                                "variables": [
                                  "WolfID02"
                                ]
                              },
                              "locationType": "Last"
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
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    }
  },
  "enemyData": {},
  "isBattleEvent": true
}