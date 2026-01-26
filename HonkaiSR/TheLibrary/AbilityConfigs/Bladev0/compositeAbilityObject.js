const compositeAbilityObject = {
  "fullCharacterName": "Blade_v0",
  "trimCharacterName": "Bladev0",
  "abilityList": [
    "Bladev0_Ren_Eidolon6",
    "Bladev0_Ren_TechniqueInLevel",
    "Bladev0_Ren_Passive1Atk02_Ability",
    "Bladev0_Ren_Passive1Atk_Ability",
    "Bladev0_Ren_PassiveAbility01",
    "Bladev0_Ren_Ability03_Part02",
    "Bladev0_Ren_Ability03_Part01",
    "Bladev0_Ren_Ability03_EnterReady",
    "Bladev0_Ren_Bonus",
    "Bladev0_Ren_Ability02_Part02",
    "Bladev0_Ren_Ability02_Part01",
    "Bladev0_Ren_Ability11_Part02",
    "Bladev0_Ren_Ability11_Part01",
    "Bladev0_Ren_Ability01_Part02",
    "Bladev0_Ren_Ability01_Part01",
    "Bladev0_Modifiers"
  ],
  "abilityObject": {
    "Bladev0_Ren_Eidolon6": {
      "fileName": "Bladev0_Ren_Eidolon6",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Bladev0_Ren_TechniqueInLevel": {
      "fileName": "Bladev0_Ren_TechniqueInLevel",
      "childAbilityList": [
        "Bladev0_Ren_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Ren_TechniqueUsage_AOE"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Ren_TechniqueUsage_AOE",
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
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0.5
                          },
                          {
                            "name": "Eidolon Activated",
                            "eidolon": 4
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_MazeOverHalf",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Consume",
                      "consumeFrom": "MaxHP",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "consumePercent": {
                        "operator": "Variables[0] (0.2) || RETURN",
                        "displayLines": "0.2",
                        "constants": [],
                        "variables": [
                          0.2
                        ]
                      },
                      "consumeFloor": 1,
                      "attackType": "Maze"
                    },
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
                          "operator": "Variables[0] (0.4) || RETURN",
                          "displayLines": "0.4",
                          "constants": [],
                          "variables": [
                            0.4
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Technique",
                        "EnergyGainPercent": "100%"
                      }
                    },
                    "Trigger: Attack End"
                  ]
                }
              ],
              "priorityLevel": -60
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Bladev0_Ren_Passive1Atk02_Ability": {
      "fileName": "Bladev0_Ren_Passive1Atk02_Ability",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "MwRen_isAttack",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Cyclone of Destruction"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "MWRen_Trace03"
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
              "name": "Define Custom Variable",
              "variableName": "CasterHPPercentage",
              "value": {
                "operator": "Variables[0] (1.1) || Variables[1] (0.5) || ADD || RETURN",
                "displayLines": "(1.1 + 0.5)",
                "constants": [],
                "variables": [
                  1.1,
                  0.5
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "CasterHPPercentage",
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
          "name": "Looped Event",
          "maxLoops": 2,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (0.44) || RETURN",
                  "displayLines": "0.44",
                  "constants": [],
                  "variables": [
                    0.44
                  ]
                },
                "DamageExtra": {
                  "operator": "Variables[0] (CasterHPPercentage) || RETURN",
                  "displayLines": "CasterHPPercentage",
                  "constants": [],
                  "variables": [
                    "CasterHPPercentage"
                  ]
                },
                "dmgFormulaExtra": "Max HP Scaling",
                "HitSplit": 0.33,
                "Toughness": {
                  "operator": "Variables[0] (AOE Toughness Value) || RETURN",
                  "displayLines": "AOE Toughness Value",
                  "constants": [],
                  "variables": [
                    "AOE Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Follow-up",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (0.44) || RETURN",
              "displayLines": "0.44",
              "constants": [],
              "variables": [
                0.44
              ]
            },
            "DamageExtra": {
              "operator": "Variables[0] (CasterHPPercentage) || RETURN",
              "displayLines": "CasterHPPercentage",
              "constants": [],
              "variables": [
                "CasterHPPercentage"
              ]
            },
            "dmgFormulaExtra": "Max HP Scaling",
            "HitSplit": 0.34,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "healPercent": {
            "operator": "Variables[0] (0.25) || RETURN",
            "displayLines": "0.25",
            "constants": [],
            "variables": [
              0.25
            ]
          },
          "formula": "Heal from Target MaxHP"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MWRen_Qi[<span class=\"descriptionNumberColor\">Charge</span>]"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
            "displayLines": "MWRen_Qi_MaxLayer",
            "constants": [],
            "variables": [
              "MWRen_Qi_MaxLayer"
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 2,
          "cooldown": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Cyclone of Destruction"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "MWRen_Trace03"
            }
          ]
        }
      ],
      "references": []
    },
    "Bladev0_Ren_Passive1Atk_Ability": {
      "fileName": "Bladev0_Ren_Passive1Atk_Ability",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "includeNonTargets": true
          },
          "passed": [
            {
              "name": "UI Display Event",
              "popUpText": "Shuhu's Gift"
            },
            "Deleted bullshit",
            {
              "name": "Define Custom Variable",
              "variableName": "MwRen_isAttack",
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
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Ren_Passive1Atk02_Ability",
              "isTrigger": true
            }
          ]
        }
      ],
      "references": []
    },
    "Bladev0_Ren_PassiveAbility01": {
      "fileName": "Bladev0_Ren_PassiveAbility01",
      "childAbilityList": [
        "Bladev0_Ren_Passive_Camera",
        "Bladev0_Ren_PassiveAbility01",
        "Bladev0_Ren_Passive1Atk_Ability",
        "Bladev0_Ren_Passive1Atk02_Ability"
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
          "modifier": "MWRen_Passive"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MWRen_LoseHPPreShow"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MwRen_isAttack",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MwRen_AttackStart",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MwRen_isHeal",
          "value": 0
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CasterMaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CasterCurrentHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Eidolon Activated",
                "eidolon": 6
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MWRen_Qi_MaxLayer",
              "value": 4
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MWRen_Qi_MaxLayer",
              "value": 5
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
            "displayLines": "MWRen_Qi_MaxLayer",
            "constants": [],
            "variables": [
              "MWRen_Qi_MaxLayer"
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 2,
          "cooldown": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": 0.5
              },
              {
                "name": "Eidolon Activated",
                "eidolon": 4
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MwRen_isOverHalf",
              "value": 1
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MWRen_Passive",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MwRen_isHeal",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Dealt Damage while Crowd/Mind Controlled [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MwRen_isCharmAttack",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MwRen_isCharmAttack",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MwRen_isAttack",
                      "value": 1
                    }
                  ]
                }
              ],
              "priorityLevel": -100
            },
            {
              "eventTrigger": "Dealt Damage (END) while Crowd/Mind Controlled [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MwRen_isCharmAttack",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MwRen_isAttack",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MwRen_isAttack",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MwRen_AttackStart",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CasterCurrentHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MwRen_isHeal",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MwRen_AttackStart",
                        "compareType": "<",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MwRen_isAttack",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MwRen_AttackStart",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MwRen_isAttack",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Attack Type",
                        "attackTypes": [
                          "DOT",
                          "Additional DMG"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MwRen_AttackStart",
                            "compareType": "<",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MwRen_isAttack",
                              "value": 1
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
              "eventTrigger": "Receiving Heal Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Healing",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_HealValue"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_HealValue",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MwRen_isHeal",
                      "value": 1
                    }
                  ]
                }
              ],
              "priorityLevel": 200
            },
            {
              "eventTrigger": "Receiving Heal End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MwRen_isHeal",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MwRen_isHeal",
                    "compareType": ">",
                    "value2": 0
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "CasterCurrentHP2",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Changes to Stats",
                          "variableName": "CasterLostHP2"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "CasterLostHP",
                          "value": {
                            "operator": "Variables[0] (CasterLostHP2) || INVERT || Variables[1] (CasterLostHP) || ADD || RETURN",
                            "displayLines": "(-CasterLostHP2 + CasterLostHP)",
                            "constants": [],
                            "variables": [
                              "CasterLostHP2",
                              "CasterLostHP"
                            ]
                          }
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Ren_CheckHPChange"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MwRen_isAttack",
                            "compareType": "<",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MwRen_AttackStart",
                              "value": 0
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "MWRen_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
                                "displayLines": "MWRen_Qi_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MWRen_Qi_MaxLayer"
                                ]
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "MWRen_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
                                    "compareType": ">=",
                                    "value2": {
                                      "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
                                      "displayLines": "MWRen_Qi_MaxLayer",
                                      "constants": [],
                                      "variables": [
                                        "MWRen_Qi_MaxLayer"
                                      ]
                                    },
                                    "valueType": "Layer"
                                  },
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
                                  "abilityName": "Ren_Passive1Atk_Ability",
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
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.5
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Vita Infinita"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "MWRen_Trace01[<span class=\"descriptionNumberColor\">Vita Infinita</span>]",
                          "valuePerStack": {
                            "MDF_HealEnhanceRatio": {
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
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "MwRen_isOverHalf",
                            "compareType": ">=",
                            "value2": 1
                          },
                          {
                            "name": "Eidolon Activated",
                            "eidolon": 4
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MwRen_isOverHalf",
                          "value": 0
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "MWRen_Eidolon4_Add"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "MWRen_Trace01[<span class=\"descriptionNumberColor\">Vita Infinita</span>]"
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
                          "variableName": "MwRen_isOverHalf",
                          "value": 1
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CasterCurrentHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MwRen_AttackStart",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MwRen_isAttack",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MwRen_AttackStart",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MwRen_isAttack",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.5
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Vita Infinita"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "MWRen_Trace01[<span class=\"descriptionNumberColor\">Vita Infinita</span>]",
                          "valuePerStack": {
                            "MDF_HealEnhanceRatio": {
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
                        "name": "Compare: Variable",
                        "value1": "MWRen_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
                          "displayLines": "MWRen_Qi_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MWRen_Qi_MaxLayer"
                          ]
                        },
                        "valueType": "Layer"
                      },
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
                      "abilityName": "Ren_Passive1Atk_Ability",
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
                        "name": "Compare: Variable",
                        "value1": "MWRen_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
                          "displayLines": "MWRen_Qi_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MWRen_Qi_MaxLayer"
                          ]
                        },
                        "valueType": "Layer"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "flagName": "STAT_CTRL"
                        }
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "flagName": "DisableAction"
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
                      "abilityName": "Ren_Passive1Atk_Ability",
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
                        "name": "Compare: Variable",
                        "value1": "MWRen_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
                          "displayLines": "MWRen_Qi_MaxLayer",
                          "constants": [],
                          "variables": [
                            "MWRen_Qi_MaxLayer"
                          ]
                        },
                        "valueType": "Layer"
                      },
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
                      "abilityName": "Ren_Passive1Atk_Ability",
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
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "CasterCurrentHP2",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "CasterMaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CasterCurrentHP2",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (CasterCurrentHP) || RETURN",
                          "displayLines": "CasterCurrentHP",
                          "constants": [],
                          "variables": [
                            "CasterCurrentHP"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "Ren_CheckHPChange"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "whenValueChanges": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "CasterCurrentHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "Ren_CheckHPChange",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CasterMaxHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CasterLostHPPercentage",
                      "value": {
                        "operator": "Variables[0] (CasterLostHP) || Variables[1] (CasterMaxHP) || DIV || RETURN",
                        "displayLines": "(CasterLostHP / CasterMaxHP)",
                        "constants": [],
                        "variables": [
                          "CasterLostHP",
                          "CasterMaxHP"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CasterLostHPPercentage",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (0.9) || RETURN",
                      "displayLines": "0.9",
                      "constants": [],
                      "variables": [
                        0.9
                      ]
                    },
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CasterFinalLostHP",
                      "value": {
                        "operator": "Variables[0] (CasterMaxHP) || Variables[1] (0.9) || MUL || RETURN",
                        "displayLines": "(CasterMaxHP * 0.9)",
                        "constants": [],
                        "variables": [
                          "CasterMaxHP",
                          0.9
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CasterFinalLostHP",
                      "value": {
                        "operator": "Variables[0] (CasterLostHP) || RETURN",
                        "displayLines": "CasterLostHP",
                        "constants": [],
                        "variables": [
                          "CasterLostHP"
                        ]
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
                  "modifier": "MWRen_Ability03_Listen[<span class=\"descriptionNumberColor\">Death Sentence</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (CasterFinalLostHP) || RETURN",
                      "displayLines": "CasterFinalLostHP",
                      "constants": [],
                      "variables": [
                        "CasterFinalLostHP"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Bladev0_Ren_Ability03_Part02": {
      "fileName": "Bladev0_Ren_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">=",
            "value2": 0.5
          },
          "passed": [
            {
              "name": "Define Custom Variable with HP%",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "DamageExtra_HPRatio"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DamageExtra_HPRatio",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MwRen_isHeal",
              "value": 1
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CasterCurrentHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Set HP Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "clearNegativeHP": true,
          "setValue": {
            "operator": "Variables[0] (CasterMaxHP) || Constants[0] (0.5) || MUL || RETURN",
            "displayLines": "(CasterMaxHP * 0.5)",
            "constants": [
              0.5
            ],
            "variables": [
              "CasterMaxHP"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MwRen_isHeal",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CasterLostHPPercentage",
            "compareType": ">=",
            "value2": {
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
              ]
            },
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "CasterFinalLostHP",
              "value": {
                "operator": "Variables[0] (CasterMaxHP) || Variables[1] (0.9) || MUL || RETURN",
                "displayLines": "(CasterMaxHP * 0.9)",
                "constants": [],
                "variables": [
                  "CasterMaxHP",
                  0.9
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "CasterFinalLostHP",
              "value": {
                "operator": "Variables[0] (CasterLostHP) || RETURN",
                "displayLines": "CasterLostHP",
                "constants": [],
                "variables": [
                  "CasterLostHP"
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
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (CasterFinalLostHP) || Variables[1] (1) || MUL || Variables[0] (CasterFinalLostHP) || Variables[2] (1.5) || MUL || ADD || RETURN",
                  "displayLines": "((CasterFinalLostHP * 1) + (CasterFinalLostHP * 1.5))",
                  "constants": [],
                  "variables": [
                    "CasterFinalLostHP",
                    1,
                    1.5
                  ]
                },
                "DamageExtra": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "dmgFormulaExtra": "Max HP Scaling",
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
          ],
          "failed": [
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
                  "operator": "Variables[0] (CasterFinalLostHP) || Variables[1] (1) || MUL || RETURN",
                  "displayLines": "(CasterFinalLostHP * 1)",
                  "constants": [],
                  "variables": [
                    "CasterFinalLostHP",
                    1
                  ]
                },
                "DamageExtra": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "dmgFormulaExtra": "Max HP Scaling",
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (CasterFinalLostHP) || Variables[1] (0.4) || MUL || RETURN",
              "displayLines": "(CasterFinalLostHP * 0.4)",
              "constants": [],
              "variables": [
                "CasterFinalLostHP",
                0.4
              ]
            },
            "DamageExtra": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            },
            "dmgFormulaExtra": "Max HP Scaling",
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
          "variableName": "CasterLostHP",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "CasterFinalLostHP",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MWRen_Ability03_Listen[<span class=\"descriptionNumberColor\">Death Sentence</span>]"
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Bladev0_Ren_Ability03_Part01": {
      "fileName": "Bladev0_Ren_Ability03_Part01",
      "childAbilityList": [
        "Bladev0_Ren_Ability03_Camera",
        "Bladev0_Ren_Ability03_EnterReady",
        "Bladev0_Ren_Ability03_Part01",
        "Bladev0_Ren_Ability03_Part02"
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
          "ability": "Ren_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Bladev0_Ren_Ability03_EnterReady": {
      "fileName": "Bladev0_Ren_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Bladev0_Ren_Bonus": {
      "fileName": "Bladev0_Ren_Bonus",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": []
    },
    "Bladev0_Ren_Ability02_Part02": {
      "fileName": "Bladev0_Ren_Ability02_Part02",
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
          "variableName": "CasterCurrentHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (0.3) || RETURN",
            "displayLines": "0.3",
            "constants": [],
            "variables": [
              0.3
            ]
          },
          "consumeFloor": 1,
          "attackType": "BPSkill"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MWRen_Attack_Transfer[<span class=\"descriptionNumberColor\">Hellscape</span>]",
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
            "target": "{{Caster}}"
          },
          "modifier": "MWRen_Attack[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            }
          }
        },
        {
          "name": "Inject Extra-Turn",
          "actionTag": null,
          "canInjectUltimates": true,
          "abilityName": "Ren_Bonus",
          "afterInjection": []
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Bladev0_Ren_Ability02_Part01": {
      "fileName": "Bladev0_Ren_Ability02_Part01",
      "childAbilityList": [
        "Bladev0_Ren_Ability02_Camera",
        "Bladev0_Ren_Ability02_Part01",
        "Bladev0_Ren_Ability02_Part02",
        "Bladev0_Ren_Bonus",
        "Bladev0_Ren_Bonus_Camera"
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
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Ren_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Bladev0_Ren_Ability11_Part02": {
      "fileName": "Bladev0_Ren_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Neverending Deaths"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "MWRen_Trace02"
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "CasterCurrentHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] (0.1) || RETURN",
            "displayLines": "0.1",
            "constants": [],
            "variables": [
              0.1
            ]
          },
          "consumeFloor": 1,
          "attackType": "BPSkill"
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
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            },
            "DamageExtra": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "dmgFormulaExtra": "Max HP Scaling",
            "HitSplit": 0.5,
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
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            },
            "DamageExtra": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "dmgFormulaExtra": "Max HP Scaling",
            "HitSplit": 0.5,
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
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (0.16) || RETURN",
              "displayLines": "0.16",
              "constants": [],
              "variables": [
                0.16
              ]
            },
            "DamageExtra": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            },
            "dmgFormulaExtra": "Max HP Scaling",
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Bladev0_Ren_Ability11_Part01": {
      "fileName": "Bladev0_Ren_Ability11_Part01",
      "childAbilityList": [
        "Bladev0_Ren_Ability11_Part01",
        "Bladev0_Ren_Ability11_Part02",
        "Bladev0_Ren_Ability11_Camera"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": 30,
      "toughnessList": [
        20,
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
          "ability": "Ren_Ability11_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Bladev0_Ren_Ability01_Part02": {
      "fileName": "Bladev0_Ren_Ability01_Part02",
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
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.5,
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
            "HitSplit": 0.5,
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
    "Bladev0_Ren_Ability01_Part01": {
      "fileName": "Bladev0_Ren_Ability01_Part01",
      "childAbilityList": [
        "Bladev0_Ren_Ability01_Camera",
        "Bladev0_Ren_Ability01_Part01",
        "Bladev0_Ren_Ability01_Part02"
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
          "ability": "Ren_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Bladev0_Modifiers": {
      "fileName": "Bladev0_Modifiers",
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
          "for": "MWRen_LoseHPPreShow",
          "execute": [
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]",
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
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Update UI Preview",
                      "show": "Show",
                      "skillType": [
                        "Skill"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "previewType": null,
                      "previewValue": {
                        "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.3) || MUL || RETURN",
                        "displayLines": "(MDF_MaxHP * 0.3)",
                        "constants": [],
                        "variables": [
                          "MDF_MaxHP",
                          0.3
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "MWRen_Attack_Transfer[<span class=\"descriptionNumberColor\">Hellscape</span>]"
                      },
                      "passed": [
                        {
                          "name": "Update UI Preview",
                          "show": "Show",
                          "skillType": [
                            "Basic ATK"
                          ],
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "previewType": null,
                          "previewValue": {
                            "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.1) || MUL || RETURN",
                            "displayLines": "(MDF_MaxHP * 0.1)",
                            "constants": [],
                            "variables": [
                              "MDF_MaxHP",
                              0.1
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">=",
                        "value2": 0.5
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_CurrentHP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                        },
                        {
                          "name": "Update UI Preview",
                          "show": "Show",
                          "skillType": [
                            "Ultimate"
                          ],
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "previewType": null,
                          "previewValue": {
                            "operator": "Variables[0] (MDF_CurrentHP) || Variables[1] (MDF_MaxHP) || Constants[0] (0.5) || MUL || SUB || RETURN",
                            "displayLines": "(MDF_CurrentHP - (MDF_MaxHP * 0.5))",
                            "constants": [
                              0.5
                            ],
                            "variables": [
                              "MDF_CurrentHP",
                              "MDF_MaxHP"
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
          "for": "MWRen_Eidolon2[<span class=\"descriptionNumberColor\">Grievous Penitence</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CriticalIncrease",
                  "value": {
                    "operator": "Variables[0] (0.15) || RETURN",
                    "displayLines": "0.15",
                    "constants": [],
                    "variables": [
                      0.15
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CriticalIncrease) || RETURN",
                    "displayLines": "MDF_CriticalIncrease",
                    "constants": [],
                    "variables": [
                      "MDF_CriticalIncrease"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "CRIT Rate +<span class=\"descriptionNumberColor\">MDF_CriticalIncrease</span>.",
          "type": "Buff",
          "effectName": "CRIT Rate Boost",
          "statusName": "Grievous Penitence"
        },
        {
          "name": "Modifier Construction",
          "for": "MWRen_Eidolon4_Add",
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
                  "modifier": "MWRen_Eidolon4[<span class=\"descriptionNumberColor\">Heal All Bones</span>]",
                  "stackLimit": {
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
                  "variableName": "MwRen_isNeedHpAdded",
                  "value": 0
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MwRen_isHeal",
            "MwRen_isCharmAttack",
            "MwRen_isAttack",
            "MwRen_AttackStart",
            "MwRen_isOverHalf"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "MWRen_Eidolon4[<span class=\"descriptionNumberColor\">Heal All Bones</span>]",
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
                  "variableName": "MDF_Rank04_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HPIncrease",
                  "value": {
                    "operator": "Variables[0] (0.2) || Variables[1] (MDF_Rank04_Layer) || MUL || RETURN",
                    "displayLines": "(0.2 * MDF_Rank04_Layer)",
                    "constants": [],
                    "variables": [
                      0.2,
                      "MDF_Rank04_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_HPIncrease) || RETURN",
                    "displayLines": "MDF_HPIncrease",
                    "constants": [],
                    "variables": [
                      "MDF_HPIncrease"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MwRen_isOverHalf",
            "MwRen_AttackStart",
            "MwRen_isAttack",
            "MwRen_isCharmAttack",
            "MwRen_isHeal"
          ],
          "description": "Max HP +<span class=\"descriptionNumberColor\">MDF_HPIncrease</span>.",
          "type": "Buff",
          "effectName": "Max HP Boost",
          "statusName": "Heal All Bones",
          "stackLimit": 2,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "MWRen_Trace03",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
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
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
          "latentQueue": [
            "MwRen_isAttack"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "MWRen_Trace02",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target TAKING DMG}}"
                    },
                    "flagName": "Break"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Breaked",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Breaked",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (0.25) || RETURN",
                        "displayLines": "0.25",
                        "constants": [],
                        "variables": [
                          0.25
                        ]
                      },
                      "healFlat": {
                        "operator": "Variables[0] (0.2) || RETURN",
                        "displayLines": "0.2",
                        "constants": [],
                        "variables": [
                          0.2
                        ]
                      },
                      "formula": "Heal from Target MaxHP"
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "MWRen_Trace01[<span class=\"descriptionNumberColor\">Vita Infinita</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_HealEnhanceRatio) || RETURN",
                    "displayLines": "MDF_HealEnhanceRatio",
                    "constants": [],
                    "variables": [
                      "MDF_HealEnhanceRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_HealEnhanceRatio"
          ],
          "latentQueue": [
            "MwRen_isHeal",
            "MwRen_isCharmAttack",
            "MwRen_isAttack",
            "MwRen_AttackStart",
            "MwRen_isOverHalf"
          ],
          "description": "Incoming Healing +<span class=\"descriptionNumberColor\">MDF_HealEnhanceRatio</span>.",
          "type": "Buff",
          "effectName": "Outgoing Healing Boost",
          "statusName": "Vita Infinita",
          "stackLimit": 1
        },
        {
          "name": "Modifier Construction",
          "for": "MWRen_Ability03_Listen[<span class=\"descriptionNumberColor\">Death Sentence</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "MwRen_isHeal",
            "MwRen_isCharmAttack",
            "MwRen_isAttack",
            "MwRen_AttackStart",
            "MwRen_isOverHalf"
          ],
          "description": "HP Lost: <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>",
          "type": "Other",
          "statusName": "Death Sentence",
          "stackLimit": 1
        },
        {
          "name": "Modifier Construction",
          "for": "MWRen_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Constants[0] (0) || RETURN",
                    "displayLines": "0",
                    "constants": [
                      0
                    ],
                    "variables": []
                  },
                  "maximum": {
                    "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
                    "displayLines": "MWRen_Qi_MaxLayer",
                    "constants": [],
                    "variables": [
                      "MWRen_Qi_MaxLayer"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 2,
                  "cooldown": 0
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MWRen_Qi_Layer",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MWRen_Qi_Layer",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
                      "displayLines": "MWRen_Qi_MaxLayer",
                      "constants": [],
                      "variables": [
                        "MWRen_Qi_MaxLayer"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MWRen_Qi_Layer) || RETURN",
                        "displayLines": "MWRen_Qi_Layer",
                        "constants": [],
                        "variables": [
                          "MWRen_Qi_Layer"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
                        "displayLines": "MWRen_Qi_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MWRen_Qi_MaxLayer"
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 2,
                      "cooldown": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MWRen_Qi_Layer) || RETURN",
                        "displayLines": "MWRen_Qi_Layer",
                        "constants": [],
                        "variables": [
                          "MWRen_Qi_Layer"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
                        "displayLines": "MWRen_Qi_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MWRen_Qi_MaxLayer"
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 2,
                      "cooldown": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MWRen_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
                        "compareType": ">=",
                        "value2": 1,
                        "valueType": "Layer"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MWRen_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
                        "compareType": "<=",
                        "value2": 2,
                        "valueType": "Layer"
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "MWRen_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
                            "compareType": ">=",
                            "value2": 3,
                            "valueType": "Layer"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MWRen_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
                            "compareType": "<=",
                            "value2": {
                              "operator": "Variables[0] (MWRen_Qi_MaxLayer) || Constants[0] (1) || SUB || RETURN",
                              "displayLines": "(MWRen_Qi_MaxLayer - 1)",
                              "constants": [
                                1
                              ],
                              "variables": [
                                "MWRen_Qi_MaxLayer"
                              ]
                            },
                            "valueType": "Layer"
                          }
                        ]
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MWRen_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
                            "compareType": "=",
                            "value2": {
                              "operator": "Variables[0] (MWRen_Qi_MaxLayer) || RETURN",
                              "displayLines": "MWRen_Qi_MaxLayer",
                              "constants": [],
                              "variables": [
                                "MWRen_Qi_MaxLayer"
                              ]
                            },
                            "valueType": "Layer"
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
          "latentQueue": [
            "MwRen_isHeal",
            "MwRen_isCharmAttack",
            "MwRen_isAttack",
            "MwRen_AttackStart"
          ],
          "description": "At maximum Charge stacks, expends all stacks and immediately deals 1 instance of Follow-Up ATK to all enemies.",
          "type": "Other",
          "statusName": "Charge",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "MWRen_Attack[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
          "stackLimit": 1
        },
        {
          "name": "Modifier Construction",
          "for": "MWRen_Attack_Transfer[<span class=\"descriptionNumberColor\">Hellscape</span>]",
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
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "MWRen_Attack[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "MWRen_Eidolon2[<span class=\"descriptionNumberColor\">Grievous Penitence</span>]"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "display": "Hide",
                  "abilityName": "Basic ATK"
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
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Show",
                  "abilityName": "Basic ATK"
                },
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
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "MWRen_Eidolon2[<span class=\"descriptionNumberColor\">Grievous Penitence</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Basic ATK \"Shard Sword\" is enhanced, becoming \"Forest of Swords\" and dealing Blast DMG.",
          "type": "Other",
          "effectName": "Enhanced Basic ATK",
          "statusName": "Hellscape"
        }
      ],
      "references": []
    }
  }
}