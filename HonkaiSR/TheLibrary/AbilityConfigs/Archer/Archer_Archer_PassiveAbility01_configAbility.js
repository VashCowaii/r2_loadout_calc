const configAbility = {
  "fileName": "Archer_Archer_PassiveAbility01",
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
      "to": "Caster",
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
          "to": "Caster",
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
          "to": "Caster",
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
                    "target": "Owner of this Modifier",
                    "target2": "Caster",
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
              "from": "All Enemies (AOE)",
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
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
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": "Caster"
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
                        "target": "Current Action Owner",
                        "living": true
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": "Ability Target List + Action Target List",
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": "Use Prior Target(s) Defined"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Use Prior Target(s) Defined",
                              "modifier": "Archer_InsertTag"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Find New Target",
                          "from": "Ability Target List",
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": "Use Prior Target(s) Defined"
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Use Prior Target(s) Defined",
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
                  "from": "All Enemies (AOE)",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Use Prior Target(s) Defined",
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
                      "to": "Use Prior Target(s) Defined",
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
                      "from": "All Enemies (AOE)",
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
                          "to": "Use Prior Target(s) Defined",
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
                        "target": "[SKILL TARGET LIST OF] Owner of this Modifier",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": "[SKILL TARGET LIST OF] Owner of this Modifier",
                        "team": "TeamDark"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "[SKILL TARGET LIST OF] Owner of this Modifier",
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
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": "Caster"
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
                  "from": "All Enemies (AOE)",
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
                      "to": "Use Prior Target(s) Defined",
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
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": "Caster"
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
                  "from": "All Enemies (AOE)",
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
                      "to": "Use Prior Target(s) Defined",
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
                    "name": "Living State",
                    "state": "Mask_AliveOnly",
                    "target": "Caster"
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
                  "from": "All Enemies (AOE)",
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
              "to": "Allied Team (Excluding Caster)",
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
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamLight"
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
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
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
}