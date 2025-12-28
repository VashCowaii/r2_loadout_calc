const compositeAbilityObject = {
  "fullCharacterName": "Natasha",
  "trimCharacterName": "Natasha",
  "abilityList": [
    "Natasha_Natasha_Eidolon1_InsertAbility_Part02",
    "Natasha_Natasha_Eidolon1_InsertAbility_Part01",
    "Natasha_Natasha_Eidolon1",
    "Natasha_Natasha_Eidolon4",
    "Natasha_Natasha_Trace02",
    "Natasha_Natasha_TechniqueInLevel",
    "Natasha_Natasha_PassiveAbility01",
    "Natasha_Natasha_Ability03_Part02",
    "Natasha_Natasha_Ability03_Part01",
    "Natasha_Natasha_Ability03_EnterReady",
    "Natasha_Natasha_Ability02_Part02",
    "Natasha_Natasha_Ability02_Part01",
    "Natasha_Natasha_Ability01_Part02",
    "Natasha_Natasha_Ability01_Part01",
    "Natasha_Modifiers"
  ],
  "abilityObject": {
    "Natasha_Natasha_Eidolon1_InsertAbility_Part02": {
      "fileName": "Natasha_Natasha_Eidolon1_InsertAbility_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Heal",
          "target": "Single Target (Primary)",
          "healPercent": {
            "operator": "Variables[0] (0.15) || RETURN",
            "displayLines": "0.15",
            "constants": [],
            "variables": [
              0.15
            ]
          },
          "healFlat": {
            "operator": "Variables[0] (400) || RETURN",
            "displayLines": "400",
            "constants": [],
            "variables": [
              400
            ]
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Natasha_Eidolon1_Check"
        }
      ],
      "references": []
    },
    "Natasha_Natasha_Eidolon1_InsertAbility_Part01": {
      "fileName": "Natasha_Natasha_Eidolon1_InsertAbility_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Natasha_Eidolon1_InsertAbility_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Natasha_Natasha_Eidolon1": {
      "fileName": "Natasha_Natasha_Eidolon1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Natasha_Eidolon1_Check"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Natasha_Eidolon1_Check",
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Natasha_Eidolon1_InsertAbility_Part01",
                      "abilitySource": "Caster",
                      "abilityTarget": "Caster",
                      "priorityTag": "AvatarHealSelf",
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
        }
      ]
    },
    "Natasha_Natasha_Eidolon4": {
      "fileName": "Natasha_Natasha_Eidolon4",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Natasha_Eidolon4_Check"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Natasha_Eidolon4_Check",
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": "Caster",
                  "value": {
                    "operator": "Variables[0] (5) || RETURN",
                    "displayLines": "5",
                    "constants": [],
                    "variables": [
                      5
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Natasha_Natasha_Trace02": {
      "fileName": "Natasha_Natasha_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "M_Trace_HealRatioUp",
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
      ],
      "references": []
    },
    "Natasha_Natasha_TechniqueInLevel": {
      "fileName": "Natasha_Natasha_TechniqueInLevel",
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
          "modifier": "Technique_Natasha_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Technique_Natasha_Modifier",
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
                      "from": "All Hostile Entities (AOE)",
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": "Use Prior Target(s) Defined",
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Physical",
                            "Damage": {
                              "operator": "Variables[0] (0.8) || RETURN",
                              "displayLines": "0.8",
                              "constants": [],
                              "variables": [
                                0.8
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
                    "Trigger: Attack End",
                    {
                      "name": "Add Events/Bonuses",
                      "to": "All Hostile Entities (AOE)",
                      "modifier": "Natasha_Passive_FatigueRatio[<span class=\"descriptionNumberColor\">Weaken</span>]",
                      "duration": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
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
    "Natasha_Natasha_PassiveAbility01": {
      "fileName": "Natasha_Natasha_PassiveAbility01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Fuka_Beginner_PassiveAbility_Bonus_1"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Fuka_Beginner_PassiveAbility_Bonus_1_ForSnapshitEntity",
          "execute": [
            {
              "eventTrigger": "Heal Target Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Use Prior Target(s) Defined",
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                      "displayLines": "MDF_PropertyValue",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Healing Stats",
                      "on": "Healer",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.5) || RETURN",
                        "displayLines": "0.5",
                        "constants": [],
                        "variables": [
                          0.5
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
          "name": "Modifier Construction",
          "for": "Fuka_Beginner_PassiveAbility_Bonus_1",
          "modifierFlags": [
            "MuteDotCasterCallBack"
          ],
          "execute": [
            {
              "eventTrigger": "Heal Target Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Use Prior Target(s) Defined",
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Healing Stats",
                      "on": "Healer",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.5) || RETURN",
                        "displayLines": "0.5",
                        "constants": [],
                        "variables": [
                          0.5
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Snapshot(Calculation Instance Completed)",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Fuka_Beginner_PassiveAbility_Bonus_1_ForSnapshitEntity",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
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
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Natasha_Natasha_Ability03_Part02": {
      "fileName": "Natasha_Natasha_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": "Allied Team",
              "searchRandom": true,
              "conditions": {
                "name": "Compare: Variable",
                "target": "Use Prior Target(s) Defined",
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                }
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Natasha_Eidolon2_HOT_HPByMaxHP[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
                  "duration": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "immediateEffect": true,
                  "valuePerStack": {
                    "MDF_ShowValue1": {
                      "operator": "Variables[0] (0.06) || RETURN",
                      "displayLines": "0.06",
                      "constants": [],
                      "variables": [
                        0.06
                      ]
                    },
                    "MDF_ShowValue2": {
                      "operator": "Variables[0] (160) || RETURN",
                      "displayLines": "160",
                      "constants": [],
                      "variables": [
                        160
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Heal",
          "target": "All Team Members(In Context)",
          "healPercent": {
            "operator": "Variables[0] (0.138) || RETURN",
            "displayLines": "0.138",
            "constants": [],
            "variables": [
              0.138
            ]
          },
          "healFlat": {
            "operator": "Variables[0] (368) || RETURN",
            "displayLines": "368",
            "constants": [],
            "variables": [
              368
            ]
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Update Energy",
          "on": "Caster",
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Find New Target",
          "from": "Skill Target List",
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Target",
            "target": "Use Prior Target(s) Defined",
            "target2": "Caster",
            "invertCondition": true
          }
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Natasha_Eidolon2_HOT_HPByMaxHP[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": "Owner of this Modifier",
                      "healPercent": {
                        "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                        "displayLines": "MDF_ShowValue1",
                        "constants": [],
                        "variables": [
                          "MDF_ShowValue1"
                        ]
                      },
                      "healFlat": {
                        "operator": "Variables[0] (MDF_ShowValue2) || RETURN",
                        "displayLines": "MDF_ShowValue2",
                        "constants": [],
                        "variables": [
                          "MDF_ShowValue2"
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
                    }
                  ]
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_ShowValue1",
            "MDF_ShowValue2"
          ],
          "latentQueue": [],
          "description": "Restores a certain amount of HP at the start of each turn.",
          "type": "Buff",
          "effectName": "Healing Over Time",
          "statusName": "Healing Over Time"
        }
      ]
    },
    "Natasha_Natasha_Ability03_Part01": {
      "fileName": "Natasha_Natasha_Ability03_Part01",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Natasha_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Natasha_Natasha_Ability03_EnterReady": {
      "fileName": "Natasha_Natasha_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Natasha_Natasha_Ability02_Part02": {
      "fileName": "Natasha_Natasha_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Soothe"
          },
          "passed": [
            {
              "name": "Dispel Debuffs",
              "target": "Single Target (Primary)",
              "dispelCount": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "dispelOrder": "LastAdded"
            }
          ]
        },
        {
          "name": "Heal",
          "target": "Single Target (Primary)",
          "healPercent": {
            "operator": "Variables[0] (0.105) || RETURN",
            "displayLines": "0.105",
            "constants": [],
            "variables": [
              0.105
            ]
          },
          "healFlat": {
            "operator": "Variables[0] (280) || RETURN",
            "displayLines": "280",
            "constants": [],
            "variables": [
              280
            ]
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Recuperation"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SkillTree_LifeTime",
              "value": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SkillTree_LifeTime",
              "value": 0
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Single Target (Primary)",
          "modifier": "Natasha_HOT_HPByMaxHP[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
          "duration": {
            "operator": "Variables[0] (2) || Variables[1] (SkillTree_LifeTime) || ADD || RETURN",
            "displayLines": "(2 + SkillTree_LifeTime)",
            "constants": [],
            "variables": [
              2,
              "SkillTree_LifeTime"
            ]
          },
          "valuePerStack": {
            "MDF_ShowValue1": {
              "operator": "Variables[0] (0.072) || RETURN",
              "displayLines": "0.072",
              "constants": [],
              "variables": [
                0.072
              ]
            },
            "MDF_ShowValue2": {
              "operator": "Variables[0] (192) || RETURN",
              "displayLines": "192",
              "constants": [],
              "variables": [
                192
              ]
            }
          }
        },
        {
          "name": "Update Energy",
          "on": "Caster",
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Find New Target",
          "from": "Skill Target List",
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Target",
            "target": "Use Prior Target(s) Defined",
            "target2": "Caster",
            "invertCondition": true
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Natasha_Natasha_Ability02_Part01": {
      "fileName": "Natasha_Natasha_Ability02_Part01",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Natasha_Ability02_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Current Action Holder Is",
            "target": "Single Target (Primary)"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "Natasha_Natasha_Ability01_Part02": {
      "fileName": "Natasha_Natasha_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Shot Fired",
          "execute": [
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
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "Single Target (Primary)",
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
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
                    "Tags": null
                  }
                }
              ]
            },
            "Trigger: Attack End"
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Natasha_Natasha_Ability01_Part01": {
      "fileName": "Natasha_Natasha_Ability01_Part01",
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
          "ability": "Natasha_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Natasha_Modifiers": {
      "fileName": "Natasha_Modifiers",
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
          "for": "Natasha_BPAbility_DefenceRatioUp[<span class=\"descriptionNumberColor\">DEF Boost</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
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
          "description": "DEF increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>",
          "type": "Buff",
          "effectName": "DEF Boost",
          "statusName": "DEF Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "Natasha_Passive_FatigueRatio[<span class=\"descriptionNumberColor\">Weaken</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_Fatigue"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
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
          "description": "Deals <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> less DMG to your team.",
          "type": "Debuff",
          "effectName": "Weaken",
          "statusName": "Weaken"
        },
        {
          "name": "Modifier Construction",
          "for": "Natasha_HOT_HPByMaxHP[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": "Owner of this Modifier",
                      "healPercent": {
                        "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                        "displayLines": "MDF_ShowValue1",
                        "constants": [],
                        "variables": [
                          "MDF_ShowValue1"
                        ]
                      },
                      "healFlat": {
                        "operator": "Variables[0] (MDF_ShowValue2) || RETURN",
                        "displayLines": "MDF_ShowValue2",
                        "constants": [],
                        "variables": [
                          "MDF_ShowValue2"
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
                    }
                  ]
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_ShowValue1",
            "MDF_ShowValue2"
          ],
          "latentQueue": [],
          "description": "Restores a certain amount of HP at the start of each turn.",
          "type": "Buff",
          "effectName": "Healing Over Time",
          "statusName": "Healing Over Time"
        }
      ],
      "references": []
    }
  }
}