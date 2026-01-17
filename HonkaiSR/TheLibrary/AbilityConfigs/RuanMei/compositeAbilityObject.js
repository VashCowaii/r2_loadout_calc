const compositeAbilityObject = {
  "fullCharacterName": "Ruan Mei",
  "trimCharacterName": "RuanMei",
  "abilityList": [
    "RuanMei_RuanMei_TechniqueInRougeLevel",
    "RuanMei_RuanMei_TechniqueInLevel_Insert",
    "RuanMei_RuanMei_TechniqueInLevel",
    "RuanMei_RuanMei_TriggerImprintEffect",
    "RuanMei_RuanMei_PassiveAbility01",
    "RuanMei_RuanMei_Ability03_Part02",
    "RuanMei_RuanMei_Ability03_Part01",
    "RuanMei_RuanMei_Ability03_EnterReady",
    "RuanMei_RuanMei_Ability02_Part02",
    "RuanMei_RuanMei_Ability02_Part01",
    "RuanMei_RuanMei_Ability01_Part02",
    "RuanMei_RuanMei_Ability01_Part01",
    "RuanMei_Modifiers"
  ],
  "abilityObject": {
    "RuanMei_RuanMei_TechniqueInRougeLevel": {
      "fileName": "RuanMei_RuanMei_TechniqueInRougeLevel",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "RuanMei_Maze_Modifier_BeforeStanceBreak"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "RuanMei_Maze_Modifier_StanceBreakAdd",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                "Modifier Deletes Itself"
              ],
              "priorityLevel": 10001
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "StageAbility_MazeStandard_EnterBattle_IgnoreWeakness_Modifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Base Break Damage",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "BreakBaseDamage"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MaxStance",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                      "warningType": "MaxToughness"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BreakDamageRatio",
                      "value": {
                        "operator": "Variables[0] (MaxStance) || Constants[0] (30) || DIV || Constants[1] (2) || ADD || Constants[2] (4) || DIV || RETURN",
                        "displayLines": "(((MaxStance / 30) + 2) / 4)",
                        "constants": [
                          30,
                          2,
                          4
                        ],
                        "variables": [
                          "MaxStance"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "BreakDamageAddedRatio",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "RuanMei_BreakDamage",
                      "value": {
                        "operator": "Variables[0] (BreakBaseDamage) || Variables[1] (BreakDamageRatio) || MUL || Constants[0] (1) || Variables[2] (BreakDamageAddedRatio) || ADD || MUL || RETURN",
                        "displayLines": "((BreakBaseDamage * BreakDamageRatio) * (1 + BreakDamageAddedRatio))",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "BreakBaseDamage",
                          "BreakDamageRatio",
                          "BreakDamageAddedRatio"
                        ]
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "DamageBreak": {
                          "operator": "Variables[0] (BreakDamageRatio) || Variables[1] (RuanMei_BreakDamage) || MUL || RETURN",
                          "displayLines": "(BreakDamageRatio * RuanMei_BreakDamage)",
                          "constants": [],
                          "variables": [
                            "BreakDamageRatio",
                            "RuanMei_BreakDamage"
                          ]
                        },
                        "dmgFormula": "Break DMG Scaling",
                        "dmgFormulaFinal": "Pure (No DMG%)",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Break DMG"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "RuanMei_Maze_Modifier_StanceBreakAdd_EnterBattleRemove",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "RuanMei_Maze_Modifier_StanceBreakAdd"
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": 10001
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "RuanMei_Maze_Modifier_BeforeStanceBreak",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "RuanMei_Maze_Modifier_StanceBreakAdd_EnterBattleRemove"
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "FinishRoomNum",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "BuffNumber",
                          "value": {
                            "operator": "Variables[0] (FinishRoomNum) || Constants[0] (2) || MUL || RETURN",
                            "displayLines": "(FinishRoomNum * 2)",
                            "constants": [
                              2
                            ],
                            "variables": [
                              "FinishRoomNum"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "RuanMei_Maze_Modifier_StanceBreakAdd",
                      "valuePerStack": {
                        "MDF_StanceBreakAdded": {
                          "operator": "Variables[0] (1) || Variables[1] (MIN) || Variables[2] (20) || Variables[3] (BuffNumber) || PARAM_2 || FUNCTION || MUL || RETURN",
                          "displayLines": "(1 * &nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(20, BuffNumber))",
                          "constants": [],
                          "variables": [
                            1,
                            "MIN",
                            20,
                            "BuffNumber"
                          ]
                        },
                        "MDF_BreakDamageUp": {
                          "operator": "Variables[0] (1) || Variables[1] (MIN) || Variables[2] (20) || Variables[3] (BuffNumber) || PARAM_2 || FUNCTION || MUL || RETURN",
                          "displayLines": "(1 * &nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(20, BuffNumber))",
                          "constants": [],
                          "variables": [
                            1,
                            "MIN",
                            20,
                            "BuffNumber"
                          ]
                        }
                      }
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
                        "modifier": "StageAbility_MazeStandard_EnterBattle_IgnoreWeakness_Modifier"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifierName": "StageAbility_MazeStandard_EnterBattle_IgnoreWeakness_Modifier",
                          "adjustmentType": "+",
                          "variableName": "Stance_Added_Ratio",
                          "value": {
                            "operator": "Variables[0] (1) || Variables[1] (MIN) || Variables[2] (20) || Variables[3] (BuffNumber) || PARAM_2 || FUNCTION || MUL || RETURN",
                            "displayLines": "(1 * &nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(20, BuffNumber))",
                            "constants": [],
                            "variables": [
                              1,
                              "MIN",
                              20,
                              "BuffNumber"
                            ]
                          }
                        }
                      ]
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
    "RuanMei_RuanMei_TechniqueInLevel_Insert": {
      "fileName": "RuanMei_RuanMei_TechniqueInLevel_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "RuanMei_Ability02_Part01",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "RuanMei_RuanMei_TechniqueInLevel": {
      "fileName": "RuanMei_RuanMei_TechniqueInLevel",
      "childAbilityList": [
        "RuanMei_RuanMei_TechniqueInLevel",
        "RuanMei_RuanMei_TechniqueInLevel_Insert"
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
          "modifier": "RuanMei_Maze_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "RuanMei_Maze_Modifier",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Update Ability Properties",
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Multiply(by 0 if undefined)"
                    }
                  ]
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": null,
                  "skillType": "ControlSkill02",
                  "forceAction": true,
                  "afterInjection": [],
                  "runsAfterBattleEnd": true
                }
              ],
              "priorityLevel": -55
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "RuanMei_RuanMei_TriggerImprintEffect": {
      "fileName": "RuanMei_RuanMei_TriggerImprintEffect",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Next Injected Action Is Owned",
            "invertCondition": true
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "RuanMei_DelayHint",
          "referenceModifier": "MReference_Empty"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "DV_Ultra_Damage_MaxStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Skill03_FinalBreakDamagePercentage",
          "value": {
            "operator": "Variables[0] (DV_Ultra_Damage_MaxStance) || Constants[0] (30) || DIV || Constants[1] (2) || ADD || Constants[2] (4) || DIV || Variables[1] (0.5) || MUL || RETURN",
            "displayLines": "((((DV_Ultra_Damage_MaxStance / 30) + 2) / 4) * 0.5)",
            "constants": [
              30,
              2,
              4
            ],
            "variables": [
              "DV_Ultra_Damage_MaxStance",
              0.5
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
            "DamageType": "Ice",
            "DamageBreak": {
              "operator": "Variables[0] (Skill03_FinalBreakDamagePercentage) || RETURN",
              "displayLines": "Skill03_FinalBreakDamagePercentage",
              "constants": [],
              "variables": [
                "Skill03_FinalBreakDamagePercentage"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": null,
            "Tags": null,
            "attackType": "Break DMG"
          }
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Set",
          "value": "MDF_BreakAttackToDelay"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "scope": "TargetEntity",
          "variableName": "DV_NeedDettachEffect",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "RuanMei_DelayHint"
        }
      ],
      "references": []
    },
    "RuanMei_RuanMei_PassiveAbility01": {
      "fileName": "RuanMei_RuanMei_PassiveAbility01",
      "childAbilityList": [
        "RuanMei_RuanMei_PassiveAbility01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Basic ATK",
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
          "modifier": "RuanMei_Passive"
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
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Days Wane, Thoughts Wax"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "RuanMei_Tree02_RecoverSP",
              "valuePerStack": {
                "Trace_PointB2_P1_SP": {
                  "operator": "Variables[0] (5) || RETURN",
                  "displayLines": "5",
                  "constants": [],
                  "variables": [
                    5
                  ]
                }
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "RuanMei_Passive_SpeedUp[<span class=\"descriptionNumberColor\">Somatotypical Helix</span>]",
          "stackType": "Refresh",
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
                    "operator": "Variables[0] (0.1) || RETURN",
                    "displayLines": "0.1",
                    "constants": [],
                    "variables": [
                      0.1
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">#SkillP01_P1_SpeedUpRatio</span>.",
          "type": "Buff",
          "statusName": "Somatotypical Helix"
        },
        {
          "name": "Modifier Construction",
          "for": "RuanMei_Passive_TriggerBreakDamage",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "DV_Passive_Damage_MaxStance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                  "warningType": "MaxToughness"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SkillP01_FinalBreakDamagePercentage_set",
                  "value": {
                    "operator": "Variables[0] (DV_Passive_Damage_MaxStance) || Constants[0] (30) || DIV || Constants[1] (2) || ADD || Constants[2] (4) || DIV || Variables[1] (SkillP01_FinalBreakDamagePercentage_set) || MUL || RETURN",
                    "displayLines": "((((DV_Passive_Damage_MaxStance / 30) + 2) / 4) * SkillP01_FinalBreakDamagePercentage_set)",
                    "constants": [
                      30,
                      2,
                      4
                    ],
                    "variables": [
                      "DV_Passive_Damage_MaxStance",
                      "SkillP01_FinalBreakDamagePercentage_set"
                    ]
                  }
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "DamageBreak": {
                      "operator": "Variables[0] (SkillP01_FinalBreakDamagePercentage_set) || RETURN",
                      "displayLines": "SkillP01_FinalBreakDamagePercentage_set",
                      "constants": [],
                      "variables": [
                        "SkillP01_FinalBreakDamagePercentage_set"
                      ]
                    },
                    "dmgFormula": "Break DMG Scaling",
                    "dmgFormulaFinal": "Pure (No DMG%)",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Break DMG"
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "RuanMei_Passive_ListenBeingBreakOrHit",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Base Break Damage",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_BreakBaseDamage"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_BreakDamageAddedRatio",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 6
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_SkillP01_FinalBreakDamagePercentage",
                          "value": {
                            "operator": "Variables[0] (1.2) || Variables[1] (2) || ADD || RETURN",
                            "displayLines": "(1.2 + 2)",
                            "constants": [],
                            "variables": [
                              1.2,
                              2
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_SkillP01_FinalBreakDamagePercentage",
                          "value": {
                            "operator": "Variables[0] (1.2) || RETURN",
                            "displayLines": "1.2",
                            "constants": [],
                            "variables": [
                              1.2
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "RuanMei_Passive_TriggerBreakDamage",
                      "valuePerStack": {
                        "MDF_BreakBaseDamage_set": {
                          "operator": "Variables[0] (_BreakBaseDamage) || RETURN",
                          "displayLines": "_BreakBaseDamage",
                          "constants": [],
                          "variables": [
                            "_BreakBaseDamage"
                          ]
                        },
                        "MDF_BreakDamageAddedRatio_set": {
                          "operator": "Variables[0] (_BreakDamageAddedRatio) || RETURN",
                          "displayLines": "_BreakDamageAddedRatio",
                          "constants": [],
                          "variables": [
                            "_BreakDamageAddedRatio"
                          ]
                        },
                        "AbilityP01_FinalBreakDamagePercentage_set": {
                          "operator": "Variables[0] (_SkillP01_FinalBreakDamagePercentage) || RETURN",
                          "displayLines": "_SkillP01_FinalBreakDamagePercentage",
                          "constants": [],
                          "variables": [
                            "_SkillP01_FinalBreakDamagePercentage"
                          ]
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
          "name": "Modifier Construction",
          "for": "RuanMei_Passive",
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
                  "modifier": "RuanMei_PassiveArea_PenetrateUP"
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Owner][?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "RuanMei_Ability02_Area"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "LifeTime",
                      "variableName": "Skill02_EnergyBarCount",
                      "modifierName": "RuanMei_Ability02_Area",
                      "multiplier": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill02_EnergyBarCount",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_EnergyBarCount",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (Skill02_EnergyBarCount) || RETURN",
                        "displayLines": "Skill02_EnergyBarCount",
                        "constants": [],
                        "variables": [
                          "Skill02_EnergyBarCount"
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "RuanMei_Passive_SpeedUp[<span class=\"descriptionNumberColor\">Somatotypical Helix</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Inert Respiration"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "RuanMei_BreakDamageAdded[<span class=\"descriptionNumberColor\">Inert Respiration</span>]",
                      "valuePerStack": {
                        "Trace_PointB1_P1_BreakDamageAdded": {
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
                    "team": "TeamLight"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "RuanMei_Passive_SpeedUp[<span class=\"descriptionNumberColor\">Somatotypical Helix</span>]"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Inert Respiration"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "RuanMei_BreakDamageAdded[<span class=\"descriptionNumberColor\">Inert Respiration</span>]",
                          "valuePerStack": {
                            "Trace_PointB1_P1_BreakDamageAdded": {
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
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "RuanMei_AttackBreakEnemyAttackUp[<span class=\"descriptionNumberColor\">Reedside Promenade</span>]",
                          "valuePerStack": {
                            "AbilityRank_Eidolon2_P1_AttackUpRatio": {
                              "operator": "Variables[0] (0.4) || RETURN",
                              "displayLines": "0.4",
                              "constants": [],
                              "variables": [
                                0.4
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "TeamDark"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 4
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "RuanMei_Eidolon4_PassiveListenBreak"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "RuanMei_Passive_ListenBeingBreakOrHit"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "RuanMei_Passive_SpeedUp[<span class=\"descriptionNumberColor\">Somatotypical Helix</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "modifier": "RuanMei_Passive_TriggerBreakDamage"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "RuanMei_BreakDamageAdded[<span class=\"descriptionNumberColor\">Inert Respiration</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "RuanMei_AttackBreakEnemyAttackUp[<span class=\"descriptionNumberColor\">Reedside Promenade</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
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
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "RuanMei_AttackBreakEnemyAttackUp[<span class=\"descriptionNumberColor\">Reedside Promenade</span>]",
                      "valuePerStack": {
                        "AbilityRank_Eidolon2_P1_AttackUpRatio": {
                          "operator": "Variables[0] (0.4) || RETURN",
                          "displayLines": "0.4",
                          "constants": [],
                          "variables": [
                            0.4
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
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "RuanMei_Eidolon4_PassiveStackProperty"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "RuanMei_Eidolon4_PassiveListenBreak"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Candle Lights on Still Waters"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "RuanMei_Tree03_BreakDamageAddedValueShow"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill02_P1_DamageAddedRatioFinal",
                      "value": {
                        "operator": "Variables[0] (0.32) || RETURN",
                        "displayLines": "0.32",
                        "constants": [],
                        "variables": [
                          0.32
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "RuanMei_Passive_ListenBeingBreakOrHit"
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
    "RuanMei_RuanMei_Ability03_Part02": {
      "fileName": "RuanMei_RuanMei_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
              "modifier": "RuanMei_PassiveArea",
              "duration": {
                "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
                "displayLines": "(2 + 1)",
                "constants": [],
                "variables": [
                  2,
                  1
                ]
              },
              "valuePerStack": {
                "Ability03_P1_PenetrateRatio": {
                  "operator": "Variables[0] (0.25) || RETURN",
                  "displayLines": "0.25",
                  "constants": [],
                  "variables": [
                    0.25
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
                "target": "{{Caster}}"
              },
              "modifier": "RuanMei_PassiveArea",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "Ability03_P1_PenetrateRatio": {
                  "operator": "Variables[0] (0.25) || RETURN",
                  "displayLines": "0.25",
                  "constants": [],
                  "variables": [
                    0.25
                  ]
                }
              }
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
          "for": "RuanMei_Ability03_Area_Eidolon1_Friend[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
          "stackType": "ReplaceByCaster",
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">Skill03_P1_PenetrateRatio</span>. When dealing DMG, ignores <span class=\"descriptionNumberColor\">SkillRank_Rank01_P1_IgnoreDEFRatio_Friend</span> of the target's DEF.",
          "type": "Buff",
          "effectName": "All-Type RES PEN Boost",
          "statusName": "Petals to Stream, Repose in Dream"
        },
        {
          "name": "Modifier Construction",
          "for": "RuanMei_Ability03_Area_Friend[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
          "stackType": "ReplaceByCaster",
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">Skill03_P1_PenetrateRatio</span>.",
          "type": "Buff",
          "effectName": "All-Type RES PEN Boost",
          "statusName": "Petals to Stream, Repose in Dream"
        },
        {
          "name": "Modifier Construction",
          "for": "RuanMei_Ability03_Area_Eidolon1_Caster[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
                        "name": "Compare: Variable",
                        "value1": "Change_In_Current_Value",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Modifier Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifierName": "RuanMei_PassiveArea",
                          "value": {
                            "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                            "displayLines": "MDF_LifeTime",
                            "constants": [],
                            "variables": [
                              "MDF_LifeTime"
                            ]
                          },
                          "valueType": "Duration"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">#Skill03_P1_PenetrateRatio</span>. When dealing DMG, ignores <span class=\"descriptionNumberColor\">#SkillRank_Rank01_P1_IgnoreDEFRatio</span> of the target's DEF.",
          "type": "Buff",
          "effectName": "All-Type RES PEN Boost",
          "statusName": "Petals to Stream, Repose in Dream"
        },
        {
          "name": "Modifier Construction",
          "for": "RuanMei_Ability03_Area_Caster[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
                        "name": "Compare: Variable",
                        "value1": "Change_In_Current_Value",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Modifier Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifierName": "RuanMei_PassiveArea",
                          "value": {
                            "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                            "displayLines": "MDF_LifeTime",
                            "constants": [],
                            "variables": [
                              "MDF_LifeTime"
                            ]
                          },
                          "valueType": "Duration"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">#Skill03_P1_PenetrateRatio</span>.",
          "type": "Buff",
          "effectName": "All-Type RES PEN Boost",
          "statusName": "Petals to Stream, Repose in Dream"
        }
      ]
    },
    "RuanMei_RuanMei_Ability03_Part01": {
      "fileName": "RuanMei_RuanMei_Ability03_Part01",
      "childAbilityList": [
        "RuanMei_RuanMei_Ability03_Camera",
        "RuanMei_RuanMei_Ability03_EnterReady",
        "RuanMei_RuanMei_Ability03_Part01",
        "RuanMei_RuanMei_Ability03_Part02",
        "RuanMei_RuanMei_TriggerImprintEffect"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
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
          "ability": "RuanMei_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "RuanMei_RuanMei_Ability03_EnterReady": {
      "fileName": "RuanMei_RuanMei_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "RuanMei_RuanMei_Ability02_Part02": {
      "fileName": "RuanMei_RuanMei_Ability02_Part02",
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
          "modifier": "RuanMei_Ability02_Area",
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
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
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
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3,
          "cooldown": 0
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
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "RuanMei_Maze_Modifier"
          },
          "passed": [
            {
              "name": "Update Ability Properties",
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
              "modifier": "RuanMei_Maze_Modifier"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "RuanMei_Ability02_Area_Caster[<span class=\"descriptionNumberColor\">Overtone</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
                        "name": "Compare: Variable",
                        "value1": "Change_In_Current_Value",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Modifier Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifierName": "RuanMei_Ability02_Area",
                          "value": {
                            "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                            "displayLines": "MDF_LifeTime",
                            "constants": [],
                            "variables": [
                              "MDF_LifeTime"
                            ]
                          },
                          "valueType": "Duration"
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                            "displayLines": "MDF_LifeTime",
                            "constants": [],
                            "variables": [
                              "MDF_LifeTime"
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
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">Skill02_P1_DamageAddedRatioFinal</span>. Weakness Break Efficiency increases by <span class=\"descriptionNumberColor\">#Skill02_P2_StanceBreakAddedRatio</span>.",
          "type": "Buff",
          "effectName": "Boost DMG and Weakness Break Efficiency",
          "statusName": "Overtone"
        },
        {
          "name": "Modifier Construction",
          "for": "RuanMei_Ability02_StanceBreakAdded",
          "stackType": "Refresh",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (Ability02_StanceBreakAddedRatio) || RETURN",
                    "displayLines": "Ability02_StanceBreakAddedRatio",
                    "constants": [],
                    "variables": [
                      "Ability02_StanceBreakAddedRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "RuanMei_Ability02_Area",
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
                  "modifier": "RuanMei_Ability02_DamageUp"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "RuanMei_Ability02_StanceBreakAdded"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "RuanMei_Ability02_Eidolon1_AttackUp"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "RuanMei_Ability02_Area_Caster[<span class=\"descriptionNumberColor\">Overtone</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "RuanMei_Ability02_Area_Friend[<span class=\"descriptionNumberColor\">Overtone</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "RuanMei_Ability02_DamageUp"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "RuanMei_Ability02_StanceBreakAdded",
                  "valuePerStack": {
                    "Ability02_StanceBreakAddedRatio": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "RuanMei_Ability02_Area_Caster[<span class=\"descriptionNumberColor\">Overtone</span>]",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                  },
                  "modifier": "RuanMei_Ability02_Area_Friend[<span class=\"descriptionNumberColor\">Overtone</span>]",
                  "valuePerStack": {
                    "Ability02_P1_DamageAddedRatio_Friend": {
                      "operator": "Variables[0] (Skill02_P1_DamageAddedRatioFinal) || RETURN",
                      "displayLines": "Skill02_P1_DamageAddedRatioFinal",
                      "constants": [],
                      "variables": [
                        "Skill02_P1_DamageAddedRatioFinal"
                      ]
                    },
                    "Ability02_P2_StanceBreakAddedRatio_Friend": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  }
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
                    "of": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectables}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "RuanMei_Ability02_DamageUp"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "RuanMei_Ability02_StanceBreakAdded",
                      "valuePerStack": {
                        "Ability02_StanceBreakAddedRatio": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "RuanMei_Ability02_Area_Friend[<span class=\"descriptionNumberColor\">Overtone</span>]",
                      "valuePerStack": {
                        "Ability02_P1_DamageAddedRatio_Friend": {
                          "operator": "Variables[0] (Skill02_P1_DamageAddedRatioFinal) || RETURN",
                          "displayLines": "Skill02_P1_DamageAddedRatioFinal",
                          "constants": [],
                          "variables": [
                            "Skill02_P1_DamageAddedRatioFinal"
                          ]
                        },
                        "Ability02_P2_StanceBreakAddedRatio_Friend": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
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
    },
    "RuanMei_RuanMei_Ability02_Part01": {
      "fileName": "RuanMei_RuanMei_Ability02_Part01",
      "childAbilityList": [
        "RuanMei_RuanMei_Ability02_Camera",
        "RuanMei_RuanMei_Ability02_Part01",
        "RuanMei_RuanMei_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
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
          "ability": "RuanMei_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "RuanMei_RuanMei_Ability01_Part02": {
      "fileName": "RuanMei_RuanMei_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "RuanMei_RuanMei_Ability01_Part01": {
      "fileName": "RuanMei_RuanMei_Ability01_Part01",
      "childAbilityList": [
        "RuanMei_RuanMei_Ability01_Camera",
        "RuanMei_RuanMei_Ability01_Part01",
        "RuanMei_RuanMei_Ability01_Part02"
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
          "ability": "RuanMei_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "RuanMei_Modifiers": {
      "fileName": "RuanMei_Modifiers",
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
          "for": "RuanMei_Ability02_Area_Friend[<span class=\"descriptionNumberColor\">Overtone</span>]",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "Skill02_P1_DamageAddedRatio_Friend",
            "Skill02_P2_StanceBreakAddedRatio_Friend"
          ],
          "latentQueue": [],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">Skill02_P1_DamageAddedRatio_Friend</span>. Weakness Break Efficiency increases by <span class=\"descriptionNumberColor\">Skill02_P2_StanceBreakAddedRatio_Friend</span>.",
          "type": "Buff",
          "effectName": "Boost DMG and Weakness Break Efficiency",
          "statusName": "Overtone"
        },
        {
          "name": "Modifier Construction",
          "for": "RuanMei_Ability02_DamageUp",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Candle Lights on Still Waters"
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.32) || Variables[1] (SkillTree_PointB3_BreakDamageAddedValue) || ADD || RETURN",
                        "displayLines": "(0.32 + SkillTree_PointB3_BreakDamageAddedValue)",
                        "constants": [],
                        "variables": [
                          0.32,
                          "SkillTree_PointB3_BreakDamageAddedValue"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.32) || RETURN",
                        "displayLines": "0.32",
                        "constants": [],
                        "variables": [
                          0.32
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
          "for": "RuanMei_ResetImprint"
        },
        {
          "name": "Modifier Construction",
          "for": "RuanMei_PassiveArea_Enemy[<span class=\"descriptionNumberColor\">Thanatoplum Rebloom</span>]",
          "modifierFlags": [
            "BreakExtend",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "RuanMei_ResetImprint"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "DV_RuanMei_PassiveArea_Count",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "RuanMei_ResetImprint"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DV_RuanMei_PassiveArea_Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "DV_RuanMei_PassiveArea_Count",
                      "value": 0
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "DV_NeedDettachEffect"
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "RuanMei_PassiveArea_EnemyCD"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "DV_RuanMei_PassiveArea_Count",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_BreakAttackToDelay",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_BreakAttackToDelay",
                  "value": {
                    "operator": "Variables[0] (MDF_BreakAttackToDelay) || Variables[1] (0.2) || MUL || Variables[2] (0.1) || ADD || RETURN",
                    "displayLines": "((MDF_BreakAttackToDelay * 0.2) + 0.1)",
                    "constants": [],
                    "variables": [
                      "MDF_BreakAttackToDelay",
                      0.2,
                      0.1
                    ]
                  }
                },
                {
                  "name": "Assign Advance/Delay to Current Ability Use",
                  "adjustmentValue": -1,
                  "adjustmentType": "Advance"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "RuanMei_TriggerImprintEffect",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "LevelPerformAvatar",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "RuanMei_PassiveArea_EnemyCD"
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "On Dispel/Cleanse",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "RuanMei_PassiveArea_EnemyCD"
                }
              ]
            },
            {
              "eventTrigger": "On Extend Break Animation",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "RuanMei_TriggerImprintEffect",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "LevelPerformAvatar",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": true
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "DV_RuanMei_PassiveArea_Count",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DV_NeedDettachEffect",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ],
          "description": "When enemy targets attempt to recover from the Weakness Break state, prolong the duration of their Weakness Break state and deal Ice Break DMG to them.",
          "type": "Debuff",
          "effectName": "Weakness Break Extension",
          "statusName": "Thanatoplum Rebloom"
        },
        {
          "name": "Modifier Construction",
          "for": "RuanMei_PassiveArea_EnemyCD",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "RuanMei_PassiveArea_PenetrateUP",
          "stackType": "Replace",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (Ability03_P1_PenetrateRatio) || RETURN",
                    "displayLines": "Ability03_P1_PenetrateRatio",
                    "constants": [],
                    "variables": [
                      "Ability03_P1_PenetrateRatio"
                    ]
                  }
                },
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
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "RuanMei_Ability03_Area_Eidolon1_Friend[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
                      "valuePerStack": {
                        "Ability03_P1_PenetrateRatio": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        },
                        "AbilityRank_Eidolon1_P1_IgnoreDEFRatio_Friend": {
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
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "RuanMei_Ability03_Area_Friend[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
                      "valuePerStack": {
                        "Ability03_P1_PenetrateRatio": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
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
          "name": "Modifier Construction",
          "for": "RuanMei_PassiveArea",
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
                  "modifier": "RuanMei_PassiveArea_PenetrateUP"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "RuanMei_Ability03_Area_Caster[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "RuanMei_Ability03_Area_Friend[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "RuanMei_Ability03_Area_Eidolon1_Caster[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "RuanMei_Ability03_Area_Eidolon1_Friend[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "RuanMei_Ability03_Eidolon1_DefenceIgnore"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "RuanMei_Ability03_Eidolon1_DefenceIgnore"
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
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (Ability03_P1_PenetrateRatio) || RETURN",
                    "displayLines": "Ability03_P1_PenetrateRatio",
                    "constants": [],
                    "variables": [
                      "Ability03_P1_PenetrateRatio"
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
                      "modifier": "RuanMei_Ability03_Eidolon1_DefenceIgnore",
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
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "RuanMei_Ability03_Area_Eidolon1_Caster[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
                        "displayLines": "(2 + 1)",
                        "constants": [],
                        "variables": [
                          2,
                          1
                        ]
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
                            "target": "{{Caster}}"
                          },
                          "modifier": "RuanMei_Ability03_Eidolon1_DefenceIgnore",
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
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "RuanMei_Ability03_Area_Eidolon1_Caster[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
                          "duration": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "RuanMei_Ability03_Area_Caster[<span class=\"descriptionNumberColor\">Petals to Stream, Repose in Dream</span>]",
                          "duration": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
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
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Parameter Target's Attack Targets}}"
                      },
                      "searchRandom": true,
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "RuanMei_PassiveArea_EnemyCD"
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "RuanMei_PassiveArea_Enemy[<span class=\"descriptionNumberColor\">Thanatoplum Rebloom</span>]"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "RuanMei_PassiveArea_EnemyCD"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "RuanMei_ResetImprint"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "Skill03_P1_PenetrateRatio"
          ],
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
              },
              "modifier": "RuanMei_PassiveArea_PenetrateUP",
              "aliveOnly": "True",
              "haloStatus": true,
              "valuePerStack": {
                "Ability03_P1_PenetrateRatio": {
                  "operator": "Variables[0] (0.25) || RETURN",
                  "displayLines": "0.25",
                  "constants": [],
                  "variables": [
                    0.25
                  ]
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "RuanMei_Ability03_Eidolon1_DefenceIgnore",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
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
        },
        {
          "name": "Modifier Construction",
          "for": "RuanMei_Eidolon4_Passive_BreakDamageAddedUp[<span class=\"descriptionNumberColor\">Chatoyant Éclat</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "RuanMei_Eidolon4_PassiveStackProperty",
                  "valuePerStack": {
                    "AbilityRank_Eidolon4_P1_BreakDamageAdded": 0
                  }
                }
              ]
            }
          ],
          "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">#SkillRank_Rank04_P1_BreakDamageAdded</span>.",
          "type": "Buff",
          "effectName": "Break Effect Boost",
          "statusName": "Chatoyant Éclat"
        },
        {
          "name": "Modifier Construction",
          "for": "RuanMei_Eidolon4_PassiveListenBreak",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: Start [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "RuanMei_Eidolon4_PassiveStackProperty",
                  "valuePerStack": {
                    "AbilityRank_Eidolon4_P1_BreakDamageAdded": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "RuanMei_Eidolon4_Passive_BreakDamageAddedUp[<span class=\"descriptionNumberColor\">Chatoyant Éclat</span>]",
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
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "RuanMei_Eidolon4_PassiveStackProperty",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (SkillRank_Rank04_P1_BreakDamageAdded) || RETURN",
                    "displayLines": "SkillRank_Rank04_P1_BreakDamageAdded",
                    "constants": [],
                    "variables": [
                      "SkillRank_Rank04_P1_BreakDamageAdded"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "SkillRank_Rank04_P1_BreakDamageAdded"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "RuanMei_AttackBreakEnemyAttackUp[<span class=\"descriptionNumberColor\">Reedside Promenade</span>]",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "Break"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                          "value": "AbilityRank_Eidolon2_P1_AttackUpRatio"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "SkillRank_Rank02_P1_AttackUpRatio"
          ],
          "latentQueue": [],
          "description": "When dealing DMG to enemy targets with Weakness Break, increases ATK by <span class=\"descriptionNumberColor\">#SkillRank_Rank02_P1_AttackUpRatio</span>.",
          "type": "Buff",
          "statusName": "Reedside Promenade"
        },
        {
          "name": "Modifier Construction",
          "for": "RuanMei_Ability03_Eidolon1_DefenceIgnore",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(0 - MDF_PropertyValue)"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "Skill03_P1_PenetrateRatio"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "RuanMei_Tree03_BreakDamageAddedValueShow",
          "stackType": "ReplaceByCaster",
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "whenEnteringRange": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "SkillTree_PointB3_BreakDamageAddedValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SkillTree_PointB3_BreakDamageAddedValue",
                      "value": {
                        "operator": "Variables[0] (WHOLE) || Variables[1] (SkillTree_PointB3_BreakDamageAddedValue) || Variables[2] (1.2) || SUB || Variables[3] (0.1) || DIV || PARAM_1 || FUNCTION || Variables[4] (0.06) || MUL || RETURN",
                        "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(((SkillTree_PointB3_BreakDamageAddedValue - 1.2) / 0.1)) * 0.06)",
                        "constants": [],
                        "variables": [
                          "WHOLE",
                          "SkillTree_PointB3_BreakDamageAddedValue",
                          1.2,
                          0.1,
                          0.06
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SkillTree_PointB3_BreakDamageAddedValue",
                        "compareType": "<",
                        "value2": 0,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillTree_PointB3_BreakDamageAddedValue",
                          "value": 0
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "SkillTree_PointB3_BreakDamageAddedValue",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (0.36) || RETURN",
                              "displayLines": "0.36",
                              "constants": [],
                              "variables": [
                                0.36
                              ]
                            },
                            "contextScope": "ContextCaster"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "SkillTree_PointB3_BreakDamageAddedValue",
                              "value": {
                                "operator": "Variables[0] (0.36) || RETURN",
                                "displayLines": "0.36",
                                "constants": [],
                                "variables": [
                                  0.36
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill02_P1_DamageAddedRatioFinal",
                      "value": {
                        "operator": "Variables[0] (SkillTree_PointB3_BreakDamageAddedValue) || Variables[1] (0.32) || ADD || RETURN",
                        "displayLines": "(SkillTree_PointB3_BreakDamageAddedValue + 0.32)",
                        "constants": [],
                        "variables": [
                          "SkillTree_PointB3_BreakDamageAddedValue",
                          0.32
                        ]
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "RuanMei_Ability02_DamageUp"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "RuanMei_Ability02_DamageUp"
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "RuanMei_Ability02_Area_Friend[<span class=\"descriptionNumberColor\">Overtone</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "RuanMei_Ability02_Area_Friend[<span class=\"descriptionNumberColor\">Overtone</span>]",
                          "valuePerStack": {
                            "Ability02_P1_DamageAddedRatio_Friend": {
                              "operator": "Variables[0] (Skill02_P1_DamageAddedRatioFinal) || RETURN",
                              "displayLines": "Skill02_P1_DamageAddedRatioFinal",
                              "constants": [],
                              "variables": [
                                "Skill02_P1_DamageAddedRatioFinal"
                              ]
                            },
                            "Ability02_P2_StanceBreakAddedRatio_Friend": {
                              "operator": "Variables[0] (0.5) || RETURN",
                              "displayLines": "0.5",
                              "constants": [],
                              "variables": [
                                0.5
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "SkillTree_PointB3_BreakDamageAddedValue",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SkillTree_PointB3_BreakDamageAddedValue",
                      "value": {
                        "operator": "Variables[0] (WHOLE) || Variables[1] (SkillTree_PointB3_BreakDamageAddedValue) || Variables[2] (1.2) || SUB || Variables[3] (0.1) || DIV || PARAM_1 || FUNCTION || Variables[4] (0.06) || MUL || RETURN",
                        "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>(((SkillTree_PointB3_BreakDamageAddedValue - 1.2) / 0.1)) * 0.06)",
                        "constants": [],
                        "variables": [
                          "WHOLE",
                          "SkillTree_PointB3_BreakDamageAddedValue",
                          1.2,
                          0.1,
                          0.06
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SkillTree_PointB3_BreakDamageAddedValue",
                        "compareType": "<",
                        "value2": 0,
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillTree_PointB3_BreakDamageAddedValue",
                          "value": 0
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "SkillTree_PointB3_BreakDamageAddedValue",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (0.36) || RETURN",
                              "displayLines": "0.36",
                              "constants": [],
                              "variables": [
                                0.36
                              ]
                            },
                            "contextScope": "ContextCaster"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "SkillTree_PointB3_BreakDamageAddedValue",
                              "value": {
                                "operator": "Variables[0] (0.36) || RETURN",
                                "displayLines": "0.36",
                                "constants": [],
                                "variables": [
                                  0.36
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill02_P1_DamageAddedRatioFinal",
                      "value": {
                        "operator": "Variables[0] (SkillTree_PointB3_BreakDamageAddedValue) || Variables[1] (0.32) || ADD || RETURN",
                        "displayLines": "(SkillTree_PointB3_BreakDamageAddedValue + 0.32)",
                        "constants": [],
                        "variables": [
                          "SkillTree_PointB3_BreakDamageAddedValue",
                          0.32
                        ]
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "RuanMei_Ability02_DamageUp"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "RuanMei_Ability02_DamageUp"
                        }
                      ]
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                      },
                      "searchRandom": true,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "RuanMei_Ability02_Area_Friend[<span class=\"descriptionNumberColor\">Overtone</span>]"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "RuanMei_Ability02_Area_Friend[<span class=\"descriptionNumberColor\">Overtone</span>]",
                          "valuePerStack": {
                            "Ability02_P1_DamageAddedRatio_Friend": {
                              "operator": "Variables[0] (Skill02_P1_DamageAddedRatioFinal) || RETURN",
                              "displayLines": "Skill02_P1_DamageAddedRatioFinal",
                              "constants": [],
                              "variables": [
                                "Skill02_P1_DamageAddedRatioFinal"
                              ]
                            },
                            "Ability02_P2_StanceBreakAddedRatio_Friend": {
                              "operator": "Variables[0] (0.5) || RETURN",
                              "displayLines": "0.5",
                              "constants": [],
                              "variables": [
                                0.5
                              ]
                            }
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
          "for": "RuanMei_Tree02_RecoverSP",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (Trace_PointB2_P1_SP) || RETURN",
                    "displayLines": "Trace_PointB2_P1_SP",
                    "constants": [],
                    "variables": [
                      "Trace_PointB2_P1_SP"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ],
          "stackData": [
            "SkillTree_PointB2_P1_SP"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "RuanMei_BreakDamageAdded[<span class=\"descriptionNumberColor\">Inert Respiration</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (SkillTree_PointB1_P1_BreakDamageAdded) || RETURN",
                    "displayLines": "SkillTree_PointB1_P1_BreakDamageAdded",
                    "constants": [],
                    "variables": [
                      "SkillTree_PointB1_P1_BreakDamageAdded"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "SkillTree_PointB1_P1_BreakDamageAdded"
          ],
          "latentQueue": [],
          "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">SkillTree_PointB1_P1_BreakDamageAdded</span>.",
          "type": "Buff",
          "statusName": "Inert Respiration"
        }
      ],
      "references": []
    }
  }
}