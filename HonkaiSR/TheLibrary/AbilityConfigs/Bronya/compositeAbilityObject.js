const compositeAbilityObject = {
  "fullCharacterName": "Bronya",
  "trimCharacterName": "Bronya",
  "abilityList": [
    "Bronya_Bronya_Trace03",
    "Bronya_Bronya_Trace02",
    "Bronya_Bronya_Eidolon4_ATK",
    "Bronya_Bronya_Eidolon4",
    "Bronya_Bronya_Eidolon1",
    "Bronya_Bronya_TechniqueInLevel",
    "Bronya_Bronya_PassiveAbility_1",
    "Bronya_Bronya_Ability03_Part02",
    "Bronya_Bronya_Ability03_Part01",
    "Bronya_Bronya_Ability03_EnterReady",
    "Bronya_Bronya_Ability02_Self_Part02",
    "Bronya_Bronya_Ability02_Others_Part02",
    "Bronya_Bronya_Ability02_Part01",
    "Bronya_Bronya_Ability01_Part02",
    "Bronya_Bronya_Ability01_Part01",
    "Bronya_Modifiers"
  ],
  "abilityObject": {
    "Bronya_Bronya_Trace03": {
      "fileName": "Bronya_Bronya_Trace03",
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
          "modifier": "<a class=\"gModGreen\" id=\"1513749898\">M_Bronya_Tree03</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1513749898\">M_Bronya_Tree03</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Join Targets",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      {
                        "name": "Target Name",
                        "target": "{{All Unselectable Targets}}"
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-196204909\">Bronya_Tree03_DamageUp</a>",
                  "onlyRemoveOwnersInstance": true
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
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-196204909\">Bronya_Tree03_DamageUp</a>",
                  "valuePerStack": {
                    "MDF_AllDamageTypeAddedRatio": {
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
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Teammate",
                    "target": {
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
                      "modifier": "<a class=\"gModGreen\" id=\"-196204909\">Bronya_Tree03_DamageUp</a>",
                      "valuePerStack": {
                        "MDF_AllDamageTypeAddedRatio": {
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
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Bronya_Bronya_Trace02": {
      "fileName": "Bronya_Bronya_Trace02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1530527517\">M_Bronya_Tree02</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1530527517\">M_Bronya_Tree02</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2015057793\">Bronya_Tree02_DefenceUp</a>[<span class=\"descriptionNumberColor\">Battlefield</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_DefenceAddedRatio": {
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
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Teammate",
                    "target": {
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
                      "modifier": "<a class=\"gModGreen\" id=\"-2015057793\">Bronya_Tree02_DefenceUp</a>[<span class=\"descriptionNumberColor\">Battlefield</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DefenceAddedRatio": {
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
        }
      ]
    },
    "Bronya_Bronya_Eidolon4_ATK": {
      "fileName": "Bronya_Bronya_Eidolon4_ATK",
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
          "modifier": "<a class=\"gModGreen\" id=\"-109336730\">Bronya_Eidolon4_ATK_Flag</a>"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": 1,
          "assignState": "True",
          "priorState": "CoolDown",
          "bar#": 3,
          "cooldown": 1
        },
        {
          "name": "UI Display Event",
          "popUpText": "Take by Surprise"
        },
        "Deleted bullshit",
        {
          "name": "Shot Fired",
          "execute": [
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
                  "operator": "Variables[0] (1) || Variables[1] (0.8) || MUL || RETURN",
                  "displayLines": "(1 * 0.8)",
                  "constants": [],
                  "variables": [
                    1,
                    0.8
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
                "attackType": "Follow-up",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "Bronya_Bronya_Eidolon4": {
      "fileName": "Bronya_Bronya_Eidolon4",
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
          "modifier": "<a class=\"gModGreen\" id=\"-109336730\">Bronya_Eidolon4_ATK_Flag</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"49161632\">Bronya_Eidolon4_Listen</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-109336730\">Bronya_Eidolon4_ATK_Flag</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__49161632\">Bronya_Eidolon4_Listen</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 1,
                      "maximum": 1,
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
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-109336730\">Bronya_Eidolon4_ATK_Flag</a>"
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
                        "name": "NOT",
                        "condition": {
                          "name": "Current Action Holder Is",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          }
                        }
                      },
                      {
                        "name": "Current Action Holder's Team",
                        "team": "Player Team"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-109336730\">Bronya_Eidolon4_ATK_Flag</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target's Ability Targets}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Target Count",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target's Ability Targets}}"
                            },
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Has Weakness",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target's Ability Targets}}"
                            },
                            "DamageType": "Wind"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Bronya_Eidolon4_ATK",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target's Ability Targets}}"
                          },
                          "priorityTag": "AvatarInsertAttackSelf",
                          "showInActionOrder": true,
                          "abortFlags": [
                            "STAT_CTRL",
                            "DisableAction"
                          ],
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Target Count",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target's Ability Targets}}"
                            },
                            "compareType": ">",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              "searchRandom": true,
                              "maxTargets": 1,
                              "conditions": {
                                "name": "Has Weakness",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "DamageType": "Wind"
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Inject Ability Use",
                                  "abilityName": "Bronya_Eidolon4_ATK",
                                  "abilitySource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "abilityTarget": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
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
    "Bronya_Bronya_Eidolon1": {
      "fileName": "Bronya_Bronya_Eidolon1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Bronya_Bronya_TechniqueInLevel": {
      "fileName": "Bronya_Bronya_TechniqueInLevel",
      "childAbilityList": [
        "Bronya_Bronya_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1116100551\">Bronya_Maze_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1915866740\">Bronya_TechniqueUsage_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
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
          "description": "ATK +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "ATK Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1116100551\">Bronya_Maze_Modifier</a>",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1915866740\">Bronya_TechniqueUsage_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
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
    "Bronya_Bronya_PassiveAbility_1": {
      "fileName": "Bronya_Bronya_PassiveAbility_1",
      "childAbilityList": [
        "Bronya_Bronya_PassiveAbility_1",
        "Bronya_Bronya_Eidolon4_ATK",
        "Bronya_Bronya_Eidolon4_ATK_Camera"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 5,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 1,
              "maximum": 1,
              "assignState": "True",
              "priorState": "Active",
              "bar#": 3,
              "cooldown": 0
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-607688311\">Bronya_AttackPreshow</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"465486532\">Bronya_AbilityPreshow</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__465486532\">Bronya_AbilityPreshow</a>",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player's Aim Target List}}"
            },
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "Is Part Of",
              "of": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "mustBeAlive2": true,
              "invertCondition": true
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0(Set AV)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-607688311\">Bronya_AttackPreshow</a>",
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
              "Basic ATK"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (0.3) || INVERT || RETURN",
                "displayLines": "-0.3",
                "constants": [],
                "variables": [
                  0.3
                ]
              }
            }
          }
        }
      ]
    },
    "Bronya_Bronya_Ability03_Part02": {
      "fileName": "Bronya_Bronya_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MDF_CriticalDamageBase",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_CriticalDamageBase_change",
          "value": {
            "operator": "Variables[0] (MDF_CriticalDamageBase) || RETURN",
            "displayLines": "MDF_CriticalDamageBase",
            "constants": [],
            "variables": [
              "MDF_CriticalDamageBase"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_CriticalDamageBase_change",
          "value": {
            "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (0.16) || MUL || RETURN",
            "displayLines": "(MDF_CriticalDamageBase_change * 0.16)",
            "constants": [],
            "variables": [
              "MDF_CriticalDamageBase_change",
              0.16
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_CriticalDamageBase_Total",
          "value": {
            "operator": "Variables[0] (MDF_CriticalDamageBase_change) || Variables[1] (0.2) || ADD || RETURN",
            "displayLines": "(MDF_CriticalDamageBase_change + 0.2)",
            "constants": [],
            "variables": [
              "MDF_CriticalDamageBase_change",
              0.2
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-379855100\">Bronya_Ultimate_PowerUp</a>[<span class=\"descriptionNumberColor\">The Belobog March</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_AttackAddedRatio": {
              "operator": "Variables[0] (0.55) || RETURN",
              "displayLines": "0.55",
              "constants": [],
              "variables": [
                0.55
              ]
            },
            "Bronya_CriticalDamage": {
              "operator": "Variables[0] (MDF_CriticalDamageBase_Total) || RETURN",
              "displayLines": "MDF_CriticalDamageBase_Total",
              "constants": [],
              "variables": [
                "MDF_CriticalDamageBase_Total"
              ]
            }
          }
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
      "references": []
    },
    "Bronya_Bronya_Ability03_Part01": {
      "fileName": "Bronya_Bronya_Ability03_Part01",
      "childAbilityList": [
        "Bronya_Bronya_Ability03_Camera",
        "Bronya_Bronya_Ability03_EnterReady",
        "Bronya_Bronya_Ability03_Part01",
        "Bronya_Bronya_Ability03_Part02"
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
          "ability": "Bronya_Ability03_Part02"
        }
      ],
      "references": []
    },
    "Bronya_Bronya_Ability03_EnterReady": {
      "fileName": "Bronya_Bronya_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Bronya_Bronya_Ability02_Self_Part02": {
      "fileName": "Bronya_Bronya_Ability02_Self_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Eidolon Activated",
                "eidolon": 1
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1374988833\">Bronya_Eidolon1_CoolDown</a>[<span class=\"descriptionNumberColor\">Hone Your Strength</span>]"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": 1,
                      "adjustmentType": "+"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1374988833\">Bronya_Eidolon1_CoolDown</a>[<span class=\"descriptionNumberColor\">Hone Your Strength</span>]",
                      "duration": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "dispelCount": 1,
          "dispelOrder": "LastAdded"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Bronya_SpeedUP_Ratio_01",
              "value": {
                "operator": "Variables[0] (0.3) || RETURN",
                "displayLines": "0.3",
                "constants": [],
                "variables": [
                  0.3
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-308500305\">Bronya_BPAbility_Eidolon2_Listen</a>",
              "valuePerStack": {
                "Bronya_SpeedUP_Ratio_01": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
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
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"133730263\">Bronya_BPAbility_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "duration": {
                "operator": "Variables[0] (1) || Variables[1] (1) || ADD || RETURN",
                "displayLines": "(1 + 1)",
                "constants": [],
                "variables": [
                  1,
                  1
                ]
              },
              "valuePerStack": {
                "MDF_DamageAddedRatio": {
                  "operator": "Variables[0] (0.66) || RETURN",
                  "displayLines": "0.66",
                  "constants": [],
                  "variables": [
                    0.66
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
              "modifier": "<a class=\"gModGreen\" id=\"133730263\">Bronya_BPAbility_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "duration": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "valuePerStack": {
                "MDF_DamageAddedRatio": {
                  "operator": "Variables[0] (0.66) || RETURN",
                  "displayLines": "0.66",
                  "constants": [],
                  "variables": [
                    0.66
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
      "references": []
    },
    "Bronya_Bronya_Ability02_Others_Part02": {
      "fileName": "Bronya_Bronya_Ability02_Others_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Eidolon Activated",
                "eidolon": 1
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1374988833\">Bronya_Eidolon1_CoolDown</a>[<span class=\"descriptionNumberColor\">Hone Your Strength</span>]"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": 1,
                      "adjustmentType": "+"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1374988833\">Bronya_Eidolon1_CoolDown</a>[<span class=\"descriptionNumberColor\">Hone Your Strength</span>]",
                      "duration": 1
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "dispelCount": 1,
          "dispelOrder": "LastAdded"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Bronya_SpeedUP_Ratio_01",
              "value": {
                "operator": "Variables[0] (0.3) || RETURN",
                "displayLines": "0.3",
                "constants": [],
                "variables": [
                  0.3
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-308500305\">Bronya_BPAbility_Eidolon2_Listen</a>",
              "valuePerStack": {
                "Bronya_SpeedUP_Ratio_01": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
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
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"133730263\">Bronya_BPAbility_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "duration": {
                "operator": "Variables[0] (1) || Variables[1] (1) || ADD || RETURN",
                "displayLines": "(1 + 1)",
                "constants": [],
                "variables": [
                  1,
                  1
                ]
              },
              "valuePerStack": {
                "MDF_DamageAddedRatio": {
                  "operator": "Variables[0] (0.66) || RETURN",
                  "displayLines": "0.66",
                  "constants": [],
                  "variables": [
                    0.66
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
              "modifier": "<a class=\"gModGreen\" id=\"133730263\">Bronya_BPAbility_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "duration": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "valuePerStack": {
                "MDF_DamageAddedRatio": {
                  "operator": "Variables[0] (0.66) || RETURN",
                  "displayLines": "0.66",
                  "constants": [],
                  "variables": [
                    0.66
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "set": 0
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
      "references": []
    },
    "Bronya_Bronya_Ability02_Part01": {
      "fileName": "Bronya_Bronya_Ability02_Part01",
      "childAbilityList": [
        "Bronya_Bronya_Ability02_Others_Camera",
        "Bronya_Bronya_Ability02_Self_Camera",
        "Bronya_Bronya_Ability02_Part01",
        "Bronya_Bronya_Ability02_Others_Part02",
        "Bronya_Bronya_Ability02_Self_Part02"
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
        {
          "name": "IF",
          "conditions": {
            "name": "Current Action Holder Is",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          },
          "passed": [
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Bronya_Ability02_Self_Part02",
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
              "ability": "Bronya_Ability02_Others_Part02",
              "isTrigger": true
            }
          ]
        }
      ],
      "references": []
    },
    "Bronya_Bronya_Ability01_Part02": {
      "fileName": "Bronya_Bronya_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Command"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1586559461\">M_Bronya_Critcal</a>"
            }
          ]
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
              "canPhase": true,
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
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Command"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1586559461\">M_Bronya_Critcal</a>"
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1527090005\">ReduceNextActionDelay</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variables": {
            "parameter[0]_NormalizedValue": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1586559461\">M_Bronya_Critcal</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
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
        }
      ]
    },
    "Bronya_Bronya_Ability01_Part01": {
      "fileName": "Bronya_Bronya_Ability01_Part01",
      "childAbilityList": [
        "Bronya_Bronya_Ability01_Camera",
        "Bronya_Bronya_Ability01_Part01",
        "Bronya_Bronya_Ability01_Part02"
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
          "ability": "Bronya_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Bronya_Modifiers": {
      "fileName": "Bronya_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-2015057793\">Bronya_Tree02_DefenceUp</a>[<span class=\"descriptionNumberColor\">Battlefield</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DefenceAddedRatio) || RETURN",
                    "displayLines": "MDF_DefenceAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DefenceAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DefenceAddedRatio"
          ],
          "latentQueue": [],
          "description": "DEF increases by <span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio</span>",
          "type": "Buff",
          "statusName": "Battlefield"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-196204909\">Bronya_Tree03_DamageUp</a>",
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
                    "operator": "Variables[0] (MDF_AllDamageTypeAddedRatio) || RETURN",
                    "displayLines": "MDF_AllDamageTypeAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AllDamageTypeAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AllDamageTypeAddedRatio"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-691391461\">Bronya_BPAbility_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
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
                    "operator": "Variables[0] (Bronya_SpeedUP_Ratio) || RETURN",
                    "displayLines": "Bronya_SpeedUP_Ratio",
                    "constants": [],
                    "variables": [
                      "Bronya_SpeedUP_Ratio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "SPD +<span class=\"descriptionNumberColor\">Bronya_SpeedUP_Ratio</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__133730263\">Bronya_BPAbility_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                    "operator": "Variables[0] (MDF_DamageAddedRatio) || RETURN",
                    "displayLines": "MDF_DamageAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_DamageAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageAddedRatio"
          ],
          "latentQueue": [],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-379855100\">Bronya_Ultimate_PowerUp</a>[<span class=\"descriptionNumberColor\">The Belobog March</span>]",
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
                    "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                    "displayLines": "MDF_AttackAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (Bronya_CriticalDamage) || RETURN",
                    "displayLines": "Bronya_CriticalDamage",
                    "constants": [],
                    "variables": [
                      "Bronya_CriticalDamage"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AttackAddedRatio",
            "Bronya_CriticalDamage"
          ],
          "latentQueue": [],
          "description": "ATK +<span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span> and CRIT DMG +<span class=\"descriptionNumberColor\">Bronya_CriticalDamage</span>.",
          "type": "Buff",
          "effectName": "ATK and CRIT DMG Boost",
          "statusName": "The Belobog March",
          "duration": 2
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1374988833\">Bronya_Eidolon1_CoolDown</a>[<span class=\"descriptionNumberColor\">Hone Your Strength</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "Hone Your Strength effect cannot be triggered.",
          "type": "Other",
          "statusName": "Hone Your Strength"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-308500305\">Bronya_BPAbility_Eidolon2_Listen</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-691391461\">Bronya_BPAbility_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                  "duration": 1,
                  "valuePerStack": {
                    "Bronya_SpeedUP_Ratio": {
                      "operator": "Variables[0] (Bronya_SpeedUP_Ratio_01) || RETURN",
                      "displayLines": "Bronya_SpeedUP_Ratio_01",
                      "constants": [],
                      "variables": [
                        "Bronya_SpeedUP_Ratio_01"
                      ]
                    }
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "Bronya_SpeedUP_Ratio_01"
          ],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "conditions": {
              "name": "NOT",
              "condition": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-691391461\">Bronya_BPAbility_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
              }
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "Bronya_SpeedUP_Ratio_01(SPD Change)"
            }
          }
        }
      ],
      "references": []
    }
  }
}