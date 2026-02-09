const configAbility = {
  "fileName": "1490374940_BattleEventAbility_Challenge_Month_26",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "_Init_Layer",
      "value": {
        "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
        "displayLines": "#BattleEvent_P1_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P1_ADF"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "_DamageUp_Ratio",
      "value": {
        "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
        "displayLines": "#BattleEvent_P2_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P2_ADF"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "_Damage_Ratio",
      "value": {
        "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
        "displayLines": "#BattleEvent_P3_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P3_ADF"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "_Damage_Ratio_2",
      "value": {
        "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
        "displayLines": "#BattleEvent_P4_ADF",
        "constants": [],
        "variables": [
          "#BattleEvent_P4_ADF"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "_Current_Layer"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "_Trigger_Damage_Flag"
    },
    {
      "name": "Add Ability",
      "abilityName": "BattleEventAbility_Camera_AllDarkTeamWithoutDither"
    },
    {
      "name": "Add Ability",
      "abilityName": "BattleEventAbility_Challenge_Month_26_Insert"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"918644099\">Modifier_BattleEventAbility_Challenge_Month_26</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__918644099\">Modifier_BattleEventAbility_Challenge_Month_26</a>",
      "stackType": "ReplaceByCaster",
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
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "includeNonTargets": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_Trigger_Damage_Flag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Trigger_Damage_Flag",
                  "value": 0
                },
                "Deleted bullshit",
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 5,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_Temp_Hp",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "=",
                            "value2": 2
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "DamageFlat": {
                              "operator": "Variables[0] (_Temp_Hp) || Variables[1] (_Damage_Ratio) || MUL || RETURN",
                              "displayLines": "(_Temp_Hp * _Damage_Ratio)",
                              "constants": [],
                              "variables": [
                                "_Temp_Hp",
                                "_Damage_Ratio"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "DOT"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "DamageFlat": {
                              "operator": "Variables[0] (_Temp_Hp) || Variables[1] (_Damage_Ratio_2) || MUL || RETURN",
                              "displayLines": "(_Temp_Hp * _Damage_Ratio_2)",
                              "constants": [],
                              "variables": [
                                "_Temp_Hp",
                                "_Damage_Ratio_2"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "DOT"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Current_Layer",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                },
                "Trigger: Attack End"
              ],
              "failed": [
                "Deleted bullshit",
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Current_Layer",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
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
                "of": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Current_Layer",
                  "value": {
                    "operator": "Variables[0] (_Current_Layer) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(_Current_Layer + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_Current_Layer"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Current_Layer",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (_Init_Layer) || RETURN",
                      "displayLines": "_Init_Layer",
                      "constants": [],
                      "variables": [
                        "_Init_Layer"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Trigger_Damage_Flag",
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
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "BattleEventAbility_Challenge_Month_26_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "_Damage_Ratio_get": {
                              "operator": "Variables[0] (_Damage_Ratio) || RETURN",
                              "displayLines": "_Damage_Ratio",
                              "constants": [],
                              "variables": [
                                "_Damage_Ratio"
                              ]
                            },
                            "_Damage_Ratio_2_get": {
                              "operator": "Variables[0] (_Damage_Ratio_2) || RETURN",
                              "displayLines": "_Damage_Ratio_2",
                              "constants": [],
                              "variables": [
                                "_Damage_Ratio_2"
                              ]
                            }
                          },
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
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "includeNonTargets": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_Trigger_Damage_Flag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Trigger_Damage_Flag",
                  "value": 0
                },
                "Deleted bullshit",
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 5,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_Temp_Hp",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "=",
                            "value2": 2
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "DamageFlat": {
                              "operator": "Variables[0] (_Temp_Hp) || Variables[1] (_Damage_Ratio) || MUL || RETURN",
                              "displayLines": "(_Temp_Hp * _Damage_Ratio)",
                              "constants": [],
                              "variables": [
                                "_Temp_Hp",
                                "_Damage_Ratio"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "DOT"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "DamageFlat": {
                              "operator": "Variables[0] (_Temp_Hp) || Variables[1] (_Damage_Ratio_2) || MUL || RETURN",
                              "displayLines": "(_Temp_Hp * _Damage_Ratio_2)",
                              "constants": [],
                              "variables": [
                                "_Temp_Hp",
                                "_Damage_Ratio_2"
                              ]
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "DOT"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Current_Layer",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                },
                "Trigger: Attack End"
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "failed": [
                    "Deleted bullshit",
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Current_Layer",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
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
              "name": "Define Custom Variable",
              "variableName": "_Current_Layer",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 10,
              "conditions": {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "compareType": ">=",
                "value2": 4
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"319313068\">Modifier_BattleEventAbility_Challenge_Month_26_sub2</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Member Added to Team [Owner]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Current_Layer",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (_Init_Layer) || RETURN",
                        "displayLines": "_Init_Layer",
                        "constants": [],
                        "variables": [
                          "_Init_Layer"
                        ]
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_Current_Layer) || RETURN",
                        "displayLines": "_Current_Layer",
                        "constants": [],
                        "variables": [
                          "_Current_Layer"
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
          "eventTrigger": "Member Removed from Team [Owner]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Current_Layer",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
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
          "variableName": "_Current_Layer",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": {
                "operator": "Variables[0] (_Init_Layer) || RETURN",
                "displayLines": "_Init_Layer",
                "constants": [],
                "variables": [
                  "_Init_Layer"
                ]
              },
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 10,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (_Init_Layer) || RETURN",
                        "displayLines": "_Init_Layer",
                        "constants": [],
                        "variables": [
                          "_Init_Layer"
                        ]
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_Current_Layer) || RETURN",
                        "displayLines": "_Current_Layer",
                        "constants": [],
                        "variables": [
                          "_Current_Layer"
                        ]
                      }
                    }
                  ]
                }
              ],
              "whenValueChanges": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 10,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (_Init_Layer) || RETURN",
                        "displayLines": "_Init_Layer",
                        "constants": [],
                        "variables": [
                          "_Init_Layer"
                        ]
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Current_Layer",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All(with Unselectable)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-245828586\">Modifier_BattleEventAbility_Challenge_Month_26_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_Trigger_Damage_Flag"
      ]
    }
  ]
}