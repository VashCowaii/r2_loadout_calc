const compositeAbilityObject = {
  "fullCharacterName": "Archer",
  "trimCharacterName": "Archer",
  "abilityList": [
    "Archer_Archer_Trace01",
    "Archer_Archer_Trace02",
    "Archer_Archer_Trace03",
    "Archer_Archer_TechniqueInLevel",
    "Archer_Archer_Insert_Part02",
    "Archer_Archer_Insert_Part01",
    "Archer_Archer_PassiveAbility01",
    "Archer_Archer_Bonus",
    "Archer_Archer_Ability03_Part02",
    "Archer_Archer_Ability03_Part01",
    "Archer_Archer_Ability03_EnterReady",
    "Archer_Archer_Ability02Cancel_Part02",
    "Archer_Archer_Ability02Cancel_Part01",
    "Archer_Archer_Ability02_Part02",
    "Archer_Archer_Ability02_Part01",
    "Archer_Archer_Ability01_Part02",
    "Archer_Archer_Ability01_Part01",
    "Archer_Modifiers"
  ],
  "abilityObject": {
    "Archer_Archer_Trace01": {
      "fileName": "Archer_Archer_Trace01",
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
          "modifier": "Archer_Trace01"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Archer_Trace01",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Skill Point Max",
                  "function": "Add",
                  "value": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Skill Point Max",
                  "function": "Add",
                  "value": {
                    "operator": "Variables[0] (2) || INVERT || RETURN",
                    "displayLines": "-2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Archer_Archer_Trace02": {
      "fileName": "Archer_Archer_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Archer_Archer_Trace03": {
      "fileName": "Archer_Archer_Trace03",
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
          "modifier": "Archer_Trace03"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Archer_Trace03_CriticalDMG[<span class=\"descriptionNumberColor\">Guardian</span>]",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Guardian"
        },
        {
          "name": "Modifier Construction",
          "for": "Archer_Trace03",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Skill Point Changes",
              "execute": [
                {
                  "name": "Define Custom Variable with Skill Points",
                  "variableName": "MDF_CurrentBP"
                },
                {
                  "name": "Define Custom Variable with SkillPoint Changes",
                  "variableName": "MDF_ChangeValue",
                  "type": "UnclampedDelta"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_ChangeValue",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_CurrentBP",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (4) || RETURN",
                          "displayLines": "4",
                          "constants": [],
                          "variables": [
                            4
                          ]
                        }
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
                      "modifier": "Archer_Trace03_CriticalDMG[<span class=\"descriptionNumberColor\">Guardian</span>]",
                      "duration": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (1.2) || RETURN",
                          "displayLines": "1.2",
                          "constants": [],
                          "variables": [
                            1.2
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
        }
      ]
    },
    "Archer_Archer_TechniqueInLevel": {
      "fileName": "Archer_Archer_TechniqueInLevel",
      "childAbilityList": [
        "Archer_Archer_TechniqueInLevel"
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Archer_PreMaze"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Archer_Maze"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Archer_Maze",
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
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Technique"
                      }
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
        },
        {
          "name": "Modifier Construction",
          "for": "Archer_PreMaze",
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
                      "name": "Define Custom Variable",
                      "variableName": "MDF_RestEnergy",
                      "value": {
                        "operator": "Variables[0] (MDF_RestEnergy) || Variables[1] (1) || ADD || RETURN",
                        "displayLines": "(MDF_RestEnergy + 1)",
                        "constants": [],
                        "variables": [
                          "MDF_RestEnergy",
                          1
                        ]
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Archer_Archer_Insert_Part02": {
      "fileName": "Archer_Archer_Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_RestEnergy",
          "value": {
            "operator": "Variables[0] (MDF_RestEnergy) || Constants[0] (1) || SUB || RETURN",
            "displayLines": "(MDF_RestEnergy - 1)",
            "constants": [
              1
            ],
            "variables": [
              "MDF_RestEnergy"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
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
        },
        {
          "name": "Skill Points Modification",
          "adjustmentValue": 1,
          "adjustmentType": "+"
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "OnInsertAbort_Flg",
          "value": 0
        }
      ],
      "references": []
    },
    "Archer_Archer_Insert_Part01": {
      "fileName": "Archer_Archer_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_HasTarget",
          "value": 0
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Archer_Insert_Target"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_HasTarget",
              "value": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_HasTarget",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
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
                  "modifier": "Archer_Insert_Target"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Archer_Insert_Target"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "Archer_InsertTag"
            },
            {
              "name": "UI Display Event",
              "popUpText": "Mind's Eye (True)"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "Archer_Insert_Part02",
              "isTrigger": true
            },
            "Deleted bullshit"
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "Archer_Insert_Target"
        }
      ],
      "onAbort": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "modifier": "Archer_InsertTag"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
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
                "name": "Living State",
                "state": "Mask_AliveOnly",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "OnInsertAbort_Flg",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemies Still Alive",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "includeNonTargets": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_InsertUsed",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "OnInsertAbort_Flg",
                      "value": 1
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_InsertUsed",
                          "value": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Archer_Insert_Target"
                        },
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Archer_Insert_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
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
                  "name": "Define Custom Variable",
                  "variableName": "OnInsertAbort_Flg",
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "Archer_Archer_PassiveAbility01": {
      "fileName": "Archer_Archer_PassiveAbility01",
      "childAbilityList": [
        "Archer_Archer_PassiveAbility01",
        "Archer_Archer_Insert_Part01",
        "Archer_Archer_Insert_Part02",
        "Archer_Archer_Insert_Camera",
        "Archer_Archer_Bonus",
        "Archer_Archer_Bonus_Camera"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 5,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_RestEnergy",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_Skill02UseCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_Skill02UseCountInCaps",
          "value": 0
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (MDF_RestEnergy) || RETURN",
            "displayLines": "MDF_RestEnergy",
            "constants": [],
            "variables": [
              "MDF_RestEnergy"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [],
            "variables": [
              4
            ]
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Archer_PassiveAbility"
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
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Archer_Eidolon4_Ability03AddUltraDamage",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (1.5) || RETURN",
                  "displayLines": "1.5",
                  "constants": [],
                  "variables": [
                    1.5
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Archer_Eidolon6_Ability02IgnoreDef",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Archer_Eidolon6_Ability02IgnoreDef",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                          "value": "-MDF_PropertyValue"
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Archer_Eidolon4_Ability03AddUltraDamage",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate"
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Archer_InsertTag",
          "stackType": "Replace"
        },
        {
          "name": "Modifier Construction",
          "for": "Archer_AttackListner",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_RestEnergy",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
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
                      "name": "Define Custom Variable",
                      "variableName": "MDF_InsertUsed",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HasMainTarget",
                  "value": 0
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Archer_InsertTag"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_HasMainTarget",
                          "value": 1
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
                        "name": "Compare: Variable",
                        "value1": "MDF_RestEnergy",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_InsertUsed",
                        "compareType": "=",
                        "value2": 0
                      },
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
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_HasMainTarget",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Target Exists",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Current Action Owner}}"
                            },
                            "living": true
                          },
                          "passed": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Attack Targets of Modifier Holder}} + {{Current Action Target List}}"
                              },
                              "searchRandom": true,
                              "maxTargets": 1,
                              "conditions": {
                                "name": "Living State",
                                "state": "Mask_AliveOnly",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                }
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "Archer_InsertTag"
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Attack Targets of Modifier Holder}}"
                              },
                              "searchRandom": true,
                              "maxTargets": 1,
                              "conditions": {
                                "name": "Living State",
                                "state": "Mask_AliveOnly",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                }
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "Archer_InsertTag"
                                }
                              ]
                            }
                          ]
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Archer_InsertTag",
                        "justAddedOrActive": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_InsertUsed",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "OnInsertAbort_Flg",
                          "value": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Archer_Insert_Target"
                        },
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Archer_Insert_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
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
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_InsertUsed",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "OnInsertAbort_Flg",
                          "value": 1
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_InsertUsed",
                              "value": 1
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Archer_Insert_Target"
                            },
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "Archer_Insert_Part01",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
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
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_RestEnergy",
                        "compareType": ">",
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
                            "name": "Compare: Target Count",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Ability Targets of Modifier Holder}}"
                            },
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Is Part Of Team",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Ability Targets of Modifier Holder}}"
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
                            "target": "{{Ability Targets of Modifier Holder}}"
                          },
                          "modifier": "Archer_InsertTag"
                        }
                      ]
                    }
                  ]
                }
              ]
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
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "OnInsertAbort_Flg",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "OnInsertAbort_Flg",
                      "value": 1
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_InsertUsed",
                          "value": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Archer_Insert_Target"
                        },
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Archer_Insert_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
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
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
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
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "OnInsertAbort_Flg",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "OnInsertAbort_Flg",
                      "value": 1
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_InsertUsed",
                          "value": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Archer_Insert_Target"
                        },
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Archer_Insert_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
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
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
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
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "OnInsertAbort_Flg",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "OnInsertAbort_Flg",
                      "value": 1
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_InsertUsed",
                          "value": 1
                        },
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Archer_Insert_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
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
          "name": "Modifier Construction",
          "for": "Archer_PassiveAbility",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": 1,
                      "adjustmentType": "+"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase] [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Skill02UseCount",
                  "value": 0
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
                    "target": "{{Player Team All}} -{{Caster}}"
                  },
                  "modifier": "Archer_AttackListner"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Projection Magecraft"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "AITag",
                      "variableName": "AdvancedBPReserve",
                      "value": 1
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
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
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
                      "modifier": "Archer_AttackListner"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Hero of Justice"
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
                      "name": "Define Custom Variable",
                      "variableName": "MDF_RestEnergy",
                      "value": {
                        "operator": "Variables[0] (MDF_RestEnergy) || Variables[1] (1) || ADD || RETURN",
                        "displayLines": "(MDF_RestEnergy + 1)",
                        "constants": [],
                        "variables": [
                          "MDF_RestEnergy",
                          1
                        ]
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "ActionTag_Windfury"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IsWindfurySkill",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: End ",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "compareType": "=",
                    "value2": "ActionTag_Windfury"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IsWindfurySkill",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_RestEnergy",
              "from": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": {
                    "operator": "Variables[0] (4) || RETURN",
                    "displayLines": "4",
                    "constants": [],
                    "variables": [
                      4
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_RestEnergy) || RETURN",
                        "displayLines": "MDF_RestEnergy",
                        "constants": [],
                        "variables": [
                          "MDF_RestEnergy"
                        ]
                      },
                      "priorState": "Active"
                    }
                  ],
                  "whenLeavingRange": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_RestEnergy) || RETURN",
                        "displayLines": "MDF_RestEnergy",
                        "constants": [],
                        "variables": [
                          "MDF_RestEnergy"
                        ]
                      },
                      "priorState": "Normal"
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_RestEnergy) || RETURN",
                        "displayLines": "MDF_RestEnergy",
                        "constants": [],
                        "variables": [
                          "MDF_RestEnergy"
                        ]
                      },
                      "priorState": "Active"
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
    "Archer_Archer_Bonus": {
      "fileName": "Archer_Archer_Bonus",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_InBonus",
            "compareType": "=",
            "value2": 1
          }
        }
      ],
      "references": []
    },
    "Archer_Archer_Ability03_Part02": {
      "fileName": "Archer_Archer_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Archer_Eidolon2_AddWeak[<span class=\"descriptionNumberColor\">The Unfulfilled Happiness</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            },
            "HitSplit": 0.04,
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            },
            "HitSplit": 0.04,
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            },
            "HitSplit": 0.04,
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            },
            "HitSplit": 0.04,
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            },
            "HitSplit": 0.04,
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            },
            "HitSplit": 0.04,
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            },
            "HitSplit": 0.04,
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            },
            "HitSplit": 0.04,
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            },
            "HitSplit": 0.04,
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            },
            "HitSplit": 0.04,
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            },
            "HitSplit": 0.04,
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            },
            "HitSplit": 0.04,
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            },
            "HitSplit": 0.04,
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            },
            "HitSplit": 0.04,
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            },
            "HitSplit": 0.44,
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
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_RestEnergy",
          "value": {
            "operator": "Variables[0] (MDF_RestEnergy) || Variables[1] (2) || ADD || RETURN",
            "displayLines": "(MDF_RestEnergy + 2)",
            "constants": [],
            "variables": [
              "MDF_RestEnergy",
              2
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (MDF_RestEnergy) || RETURN",
            "displayLines": "MDF_RestEnergy",
            "constants": [],
            "variables": [
              "MDF_RestEnergy"
            ]
          }
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Archer_Archer_Ability03_Part01": {
      "fileName": "Archer_Archer_Ability03_Part01",
      "childAbilityList": [
        "Archer_Archer_Ability03_Camera",
        "Archer_Archer_Ability03_EnterReady",
        "Archer_Archer_Ability03_Part01",
        "Archer_Archer_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        30,
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
          "ability": "Archer_Ability03_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "compareType": ">=",
            "value2": 5
          }
        }
      ],
      "references": []
    },
    "Archer_Archer_Ability03_EnterReady": {
      "fileName": "Archer_Archer_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Archer_Archer_Ability02Cancel_Part02": {
      "fileName": "Archer_Archer_Ability02Cancel_Part02",
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
          "modifier": "Archer_BonusTrigger[<span class=\"descriptionNumberColor\">Circuit Connection</span>]"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_InBonus",
          "value": 0
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Archer_Archer_Ability02Cancel_Part01": {
      "fileName": "Archer_Archer_Ability02Cancel_Part01",
      "childAbilityList": [
        "Archer_Archer_Ability02Cancel_Part01",
        "Archer_Archer_Ability02Cancel_Part02"
      ],
      "skillTrigger": "Skill21",
      "abilityType": "Skill",
      "energy": null,
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
          "ability": "Archer_Ability02Cancel_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Archer_Archer_Ability02_Part02": {
      "fileName": "Archer_Archer_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_AlreadyInBonusAction",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Archer_BonusTrigger[<span class=\"descriptionNumberColor\">Circuit Connection</span>]",
          "immediateEffect": true
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_Skill02UseCount",
          "value": {
            "operator": "Variables[0] (MDF_Skill02UseCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(MDF_Skill02UseCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "MDF_Skill02UseCount"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_IsWindfurySkill",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Skill02UseCountInCaps",
              "value": {
                "operator": "Variables[0] (MDF_Skill02UseCountInCaps) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(MDF_Skill02UseCountInCaps + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_Skill02UseCountInCaps"
                ]
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (3.6) || Variables[1] (ARCHER_OBJECT_UNUSED_1) || MUL || RETURN",
              "displayLines": "(3.6 * ARCHER_OBJECT_UNUSED_1)",
              "constants": [],
              "variables": [
                3.6,
                "ARCHER_OBJECT_UNUSED_1"
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
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Skill02UseCount",
                "compareType": "=",
                "value2": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                }
              },
              "passed": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "adjustmentType": "+"
                }
              ]
            }
          ]
        },
        {
          "name": "Allow Queued Actions(Ult?)"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Archer_BPAbility_AddDamagePercentage[<span class=\"descriptionNumberColor\">Circuit Connection</span>]",
              "stackLimit": {
                "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
                "displayLines": "(2 + 1)",
                "constants": [],
                "variables": [
                  2,
                  1
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              },
              "addStacksPerTrigger": 1
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Archer_BPAbility_AddDamagePercentage[<span class=\"descriptionNumberColor\">Circuit Connection</span>]",
              "stackLimit": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              },
              "addStacksPerTrigger": 1
            }
          ]
        },
        {
          "name": "Define Custom Variable with Ability Property",
          "skillKey": "Skill02",
          "variableName": "MDF_BPNeed",
          "propertyName": "Skill Point Cost"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "CurrentSkillPoints",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (MDF_BPNeed) || RETURN",
                  "displayLines": "MDF_BPNeed",
                  "constants": [],
                  "variables": [
                    "MDF_BPNeed"
                  ]
                }
              },
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_Skill02UseCountInCaps",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (5) || RETURN",
                      "displayLines": "5",
                      "constants": [],
                      "variables": [
                        5
                      ]
                    }
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Standard_Windfury"
                  }
                ]
              },
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_Skill02UseCountInCaps",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (5) || RETURN",
                      "displayLines": "5",
                      "constants": [],
                      "variables": [
                        5
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "MDF_IsWindfurySkill",
                    "compareType": "=",
                    "value2": 1
                  }
                ],
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_InBonus",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_InBonus",
              "value": 0
            }
          ]
        },
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "type": "Team Characters"
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Archer_Archer_Ability02_Part01": {
      "fileName": "Archer_Archer_Ability02_Part01",
      "childAbilityList": [
        "Archer_Archer_Ability02_Camera",
        "Archer_Archer_Ability02_Part01",
        "Archer_Archer_Ability02_Part02",
        "Archer_Archer_Ability02_End_Camera",
        "Archer_Archer_Ability02_C02_Camera",
        "Archer_Archer_Ability02_C01andC02_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        0
      ],
      "parse": [
        {
          "name": "Unknown Action To Define(Not always an error)"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Archer_BonusAbility02Ready",
            "invertCondition": true
          },
          "passed": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Archer_BonusAbility02Ready",
            "invertCondition": true
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Archer_Ability02_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_InBonus",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            "Deleted bullshit",
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit",
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "Archer_Archer_Ability01_Part02": {
      "fileName": "Archer_Archer_Ability01_Part02",
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
            "HitSplit": 0.3,
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
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
            "HitSplit": 0.35,
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
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
            "HitSplit": 0.35,
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
    "Archer_Archer_Ability01_Part01": {
      "fileName": "Archer_Archer_Ability01_Part01",
      "childAbilityList": [
        "Archer_Archer_Ability01_Camera",
        "Archer_Archer_Ability01_Part01",
        "Archer_Archer_Ability01_Part02"
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
          "ability": "Archer_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Archer_Modifiers": {
      "fileName": "Archer_Modifiers",
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
          "for": "Archer_BonusTrigger[<span class=\"descriptionNumberColor\">Circuit Connection</span>]",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Archer_BonusAbility02Ready"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Skill02UseCountInCaps",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Archer_BPAbility_AddDamagePercentage[<span class=\"descriptionNumberColor\">Circuit Connection</span>]"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_InBonus",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Action Completed [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "QueuedUltimates",
                        "compareType": "=",
                        "value2": 0,
                        "includeInjectedActions": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "QueuedActions",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Flag_HaveOtherAction",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Flag_HaveOtherAction",
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
                        "value1": "CurrentSkillPoints",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MDF_BPNeed) || RETURN",
                          "displayLines": "MDF_BPNeed",
                          "constants": [],
                          "variables": [
                            "MDF_BPNeed"
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_Skill02UseCountInCaps",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (5) || RETURN",
                          "displayLines": "5",
                          "constants": [],
                          "variables": [
                            5
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_AlreadyInBonusAction",
                        "compareType": "=",
                        "value2": 0
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
                      "modifier": "Archer_BonusAbility02Ready"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_IsWindfurySkill",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": "Archer_Bonus",
                          "skillType": "ControlSkill02",
                          "canInjectUltimates": true,
                          "followSameTagAsAction": true,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "afterInjection": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_InBonus",
                              "value": 0
                            },
                            "Modifier Deletes Itself"
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_InBonus",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AlreadyInBonusAction",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_Flag_HaveOtherAction",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Next Extra Turn Is",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "actionType": "Normal"
                              },
                              {
                                "name": "Next Extra Turn Is",
                                "invertCondition": true,
                                "tag": "Archer_Bonus"
                              },
                              {
                                "name": "Next Extra Turn Is",
                                "invertCondition": true,
                                "tag": "ActionTag_Windfury"
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "MDF_Skill02UseCountInCaps",
                                "compareType": "=",
                                "value2": {
                                  "operator": "Variables[0] (5) || RETURN",
                                  "displayLines": "5",
                                  "constants": [],
                                  "variables": [
                                    5
                                  ]
                                }
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "MDF_IsWindfurySkill",
                                "compareType": "=",
                                "value2": 1
                              }
                            ]
                          }
                        ]
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
              "eventTrigger": "New Enemy Wave",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_AlreadyInBonusAction"
          ],
          "description": "After using Skill, if there are sufficient Skill Points to use it again, the turn will not end.",
          "type": "Other",
          "effectName": "Circuit Connection",
          "statusName": "Circuit Connection"
        },
        {
          "name": "Modifier Construction",
          "for": "Archer_BonusAbility02Ready",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "skillSlot": "Basic ATK",
                  "enableSecondaryType": "ControlSkill04"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Basic ATK"
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
                  "enableSecondaryType": "ControlSkill04"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_AlreadyInBonusAction",
            "MDF_InBonus",
            "MDF_Flag_HaveOtherAction",
            "MDF_IsWindfurySkill"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Archer_BPAbility_AddDamagePercentage[<span class=\"descriptionNumberColor\">Circuit Connection</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Skill02ExtraCount",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "(MDF_Skill02ExtraCount * MDF_PropertyValue)"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Skill02ExtraCount",
                  "multiplier": 1
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "MDF_AlreadyInBonusAction",
            "MDF_IsWindfurySkill"
          ],
          "description": "Each stack increases DMG dealt by Skill by <span class=\"descriptionNumberColor\">#Skill02_P2_ExtraDamage</span>.",
          "type": "Buff",
          "effectName": "Enhanced Skill",
          "statusName": "Circuit Connection"
        },
        {
          "name": "Modifier Construction",
          "for": "Archer_Eidolon2_AddWeak[<span class=\"descriptionNumberColor\">The Unfulfilled Happiness</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Implant Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "element": "Quantum",
                  "resReduction": {
                    "operator": "Variables[0] (MDF_PropertyValue) || INVERT || RETURN",
                    "displayLines": "-MDF_PropertyValue",
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
          "latentQueue": [],
          "description": "Additionally implanted Quantum Weakness. Quantum RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Implanted Quantum Weakness",
          "statusName": "The Unfulfilled Happiness"
        },
        {
          "name": "Modifier Construction",
          "for": "Archer_Insert_Target",
          "stackData": [],
          "latentQueue": [
            "MDF_InsertUsed",
            "MDF_HasMainTarget",
            "OnInsertAbort_Flg"
          ]
        }
      ],
      "references": []
    }
  }
}