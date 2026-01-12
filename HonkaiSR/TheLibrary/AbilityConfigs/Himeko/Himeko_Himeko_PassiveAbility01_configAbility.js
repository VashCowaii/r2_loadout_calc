const configAbility = {
  "fileName": "Himeko_Himeko_PassiveAbility01",
  "abilityType": "Talent",
  "energy": 10,
  "toughnessList": [
    0,
    10,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Himeko_Passive1_Modifier"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Himeko_Passive_Pursuit[<span class=\"descriptionNumberColor\">Charge</span>]",
      "stackLimit": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "addStacksPerTrigger": 1
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (MDF_Pursuit_Layer) || RETURN",
        "displayLines": "MDF_Pursuit_Layer",
        "constants": [],
        "variables": [
          "MDF_Pursuit_Layer"
        ]
      },
      "maximum": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 2,
      "cooldown": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Is_CTRL",
      "value": 0
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Himeko_Passive_Pursuit[<span class=\"descriptionNumberColor\">Charge</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": "Owner of this Modifier",
              "variableName": "MDF_Pursuit_Layer",
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Pursuit_Layer) || RETURN",
                "displayLines": "MDF_Pursuit_Layer",
                "constants": [],
                "variables": [
                  "MDF_Pursuit_Layer"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 2,
              "cooldown": 0
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": "Owner of this Modifier",
              "valueType": "Layer",
              "variableName": "MDF_Pursuit_Layer",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "MDF_Pursuit_Layer",
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
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Pursuit_Layer) || RETURN",
                    "displayLines": "MDF_Pursuit_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Pursuit_Layer"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 2,
                  "cooldown": 0
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Pursuit_Layer) || RETURN",
                    "displayLines": "MDF_Pursuit_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Pursuit_Layer"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 2,
                  "cooldown": 0
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "When fully charged, triggers Talent \"Victory Rush.\"",
      "type": "Other",
      "statusName": "Charge",
      "stackLimit": 3,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Himeko_Passive_PursuitCD[<span class=\"descriptionNumberColor\">Victory Rush</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Himeko_Passive_Pursuit[<span class=\"descriptionNumberColor\">Charge</span>]"
            }
          ]
        }
      ],
      "description": "Talent \"Victory Rush\" cannot be triggered.",
      "type": "Other",
      "statusName": "Victory Rush",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Himeko_Passive1_Modifier",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
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
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamLight"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_Himeko_Attack",
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
                    "value1": "MDF_Pursuit_Layer",
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
                          "abilityName": "Himeko_Passive1Atk_Ability",
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
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Himeko_Attack",
                          "value": 0
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Flag",
                                "target": "Caster",
                                "flagName": "STAT_CTRL"
                              },
                              {
                                "name": "Has Flag",
                                "target": "Caster",
                                "flagName": "DisableAction"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Is_CTRL",
                              "value": 1
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Is_CTRL",
                          "value": 1
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
                    "value1": "_Himeko_Attack",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "AND",
                    "conditionList": [
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
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Pursuit_Layer",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Enemies Still Alive",
                        "target": "Caster",
                        "includeNonTargets": true
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Himeko_Passive1Atk_Ability",
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
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Himeko_Attack",
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -55
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Himeko_Attack",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Pursuit_Layer",
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
                          "abilityName": "Himeko_Passive1Atk_Ability",
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
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Himeko_Attack",
                          "value": 0
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Is_CTRL",
                          "value": 1
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
          "eventTrigger": "Weakness Break [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Monster Rank",
                "target": "Use Prior Target(s) Defined",
                "compareType": ">=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Himeko_Passive_Pursuit[<span class=\"descriptionNumberColor\">Charge</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                }
              ],
              "failed": [
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
                        "name": "Current Action Holder Is",
                        "target": "Caster"
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
                      "modifier": "Himeko_Passive_Pursuit[<span class=\"descriptionNumberColor\">Charge</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "addStacksPerTrigger": {
                        "operator": "Constants[0] (1) || Variables[0] (1) || ADD || RETURN",
                        "displayLines": "(1 + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          1
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Himeko_Passive_Pursuit[<span class=\"descriptionNumberColor\">Charge</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
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
                    "name": "Compare: Variable",
                    "value1": "_Himeko_Attack",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Is_CTRL",
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
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Pursuit_Layer",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Enemies Still Alive",
                        "target": "Caster",
                        "includeNonTargets": true
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Himeko_Passive1Atk_Ability",
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
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Himeko_Attack",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Is_CTRL",
                          "value": 0
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
                "value1": "_Himeko_Attack",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Pursuit_Layer",
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
                          "abilityName": "Himeko_Passive1Atk_Ability",
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
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Himeko_Attack",
                          "value": 0
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Is_CTRL",
                          "value": 1
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
          "eventTrigger": "Injected Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Himeko_Attack",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}