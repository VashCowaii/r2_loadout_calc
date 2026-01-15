const compositeAbilityObject = {
  "fullCharacterName": "Xueyi",
  "trimCharacterName": "Xueyi",
  "abilityList": [
    "Xueyi_Xueyi_Trace01",
    "Xueyi_Xueyi_TechniqueInLevel",
    "Xueyi_Xueyi_PassiveAtk_Insert02",
    "Xueyi_Xueyi_PassiveAtk_Insert01",
    "Xueyi_Xueyi_PassiveAbility01",
    "Xueyi_Xueyi_Ability03_StancePreCalc",
    "Xueyi_Xueyi_Ability03_Part02",
    "Xueyi_Xueyi_Ability03_Part01",
    "Xueyi_Xueyi_Ability03_EnterReady",
    "Xueyi_Xueyi_Ability02_Part02",
    "Xueyi_Xueyi_Ability02_Part01",
    "Xueyi_Xueyi_Ability01_Part02",
    "Xueyi_Xueyi_Ability01_Part01",
    "Xueyi_Modifiers"
  ],
  "abilityObject": {
    "Xueyi_Xueyi_Trace01": {
      "fileName": "Xueyi_Xueyi_Trace01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Xueyi_Xueyi_TechniqueInLevel": {
      "fileName": "Xueyi_Xueyi_TechniqueInLevel",
      "childAbilityList": [
        "Xueyi_Xueyi_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        20,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "StageAbility_Maze_Xueyi_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_Xueyi_Modifier",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Technique Modifies Current Wave"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": "All Hostile Entities (AOE)",
                      "searchRandom": true,
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": "Use Prior Target(s) Defined",
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] (0.8) || RETURN",
                              "displayLines": "0.8",
                              "constants": [],
                              "variables": [
                                0.8
                              ]
                            },
                            "Toughness": {
                              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                              "displayLines": "AOE Toughness Value",
                              "constants": [],
                              "variables": [
                                "AOE Toughness Value"
                              ]
                            },
                            "Tags": null,
                            "attackType": "Technique"
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Xueyi_Passive_AddCount"
                        }
                      ]
                    },
                    "Trigger: Attack End"
                  ]
                }
              ],
              "priorityLevel": -60
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Xueyi_Xueyi_PassiveAtk_Insert02": {
      "fileName": "Xueyi_Xueyi_PassiveAtk_Insert02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Xueyi_BP_Passive01[<span class=\"descriptionNumberColor\">Karma</span>]"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (_Xueyi_Count) || RETURN",
            "displayLines": "_Xueyi_Count",
            "constants": [],
            "variables": [
              "_Xueyi_Count"
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 2
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Is_Insert",
          "value": 1
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
              "to": "Caster",
              "modifier": "Xueyi_Ability03_WeakType_BUFF"
            },
            {
              "name": "Heal",
              "target": "Caster",
              "healPercent": {
                "operator": "Variables[0] (0.05) || RETURN",
                "displayLines": "0.05",
                "constants": [],
                "variables": [
                  0.05
                ]
              },
              "formula": "Heal from Target MaxHP"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Xueyi_AbilityEidolon1_InserteDamageRatio",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Bounce_SelectTarget",
          "target": "All Hostile Entities (AOE)",
          "paramSequence": [
            "Select Random Target from List",
            {
              "name": "ATK Scaling DMG",
              "target": "Use Prior Target(s) Defined",
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Follow-up",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Bounce_SelectTarget",
          "target": "All Hostile Entities (AOE)",
          "paramSequence": [
            "Select Random Target from List",
            {
              "name": "ATK Scaling DMG",
              "target": "Use Prior Target(s) Defined",
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Follow-up",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Bounce_SelectTarget",
          "target": "All Hostile Entities (AOE)",
          "paramSequence": [
            "Select Random Target from List",
            {
              "name": "ATK Scaling DMG",
              "target": "Use Prior Target(s) Defined",
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Follow-up",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Xueyi_Ability03_WeakType_BUFF"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Xueyi_PassiveLayer",
          "value": 0
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (_Xueyi_PassiveLayer) || RETURN",
            "displayLines": "_Xueyi_PassiveLayer",
            "constants": [],
            "variables": [
              "_Xueyi_PassiveLayer"
            ]
          },
          "priorState": "Normal",
          "bar#": 2
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Perspicacious Mainframe"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Xueyi_BP_Passive01[<span class=\"descriptionNumberColor\">Karma</span>]",
              "stackLimit": {
                "operator": "Variables[0] (_Xueyi_Count) || RETURN",
                "displayLines": "_Xueyi_Count",
                "constants": [],
                "variables": [
                  "_Xueyi_Count"
                ]
              },
              "valuePerStack": {
                "MDF_PassiveLayer": {
                  "operator": "Variables[0] (_Xueyi_Count) || RETURN",
                  "displayLines": "_Xueyi_Count",
                  "constants": [],
                  "variables": [
                    "_Xueyi_Count"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (PointB3_DifferencePassive01_Count) || RETURN",
                "displayLines": "PointB3_DifferencePassive01_Count",
                "constants": [],
                "variables": [
                  "PointB3_DifferencePassive01_Count"
                ]
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Xueyi_Passive_Trace03[<span class=\"descriptionNumberColor\">Perspicacious Mainframe</span>]"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Xueyi_AbilityEidolon1_InserteDamageRatio"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Is_Insert",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_Change_Stance",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_Difference",
          "value": 0
        },
        "Trigger: Skip Death Handling"
      ],
      "references": []
    },
    "Xueyi_Xueyi_PassiveAtk_Insert01": {
      "fileName": "Xueyi_Xueyi_PassiveAtk_Insert01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Xueyi_Attack",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Xueyi_BP_Passive02"
        },
        {
          "name": "UI Display Event",
          "popUpText": "Karmic Perpetuation"
        },
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Xueyi_PassiveAtk_Insert02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Enemies Still Alive",
              "target": "Caster",
              "includeNonTargets": true
            }
          },
          "passed": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Xueyi_Attack",
          "value": 1
        }
      ],
      "onAbort": [
        {
          "name": "Define Custom Variable",
          "variableName": "_Xueyi_Attack",
          "value": 1
        }
      ],
      "references": []
    },
    "Xueyi_Xueyi_PassiveAbility01": {
      "fileName": "Xueyi_Xueyi_PassiveAbility01",
      "childAbilityList": [
        "Xueyi_Xueyi_PassiveAbility01",
        "Xueyi_Xueyi_PassiveAtk_Insert01",
        "Xueyi_Xueyi_PassiveAtk_Insert02",
        "Xueyi_Xueyi_Passive1Atk_Ability_Camera",
        "Xueyi_Xueyi_Passive1Atk_Ability_Camera_01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 2,
      "toughnessList": [
        5,
        0,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Xueyi_Count",
              "value": {
                "operator": "Variables[0] (6) || RETURN",
                "displayLines": "6",
                "constants": [],
                "variables": [
                  6
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Xueyi_Count",
              "value": {
                "operator": "Variables[0] (8) || RETURN",
                "displayLines": "8",
                "constants": [],
                "variables": [
                  8
                ]
              }
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (_Xueyi_Count) || RETURN",
            "displayLines": "_Xueyi_Count",
            "constants": [],
            "variables": [
              "_Xueyi_Count"
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 2
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Xueyi_PassiveAbility"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Xueyi_EnterBattleFlag"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Clairvoyant Loom"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Xueyi_Passive_Trace01"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Xueyi_StancePreview"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Xueyi_EnterBattleFlag",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Xueyi_OnEnterBattle_Flag",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Xueyi_OnEnterBattle_Attack",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Xueyi_Passive_AddCount"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Xueyi_Passive_AddCount",
                          "valuePerStack": {
                            "MDF_Passive_StanceMaxCount": {
                              "operator": "Variables[0] (1) || RETURN",
                              "displayLines": "1",
                              "constants": [],
                              "variables": [
                                1
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Xueyi_OnEnterBattle_Attack",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Xueyi_OnEnterBattle_Flag",
                  "value": 0
                }
              ],
              "priorityLevel": 999999
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Xueyi_OnEnterBattle_Flag",
                  "value": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Xueyi_PassiveAbility",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Hostile Entities (AOE)",
                  "modifier": "Xueyi_Passive_OnListenStance"
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
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamDark"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Xueyi_Passive_OnListenStance"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": "All Team Members(In Context, with Untargetable + Battle Events)",
                    "target": "Use Prior Target(s) Defined",
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": "Use Prior Target(s) Defined",
                        "target2": "Caster"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Skill Type",
                                "skillType": "Basic ATK"
                              },
                              {
                                "name": "Skill Type",
                                "skillType": "Skill"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Caster",
                              "modifier": "Xueyi_Passive_AddCount"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "MDF_Difference",
                                "compareType": ">",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Caster",
                              "modifier": "Xueyi_Passive_AddCount",
                              "valuePerStack": {
                                "MDF_Passive_StanceMaxCount": {
                                  "operator": "Variables[0] (1) || RETURN",
                                  "displayLines": "1",
                                  "constants": [],
                                  "variables": [
                                    1
                                  ]
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Difference",
                              "value": 0
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Change_Stance",
                              "value": 0
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": "Use Prior Target(s) Defined",
                        "team": "TeamLight"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_Xueyi_Attack",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Xueyi_PassiveLayer",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (_Xueyi_Count) || RETURN",
                          "displayLines": "_Xueyi_Count",
                          "constants": [],
                          "variables": [
                            "_Xueyi_Count"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Enemies Still Alive",
                                "target": "Caster",
                                "includeNonTargets": true
                              },
                              {
                                "name": "Has Flag",
                                "target": "Owner of this Modifier",
                                "flagName": "STAT_CTRL",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Flag",
                                "target": "Owner of this Modifier",
                                "flagName": "DisableAction",
                                "invertCondition": true
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "Xueyi_PassiveAtk_Insert01",
                              "abilitySource": "Caster",
                              "abilityTarget": "All Hostile Entities (AOE)",
                              "priorityTag": "AvatarInsertAttackSelf",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "abortFlags": [
                                "STAT_CTRL",
                                "DisableAction"
                              ],
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
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Hostile Entities (AOE)",
                  "modifier": "Xueyi_Passive_OnListenStance"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_Xueyi_Attack",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Has Flag",
                        "target": "Owner of this Modifier",
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": "Owner of this Modifier",
                        "flagName": "DisableAction",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Xueyi_PassiveLayer",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (_Xueyi_Count) || RETURN",
                          "displayLines": "_Xueyi_Count",
                          "constants": [],
                          "variables": [
                            "_Xueyi_Count"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Enemies Still Alive",
                            "target": "Caster",
                            "includeNonTargets": true
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "Xueyi_PassiveAtk_Insert01",
                              "abilitySource": "Caster",
                              "abilityTarget": "All Hostile Entities (AOE)",
                              "priorityTag": "AvatarInsertAttackSelf",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "abortFlags": [
                                "STAT_CTRL",
                                "DisableAction"
                              ],
                              "allowAbilityTriggers": false
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_Xueyi_PassiveLayer",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (_Xueyi_Count) || RETURN",
                          "displayLines": "_Xueyi_Count",
                          "constants": [],
                          "variables": [
                            "_Xueyi_Count"
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Xueyi_PassiveAtk_Insert01",
                      "abilitySource": "Caster",
                      "abilityTarget": "All Hostile Entities (AOE)",
                      "priorityTag": "AvatarInsertAttackSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_Xueyi_Attack",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Flag",
                          "target": "Caster",
                          "flagName": "STAT_CTRL"
                        }
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Flag",
                          "target": "Caster",
                          "flagName": "DisableAction"
                        }
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Modifier Has Flag",
                            "target": "Caster",
                            "flagName": "STAT_CTRL"
                          },
                          {
                            "name": "Modifier Has Flag",
                            "target": "Caster",
                            "flagName": "DisableAction"
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Xueyi_PassiveLayer",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (_Xueyi_Count) || RETURN",
                          "displayLines": "_Xueyi_Count",
                          "constants": [],
                          "variables": [
                            "_Xueyi_Count"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Enemies Still Alive",
                            "target": "Caster",
                            "includeNonTargets": true
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "Xueyi_PassiveAtk_Insert01",
                              "abilitySource": "Caster",
                              "abilityTarget": "All Hostile Entities (AOE)",
                              "priorityTag": "AvatarInsertAttackSelf",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "abortFlags": [
                                "STAT_CTRL",
                                "DisableAction"
                              ],
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
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Xueyi_Attack",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Xueyi_PassiveLayer",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (_Xueyi_Count) || RETURN",
                          "displayLines": "_Xueyi_Count",
                          "constants": [],
                          "variables": [
                            "_Xueyi_Count"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Enemies Still Alive",
                                "target": "Caster",
                                "includeNonTargets": true
                              },
                              {
                                "name": "Has Flag",
                                "target": "Owner of this Modifier",
                                "flagName": "STAT_CTRL",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Flag",
                                "target": "Owner of this Modifier",
                                "flagName": "DisableAction",
                                "invertCondition": true
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "Xueyi_PassiveAtk_Insert01",
                              "abilitySource": "Caster",
                              "abilityTarget": "All Hostile Entities (AOE)",
                              "priorityTag": "AvatarInsertAttackSelf",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "abortFlags": [
                                "STAT_CTRL",
                                "DisableAction"
                              ],
                              "allowAbilityTriggers": false
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
        },
        {
          "name": "Modifier Construction",
          "for": "Xueyi_StancePreview",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Ultimate",
            "toughnessForcedReductionPreview": {
              "operator": "Variables[0] (MDF_Skill03_StancePreCalc) || RETURN",
              "displayLines": "MDF_Skill03_StancePreCalc",
              "constants": [],
              "variables": [
                "MDF_Skill03_StancePreCalc"
              ]
            },
            "showAsForcedReduction": true
          }
        }
      ]
    },
    "Xueyi_Xueyi_Ability03_StancePreCalc": {
      "fileName": "Xueyi_Xueyi_Ability03_StancePreCalc",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_Skill03_StancePreCalc",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Xueyi_Ability03_WeakType_BUFF"
        }
      ],
      "references": []
    },
    "Xueyi_Xueyi_Ability03_Part02": {
      "fileName": "Xueyi_Xueyi_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Xueyi_Ability03_AddAttackRatio"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Is_Ultra",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Xueyi_AbilityEidolon4[<span class=\"descriptionNumberColor\">Break Effect Boost</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_AbilityEidolon4_BreakDamageAttackRatio": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Xueyi_Ability03_WeakType_BUFF"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Intrepid Rollerbearings"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Single Target (Primary)",
                "value1": "Current_Toughness_%",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                },
                "includeExoToughness": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Xueyi_Trace02",
                  "valuePerStack": {
                    "MDF_Trace02_AllDamageTypeAddedRatio": {
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
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (2.5) || RETURN",
              "displayLines": "2.5",
              "constants": [],
              "variables": [
                2.5
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Xueyi_Trace02"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_StanceAddAttackRatio",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Is_Ultra",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Xueyi_Ability03_WeakType_BUFF"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Xueyi_Ability03_AddAttackRatio"
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Xueyi_Xueyi_Ability03_Part01": {
      "fileName": "Xueyi_Xueyi_Ability03_Part01",
      "childAbilityList": [
        "Xueyi_Xueyi_Ability03_Camera",
        "Xueyi_Xueyi_Ability03_Part01",
        "Xueyi_Xueyi_Ability03_Part02",
        "Xueyi_Xueyi_Ability03_EnterReady"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        40,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Xueyi_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Xueyi_Xueyi_Ability03_EnterReady": {
      "fileName": "Xueyi_Xueyi_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Xueyi_Xueyi_Ability02_Part02": {
      "fileName": "Xueyi_Xueyi_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.4) || RETURN",
              "displayLines": "1.4",
              "constants": [],
              "variables": [
                1.4
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Blast (Adjacent)",
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (0.7) || RETURN",
              "displayLines": "0.7",
              "constants": [],
              "variables": [
                0.7
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Xueyi_Xueyi_Ability02_Part01": {
      "fileName": "Xueyi_Xueyi_Ability02_Part01",
      "childAbilityList": [
        "Xueyi_Xueyi_Ability02_Camera",
        "Xueyi_Xueyi_Ability02_Part01",
        "Xueyi_Xueyi_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Xueyi_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_Xueyi_PassiveLayer",
            "compareType": "=",
            "value2": {
              "operator": "Variables[0] (_Xueyi_Count) || RETURN",
              "displayLines": "_Xueyi_Count",
              "constants": [],
              "variables": [
                "_Xueyi_Count"
              ]
            }
          }
        }
      ],
      "references": []
    },
    "Xueyi_Xueyi_Ability01_Part02": {
      "fileName": "Xueyi_Xueyi_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.4,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.6,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Xueyi_Xueyi_Ability01_Part01": {
      "fileName": "Xueyi_Xueyi_Ability01_Part01",
      "childAbilityList": [
        "Xueyi_Xueyi_Ability01_Camera",
        "Xueyi_Xueyi_Ability01_Part01",
        "Xueyi_Xueyi_Ability01_Part02"
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
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Xueyi_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Xueyi_Modifiers": {
      "fileName": "Xueyi_Modifiers",
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
          "for": "Xueyi_AbilityEidolon1_InserteDamageRatio",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "Is_Insert"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Xueyi_Passive01_InsertMark",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Xueyi_PassiveAtk_Insert01",
                  "abilitySource": "Caster",
                  "abilityTarget": "All Hostile Entities (AOE)",
                  "priorityTag": "AvatarInsertAttackSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Xueyi_BP_Passive02",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "DisableAction",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Xueyi_PassiveAtk_Insert01",
                      "abilitySource": "Caster",
                      "abilityTarget": "All Hostile Entities (AOE)",
                      "priorityTag": "AvatarInsertAttackSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Xueyi_Passive_Trace03[<span class=\"descriptionNumberColor\">Perspicacious Mainframe</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "PointB3_DifferencePassive01_Count",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": "Owner of this Modifier",
                  "scope": "ContextModifier",
                  "variableName": "MDF_Tree03Layer",
                  "multiplier": 1
                }
              ]
            }
          ],
          "description": "<span class=\"descriptionNumberColor\">MDF_Tree03Layer</span> overflowing Karma stacks.",
          "type": "Other",
          "statusName": "Perspicacious Mainframe"
        },
        {
          "name": "Modifier Construction",
          "for": "Xueyi_AllDamageTypeAddedRatio",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Xueyi_Passive_Trace01",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Xueyi_CheckBreakDamageAddedRatioChange"
                }
              ],
              "priorityLevel": -80
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Xueyi_CheckBreakDamageAddedRatioChange"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "Xueyi_CheckBreakDamageAddedRatioChange",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Caster",
                  "variableName": "MDF_CurrentBreakDamageAddedRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AllDamageTypeAddedRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentBreakDamageAddedRatio) || Variables[1] (1) || MUL || RETURN",
                    "displayLines": "(MDF_CurrentBreakDamageAddedRatio * 1)",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentBreakDamageAddedRatio",
                      1
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_AllDamageTypeAddedRatio",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (2.4) || RETURN",
                      "displayLines": "2.4",
                      "constants": [],
                      "variables": [
                        2.4
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AllDamageTypeAddedRatio",
                      "value": {
                        "operator": "Variables[0] (2.4) || RETURN",
                        "displayLines": "2.4",
                        "constants": [],
                        "variables": [
                          2.4
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Xueyi_AllDamageTypeAddedRatio",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                      "displayLines": "MDF_AllDamageTypeAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AllDamageTypeAddedRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Xueyi_BP_Passive01[<span class=\"descriptionNumberColor\">Karma</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Xueyi_PassiveLayer",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "_Xueyi_PassiveLayer",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Xueyi_PassiveLayer",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_PassiveLayer) || RETURN",
                      "displayLines": "MDF_PassiveLayer",
                      "constants": [],
                      "variables": [
                        "MDF_PassiveLayer"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Xueyi_BP_Passive02"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_Xueyi_PassiveLayer) || RETURN",
                        "displayLines": "_Xueyi_PassiveLayer",
                        "constants": [],
                        "variables": [
                          "_Xueyi_PassiveLayer"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (_Xueyi_Count) || RETURN",
                        "displayLines": "_Xueyi_Count",
                        "constants": [],
                        "variables": [
                          "_Xueyi_Count"
                        ]
                      },
                      "priorState": "Active",
                      "bar#": 2
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_Xueyi_PassiveLayer) || RETURN",
                        "displayLines": "_Xueyi_PassiveLayer",
                        "constants": [],
                        "variables": [
                          "_Xueyi_PassiveLayer"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (_Xueyi_Count) || RETURN",
                        "displayLines": "_Xueyi_Count",
                        "constants": [],
                        "variables": [
                          "_Xueyi_Count"
                        ]
                      },
                      "bar#": 2
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PassiveLayer"
          ],
          "latentQueue": [
            "Is_Insert"
          ],
          "description": "When \"Karma\" is fully stacked, consume all \"Karma\" stacks and immediately use 1 Follow-Up ATK against enemies.",
          "type": "Other",
          "statusName": "Karma"
        },
        {
          "name": "Modifier Construction",
          "for": "Xueyi_Passive_AddCount",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Difference",
                    "compareType": "=",
                    "value2": 0
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_Difference",
                            "compareType": "<=",
                            "value2": 30
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_Difference",
                            "compareType": ">",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Change_Count",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_Difference",
                            "compareType": ">",
                            "value2": 30
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Change_Count",
                              "value": {
                                "operator": "Variables[0] (FLOOR) || Variables[1] (MDF_Difference) || Constants[0] (30) || DIV || PARAM_1 || FUNCTION || RETURN",
                                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_Difference / 30))",
                                "constants": [
                                  30
                                ],
                                "variables": [
                                  "FLOOR",
                                  "MDF_Difference"
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Passive_StanceMaxCount",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_Change_Count",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (MDF_Passive_StanceMaxCount) || RETURN",
                              "displayLines": "MDF_Passive_StanceMaxCount",
                              "constants": [],
                              "variables": [
                                "MDF_Passive_StanceMaxCount"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Change_Count",
                              "value": {
                                "operator": "Variables[0] (MDF_Passive_StanceMaxCount) || RETURN",
                                "displayLines": "MDF_Passive_StanceMaxCount",
                                "constants": [],
                                "variables": [
                                  "MDF_Passive_StanceMaxCount"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Passive_StanceMaxCount",
                          "value": 0
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Perspicacious Mainframe"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "PointB3_CurrentPassive01_Count",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "PointB3_Sum_Passive01_Count",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "PointB3_DifferencePassive01_Count",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "valueType": "Layer",
                          "variableName": "PointB3_CurrentPassive01_Count",
                          "modifierName": "Xueyi_BP_Passive01[<span class=\"descriptionNumberColor\">Karma</span>]",
                          "multiplier": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "PointB3_Sum_Passive01_Count",
                          "value": {
                            "operator": "Variables[0] (PointB3_CurrentPassive01_Count) || Variables[1] (MDF_Change_Count) || ADD || RETURN",
                            "displayLines": "(PointB3_CurrentPassive01_Count + MDF_Change_Count)",
                            "constants": [],
                            "variables": [
                              "PointB3_CurrentPassive01_Count",
                              "MDF_Change_Count"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "PointB3_Sum_Passive01_Count",
                            "compareType": ">",
                            "value2": {
                              "operator": "Variables[0] (_Xueyi_Count) || RETURN",
                              "displayLines": "_Xueyi_Count",
                              "constants": [],
                              "variables": [
                                "_Xueyi_Count"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "PointB3_DifferencePassive01_Count",
                              "value": {
                                "operator": "Variables[0] (PointB3_Sum_Passive01_Count) || Variables[1] (_Xueyi_Count) || SUB || RETURN",
                                "displayLines": "(PointB3_Sum_Passive01_Count - _Xueyi_Count)",
                                "constants": [],
                                "variables": [
                                  "PointB3_Sum_Passive01_Count",
                                  "_Xueyi_Count"
                                ]
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "PointB3_DifferencePassive01_Count",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (6) || RETURN",
                                  "displayLines": "6",
                                  "constants": [],
                                  "variables": [
                                    6
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "PointB3_DifferencePassive01_Count",
                                  "value": {
                                    "operator": "Variables[0] (6) || RETURN",
                                    "displayLines": "6",
                                    "constants": [],
                                    "variables": [
                                      6
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": "Caster",
                                "modifier": "Xueyi_Passive_Trace03[<span class=\"descriptionNumberColor\">Perspicacious Mainframe</span>]"
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable with Modifier Values",
                                  "variableName": "PointB3_CurrentPassive01_Count",
                                  "modifierName": "Xueyi_Passive_Trace03[<span class=\"descriptionNumberColor\">Perspicacious Mainframe</span>]",
                                  "multiplier": 1
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "PointB3_DifferencePassive01_Count",
                                  "value": {
                                    "operator": "Variables[0] (PointB3_DifferencePassive01_Count) || Variables[1] (PointB3_CurrentPassive01_Count) || ADD || RETURN",
                                    "displayLines": "(PointB3_DifferencePassive01_Count + PointB3_CurrentPassive01_Count)",
                                    "constants": [],
                                    "variables": [
                                      "PointB3_DifferencePassive01_Count",
                                      "PointB3_CurrentPassive01_Count"
                                    ]
                                  }
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "PointB3_DifferencePassive01_Count",
                                    "compareType": ">=",
                                    "value2": {
                                      "operator": "Variables[0] (6) || RETURN",
                                      "displayLines": "6",
                                      "constants": [],
                                      "variables": [
                                        6
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "PointB3_DifferencePassive01_Count",
                                      "value": {
                                        "operator": "Variables[0] (6) || RETURN",
                                        "displayLines": "6",
                                        "constants": [],
                                        "variables": [
                                          6
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "Xueyi_Passive_Trace03[<span class=\"descriptionNumberColor\">Perspicacious Mainframe</span>]",
                                  "counter": {
                                    "operator": "Variables[0] (PointB3_DifferencePassive01_Count) || RETURN",
                                    "displayLines": "PointB3_DifferencePassive01_Count",
                                    "constants": [],
                                    "variables": [
                                      "PointB3_DifferencePassive01_Count"
                                    ]
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "Xueyi_Passive_Trace03[<span class=\"descriptionNumberColor\">Perspicacious Mainframe</span>]",
                                  "counter": {
                                    "operator": "Variables[0] (PointB3_DifferencePassive01_Count) || RETURN",
                                    "displayLines": "PointB3_DifferencePassive01_Count",
                                    "constants": [],
                                    "variables": [
                                      "PointB3_DifferencePassive01_Count"
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
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Caster",
                        "modifier": "Xueyi_BP_Passive01[<span class=\"descriptionNumberColor\">Karma</span>]"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "valueType": "Layer",
                          "variableName": "_Passive_Num",
                          "modifierName": "Xueyi_BP_Passive01[<span class=\"descriptionNumberColor\">Karma</span>]",
                          "multiplier": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Passive_SumNum",
                          "value": {
                            "operator": "Variables[0] (MDF_Change_Count) || Variables[1] (_Passive_Num) || ADD || RETURN",
                            "displayLines": "(MDF_Change_Count + _Passive_Num)",
                            "constants": [],
                            "variables": [
                              "MDF_Change_Count",
                              "_Passive_Num"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_Passive_SumNum",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (_Xueyi_Count) || RETURN",
                              "displayLines": "_Xueyi_Count",
                              "constants": [],
                              "variables": [
                                "_Xueyi_Count"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_Passive_LoopCount",
                              "value": {
                                "operator": "Variables[0] (_Xueyi_Count) || Variables[1] (_Passive_Num) || SUB || RETURN",
                                "displayLines": "(_Xueyi_Count - _Passive_Num)",
                                "constants": [],
                                "variables": [
                                  "_Xueyi_Count",
                                  "_Passive_Num"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_Passive_LoopCount",
                              "value": {
                                "operator": "Variables[0] (MDF_Change_Count) || RETURN",
                                "displayLines": "MDF_Change_Count",
                                "constants": [],
                                "variables": [
                                  "MDF_Change_Count"
                                ]
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Passive_LoopCount",
                          "value": {
                            "operator": "Variables[0] (MDF_Change_Count) || RETURN",
                            "displayLines": "MDF_Change_Count",
                            "constants": [],
                            "variables": [
                              "MDF_Change_Count"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (_Passive_LoopCount) || RETURN",
                        "displayLines": "_Passive_LoopCount",
                        "constants": [],
                        "variables": [
                          "_Passive_LoopCount"
                        ]
                      },
                      "Event": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Xueyi_BP_Passive01[<span class=\"descriptionNumberColor\">Karma</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (_Xueyi_Count) || RETURN",
                            "displayLines": "_Xueyi_Count",
                            "constants": [],
                            "variables": [
                              "_Xueyi_Count"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PassiveLayer": {
                              "operator": "Variables[0] (_Xueyi_Count) || RETURN",
                              "displayLines": "_Xueyi_Count",
                              "constants": [],
                              "variables": [
                                "_Xueyi_Count"
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Change_Count",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Passive_Num",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Passive_SumNum",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Passive_LoopCount",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Difference",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Change_Stance",
                  "value": 0
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Xueyi_AbilityEidolon4[<span class=\"descriptionNumberColor\">Break Effect Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SkillRank04_BreakDamageAttackRatio) || RETURN",
                    "displayLines": "MDF_SkillRank04_BreakDamageAttackRatio",
                    "constants": [],
                    "variables": [
                      "MDF_SkillRank04_BreakDamageAttackRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SkillRank04_BreakDamageAttackRatio"
          ],
          "latentQueue": [
            "Is_Ultra"
          ],
          "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">MDF_SkillRank04_BreakDamageAttackRatio</span>.",
          "type": "Buff",
          "effectName": "Break Effect Boost",
          "statusName": "Break Effect Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "Xueyi_Trace02",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "MDF_SkillTree02_AllDamageTypeAddedRatio"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_SkillTree02_AllDamageTypeAddedRatio"
          ],
          "latentQueue": [
            "Is_Ultra"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Xueyi_Ability03_WeakType_BUFF",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ForceStanceDamage"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Caster",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Skill03_StancePreCalc) || RETURN",
                    "displayLines": "MDF_Skill03_StancePreCalc",
                    "constants": [],
                    "variables": [
                      "MDF_Skill03_StancePreCalc"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Is_Ultra"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Xueyi_Ability03_AddAttackRatio",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Define Custom Variable with Toughness Reduction Est",
                  "target": "Caster",
                  "targetDefender": "Caster",
                  "dmgType": "Quantum",
                  "attackType": "Ultimate",
                  "toughnessValue": {
                    "operator": "Variables[0] (ST Toughness Value) || RETURN",
                    "displayLines": "ST Toughness Value",
                    "constants": [],
                    "variables": [
                      "ST Toughness Value"
                    ]
                  },
                  "toughnessValueForcedPercent": {
                    "operator": "Variables[0] (MDF_Skill03_StancePreCalc) || RETURN",
                    "displayLines": "MDF_Skill03_StancePreCalc",
                    "constants": [],
                    "variables": [
                      "MDF_Skill03_StancePreCalc"
                    ]
                  },
                  "reduceAllToughness": true,
                  "variableName": "MDF_PreCalcStanceDamage"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_PreCalcStanceDamage",
                        "compareType": "<=",
                        "value2": 30
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_PreCalcStanceDamage",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PreCalcStanceDamage",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_PreCalcStanceDamage",
                        "compareType": ">",
                        "value2": 30
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_PreCalcStanceDamage",
                          "value": {
                            "operator": "Variables[0] (MDF_PreCalcStanceDamage) || Constants[0] (30) || DIV || RETURN",
                            "displayLines": "(MDF_PreCalcStanceDamage / 30)",
                            "constants": [
                              30
                            ],
                            "variables": [
                              "MDF_PreCalcStanceDamage"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AddAttackRatio",
                  "value": {
                    "operator": "Variables[0] (0.15) || Variables[1] (MDF_PreCalcStanceDamage) || MUL || RETURN",
                    "displayLines": "(0.15 * MDF_PreCalcStanceDamage)",
                    "constants": [],
                    "variables": [
                      0.15,
                      "MDF_PreCalcStanceDamage"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_AddAttackRatio",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AddAttackRatio",
                      "value": {
                        "operator": "Variables[0] (0.6) || RETURN",
                        "displayLines": "0.6",
                        "constants": [],
                        "variables": [
                          0.6
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "MDF_AddAttackRatio"
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
          "for": "Xueyi_Passive_OnListenStance",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Taking Toughness DMG [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": "Use Prior Target(s) Defined",
                        "target2": "Caster"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Is_Insert",
                        "compareType": "<=",
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
                            "name": "Compare: Variable",
                            "value1": "Is_Ultra",
                            "compareType": ">",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Varying Data",
                          "target": null,
                          "variableName": "MDF_Change_Stance",
                          "value": "ParamValue2"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Difference",
                          "value": {
                            "operator": "Variables[0] (FLOOR) || Constants[0] (0.5) || Variables[1] (MDF_Difference) || ADD || Variables[2] (MDF_Change_Stance) || ADD || PARAM_1 || FUNCTION || RETURN",
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(((0.5 + MDF_Difference) + MDF_Change_Stance))",
                            "constants": [
                              0.5
                            ],
                            "variables": [
                              "FLOOR",
                              "MDF_Difference",
                              "MDF_Change_Stance"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Xueyi_Passive_AddCount"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Varying Data",
                          "target": null,
                          "variableName": "MDF_Change_Stance",
                          "value": "ParamValue2"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Difference",
                          "value": {
                            "operator": "Variables[0] (FLOOR) || Constants[0] (0.5) || Variables[1] (MDF_Difference) || ADD || Variables[2] (MDF_Change_Stance) || ADD || PARAM_1 || FUNCTION || RETURN",
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(((0.5 + MDF_Difference) + MDF_Change_Stance))",
                            "constants": [
                              0.5
                            ],
                            "variables": [
                              "FLOOR",
                              "MDF_Difference",
                              "MDF_Change_Stance"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_Xueyi_OnEnterBattle_Flag",
                            "compareType": ">=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_Xueyi_OnEnterBattle_Attack",
                              "value": 1
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": "All Team Members(In Context, with Untargetable + Battle Events)",
                        "target": "Use Prior Target(s) Defined",
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Compare: Target",
                        "target": "Use Prior Target(s) Defined",
                        "target2": "Caster",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": null,
                      "variableName": "MDF_Change_Stance",
                      "value": "ParamValue2"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Difference",
                      "value": {
                        "operator": "Variables[0] (FLOOR) || Constants[0] (0.5) || Variables[1] (MDF_Difference) || ADD || Variables[2] (MDF_Change_Stance) || ADD || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(((0.5 + MDF_Difference) + MDF_Change_Stance))",
                        "constants": [
                          0.5
                        ],
                        "variables": [
                          "FLOOR",
                          "MDF_Difference",
                          "MDF_Change_Stance"
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
            "_Xueyi_Attack"
          ]
        }
      ],
      "references": []
    }
  }
}