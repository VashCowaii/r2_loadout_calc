const configAbility = {
  "fileName": "Tingyun_Modifiers",
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
      "for": "Tingyun_Eidolon2_CD"
    },
    {
      "name": "Modifier Construction",
      "for": "Tingyun_Trace_B1_SpeedUp[<span class=\"descriptionNumberColor\">Nourished Joviality</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (Tingyun_SpeedUP_Ratio) || RETURN",
                "displayLines": "Tingyun_SpeedUP_Ratio",
                "constants": [],
                "variables": [
                  "Tingyun_SpeedUP_Ratio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "Tingyun_SpeedUP_Ratio"
      ],
      "latentQueue": [],
      "description": "SPD +<span class=\"descriptionNumberColor\">Tingyun_SpeedUP_Ratio</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "Nourished Joviality"
    },
    {
      "name": "Modifier Construction",
      "for": "Tingyun_Eidolon1_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Rank01_SpeedUp_01) || RETURN",
                "displayLines": "MDF_Rank01_SpeedUp_01",
                "constants": [],
                "variables": [
                  "MDF_Rank01_SpeedUp_01"
                ]
              }
            }
          ]
        }
      ],
      "description": "SPD +<span class=\"descriptionNumberColor\">MDF_Rank01_SpeedUp_01</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "TingYun_PassiveFlag"
    },
    {
      "name": "Modifier Construction",
      "for": "TingYun_PassiveATK_Flag"
    },
    {
      "name": "Modifier Construction",
      "for": "TingYun_ByIsTingYun",
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "valueType": "LifeTime",
                  "variableName": "TingYun_EnergyBarLayer",
                  "modifierName": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TingYun_EnergyBarLayer",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (TingYun_EnergyBarLayer) || RETURN",
                        "displayLines": "TingYun_EnergyBarLayer",
                        "constants": [],
                        "variables": [
                          "TingYun_EnergyBarLayer"
                        ]
                      },
                      "maximum": 3,
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 3
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (TingYun_EnergyBarLayer) || RETURN",
                        "displayLines": "TingYun_EnergyBarLayer",
                        "constants": [],
                        "variables": [
                          "TingYun_EnergyBarLayer"
                        ]
                      },
                      "maximum": 3,
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 3
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "MWTingYun_BPAbility_AttackDelta_LifeTimeChangeMark"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "MWTingYun_BPAbility_AttackDelta_LifeTimeChangeMark"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "valueType": "LifeTime",
                      "variableName": "TingYun_EnergyBarLayer",
                      "modifierName": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TingYun_EnergyBarLayer",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (TingYun_EnergyBarLayer) || RETURN",
                            "displayLines": "TingYun_EnergyBarLayer",
                            "constants": [],
                            "variables": [
                              "TingYun_EnergyBarLayer"
                            ]
                          },
                          "maximum": 3,
                          "assignState": "True",
                          "priorState": "Normal",
                          "bar#": 3
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (TingYun_EnergyBarLayer) || RETURN",
                            "displayLines": "TingYun_EnergyBarLayer",
                            "constants": [],
                            "variables": [
                              "TingYun_EnergyBarLayer"
                            ]
                          },
                          "maximum": 3,
                          "assignState": "True",
                          "priorState": "Active",
                          "bar#": 3
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
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "valueType": "LifeTime",
                  "variableName": "TingYun_EnergyBarLayer",
                  "modifierName": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TingYun_EnergyBarLayer",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (TingYun_EnergyBarLayer) || RETURN",
                        "displayLines": "TingYun_EnergyBarLayer",
                        "constants": [],
                        "variables": [
                          "TingYun_EnergyBarLayer"
                        ]
                      },
                      "maximum": 3,
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 3
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (TingYun_EnergyBarLayer) || RETURN",
                        "displayLines": "TingYun_EnergyBarLayer",
                        "constants": [],
                        "variables": [
                          "TingYun_EnergyBarLayer"
                        ]
                      },
                      "maximum": 3,
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 3
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Force Modifier Duration Decrement [Anyone]: Start",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "valueType": "LifeTime",
                  "variableName": "TingYun_EnergyBarLayer",
                  "modifierName": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TingYun_EnergyBarLayer",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (TingYun_EnergyBarLayer) || RETURN",
                        "displayLines": "TingYun_EnergyBarLayer",
                        "constants": [],
                        "variables": [
                          "TingYun_EnergyBarLayer"
                        ]
                      },
                      "maximum": 3,
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 3
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (TingYun_EnergyBarLayer) || RETURN",
                        "displayLines": "TingYun_EnergyBarLayer",
                        "constants": [],
                        "variables": [
                          "TingYun_EnergyBarLayer"
                        ]
                      },
                      "maximum": 3,
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 3
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
      "for": "TingYun_Passive_LeiLing_Eidolon4",
      "modifierFlags": [
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
                "target": "{{Modifier Holder}}"
              },
              "modifier": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Tingyun_Eidolon2_CD"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackDelta) || RETURN",
                "displayLines": "MDF_AttackDelta",
                "constants": [],
                "variables": [
                  "MDF_AttackDelta"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Tingyun_Eidolon2_CD"
              },
              "failed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_Rank02_SPAdd) || RETURN",
                    "displayLines": "MDF_Rank02_SPAdd",
                    "constants": [],
                    "variables": [
                      "MDF_Rank02_SPAdd"
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Tingyun_Eidolon2_CD"
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
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (MDF_Passive_DamagePercentage) || Variables[1] (MDF_Rank04_DamagePercentage) || ADD || RETURN",
                      "displayLines": "(MDF_Passive_DamagePercentage + MDF_Rank04_DamagePercentage)",
                      "constants": [],
                      "variables": [
                        "MDF_Passive_DamagePercentage",
                        "MDF_Rank04_DamagePercentage"
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
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "TingYun_PassiveFlag"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "TingYun_PassiveATK_Flag"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Current Action Target List}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (MDF_Passive_DamagePercentageSelf) || RETURN",
                      "displayLines": "MDF_Passive_DamagePercentageSelf",
                      "constants": [],
                      "variables": [
                        "MDF_Passive_DamagePercentageSelf"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "TingYun_PassiveATK_Flag"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Owner}}"
                    },
                    "modifier": "TingYun_ByIsTingYun"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "TingYun_PassiveATK_Flag"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Tingyun_Eidolon1_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                  "duration": 1,
                  "valuePerStack": {
                    "MDF_Eidolon1_SpeedUp_01": {
                      "operator": "Variables[0] (MDF_Rank01_SpeedUp) || RETURN",
                      "displayLines": "MDF_Rank01_SpeedUp",
                      "constants": [],
                      "variables": [
                        "MDF_Rank01_SpeedUp"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Passive_DamagePercentage",
        "MDF_Passive_DamagePercentageSelf",
        "MDF_Rank01_SpeedUp",
        "MDF_Rank02_SPAdd",
        "MDF_Rank04_DamagePercentage",
        "MDF_AttackDelta"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "TingYun_Passive_LeiLing_Eidolon2",
      "modifierFlags": [
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
                "target": "{{Modifier Holder}}"
              },
              "modifier": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Tingyun_Eidolon2_CD"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackDelta) || RETURN",
                "displayLines": "MDF_AttackDelta",
                "constants": [],
                "variables": [
                  "MDF_AttackDelta"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Tingyun_Eidolon2_CD"
              },
              "failed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_Rank02_SPAdd) || RETURN",
                    "displayLines": "MDF_Rank02_SPAdd",
                    "constants": [],
                    "variables": [
                      "MDF_Rank02_SPAdd"
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Tingyun_Eidolon2_CD"
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
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (MDF_Passive_DamagePercentage) || RETURN",
                      "displayLines": "MDF_Passive_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_Passive_DamagePercentage"
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
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "TingYun_PassiveFlag"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "TingYun_PassiveATK_Flag"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Current Action Target List}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (MDF_Passive_DamagePercentageSelf) || RETURN",
                      "displayLines": "MDF_Passive_DamagePercentageSelf",
                      "constants": [],
                      "variables": [
                        "MDF_Passive_DamagePercentageSelf"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "TingYun_PassiveATK_Flag"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Owner}}"
                    },
                    "modifier": "TingYun_ByIsTingYun"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "TingYun_PassiveATK_Flag"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Tingyun_Eidolon1_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                  "duration": 1,
                  "valuePerStack": {
                    "MDF_Eidolon1_SpeedUp_01": {
                      "operator": "Variables[0] (MDF_Rank01_SpeedUp) || RETURN",
                      "displayLines": "MDF_Rank01_SpeedUp",
                      "constants": [],
                      "variables": [
                        "MDF_Rank01_SpeedUp"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Passive_DamagePercentage",
        "MDF_Passive_DamagePercentageSelf",
        "MDF_Rank01_SpeedUp",
        "MDF_Rank02_SPAdd",
        "MDF_AttackDelta"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "TingYun_Passive_LeiLing_Eidolon1",
      "modifierFlags": [
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
                "target": "{{Modifier Holder}}"
              },
              "modifier": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackDelta) || RETURN",
                "displayLines": "MDF_AttackDelta",
                "constants": [],
                "variables": [
                  "MDF_AttackDelta"
                ]
              }
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
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (MDF_Passive_DamagePercentage) || RETURN",
                      "displayLines": "MDF_Passive_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_Passive_DamagePercentage"
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
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "TingYun_PassiveFlag"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "TingYun_PassiveATK_Flag"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Current Action Target List}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (MDF_Passive_DamagePercentageSelf) || RETURN",
                      "displayLines": "MDF_Passive_DamagePercentageSelf",
                      "constants": [],
                      "variables": [
                        "MDF_Passive_DamagePercentageSelf"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "TingYun_PassiveATK_Flag"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Owner}}"
                    },
                    "modifier": "TingYun_ByIsTingYun"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "TingYun_PassiveATK_Flag"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Tingyun_Eidolon1_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                  "duration": 1,
                  "valuePerStack": {
                    "MDF_Eidolon1_SpeedUp_01": {
                      "operator": "Variables[0] (MDF_Rank01_SpeedUp) || RETURN",
                      "displayLines": "MDF_Rank01_SpeedUp",
                      "constants": [],
                      "variables": [
                        "MDF_Rank01_SpeedUp"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Passive_DamagePercentage",
        "MDF_Passive_DamagePercentageSelf",
        "MDF_Rank01_SpeedUp",
        "MDF_AttackDelta"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "TingYun_Passive_LeiLing",
      "modifierFlags": [
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
                "target": "{{Modifier Holder}}"
              },
              "modifier": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackDelta) || RETURN",
                "displayLines": "MDF_AttackDelta",
                "constants": [],
                "variables": [
                  "MDF_AttackDelta"
                ]
              }
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
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (MDF_Passive_DamagePercentage) || RETURN",
                      "displayLines": "MDF_Passive_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_Passive_DamagePercentage"
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
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "TingYun_PassiveFlag"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "TingYun_PassiveATK_Flag"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Current Action Target List}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (MDF_Passive_DamagePercentageSelf) || RETURN",
                      "displayLines": "MDF_Passive_DamagePercentageSelf",
                      "constants": [],
                      "variables": [
                        "MDF_Passive_DamagePercentageSelf"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "TingYun_PassiveATK_Flag"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Action Owner}}"
                    },
                    "modifier": "TingYun_ByIsTingYun"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "TingYun_PassiveATK_Flag"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Passive_DamagePercentage",
        "MDF_Passive_DamagePercentageSelf",
        "MDF_AttackDelta"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Tingyun_Eidolon1_Ability03PreShowModifier",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": {
          "name": "Target Name",
          "target": "{{Modifier Holder}}"
        },
        "skillType": [
          "Ultimate"
        ],
        "conditions": {
          "name": "NOT",
          "condition": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "modifier": "Tingyun_Eidolon1_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
          }
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0.2(SPD Change)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "MWTingYun_BPAbility_AttackDelta[<span class=\"descriptionNumberColor\">Benediction</span>]",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "TingYun_Passive_LeiLing"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "TingYun_Passive_LeiLing_Eidolon1"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "TingYun_Passive_LeiLing_Eidolon2"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "TingYun_Passive_LeiLing_Eidolon4"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "TingYun_EnergyBarLayer",
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (TingYun_EnergyBarLayer) || RETURN",
                "displayLines": "TingYun_EnergyBarLayer",
                "constants": [],
                "variables": [
                  "TingYun_EnergyBarLayer"
                ]
              },
              "maximum": 3,
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Tingyun_Eidolon1_Ability03PreShowModifier"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Rank01_Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackDelta</span> points. Gains SPD Boost after using Ultimate."
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Tingyun_Eidolon1_Ability03PreShowModifier"
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_LifeTime",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Living/Death State",
                    "state": "Mask_AliveOnly"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "MWTingYun_BPAbility_AttackDelta_LifeTimeChangeMark",
                      "referenceModifier": "MReference_Empty"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AttackDelta",
        "MDF_Rank01_SpeedUp",
        "MDF_Rank01_Count"
      ],
      "latentQueue": [],
      "description": "ATK +<span class=\"descriptionNumberColor\">MDF_AttackDelta</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Benediction"
    }
  ],
  "references": []
}