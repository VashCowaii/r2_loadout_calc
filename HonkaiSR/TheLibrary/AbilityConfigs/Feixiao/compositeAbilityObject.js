const compositeAbilityObject = {
  "fullCharacterName": "Feixiao",
  "trimCharacterName": "Feixiao",
  "abilityList": [
    "Feixiao_Feixiao_Eidolon6",
    "Feixiao_Feixiao_Trace03",
    "Feixiao_Feixiao_Trace02",
    "Feixiao_Feixiao_Trace01",
    "Feixiao_Feixiao_TechniqueInLevel",
    "Feixiao_Feixiao_TechniqueSP",
    "Feixiao_Feixiao_Insert_Part02",
    "Feixiao_Feixiao_Insert_Part01",
    "Feixiao_Feixiao_Insert_SelectTargetSelf",
    "Feixiao_Feixiao_Insert_SelectTarget",
    "Feixiao_Feixiao_PassiveAbility01",
    "Feixiao_Feixiao_Ability03_Finish_W2Main_Part01",
    "Feixiao_Feixiao_Ability03_Finish_Part02",
    "Feixiao_Feixiao_Ability03_Finish_Part01",
    "Feixiao_Feixiao_Ability03_ComboFinish2_Part02",
    "Feixiao_Feixiao_Ability03_ComboFinish2_Part01",
    "Feixiao_Feixiao_Ability21_Anim2_Part02",
    "Feixiao_Feixiao_Ability21_Anim2_Part01",
    "Feixiao_Feixiao_Ability21_Anim1_Part02",
    "Feixiao_Feixiao_Ability21_Anim1_Part01",
    "Feixiao_Feixiao_Ability21_Entry",
    "Feixiao_Feixiao_Ability03_ComboFinish1_Part02",
    "Feixiao_Feixiao_Ability03_ComboFinish1_Part01",
    "Feixiao_Feixiao_Ability11_Anim4_Part02",
    "Feixiao_Feixiao_Ability11_Anim4_Part01",
    "Feixiao_Feixiao_Ability11_Anim3_Part02",
    "Feixiao_Feixiao_Ability11_Anim3_Part01",
    "Feixiao_Feixiao_Ability11_Anim2_Part02",
    "Feixiao_Feixiao_Ability11_Anim2_Part01",
    "Feixiao_Feixiao_Ability11_Anim1_Part02",
    "Feixiao_Feixiao_Ability11_Anim1_Part01",
    "Feixiao_Feixiao_Ability11_Entry",
    "Feixiao_Feixiao_Ability03_Part02",
    "Feixiao_Feixiao_Ability03_Part01",
    "Feixiao_Feixiao_Ability03_EnterReady",
    "Feixiao_Feixiao_Ability02_Part02",
    "Feixiao_Feixiao_Ability02_Part01",
    "Feixiao_Feixiao_Ability01_Part02",
    "Feixiao_Feixiao_Ability01_Part01",
    "Feixiao_Modifiers",
    "Feixiao_Functions"
  ],
  "abilityObject": {
    "Feixiao_Feixiao_Eidolon6": {
      "fileName": "Feixiao_Feixiao_Eidolon6",
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
          "modifier": "M_Feixiao_Eidolon6"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_Eidolon6",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                          "value": "0.2"
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
    "Feixiao_Feixiao_Trace03": {
      "fileName": "Feixiao_Feixiao_Trace03",
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
          "modifier": "M_Feixiao_Tree03"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Feixiao_AttackProperty[<span class=\"descriptionNumberColor\">Boltcatch</span>]",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Boltcatch"
        },
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_Tree03",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Feixiao_AttackProperty[<span class=\"descriptionNumberColor\">Boltcatch</span>]",
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
                          "operator": "Variables[0] (0.48) || RETURN",
                          "displayLines": "0.48",
                          "constants": [],
                          "variables": [
                            0.48
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
    "Feixiao_Feixiao_Trace02": {
      "fileName": "Feixiao_Feixiao_Trace02",
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
          "modifier": "M_Feixiao_Trace02"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_Trace02_Sub",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Attack-Type Extension",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeToExtend": "Ultimate",
                  "isRemove": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Attack-Type Extension",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeToExtend": "Ultimate",
                  "extendTypeTo": "Follow-up"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_Trace02",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                          "value": "0.36"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "M_Feixiao_Trace02_Sub"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
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
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "M_Feixiao_Trace02_Sub"
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
    "Feixiao_Feixiao_Trace01": {
      "fileName": "Feixiao_Feixiao_Trace01",
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
          "modifier": "M_Feixiao_Trace01"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_Trace01",
          "execute": [
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
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "isFixed": "(Fixed)",
                      "ignoreBlock": true,
                      "isSpecialEnergy": true
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
    "Feixiao_Feixiao_TechniqueInLevel": {
      "fileName": "Feixiao_Feixiao_TechniqueInLevel",
      "childAbilityList": [
        "Feixiao_Feixiao_TechniqueInLevel"
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
          "modifier": "StageAbility_Maze_Feixiao_Modifier_Attack"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "StageAbility_Maze_Feixiao_Modifier_GainSP"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_Feixiao_Maze_ForceCritical"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_Maze_ForceCritical",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Technique"
                        ]
                      },
                      {
                        "name": "Has DMG Instance Tag",
                        "tag": "Feixiao_00_MazeAttack"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "AttackData",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateOverride</span>&nbsp;",
                          "value": 1
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
          "for": "StageAbility_Maze_Feixiao_Modifier_Attack",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Define Custom Variable with Stage Wave Count",
                  "scope": "ContextModifier",
                  "variableName": "MDF_WaveStageCount"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": ">",
                    "value2": 1
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": ">",
                    "value2": 1
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
                        "DamageType": "Wind",
                        "Damage": {
                          "operator": "Variables[0] (MIN) || Variables[1] (10) || Variables[2] (2) || Variables[3] (MDF_WaveStageCount) || Constants[0] (1) || SUB || Variables[4] (1) || MUL || ADD || PARAM_2 || FUNCTION || RETURN",
                          "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(10, (2 + ((MDF_WaveStageCount - 1) * 1)))",
                          "constants": [
                            1
                          ],
                          "variables": [
                            "MIN",
                            10,
                            2,
                            "MDF_WaveStageCount",
                            1
                          ]
                        },
                        "Toughness": {
                          "displayLines": 30
                        },
                        "instanceTag": "Feixiao_00_MazeAttack",
                        "Tags": null,
                        "attackType": "Technique",
                        "EnergyGainPercent": "100%"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "Damage": {
                          "operator": "Variables[0] (MIN) || Variables[1] (10) || Variables[2] (2) || Variables[3] (MDF_WaveStageCount) || Constants[0] (1) || SUB || Variables[4] (1) || MUL || ADD || PARAM_2 || FUNCTION || RETURN",
                          "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(10, (2 + ((MDF_WaveStageCount - 1) * 1)))",
                          "constants": [
                            1
                          ],
                          "variables": [
                            "MIN",
                            10,
                            2,
                            "MDF_WaveStageCount",
                            1
                          ]
                        },
                        "Toughness": null,
                        "instanceTag": "Feixiao_00_MazeAttack",
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
        }
      ]
    },
    "Feixiao_Feixiao_TechniqueSP": {
      "fileName": "Feixiao_Feixiao_TechniqueSP",
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
          "modifier": "StageAbility_Maze_Feixiao_Modifier_GainSP"
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Insert_Part02": {
      "fileName": "Feixiao_Feixiao_Insert_Part02",
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
          "modifier": "M_Feixiao_InsertCheck"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_Feixiao_InsertCheckSelf"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "M_Feixiao_Friend_Mark_Main"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "IsUnCountedInsert",
            "compareType": "<=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Feixiao_InsertIsReady[<span class=\"descriptionNumberColor\">Thunderhunt</span>]"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "IsUnCountedInsert",
              "value": 0
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Feixiao_DamageProperty[<span class=\"descriptionNumberColor\">Thunderhunt</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
            }
          }
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
              "modifier": "Feixiao_Eidolon4_Property[<span class=\"descriptionNumberColor\">Stormward I Hear</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "operator": "Variables[0] (0.08) || RETURN",
                  "displayLines": "0.08",
                  "constants": [],
                  "variables": [
                    0.08
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
              "name": "Attack-Type Extension",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "typeToExtend": "Follow-up",
              "extendTypeTo": "Ultimate",
              "instanceIdentifier": "Feixiao_00_Rank06"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (Insert_DamagePercentage) || RETURN",
              "displayLines": "Insert_DamagePercentage",
              "constants": [],
              "variables": [
                "Insert_DamagePercentage"
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Variables[1] (Insert_StanceRatio) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * Insert_StanceRatio)",
              "constants": [],
              "variables": [
                "ST Toughness Value",
                "Insert_StanceRatio"
              ]
            },
            "instanceTag": "Feixiao_00_InsertAttack",
            "Tags": null,
            "attackType": "Follow-up"
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
              "name": "Attack-Type Extension",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "typeToExtend": "Follow-up",
              "isRemove": true,
              "instanceIdentifier": "Feixiao_00_Rank06"
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Feixiao_DamageProperty[<span class=\"descriptionNumberColor\">Thunderhunt</span>]",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "latentQueue": [
            "IsUnCountedInsert"
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Thunderhunt"
        }
      ]
    },
    "Feixiao_Feixiao_Insert_Part01": {
      "fileName": "Feixiao_Feixiao_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Thunderhunt"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Feixiao_Insert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          }
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Insert_SelectTargetSelf": {
      "fileName": "Feixiao_Feixiao_Insert_SelectTargetSelf",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Feixiao_Ultramode",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "living": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "M_Feixiao_Friend_Mark_Self"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "IsUnCountedInsert",
                  "value": 1
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Feixiao_Insert_Part01",
                  "isTrigger": true
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "living": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "IsUnCountedInsert",
                      "value": 1
                    },
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "ability": "Feixiao_Insert_Part01",
                      "isTrigger": true
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "M_Feixiao_InsertCheckSelf"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "onAbort": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_Feixiao_InsertCheckSelf"
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Insert_SelectTarget": {
      "fileName": "Feixiao_Feixiao_Insert_SelectTarget",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Feixiao_Ultramode",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "living": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "M_Feixiao_Friend_Mark_Main"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Feixiao_Insert_Part01",
                  "isTrigger": true
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "living": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "ability": "Feixiao_Insert_Part01",
                      "isTrigger": true
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "M_Feixiao_InsertCheck"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "onAbort": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_Feixiao_InsertCheck"
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_PassiveAbility01": {
      "fileName": "Feixiao_Feixiao_PassiveAbility01",
      "childAbilityList": [
        "Feixiao_Feixiao_PassiveAbility01",
        "Feixiao_Feixiao_Insert_SelectTarget",
        "Feixiao_Feixiao_Insert_SelectTargetSelf",
        "Feixiao_Feixiao_Insert_Part01",
        "Feixiao_Feixiao_Insert_Part02",
        "Feixiao_Feixiao_Insert_Camera"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        5,
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
          "modifier": "Feixiao_Passive"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Feixiao_InsertIsReady[<span class=\"descriptionNumberColor\">Thunderhunt</span>]"
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
              "modifier": "Feixiao_Eidolon2_CD[<span class=\"descriptionNumberColor\">Moonward I Wish</span>]",
              "counter": {
                "operator": "Variables[0] (6) || RETURN",
                "displayLines": "6",
                "constants": [],
                "variables": [
                  6
                ]
              },
              "valuePerStack": {
                "MDF_Count": {
                  "operator": "Variables[0] (6) || RETURN",
                  "displayLines": "6",
                  "constants": [],
                  "variables": [
                    6
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
              "name": "Define Custom Variable",
              "variableName": "Insert_StanceRatio",
              "value": {
                "operator": "Constants[0] (1) || Variables[0] (1) || ADD || RETURN",
                "displayLines": "(1 + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  1
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Insert_StanceRatio",
              "value": 1
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "IsUnCountedInsert",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Passive_NeedAttackCount",
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
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Insert_DamagePercentage",
              "value": {
                "operator": "Variables[0] (1.1) || Variables[1] (1.4) || ADD || RETURN",
                "displayLines": "(1.1 + 1.4)",
                "constants": [],
                "variables": [
                  1.1,
                  1.4
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Insert_DamagePercentage",
              "value": {
                "operator": "Variables[0] (1.1) || RETURN",
                "displayLines": "1.1",
                "constants": [],
                "variables": [
                  1.1
                ]
              }
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (Passive_AttackCount) || RETURN",
            "displayLines": "Passive_AttackCount",
            "constants": [],
            "variables": [
              "Passive_AttackCount"
            ]
          },
          "activeCount": {
            "operator": "Variables[0] (ComboAttackCount) || RETURN",
            "displayLines": "ComboAttackCount",
            "constants": [],
            "variables": [
              "ComboAttackCount"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (Passive_NeedAttackCount) || RETURN",
            "displayLines": "Passive_NeedAttackCount",
            "constants": [],
            "variables": [
              "Passive_NeedAttackCount"
            ]
          },
          "assignState": "True",
          "priorState": "Normal"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_Friend_Mark_Main",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}} - {{Modifier Holder}}"
                  },
                  "maxTargets": 99,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "M_Feixiao_Friend_Mark_Main"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "M_Feixiao_Friend_Mark_Main"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target List}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Feixiao_Passive",
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
                        "name": "Trace Activated",
                        "conditionList": "Heavenpath"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Feixiao_InsertIsReady[<span class=\"descriptionNumberColor\">Thunderhunt</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Feixiao_Passive_ChargeTeamAttackCount",
                      "variables": {
                        "parameter[0]_AddValue": 1
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Feixiao_InsertIsReady[<span class=\"descriptionNumberColor\">Thunderhunt</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Feixiao_Eidolon2_CD[<span class=\"descriptionNumberColor\">Moonward I Wish</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Feixiao_Eidolon2_CD[<span class=\"descriptionNumberColor\">Moonward I Wish</span>]",
                      "counter": {
                        "operator": "Variables[0] (6) || RETURN",
                        "displayLines": "6",
                        "constants": [],
                        "variables": [
                          6
                        ]
                      },
                      "valuePerStack": {
                        "MDF_Count": {
                          "operator": "Variables[0] (6) || RETURN",
                          "displayLines": "6",
                          "constants": [],
                          "variables": [
                            6
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Switch to Action/Ability Context"
                },
                {
                  "name": "Update Energy Value",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 0,
                  "adjustment": "Set",
                  "ignoreBlock": true
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Anyone]",
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "Feixiao_Ultramode",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Attack Type",
                                "attackTypes": [
                                  "Follow-up"
                                ],
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                }
                              },
                              {
                                "name": "Eidolon Activated",
                                "eidolon": 2
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "Feixiao_Eidolon2_CD[<span class=\"descriptionNumberColor\">Moonward I Wish</span>]"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "Feixiao_Passive_ChargeTeamAttackCount",
                              "variables": {
                                "parameter[0]_AddValue": 2
                              }
                            },
                            {
                              "name": "Define Modifier Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifierName": "Feixiao_Eidolon2_CD[<span class=\"descriptionNumberColor\">Moonward I Wish</span>]",
                              "function": "Add"
                            },
                            {
                              "name": "Define Modifier-Specific Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifierName": "Feixiao_Eidolon2_CD[<span class=\"descriptionNumberColor\">Moonward I Wish</span>]",
                              "adjustmentType": "+",
                              "variableName": "MDF_Count",
                              "value": -1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "Feixiao_Passive_ChargeTeamAttackCount",
                              "variables": {
                                "parameter[0]_AddValue": 1
                              }
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
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                        },
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "M_Feixiao_Friend_Mark_Main"
                        },
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Target Count",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target's Attack Targets}}"
                            },
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target's Attack Targets}}"
                              },
                              "modifier": "M_Feixiao_Friend_Mark_Main"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Parameter Target's Attack Targets}}"
                              },
                              "searchRandom": true,
                              "maxTargets": 1,
                              "ifTargetFound": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "M_Feixiao_Friend_Mark_Main"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Feixiao_InsertCheck"
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
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Ability Targets}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Ability Targets}}"
                        },
                        "compareType": "=",
                        "value2": 1,
                        "livingTargets": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target's Ability Targets}}"
                          },
                          "modifier": "M_Feixiao_Friend_Mark_Main"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                          },
                          "modifier": "M_Feixiao_Friend_Mark_Main"
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
              "variableName": "ComboAttackCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": {
                    "operator": "Variables[0] (12) || RETURN",
                    "displayLines": "12",
                    "constants": [],
                    "variables": [
                      12
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "activeCount": {
                        "operator": "Variables[0] (ComboAttackCount) || RETURN",
                        "displayLines": "ComboAttackCount",
                        "constants": [],
                        "variables": [
                          "ComboAttackCount"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Changes",
              "variableName": "Passive_AttackCount",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 99,
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "Passive_AttackCount",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (Passive_NeedAttackCount) || RETURN",
                              "displayLines": "Passive_NeedAttackCount",
                              "constants": [],
                              "variables": [
                                "Passive_NeedAttackCount"
                              ]
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "ComboAttackCount",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (12) || RETURN",
                              "displayLines": "12",
                              "constants": [],
                              "variables": [
                                12
                              ]
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (Passive_AttackCount) || RETURN",
                            "displayLines": "Passive_AttackCount",
                            "constants": [],
                            "variables": [
                              "Passive_AttackCount"
                            ]
                          },
                          "priorState": "Active"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (Passive_AttackCount) || RETURN",
                            "displayLines": "Passive_AttackCount",
                            "constants": [],
                            "variables": [
                              "Passive_AttackCount"
                            ]
                          },
                          "priorState": "Normal"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": {
                    "operator": "Variables[0] (12) || RETURN",
                    "displayLines": "12",
                    "constants": [],
                    "variables": [
                      12
                    ]
                  },
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "ComboAttackCount",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrentSpecial</span>&nbsp;"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "Feixiao_InsertCheck",
              "parse": [
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Feixiao_InsertIsReady[<span class=\"descriptionNumberColor\">Thunderhunt</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
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
                          "abilityName": "Feixiao_Insert_SelectTarget",
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
                      ],
                      "noTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "M_Feixiao_InsertCheck"
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
    "Feixiao_Feixiao_Ability03_Finish_W2Main_Part01": {
      "fileName": "Feixiao_Feixiao_Ability03_Finish_W2Main_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability03_Finish_Part02": {
      "fileName": "Feixiao_Feixiao_Ability03_Finish_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "M_Feixiao_UltraTarget_Mark"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1.6) || RETURN",
              "displayLines": "1.6",
              "constants": [],
              "variables": [
                1.6
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
            "Tags": null
          },
          "attackType": "Ultimate"
        },
        "Trigger: Attack End",
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Passive_CostTeamAttackCountToGainSP"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "M_Feixiao_UltraTarget"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Feixiao_Ultramode"
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability03_Finish_Part01": {
      "fileName": "Feixiao_Feixiao_Ability03_Finish_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Feixiao_Ability03_Finish_Part02",
          "isTrigger": true
        },
        {
          "name": "Update Character Panel Visibility"
        },
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          }
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability03_ComboFinish2_Part02": {
      "fileName": "Feixiao_Feixiao_Ability03_ComboFinish2_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_CostSPBeforeDamage"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (Skill21_DamagePercentage) || RETURN",
              "displayLines": "Skill21_DamagePercentage",
              "constants": [],
              "variables": [
                "Skill21_DamagePercentage"
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
          },
          "attackType": "Ultimate"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_EnterFinish"
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability03_ComboFinish2_Part01": {
      "fileName": "Feixiao_Feixiao_Ability03_ComboFinish2_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability21_Anim2_Part02": {
      "fileName": "Feixiao_Feixiao_Ability21_Anim2_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_CostSPBeforeDamage"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo2_DealDamage"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo2_AfterDamageCheck"
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
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Compare: Variable",
                "value1": "First_Break_Effect",
                "compareType": ">=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Feixiao_TriggerBreak"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Active: Fast-Forward Animations"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Feixiao_FrameHaltRealTime",
                  "variables": {
                    "parameter[0]_Realtime": 0.1,
                    "parameter[1]_TimeScale": 0.025
                  }
                }
              ],
              "failed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Feixiao_FrameHaltRealTime",
                  "variables": {
                    "parameter[0]_Realtime": 0.1,
                    "parameter[1]_TimeScale": 0.05
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_ComboPerformFinish"
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability21_Anim2_Part01": {
      "fileName": "Feixiao_Feixiao_Ability21_Anim2_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextAbility",
          "variableName": "ADF_Effect_Index",
          "value": {
            "operator": "Variables[0] (UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]) || Variables[1] (FLOOR) || Variables[2] (ComboHitCount) || Constants[0] (2) || DIV || PARAM_1 || FUNCTION || Constants[0] (2) || PARAM_2 || FUNCTION || RETURN",
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]</span>(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((ComboHitCount / 2)), 2)",
            "constants": [
              2
            ],
            "variables": [
              "UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]",
              "FLOOR",
              "ComboHitCount"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ADF_Effect_Index",
            "compareType": "=",
            "value2": 0
          }
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability21_Anim1_Part02": {
      "fileName": "Feixiao_Feixiao_Ability21_Anim1_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_CostSPBeforeDamage"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo2_DealDamage"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo2_AfterDamageCheck"
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
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "Break"
              },
              {
                "name": "Compare: Variable",
                "value1": "First_Break_Effect",
                "compareType": ">=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Feixiao_TriggerBreak"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Active: Fast-Forward Animations"
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Feixiao_FrameHaltRealTime",
                  "variables": {
                    "parameter[0]_Realtime": 0.1,
                    "parameter[1]_TimeScale": 0.025
                  }
                }
              ],
              "failed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Feixiao_FrameHaltRealTime",
                  "variables": {
                    "parameter[0]_Realtime": 0.1,
                    "parameter[1]_TimeScale": 0.05
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_ComboPerformFinish"
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability21_Anim1_Part01": {
      "fileName": "Feixiao_Feixiao_Ability21_Anim1_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextAbility",
          "variableName": "ADF_Effect_Index",
          "value": {
            "operator": "Variables[0] (UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]) || Variables[1] (FLOOR) || Variables[2] (ComboHitCount) || Constants[0] (2) || DIV || PARAM_1 || FUNCTION || Constants[0] (2) || PARAM_2 || FUNCTION || RETURN",
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]</span>(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((ComboHitCount / 2)), 2)",
            "constants": [
              2
            ],
            "variables": [
              "UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]",
              "FLOOR",
              "ComboHitCount"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ADF_Effect_Index",
            "compareType": "=",
            "value2": 0
          }
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability21_Entry": {
      "fileName": "Feixiao_Feixiao_Ability21_Entry",
      "childAbilityList": [
        "Feixiao_Feixiao_Ability21_Entry",
        "Feixiao_Feixiao_Ability21_Camera_1",
        "Feixiao_Feixiao_Ability21_Camera_2",
        "Feixiao_Feixiao_Ability21_Anim1_Part01",
        "Feixiao_Feixiao_Ability21_Anim2_Part01",
        "Feixiao_Feixiao_Ability21_Anim1_Part02",
        "Feixiao_Feixiao_Ability21_Anim2_Part02",
        "Feixiao_Feixiao_Ability03_ComboFinish2_Camera",
        "Feixiao_Feixiao_Ability03_ComboFinish2_Part01",
        "Feixiao_Feixiao_Ability03_ComboFinish2_Part02"
      ],
      "skillTrigger": "Skill21",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        5,
        0,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill21_DamagePercentage",
              "value": {
                "operator": "Variables[0] (0.6) || RETURN",
                "displayLines": "0.6",
                "constants": [],
                "variables": [
                  0.6
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill21_DamagePercentage",
              "value": {
                "operator": "Variables[0] (0.6) || Variables[1] (0.3) || ADD || RETURN",
                "displayLines": "(0.6 + 0.3)",
                "constants": [],
                "variables": [
                  0.6,
                  0.3
                ]
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_ResetAnimSpeed"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Animator Variable",
                "paramType": "Bool",
                "paramName": "IsCombo",
                "compareType": "=",
                "compareValue": true
              },
              {
                "name": "Compare: Variable",
                "value1": "ComboType",
                "compareType": "=",
                "value2": 2
              }
            ],
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Combo2_Loop_Index",
              "value": {
                "operator": "Variables[0] (UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]) || Variables[1] (ComboHitCount) || Constants[0] (1) || ADD || Constants[1] (2) || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]</span>((ComboHitCount + 1), 2)",
                "constants": [
                  1,
                  2
                ],
                "variables": [
                  "UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]",
                  "ComboHitCount"
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Combo2_Loop_Index",
          "value": {
            "operator": "Variables[0] (Combo2_Loop_Index) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Combo2_Loop_Index + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Combo2_Loop_Index"
            ]
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": 99,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Combo2_Loop_Index",
            "compareType": ">",
            "value2": 2
          },
          "Event": [
            {
              "name": "Define Custom Variable",
              "variableName": "Combo2_Loop_Index",
              "value": {
                "operator": "Variables[0] (Combo2_Loop_Index) || Constants[0] (2) || SUB || RETURN",
                "displayLines": "(Combo2_Loop_Index - 2)",
                "constants": [
                  2
                ],
                "variables": [
                  "Combo2_Loop_Index"
                ]
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_ComboStartCheck"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Animator Variable",
                "paramType": "Bool",
                "paramName": "IsCombo",
                "compareType": "="
              },
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Animator Variable",
                    "paramType": "Bool",
                    "paramName": "IsCombo",
                    "compareType": "=",
                    "compareValue": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "ComboType",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Active: Fast-Forward Animations"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextCaster",
                  "variableName": "CDF_Combo_2_StartFrame",
                  "value": 12
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextCaster",
                  "variableName": "CDF_Combo_2_StartFrame",
                  "value": 12
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Active: Fast-Forward Animations"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextCaster",
                  "variableName": "CDF_Combo_2_StartFrame",
                  "value": 6
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextCaster",
                  "variableName": "CDF_Combo_2_StartFrame",
                  "value": 6
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ComboHitCount",
            "compareType": "=",
            "value2": {
              "operator": "Variables[0] (6) || Constants[0] (1) || SUB || RETURN",
              "displayLines": "(6 - 1)",
              "constants": [
                1
              ],
              "variables": [
                6
              ]
            }
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability03_ComboFinish2_Part01",
              "isTrigger": true
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability03_ComboFinish2_Part02",
              "isTrigger": true
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Combo2_Loop_Index",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                "Deleted bullshit",
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability21_Anim1_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability21_Anim1_Part02",
                  "isTrigger": true
                }
              ],
              "failed": [
                "Deleted bullshit",
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability21_Anim2_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability21_Anim2_Part02",
                  "isTrigger": true
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "ComboType",
          "value": 2
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability03_ComboFinish1_Part02": {
      "fileName": "Feixiao_Feixiao_Ability03_ComboFinish1_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_CostSPBeforeDamage"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_DealSubDamage"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (Ability11_DamagePercentage) || RETURN",
              "displayLines": "Ability11_DamagePercentage",
              "constants": [],
              "variables": [
                "Ability11_DamagePercentage"
              ]
            },
            "HitSplit": 0.9,
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
          },
          "attackType": "Ultimate"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_EnterFinish"
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability03_ComboFinish1_Part01": {
      "fileName": "Feixiao_Feixiao_Ability03_ComboFinish1_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Animator Variable",
            "paramType": "Bool",
            "paramName": "IsCombo",
            "compareType": "=",
            "compareValue": true
          }
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Active: Fast-Forward Animations"
          }
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability11_Anim4_Part02": {
      "fileName": "Feixiao_Feixiao_Ability11_Anim4_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_CostSPBeforeDamage"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_DealSubDamage"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_DealDamage"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_AfterDamageCheck"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Active: Fast-Forward Animations"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_ComboPerformFinish"
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability11_Anim4_Part01": {
      "fileName": "Feixiao_Feixiao_Ability11_Anim4_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Animator Variable",
            "paramType": "Bool",
            "paramName": "IsCombo",
            "compareType": "=",
            "compareValue": true
          }
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability11_Anim3_Part02": {
      "fileName": "Feixiao_Feixiao_Ability11_Anim3_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_CostSPBeforeDamage"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_DealSubDamage"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_DealDamage"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_AfterDamageCheck"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Active: Fast-Forward Animations"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_ComboPerformFinish"
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability11_Anim3_Part01": {
      "fileName": "Feixiao_Feixiao_Ability11_Anim3_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Animator Variable",
            "paramType": "Bool",
            "paramName": "IsCombo",
            "compareType": "=",
            "compareValue": true
          }
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability11_Anim2_Part02": {
      "fileName": "Feixiao_Feixiao_Ability11_Anim2_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_CostSPBeforeDamage"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_DealSubDamage"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_DealDamage"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_AfterDamageCheck"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Active: Fast-Forward Animations"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_ComboPerformFinish"
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability11_Anim2_Part01": {
      "fileName": "Feixiao_Feixiao_Ability11_Anim2_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Feixiao_Feixiao_Ability11_Anim1_Part02": {
      "fileName": "Feixiao_Feixiao_Ability11_Anim1_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_CostSPBeforeDamage"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_DealSubDamage"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_DealDamage"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_Combo1_AfterDamageCheck"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Active: Fast-Forward Animations"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_ComboPerformFinish"
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability11_Anim1_Part01": {
      "fileName": "Feixiao_Feixiao_Ability11_Anim1_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Animator Variable",
            "paramType": "Bool",
            "paramName": "IsCombo",
            "compareType": "=",
            "compareValue": true
          }
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability11_Entry": {
      "fileName": "Feixiao_Feixiao_Ability11_Entry",
      "childAbilityList": [
        "Feixiao_Feixiao_Ability11_Entry",
        "Feixiao_Feixiao_Ability11_Camera",
        "Feixiao_Feixiao_Ability11_Anim1_Part01",
        "Feixiao_Feixiao_Ability11_Anim2_Part01",
        "Feixiao_Feixiao_Ability11_Anim3_Part01",
        "Feixiao_Feixiao_Ability11_Anim4_Part01",
        "Feixiao_Feixiao_Ability11_Anim1_Part02",
        "Feixiao_Feixiao_Ability11_Anim2_Part02",
        "Feixiao_Feixiao_Ability11_Anim3_Part02",
        "Feixiao_Feixiao_Ability11_Anim4_Part02",
        "Feixiao_Feixiao_Ability03_ComboFinish1_Camera",
        "Feixiao_Feixiao_Ability03_ComboFinish1_Part01",
        "Feixiao_Feixiao_Ability03_ComboFinish1_Part02"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        5,
        0,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill11_DamagePercentage",
              "value": {
                "operator": "Variables[0] (0.6) || Variables[1] (0.3) || ADD || RETURN",
                "displayLines": "(0.6 + 0.3)",
                "constants": [],
                "variables": [
                  0.6,
                  0.3
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill11_DamagePercentage",
              "value": {
                "operator": "Variables[0] (0.6) || RETURN",
                "displayLines": "0.6",
                "constants": [],
                "variables": [
                  0.6
                ]
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_ResetAnimSpeed"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Animator Variable",
                "paramType": "Bool",
                "paramName": "IsCombo",
                "compareType": "=",
                "compareValue": true
              },
              {
                "name": "Compare: Variable",
                "value1": "ComboType",
                "compareType": "=",
                "value2": 1
              }
            ],
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Combo1_Loop_Index",
              "value": {
                "operator": "Variables[0] (UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]) || Variables[1] (ComboHitCount) || Constants[0] (3) || ADD || Constants[1] (4) || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]</span>((ComboHitCount + 3), 4)",
                "constants": [
                  3,
                  4
                ],
                "variables": [
                  "UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]",
                  "ComboHitCount"
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Combo1_Loop_Index",
          "value": {
            "operator": "Variables[0] (Combo1_Loop_Index) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(Combo1_Loop_Index + 1)",
            "constants": [
              1
            ],
            "variables": [
              "Combo1_Loop_Index"
            ]
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": 99,
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Combo1_Loop_Index",
            "compareType": ">",
            "value2": 4
          },
          "Event": [
            {
              "name": "Define Custom Variable",
              "variableName": "Combo1_Loop_Index",
              "value": {
                "operator": "Variables[0] (Combo1_Loop_Index) || Constants[0] (4) || SUB || RETURN",
                "displayLines": "(Combo1_Loop_Index - 4)",
                "constants": [
                  4
                ],
                "variables": [
                  "Combo1_Loop_Index"
                ]
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Feixiao_ComboStartCheck"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Animator Variable",
                "paramType": "Bool",
                "paramName": "IsCombo",
                "compareType": "=",
                "compareValue": true
              },
              {
                "name": "Compare: Variable",
                "value1": "ComboType",
                "compareType": "=",
                "value2": 2
              }
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Active: Fast-Forward Animations"
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "ContextCaster",
              "variableName": "CDF_Combo_1_StartFrame",
              "value": 4
            }
          ],
          "failed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "ContextCaster",
              "variableName": "CDF_Combo_1_StartFrame",
              "value": 6
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ComboHitCount",
            "compareType": "=",
            "value2": {
              "operator": "Variables[0] (6) || Constants[0] (1) || SUB || RETURN",
              "displayLines": "(6 - 1)",
              "constants": [
                1
              ],
              "variables": [
                6
              ]
            }
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability03_ComboFinish1_Part01",
              "isTrigger": true
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Feixiao_Ability03_ComboFinish1_Part02",
              "isTrigger": true
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Combo1_Loop_Index",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability11_Anim3_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability11_Anim3_Part02",
                  "isTrigger": true
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Combo1_Loop_Index",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability11_Anim4_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability11_Anim4_Part02",
                  "isTrigger": true
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Combo1_Loop_Index",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability11_Anim1_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability11_Anim1_Part02",
                  "isTrigger": true
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Combo1_Loop_Index",
                "compareType": "=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability11_Anim2_Part01",
                  "isTrigger": true
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability11_Anim2_Part02",
                  "isTrigger": true
                }
              ]
            },
            "Deleted bullshit"
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "ComboType",
          "value": 1
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability03_Part02": {
      "fileName": "Feixiao_Feixiao_Ability03_Part02",
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
          "modifier": "Feixiao_Ultramode"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "M_Feixiao_UltraTarget"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "First_Break_Effect",
              "value": 0
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Show",
              "abilityName": "Ultimate"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Hide",
              "abilityName": "Ultimate",
              "subAbilityIndex": 1
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Feixiao_Ultramode_StanceBreakPreshow"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "First_Break_Effect",
              "value": 1
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Hide",
              "abilityName": "Ultimate"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Show",
              "abilityName": "Ultimate",
              "subAbilityIndex": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "MuteHitFly"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "M_Feixiao_UltraTarget_Visual_Stun"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "M_Feixiao_UltraTarget_Visual_Confine"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "M_Feixiao_UltraTarget_Mark"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Force-Trigger Ability Next-Phase",
              "ability": "MISSING NAME OBJECT(Or implicit from Context)"
            }
          ],
          "failed": [
            {
              "name": "Force-Trigger Ability Next-Phase",
              "ability": "MISSING NAME OBJECT(Or implicit from Context)",
              "subAbilityIndex": 1
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "M_Feixiao_UltraTarget_FadeInFlag"
        },
        {
          "name": "Trigger: Ability End",
          "skipAttackSettle": true
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_Feixiao_Ability03_ForceStance"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "M_Feixiao_Ability03_StanceAddedPreshow"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_BreakableElite_Mark"
        },
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_BreakableElite_Listener",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Feixiao_RefreshUltraFrame"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Feixiao_RefreshUltraFrame"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Feixiao_RefreshUltraFrame"
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Feixiao_RefreshUltraFrame"
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Feixiao_RefreshUltraFrame"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "Feixiao_RefreshUltraFrame",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_StanceBreakAddedRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "ComboAttackCount",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (6) || RETURN",
                          "displayLines": "6",
                          "constants": [],
                          "variables": [
                            6
                          ]
                        }
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "MuteBreak",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Target__Toughness",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (ComboAttackCount) || Variables[1] (MDF_BaseStance) || MUL || Constants[0] (1) || Variables[2] (MDF_StanceBreakAddedRatio) || ADD || MUL || RETURN",
                          "displayLines": "((ComboAttackCount * MDF_BaseStance) * (1 + MDF_StanceBreakAddedRatio))",
                          "constants": [
                            1
                          ],
                          "variables": [
                            "ComboAttackCount",
                            "MDF_BaseStance",
                            "MDF_StanceBreakAddedRatio"
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "M_Feixiao_BreakableElite_Mark"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "M_Feixiao_BreakableElite_Mark"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_BreakableEliteMarker",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
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
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": ">=",
                        "value2": 3
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
                      "modifier": "M_Feixiao_BreakableElite_Listener",
                      "valuePerStack": {
                        "MDF_BaseStance": {
                          "operator": "Variables[0] (ST Toughness Value) || RETURN",
                          "displayLines": "ST Toughness Value",
                          "constants": [],
                          "variables": [
                            "ST Toughness Value"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "includeDyingTargets": true,
                  "maxTargets": 99,
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">=",
                    "value2": 3
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "M_Feixiao_BreakableElite_Listener",
                      "valuePerStack": {
                        "MDF_BaseStance": {
                          "operator": "Variables[0] (ST Toughness Value) || RETURN",
                          "displayLines": "ST Toughness Value",
                          "constants": [],
                          "variables": [
                            "ST Toughness Value"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "M_Feixiao_BreakableElite_Mark"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "M_Feixiao_BreakableElite_Mark"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Hostile Entities(AOE)}}"
                        },
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "M_Feixiao_BreakableElite_Mark"
                        },
                        "invertCondition": true
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
          "for": "M_Feixiao_Ability03_StanceAddedPreshow",
          "stackData": [],
          "latentQueue": [
            "First_Break_Effect"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Ultimate",
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Feixiao_Ultramode",
                  "invertCondition": true
                },
                {
                  "name": "Has Flag",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "flagName": "Break",
                  "invertCondition": true
                }
              ]
            },
            "toughnessReductionPreview": {
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
          "name": "Modifier Construction",
          "for": "M_Feixiao_Ability03_ForceStance",
          "stackData": [],
          "latentQueue": [
            "First_Break_Effect"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Ultimate",
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Feixiao_Ultramode",
              "invertCondition": true
            },
            "toughnessForcedReductionPreview": 1,
            "showAsForcedReduction": true
          }
        },
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_UltraTarget_Mark",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "M_Feixiao_UltraTarget_FadeInFlag"
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "trigger": "State_FadeIn"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "M_Feixiao_UltraTarget_CutFlag"
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "trigger": "State_Cut_2"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "M_Feixiao_UltraTarget_FinalHitFlag"
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "trigger": "State_FadeOut"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "First_Break_Effect"
          ],
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "M_Feixiao_UltraTarget"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_UltraTarget",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "modifier": "M_Feixiao_UltraTarget_Visual_Confine"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "modifier": "M_Feixiao_UltraTarget_Visual_Stun"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Feixiao_Ultramode",
                    "invertCondition": true
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
        }
      ]
    },
    "Feixiao_Feixiao_Ability03_Part01": {
      "fileName": "Feixiao_Feixiao_Ability03_Part01",
      "childAbilityList": [
        "Feixiao_Feixiao_Ability03_EnterReady",
        "Feixiao_Feixiao_Ability03_Camera",
        "Feixiao_Feixiao_Ability03_Part01",
        "Feixiao_Feixiao_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        30,
        0,
        0
      ],
      "parse": [
        {
          "name": "Update Character Panel Visibility",
          "show": "CasterOnly",
          "forceDisplayUltButton": true
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Feixiao_Ability03_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "MuteHitFly"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Is Auto-Battle",
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Force Team Target-Lock on Target",
              "team": "Player Team",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 99,
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "invertCondition": true
          }
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability03_EnterReady": {
      "fileName": "Feixiao_Feixiao_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Feixiao_Feixiao_Ability02_Part02": {
      "fileName": "Feixiao_Feixiao_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "M_Feixiao_Friend_Mark_Self"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
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
            "attackType": "Skill",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": 2,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
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
                "attackType": "Skill",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
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
              "abilityName": "Feixiao_Insert_SelectTargetSelf",
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
          ],
          "noTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "M_Feixiao_InsertCheckSelf"
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_Friend_Mark_Self",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}} - {{Modifier Holder}}"
                  },
                  "maxTargets": 99,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "M_Feixiao_Friend_Mark_Self"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "M_Feixiao_Friend_Mark_Self"
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
    "Feixiao_Feixiao_Ability02_Part01": {
      "fileName": "Feixiao_Feixiao_Ability02_Part01",
      "childAbilityList": [
        "Feixiao_Feixiao_Ability02_Camera",
        "Feixiao_Feixiao_Ability02_Part01",
        "Feixiao_Feixiao_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
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
          "ability": "Feixiao_Ability02_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "MuteHitFly"
          }
        }
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability01_Part02": {
      "fileName": "Feixiao_Feixiao_Ability01_Part02",
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
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.2,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.6,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Feixiao_Feixiao_Ability01_Part01": {
      "fileName": "Feixiao_Feixiao_Ability01_Part01",
      "childAbilityList": [
        "Feixiao_Feixiao_Ability01_Camera",
        "Feixiao_Feixiao_Ability01_Part01",
        "Feixiao_Feixiao_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
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
          "ability": "Feixiao_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Feixiao_Modifiers": {
      "fileName": "Feixiao_Modifiers",
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
          "for": "StageAbility_Maze_Feixiao_Modifier_GainSP",
          "execute": [
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
                      "name": "Update Energy",
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
                      },
                      "isFixed": "(Fixed)",
                      "ignoreBlock": true,
                      "isSpecialEnergy": true
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_UltraTarget_FinalHitFlag",
          "stackType": "ReplaceByCaster",
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "M_Feixiao_UltraTarget_Mark"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_UltraTarget_CutFlag",
          "stackType": "ReplaceByCaster",
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "M_Feixiao_UltraTarget_Mark"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_UltraTarget_FadeInFlag",
          "stackType": "ReplaceByCaster",
          "stackData": [],
          "latentQueue": [
            "First_Break_Effect"
          ],
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "M_Feixiao_UltraTarget_Mark"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_UltraTarget_Visual_Stun",
          "modifierFlags": [
            "STAT_Stun_Effect"
          ],
          "stackData": [],
          "latentQueue": [
            "First_Break_Effect"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_UltraTarget_Visual_Confine",
          "modifierFlags": [
            "STAT_Confine_Effect"
          ],
          "stackData": [],
          "latentQueue": [
            "First_Break_Effect"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_AchievementFlag"
        },
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_InsertCheckSelf",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Feixiao_InsertRetargetSelf"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Feixiao_InsertRetargetSelf"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Feixiao_InsertRetargetSelf"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Feixiao_InsertRetargetSelf"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
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
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOrRevivable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Feixiao_InsertRetargetSelf"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "Feixiao_InsertRetargetSelf",
              "parse": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "living": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Feixiao_Insert_SelectTargetSelf",
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
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "M_Feixiao_InsertCheck",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Feixiao_InsertRetarget"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Feixiao_InsertRetarget"
                }
              ],
              "priorityLevel": -55
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Feixiao_InsertRetarget"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Feixiao_InsertRetarget"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
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
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOrRevivable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Feixiao_InsertRetarget"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "Feixiao_InsertRetarget",
              "parse": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "living": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Feixiao_Insert_SelectTarget",
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
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Feixiao_Eidolon4_Property[<span class=\"descriptionNumberColor\">Stormward I Hear</span>]",
          "stackType": "ReplaceByCaster",
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
                    "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                    "displayLines": "MDF_PropertyRatio",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "latentQueue": [
            "IsUnCountedInsert"
          ],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "Stormward I Hear"
        },
        {
          "name": "Modifier Construction",
          "for": "Feixiao_Eidolon2_CD[<span class=\"descriptionNumberColor\">Moonward I Wish</span>]",
          "counter": 3,
          "stackData": [
            "MDF_Count"
          ],
          "latentQueue": [],
          "description": "In the Talent's effect, for every 1 instance of Follow-Up ATK launched by ally targets, Feixiao gains 1 point of \"Flying Aureus.\" This effect can still trigger <span class=\"descriptionNumberColor\">MDF_Count</span> time(s).",
          "type": "Other",
          "statusName": "Moonward I Wish"
        },
        {
          "name": "Modifier Construction",
          "for": "Feixiao_Eidolon1_Property[<span class=\"descriptionNumberColor\">Skyward I Quell</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "ModifyDamageData_IndependentDamageAddedRatio",
                      "variables": {
                        "parameter[0]_IndependentDamageAddedRatio": {
                          "operator": "Variables[0] (MDF_PropertyRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                          "displayLines": "(MDF_PropertyRatio * MDF_Layer)",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyRatio",
                            "MDF_Layer"
                          ]
                        }
                      }
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
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "description": "Each stack additionally increases the Ultimate DMG dealt by an amount equal to <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> of the original DMG.",
          "type": "Buff",
          "statusName": "Skyward I Quell"
        },
        {
          "name": "Modifier Construction",
          "for": "Feixiao_InsertIsReady[<span class=\"descriptionNumberColor\">Thunderhunt</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "The Talent's Follow-Up ATK can now be triggered.",
          "type": "Other",
          "statusName": "Thunderhunt"
        },
        {
          "name": "Modifier Construction",
          "for": "Feixiao_Ultramode_StanceBreakPreshow",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Feixiao Ult Target}}"
                    },
                    "flagName": "Break"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Caused Weakness Break [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Feixiao Ult Target}}"
                    },
                    "flagName": "Break"
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
          "for": "Feixiao_Ultramode",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ForceStanceDamage"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Toggle View Mode",
                  "enable": false
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ComboHitCount",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Combo1_Loop_Index",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Combo2_Loop_Index",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ComboType",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Feixiao_AchievementPrecheck",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                "Toggle View Mode",
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill03",
                  "skillSlot": "Ultimate",
                  "enableSecondaryType": "ControlSkill03"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Ultimate"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Ultimate",
                  "subAbilityIndex": 1
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Feixiao Ult Target}}"
                    },
                    "flagName": "Break"
                  },
                  "passed": [
                    {
                      "name": "Update Ability Enhance Button",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "display": "Show",
                      "abilityName": "Ultimate"
                    },
                    {
                      "name": "Update Ability Enhance Button",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "display": "Hide",
                      "abilityName": "Ultimate",
                      "subAbilityIndex": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Ability Enhance Button",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "display": "Hide",
                      "abilityName": "Ultimate"
                    },
                    {
                      "name": "Update Ability Enhance Button",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "display": "Show",
                      "abilityName": "Ultimate",
                      "subAbilityIndex": 1
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "value": 1
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill31",
                  "skillSlot": "Ultimate",
                  "enableSecondaryType": "ControlSkill03"
                }
              ]
            },
            {
              "eventTrigger": "Leave Battle"
            },
            {
              "eventTrigger": "End Broken State [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Feixiao Ult Target}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Feixiao_Ultramode_StanceBreakPreshow"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "showAsForcedReduction": true
          }
        }
      ],
      "references": []
    },
    "Feixiao_Functions": {
      "fileName": "Feixiao_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 15,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "Feixiao_Passive_ChargeTeamAttackCount",
          "parse": [
            {
              "name": "Define Custom Variable",
              "variableName": "Passive_AttackCount",
              "value": {
                "operator": "Variables[0] (Passive_AttackCount) || Variables[1] (parameter[0]_AddValue) || ADD || RETURN",
                "displayLines": "(Passive_AttackCount + parameter[0]_AddValue)",
                "constants": [],
                "variables": [
                  "Passive_AttackCount",
                  "parameter[0]_AddValue"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ComboAttackCount",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (12) || RETURN",
                  "displayLines": "12",
                  "constants": [],
                  "variables": [
                    12
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Passive_AttackCount",
                  "value": {
                    "operator": "Variables[0] (MIN) || Variables[1] (Passive_AttackCount) || Variables[2] (Passive_NeedAttackCount) || PARAM_2 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(Passive_AttackCount, Passive_NeedAttackCount)",
                    "constants": [],
                    "variables": [
                      "MIN",
                      "Passive_AttackCount",
                      "Passive_NeedAttackCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Feixiao_Passive_CostTeamAttackCountToGainSP"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Feixiao_Passive_CostTeamAttackCountToGainSP",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Passive_AttackCount",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (Passive_NeedAttackCount) || RETURN",
                      "displayLines": "Passive_NeedAttackCount",
                      "constants": [],
                      "variables": [
                        "Passive_NeedAttackCount"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "ComboAttackCount",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (12) || RETURN",
                      "displayLines": "12",
                      "constants": [],
                      "variables": [
                        12
                      ]
                    }
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
                  "value": 1,
                  "isFixed": "(Fixed)",
                  "ignoreBlock": true,
                  "isSpecialEnergy": true
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "Passive_AttackCount",
                  "context": "ContextCaster",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (Passive_NeedAttackCount) || SUB || RETURN",
                    "displayLines": "(0 - Passive_NeedAttackCount)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "Passive_NeedAttackCount"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Feixiao_ResetAnimSpeed",
          "parse": [
            {
              "name": "Define Custom Variable",
              "variableName": "ComboSpeed",
              "value": 1
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Feixiao_ComboStartCheck",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Animator Variable",
                    "paramType": "Bool",
                    "paramName": "IsCombo",
                    "compareType": "="
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Feixiao_Combo1_CostSPBeforeDamage",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Feixiao_Combo1_DealSubDamage",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (Ability11_DamagePercentage) || RETURN",
                  "displayLines": "Ability11_DamagePercentage",
                  "constants": [],
                  "variables": [
                    "Ability11_DamagePercentage"
                  ]
                },
                "HitSplit": 0.1,
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
              },
              "attackType": "Ultimate"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Feixiao_Combo1_DealDamage",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Combo1_Loop_Index",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (Ability11_DamagePercentage) || RETURN",
                      "displayLines": "Ability11_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "Ability11_DamagePercentage"
                      ]
                    },
                    "HitSplit": 0.9,
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
                  },
                  "attackType": "Ultimate"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Combo1_Loop_Index",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (Ability11_DamagePercentage) || RETURN",
                      "displayLines": "Ability11_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "Ability11_DamagePercentage"
                      ]
                    },
                    "HitSplit": 0.9,
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
                  },
                  "attackType": "Ultimate"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Combo1_Loop_Index",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (Ability11_DamagePercentage) || RETURN",
                      "displayLines": "Ability11_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "Ability11_DamagePercentage"
                      ]
                    },
                    "HitSplit": 0.9,
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
                  },
                  "attackType": "Ultimate"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Combo1_Loop_Index",
                "compareType": "=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (Ability11_DamagePercentage) || RETURN",
                      "displayLines": "Ability11_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "Ability11_DamagePercentage"
                      ]
                    },
                    "HitSplit": 0.9,
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
                  },
                  "attackType": "Ultimate"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Feixiao_Combo2_DealDamage",
          "parse": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "ContextAbility",
              "variableName": "ADF_Effect_Index",
              "value": {
                "operator": "Variables[0] (UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]) || Variables[1] (FLOOR) || Variables[2] (ComboHitCount) || Constants[0] (2) || DIV || PARAM_1 || FUNCTION || Constants[0] (2) || PARAM_2 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]</span>(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((ComboHitCount / 2)), 2)",
                "constants": [
                  2
                ],
                "variables": [
                  "UNKNOWN_OBJECT_FUNCTION_1[Vash is aware]",
                  "FLOOR",
                  "ComboHitCount"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Combo2_Loop_Index",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ADF_Effect_Index",
                    "compareType": "=",
                    "value2": 0
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
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (Skill21_DamagePercentage) || RETURN",
                      "displayLines": "Skill21_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "Skill21_DamagePercentage"
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
                  },
                  "attackType": "Ultimate"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ADF_Effect_Index",
                    "compareType": "=",
                    "value2": 0
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
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (Skill21_DamagePercentage) || RETURN",
                      "displayLines": "Skill21_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "Skill21_DamagePercentage"
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
                  },
                  "attackType": "Ultimate"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Feixiao_TriggerBreak",
          "parse": [
            {
              "name": "Define Custom Variable",
              "variableName": "First_Break_Effect",
              "value": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ComboType",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Active: Fast-Forward Animations"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Feixiao_Combo1_AfterDamageCheck",
          "parse": [
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
                  "modifier": "Feixiao_Eidolon1_Property[<span class=\"descriptionNumberColor\">Skyward I Quell</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (5) || RETURN",
                    "displayLines": "5",
                    "constants": [],
                    "variables": [
                      5
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.1) || RETURN",
                      "displayLines": "0.1",
                      "constants": [],
                      "variables": [
                        0.1
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "ComboHitCount",
              "context": "ContextCaster",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "M_Feixiao_UltraTarget_CutFlag"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "Break"
              },
              "passed": [
                {
                  "name": "Force-Trigger Ability Next-Phase",
                  "ability": "MISSING NAME OBJECT(Or implicit from Context)"
                }
              ],
              "failed": [
                {
                  "name": "Force-Trigger Ability Next-Phase",
                  "ability": "MISSING NAME OBJECT(Or implicit from Context)",
                  "subAbilityIndex": 1
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Hide",
                  "abilityName": "Ultimate"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Show",
                  "abilityName": "Ultimate",
                  "subAbilityIndex": 1
                }
              ]
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
                      "target": "{{Ability Target(ST)}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "First_Break_Effect",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Feixiao_TriggerBreak"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Feixiao_Combo2_AfterDamageCheck",
          "parse": [
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
                  "modifier": "Feixiao_Eidolon1_Property[<span class=\"descriptionNumberColor\">Skyward I Quell</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (5) || RETURN",
                    "displayLines": "5",
                    "constants": [],
                    "variables": [
                      5
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.1) || RETURN",
                      "displayLines": "0.1",
                      "constants": [],
                      "variables": [
                        0.1
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "ComboHitCount",
              "context": "ContextCaster",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "M_Feixiao_UltraTarget_CutFlag"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "flagName": "Break"
              },
              "passed": [
                {
                  "name": "Force-Trigger Ability Next-Phase",
                  "ability": "MISSING NAME OBJECT(Or implicit from Context)"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Show",
                  "abilityName": "Ultimate"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Hide",
                  "abilityName": "Ultimate",
                  "subAbilityIndex": 1
                }
              ],
              "failed": [
                {
                  "name": "Force-Trigger Ability Next-Phase",
                  "ability": "MISSING NAME OBJECT(Or implicit from Context)",
                  "subAbilityIndex": 1
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Feixiao_ComboPerformFinish",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "ComboHitCount",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (6) || Constants[0] (1) || SUB || RETURN",
                      "displayLines": "(6 - 1)",
                      "constants": [
                        1
                      ],
                      "variables": [
                        6
                      ]
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Feixiao_AchievementPrecheck",
                  "value": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Active: Fast-Forward Animations"
              }
            },
            {
              "name": "Trigger: Ability End",
              "skipAttackSettle": true
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Feixiao_EnterFinish",
          "parse": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "ComboHitCount",
              "context": "ContextCaster",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Feixiao_AchievementPrecheck",
                    "compareType": ">=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "ComboHitCount",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (6) || RETURN",
                      "displayLines": "6",
                      "constants": [],
                      "variables": [
                        6
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": "<=",
                    "value2": 0
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
                  "modifier": "M_Feixiao_AchievementFlag"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Active: Fast-Forward Animations"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "M_Feixiao_UltraTarget_FinalHitFlag"
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
                      "target": "{{Ability Target(ST)}}"
                    },
                    "flagName": "Break"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "First_Break_Effect",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Feixiao_TriggerBreak"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Active: Fast-Forward Animations"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ComboType",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "Monster_W2_Feixiao_MainEnd"
              },
              "passed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability03_Finish_W2Main_Part01"
                }
              ],
              "failed": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Feixiao_Ability03_Finish_Part01"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Feixiao_ReturnComboLoopOnCombo",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Animator Variable",
                "paramType": "Bool",
                "paramName": "IsStart",
                "compareType": "="
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Active: Fast-Forward Animations"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Feixiao_FrameHaltRealTime",
          "parse": []
        }
      ],
      "references": []
    }
  }
}