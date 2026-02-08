const configAbility = {
  "fileName": "Jade_Jade_PassiveAbility01",
  "childAbilityList": [
    "Jade_Jade_Passive_Camera_Start",
    "Jade_Jade_Passive_Camera_End01",
    "Jade_Jade_Passive_Camera_End01_ToStandBy",
    "Jade_Jade_Passive_Camera_End02",
    "Jade_Jade_PassiveAbility01",
    "Jade_Jade_Passive_Part01",
    "Jade_Jade_Passive_Part02_01",
    "Jade_Jade_Passive_Part02_02"
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
      "modifier": "<a class=\"gModGreen\" id=\"1980539643\">Jade_Passive</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1820252727\">Jade_Passive_CharacterCreateRate</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"2083260524\">Jade_AbilityPreShowModifier</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Pursued_DamagePercentage",
      "value": {
        "operator": "Variables[0] (0.25) || RETURN",
        "displayLines": "0.25",
        "constants": [],
        "variables": [
          0.25
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_InsertTriggerCount",
      "value": {
        "operator": "Variables[0] (8) || RETURN",
        "displayLines": "8",
        "constants": [],
        "variables": [
          8
        ]
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (_RateLayer) || RETURN",
        "displayLines": "_RateLayer",
        "constants": [],
        "variables": [
          "_RateLayer"
        ]
      },
      "maximum": {
        "operator": "Variables[0] (_InsertTriggerCount) || RETURN",
        "displayLines": "_InsertTriggerCount",
        "constants": [],
        "variables": [
          "_InsertTriggerCount"
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 2
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Jade_Passive_BPBuffAddLayer",
      "value": 1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Trace Activated",
        "conditionList": "Reverse Repo"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-479321621\">Jade_PointB1_Passive</a>",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
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
          "modifier": "<a class=\"gModGreen\" id=\"589579985\">Jade_Eidolon6_Check</a>"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__589579985\">Jade_Eidolon6_Check</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__2083260524\">Jade_AbilityPreShowModifier</a>",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": [
          "Skill"
        ],
        "conditions": {
          "name": "AND",
          "conditionList": [
            {
              "name": "OR",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1749110767\">Jade_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                },
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"119818662\">Jade_Eidolon6_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                }
              ],
              "invertCondition": true
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
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "30(SPD Change)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-479321621\">Jade_PointB1_Passive</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1687174133\">Jade_BPAbilitySelf</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"553729296\">Jade_Eidolon6_BPAbilitySelf</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1749110767\">Jade_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"119818662\">Jade_Eidolon6_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-2143808418\">Jade_Passive_Rate</a>[<span class=\"descriptionNumberColor\">Pawned Asset</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (50) || RETURN",
                        "displayLines": "50",
                        "constants": [],
                        "variables": [
                          50
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.024) || RETURN",
                          "displayLines": "0.024",
                          "constants": [],
                          "variables": [
                            0.024
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (0.005) || RETURN",
                          "displayLines": "0.005",
                          "constants": [],
                          "variables": [
                            0.005
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1820252727\">Jade_Passive_CharacterCreateRate</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"477418814\">Jade_Passive_contract</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Reverse Repo"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2143808418\">Jade_Passive_Rate</a>[<span class=\"descriptionNumberColor\">Pawned Asset</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (50) || RETURN",
                        "displayLines": "50",
                        "constants": [],
                        "variables": [
                          50
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.024) || RETURN",
                          "displayLines": "0.024",
                          "constants": [],
                          "variables": [
                            0.024
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (0.005) || RETURN",
                          "displayLines": "0.005",
                          "constants": [],
                          "variables": [
                            0.005
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
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
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1980539643\">Jade_Passive</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
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
                    "skillType": "Ultimate"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1687174133\">Jade_BPAbilitySelf</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"553729296\">Jade_Eidolon6_BPAbilitySelf</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "includeDyingTargets": true,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_RateLayer",
                          "value": {
                            "operator": "Variables[0] (_RateLayer) || Constants[0] (1) || ADD || Variables[1] (Jade_Passive_BPBuffAddLayer) || ADD || RETURN",
                            "displayLines": "((_RateLayer + 1) + Jade_Passive_BPBuffAddLayer)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_RateLayer",
                              "Jade_Passive_BPBuffAddLayer"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_HitNumb_Self",
                          "value": {
                            "operator": "Variables[0] (MDF_HitNumb_Self) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_HitNumb_Self + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_HitNumb_Self"
                            ]
                          }
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
                      "includeDyingTargets": true,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_RateLayer",
                          "value": {
                            "operator": "Variables[0] (_RateLayer) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(_RateLayer + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_RateLayer"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
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
                        "value1": "MDF_HitNumb_Self",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_RateLayer",
                          "value": {
                            "operator": "Variables[0] (_RateLayer) || Variables[1] (1) || ADD || RETURN",
                            "displayLines": "(_RateLayer + 1)",
                            "constants": [],
                            "variables": [
                              "_RateLayer",
                              1
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_HitNumb_Self",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_RateLayer",
                              "value": {
                                "operator": "Variables[0] (_RateLayer) || Variables[1] (2) || ADD || RETURN",
                                "displayLines": "(_RateLayer + 2)",
                                "constants": [],
                                "variables": [
                                  "_RateLayer",
                                  2
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
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HitNumb_Self",
                  "value": 0
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
                    "name": "Compare: Variable",
                    "value1": "_RateLayer",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (_InsertTriggerCount) || RETURN",
                      "displayLines": "_InsertTriggerCount",
                      "constants": [],
                      "variables": [
                        "_InsertTriggerCount"
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
                    "type": "AbilityOwnerInsertCount",
                    "typeValue": 1
                  },
                  "abilityName": "Jade_Passive_Part01",
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
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"477418814\">Jade_Passive_contract</a>"
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
                    "name": "Compare: Variable",
                    "value1": "_RateLayer",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (_InsertTriggerCount) || RETURN",
                      "displayLines": "_InsertTriggerCount",
                      "constants": [],
                      "variables": [
                        "_InsertTriggerCount"
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
                    "type": "AbilityOwnerInsertCount",
                    "typeValue": 1
                  },
                  "abilityName": "Jade_Passive_Part01",
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
                    "name": "Compare: Variable",
                    "value1": "_RateLayer",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (_InsertTriggerCount) || RETURN",
                      "displayLines": "_InsertTriggerCount",
                      "constants": [],
                      "variables": [
                        "_InsertTriggerCount"
                      ]
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
                  "abilityName": "Jade_Passive_Part01",
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
                    "name": "Compare: Variable",
                    "value1": "_RateLayer",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (_InsertTriggerCount) || RETURN",
                      "displayLines": "_InsertTriggerCount",
                      "constants": [],
                      "variables": [
                        "_InsertTriggerCount"
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
                    "type": "AbilityOwnerInsertCount",
                    "typeValue": 1
                  },
                  "abilityName": "Jade_Passive_Part01",
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
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "_RateLayer",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 99,
              "whenValueChanges": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_RateLayer) || RETURN",
                    "displayLines": "_RateLayer",
                    "constants": [],
                    "variables": [
                      "_RateLayer"
                    ]
                  }
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
                        "name": "Compare: Variable",
                        "value1": "_RateLayer",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (_InsertTriggerCount) || RETURN",
                          "displayLines": "_InsertTriggerCount",
                          "constants": [],
                          "variables": [
                            "_InsertTriggerCount"
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
                        "type": "AbilityOwnerInsertCount",
                        "typeValue": 1
                      },
                      "abilityName": "Jade_Passive_Part01",
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
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}