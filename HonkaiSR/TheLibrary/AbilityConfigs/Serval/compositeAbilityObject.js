const compositeAbilityObject = {
  "fullCharacterName": "Serval",
  "trimCharacterName": "Serval",
  "abilityList": [
    "Serval_Serval_Eidolon6",
    "Serval_Serval_TechniqueInLevel",
    "Serval_Serval_Trace03",
    "Serval_Serval_Trace02",
    "Serval_Serval_PassiveAbility01",
    "Serval_Serval_Ability03_Part02",
    "Serval_Serval_Ability03_Part01",
    "Serval_Serval_Ability03_EnterReady",
    "Serval_Serval_Ability02_Part02",
    "Serval_Serval_Ability02_Part01",
    "Serval_Serval_Ability01_Part02",
    "Serval_Serval_Ability01_Part01",
    "Serval_Modifiers"
  ],
  "abilityObject": {
    "Serval_Serval_Eidolon6": {
      "fileName": "Serval_Serval_Eidolon6",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Serval_Eidolon6"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Serval_Eidolon6",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Use Prior Target(s) Defined",
                    "flagName": "STAT_DOT_Electric"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.3) || RETURN",
                        "displayLines": "0.3",
                        "constants": [],
                        "variables": [
                          0.3
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
        }
      ]
    },
    "Serval_Serval_TechniqueInLevel": {
      "fileName": "Serval_Serval_TechniqueInLevel",
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
          "modifier": "StageAbility_Maze_Serval_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_Serval_Modifier",
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
                            "DamageType": "Thunder",
                            "Damage": {
                              "operator": "Variables[0] (0.5) || RETURN",
                              "displayLines": "0.5",
                              "constants": [],
                              "variables": [
                                0.5
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
                      "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
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
                        "Modifier_Electric_DamagePercentage": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      },
                      "stackFlag": "CharacterSkill"
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
    "Serval_Serval_Trace03": {
      "fileName": "Serval_Serval_Trace03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "M_Serval_Trace03"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Serval_Trace03",
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Serval_Tree03_AttackRatioUp[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
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
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Serval_Serval_Trace02": {
      "fileName": "Serval_Serval_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "M_Serval_Trace02"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Serval_Trace02",
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
                        "name": "Trace Activated",
                        "conditionList": "String Vibration"
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
    "Serval_Serval_PassiveAbility01": {
      "fileName": "Serval_Serval_PassiveAbility01",
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
          "modifier": "Serval_Passive01Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Serval_Passive01Modifier",
          "execute": [
            {
              "eventTrigger": "Attack End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": "All Hostile Entities (AOE)",
                  "searchRandom": true,
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Use Prior Target(s) Defined",
                    "flagName": "STAT_DOT_Electric"
                  },
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Use Prior Target(s) Defined",
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Thunder",
                        "Damage": {
                          "operator": "Variables[0] (0.72) || RETURN",
                          "displayLines": "0.72",
                          "constants": [],
                          "variables": [
                            0.72
                          ]
                        },
                        "indirectDMG": true,
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    },
                    "Trigger: Attack End",
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 2
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": "Caster",
                          "value": {
                            "operator": "Variables[0] (4) || RETURN",
                            "displayLines": "4",
                            "constants": [],
                            "variables": [
                              4
                            ]
                          },
                          "isFixed": "* ERR"
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
    "Serval_Serval_Ability03_Part02": {
      "fileName": "Serval_Serval_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": "All Hostile Entities (AOE)",
          "searchRandom": true,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "NOT",
                "condition": {
                  "name": "Has Flag",
                  "target": "Use Prior Target(s) Defined",
                  "flagName": "STAT_DOT_Electric"
                }
              },
              {
                "name": "Eidolon Activated",
                "eidolon": 4
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": "Use Prior Target(s) Defined",
              "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
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
                "Modifier_Electric_DamagePercentage": {
                  "operator": "Variables[0] (1.04) || RETURN",
                  "displayLines": "1.04",
                  "constants": [],
                  "variables": [
                    1.04
                  ]
                }
              },
              "stackFlag": "CharacterSkill"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": "All Hostile Entities (AOE)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1.8) || RETURN",
              "displayLines": "1.8",
              "constants": [],
              "variables": [
                1.8
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": "All Hostile Entities (AOE)",
          "searchRandom": true,
          "conditions": {
            "name": "Has Flag",
            "target": "Use Prior Target(s) Defined",
            "flagName": "STAT_DOT_Electric"
          },
          "ifTargetFound": [
            {
              "name": "Define Modifier Variable with Flag",
              "target": "Use Prior Target(s) Defined",
              "flagName": [
                "STAT_DOT_Electric"
              ],
              "function": "Add",
              "value": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "valueType": "Duration"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Serval_Serval_Ability03_Part01": {
      "fileName": "Serval_Serval_Ability03_Part01",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        20,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Serval_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Serval_Serval_Ability03_EnterReady": {
      "fileName": "Serval_Serval_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Serval_Serval_Ability02_Part02": {
      "fileName": "Serval_Serval_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1.4) || RETURN",
              "displayLines": "1.4",
              "constants": [],
              "variables": [
                1.4
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
          "name": "ATK Scaling DMG",
          "target": "Blast (Adjacent)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
            },
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
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Rock 'n' Roll"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SkillTree01_ThunderChanceAdd",
              "value": {
                "operator": "Variables[0] (0.2) || RETURN",
                "displayLines": "0.2",
                "constants": [],
                "variables": [
                  0.2
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SkillTree01_ThunderChanceAdd",
              "value": 0
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Single Target (Primary) + Blast (Adjacent)",
          "modifier": "Standard_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (0.8) || Variables[1] (SkillTree01_ThunderChanceAdd) || ADD || RETURN",
            "displayLines": "(0.8 + SkillTree01_ThunderChanceAdd)",
            "constants": [],
            "variables": [
              0.8,
              "SkillTree01_ThunderChanceAdd"
            ]
          },
          "valuePerStack": {
            "Modifier_Electric_DamagePercentage": {
              "operator": "Variables[0] (1.04) || RETURN",
              "displayLines": "1.04",
              "constants": [],
              "variables": [
                1.04
              ]
            }
          },
          "stackFlag": "CharacterSkill"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Serval_Serval_Ability02_Part01": {
      "fileName": "Serval_Serval_Ability02_Part01",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Serval_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Serval_Serval_Ability01_Part02": {
      "fileName": "Serval_Serval_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
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
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": "Blast (Adjacent)",
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "Use Prior Target(s) Defined",
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (1) || Variables[1] (0.6) || MUL || RETURN",
                      "displayLines": "(1 * 0.6)",
                      "constants": [],
                      "variables": [
                        1,
                        0.6
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
                  }
                },
                "Trigger: Attack End"
              ],
              "noTargetFound": [
                "Trigger: Attack End"
              ]
            }
          ],
          "failed": [
            "Trigger: Attack End"
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Serval_Serval_Ability01_Part01": {
      "fileName": "Serval_Serval_Ability01_Part01",
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
          "ability": "Serval_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Serval_Modifiers": {
      "fileName": "Serval_Modifiers",
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
          "for": "Serval_Tree03_AttackRatioUp[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
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
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "ATK +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "ATK Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "Serval_Eidolon6_Check_Show",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Caster",
                  "variableName": "Serval_Ran06_Judge_MaxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (Serval_Ran06_Judge_MaxSP) || Variables[1] (SERVAL_OBJECT_UNUSED_1) || MUL || RETURN",
                    "displayLines": "(Serval_Ran06_Judge_MaxSP * SERVAL_OBJECT_UNUSED_1)",
                    "constants": [],
                    "variables": [
                      "Serval_Ran06_Judge_MaxSP",
                      "SERVAL_OBJECT_UNUSED_1"
                    ]
                  },
                  "maxValue": {
                    "operator": "Variables[0] (Serval_Ran06_Judge_MaxSP) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(Serval_Ran06_Judge_MaxSP + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Serval_Ran06_Judge_MaxSP"
                    ]
                  },
                  "whenEnteringRange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Serval_Eidolon6_Check[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                    }
                  ],
                  "whenLeavingRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Serval_Eidolon6_Check[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Serval_Eidolon6_Check[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill",
                      "Basic ATK"
                    ],
                    "target": "Caster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MAvatar_Serval_00_Rank06_ShowRatio",
                      "value": {
                        "operator": "Variables[0] (SERVAL_OBJECT_UNUSED_2) || RETURN",
                        "displayLines": "SERVAL_OBJECT_UNUSED_2",
                        "constants": [],
                        "variables": [
                          "SERVAL_OBJECT_UNUSED_2"
                        ]
                      }
                    },
                    {
                      "name": "Adjust Target Stats",
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MAvatar_Serval_00_Rank06_ShowRatio) || RETURN",
                        "displayLines": "MAvatar_Serval_00_Rank06_ShowRatio",
                        "constants": [],
                        "variables": [
                          "MAvatar_Serval_00_Rank06_ShowRatio"
                        ]
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
                  "name": "Define Custom Variable",
                  "variableName": "MAvatar_Serval_00_Rank06_ShowRatio",
                  "value": {
                    "operator": "Variables[0] (SERVAL_OBJECT_UNUSED_2) || RETURN",
                    "displayLines": "SERVAL_OBJECT_UNUSED_2",
                    "constants": [],
                    "variables": [
                      "SERVAL_OBJECT_UNUSED_2"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Roaring Thunderclap and Lightning Flash deal <span class=\"descriptionNumberColor\">MAvatar_Serval_00_Rank06_ShowRatio</span> more DMG.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost"
        }
      ],
      "references": []
    }
  }
}