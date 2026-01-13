const compositeAbilityObject = {
  "fullCharacterName": "Blade",
  "trimCharacterName": "Blade",
  "abilityList": [
    "Blade_AdvancedRen_Eidolon6",
    "Blade_AdvancedRen_TechniqueInLevel",
    "Blade_AdvancedRen_Passive1Atk02_Ability",
    "Blade_AdvancedRen_Passive1Atk_Ability",
    "Blade_AdvancedRen_PassiveAbility01",
    "Blade_AdvancedRen_Ability03_Part02",
    "Blade_AdvancedRen_Ability03_Part01",
    "Blade_AdvancedRen_Ability03_EnterReady",
    "Blade_AdvancedRen_Bonus",
    "Blade_AdvancedRen_Ability02_Part02",
    "Blade_AdvancedRen_Ability02_Part01",
    "Blade_AdvancedRen_Ability11_Part02",
    "Blade_AdvancedRen_Ability11_Part01",
    "Blade_AdvancedRen_Ability01_Part02",
    "Blade_AdvancedRen_Ability01_Part01",
    "Blade_Modifiers",
    "Blade_Functions"
  ],
  "abilityObject": {
    "Blade_AdvancedRen_Eidolon6": {
      "fileName": "Blade_AdvancedRen_Eidolon6",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Blade_AdvancedRen_TechniqueInLevel": {
      "fileName": "Blade_AdvancedRen_TechniqueInLevel",
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
                            "target": "Owner of this Modifier",
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
                      "target": "Caster",
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
                      "target": "All Hostile Entities (AOE)",
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
    "Blade_AdvancedRen_Passive1Atk02_Ability": {
      "fileName": "Blade_AdvancedRen_Passive1Atk02_Ability",
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
              "to": "Caster",
              "modifier": "Advanced_Ren_Trace03"
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
                "operator": "Variables[0] (1.3) || Variables[1] (0.5) || ADD || RETURN",
                "displayLines": "(1.3 + 0.5)",
                "constants": [],
                "variables": [
                  1.3,
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
                "operator": "Variables[0] (1.3) || RETURN",
                "displayLines": "1.3",
                "constants": [],
                "variables": [
                  1.3
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
              "target": "All Hostile Entities (AOE)",
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (CasterHPPercentage) || RETURN",
                  "displayLines": "CasterHPPercentage",
                  "constants": [],
                  "variables": [
                    "CasterHPPercentage"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
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
          "target": "All Hostile Entities (AOE)",
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (CasterHPPercentage) || RETURN",
              "displayLines": "CasterHPPercentage",
              "constants": [],
              "variables": [
                "CasterHPPercentage"
              ]
            },
            "dmgFormula": "Max HP Scaling",
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
          "target": "Caster",
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
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Cyclone of Destruction"
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": "Caster",
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
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Advanced_Ren_Qi[<span class=\"descriptionNumberColor\">Charge</span>]"
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
              "to": "Caster",
              "modifier": "Advanced_Ren_Trace03"
            }
          ]
        }
      ],
      "references": []
    },
    "Blade_AdvancedRen_Passive1Atk_Ability": {
      "fileName": "Blade_AdvancedRen_Passive1Atk_Ability",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": "Caster",
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
              "from": "Caster",
              "inherentTarget": "Single Target (Primary)",
              "ability": "AdvancedRen_Passive1Atk02_Ability",
              "isTrigger": true
            }
          ]
        }
      ],
      "references": []
    },
    "Blade_AdvancedRen_PassiveAbility01": {
      "fileName": "Blade_AdvancedRen_PassiveAbility01",
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
          "to": "Caster",
          "modifier": "Advanced_Ren_Passive"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Advanced_Ren_LoseHPPreShow"
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
          "name": "Define Custom Variable with Stat",
          "target": "Caster",
          "variableName": "CasterMaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": "Caster",
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
                "target": "Owner of this Modifier",
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
          "for": "Advanced_Ren_Passive",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
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
                  "target": "Caster",
                  "variableName": "CasterCurrentHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
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
                    "target": "Use Prior Target(s) Defined"
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
                        "target": "Use Prior Target(s) Defined"
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
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Caster",
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
                          "to": "Caster",
                          "modifier": "Advanced_Ren_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
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
                                "value1": "Advanced_Ren_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
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
                                "target": "Caster",
                                "flagName": "STAT_CTRL",
                                "invertCondition": true
                              },
                              {
                                "name": "Has Flag",
                                "target": "Caster",
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
                              "abilityName": "AdvancedRen_Passive1Atk_Ability",
                              "abilitySource": "Caster",
                              "abilityTarget": "All Hostile Entities (AOE)",
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
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Caster",
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.5
                  },
                  "passed": [
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
                          "to": "Caster",
                          "modifier": "Advanced_Ren_Eidolon4_Add"
                        }
                      ]
                    }
                  ],
                  "failed": [
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
                  "target": "Caster",
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
                    "name": "Trace Activated",
                    "conditionList": "Neverending Deaths"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Advanced_Ren_Trace02[<span class=\"descriptionNumberColor\">Neverending Deaths</span>]"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
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
                        "value1": "Advanced_Ren_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
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
                        "target": "Caster",
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
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
                      "abilityName": "AdvancedRen_Passive1Atk_Ability",
                      "abilitySource": "Caster",
                      "abilityTarget": "All Hostile Entities (AOE)",
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
                        "value1": "Advanced_Ren_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
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
                          "target": "Caster",
                          "flagName": "STAT_CTRL"
                        }
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Flag",
                          "target": "Caster",
                          "flagName": "DisableAction"
                        }
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Modifier Has Flag",
                            "target": "Caster",
                            "flagName": "STAT_CTRL"
                          },
                          {
                            "name": "Modifier Has Flag",
                            "target": "Caster",
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
                      "abilityName": "AdvancedRen_Passive1Atk_Ability",
                      "abilitySource": "Caster",
                      "abilityTarget": "All Hostile Entities (AOE)",
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
                        "value1": "Advanced_Ren_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
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
                        "target": "Caster",
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
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
                      "abilityName": "AdvancedRen_Passive1Atk_Ability",
                      "abilitySource": "Caster",
                      "abilityTarget": "All Hostile Entities (AOE)",
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
                      "target": "Caster",
                      "variableName": "CasterCurrentHP2",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Caster",
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
                      "target": "Caster",
                      "variableName": "CasterCurrentHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Blade_AdvancedRen_Ability03_Part02": {
      "fileName": "Blade_AdvancedRen_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": "Owner of this Modifier",
            "value1": "CurrentHP%",
            "compareType": ">=",
            "value2": 0.5
          },
          "passed": [
            {
              "name": "Define Custom Variable with HP%",
              "target": "Owner of this Modifier",
              "variableName": "DamageExtra_HPRatio"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DamageExtra_HPRatio",
              "value": 0
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": "Caster",
          "variableName": "CasterCurrentHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Set HP Value",
          "target": "Caster",
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
              "target": "Single Target (Primary)",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (CasterFinalLostHP) || Variables[1] (1.2) || MUL || Variables[0] (CasterFinalLostHP) || Variables[2] (1.5) || MUL || ADD || RETURN",
                  "displayLines": "((CasterFinalLostHP * 1.2) + (CasterFinalLostHP * 1.5))",
                  "constants": [],
                  "variables": [
                    "CasterFinalLostHP",
                    1.2,
                    1.5
                  ]
                },
                "dmgFormula": "Max HP Scaling",
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
              "target": "Single Target (Primary)",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (CasterFinalLostHP) || Variables[1] (1.2) || MUL || RETURN",
                  "displayLines": "(CasterFinalLostHP * 1.2)",
                  "constants": [],
                  "variables": [
                    "CasterFinalLostHP",
                    1.2
                  ]
                },
                "dmgFormula": "Max HP Scaling",
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
          "target": "Blast (Adjacent)",
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (CasterFinalLostHP) || Variables[1] (0.6) || MUL || RETURN",
              "displayLines": "(CasterFinalLostHP * 0.6)",
              "constants": [],
              "variables": [
                "CasterFinalLostHP",
                0.6
              ]
            },
            "dmgFormula": "Max HP Scaling",
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
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Vita Infinita"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CasterFinalLostHP",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "CasterLostHP",
                  "value": {
                    "operator": "Variables[0] (CasterFinalLostHP) || Constants[0] (1) || Variables[1] (0.5) || SUB || MUL || RETURN",
                    "displayLines": "(CasterFinalLostHP * (1 - 0.5))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "CasterFinalLostHP",
                      0.5
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CasterFinalLostHP",
                  "value": {
                    "operator": "Variables[0] (CasterFinalLostHP) || Constants[0] (1) || Variables[1] (0.5) || SUB || MUL || RETURN",
                    "displayLines": "(CasterFinalLostHP * (1 - 0.5))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "CasterFinalLostHP",
                      0.5
                    ]
                  }
                }
              ]
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Ren_CheckHPChange"
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Advanced_Ren_Ability03_Listen[<span class=\"descriptionNumberColor\">Death Sentence</span>]",
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
          ],
          "failed": [
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
              "name": "Use Custom Character Function",
              "functionName": "Ren_CheckHPChange"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Advanced_Ren_Ability03_Listen[<span class=\"descriptionNumberColor\">Death Sentence</span>]"
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Blade_AdvancedRen_Ability03_Part01": {
      "fileName": "Blade_AdvancedRen_Ability03_Part01",
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
          "from": "Caster",
          "ability": "AdvancedRen_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Blade_AdvancedRen_Ability03_EnterReady": {
      "fileName": "Blade_AdvancedRen_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Blade_AdvancedRen_Bonus": {
      "fileName": "Blade_AdvancedRen_Bonus",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": []
    },
    "Blade_AdvancedRen_Ability02_Part02": {
      "fileName": "Blade_AdvancedRen_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": "Caster",
          "variableName": "CasterCurrentHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": "Caster",
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
          "to": "Caster",
          "modifier": "Advanced_Ren_Attack_Transfer[<span class=\"descriptionNumberColor\">Hellscape</span>]",
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
          "to": "Caster",
          "modifier": "Advanced_Ren_Attack[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.4) || RETURN",
              "displayLines": "0.4",
              "constants": [],
              "variables": [
                0.4
              ]
            },
            "MDF_PropertyValue2": {
              "operator": "Variables[0] (10) || RETURN",
              "displayLines": "10",
              "constants": [],
              "variables": [
                10
              ]
            }
          }
        },
        {
          "name": "Inject Extra-Turn",
          "actionTag": null,
          "canInjectUltimates": true,
          "abilityName": "AdvancedRen_Bonus",
          "afterInjection": []
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Blade_AdvancedRen_Ability02_Part01": {
      "fileName": "Blade_AdvancedRen_Ability02_Part01",
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
          "from": "Caster",
          "ability": "AdvancedRen_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Blade_AdvancedRen_Ability11_Part02": {
      "fileName": "Blade_AdvancedRen_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": "Caster",
          "variableName": "CasterCurrentHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
        },
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": "Caster",
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
              "target": "Single Target (Primary)",
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (CasterFinalLostHP) || Variables[1] (1.5) || MUL || Constants[0] (0.5) || MUL || RETURN",
                  "displayLines": "((CasterFinalLostHP * 1.5) * 0.5)",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "CasterFinalLostHP",
                    1.5
                  ]
                },
                "dmgFormula": "Max HP Scaling",
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
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (1.3) || RETURN",
                  "displayLines": "1.3",
                  "constants": [],
                  "variables": [
                    1.3
                  ]
                },
                "dmgFormula": "Max HP Scaling",
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
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (CasterFinalLostHP) || Variables[1] (1.5) || MUL || Constants[0] (0.5) || MUL || RETURN",
                  "displayLines": "((CasterFinalLostHP * 1.5) * 0.5)",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "CasterFinalLostHP",
                    1.5
                  ]
                },
                "dmgFormula": "Max HP Scaling",
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
              "target": "Blast (Adjacent)",
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (0.52) || RETURN",
                  "displayLines": "0.52",
                  "constants": [],
                  "variables": [
                    0.52
                  ]
                },
                "dmgFormula": "Max HP Scaling",
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
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (1.3) || RETURN",
                  "displayLines": "1.3",
                  "constants": [],
                  "variables": [
                    1.3
                  ]
                },
                "dmgFormula": "Max HP Scaling",
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
              "target": "Blast (Adjacent)",
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] (0.52) || RETURN",
                  "displayLines": "0.52",
                  "constants": [],
                  "variables": [
                    0.52
                  ]
                },
                "dmgFormula": "Max HP Scaling",
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
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Blade_AdvancedRen_Ability11_Part01": {
      "fileName": "Blade_AdvancedRen_Ability11_Part01",
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
          "from": "Caster",
          "ability": "AdvancedRen_Ability11_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Blade_AdvancedRen_Ability01_Part02": {
      "fileName": "Blade_AdvancedRen_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "dmgFormula": "Max HP Scaling",
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
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "dmgFormula": "Max HP Scaling",
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
    "Blade_AdvancedRen_Ability01_Part01": {
      "fileName": "Blade_AdvancedRen_Ability01_Part01",
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
          "from": "Caster",
          "ability": "AdvancedRen_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Blade_Modifiers": {
      "fileName": "Blade_Modifiers",
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
          "for": "Advanced_Ren_LoseHPPreShow",
          "execute": [
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": "Use Prior Target(s) Defined",
                    "target2": "Caster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Caster",
                      "variableName": "MDF_MaxHP",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Update UI Preview",
                      "show": "Show",
                      "skillType": [
                        "Skill"
                      ],
                      "target": "Caster",
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
                        "target": "Owner of this Modifier",
                        "modifier": "Advanced_Ren_Attack_Transfer[<span class=\"descriptionNumberColor\">Hellscape</span>]"
                      },
                      "passed": [
                        {
                          "name": "Update UI Preview",
                          "show": "Show",
                          "skillType": [
                            "Basic ATK"
                          ],
                          "target": "Caster",
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
                        "target": "Owner of this Modifier",
                        "value1": "CurrentHP%",
                        "compareType": ">=",
                        "value2": 0.5
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": "Owner of this Modifier",
                          "variableName": "MDF_CurrentHP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                        },
                        {
                          "name": "Update UI Preview",
                          "show": "Show",
                          "skillType": [
                            "Ultimate"
                          ],
                          "target": "Use Prior Target(s) Defined",
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
          "for": "Advanced_Ren_Eidolon2[<span class=\"descriptionNumberColor\">Grievous Penitence</span>]",
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
                  "target": "Owner of this Modifier",
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
          "description": "CRIT Rate increases by <span class=\"descriptionNumberColor\">MDF_CriticalIncrease</span>.",
          "type": "Buff",
          "effectName": "CRIT Rate Boost",
          "statusName": "Grievous Penitence"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Ren_Eidolon4_Add",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Advanced_Ren_Eidolon4[<span class=\"descriptionNumberColor\">Heal All Bones</span>]",
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
            "MwRen_isCharmAttack",
            "MwRen_isAttack",
            "MwRen_AttackStart",
            "MwRen_isOverHalf"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Ren_Eidolon4[<span class=\"descriptionNumberColor\">Heal All Bones</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": "Owner of this Modifier",
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
                  "target": "Caster",
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
            "MwRen_isCharmAttack"
          ],
          "description": "Max HP increases by <span class=\"descriptionNumberColor\">MDF_HPIncrease</span>.",
          "type": "Buff",
          "effectName": "Max HP Boost",
          "statusName": "Heal All Bones",
          "stackLimit": 2,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Ren_Trace03",
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
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.2) || RETURN",
                        "displayLines": "0.2",
                        "constants": [],
                        "variables": [
                          0.2
                        ]
                      }
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
          "for": "Advanced_Ren_Trace02[<span class=\"descriptionNumberColor\">Neverending Deaths</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Receiving Heal End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Healing",
                  "target": "Use Prior Target(s) Defined",
                  "variableName": "CasterLostHP2"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "CasterLostHP",
                  "value": {
                    "operator": "Variables[0] (CasterLostHP2) || Variables[1] (0.25) || MUL || Variables[2] (CasterLostHP) || ADD || RETURN",
                    "displayLines": "((CasterLostHP2 * 0.25) + CasterLostHP)",
                    "constants": [],
                    "variables": [
                      "CasterLostHP2",
                      0.25,
                      "CasterLostHP"
                    ]
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Ren_CheckHPChange"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingIncoming</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.2) || RETURN",
                    "displayLines": "0.2",
                    "constants": [],
                    "variables": [
                      0.2
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MwRen_isCharmAttack",
            "MwRen_isAttack",
            "MwRen_AttackStart",
            "MwRen_isOverHalf"
          ],
          "description": "Incoming Healing increases by <span class=\"descriptionNumberColor\">#SkillTree_PointB2_P2_HealTakenRatio</span>.",
          "type": "Buff",
          "effectName": "Outgoing Healing Boost",
          "statusName": "Neverending Deaths"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Ren_Ability03_Listen[<span class=\"descriptionNumberColor\">Death Sentence</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "HP Loss: <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>",
          "type": "Other",
          "statusName": "Death Sentence",
          "stackLimit": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Ren_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
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
                        "value1": "Advanced_Ren_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
                        "compareType": ">=",
                        "value2": 1,
                        "valueType": "Layer"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Advanced_Ren_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
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
                            "value1": "Advanced_Ren_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
                            "compareType": ">=",
                            "value2": 3,
                            "valueType": "Layer"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "Advanced_Ren_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
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
                            "value1": "Advanced_Ren_Qi[<span class=\"descriptionNumberColor\">Charge</span>]",
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
          "for": "Advanced_Ren_Attack[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                    "displayLines": "MDF_PropertyValue2",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue2"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue",
            "MDF_PropertyValue2"
          ],
          "latentQueue": [],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
          "stackLimit": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Ren_Attack_Transfer[<span class=\"descriptionNumberColor\">Hellscape</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": "Caster",
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Advanced_Ren_Attack[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Advanced_Ren_Eidolon2[<span class=\"descriptionNumberColor\">Grievous Penitence</span>]"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": "Caster",
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
                  "target": "Caster",
                  "abilityName": "Skill11",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": "Owner of this Modifier",
                  "display": "Show",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Disable Abilities",
                  "target": "Owner of this Modifier",
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
                      "to": "Owner of this Modifier",
                      "modifier": "Advanced_Ren_Eidolon2[<span class=\"descriptionNumberColor\">Grievous Penitence</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Basic ATK \"Shard Sword\" is enhanced to \"Forest of Swords\" that deals Blast DMG. The chance of being targeted by enemy targets greatly increases.",
          "type": "Other",
          "effectName": "Enhanced Basic ATK",
          "statusName": "Hellscape"
        }
      ],
      "references": []
    },
    "Blade_Functions": {
      "fileName": "Blade_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 1,
      "parse": [
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
              "to": "Caster",
              "modifier": "Advanced_Ren_Ability03_Listen[<span class=\"descriptionNumberColor\">Death Sentence</span>]",
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
      "references": []
    }
  }
}