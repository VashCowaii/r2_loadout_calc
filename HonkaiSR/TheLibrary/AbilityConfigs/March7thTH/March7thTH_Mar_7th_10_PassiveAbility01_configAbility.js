const configAbility = {
  "fileName": "March7thTH_Mar_7th_10_PassiveAbility01",
  "childAbilityList": [
    "March7thTH_Mar_7th_10_PassiveAbility01",
    "March7thTH_Mar_7th_10_Camera_Insert",
    "March7thTH_Mar_7th_10_Ready_Special",
    "March7thTH_Mar_7th_10_Ready_Special_Camera"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": 5,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Mar_7th_10_Passive"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "EnergyBar_MaxEnergy",
      "value": {
        "operator": "Variables[0] (7) || RETURN",
        "displayLines": "7",
        "constants": [],
        "variables": [
          7
        ]
      }
    },
    {
      "name": "Read Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "EnergyBar_CurEnergy",
      "on": "Caster"
    },
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Overwrite Value",
      "variableName": "EnergyBar_CurEnergy",
      "on": "Caster",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill11_BasicCount",
      "value": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill11_FixedChance",
      "value": {
        "operator": "Variables[0] (0.6) || RETURN",
        "displayLines": "0.6",
        "constants": [],
        "variables": [
          0.6
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextCaster",
      "variableName": "Skill11_DamagePercatage",
      "value": {
        "operator": "Variables[0] (0.8) || RETURN",
        "displayLines": "0.8",
        "constants": [],
        "variables": [
          0.8
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Mar_7th_10_Energy[<span class=\"descriptionNumberColor\">Charge</span>]",
      "counter": {
        "operator": "Variables[0] (EnergyBar_CurEnergy) || RETURN",
        "displayLines": "EnergyBar_CurEnergy",
        "constants": [],
        "variables": [
          "EnergyBar_CurEnergy"
        ]
      },
      "valuePerStack": {
        "MDF_PropertyRatio": {
          "operator": "Variables[0] (0.8) || RETURN",
          "displayLines": "0.8",
          "constants": [],
          "variables": [
            0.8
          ]
        },
        "MDF_Count": {
          "operator": "Variables[0] (EnergyBar_MaxEnergy) || RETURN",
          "displayLines": "EnergyBar_MaxEnergy",
          "constants": [],
          "variables": [
            "EnergyBar_MaxEnergy"
          ]
        }
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (EnergyBar_CurEnergy) || RETURN",
        "displayLines": "EnergyBar_CurEnergy",
        "constants": [],
        "variables": [
          "EnergyBar_CurEnergy"
        ]
      },
      "maximum": {
        "operator": "Variables[0] (EnergyBar_MaxEnergy) || RETURN",
        "displayLines": "EnergyBar_MaxEnergy",
        "constants": [],
        "variables": [
          "EnergyBar_MaxEnergy"
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 2,
      "cooldown": 0
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Mar_7th_10_Passive",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "Mar_7th_10_Enhance"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_has_enhanced_this_turn",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextCaster"
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
                  "conditionActive": {
                    "name": "Enemies Still Alive",
                    "target": "Caster",
                    "includeNonTargets": true
                  },
                  "abilityName": "Mar_7th_10_Ready_Special",
                  "abilitySource": "Caster",
                  "priorityTag": "PROG_AvatarLowest",
                  "canHitNonTargets": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "priorityLevel": 100
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Target",
                    "target": "Use Prior Target(s) Defined",
                    "target2": "Caster",
                    "invertCondition": true
                  },
                  {
                    "name": "Current Turn Is",
                    "target": "Caster"
                  },
                  "Turn Owner is in Action",
                  {
                    "name": "Compare: Variable",
                    "value1": "_has_enhanced_this_turn",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextCaster"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "Mar_7th_10_Enhance"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "conditionActive": {
                        "name": "Enemies Still Alive",
                        "target": "Caster",
                        "includeNonTargets": true
                      },
                      "abilityName": "Mar_7th_10_Ready_Special",
                      "abilitySource": "Caster",
                      "priorityTag": "PROG_AvatarLowest",
                      "canHitNonTargets": true,
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
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Mar_7th_10_GetEnhance"
            }
          ],
          "priorityLevel": 999999
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Mar_7th_10_GetEnhance"
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Mar_7th_10_GetEnhance"
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Mar_7th_10_GetEnhance"
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
                    "name": "Compare: Target",
                    "target": "Use Prior Target(s) Defined",
                    "target2": "Caster",
                    "invertCondition": true
                  },
                  {
                    "name": "Current Turn Is",
                    "target": "Caster"
                  },
                  "Turn Owner is in Action",
                  {
                    "name": "Compare: Variable",
                    "value1": "_has_enhanced_this_turn",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextCaster"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "Mar_7th_10_Enhance"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "conditionActive": {
                        "name": "Enemies Still Alive",
                        "target": "Caster",
                        "includeNonTargets": true
                      },
                      "abilityName": "Mar_7th_10_Ready_Special",
                      "abilitySource": "Caster",
                      "priorityTag": "PROG_AvatarLowest",
                      "canHitNonTargets": true,
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
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "EnergyBar_CurEnergy",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 99,
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "Define Modifier Variable",
                  "target": "Caster",
                  "modifierName": "Mar_7th_10_Energy[<span class=\"descriptionNumberColor\">Charge</span>]",
                  "value": {
                    "operator": "Variables[0] (EnergyBar_CurEnergy) || RETURN",
                    "displayLines": "EnergyBar_CurEnergy",
                    "constants": [],
                    "variables": [
                      "EnergyBar_CurEnergy"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (EnergyBar_CurEnergy) || RETURN",
                    "displayLines": "EnergyBar_CurEnergy",
                    "constants": [],
                    "variables": [
                      "EnergyBar_CurEnergy"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "Mar_7th_10_Enhance"
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "priorState": "Active"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "priorState": "Normal"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Mar_7th_10_GetEnhance",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "EnergyBar_CurEnergy",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (EnergyBar_MaxEnergy) || RETURN",
                  "displayLines": "EnergyBar_MaxEnergy",
                  "constants": [],
                  "variables": [
                    "EnergyBar_MaxEnergy"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Mar_7th_10_Enhance",
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.8) || RETURN",
                      "displayLines": "0.8",
                      "constants": [],
                      "variables": [
                        0.8
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
}