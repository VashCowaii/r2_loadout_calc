const configAbility = {
  "fileName": "Xueyi_Xueyi_PassiveAbility01",
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
                "of": "All Team Members(In Context, with Untargetable + Battle Events/Summon)",
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
}