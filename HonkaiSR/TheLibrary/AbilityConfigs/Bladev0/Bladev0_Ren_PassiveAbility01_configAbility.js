const configAbility = {
  "fileName": "Bladev0_Ren_PassiveAbility01",
  "childAbilityList": [
    "Bladev0_Ren_Passive_Camera",
    "Bladev0_Ren_PassiveAbility01",
    "Bladev0_Ren_Passive1Atk_Ability",
    "Bladev0_Ren_Passive1Atk02_Ability"
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
      "modifier": "<a class=\"gModGreen\" id=\"1035052836\">MWRen_Passive</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-480743382\">MWRen_LoseHPPreShow</a>"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "MwRen_isAttack"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "MwRen_AttackStart"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "MwRen_isHeal"
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "CasterMaxHP",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "CasterCurrentHP",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
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
          "value": 4,
          "variableName": "MWRen_Qi_MaxLayer"
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "value": 5,
          "variableName": "MWRen_Qi_MaxLayer"
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
        "displayLines": "MWRen_Qi_MaxLayer"
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
          "value": 1,
          "variableName": "MwRen_isOverHalf"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1035052836\">MWRen_Passive</a>",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MwRen_isHeal"
            }
          ]
        },
        {
          "eventTrigger": "Dealt Damage while Crowd/Mind Controlled [Anyone]",
          "priorityLevel": -100,
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
                  "value": 1,
                  "variableName": "MwRen_isCharmAttack"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "MwRen_isAttack"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Dealt Damage (END) while Crowd/Mind Controlled [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MwRen_isCharmAttack"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MwRen_isAttack"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Anyone]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MwRen_isAttack"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MwRen_AttackStart"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "CasterCurrentHP",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MwRen_isHeal"
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
                      "value": 1,
                      "variableName": "MwRen_isAttack"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "MwRen_AttackStart"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "MwRen_isAttack"
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
                          "value": 1,
                          "variableName": "MwRen_isAttack"
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
          "eventTrigger": "Receiving Heal Start [Owner]",
          "priorityLevel": 200,
          "execute": [
            {
              "name": "Define Custom Variable with Healing",
              "variableName": "MDF_HealValue",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_HealValue",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "MwRen_isHeal"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Receiving Heal End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MwRen_isHeal"
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MwRen_isHeal",
                "compareType": ">",
                "value2": 0
              },
              "failed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "CasterCurrentHP2",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
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
                      "value": {
                        "displayLines": "(-CasterLostHP2 + CasterLostHP)"
                      },
                      "variableName": "CasterLostHP"
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
                          "value": 0,
                          "variableName": "MwRen_AttackStart"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1924146149\">MWRen_Qi</a>[<span class=\"descriptionNumberColor\">Charge</span>]",
                          "stackLimit": {
                            "displayLines": "MWRen_Qi_MaxLayer"
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "<a class=\"gModGreen\" id=\"1924146149\">MWRen_Qi</a>[<span class=\"descriptionNumberColor\">Charge</span>]",
                                "compareType": ">=",
                                "value2": {
                                  "displayLines": "MWRen_Qi_MaxLayer"
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
                              "abilityName": "Ren_Passive1Atk_Ability",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Hostile Entities(AOE)}}"
                              },
                              "priorityTag": "CharacterAttackFromSelf",
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
                    "name": "Trace Activated",
                    "conditionList": "Vita Infinita"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-510378845\">MWRen_Trace01</a>[<span class=\"descriptionNumberColor\">Vita Infinita</span>]",
                      "valuePerStack": {
                        "MDF_HealEnhanceRatio": {
                          "displayLines": "0.2"
                        }
                      }
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
                      "value": 0,
                      "variableName": "MwRen_isOverHalf"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2019393203\">MWRen_Eidolon4_Add</a>"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-510378845\">MWRen_Trace01</a>[<span class=\"descriptionNumberColor\">Vita Infinita</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "MwRen_isOverHalf"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "CasterCurrentHP",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]: Start",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "MwRen_AttackStart"
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MwRen_isAttack"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MwRen_AttackStart"
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MwRen_isAttack"
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
                    "name": "Trace Activated",
                    "conditionList": "Vita Infinita"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-510378845\">MWRen_Trace01</a>[<span class=\"descriptionNumberColor\">Vita Infinita</span>]",
                      "valuePerStack": {
                        "MDF_HealEnhanceRatio": {
                          "displayLines": "0.2"
                        }
                      }
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
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"1924146149\">MWRen_Qi</a>[<span class=\"descriptionNumberColor\">Charge</span>]",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "MWRen_Qi_MaxLayer"
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
                  "abilityName": "Ren_Passive1Atk_Ability",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "priorityTag": "CharacterAttackFromSelf",
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
                    "value1": "<a class=\"gModGreen\" id=\"1924146149\">MWRen_Qi</a>[<span class=\"descriptionNumberColor\">Charge</span>]",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "MWRen_Qi_MaxLayer"
                    },
                    "valueType": "Layer"
                  },
                  {
                    "name": "NOT",
                    "conditions": {
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
                    "conditions": {
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
                  "abilityName": "Ren_Passive1Atk_Ability",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "priorityTag": "CharacterAttackFromSelf",
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
          "eventTrigger": "Batch: Enemy Arrival",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "<a class=\"gModGreen\" id=\"1924146149\">MWRen_Qi</a>[<span class=\"descriptionNumberColor\">Charge</span>]",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "MWRen_Qi_MaxLayer"
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
                  "abilityName": "Ren_Passive1Atk_Ability",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "priorityTag": "CharacterAttackFromSelf",
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
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1574082321\">Ren_CheckHPChange</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CasterMaxHP",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(CasterLostHP / CasterMaxHP)"
                  },
                  "variableName": "CasterLostHPPercentage"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CasterLostHPPercentage",
                "compareType": ">=",
                "value2": {
                  "displayLines": "0.9"
                },
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(CasterMaxHP * 0.9)"
                  },
                  "variableName": "CasterFinalLostHP"
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "CasterLostHP"
                  },
                  "variableName": "CasterFinalLostHP"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-870658235\">MWRen_Ability03_Listen</a>[<span class=\"descriptionNumberColor\">Death Sentence</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "CasterFinalLostHP"
                }
              }
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "onChange": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "CasterCurrentHP2",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "CasterMaxHP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CasterCurrentHP2",
                    "compareType": "<=",
                    "value2": {
                      "displayLines": "CasterCurrentHP"
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
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "onChange": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "CasterCurrentHP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}