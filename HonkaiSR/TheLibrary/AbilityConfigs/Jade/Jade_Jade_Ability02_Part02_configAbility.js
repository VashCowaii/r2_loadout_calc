const configAbility = {
  "fileName": "Jade_Jade_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Jade_BPAbilityBonusListen"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "modifier": "Jade_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members}}"
      },
      "modifier": "Jade_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "Jade_Eidolon6_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "Jade_Eidolon6_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
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
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Jade_Eidolon6_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Jade_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Jade_BPAbilityBonusListen",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          }
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
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Jade_Eidolon6_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (30) || RETURN",
                  "displayLines": "30",
                  "constants": [],
                  "variables": [
                    30
                  ]
                },
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                },
                "MDF_Eidolon1_Flag": 1,
                "MDF_Eidolon1_HitNumb": 0,
                "MDF_LoseHP": {
                  "operator": "Variables[0] (0.02) || RETURN",
                  "displayLines": "0.02",
                  "constants": [],
                  "variables": [
                    0.02
                  ]
                },
                "MDF_Eidolon1_AddRateLayer": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "MDF_Eidolon1_AddRateLayer02": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "Jade_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (30) || RETURN",
                      "displayLines": "30",
                      "constants": [],
                      "variables": [
                        30
                      ]
                    },
                    "MDF_Eidolon1_Flag": 1,
                    "MDF_Eidolon1_HitNumb": 0,
                    "MDF_LoseHP": {
                      "operator": "Variables[0] (0.02) || RETURN",
                      "displayLines": "0.02",
                      "constants": [],
                      "variables": [
                        0.02
                      ]
                    },
                    "MDF_Eidolon1_AddRateLayer": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "MDF_Eidolon1_AddRateLayer02": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "Jade_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (30) || RETURN",
                      "displayLines": "30",
                      "constants": [],
                      "variables": [
                        30
                      ]
                    },
                    "MDF_Eidolon1_Flag": 0,
                    "MDF_Eidolon1_HitNumb": 0,
                    "MDF_LoseHP": {
                      "operator": "Variables[0] (0.02) || RETURN",
                      "displayLines": "0.02",
                      "constants": [],
                      "variables": [
                        0.02
                      ]
                    },
                    "MDF_Eidolon1_AddRateLayer": 0,
                    "MDF_Eidolon1_AddRateLayer02": 0
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Jade_Eidolon6_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "Jade_Eidolon6_QuantumPenetrate"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Skill"
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Jade_Eidolon6_QuantumPenetrate",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (_Pursued_DamagePercentage) || RETURN",
                      "displayLines": "_Pursued_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "_Pursued_DamagePercentage"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyRatio"
      ],
      "latentQueue": [],
      "description": "Quantum RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>. After attacking, for each enemy target hit, Jade gains 1 point of Charge and deals Additional DMG.",
      "type": "Buff",
      "effectName": "Debt Collector",
      "statusName": "Debt Collector"
    },
    {
      "name": "Modifier Construction",
      "for": "Jade_Eidolon6_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "Unknow",
      "modifierFlags": [
        "STAT_SpeedUp",
        "RemoveWhenCasterDead",
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Jade_BPAbilityBonusListen"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
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
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": "Jade_Eidolon6_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
                  "function": "Add",
                  "valueType": "Duration"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
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
                  "modifier": "Jade_Eidolon6_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "consumePercent": {
                "operator": "Variables[0] (MDF_LoseHP) || RETURN",
                "displayLines": "MDF_LoseHP",
                "constants": [],
                "variables": [
                  "MDF_LoseHP"
                ]
              },
              "consumeFloor": 1,
              "attackType": "BPSkill"
            },
            {
              "name": "Define Custom Variable with Attack Targets",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_Rank01_HitNumb"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (_Pursued_DamagePercentage) || RETURN",
                      "displayLines": "_Pursued_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "_Pursued_DamagePercentage"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Rank01_Flag",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Rank01_HitNumb",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_RateLayer",
                      "value": {
                        "operator": "Variables[0] (_RateLayer) || Variables[1] (MDF_Eidolon1_AddRateLayer) || ADD || RETURN",
                        "displayLines": "(_RateLayer + MDF_Eidolon1_AddRateLayer)",
                        "constants": [],
                        "variables": [
                          "_RateLayer",
                          "MDF_Eidolon1_AddRateLayer"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Rank01_HitNumb",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_RateLayer",
                          "value": {
                            "operator": "Variables[0] (_RateLayer) || Variables[1] (MDF_Eidolon1_AddRateLayer02) || ADD || RETURN",
                            "displayLines": "(_RateLayer + MDF_Eidolon1_AddRateLayer02)",
                            "constants": [],
                            "variables": [
                              "_RateLayer",
                              "MDF_Eidolon1_AddRateLayer02"
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
              "variableName": "MDF_Rank01_HitNumb",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue",
        "MDF_PropertyRatio",
        "MDF_Rank01_Flag",
        "MDF_Rank01_HitNumb",
        "MDF_LoseHP",
        "MDF_Rank01_AddRateLayer",
        "MDF_Rank01_AddRateLayer02"
      ],
      "latentQueue": [],
      "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. After using an attack, consumes a small amount of HP. For each enemy target hit, Jade gains 1 point of Charge and deals Additional DMG.",
      "type": "Buff",
      "effectName": "Debt Collector",
      "statusName": "Debt Collector"
    },
    {
      "name": "Modifier Construction",
      "for": "Jade_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Skill"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (_Pursued_DamagePercentage) || RETURN",
                      "displayLines": "_Pursued_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "_Pursued_DamagePercentage"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "After using an attack, for each enemy target hit, Jade gains 1 point of Charge and deals Additional DMG.",
      "type": "Buff",
      "effectName": "Debt Collector",
      "statusName": "Debt Collector"
    },
    {
      "name": "Modifier Construction",
      "for": "Jade_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "Unknow",
      "modifierFlags": [
        "STAT_SpeedUp",
        "RemoveWhenCasterDead",
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Jade_BPAbilityBonusListen"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
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
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": "Jade_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
                  "function": "Add",
                  "valueType": "Duration"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "consumePercent": {
                "operator": "Variables[0] (MDF_LoseHP) || RETURN",
                "displayLines": "MDF_LoseHP",
                "constants": [],
                "variables": [
                  "MDF_LoseHP"
                ]
              },
              "consumeFloor": 1,
              "attackType": "BPSkill"
            },
            {
              "name": "Define Custom Variable with Attack Targets",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_Rank01_HitNumb"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (_Pursued_DamagePercentage) || RETURN",
                      "displayLines": "_Pursued_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "_Pursued_DamagePercentage"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Rank01_Flag",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Rank01_HitNumb",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_RateLayer",
                      "value": {
                        "operator": "Variables[0] (_RateLayer) || Variables[1] (MDF_Eidolon1_AddRateLayer) || ADD || RETURN",
                        "displayLines": "(_RateLayer + MDF_Eidolon1_AddRateLayer)",
                        "constants": [],
                        "variables": [
                          "_RateLayer",
                          "MDF_Eidolon1_AddRateLayer"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Rank01_HitNumb",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_RateLayer",
                          "value": {
                            "operator": "Variables[0] (_RateLayer) || Variables[1] (MDF_Eidolon1_AddRateLayer02) || ADD || RETURN",
                            "displayLines": "(_RateLayer + MDF_Eidolon1_AddRateLayer02)",
                            "constants": [],
                            "variables": [
                              "_RateLayer",
                              "MDF_Eidolon1_AddRateLayer02"
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
              "variableName": "MDF_Rank01_HitNumb",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue",
        "MDF_Rank01_Flag",
        "MDF_Rank01_HitNumb",
        "MDF_LoseHP",
        "MDF_Rank01_AddRateLayer",
        "MDF_Rank01_AddRateLayer02"
      ],
      "latentQueue": [],
      "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. After using an attack, consumes a small amount of HP. For each enemy target hit, Jade gains 1 point of Charge and deals Additional DMG.",
      "type": "Buff",
      "effectName": "Debt Collector",
      "statusName": "Debt Collector"
    },
    {
      "name": "Modifier Construction",
      "for": "Jade_BPAbilityBonusListen",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "Jade_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Jade_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Jade_Eidolon6_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "Jade_Eidolon6_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "Jade_Eidolon6_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Skill"
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