const configAbility = {
  "fileName": "DrRatio_Modifiers",
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
      "for": "Dr_Ratio_InsertAbility",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Dr_Ratio_InsertAbility"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Dr_Ratio_InsertAbility"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Dr_Ratio_Eidolon6_CD"
    },
    {
      "name": "Modifier Construction",
      "for": "Dr_Ratio_Eidolon6_AllDamageTypeAddedRatio",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
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
        "_Dr_Ratio_00_EnergyBar_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Dr_Ratio_PointB3_Modifier",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable with Status Counter",
              "target": "Use Prior Target(s) Defined",
              "variableName": "MDF_DebuffNumber"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_DebuffNumber",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (MDF_PointB3DebuffCount) || RETURN",
                  "displayLines": "MDF_PointB3DebuffCount",
                  "constants": [],
                  "variables": [
                    "MDF_PointB3DebuffCount"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "target": "Owner of this Modifier",
                  "scope": "ContextModifier",
                  "variableName": "MDF_PropertyValueChange",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_DebuffNumber) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * MDF_DebuffNumber)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_DebuffNumber"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_PropertyValueChange",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_PropertyValueMax) || RETURN",
                      "displayLines": "MDF_PropertyValueMax",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValueMax"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": "Owner of this Modifier",
                      "scope": "ContextModifier",
                      "variableName": "MDF_PropertyValueChange",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValueMax) || RETURN",
                        "displayLines": "MDF_PropertyValueMax",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValueMax"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": "Owner of this Modifier",
                      "scope": "ContextModifier",
                      "variableName": "MDF_PropertyValueChange",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_DebuffNumber) || MUL || RETURN",
                        "displayLines": "(MDF_PropertyValue * MDF_DebuffNumber)",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue",
                          "MDF_DebuffNumber"
                        ]
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "target": "Owner of this Modifier",
                  "scope": "ContextModifier",
                  "variableName": "MDF_PropertyValueChange",
                  "value": 0
                }
              ]
            },
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": "MDF_PropertyValueChange"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": "Owner of this Modifier",
              "scope": "ContextModifier",
              "variableName": "MDF_PropertyValueChange",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "target": "Owner of this Modifier",
              "scope": "ContextModifier",
              "variableName": "MDF_DebuffNumber",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": "Owner of this Modifier",
              "scope": "ContextModifier",
              "variableName": "MDF_PropertyValueChange",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "target": "Owner of this Modifier",
              "scope": "ContextModifier",
              "variableName": "MDF_DebuffNumber",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue",
        "MDF_PropertyValueMax",
        "MDF_PointB3DebuffCount"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Dr_Ratio_Insert_Flag_Caster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Dr_Ratio_InsertAbility"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Dr_RatioAttack",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Insert_Flag_ByTeamMate",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Dr_Ratio_00_EnergyBar_Flag",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Skill03_Insert_Flag",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Skill03_Insert_Flag",
                  "value": 0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Dr_Ratio_Insert_Flag",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Insert_Flag",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Dr_Ratio_Insert_Flag_Caster",
                  "valuePerStack": {
                    "MDF_Ability03_Insert_Flag": 1,
                    "MDF_Insert_Flag_ByTeamMate": 1
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Insert_Flag",
                  "value": 0
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Dr_Ratio_Insert_Flag_Caster",
                  "valuePerStack": {
                    "MDF_Ability03_Insert_Flag": 0,
                    "MDF_Insert_Flag_ByTeamMate": 0
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_Dr_RatioAttack",
        "_Dr_Ratio_00_EnergyBar_Flag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Dr_Ratio_Ability03_InsertAbility",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "Dr_Ratio_Insert_Flag_Caster"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Dr_Ratio_InsertAbility"
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
      "for": "Dr_Ratio_Ability03_PointB1_Bonus[<span class=\"descriptionNumberColor\">Summation</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_SkillTree_SkillFlag",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_SkillTree_SkillFlag",
                  "value": 0
                },
                {
                  "name": "UI Display Event (On Entity)",
                  "target": "Owner of this Modifier",
                  "popUpText": "CRIT Rate and CRIT DMG Boost"
                }
              ]
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": "Owner of this Modifier",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "modifierName": "Dr_Ratio_Ability03_PointB1_Bonus[<span class=\"descriptionNumberColor\">Summation</span>]",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue01) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_PropertyValue01 * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue01",
                  "MDF_Layer"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue02) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_PropertyValue02 * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue02",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue01",
        "MDF_PropertyValue02"
      ],
      "latentQueue": [
        "_Dr_RatioAttack",
        "_Dr_Ratio_00_EnergyBar_Flag",
        "_SkillTree_SkillFlag"
      ],
      "description": "Every stack increases CRIT Rate by <span class=\"descriptionNumberColor\">MDF_PropertyValue01</span> and CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue02</span>.",
      "type": "Buff",
      "statusName": "Summation",
      "stackLimit": 20
    },
    {
      "name": "Modifier Construction",
      "for": "Dr_Ratio_Ability03_TheFool[<span class=\"descriptionNumberColor\">Wiseman's Folly</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": "All Enemies(All)",
              "searchRandom": true,
              "includeDyingTargets": true,
              "maxTargets": 10,
              "conditions": {
                "name": "Compare: Target",
                "target": "Use Prior Target(s) Defined",
                "target2": "Owner of this Modifier",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Dr_Ratio_Ability03_TheFool[<span class=\"descriptionNumberColor\">Wiseman's Folly</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Dr_Ratio_00_EnergyBar",
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "priorState": "Normal"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Skill03_InsertMaxCount",
              "value": 0
            },
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "priorState": "Active",
              "bar#": 3
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_TheFoolSpecialMark_DebuffNumber",
              "value": 100
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Dr_Ratio_Rank06_Skill03_InsertMaxCount",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Dr_Ratio_00_EnergyBar",
                  "value": {
                    "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
                    "displayLines": "(2 + 1)",
                    "constants": [],
                    "variables": [
                      2,
                      1
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_Dr_Ratio_00_EnergyBar) || RETURN",
                    "displayLines": "_Dr_Ratio_00_EnergyBar",
                    "constants": [],
                    "variables": [
                      "_Dr_Ratio_00_EnergyBar"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (_Dr_Ratio_Rank06_Skill03_InsertMaxCount) || RETURN",
                    "displayLines": "_Dr_Ratio_Rank06_Skill03_InsertMaxCount",
                    "constants": [],
                    "variables": [
                      "_Dr_Ratio_Rank06_Skill03_InsertMaxCount"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 3,
                  "cooldown": 0
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Dr_Ratio_00_EnergyBar",
                  "value": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_Dr_Ratio_00_EnergyBar) || RETURN",
                    "displayLines": "_Dr_Ratio_00_EnergyBar",
                    "constants": [],
                    "variables": [
                      "_Dr_Ratio_00_EnergyBar"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 3,
                  "cooldown": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
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
                    "name": "NOT",
                    "condition": {
                      "name": "Current Action Holder Is",
                      "target": "Caster"
                    }
                  },
                  {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": "Use Prior Target(s) Defined",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_Dr_Ratio_00_EnergyBar",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Has Flag",
                    "target": "Caster",
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "Dr_Ratio_Insert_Flag_Caster",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 6
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Dr_Ratio_Insert_Flag",
                          "valuePerStack": {
                            "MDF_Insert_Flag": 1,
                            "MDF_Eidolon6_Flag": 1
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Dr_Ratio_Insert_Flag",
                          "valuePerStack": {
                            "MDF_Insert_Flag": 1,
                            "MDF_Eidolon6_Flag": 0
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
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "Dr_Ratio_Insert_Flag_Caster"
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamLight"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Caster",
                    "flagName": "STAT_CTRL"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Dr_Ratio_Ability03_InsertAbility"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "Ultimate [Anyone]: Start[?]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": "Use Prior Target(s) Defined",
                "target2": "Caster"
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_TheFoolSpecialMark_DebuffNumber",
              "value": 100
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": "Current Action Owner",
                    "target2": "Caster",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": "Caster",
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Target is Unselectable",
                    "target": "Owner of this Modifier",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": "Current Visual Target(All)",
                    "target": "Owner of this Modifier",
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "trigger": "States_Active"
                    },
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "trigger": "Select_Selected"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "trigger": "States_Active"
                    },
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "trigger": "Select_UnSelected"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Skill03_InsertMaxCount"
      ],
      "latentQueue": [
        "_Dr_RatioAttack",
        "_Dr_Ratio_00_EnergyBar_Flag"
      ],
      "description": "After a target with \"Wiseman's Folly\" is attacked by Dr. Ratio's teammate(s), Dr. Ratio immediately launches a Follow-Up ATK once against this target. This effect can be triggered for a maximum of <span class=\"descriptionNumberColor\">MDF_Skill03_InsertMaxCount</span> times.",
      "type": "Other",
      "effectName": "Wiseman's Folly",
      "statusName": "Wiseman's Folly"
    }
  ],
  "references": []
}