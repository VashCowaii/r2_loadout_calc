const compositeAbilityObject = {
  "fullCharacterName": "Hanya",
  "trimCharacterName": "Hanya",
  "abilityList": [
    "Hanya_Hanya_TechniqueInLevel",
    "Hanya_Hanya_PassiveAbility01",
    "Hanya_Hanya_Ability03_Part02",
    "Hanya_Hanya_Ability03_Part01",
    "Hanya_Hanya_Ability03_EnterReady",
    "Hanya_Hanya_Ability02_Part02",
    "Hanya_Hanya_Ability02_Part01",
    "Hanya_Hanya_Ability01_Part02",
    "Hanya_Hanya_Ability01_Part01",
    "Hanya_Modifiers"
  ],
  "abilityObject": {
    "Hanya_Hanya_TechniqueInLevel": {
      "fileName": "Hanya_Hanya_TechniqueInLevel",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        20,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "StageAbility_Maze_Hanya_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_Hanya_Modifier",
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
                      "name": "Find New Target",
                      "from": "All Enemies (AOE)",
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Ability Value",
                            "target": "Use Prior Target(s) Defined",
                            "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "ZhanYinCount",
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
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (ZhanYinCount) || RETURN",
                                "displayLines": "ZhanYinCount",
                                "constants": [],
                                "variables": [
                                  "ZhanYinCount"
                                ]
                              },
                              "maximum": {
                                "operator": "Variables[0] (2) || RETURN",
                                "displayLines": "2",
                                "constants": [],
                                "variables": [
                                  2
                                ]
                              },
                              "assignState": "True",
                              "priorState": "Active",
                              "bar#": 3,
                              "cooldown": 0
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Use Prior Target(s) Defined",
                              "modifier": "WHanya_BpZhanYin[<span class=\"descriptionNumberColor\">Burden</span>]",
                              "valuePerStack": {
                                "MDF_Lifetime": {
                                  "operator": "Variables[0] (2) || RETURN",
                                  "displayLines": "2",
                                  "constants": [],
                                  "variables": [
                                    2
                                  ]
                                },
                                "MDF_DamageUp": {
                                  "operator": "Variables[0] (0.3) || RETURN",
                                  "displayLines": "0.3",
                                  "constants": [],
                                  "variables": [
                                    0.3
                                  ]
                                },
                                "MDF_DamageUpExtra": {
                                  "operator": "Variables[0] (0.1) || RETURN",
                                  "displayLines": "0.1",
                                  "constants": [],
                                  "variables": [
                                    0.1
                                  ]
                                },
                                "MDF_RecoverCount": {
                                  "operator": "Variables[0] (1) || RETURN",
                                  "displayLines": "1",
                                  "constants": [],
                                  "variables": [
                                    1
                                  ]
                                },
                                "MDF_BPRecover": {
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
                              "to": "Caster",
                              "modifier": "WHanya_BpZhanYin_Self"
                            }
                          ]
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
    "Hanya_Hanya_PassiveAbility01": {
      "fileName": "Hanya_Hanya_PassiveAbility01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Define Custom Variable",
          "target": "Owner of this Modifier",
          "variableName": "ZhanYinCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "target": "Owner of this Modifier",
          "variableName": "ZhanYinCount_01",
          "value": 0
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (ZhanYinCount) || RETURN",
            "displayLines": "ZhanYinCount",
            "constants": [],
            "variables": [
              "ZhanYinCount"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "assignState": "True",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Hanya_AbilityPreShowModifier"
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
              "to": "Caster",
              "modifier": "Hanya_Eidolon2_Pre"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Hanya_AbilityPreShowModifier",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Caster",
                  "variableName": "MDF_Skill03_Speed",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Caster",
                  "variableName": "MDF_Skill03_Speed_Convert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Skill03_Speed",
                  "value": {
                    "operator": "Variables[0] (MDF_Skill03_Speed) || Variables[1] (MDF_Skill03_Speed_Convert) || SUB || RETURN",
                    "displayLines": "(MDF_Skill03_Speed - MDF_Skill03_Speed_Convert)",
                    "constants": [],
                    "variables": [
                      "MDF_Skill03_Speed",
                      "MDF_Skill03_Speed_Convert"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": "Current Visual Target(All)",
            "skillType": [
              "Ultimate"
            ],
            "conditions": {
              "name": "Has Modifier",
              "target": "Use Prior Target(s) Defined",
              "modifier": "WHanya_Ability03Bonus[<span class=\"descriptionNumberColor\">Edict</span>]",
              "invertCondition": true
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "(0.2 * MDF_Skill03_Speed)(SPD Change)"
            }
          }
        }
      ]
    },
    "Hanya_Hanya_Ability03_Part02": {
      "fileName": "Hanya_Hanya_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": "Caster",
          "variableName": "MDF_Skill03_Speed",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": "Caster",
          "variableName": "MDF_Skill03_Speed_Convert",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_Skill03_Speed",
          "value": {
            "operator": "Variables[0] (MDF_Skill03_Speed) || Variables[1] (MDF_Skill03_Speed_Convert) || SUB || RETURN",
            "displayLines": "(MDF_Skill03_Speed - MDF_Skill03_Speed_Convert)",
            "constants": [],
            "variables": [
              "MDF_Skill03_Speed",
              "MDF_Skill03_Speed_Convert"
            ]
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
              "name": "Define Custom Variable",
              "variableName": "MDF_Skill03_LifeTime",
              "value": {
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
              "name": "Define Custom Variable",
              "variableName": "MDF_Skill03_LifeTime",
              "value": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Single Target (Primary)",
          "modifier": "WHanya_Ability03Bonus[<span class=\"descriptionNumberColor\">Edict</span>]",
          "duration": {
            "operator": "Variables[0] (MDF_Skill03_LifeTime) || RETURN",
            "displayLines": "MDF_Skill03_LifeTime",
            "constants": [],
            "variables": [
              "MDF_Skill03_LifeTime"
            ]
          },
          "valuePerStack": {
            "Ability03_P1_ATKRatio": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
            },
            "Ability03_P3_Speed": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            },
            "MDF_Ability03_Speed": {
              "operator": "Variables[0] (MDF_Skill03_Speed) || RETURN",
              "displayLines": "MDF_Skill03_Speed",
              "constants": [],
              "variables": [
                "MDF_Skill03_Speed"
              ]
            }
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
              "to": "Single Target (Primary)",
              "modifier": "Hanya_Eidolon1_Other",
              "duration": {
                "operator": "Variables[0] (MDF_Skill03_LifeTime) || RETURN",
                "displayLines": "MDF_Skill03_LifeTime",
                "constants": [],
                "variables": [
                  "MDF_Skill03_LifeTime"
                ]
              }
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
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Hanya_Eidolon1"
            }
          ]
        },
        {
          "name": "Update Energy",
          "on": "Caster",
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Hanya_Hanya_Ability03_Part01": {
      "fileName": "Hanya_Hanya_Ability03_Part01",
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
          "from": "Caster",
          "ability": "Hanya_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Hanya_Hanya_Ability03_EnterReady": {
      "fileName": "Hanya_Hanya_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        "Deleted bullshit",
        {
          "name": "Use Custom Character Function",
          "functionName": "FaceDirOffsetConfigByFormationIndex"
        }
      ],
      "references": []
    },
    "Hanya_Hanya_Ability02_Part02": {
      "fileName": "Hanya_Hanya_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Shot Fired"
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (2.4) || RETURN",
              "displayLines": "2.4",
              "constants": [],
              "variables": [
                2.4
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
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Ability Value",
            "target": "Single Target (Primary)",
            "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "ZhanYinCount",
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
              "name": "Define Custom Variable",
              "variableName": "ZhanYinCount_01",
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (ZhanYinCount) || RETURN",
                "displayLines": "ZhanYinCount",
                "constants": [],
                "variables": [
                  "ZhanYinCount"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 3,
              "cooldown": 0
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Single Target (Primary)",
              "modifier": "WHanya_BpZhanYin[<span class=\"descriptionNumberColor\">Burden</span>]",
              "valuePerStack": {
                "MDF_Lifetime": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                },
                "MDF_DamageUp": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                },
                "MDF_DamageUpExtra": {
                  "operator": "Variables[0] (0.1) || RETURN",
                  "displayLines": "0.1",
                  "constants": [],
                  "variables": [
                    0.1
                  ]
                },
                "MDF_RecoverCount": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "MDF_BPRecover": {
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
              "to": "Caster",
              "modifier": "WHanya_BpZhanYin_Self"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Hanya_Hanya_Ability02_Part01": {
      "fileName": "Hanya_Hanya_Ability02_Part01",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Hanya_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Hanya_Hanya_Ability01_Part02": {
      "fileName": "Hanya_Hanya_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
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
    "Hanya_Hanya_Ability01_Part01": {
      "fileName": "Hanya_Hanya_Ability01_Part01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Hanya_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Hanya_Modifiers": {
      "fileName": "Hanya_Modifiers",
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
          "for": "WHanya_BpZhanYin_SpecialMark_Listen4",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
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
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count SUM",
                    "target": "Current Visual Target(All)",
                    "conditions": {
                      "name": "Compare: Target",
                      "target": "Owner of this Modifier",
                      "target2": "Use Prior Target(s) Defined"
                    }
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "WHanya_BpZhanYin_SpecialMark_Listen3",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
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
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count SUM",
                    "target": "Current Visual Target(All)",
                    "conditions": {
                      "name": "Compare: Target",
                      "target": "Owner of this Modifier",
                      "target2": "Use Prior Target(s) Defined"
                    }
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "WHanya_BpZhanYin_SpecialMark_Listen2",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
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
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count SUM",
                    "target": "Current Visual Target(All)",
                    "conditions": {
                      "name": "Compare: Target",
                      "target": "Owner of this Modifier",
                      "target2": "Use Prior Target(s) Defined"
                    }
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "WHanya_BpZhanYin_SpecialMark_Listen",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
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
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count SUM",
                    "target": "Current Visual Target(All)",
                    "conditions": {
                      "name": "Compare: Target",
                      "target": "Owner of this Modifier",
                      "target2": "Use Prior Target(s) Defined"
                    }
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Hanya_Eidolon2[<span class=\"descriptionNumberColor\">Two Views</span>]",
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
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
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
            }
          ],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Two Views",
          "statusName": "Two Views"
        },
        {
          "name": "Modifier Construction",
          "for": "Hanya_Eidolon2_Pre",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
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
                      "to": "Caster",
                      "modifier": "Hanya_Eidolon2[<span class=\"descriptionNumberColor\">Two Views</span>]",
                      "duration": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
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
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": "Owner of this Modifier",
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "NOT",
              "condition": {
                "name": "Has Modifier",
                "target": "Owner of this Modifier",
                "modifier": "Hanya_Eidolon2[<span class=\"descriptionNumberColor\">Two Views</span>]"
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
          "for": "Hanya_Eidolon1",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Rank01_Count",
                  "value": 0
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Hanya_PointB1[<span class=\"descriptionNumberColor\">Scrivener</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
            }
          ],
          "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Scrivener"
        },
        {
          "name": "Modifier Construction",
          "for": "WHanya_BpZhanYin_Self",
          "stackType": "Replace",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "ZhanYinCount",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ZhanYinCount_01",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (ZhanYinCount) || RETURN",
                    "displayLines": "ZhanYinCount",
                    "constants": [],
                    "variables": [
                      "ZhanYinCount"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 3,
                  "cooldown": 0
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Enemies (AOE)",
                  "modifier": "WHanya_BpZhanYin[<span class=\"descriptionNumberColor\">Burden</span>]"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (ZhanYinCount) || RETURN",
                    "displayLines": "ZhanYinCount",
                    "constants": [],
                    "variables": [
                      "ZhanYinCount"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "assignState": "True",
                  "bar#": 3,
                  "cooldown": 0
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ZhanYinCount",
                    "compareType": "<",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "All Enemies (AOE)",
                      "modifier": "WHanya_BpZhanYin[<span class=\"descriptionNumberColor\">Burden</span>]"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (ZhanYinCount) || RETURN",
                        "displayLines": "ZhanYinCount",
                        "constants": [],
                        "variables": [
                          "ZhanYinCount"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "assignState": "True",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (ZhanYinCount) || RETURN",
                        "displayLines": "ZhanYinCount",
                        "constants": [],
                        "variables": [
                          "ZhanYinCount"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ZhanYinCount",
                    "compareType": "<",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "All Enemies (AOE)",
                      "modifier": "WHanya_BpZhanYin[<span class=\"descriptionNumberColor\">Burden</span>]"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (ZhanYinCount) || RETURN",
                        "displayLines": "ZhanYinCount",
                        "constants": [],
                        "variables": [
                          "ZhanYinCount"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "assignState": "True",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (ZhanYinCount) || RETURN",
                        "displayLines": "ZhanYinCount",
                        "constants": [],
                        "variables": [
                          "ZhanYinCount"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 3,
                      "cooldown": 0
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
          "for": "Hanya_Passive_AddDamage[<span class=\"descriptionNumberColor\">Sanction</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageUp2) || RETURN",
                    "displayLines": "MDF_DamageUp2",
                    "constants": [],
                    "variables": [
                      "MDF_DamageUp2"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageUp2</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Sanction"
        },
        {
          "name": "Modifier Construction",
          "for": "WHanya_BpZhanYin[<span class=\"descriptionNumberColor\">Burden</span>]",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": "All Enemies(All)",
                  "searchRandom": true,
                  "maxTargets": 10,
                  "conditions": {
                    "name": "Compare: Target",
                    "target": "Use Prior Target(s) Defined",
                    "target2": "Owner of this Modifier",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "WHanya_BpZhanYin[<span class=\"descriptionNumberColor\">Burden</span>]"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackCount",
                  "value": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "WHanya_BpZhanYin_SpecialMark_Listen"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "WHanya_BpZhanYin_SpecialMark_Listen2"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "WHanya_BpZhanYin_SpecialMark_Listen"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "WHanya_BpZhanYin_SpecialMark_Listen2"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "WHanya_BpZhanYin_SpecialMark_Listen3"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "WHanya_BpZhanYin_SpecialMark_Listen4"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Entity Left Battle [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": "Owner of this Modifier",
                    "target": "Use Prior Target(s) Defined",
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "WHanya_BpZhanYin_Self"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Netherworld"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "ZhanYinCount_01",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (MDF_RecoverCount) || RETURN",
                          "displayLines": "MDF_RecoverCount",
                          "constants": [],
                          "variables": [
                            "MDF_RecoverCount"
                          ]
                        },
                        "contextScope": "ContextCaster"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "WHanya_BPRecover",
                      "valuePerStack": {
                        "MDF_RecoverValue": {
                          "operator": "Variables[0] (MDF_BPRecover) || RETURN",
                          "displayLines": "MDF_BPRecover",
                          "constants": [],
                          "variables": [
                            "MDF_BPRecover"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "WHanya_BpZhanYin_Self"
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]"
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
                        "name": "Is Part Of Team",
                        "target": "Use Prior Target(s) Defined",
                        "team": "TeamLight"
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Is Part Of",
                            "of": "Owner of this Modifier",
                            "target": "Use [SKILL TARGETS OF] Prior Target(s) Defined",
                            "mustBeAlive2": true
                          },
                          {
                            "name": "Is Part Of",
                            "of": "Owner of this Modifier",
                            "target": "Use [SKILL SUB-TARGETS OF] Prior Target(s) Defined",
                            "mustBeAlive2": true
                          }
                        ]
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Ultimate"
                          }
                        ]
                      }
                    ]
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
                          "to": "Use Prior Target(s) Defined",
                          "modifier": "Hanya_Passive_AddDamage[<span class=\"descriptionNumberColor\">Sanction</span>]",
                          "duration": {
                            "operator": "Variables[0] (MDF_Lifetime) || RETURN",
                            "displayLines": "MDF_Lifetime",
                            "constants": [],
                            "variables": [
                              "MDF_Lifetime"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DamageUp2": {
                              "operator": "Variables[0] (MDF_DamageUp) || Variables[1] (MDF_DamageUpExtra) || ADD || RETURN",
                              "displayLines": "(MDF_DamageUp + MDF_DamageUpExtra)",
                              "constants": [],
                              "variables": [
                                "MDF_DamageUp",
                                "MDF_DamageUpExtra"
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Use Prior Target(s) Defined",
                          "modifier": "Hanya_Passive_AddDamage[<span class=\"descriptionNumberColor\">Sanction</span>]",
                          "duration": {
                            "operator": "Variables[0] (MDF_Lifetime) || RETURN",
                            "displayLines": "MDF_Lifetime",
                            "constants": [],
                            "variables": [
                              "MDF_Lifetime"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DamageUp2": {
                              "operator": "Variables[0] (MDF_DamageUp) || RETURN",
                              "displayLines": "MDF_DamageUp",
                              "constants": [],
                              "variables": [
                                "MDF_DamageUp"
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
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": "Use Prior Target(s) Defined",
                        "team": "TeamLight"
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Is Part Of",
                            "of": "Owner of this Modifier",
                            "target": "Use [SKILL TARGETS OF] Prior Target(s) Defined",
                            "mustBeAlive2": true
                          },
                          {
                            "name": "Is Part Of",
                            "of": "Owner of this Modifier",
                            "target": "Use [SKILL SUB-TARGETS OF] Prior Target(s) Defined",
                            "mustBeAlive2": true
                          }
                        ]
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Skill Type",
                            "skillType": "Basic ATK"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Skill"
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Ultimate"
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AttackCount",
                      "value": {
                        "operator": "Variables[0] (MDF_AttackCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_AttackCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_AttackCount"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "MDF_AttackCount",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "WHanya_BpZhanYin_SpecialMark_Listen"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "WHanya_BpZhanYin_SpecialMark_Listen2"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "WHanya_BpZhanYin_SpecialMark_Listen3"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "WHanya_BpZhanYin_SpecialMark_Listen4"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "WHanya_BpZhanYin_SpecialMark_Listen3"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "WHanya_BpZhanYin_SpecialMark_Listen4"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_AttackCount",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "ZhanYinCount",
                          "value": {
                            "operator": "Variables[0] (ZhanYinCount) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(ZhanYinCount - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "ZhanYinCount"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "ZhanYinCount_01",
                          "value": {
                            "operator": "Variables[0] (ZhanYinCount_01) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(ZhanYinCount_01 + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "ZhanYinCount_01"
                            ]
                          }
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (ZhanYinCount) || RETURN",
                            "displayLines": "ZhanYinCount",
                            "constants": [],
                            "variables": [
                              "ZhanYinCount"
                            ]
                          },
                          "maximum": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          },
                          "assignState": "True",
                          "priorState": "Active",
                          "bar#": 3,
                          "cooldown": 0
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "WHanya_BPRecover",
                          "valuePerStack": {
                            "MDF_RecoverValue": 1
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Trace Activated",
                            "conditionList": "Scrivener"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Use Prior Target(s) Defined",
                              "modifier": "Hanya_PointB1[<span class=\"descriptionNumberColor\">Scrivener</span>]",
                              "duration": {
                                "operator": "Variables[0] (1) || RETURN",
                                "displayLines": "1",
                                "constants": [],
                                "variables": [
                                  1
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
                                }
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Trace Activated",
                            "conditionList": "Reanimated"
                          },
                          "passed": [
                            {
                              "name": "Update Energy",
                              "on": "Caster",
                              "value": {
                                "operator": "Variables[0] (2) || RETURN",
                                "displayLines": "2",
                                "constants": [],
                                "variables": [
                                  2
                                ]
                              },
                              "isFixed": "* ERR"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "ZhanYinCount",
                            "compareType": "<",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Owner of this Modifier",
                              "modifier": "WHanya_BpZhanYin[<span class=\"descriptionNumberColor\">Burden</span>]"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "WHanya_BpZhanYin_Self"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Owner of this Modifier",
                              "modifier": "WHanya_BpZhanYin_SpecialMark_Listen"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Owner of this Modifier",
                              "modifier": "WHanya_BpZhanYin_SpecialMark_Listen2"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Owner of this Modifier",
                              "modifier": "WHanya_BpZhanYin_SpecialMark_Listen3"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Owner of this Modifier",
                              "modifier": "WHanya_BpZhanYin_SpecialMark_Listen4"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Owner of this Modifier",
                              "modifier": "WHanya_BpZhanYin_SpecialMark_Listen"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": "Owner of this Modifier",
                              "modifier": "WHanya_BpZhanYin_SpecialMark_Listen2"
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
              "eventTrigger": "Get Revived [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Unselectable",
                    "target": "Owner of this Modifier"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "WHanya_BpZhanYin_Self"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "WHanya_BpZhanYin_SpecialMark_Listen"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "WHanya_BpZhanYin_SpecialMark_Listen2"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "WHanya_BpZhanYin_SpecialMark_Listen3"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "WHanya_BpZhanYin_SpecialMark_Listen4"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_Lifetime",
            "MDF_DamageUp",
            "MDF_DamageUpExtra",
            "MDF_RecoverCount",
            "MDF_BPRecover"
          ],
          "latentQueue": [],
          "description": "For every 2 Basic Attacks, Skills, or Ultimates allies use on an enemy with Burden, recover 1 Skill Point.",
          "type": "Other",
          "effectName": "Burden",
          "statusName": "Burden"
        },
        {
          "name": "Modifier Construction",
          "for": "Hanya_Eidolon1_Other",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_Rank01_Count",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        },
                        "contextScope": "ContextCaster"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Rank01_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_Rank01_Count) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_Rank01_Count + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_Rank01_Count"
                        ]
                      }
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": "Caster",
                      "advanceType": "Advance",
                      "value": "-0.15"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Got a Queued Kill [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_Rank01_Count",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        },
                        "contextScope": "ContextCaster"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Rank01_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_Rank01_Count) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_Rank01_Count + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_Rank01_Count"
                        ]
                      }
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": "Caster",
                      "advanceType": "Advance",
                      "value": "-0.15"
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
          "for": "WHanya_Ability03Bonus[<span class=\"descriptionNumberColor\">Edict</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (Ability03_P1_ATKRatio) || RETURN",
                    "displayLines": "Ability03_P1_ATKRatio",
                    "constants": [],
                    "variables": [
                      "Ability03_P1_ATKRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackDelta",
                  "value": {
                    "operator": "Variables[0] (Ability03_P1_ATKRatio) || RETURN",
                    "displayLines": "Ability03_P1_ATKRatio",
                    "constants": [],
                    "variables": [
                      "Ability03_P1_ATKRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (Ability03_P3_Speed) || Variables[1] (MDF_Skill03_Speed) || MUL || RETURN",
                    "displayLines": "(Ability03_P3_Speed * MDF_Skill03_Speed)",
                    "constants": [],
                    "variables": [
                      "Ability03_P3_Speed",
                      "MDF_Skill03_Speed"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Speed",
                  "value": {
                    "operator": "Variables[0] (Ability03_P3_Speed) || Variables[1] (MDF_Skill03_Speed) || MUL || RETURN",
                    "displayLines": "(Ability03_P3_Speed * MDF_Skill03_Speed)",
                    "constants": [],
                    "variables": [
                      "Ability03_P3_Speed",
                      "MDF_Skill03_Speed"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "Skill03_P1_ATKRatio",
            "Skill03_P3_Speed",
            "MDF_Skill03_Speed"
          ],
          "latentQueue": [],
          "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackDelta</span> and SPD by <span class=\"descriptionNumberColor\">MDF_Speed</span> points.",
          "type": "Buff",
          "effectName": "ATK & SPD Boost",
          "statusName": "Edict"
        },
        {
          "name": "Modifier Construction",
          "for": "WHanya_BPRecover",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "operator": "Variables[0] (MDF_RecoverValue) || RETURN",
                    "displayLines": "MDF_RecoverValue",
                    "constants": [],
                    "variables": [
                      "MDF_RecoverValue"
                    ]
                  },
                  "adjustmentType": "+"
                }
              ]
            }
          ],
          "stackData": [
            "MDF_RecoverValue"
          ],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}