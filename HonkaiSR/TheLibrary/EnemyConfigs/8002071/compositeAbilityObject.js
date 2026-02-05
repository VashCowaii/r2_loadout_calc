const compositeAbilityObject = {
  "fullCharacterName": 8002071,
  "trimCharacterName": 8002071,
  "abilityList": [
    "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_Xuwu",
    "8002071_Monster_XP_Minion04_02_AbilityP01_Xuwu",
    "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Cunhu",
    "8002071_Monster_XP_Minion04_02_AbilityP01_Cunhu",
    "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Fengrao_02",
    "8002071_Monster_XP_Minion04_02_AbilityP01_Fengrao_02",
    "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_Fengrao",
    "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Fengrao",
    "8002071_Monster_XP_Minion04_02_AbilityP01_Fengrao",
    "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_Huimie",
    "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Huimie",
    "8002071_Monster_XP_Minion04_02_AbilityP01",
    "8002071_Monster_XP_Minion04_02_Ability03_Part02",
    "8002071_Monster_XP_Minion04_02_Ability03_Part01",
    "8002071_Monster_XP_Minion04_02_Ability02_Part02",
    "8002071_Monster_XP_Minion04_02_Ability02_Part01",
    "8002071_Monster_XP_Minion04_02_Ability01_Part02",
    "8002071_Monster_XP_Minion04_02_Ability01_Part01",
    "8002071_Modifiers"
  ],
  "abilityObject": {
    "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_Xuwu": {
      "fileName": "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_Xuwu",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "DispelSuccess",
              "value": 0
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "typeOverride": "Buff",
              "dispelCount": 1,
              "dispelOrder": "LastAdded",
              "counterKey": "DispelSuccess"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DispelSuccess",
                "compareType": ">",
                "value2": 0.5
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Standard_CTRL_Frozen[<span class=\"descriptionNumberColor\">Frozen</span>]",
                  "duration": 1,
                  "baseChance": {
                    "operator": "Variables[0] (DispelSuccess) || RETURN",
                    "displayLines": "DispelSuccess",
                    "constants": [],
                    "variables": [
                      "DispelSuccess"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Frozen_DamagePercentage": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__42) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__42",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__42"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "DispelSuccess",
              "value": 0
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "typeOverride": "Buff",
              "dispelCount": 1,
              "dispelOrder": "LastAdded",
              "counterKey": "DispelSuccess"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DispelSuccess",
                "compareType": ">",
                "value2": 0.5
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Standard_AttackRatioDown[<span class=\"descriptionNumberColor\">ATK Reduction</span>]",
                  "duration": {
                    "operator": "Constants[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [
                      1
                    ],
                    "variables": []
                  },
                  "baseChance": {
                    "operator": "Variables[0] (DispelSuccess) || RETURN",
                    "displayLines": "DispelSuccess",
                    "constants": [],
                    "variables": [
                      "DispelSuccess"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__44) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__44",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__44"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "DispelSuccess",
              "value": 0
            },
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "typeOverride": "Buff",
              "dispelCount": 1,
              "dispelOrder": "LastAdded",
              "counterKey": "DispelSuccess"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DispelSuccess",
                "compareType": ">",
                "value2": 0.5
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Standard_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
                  "duration": 1,
                  "baseChance": {
                    "operator": "Variables[0] (DispelSuccess) || RETURN",
                    "displayLines": "DispelSuccess",
                    "constants": [],
                    "variables": [
                      "DispelSuccess"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Burn_DamagePercentage": {
                      "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__46) || RETURN",
                      "displayLines": "ENEMIES_OBJECT_UNUSED__46",
                      "constants": [],
                      "variables": [
                        "ENEMIES_OBJECT_UNUSED__46"
                      ]
                    }
                  },
                  "stackFlag": "CharacterSkill"
                }
              ]
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "8002071_Monster_XP_Minion04_02_AbilityP01_Xuwu": {
      "fileName": "8002071_Monster_XP_Minion04_02_AbilityP01_Xuwu",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_P01_Xuwu"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_P01_Xuwu_00"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_P01_Xuwu",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
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
                      "target": "{{Caster}}"
                    },
                    "modifier": "Enemy_XP_Minion04_02_P01_Xuwu_00"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_XP_Minion04_02_AbilityP01_InsertAbility_Xuwu",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "MonsterInsertAttackSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "Break",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Enemy_XP_Minion04_02_P01_Xuwu_00"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Cunhu": {
      "fileName": "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Cunhu",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Break",
                "invertCondition": true
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
              "modifier": "Enemy_XP_Minion04_02_Cunhu_Caster"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Enemy_XP_Minion04_02_Cunhu_Bonus[<span class=\"descriptionNumberColor\">P—Protect You</span>]",
              "counter": {
                "operator": "Variables[0] (UnusedUnderThisBase_135) || RETURN",
                "displayLines": "UnusedUnderThisBase_135",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_135"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Animation Event",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "state": "Skill04",
              "passed": [
                {
                  "name": "Animation Task"
                },
                {
                  "name": "Animation Task",
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Enemy_XP_Minion04_02_Cunhu_Caster"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Enemy_XP_Minion04_02_Cunhu_Bonus[<span class=\"descriptionNumberColor\">P—Protect You</span>]",
                      "counter": {
                        "operator": "Variables[0] (UnusedUnderThisBase_135) || RETURN",
                        "displayLines": "UnusedUnderThisBase_135",
                        "constants": [],
                        "variables": [
                          "UnusedUnderThisBase_135"
                        ]
                      }
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
    "8002071_Monster_XP_Minion04_02_AbilityP01_Cunhu": {
      "fileName": "8002071_Monster_XP_Minion04_02_AbilityP01_Cunhu",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_P01_EnterBattle"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_P01_EnterBattle",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Enemy_XP_Minion04_02_Cunhu_Caster"
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Cunhu_CurrentCount"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Enemy_XP_Minion04_02_Cunhu_Bonus[<span class=\"descriptionNumberColor\">P—Protect You</span>]"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "variableName": "Cunhu_CurrentCount",
                          "modifierName": "Enemy_XP_Minion04_02_Cunhu_Bonus[<span class=\"descriptionNumberColor\">P—Protect You</span>]",
                          "multiplier": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Enemy_XP_Minion04_02_Cunhu_Bonus[<span class=\"descriptionNumberColor\">P—Protect You</span>]",
                          "counter": {
                            "operator": "Variables[0] (Cunhu_CurrentCount) || RETURN",
                            "displayLines": "Cunhu_CurrentCount",
                            "constants": [],
                            "variables": [
                              "Cunhu_CurrentCount"
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
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Cunhu",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterBattleCry",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ],
              "priorityLevel": -55
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Fengrao_02": {
      "fileName": "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Fengrao_02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Break",
                "invertCondition": true
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
              "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Caster",
              "counter": {
                "operator": "Variables[0] (Enemy_XP_Minion04_02_Fengrao_02_Caster) || RETURN",
                "displayLines": "Enemy_XP_Minion04_02_Fengrao_02_Caster",
                "constants": [],
                "variables": [
                  "Enemy_XP_Minion04_02_Fengrao_02_Caster"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion"
            }
          ],
          "failed": [
            {
              "name": "Animation Event",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "state": "Skill04",
              "passed": [
                {
                  "name": "Animation Task"
                },
                {
                  "name": "Animation Task",
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Caster",
                      "counter": {
                        "operator": "Variables[0] (Enemy_XP_Minion04_02_Fengrao_02_Caster) || RETURN",
                        "displayLines": "Enemy_XP_Minion04_02_Fengrao_02_Caster",
                        "constants": [],
                        "variables": [
                          "Enemy_XP_Minion04_02_Fengrao_02_Caster"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_Fengrao_02_Caster",
          "counter": 100,
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CurrentCount",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion_Hit"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<",
                        "value2": 1
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "CostCount"
                    },
                    {
                      "name": "Looped Event",
                      "maxLoops": 10,
                      "Event": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "CostCount",
                            "compareType": "<",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "CurrentCount",
                              "value": {
                                "operator": "Variables[0] (CurrentCount) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(CurrentCount + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "CurrentCount"
                                ]
                              }
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "CostCount",
                              "value": {
                                "operator": "Variables[0] (CostCount) || Constants[0] (0.1) || ADD || RETURN",
                                "displayLines": "(CostCount + 0.1)",
                                "constants": [
                                  0.1
                                ],
                                "variables": [
                                  "CostCount"
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "healPercent": 1,
                      "formula": "Heal from Target MaxHP"
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
                  "maxTargets": 20,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion_Hit"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<",
                        "value2": 1
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "CostCount"
                    },
                    {
                      "name": "Looped Event",
                      "maxLoops": 10,
                      "Event": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "CostCount",
                            "compareType": "<",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "CurrentCount",
                              "value": {
                                "operator": "Variables[0] (CurrentCount) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(CurrentCount + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "CurrentCount"
                                ]
                              }
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "CostCount",
                              "value": {
                                "operator": "Variables[0] (CostCount) || Constants[0] (0.1) || ADD || RETURN",
                                "displayLines": "(CostCount + 0.1)",
                                "constants": [
                                  0.1
                                ],
                                "variables": [
                                  "CostCount"
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "healPercent": 1,
                      "formula": "Heal from Target MaxHP"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion_Hit"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion_Hit"
                },
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "variableName": "CostCount",
                  "modifierName": "Enemy_XP_Minion04_02_Fengrao_02_Caster",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurrentCount",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (CostCount) || RETURN",
                      "displayLines": "CostCount",
                      "constants": [],
                      "variables": [
                        "CostCount"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CurrentCount",
                      "value": {
                        "operator": "Variables[0] (CostCount) || RETURN",
                        "displayLines": "CostCount",
                        "constants": [],
                        "variables": [
                          "CostCount"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Modifier Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "Enemy_XP_Minion04_02_Fengrao_02_Caster",
                  "function": "Add",
                  "value": {
                    "operator": "Variables[0] (CurrentCount) || INVERT || RETURN",
                    "displayLines": "-CurrentCount",
                    "constants": [],
                    "variables": [
                      "CurrentCount"
                    ]
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
          "for": "Enemy_XP_Minion04_02_Fengrao_02_Minion_Hit"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_Fengrao_02_Minion",
          "execute": [
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_Fengrao_02_Minion_Hit"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8002071_Monster_XP_Minion04_02_AbilityP01_Fengrao_02": {
      "fileName": "8002071_Monster_XP_Minion04_02_AbilityP01_Fengrao_02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_P01_EnterBattle"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_P01_EnterBattle",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Fengrao_02",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterBattleCry",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ],
              "priorityLevel": -55
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_Fengrao": {
      "fileName": "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_Fengrao",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_EffectTrigger"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_EffectRound"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_Fengrao_SelfDamage"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_Fengrao_Trigger1"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_Fengrao_Trigger"
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_EffectRound"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_Fengrao_Trigger"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_Fengrao_Trigger1"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_EffectTrigger"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_Fengrao_SelfDamage"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "Enemy_XP_Minion04_02_Fengrao_BeHit"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_Fengrao_SelfDamage",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_Fengrao_Trigger1",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_Fengrao_Trigger",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Fengrao": {
      "fileName": "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Fengrao",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Break",
                "invertCondition": true
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
              "modifier": "Enemy_XP_Minion04_02_EffectPaths"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_XP_Minion04_02_Fengrao_Caster"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_XP_Minion04_02_P01_EnterBattle",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_Fengrao_Minion",
                  "valuePerStack": {
                    "_HealRatio": {
                      "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                      "displayLines": "{[SkillP01[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[0]]}"
                      ]
                    },
                    "_LoseRatio": {
                      "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                      "displayLines": "{[SkillP01[1]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[1]]}"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_XP_Minion04_02_EffectGround"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_XP_Minion04_02_EffectRound"
            }
          ],
          "failed": [
            {
              "name": "Animation Event",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "state": "Skill04",
              "passed": [
                {
                  "name": "Animation Task"
                },
                {
                  "name": "Animation Task",
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Enemy_XP_Minion04_02_EffectPaths"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Enemy_XP_Minion04_02_Fengrao_Caster"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Enemy_XP_Minion04_02_P01_EnterBattle",
                        "invertCondition": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Enemy_XP_Minion04_02_Fengrao_Minion",
                          "valuePerStack": {
                            "_HealRatio": {
                              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                              "displayLines": "{[SkillP01[0]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[0]]}"
                              ]
                            },
                            "_LoseRatio": {
                              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                              "displayLines": "{[SkillP01[1]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[1]]}"
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
      "references": []
    },
    "8002071_Monster_XP_Minion04_02_AbilityP01_Fengrao": {
      "fileName": "8002071_Monster_XP_Minion04_02_AbilityP01_Fengrao",
      "childAbilityList": [
        "8002071_Monster_XP_Minion04_02_AbilityP01_Fengrao",
        "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Fengrao",
        "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_Fengrao"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_03_Introduce[<span class=\"descriptionNumberColor\">C—Cure You</span>]"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 1,
          "entityClass": "Enemy",
          "maximum": 1,
          "assignState": "True"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_P01_EnterBattle"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_03_Introduce[<span class=\"descriptionNumberColor\">C—Cure You</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "When a friendly unit is attacked by a target, Trotter of Abundance consumes its own HP to heal the attacked friendly unit.",
          "type": "Other",
          "effectName": "C—Cure You",
          "statusName": "C—Cure You"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_P01_EnterBattle",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Enemy_XP_Minion04_02_Fengrao_Caster"
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_XP_Minion04_02_Fengrao_Minion",
                      "valuePerStack": {
                        "_HealRatio": {
                          "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                          "displayLines": "{[SkillP01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[0]]}"
                          ]
                        },
                        "_LoseRatio": {
                          "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                          "displayLines": "{[SkillP01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[1]]}"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Fengrao",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterBattleCry",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ],
              "priorityLevel": -55
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_Huimie": {
      "fileName": "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_Huimie",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_Huimie_EffectRound"
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (Huimie_BeHitCounter) || RETURN",
            "displayLines": "Huimie_BeHitCounter",
            "constants": [],
            "variables": [
              "Huimie_BeHitCounter"
            ]
          },
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (UnusedUnderThisBase_7) || RETURN",
                  "displayLines": "UnusedUnderThisBase_7",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_7"
                  ]
                },
                "Toughness": null,
                "Tags": null
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_Huimie_EffectRound"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "Huimie_BeHitCounter"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "XP_Minion04_02_Huimie_InsertFlag"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "Enemy_XP_Minion04_02_Bonus_Huimie_Minion_On"
        }
      ],
      "references": []
    },
    "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Huimie": {
      "fileName": "8002071_Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Huimie",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "STAT_CTRL",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "DisableAction",
                "invertCondition": true
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Break",
                "invertCondition": true
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
              "modifier": "Enemy_XP_Minion04_02_Huimie_EffectPaths"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_XP_Minion04_02_Huimie_EffectRound"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_XP_Minion04_02_Huimie_EffectGround"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Enemy_XP_Minion04_02_Bonus_Huimie_Caster"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "Enemy_XP_Minion04_02_Bonus_Huimie_Minion"
            }
          ],
          "failed": [
            {
              "name": "Animation Event",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "state": "Skill04",
              "passed": [
                {
                  "name": "Animation Task",
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Enemy_XP_Minion04_02_Huimie_EffectPaths"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Enemy_XP_Minion04_02_Huimie_EffectRound"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Enemy_XP_Minion04_02_Huimie_EffectGround"
                    }
                  ]
                },
                {
                  "name": "Animation Task"
                },
                {
                  "name": "Animation Task",
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Enemy_XP_Minion04_02_Bonus_Huimie_Caster"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Enemy_XP_Minion04_02_Bonus_Huimie_Minion"
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
    "8002071_Monster_XP_Minion04_02_AbilityP01": {
      "fileName": "8002071_Monster_XP_Minion04_02_AbilityP01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_Introduce[<span class=\"descriptionNumberColor\">T—Taking Revenge</span>]"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 1,
          "entityClass": "Enemy",
          "maximum": 1,
          "assignState": "True"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_P01_EnterBattle"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_Introduce[<span class=\"descriptionNumberColor\">T—Taking Revenge</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "When a friendly unit is attacked, Trotter of Destruction will attack all targets. The attack count is equal to the number of the targets attacked.",
          "type": "Other",
          "effectName": "T—Taking Revenge",
          "statusName": "T—Taking Revenge"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_P01_EnterBattle",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Enemy_XP_Minion04_02_Bonus_Huimie_Caster"
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_XP_Minion04_02_Bonus_Huimie_Minion"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_XP_Minion04_02_AbilityP01_InsertAbility_EnterBattle_Huimie",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterBattleCry",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ],
              "priorityLevel": -55
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8002071_Monster_XP_Minion04_02_Ability03_Part02": {
      "fileName": "8002071_Monster_XP_Minion04_02_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
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
          "modifier": "Enemy_XP_Minion04_02_EscapingCharge02"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_EffectGround"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_EffectRound"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_Huimie_EffectGround"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_Huimie_EffectRound"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Character ID",
            "ID": 8002060,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          }
        },
        {
          "name": "Mark Entity For Immediate Death"
        },
        "Trigger: Ability End",
        {
          "name": "Entity Escape Battle"
        }
      ],
      "references": []
    },
    "8002071_Monster_XP_Minion04_02_Ability03_Part01": {
      "fileName": "8002071_Monster_XP_Minion04_02_Ability03_Part01",
      "childAbilityList": [
        "8002071_Monster_XP_Minion04_02_Ability03_Part01",
        "8002071_Monster_XP_Minion04_02_Ability03_Part02",
        "8002071_Monster_XP_Minion04_Ability03_Camera"
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
          "ability": "Monster_XP_Minion04_02_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8002071_Monster_XP_Minion04_02_Ability02_Part02": {
      "fileName": "8002071_Monster_XP_Minion04_02_Ability02_Part02",
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
          "modifier": "Enemy_XP_Minion04_02_EscapingCharge01"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_EscapingCharge02"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8002071_Monster_XP_Minion04_02_Ability02_Part01": {
      "fileName": "8002071_Monster_XP_Minion04_02_Ability02_Part01",
      "childAbilityList": [
        "8002071_Monster_XP_Minion04_02_Ability02_Part01",
        "8002071_Monster_XP_Minion04_02_Ability02_Part02",
        "8002071_Monster_XP_Minion04_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Minion04_02_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8002071_Monster_XP_Minion04_02_Ability01_Part02": {
      "fileName": "8002071_Monster_XP_Minion04_02_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_XP_Minion04_02_EscapingCharge01"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8002071_Monster_XP_Minion04_02_Ability01_Part01": {
      "fileName": "8002071_Monster_XP_Minion04_02_Ability01_Part01",
      "childAbilityList": [
        "8002071_Monster_XP_Minion04_02_Ability01_Part01",
        "8002071_Monster_XP_Minion04_02_Ability01_Part02",
        "8002071_Monster_XP_Minion04_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Minion04_02_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8002071_Modifiers": {
      "fileName": "8002071_Modifiers",
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
          "for": "Enemy_XP_Minion04_02_EscapingCharge02",
          "modifierFlags": [
            "MuteHitFly",
            "Endurance",
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Charge02"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
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
          "for": "Enemy_XP_Minion04_02_EscapingCharge01",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Charge01"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Normal"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_Bonus_Pre",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_Bonus_Huimie_Minion",
          "stackType": "ReplaceByCaster",
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
                  "modifier": "Enemy_XP_Minion04_02_Bonus_Huimie_Minion_On"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "DOT",
                          "Follow-up",
                          "Additional DMG"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Enemy_XP_Minion04_02_Bonus_Huimie_Minion_On"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Huimie_ListenInsertAbility",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_XP_Minion04_02_Bonus_Huimie_Minion_On"
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "Huimie_BeHitCounter",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 6
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
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
                      "name": "Define Custom Variable",
                      "variableName": "Huimie_ListenInsertAbility",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
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
                      "name": "Define Custom Variable",
                      "variableName": "Huimie_ListenInsertAbility",
                      "value": 0
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
          "for": "Enemy_XP_Minion04_02_Bonus_Huimie_Minion_On",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_Huimie_EffectRound",
          "stackType": "Replace",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_Huimie_EffectPaths",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_Huimie_EffectGround",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_Bonus_Huimie_Caster",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Huimie_BeHitCounter"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "XP_Minion04_02_Huimie_InsertFlag"
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
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_Bonus_Huimie_Minion"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_Bonus_Huimie_Minion_On"
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Huimie_BeHitCounter"
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
                        "name": "NOT",
                        "condition": {
                          "name": "Has Param Flag",
                          "flagName": "IsFakeAvatarAttack"
                        }
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Currency Wars Full OffFieldList}}"
                        },
                        "mustBeAlive2": true,
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
                            "name": "Is Part Of Team",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "team": "Player Team"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "Huimie_BeHitCounter",
                            "compareType": ">",
                            "value2": 0.5,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "XP_Minion04_02_Huimie_InsertFlag",
                            "compareType": "=",
                            "value2": 0,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "XP_Minion04_02_Huimie_InsertFlag",
                          "value": 1
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_XP_Minion04_02_AbilityP01_InsertAbility_Huimie",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "priorityTag": "MonsterInsertAttackSelf",
                          "showInActionOrder": true,
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "XP_Minion04_02_Huimie_InsertFlag",
                            "compareType": "=",
                            "value2": 0,
                            "contextScope": "TargetEntity"
                          },
                          "passed": [
                            {
                              "name": "Declare Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "Huimie_BeHitCounter"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_Bonus_Huimie_Minion_On"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_Fengrao_Caster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_Fengrao_Minion"
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
                        "name": "NOT",
                        "condition": {
                          "name": "Is Part Of Team",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "team": "Enemy Team"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": ">",
                        "value2": 0,
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Enemy_XP_Minion04_02_Fengrao_BeHit"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "conditionActive": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": ">",
                        "value2": 0,
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Enemy_XP_Minion04_02_Fengrao_BeHit"
                        }
                      },
                      "abilityName": "Monster_XP_Minion04_02_AbilityP01_InsertAbility_Fengrao",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterChangeState",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Enemy_XP_Minion04_02_Fengrao_BeHit"
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
          "for": "Enemy_XP_Minion04_02_Fengrao_Minion",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_CasterHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Action Holder's Team",
                    "team": "Enemy Team",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_Damage"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_TotalDamage",
                      "value": {
                        "operator": "Variables[0] (_TotalDamage) || Variables[1] (_Damage) || ADD || RETURN",
                        "displayLines": "(_TotalDamage + _Damage)",
                        "constants": [],
                        "variables": [
                          "_TotalDamage",
                          "_Damage"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_TotalDamage",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Enemy_XP_Minion04_02_Fengrao_BeHit"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_TotalDamage",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_TotalDamage",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]"
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Enemy_XP_Minion04_02_Fengrao_Trigger1"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_TotalDamage",
                        "compareType": ">",
                        "value2": 0.5
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Enemy_XP_Minion04_02_Fengrao_SelfDamage"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_TotalDamage",
                        "compareType": ">",
                        "value2": 0.5
                      },
                      "passed": [
                        {
                          "name": "Consume",
                          "consumeFrom": "MaxHP",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "consumePercent": {
                            "operator": "Variables[0] (_TotalDamage) || Variables[1] (_CasterHP) || DIV || Variables[2] (_LoseRatio) || MUL || RETURN",
                            "displayLines": "((_TotalDamage / _CasterHP) * _LoseRatio)",
                            "constants": [],
                            "variables": [
                              "_TotalDamage",
                              "_CasterHP",
                              "_LoseRatio"
                            ]
                          },
                          "consumeFloor": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Consume",
                          "consumeFrom": "MaxHP",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "consumePercent": {
                            "operator": "Variables[0] (_TotalDamage) || Variables[1] (_CasterHP) || DIV || Variables[2] (_LoseRatio) || MUL || RETURN",
                            "displayLines": "((_TotalDamage / _CasterHP) * _LoseRatio)",
                            "constants": [],
                            "variables": [
                              "_TotalDamage",
                              "_CasterHP",
                              "_LoseRatio"
                            ]
                          },
                          "consumeFloor": 1
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Enemy_XP_Minion04_02_Fengrao_Trigger"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_TotalDamage",
                        "compareType": ">",
                        "value2": 0.5
                      },
                      "passed": [
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "healFlat": {
                            "operator": "Variables[0] (_TotalDamage) || Variables[1] (_HealRatio) || MUL || RETURN",
                            "displayLines": "(_TotalDamage * _HealRatio)",
                            "constants": [],
                            "variables": [
                              "_TotalDamage",
                              "_HealRatio"
                            ]
                          },
                          "formula": "Heal from Target MaxHP"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_TotalDamage",
                          "value": 0
                        }
                      ],
                      "failed": [
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "healFlat": {
                            "operator": "Variables[0] (_TotalDamage) || Variables[1] (_HealRatio) || MUL || RETURN",
                            "displayLines": "(_TotalDamage * _HealRatio)",
                            "constants": [],
                            "variables": [
                              "_TotalDamage",
                              "_HealRatio"
                            ]
                          },
                          "formula": "Heal from Target MaxHP"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_TotalDamage",
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "_HealRatio",
            "_LoseRatio"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_Fengrao_BeHit",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_Fengrao_Mark"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_EffectTrigger2",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_EffectTrigger",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_EffectRound",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_EffectPaths",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_EffectGround",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_Fengrao_Bonus",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_Cunhu_Bonus[<span class=\"descriptionNumberColor\">P—Protect You</span>]",
          "counter": 20,
          "modifierFlags": [
            "BlockDamageExcludeDot",
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Shield State/Value"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Shield State/Value",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Damage was Blocked",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "variableName": "MDF_Count",
                      "modifierName": "Enemy_XP_Minion04_02_Cunhu_Bonus[<span class=\"descriptionNumberColor\">P—Protect You</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Count",
                        "compareType": "<",
                        "value2": 1.5
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": 0,
                          "entityClass": "Enemy",
                          "maximum": 1,
                          "assignState": "True"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "modifier": "Enemy_XP_Minion04_02_Cunhu_EffectBreak"
                        },
                        {
                          "name": "Define Modifier Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "modifierName": "Enemy_XP_Minion04_02_Cunhu_Bonus[<span class=\"descriptionNumberColor\">P—Protect You</span>]",
                          "function": "Add"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Modifier Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "modifierName": "Enemy_XP_Minion04_02_Cunhu_Bonus[<span class=\"descriptionNumberColor\">P—Protect You</span>]",
                          "function": "Add"
                        },
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "variableName": "MDF_Count",
                          "modifierName": "Enemy_XP_Minion04_02_Cunhu_Bonus[<span class=\"descriptionNumberColor\">P—Protect You</span>]",
                          "multiplier": 1
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_Count) || RETURN",
                            "displayLines": "MDF_Count",
                            "constants": [],
                            "variables": [
                              "MDF_Count"
                            ]
                          },
                          "entityClass": "Enemy",
                          "maximum": 20,
                          "assignState": "True"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": null,
                        "compareType": "<=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Enemy_XP_Minion04_02_Cunhu_Caster"
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
          "description": "Each stack of P—Protect You can absorb DMG from 1 incoming hit. P—Protect You stacks are shared across the team.",
          "type": "Buff",
          "effectName": "P—Protect You",
          "statusName": "P—Protect You"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_Cunhu_EffectBreak",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_Cunhu_Effect",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_Cunhu_EffectBreak"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_XP_Minion04_02_Cunhu_Caster",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_Cunhu_Effect"
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
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_Cunhu_Effect"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_Cunhu_Bonus[<span class=\"descriptionNumberColor\">P—Protect You</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_XP_Minion04_02_Cunhu_EffectBreak"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (UnusedUnderThisBase_135) || RETURN",
                    "displayLines": "UnusedUnderThisBase_135",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_135"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": 20,
                  "assignState": "True"
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
  }
}