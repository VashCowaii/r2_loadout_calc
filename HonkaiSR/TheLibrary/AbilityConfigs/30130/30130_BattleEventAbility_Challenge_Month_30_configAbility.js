const configAbility = {
  "fileName": "30130_BattleEventAbility_Challenge_Month_30",
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
      "variableName": "_Init_Layer",
      "resetValue": {
        "displayLines": "#BattleEvent_P1_ADF"
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_DmgUp_Ratio",
      "resetValue": {
        "displayLines": "#BattleEvent_P2_ADF"
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_Damage_Ratio",
      "resetValue": {
        "displayLines": "#BattleEvent_P3_ADF"
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_Damage_Ratio_2",
      "resetValue": {
        "displayLines": "#BattleEvent_P4_ADF"
      },
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_Current_Layer",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_Trigger_Effect_Flag",
      "scope": "ContextCaster"
    },
    {
      "name": "Add Ability",
      "abilityName": "BattleEventAbility_Camera_AllDarkTeamWithoutDither"
    },
    {
      "name": "Add Ability",
      "abilityName": "BattleEventAbility_Camear_AllLightTeamWithoutDither"
    },
    {
      "name": "Add Ability",
      "abilityName": "BattleEventAbility_Challenge_Month_30_Insert"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"918497004\">Modifier_BattleEventAbility_Challenge_Month_30</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__918497004\">Modifier_BattleEventAbility_Challenge_Month_30</a>",
      "stackType": "ReplaceByCaster",
      "latentQueue": [
        "_Trigger_Effect_Flag"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
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
                    "includeUnselectable": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_Trigger_Effect_Flag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "_Trigger_Effect_Flag"
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
                      "variableName": "_Temp_Hp",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
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
                              "displayLines": "(_Temp_Hp * _Damage_Ratio)"
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
                              "displayLines": "(_Temp_Hp * _Damage_Ratio_2)"
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
                  "value": 0,
                  "variableName": "_Current_Layer"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1682404281\">Modifier_BattleEventAbility_Challenge_Month_30_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                },
                "Trigger: Attack End"
              ],
              "failed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "ability": "BattleEventAbility_Camear_AllLightTeamWithoutDither",
                  "isTrigger": true
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "_Current_Layer"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1682404281\">Modifier_BattleEventAbility_Challenge_Month_30_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
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
                "name": "Is Part Of",
                "target1": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1682404281\">Modifier_BattleEventAbility_Challenge_Month_30_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                  "stackLimit": {
                    "displayLines": "_Init_Layer"
                  },
                  "valuePerStack": {
                    "_DmgUp_Ratio_get": {
                      "displayLines": "_DmgUp_Ratio"
                    }
                  },
                  "addStacksPerTrigger": {
                    "displayLines": "_Current_Layer"
                  }
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
                "target1": {
                  "name": "Target Name",
                  "target": "{{Player Team All}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(_Current_Layer + 1)"
                  },
                  "variableName": "_Current_Layer"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Current_Layer",
                    "compareType": "=",
                    "value2": {
                      "displayLines": "_Init_Layer"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "_Trigger_Effect_Flag"
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
                          "abilityName": "BattleEventAbility_Challenge_Month_30_Insert",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "ownerState": "Anyone",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "_Damage_Ratio_get": {
                              "displayLines": "#BattleEvent_P3_ADF"
                            },
                            "_Damage_Ratio_2_get": {
                              "displayLines": "#BattleEvent_P4_ADF"
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
                    "includeUnselectable": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_Trigger_Effect_Flag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "_Trigger_Effect_Flag"
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
                      "variableName": "_Temp_Hp",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
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
                              "displayLines": "(_Temp_Hp * _Damage_Ratio)"
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
                              "displayLines": "(_Temp_Hp * _Damage_Ratio_2)"
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
                  "value": 0,
                  "variableName": "_Current_Layer"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1682404281\">Modifier_BattleEventAbility_Challenge_Month_30_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
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
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "ability": "BattleEventAbility_Camear_AllLightTeamWithoutDither",
                      "isTrigger": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "_Current_Layer"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1682404281\">Modifier_BattleEventAbility_Challenge_Month_30_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Batch: Enemy Arrival",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "_Current_Layer"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1682404281\">Modifier_BattleEventAbility_Challenge_Month_30_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
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
                  "modifier": "<a class=\"gModGreen\" id=\"1736106961\">Modifier_BattleEventAbility_Challenge_Month_30_sub2</a>"
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
          "scope": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": {
                "displayLines": "_Init_Layer"
              },
              "includeMaxValueInRange": true,
              "enteringRange": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "searchRandom": true,
                  "maxTargets": 10,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1682404281\">Modifier_BattleEventAbility_Challenge_Month_30_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "stackLimit": {
                        "displayLines": "_Init_Layer"
                      },
                      "valuePerStack": {
                        "_DmgUp_Ratio_get": {
                          "displayLines": "_DmgUp_Ratio"
                        }
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "_Current_Layer"
                      }
                    }
                  ]
                }
              ],
              "onChange": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "searchRandom": true,
                  "maxTargets": 10,
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1682404281\">Modifier_BattleEventAbility_Challenge_Month_30_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1682404281\">Modifier_BattleEventAbility_Challenge_Month_30_sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "stackLimit": {
                        "displayLines": "_Init_Layer"
                      },
                      "valuePerStack": {
                        "_DmgUp_Ratio_get": {
                          "displayLines": "_DmgUp_Ratio"
                        }
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "_Current_Layer"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}