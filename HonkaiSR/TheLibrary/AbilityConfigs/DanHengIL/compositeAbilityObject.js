const compositeAbilityObject = {
  "fullCharacterName": "Dan Heng • Imbibitor Lunae",
  "trimCharacterName": "DanHengIL",
  "abilityList": [
    "DanHengIL_DanHengIL_Trace03",
    "DanHengIL_DanHengIL_Trace02",
    "DanHengIL_DanHengIL_TechniqueInLevel",
    "DanHengIL_DanHengIL_PassiveAbility01",
    "DanHengIL_DanHengIL_Ability03_Part02",
    "DanHengIL_DanHengIL_Ability03_Part01",
    "DanHengIL_DanHengIL_Ability03_EnterReady",
    "DanHengIL_DanHengIL_Ability21_Part02",
    "DanHengIL_DanHengIL_Ability21_Part01",
    "DanHengIL_DanHengIL_Ability02_Part02",
    "DanHengIL_DanHengIL_Ability02_Part01",
    "DanHengIL_DanHengIL_Ability13_Part02",
    "DanHengIL_DanHengIL_Ability13_Part01",
    "DanHengIL_DanHengIL_Ability12_Part02",
    "DanHengIL_DanHengIL_Ability12_Part01",
    "DanHengIL_DanHengIL_Ability11_Part02",
    "DanHengIL_DanHengIL_Ability11_Part01",
    "DanHengIL_DanHengIL_Ability01_Part02",
    "DanHengIL_DanHengIL_Ability01_Part01",
    "DanHengIL_Modifiers"
  ],
  "abilityObject": {
    "DanHengIL_DanHengIL_Trace03": {
      "fileName": "DanHengIL_DanHengIL_Trace03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_Trace03"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "DanHengIL_Trace03",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "DamageType": "Imaginary"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                          "value": "0.24"
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
    },
    "DanHengIL_DanHengIL_Trace02": {
      "fileName": "DanHengIL_DanHengIL_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_Trace02_Resistance",
          "valuePerStack": {
            "MDF_Resistance": {
              "operator": "Variables[0] (0.35) || RETURN",
              "displayLines": "0.35",
              "constants": [],
              "variables": [
                0.35
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "DanHengIL_Trace02_Resistance",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": {
                    "operator": "Variables[0] (MDF_Resistance) || RETURN",
                    "displayLines": "MDF_Resistance",
                    "constants": [],
                    "variables": [
                      "MDF_Resistance"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_Resistance"
          ],
          "latentQueue": []
        }
      ]
    },
    "DanHengIL_DanHengIL_TechniqueInLevel": {
      "fileName": "DanHengIL_DanHengIL_TechniqueInLevel",
      "childAbilityList": [
        "DanHengIL_DanHengIL_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "StageAbility_Maze_DanHengIL_Modifier"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "StageAbility_Maze_DanHengILDamage_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_DanHengILDamage_Modifier",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Technique Modifies Current Wave"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Imaginary",
                        "Damage": {
                          "operator": "Variables[0] (1.2) || RETURN",
                          "displayLines": "1.2",
                          "constants": [],
                          "variables": [
                            1.2
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Technique",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ]
                },
                "Trigger: Attack End"
              ],
              "priorityLevel": -60
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_DanHengIL_Modifier",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Technique Modifies Current Wave"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "BPExChange",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      }
                    },
                    {
                      "name": "Modify Skill-Point Extras",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "function": "Set",
                      "value": {
                        "operator": "Variables[0] (BPExChange) || RETURN",
                        "displayLines": "BPExChange",
                        "constants": [],
                        "variables": [
                          "BPExChange"
                        ]
                      },
                      "silentChange": true
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (BPExChange) || RETURN",
                        "displayLines": "BPExChange",
                        "constants": [],
                        "variables": [
                          "BPExChange"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "assignState": "False",
                      "bar#": 6,
                      "cooldown": 0
                    },
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "DanHengIL_BPCostChange[<span class=\"descriptionNumberColor\">Squama Sacrosancta</span>]",
                      "value": {
                        "operator": "Variables[0] (BPExChange) || RETURN",
                        "displayLines": "BPExChange",
                        "constants": [],
                        "variables": [
                          "BPExChange"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "DanHengIL_BPCostChange[<span class=\"descriptionNumberColor\">Squama Sacrosancta</span>]",
                      "counter": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "valuePerStack": {
                        "MDF_BPExChange": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        },
                        "MDF_MaxLayer": {
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
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "DanHengIL_DanHengIL_PassiveAbility01": {
      "fileName": "DanHengIL_DanHengIL_PassiveAbility01",
      "childAbilityList": [
        "DanHengIL_DanHengIL_PassiveAbility01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Read Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "BPExChange",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Ability03PreShowModifier"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_PassiveModifier"
        },
        {
          "name": "Modify Skill-Point Extras",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "function": "Set",
          "value": 0,
          "silentChange": true
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "assignState": "False",
          "bar#": 6,
          "cooldown": 0
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
              "variableName": "SkillRank_Rank04_LifeTime",
              "value": 2
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SkillRank_Rank04_LifeTime",
              "value": 1
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
              "modifier": "DanHengIL_Eidolon6"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "DanHengIL_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">Righteous Heart</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "modifierName": "DanHengIL_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">Righteous Heart</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> stack(s).",
          "type": "Buff",
          "statusName": "Righteous Heart",
          "duration": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "DanHengIL_PassiveModifier",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "BPNeed",
                  "value": {
                    "operator": "Variables[0] (EXSkill01) || RETURN",
                    "displayLines": "EXSkill01",
                    "constants": [],
                    "variables": [
                      "EXSkill01"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurrentSkillPoints",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (BPNeed) || RETURN",
                      "displayLines": "BPNeed",
                      "constants": [],
                      "variables": [
                        "BPNeed"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "DanHengIL_BPDisable"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "DanHengIL_BPDisable"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Controlled Action [Owner]: End"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AddMaxLayer",
                      "value": {
                        "operator": "Variables[0] (4) || RETURN",
                        "displayLines": "4",
                        "constants": [],
                        "variables": [
                          4
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AddLayer",
                      "value": 2
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
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "DanHengIL_BPCost_1"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "DanHengIL_BPCost_2"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "DanHengIL_BPCost_3"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EXSkill01",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End"
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
                        "name": "Trace Activated",
                        "conditionList": "Star Veil"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (15) || RETURN",
                        "displayLines": "15",
                        "constants": [],
                        "variables": [
                          15
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar"
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  }
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "Flag_AttackCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 99,
                  "whenEnteringRange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "DanHengIL_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">Righteous Heart</span>]",
                      "duration": 1,
                      "stackLimit": {
                        "operator": "Variables[0] (6) || Variables[1] (AddMaxLayer) || ADD || RETURN",
                        "displayLines": "(6 + AddMaxLayer)",
                        "constants": [],
                        "variables": [
                          6,
                          "AddMaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.1) || RETURN",
                          "displayLines": "0.1",
                          "constants": [],
                          "variables": [
                            0.1
                          ]
                        },
                        "MDF_MaxLayer": {
                          "operator": "Variables[0] (6) || Variables[1] (AddMaxLayer) || ADD || RETURN",
                          "displayLines": "(6 + AddMaxLayer)",
                          "constants": [],
                          "variables": [
                            6,
                            "AddMaxLayer"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (AddLayer) || RETURN",
                        "displayLines": "AddLayer",
                        "constants": [],
                        "variables": [
                          "AddLayer"
                        ]
                      }
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "DanHengIL_AllDamageTypeAddedRatio[<span class=\"descriptionNumberColor\">Righteous Heart</span>]",
                      "duration": 1,
                      "stackLimit": {
                        "operator": "Variables[0] (6) || Variables[1] (AddMaxLayer) || ADD || RETURN",
                        "displayLines": "(6 + AddMaxLayer)",
                        "constants": [],
                        "variables": [
                          6,
                          "AddMaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.1) || RETURN",
                          "displayLines": "0.1",
                          "constants": [],
                          "variables": [
                            0.1
                          ]
                        },
                        "MDF_MaxLayer": {
                          "operator": "Variables[0] (6) || Variables[1] (AddMaxLayer) || ADD || RETURN",
                          "displayLines": "(6 + AddMaxLayer)",
                          "constants": [],
                          "variables": [
                            6,
                            "AddMaxLayer"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (AddLayer) || RETURN",
                        "displayLines": "AddLayer",
                        "constants": [],
                        "variables": [
                          "AddLayer"
                        ]
                      }
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
          "for": "Ability03PreShowModifier",
          "stackData": [],
          "latentQueue": [],
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
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": -1
            }
          }
        }
      ]
    },
    "DanHengIL_DanHengIL_Ability03_Part02": {
      "fileName": "DanHengIL_DanHengIL_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": 0
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "HitSplit": 0.3,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": 2,
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "DanHengIL_Ability03Target",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (1.4) || RETURN",
                      "displayLines": "1.4",
                      "constants": [],
                      "variables": [
                        1.4
                      ]
                    },
                    "HitSplit": 0.3,
                    "Toughness": {
                      "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                      "displayLines": "Blast Toughness Value",
                      "constants": [],
                      "variables": [
                        "Blast Toughness Value"
                      ]
                    },
                    "Tags": null
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "DanHengIL_Ability03Target"
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": {
            "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Flag_AttackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Flag_AttackCount"
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "DanHengIL_Ability03Target"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "HitSplit": 0.3,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": 2,
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "DanHengIL_Ability03Target",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (1.4) || RETURN",
                      "displayLines": "1.4",
                      "constants": [],
                      "variables": [
                        1.4
                      ]
                    },
                    "HitSplit": 0.3,
                    "Toughness": {
                      "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                      "displayLines": "Blast Toughness Value",
                      "constants": [],
                      "variables": [
                        "Blast Toughness Value"
                      ]
                    },
                    "Tags": null
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "DanHengIL_Ability03Target"
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": {
            "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Flag_AttackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Flag_AttackCount"
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "DanHengIL_Ability03Target"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
              ]
            },
            "HitSplit": 0.4,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1.4) || RETURN",
              "displayLines": "1.4",
              "constants": [],
              "variables": [
                1.4
              ]
            },
            "HitSplit": 0.4,
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": {
            "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Flag_AttackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Flag_AttackCount"
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "DanHengIL_Ability03Target"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "BPExChange",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(2 + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  2
                ]
              }
            },
            {
              "name": "Modify Skill-Point Extras",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "function": "Set",
              "value": {
                "operator": "Variables[0] (BPExChange) || RETURN",
                "displayLines": "BPExChange",
                "constants": [],
                "variables": [
                  "BPExChange"
                ]
              },
              "silentChange": true
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (BPExChange) || RETURN",
                "displayLines": "BPExChange",
                "constants": [],
                "variables": [
                  "BPExChange"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "assignState": "False",
              "bar#": 6,
              "cooldown": 0
            },
            {
              "name": "Define Modifier Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifierName": "DanHengIL_BPCostChange[<span class=\"descriptionNumberColor\">Squama Sacrosancta</span>]",
              "value": {
                "operator": "Variables[0] (BPExChange) || RETURN",
                "displayLines": "BPExChange",
                "constants": [],
                "variables": [
                  "BPExChange"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "DanHengIL_BPCostChange[<span class=\"descriptionNumberColor\">Squama Sacrosancta</span>]",
              "counter": {
                "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(2 + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_BPExChange": {
                  "operator": "Variables[0] (2) || Constants[0] (1) || ADD || RETURN",
                  "displayLines": "(2 + 1)",
                  "constants": [
                    1
                  ],
                  "variables": [
                    2
                  ]
                },
                "MDF_MaxLayer": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                }
              }
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "advanceType": "Advance",
              "value": -1
            }
          ],
          "failed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "BPExChange",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
              "name": "Modify Skill-Point Extras",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "function": "Set",
              "value": {
                "operator": "Variables[0] (BPExChange) || RETURN",
                "displayLines": "BPExChange",
                "constants": [],
                "variables": [
                  "BPExChange"
                ]
              },
              "silentChange": true
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (BPExChange) || RETURN",
                "displayLines": "BPExChange",
                "constants": [],
                "variables": [
                  "BPExChange"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "assignState": "False",
              "bar#": 6,
              "cooldown": 0
            },
            {
              "name": "Define Modifier Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifierName": "DanHengIL_BPCostChange[<span class=\"descriptionNumberColor\">Squama Sacrosancta</span>]",
              "value": {
                "operator": "Variables[0] (BPExChange) || RETURN",
                "displayLines": "BPExChange",
                "constants": [],
                "variables": [
                  "BPExChange"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "DanHengIL_BPCostChange[<span class=\"descriptionNumberColor\">Squama Sacrosancta</span>]",
              "counter": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_BPExChange": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                },
                "MDF_MaxLayer": {
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
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "DanHengIL_Ability03Target",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "DanHengIL_DanHengIL_Ability03_Part01": {
      "fileName": "DanHengIL_DanHengIL_Ability03_Part01",
      "childAbilityList": [
        "DanHengIL_DanHengIL_Ability03_Camera",
        "DanHengIL_DanHengIL_Ability03_EnterReady",
        "DanHengIL_DanHengIL_Ability03_Part01",
        "DanHengIL_DanHengIL_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        20,
        0,
        20
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "DanHengIL_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "DanHengIL_DanHengIL_Ability03_EnterReady": {
      "fileName": "DanHengIL_DanHengIL_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "DanHengIL_DanHengIL_Ability21_Part02": {
      "fileName": "DanHengIL_DanHengIL_Ability21_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "EXSkill01",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_BPCost_1"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_BPCost_2"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_BPCost_3"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_CancelAbility"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_BPDisable"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "DanHengIL_DanHengIL_Ability21_Part01": {
      "fileName": "DanHengIL_DanHengIL_Ability21_Part01",
      "childAbilityList": [
        "DanHengIL_DanHengIL_Ability21_Part01",
        "DanHengIL_DanHengIL_Ability21_Part02"
      ],
      "skillTrigger": "Skill21",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "DanHengIL_Ability21_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "DanHengIL_DanHengIL_Ability02_Part02": {
      "fileName": "DanHengIL_DanHengIL_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "EXSkill01",
          "value": {
            "operator": "Variables[0] (EXSkill01) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(EXSkill01 + 1)",
            "constants": [
              1
            ],
            "variables": [
              "EXSkill01"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "EXSkill01",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "DanHengIL_BPCost_1"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "DanHengIL_CancelAbility"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "EXSkill01",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "DanHengIL_BPCost_2"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "EXSkill01",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "DanHengIL_BPCost_3"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "BPNeed",
          "value": {
            "operator": "Variables[0] (EXSkill01) || RETURN",
            "displayLines": "EXSkill01",
            "constants": [],
            "variables": [
              "EXSkill01"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentSkillPoints",
            "compareType": ">",
            "value2": {
              "operator": "Variables[0] (BPNeed) || RETURN",
              "displayLines": "BPNeed",
              "constants": [],
              "variables": [
                "BPNeed"
              ]
            }
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "DanHengIL_BPDisable"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "DanHengIL_BPDisable"
            }
          ]
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "DanHengIL_CancelAbility",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "skillSlot": "Basic ATK",
                  "enableSecondaryType": "ControlSkill04"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill21",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill04"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "DanHengIL_BPCost_3",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Properties",
                  "abilityTagList": [
                    "Skill13"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Reset to Default"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "DanHengIL_CancelAbility"
                },
                {
                  "name": "Update Displayed Energy Bar"
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
                  "abilityTypes": null,
                  "extraText": "Basic ATK has been Enhanced to its max capacity",
                  "controlTypes": [
                    "ControlSkill02"
                  ]
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill13",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Properties",
                  "abilityTagList": [
                    "Skill13"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Remove",
                      "value": 3
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "activeCount": 3
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "DanHengIL_BPCost_2",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Properties",
                  "abilityTagList": [
                    "Skill12"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Reset to Default"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "DanHengIL_CancelAbility"
                },
                {
                  "name": "Update Displayed Energy Bar"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill12",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Properties",
                  "abilityTagList": [
                    "Skill12"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Remove",
                      "value": 2
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "activeCount": 2
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "DanHengIL_BPCost_1",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Properties",
                  "abilityTagList": [
                    "Skill11"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Reset to Default"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "DanHengIL_CancelAbility"
                },
                {
                  "name": "Update Displayed Energy Bar"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill11",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Properties",
                  "abilityTagList": [
                    "Skill11"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Remove",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "activeCount": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "DanHengIL_DanHengIL_Ability02_Part01": {
      "fileName": "DanHengIL_DanHengIL_Ability02_Part01",
      "childAbilityList": [
        "DanHengIL_DanHengIL_Ability02_Camera01",
        "DanHengIL_DanHengIL_Ability02_Camera02",
        "DanHengIL_DanHengIL_Ability02_Camera03",
        "DanHengIL_DanHengIL_Ability02_Part01",
        "DanHengIL_DanHengIL_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "EXSkill01",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "EXSkill01",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                "Deleted bullshit"
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "EXSkill01",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    "Deleted bullshit"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "DanHengIL_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "DanHengIL_DanHengIL_Ability13_Part02": {
      "fileName": "DanHengIL_DanHengIL_Ability13_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Update Displayed Energy Bar"
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "BPExChange",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": -3
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "BPExChange",
            "compareType": "<=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (BPExChange) || RETURN",
                "displayLines": "BPExChange",
                "constants": [],
                "variables": [
                  "BPExChange"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "assignState": "False",
              "bar#": 6,
              "cooldown": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "DanHengIL_BPCostChange[<span class=\"descriptionNumberColor\">Squama Sacrosancta</span>]"
            }
          ],
          "failed": [
            {
              "name": "Define Modifier Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifierName": "DanHengIL_BPCostChange[<span class=\"descriptionNumberColor\">Squama Sacrosancta</span>]",
              "value": {
                "operator": "Variables[0] (BPExChange) || RETURN",
                "displayLines": "BPExChange",
                "constants": [],
                "variables": [
                  "BPExChange"
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (BPExChange) || RETURN",
                "displayLines": "BPExChange",
                "constants": [],
                "variables": [
                  "BPExChange"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "assignState": "False",
              "bar#": 6,
              "cooldown": 0
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": 0
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (5) || Constants[0] (0.142) || MUL || RETURN",
              "displayLines": "(5 * 0.142)",
              "constants": [
                0.142
              ],
              "variables": [
                5
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.142) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.142)",
              "constants": [
                0.142
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "14%"
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": {
            "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Flag_AttackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Flag_AttackCount"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (5) || Constants[0] (0.142) || MUL || RETURN",
              "displayLines": "(5 * 0.142)",
              "constants": [
                0.142
              ],
              "variables": [
                5
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.142) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.142)",
              "constants": [
                0.142
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "14%"
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": {
            "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Flag_AttackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Flag_AttackCount"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (5) || Constants[0] (0.142) || MUL || RETURN",
              "displayLines": "(5 * 0.142)",
              "constants": [
                0.142
              ],
              "variables": [
                5
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.142) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.142)",
              "constants": [
                0.142
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "14%"
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": {
            "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Flag_AttackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Flag_AttackCount"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_Ability02_CriticalDamage[<span class=\"descriptionNumberColor\">Outroar</span>]",
          "duration": {
            "operator": "Variables[0] (SkillRank_Rank04_LifeTime) || RETURN",
            "displayLines": "SkillRank_Rank04_LifeTime",
            "constants": [],
            "variables": [
              "SkillRank_Rank04_LifeTime"
            ]
          },
          "immediateEffect": true,
          "stackLimit": {
            "operator": "Variables[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [],
            "variables": [
              4
            ]
          },
          "valuePerStack": {
            "MDF_AddCriticalDamage": {
              "operator": "Variables[0] (0.12) || RETURN",
              "displayLines": "0.12",
              "constants": [],
              "variables": [
                0.12
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] (4) || RETURN",
              "displayLines": "4",
              "constants": [],
              "variables": [
                4
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (5) || Constants[0] (0.142) || MUL || RETURN",
              "displayLines": "(5 * 0.142)",
              "constants": [
                0.142
              ],
              "variables": [
                5
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.142) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.142)",
              "constants": [
                0.142
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "14%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1.8) || RETURN",
              "displayLines": "1.8",
              "constants": [],
              "variables": [
                1.8
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": {
            "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Flag_AttackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Flag_AttackCount"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_Ability02_CriticalDamage[<span class=\"descriptionNumberColor\">Outroar</span>]",
          "duration": {
            "operator": "Variables[0] (SkillRank_Rank04_LifeTime) || RETURN",
            "displayLines": "SkillRank_Rank04_LifeTime",
            "constants": [],
            "variables": [
              "SkillRank_Rank04_LifeTime"
            ]
          },
          "immediateEffect": true,
          "stackLimit": {
            "operator": "Variables[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [],
            "variables": [
              4
            ]
          },
          "valuePerStack": {
            "MDF_AddCriticalDamage": {
              "operator": "Variables[0] (0.12) || RETURN",
              "displayLines": "0.12",
              "constants": [],
              "variables": [
                0.12
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] (4) || RETURN",
              "displayLines": "4",
              "constants": [],
              "variables": [
                4
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (5) || Constants[0] (0.142) || MUL || RETURN",
              "displayLines": "(5 * 0.142)",
              "constants": [
                0.142
              ],
              "variables": [
                5
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.142) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.142)",
              "constants": [
                0.142
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1.8) || RETURN",
              "displayLines": "1.8",
              "constants": [],
              "variables": [
                1.8
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": {
            "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Flag_AttackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Flag_AttackCount"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_Ability02_CriticalDamage[<span class=\"descriptionNumberColor\">Outroar</span>]",
          "duration": {
            "operator": "Variables[0] (SkillRank_Rank04_LifeTime) || RETURN",
            "displayLines": "SkillRank_Rank04_LifeTime",
            "constants": [],
            "variables": [
              "SkillRank_Rank04_LifeTime"
            ]
          },
          "immediateEffect": true,
          "stackLimit": {
            "operator": "Variables[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [],
            "variables": [
              4
            ]
          },
          "valuePerStack": {
            "MDF_AddCriticalDamage": {
              "operator": "Variables[0] (0.12) || RETURN",
              "displayLines": "0.12",
              "constants": [],
              "variables": [
                0.12
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] (4) || RETURN",
              "displayLines": "4",
              "constants": [],
              "variables": [
                4
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (5) || Constants[0] (0.142) || MUL || RETURN",
              "displayLines": "(5 * 0.142)",
              "constants": [
                0.142
              ],
              "variables": [
                5
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.142) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.142)",
              "constants": [
                0.142
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "14%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1.8) || RETURN",
              "displayLines": "1.8",
              "constants": [],
              "variables": [
                1.8
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": {
            "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Flag_AttackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Flag_AttackCount"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_Ability02_CriticalDamage[<span class=\"descriptionNumberColor\">Outroar</span>]",
          "duration": {
            "operator": "Variables[0] (SkillRank_Rank04_LifeTime) || RETURN",
            "displayLines": "SkillRank_Rank04_LifeTime",
            "constants": [],
            "variables": [
              "SkillRank_Rank04_LifeTime"
            ]
          },
          "immediateEffect": true,
          "stackLimit": {
            "operator": "Variables[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [],
            "variables": [
              4
            ]
          },
          "valuePerStack": {
            "MDF_AddCriticalDamage": {
              "operator": "Variables[0] (0.12) || RETURN",
              "displayLines": "0.12",
              "constants": [],
              "variables": [
                0.12
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] (4) || RETURN",
              "displayLines": "4",
              "constants": [],
              "variables": [
                4
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (5) || Constants[0] (0.148) || MUL || RETURN",
              "displayLines": "(5 * 0.148)",
              "constants": [
                0.148
              ],
              "variables": [
                5
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.148) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.148)",
              "constants": [
                0.148
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "15%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1.8) || RETURN",
              "displayLines": "1.8",
              "constants": [],
              "variables": [
                1.8
              ]
            },
            "HitSplit": 0.25,
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": {
            "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Flag_AttackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Flag_AttackCount"
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_BPCost_1"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_BPCost_2"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_BPCost_3"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "EXSkill01",
          "value": 0
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "DanHengIL_DanHengIL_Ability13_Part01": {
      "fileName": "DanHengIL_DanHengIL_Ability13_Part01",
      "childAbilityList": [
        "DanHengIL_DanHengIL_Ability13_Camera",
        "DanHengIL_DanHengIL_Ability13_Part01",
        "DanHengIL_DanHengIL_Ability13_Part02"
      ],
      "skillTrigger": "Skill13",
      "abilityType": "Basic ATK",
      "energy": 40,
      "toughnessList": [
        40,
        0,
        20
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "DanHengIL_Ability13_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "DanHengIL_DanHengIL_Ability12_Part02": {
      "fileName": "DanHengIL_DanHengIL_Ability12_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Update Displayed Energy Bar"
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "BPExChange",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": -2
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "BPExChange",
            "compareType": "<=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (BPExChange) || RETURN",
                "displayLines": "BPExChange",
                "constants": [],
                "variables": [
                  "BPExChange"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "assignState": "False",
              "bar#": 6,
              "cooldown": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "DanHengIL_BPCostChange[<span class=\"descriptionNumberColor\">Squama Sacrosancta</span>]"
            }
          ],
          "failed": [
            {
              "name": "Define Modifier Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifierName": "DanHengIL_BPCostChange[<span class=\"descriptionNumberColor\">Squama Sacrosancta</span>]",
              "value": {
                "operator": "Variables[0] (BPExChange) || RETURN",
                "displayLines": "BPExChange",
                "constants": [],
                "variables": [
                  "BPExChange"
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (BPExChange) || RETURN",
                "displayLines": "BPExChange",
                "constants": [],
                "variables": [
                  "BPExChange"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "assignState": "False",
              "bar#": 6,
              "cooldown": 0
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": 0
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (3.8) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(3.8 * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                3.8
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": {
            "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Flag_AttackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Flag_AttackCount"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (3.8) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(3.8 * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                3.8
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": {
            "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Flag_AttackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Flag_AttackCount"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (3.8) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(3.8 * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                3.8
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": {
            "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Flag_AttackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Flag_AttackCount"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_Ability02_CriticalDamage[<span class=\"descriptionNumberColor\">Outroar</span>]",
          "duration": {
            "operator": "Variables[0] (SkillRank_Rank04_LifeTime) || RETURN",
            "displayLines": "SkillRank_Rank04_LifeTime",
            "constants": [],
            "variables": [
              "SkillRank_Rank04_LifeTime"
            ]
          },
          "immediateEffect": true,
          "stackLimit": {
            "operator": "Variables[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [],
            "variables": [
              4
            ]
          },
          "valuePerStack": {
            "MDF_AddCriticalDamage": {
              "operator": "Variables[0] (0.12) || RETURN",
              "displayLines": "0.12",
              "constants": [],
              "variables": [
                0.12
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] (4) || RETURN",
              "displayLines": "4",
              "constants": [],
              "variables": [
                4
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (3.8) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(3.8 * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                3.8
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": 2,
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "DanHengIL_Ability12Target",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
                      ]
                    },
                    "HitSplit": 0.5,
                    "Toughness": {
                      "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                      "displayLines": "Blast Toughness Value",
                      "constants": [],
                      "variables": [
                        "Blast Toughness Value"
                      ]
                    },
                    "Tags": null
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "DanHengIL_Ability12Target"
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": {
            "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Flag_AttackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Flag_AttackCount"
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "DanHengIL_Ability12Target"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_Ability02_CriticalDamage[<span class=\"descriptionNumberColor\">Outroar</span>]",
          "duration": {
            "operator": "Variables[0] (SkillRank_Rank04_LifeTime) || RETURN",
            "displayLines": "SkillRank_Rank04_LifeTime",
            "constants": [],
            "variables": [
              "SkillRank_Rank04_LifeTime"
            ]
          },
          "immediateEffect": true,
          "stackLimit": {
            "operator": "Variables[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [],
            "variables": [
              4
            ]
          },
          "valuePerStack": {
            "MDF_AddCriticalDamage": {
              "operator": "Variables[0] (0.12) || RETURN",
              "displayLines": "0.12",
              "constants": [],
              "variables": [
                0.12
              ]
            },
            "MDF_MaxLayer": {
              "operator": "Variables[0] (4) || RETURN",
              "displayLines": "4",
              "constants": [],
              "variables": [
                4
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (3.8) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(3.8 * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                3.8
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.2) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.2)",
              "constants": [
                0.2
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "maxTargets": 1,
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "DanHengIL_Ability12Target"
            }
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (0.6) || RETURN",
                  "displayLines": "0.6",
                  "constants": [],
                  "variables": [
                    0.6
                  ]
                },
                "HitSplit": 0.5,
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "DanHengIL_Ability12Target"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "maxTargets": 1,
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "DanHengIL_Ability12Target"
            }
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (0.6) || RETURN",
                  "displayLines": "0.6",
                  "constants": [],
                  "variables": [
                    0.6
                  ]
                },
                "HitSplit": 0.5,
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": {
            "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Flag_AttackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Flag_AttackCount"
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "DanHengIL_Ability12Target"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_BPCost_1"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_BPCost_2"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_BPCost_3"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "EXSkill01",
          "value": 0
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "DanHengIL_Ability12Target",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "DanHengIL_DanHengIL_Ability12_Part01": {
      "fileName": "DanHengIL_DanHengIL_Ability12_Part01",
      "childAbilityList": [
        "DanHengIL_DanHengIL_Ability12_Camera",
        "DanHengIL_DanHengIL_Ability12_Part01",
        "DanHengIL_DanHengIL_Ability12_Part02"
      ],
      "skillTrigger": "Skill12",
      "abilityType": "Basic ATK",
      "energy": 35,
      "toughnessList": [
        30,
        0,
        10
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "DanHengIL_Ability12_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "DanHengIL_DanHengIL_Ability11_Part02": {
      "fileName": "DanHengIL_DanHengIL_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Update Displayed Energy Bar"
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "BPExChange",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": -1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "BPExChange",
            "compareType": "<=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (BPExChange) || RETURN",
                "displayLines": "BPExChange",
                "constants": [],
                "variables": [
                  "BPExChange"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "assignState": "False",
              "bar#": 6,
              "cooldown": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "DanHengIL_BPCostChange[<span class=\"descriptionNumberColor\">Squama Sacrosancta</span>]"
            }
          ],
          "failed": [
            {
              "name": "Define Modifier Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifierName": "DanHengIL_BPCostChange[<span class=\"descriptionNumberColor\">Squama Sacrosancta</span>]",
              "value": {
                "operator": "Variables[0] (BPExChange) || RETURN",
                "displayLines": "BPExChange",
                "constants": [],
                "variables": [
                  "BPExChange"
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (BPExChange) || RETURN",
                "displayLines": "BPExChange",
                "constants": [],
                "variables": [
                  "BPExChange"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "assignState": "False",
              "bar#": 6,
              "cooldown": 0
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": 0
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (2.6) || RETURN",
              "displayLines": "2.6",
              "constants": [],
              "variables": [
                2.6
              ]
            },
            "HitSplit": 0.33,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": {
            "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Flag_AttackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Flag_AttackCount"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (2.6) || RETURN",
              "displayLines": "2.6",
              "constants": [],
              "variables": [
                2.6
              ]
            },
            "HitSplit": 0.33,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": {
            "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Flag_AttackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Flag_AttackCount"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (2.6) || RETURN",
              "displayLines": "2.6",
              "constants": [],
              "variables": [
                2.6
              ]
            },
            "HitSplit": 0.34,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": {
            "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Flag_AttackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Flag_AttackCount"
            ]
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_BPCost_1"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_BPCost_2"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "DanHengIL_BPCost_3"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "EXSkill01",
          "value": 0
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "DanHengIL_DanHengIL_Ability11_Part01": {
      "fileName": "DanHengIL_DanHengIL_Ability11_Part01",
      "childAbilityList": [
        "DanHengIL_DanHengIL_Ability11_Camera",
        "DanHengIL_DanHengIL_Ability11_Part01",
        "DanHengIL_DanHengIL_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "DanHengIL_Ability11_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "DanHengIL_DanHengIL_Ability01_Part02": {
      "fileName": "DanHengIL_DanHengIL_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": 0
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "HitSplit": 0.3,
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": {
            "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Flag_AttackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Flag_AttackCount"
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.7,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "variableName": "Flag_AttackCount",
          "value": {
            "operator": "Variables[0] (Flag_AttackCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Flag_AttackCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Flag_AttackCount"
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "DanHengIL_DanHengIL_Ability01_Part01": {
      "fileName": "DanHengIL_DanHengIL_Ability01_Part01",
      "childAbilityList": [
        "DanHengIL_DanHengIL_Ability01_Camera",
        "DanHengIL_DanHengIL_Ability01_Part01",
        "DanHengIL_DanHengIL_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "DanHengIL_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "DanHengIL_Modifiers": {
      "fileName": "DanHengIL_Modifiers",
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
          "for": "DanHengIL_CancelCamera",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Active Ability Chosen [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "DanHengIL_CancelCameraFlag"
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
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "DanHengIL_Eidolon6_ImaginaryPenetrate[<span class=\"descriptionNumberColor\">Reign, Returned</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill13"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceImaginaryPEN</span>&nbsp;",
                          "value": "(MDF_PropertyValue * MDF_Layer)"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill13"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "description": "Increase Imaginary RES PEN by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> for this character's next Fulgurant Leap attack.",
          "type": "Buff",
          "effectName": "Imaginary RES PEN",
          "statusName": "Reign, Returned",
          "stackLimit": 3,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "DanHengIL_Eidolon6",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "mustBeAlive2": true,
                        "invertCondition": true
                      },
                      {
                        "name": "Is Teammate",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
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
                      "modifier": "DanHengIL_Eidolon6_ImaginaryPenetrate[<span class=\"descriptionNumberColor\">Reign, Returned</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
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
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "DanHengIL_BPDisable",
          "stackType": "ReplaceByCaster",
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
                  "abilityTypes": null,
                  "extraText": "Insufficient Skill Points. Cannot Enhance",
                  "controlTypes": [
                    "ControlSkill02"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Skill Point Changes",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "BPNeed",
                  "value": {
                    "operator": "Variables[0] (EXSkill01) || RETURN",
                    "displayLines": "EXSkill01",
                    "constants": [],
                    "variables": [
                      "EXSkill01"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurrentSkillPoints",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (BPNeed) || RETURN",
                      "displayLines": "BPNeed",
                      "constants": [],
                      "variables": [
                        "BPNeed"
                      ]
                    }
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "BPNeed",
                  "value": {
                    "operator": "Variables[0] (EXSkill01) || RETURN",
                    "displayLines": "EXSkill01",
                    "constants": [],
                    "variables": [
                      "EXSkill01"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CurrentSkillPoints",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (BPNeed) || RETURN",
                      "displayLines": "BPNeed",
                      "constants": [],
                      "variables": [
                        "BPNeed"
                      ]
                    }
                  },
                  "passed": [
                    "Modifier Deletes Itself"
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
          "for": "DanHengIL_Ability02_CriticalDamage[<span class=\"descriptionNumberColor\">Outroar</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "CurrentLayer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AddCriticalDamage) || Variables[1] (CurrentLayer) || MUL || RETURN",
                    "displayLines": "(MDF_AddCriticalDamage * CurrentLayer)",
                    "constants": [],
                    "variables": [
                      "MDF_AddCriticalDamage",
                      "CurrentLayer"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AddCriticalDamage",
            "MDF_MaxLayer"
          ],
          "latentQueue": [],
          "description": "Each stack increases CRIT DMG dealt by <span class=\"descriptionNumberColor\">MDF_AddCriticalDamage</span>, up to <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> stack(s).",
          "type": "Buff",
          "statusName": "Outroar",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "DanHengIL_BPCostChange[<span class=\"descriptionNumberColor\">Squama Sacrosancta</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [
            "MDF_BPExChange",
            "MDF_MaxLayer"
          ],
          "latentQueue": [],
          "description": "Can be used to offset Dan Heng • Imbibitor Lunae's consumption of skill points. A maximum of <span class=\"descriptionNumberColor\">MDF_MaxLayer</span> Squama Sacrosancta can be possessed at any given time. Consuming Squama Sacrosancta is considered equivalent to consuming Skill Points.",
          "type": "Other",
          "statusName": "Squama Sacrosancta"
        }
      ],
      "references": []
    }
  }
}