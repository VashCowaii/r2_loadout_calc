const configAbility = {
  "fileName": "Mydei_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 2,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-778096199\">Mydeimos_Ability22_Predicate</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1763336434\">Mydeimos_Transfer</a>[<span class=\"descriptionNumberColor\">Vendetta</span>]"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_EnergyBar_CurrentValue",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (Skill22_Cost) || RETURN",
                  "displayLines": "Skill22_Cost",
                  "constants": [],
                  "variables": [
                    "Skill22_Cost"
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
                        "name": "Compare: Variable",
                        "value1": "_BPSkill21_Plus",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_BPSkill21_Plus",
                      "value": 1
                    },
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill22",
                      "skillSlot": "Skill",
                      "enableSecondaryType": "ControlSkill02"
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "Mydeimos_InsertAction",
                      "afterInjection": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_BPSkill21_Plus",
                          "value": 0
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1763336434\">Mydeimos_Transfer</a>[<span class=\"descriptionNumberColor\">Vendetta</span>]"
                          },
                          "passed": [
                            {
                              "name": "Update Ability Binding",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityName": "Skill21",
                              "skillSlot": "Skill",
                              "enableSecondaryType": "ControlSkill02"
                            }
                          ]
                        }
                      ],
                      "abortFlags": [
                        "STAT_MydeimosRemoveTransfer"
                      ]
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_EnergyBar_CurrentValue) || RETURN",
                    "displayLines": "_EnergyBar_CurrentValue",
                    "constants": [],
                    "variables": [
                      "_EnergyBar_CurrentValue"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (Skill22_Cost) || RETURN",
                    "displayLines": "Skill22_Cost",
                    "constants": [],
                    "variables": [
                      "Skill22_Cost"
                    ]
                  },
                  "priorState": "Active"
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_EnergyBar_CurrentValue) || RETURN",
                    "displayLines": "_EnergyBar_CurrentValue",
                    "constants": [],
                    "variables": [
                      "_EnergyBar_CurrentValue"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (Skill22_Cost) || RETURN",
                    "displayLines": "Skill22_Cost",
                    "constants": [],
                    "variables": [
                      "Skill22_Cost"
                    ]
                  },
                  "priorState": "Normal"
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
                    "value1": "_EnergyBar_CurrentValue",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MYDEI_OBJECT_UNUSED_8[100]) || RETURN",
                      "displayLines": "MYDEI_OBJECT_UNUSED_8[100]",
                      "constants": [],
                      "variables": [
                        "MYDEI_OBJECT_UNUSED_8[100]"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_CanTransfer",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_EnergyBar_CurrentValue) || RETURN",
                    "displayLines": "_EnergyBar_CurrentValue",
                    "constants": [],
                    "variables": [
                      "_EnergyBar_CurrentValue"
                    ]
                  },
                  "priorState": "Active"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_CanTransfer",
                  "value": 1
                },
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Mydeimos_PassiveAbility01_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "AvatarBuffSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_EnergyBar_CurrentValue) || RETURN",
                    "displayLines": "_EnergyBar_CurrentValue",
                    "constants": [],
                    "variables": [
                      "_EnergyBar_CurrentValue"
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
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-796211194\">Mydeimos_PassiveAbility_Transfer</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DV_CanTransfer",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Mydeimos_PassiveAbility01_Insert",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "AvatarBuffSelf",
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
  ],
  "references": []
}