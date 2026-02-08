const configAbility = {
  "fileName": "Blade_AdvancedRen_PassiveAbility01",
  "childAbilityList": [
    "Blade_Ren_Passive_Camera",
    "Blade_AdvancedRen_PassiveAbility01",
    "Blade_AdvancedRen_Passive1Atk_Ability",
    "Blade_AdvancedRen_Passive1Atk02_Ability"
  ],
  "skillTrigger": "SkillP01",
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
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-669750728\">Advanced_Ren_Passive</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"634466478\">Advanced_Ren_LoseHPPreShow</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MwRen_isAttack",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MwRen_AttackStart",
      "value": 0
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "CasterMaxHP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "CasterCurrentHP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Eidolon Activated",
            "eidolon": 6
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MWRen_Qi_MaxLayer",
          "value": 4
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MWRen_Qi_MaxLayer",
          "value": 5
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": {
        "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
        "displayLines": "MWRen_Qi_MaxLayer",
        "constants": [],
        "variables": [
          "MWRen_Qi_MaxLayer"
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 2,
      "cooldown": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">",
            "value2": 0.5
          },
          {
            "name": "Eidolon Activated",
            "eidolon": 4
          }
        ]
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "MwRen_isOverHalf",
          "value": 1
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-669750728\">Advanced_Ren_Passive</a>",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "Dealt Damage while Crowd/Mind Controlled [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MwRen_isCharmAttack",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MwRen_isCharmAttack",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MwRen_isAttack",
                  "value": 1
                }
              ]
            }
          ],
          "priorityLevel": -100
        },
        {
          "eventTrigger": "Dealt Damage (END) while Crowd/Mind Controlled [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MwRen_isCharmAttack",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MwRen_isAttack",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MwRen_isAttack",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MwRen_AttackStart",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CasterCurrentHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Entity a Battle Event/Summon",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MwRen_AttackStart",
                    "compareType": "<",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MwRen_isAttack",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MwRen_AttackStart",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MwRen_isAttack",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT",
                      "Additional DMG"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MwRen_AttackStart",
                        "compareType": "<",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MwRen_isAttack",
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
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CasterCurrentHP2",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ParameterValue",
                "compareType": "<",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "CasterLostHP2"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CasterLostHP",
                  "value": {
                    "operator": "Variables[0] (CasterLostHP2) || INVERT || Variables[1] (CasterLostHP) || ADD || RETURN",
                    "displayLines": "(-CasterLostHP2 + CasterLostHP)",
                    "constants": [],
                    "variables": [
                      "CasterLostHP2",
                      "CasterLostHP"
                    ]
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1574082321\">Ren_CheckHPChange</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MwRen_isAttack",
                    "compareType": "<",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MwRen_AttackStart",
                      "value": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2146687777\">Advanced_Ren_Qi</a>[<span class=\"descriptionNumberColor\">Charge</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
                        "displayLines": "MWRen_Qi_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MWRen_Qi_MaxLayer"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "<a class=\"gModGreen\" id=\"2146687777\">Advanced_Ren_Qi</a>[<span class=\"descriptionNumberColor\">Charge</span>]",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
                              "displayLines": "MWRen_Qi_MaxLayer",
                              "constants": [],
                              "variables": [
                                "MWRen_Qi_MaxLayer"
                              ]
                            },
                            "valueType": "Layer"
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
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertCount",
                            "typeValue": 1
                          },
                          "abilityName": "AdvancedRen_Passive1Atk_Ability",
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": 0.5
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MwRen_isOverHalf",
                        "compareType": ">=",
                        "value2": 1
                      },
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 4
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MwRen_isOverHalf",
                      "value": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"740947569\">Advanced_Ren_Eidolon4_Add</a>"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MwRen_isOverHalf",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CasterCurrentHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MwRen_AttackStart",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MwRen_isAttack",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MwRen_AttackStart",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MwRen_isAttack",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Neverending Deaths"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"580817810\">Advanced_Ren_Trace02</a>[<span class=\"descriptionNumberColor\">Neverending Deaths</span>]"
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
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"2146687777\">Advanced_Ren_Qi</a>[<span class=\"descriptionNumberColor\">Charge</span>]",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
                      "displayLines": "MWRen_Qi_MaxLayer",
                      "constants": [],
                      "variables": [
                        "MWRen_Qi_MaxLayer"
                      ]
                    },
                    "valueType": "Layer"
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
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertCount",
                    "typeValue": 1
                  },
                  "abilityName": "AdvancedRen_Passive1Atk_Ability",
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
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"2146687777\">Advanced_Ren_Qi</a>[<span class=\"descriptionNumberColor\">Charge</span>]",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
                      "displayLines": "MWRen_Qi_MaxLayer",
                      "constants": [],
                      "variables": [
                        "MWRen_Qi_MaxLayer"
                      ]
                    },
                    "valueType": "Layer"
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Flag",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "flagName": "STAT_CTRL"
                    }
                  },
                  {
                    "name": "NOT",
                    "condition": {
                      "name": "Has Flag",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "flagName": "DisableAction"
                    }
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "DisableAction"
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertCount",
                    "typeValue": 1
                  },
                  "abilityName": "AdvancedRen_Passive1Atk_Ability",
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
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"2146687777\">Advanced_Ren_Qi</a>[<span class=\"descriptionNumberColor\">Charge</span>]",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
                      "displayLines": "MWRen_Qi_MaxLayer",
                      "constants": [],
                      "variables": [
                        "MWRen_Qi_MaxLayer"
                      ]
                    },
                    "valueType": "Layer"
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
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertCount",
                    "typeValue": 1
                  },
                  "abilityName": "AdvancedRen_Passive1Atk_Ability",
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
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CasterCurrentHP2",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CasterMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CasterCurrentHP2",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (CasterCurrentHP) || RETURN",
                      "displayLines": "CasterCurrentHP",
                      "constants": [],
                      "variables": [
                        "CasterCurrentHP"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1574082321\">Ren_CheckHPChange</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CasterCurrentHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [],
      "stackData": [],
      "latentQueue": []
    }
  ]
}