const compositeAbilityObject = {
  "fullCharacterName": "Kafka_v0",
  "trimCharacterName": "Kafkav0",
  "abilityList": [
    "Kafkav0_Kafka_TechniqueInLevel",
    "Kafkav0_Kafka_Eidolon2",
    "Kafkav0_Kafka_Trace01",
    "Kafkav0_Kafka_Trace02",
    "Kafkav0_Kafka_PassiveAtk_Ability",
    "Kafkav0_Kafka_PassiveAbility01",
    "Kafkav0_Kafka_Ability03_Part02",
    "Kafkav0_Kafka_Ability03_Part01",
    "Kafkav0_Kafka_Ability03_EnterReady",
    "Kafkav0_Kafka_Ability02_Part02",
    "Kafkav0_Kafka_Ability02_Part01",
    "Kafkav0_Kafka_Ability01_Part02",
    "Kafkav0_Kafka_Ability01_Part01",
    "Kafkav0_Modifiers"
  ],
  "abilityObject": {
    "Kafkav0_Kafka_TechniqueInLevel": {
      "fileName": "Kafkav0_Kafka_TechniqueInLevel",
      "childAbilityList": [
        "Kafkav0_Kafka_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"-629359028\">StageAbility_Maze_Kafka_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-629359028\">StageAbility_Maze_Kafka_Modifier</a>",
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
                        "name": "Is Stage Wave 1"
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
                        "Tags": null
                      }
                    },
                    "Trigger: Attack End",
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 6
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Skill03_P3_LifeTime",
                          "value": {
                            "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
                            "displayLines": "(2 + 1)",
                            "constants": [],
                            "variables": [
                              2,
                              1
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Skill03_P4_DOTPercentage",
                          "value": {
                            "operator": "Variables[0] (2.9) || Variables[1] (1.56) || ADD || RETURN",
                            "displayLines": "(2.9 + 1.56)",
                            "constants": [],
                            "variables": [
                              2.9,
                              1.56
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Skill03_P3_LifeTime",
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
                          "variableName": "Skill03_P4_DOTPercentage",
                          "value": {
                            "operator": "Variables[0] (2.9) || RETURN",
                            "displayLines": "2.9",
                            "constants": [],
                            "variables": [
                              2.9
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Thorns"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillMaze_P1_Chance",
                          "value": {
                            "operator": "Variables[0] (1) || Variables[1] (0.8) || ADD || RETURN",
                            "displayLines": "(1 + 0.8)",
                            "constants": [],
                            "variables": [
                              1,
                              0.8
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillMaze_P1_Chance",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                      "duration": {
                        "operator": "Variables[0] (Skill03_P3_LifeTime) || RETURN",
                        "displayLines": "Skill03_P3_LifeTime",
                        "constants": [],
                        "variables": [
                          "Skill03_P3_LifeTime"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (SkillMaze_P1_Chance) || RETURN",
                        "displayLines": "SkillMaze_P1_Chance",
                        "constants": [],
                        "variables": [
                          "SkillMaze_P1_Chance"
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_Electric_DamagePercentage": {
                          "operator": "Variables[0] (Skill03_P4_DOTPercentage) || RETURN",
                          "displayLines": "Skill03_P4_DOTPercentage",
                          "constants": [],
                          "variables": [
                            "Skill03_P4_DOTPercentage"
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
    "Kafkav0_Kafka_Eidolon2": {
      "fileName": "Kafkav0_Kafka_Eidolon2",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1908096467\">Kafka_Eidolon2</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1908096467\">Kafka_Eidolon2</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1021385452\">Kafka_Eidolon2_Sub</a>[<span class=\"descriptionNumberColor\">Fortississimo</span>]"
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
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1021385452\">Kafka_Eidolon2_Sub</a>[<span class=\"descriptionNumberColor\">Fortississimo</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
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
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1021385452\">Kafka_Eidolon2_Sub</a>[<span class=\"descriptionNumberColor\">Fortississimo</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
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
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Kafkav0_Kafka_Trace01": {
      "fileName": "Kafkav0_Kafka_Trace01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Kafkav0_Kafka_Trace02": {
      "fileName": "Kafkav0_Kafka_Trace02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1069611135\">Kafka_Tree02</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1069611135\">Kafka_Tree02</a>",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target 2}}"
                    }
                  },
                  "passed": [
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
                            "name": "NOT",
                            "condition": {
                              "name": "Is Part Of Team",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target 2}}"
                              },
                              "team": "Enemy Team"
                            }
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "STAT_DOT_Electric"
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
    "Kafkav0_Kafka_PassiveAtk_Ability": {
      "fileName": "Kafkav0_Kafka_PassiveAtk_Ability",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
          "popUpText": "Gentle but Cruel"
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Thorns"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SkillP01_P2_BaseChance",
              "value": {
                "operator": "Variables[0] (1) || Variables[1] (0.8) || ADD || RETURN",
                "displayLines": "(1 + 0.8)",
                "constants": [],
                "variables": [
                  1,
                  0.8
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SkillP01_P2_BaseChance",
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
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill03_P3_LifeTime",
              "value": {
                "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
                "displayLines": "(2 + 1)",
                "constants": [],
                "variables": [
                  2,
                  1
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Skill03_P4_DOTPercentage",
              "value": {
                "operator": "Variables[0] (2.9) || Variables[1] (1.56) || ADD || RETURN",
                "displayLines": "(2.9 + 1.56)",
                "constants": [],
                "variables": [
                  2.9,
                  1.56
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill03_P3_LifeTime",
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
              "variableName": "Skill03_P4_DOTPercentage",
              "value": {
                "operator": "Variables[0] (2.9) || RETURN",
                "displayLines": "2.9",
                "constants": [],
                "variables": [
                  2.9
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
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1710761460\">Kafka_PassiveDotDamage_Eidolon1</a>[<span class=\"descriptionNumberColor\">DoT Vulnerability</span>]",
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
                "MDF_DotRatio": {
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
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
            "HitSplit": 0.15,
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
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
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
            "HitSplit": 0.15,
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
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
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
            "HitSplit": 0.15,
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
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
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
            "HitSplit": 0.15,
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
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
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
            "HitSplit": 0.15,
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
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
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
            "HitSplit": 0.25,
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
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
          "duration": {
            "operator": "Variables[0] (Skill03_P3_LifeTime) || RETURN",
            "displayLines": "Skill03_P3_LifeTime",
            "constants": [],
            "variables": [
              "Skill03_P3_LifeTime"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (SkillP01_P2_BaseChance) || RETURN",
            "displayLines": "SkillP01_P2_BaseChance",
            "constants": [],
            "variables": [
              "SkillP01_P2_BaseChance"
            ]
          },
          "valuePerStack": {
            "Modifier_Electric_DamagePercentage": {
              "operator": "Variables[0] (Skill03_P4_DOTPercentage) || RETURN",
              "displayLines": "Skill03_P4_DOTPercentage",
              "constants": [],
              "variables": [
                "Skill03_P4_DOTPercentage"
              ]
            }
          },
          "stackFlag": "CharacterSkill"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1926104538\">Kafka_Passive_CanAttack</a>[<span class=\"descriptionNumberColor\">Gentle but Cruel</span>]",
          "onlyRemoveOwnersInstance": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-899885235\">Kafka_Passive_CanAttackCD</a>[<span class=\"descriptionNumberColor\">Gentle but Cruel</span>]"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1710761460\">Kafka_PassiveDotDamage_Eidolon1</a>[<span class=\"descriptionNumberColor\">DoT Vulnerability</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_DotRatio"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DotRatio"
          ],
          "latentQueue": [],
          "description": "DoT taken +<span class=\"descriptionNumberColor\">MDF_DotRatio</span>.",
          "type": "Debuff",
          "effectName": "DoT Vulnerability",
          "statusName": "DoT Vulnerability"
        }
      ]
    },
    "Kafkav0_Kafka_PassiveAbility01": {
      "fileName": "Kafkav0_Kafka_PassiveAbility01",
      "childAbilityList": [
        "Kafkav0_Kafka_PassiveAbility01",
        "Kafkav0_Kafka_PassiveAtk_Ability",
        "Kafkav0_Kafka_Passive1Atk_Ability_Camera"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 10,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "Kafka_Listen_Rank1",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-748126065\">M_Kafka_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1926104538\">Kafka_Passive_CanAttack</a>[<span class=\"descriptionNumberColor\">Gentle but Cruel</span>]"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 1,
          "maximum": 1,
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Kafka_Listen_Rank2",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Kafka_Listen_Rank6",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"42937918\">Kafka_Passive_DotSpecialMark_Listen</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Torture"
          },
          "passed": [
            {
              "name": "Update Ability Description",
              "popUpText": "Deals minor Lightning DMG to all enemies, with a high chance of Shocking them. If the enemies are currently afflicted with DoT debuff(s), the DoT(s) will deal DMG 1 extra time.",
              "skillTrigger": "Skill03"
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
              "modifier": "<a class=\"gModGreen\" id=\"-1192521276\">Kafka_Eidolon4</a>"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1926104538\">Kafka_Passive_CanAttack</a>[<span class=\"descriptionNumberColor\">Gentle but Cruel</span>]",
          "stackData": [],
          "latentQueue": [
            "Kafka_Listen_Rank1"
          ],
          "description": "The effect of Talent \"Gentle but Cruel\" can now be triggered.",
          "type": "Other",
          "statusName": "Gentle but Cruel"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-748126065\">M_Kafka_Passive</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1926104538\">Kafka_Passive_CanAttack</a>[<span class=\"descriptionNumberColor\">Gentle but Cruel</span>]"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Kafka_Listen_Rank6",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-899885235\">Kafka_Passive_CanAttackCD</a>[<span class=\"descriptionNumberColor\">Gentle but Cruel</span>]"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 1,
                  "maximum": 1,
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 3
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
                        "name": "Current Action Holder's Team",
                        "team": "Player Team"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1926104538\">Kafka_Passive_CanAttack</a>[<span class=\"descriptionNumberColor\">Gentle but Cruel</span>]"
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
                            "name": "Compare: Target Count",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target's Ability Targets}}"
                            },
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target's Ability Targets}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Kafka_PassiveAtk_Ability",
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
                              "ifTargetFound": [
                                {
                                  "name": "Inject Ability Use",
                                  "abilityName": "Kafka_PassiveAtk_Ability",
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
          "latentQueue": [
            "Kafka_Listen_Rank1"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__410847021\">Kafka_Passive_UltraSpecialMarkTrigger</a>",
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
              "eventTrigger": "Active Ability Chosen [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Torture",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_DOT_Electric"
                      }
                    ]
                  },
                  "passed": [
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
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Ultimate"
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark"
                        }
                      ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__2055478652\">Kafka_Passive_DotSpecialMarkTrigger</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ListenBattleEventSkill",
            "RemoveWhenCasterDead"
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
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_DOT"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Action Owner}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Primary-Target}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Trace Activated",
                            "conditionList": "Torture"
                          },
                          "passed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [
                                "Skill"
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Toggle Skill Mark",
                              "toggle": true,
                              "skillTypesAllow": [
                                "Skill"
                              ]
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Active Ability Chosen [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Torture"
                      }
                    ]
                  },
                  "passed": [
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
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Skill"
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark"
                        }
                      ]
                    }
                  ],
                  "failed": [
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
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Skill"
                          ]
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
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__124377312\">Kafka_Passive_DotSpecialMark</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ListenBattleEventSkill",
            "RemoveWhenCasterDead"
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
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Update Target Selected(UI) [Anyone]",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Primary-Target}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_DOT"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Action Owner}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true,
                      "skillTypesAllow": [
                        "Skill"
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Active Ability Chosen [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Torture"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_DOT_Electric"
                      }
                    ]
                  },
                  "passed": [
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
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Skill"
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Toggle Skill Mark"
                        }
                      ]
                    }
                  ],
                  "failed": [
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
                          "name": "Toggle Skill Mark",
                          "toggle": true,
                          "skillTypesAllow": [
                            "Skill"
                          ]
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
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__42937918\">Kafka_Passive_DotSpecialMark_Listen</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"124377312\">Kafka_Passive_DotSpecialMark</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2055478652\">Kafka_Passive_DotSpecialMarkTrigger</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
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
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_DOT"
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
                      "modifier": "<a class=\"gModGreen\" id=\"124377312\">Kafka_Passive_DotSpecialMark</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2055478652\">Kafka_Passive_DotSpecialMarkTrigger</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
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
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_DOT"
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"124377312\">Kafka_Passive_DotSpecialMark</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2055478652\">Kafka_Passive_DotSpecialMarkTrigger</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Kafka_Listen_Rank1",
            "Kafka_Listen_Rank2",
            "Kafka_Listen_Rank6"
          ]
        }
      ]
    },
    "Kafkav0_Kafka_Ability03_Part02": {
      "fileName": "Kafkav0_Kafka_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
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
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Thorns"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill03_P2_Chance",
              "value": {
                "operator": "Variables[0] (1) || Variables[1] (0.8) || ADD || RETURN",
                "displayLines": "(1 + 0.8)",
                "constants": [],
                "variables": [
                  1,
                  0.8
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill03_P2_Chance",
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
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill03_P3_LifeTime",
              "value": {
                "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
                "displayLines": "(2 + 1)",
                "constants": [],
                "variables": [
                  2,
                  1
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Skill03_P4_DOTPercentage",
              "value": {
                "operator": "Variables[0] (2.9) || Variables[1] (1.56) || ADD || RETURN",
                "displayLines": "(2.9 + 1.56)",
                "constants": [],
                "variables": [
                  2.9,
                  1.56
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill03_P3_LifeTime",
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
              "variableName": "Skill03_P4_DOTPercentage",
              "value": {
                "operator": "Variables[0] (2.9) || RETURN",
                "displayLines": "2.9",
                "constants": [],
                "variables": [
                  2.9
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
          "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
          "duration": {
            "operator": "Variables[0] (Skill03_P3_LifeTime) || RETURN",
            "displayLines": "Skill03_P3_LifeTime",
            "constants": [],
            "variables": [
              "Skill03_P3_LifeTime"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (Skill03_P2_Chance) || RETURN",
            "displayLines": "Skill03_P2_Chance",
            "constants": [],
            "variables": [
              "Skill03_P2_Chance"
            ]
          },
          "valuePerStack": {
            "Modifier_Electric_DamagePercentage": {
              "operator": "Variables[0] (Skill03_P4_DOTPercentage) || RETURN",
              "displayLines": "Skill03_P4_DOTPercentage",
              "constants": [],
              "variables": [
                "Skill03_P4_DOTPercentage"
              ]
            }
          },
          "stackFlag": "CharacterSkill"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Torture"
          },
          "passed": [
            {
              "name": "Trigger Modifier Event",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "variableName": "DOT_TriggerRatio",
              "eventType": "DOT",
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
              "name": "Trigger Modifier Event",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "variableName": "DOT_TriggerRatio",
              "eventType": "DOT_Electric",
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
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Kafkav0_Kafka_Ability03_Part01": {
      "fileName": "Kafkav0_Kafka_Ability03_Part01",
      "childAbilityList": [
        "Kafkav0_Kafka_Ability03_Camera",
        "Kafkav0_Kafka_Ability03_Part01",
        "Kafkav0_Kafka_Ability03_Part02",
        "Kafkav0_Kafka_Ability03_EnterReady"
      ],
      "skillTrigger": "Skill03",
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
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Kafka_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Kafkav0_Kafka_Ability03_EnterReady": {
      "fileName": "Kafkav0_Kafka_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Kafkav0_Kafka_Ability02_Part02": {
      "fileName": "Kafkav0_Kafka_Ability02_Part02",
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
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1.6) || RETURN",
              "displayLines": "1.6",
              "constants": [],
              "variables": [
                1.6
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
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1.6) || RETURN",
              "displayLines": "1.6",
              "constants": [],
              "variables": [
                1.6
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1.6) || RETURN",
              "displayLines": "1.6",
              "constants": [],
              "variables": [
                1.6
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
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
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
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "flagName": "STAT_DOT"
          },
          "passed": [
            {
              "name": "Trigger Modifier Event",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "variableName": "DOT_TriggerRatio",
              "eventType": "DOT",
              "value": {
                "operator": "Variables[0] (0.75) || RETURN",
                "displayLines": "0.75",
                "constants": [],
                "variables": [
                  0.75
                ]
              }
            },
            "Trigger: Attack End"
          ],
          "failed": [
            "Trigger: Attack End"
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Kafkav0_Kafka_Ability02_Part01": {
      "fileName": "Kafkav0_Kafka_Ability02_Part01",
      "childAbilityList": [
        "Kafkav0_Kafka_Ability02_Camera",
        "Kafkav0_Kafka_Ability02_Part01",
        "Kafkav0_Kafka_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        10
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
            "flagName": "STAT_DOT"
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Kafka_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "Kafkav0_Kafka_Ability01_Part02": {
      "fileName": "Kafkav0_Kafka_Ability01_Part02",
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
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(1 * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "50%"
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
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(1 * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Kafkav0_Kafka_Ability01_Part01": {
      "fileName": "Kafkav0_Kafka_Ability01_Part01",
      "childAbilityList": [
        "Kafkav0_Kafka_Ability01_Camera",
        "Kafkav0_Kafka_Ability01_Part01",
        "Kafkav0_Kafka_Ability01_Part02"
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
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Kafka_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "Kafkav0_Modifiers": {
      "fileName": "Kafkav0_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-287625887\">Kafka_Eidolon4_Sub</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "DOT"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Lightning"
                        ]
                      },
                      {
                        "name": "Is Joint-Attack",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Source Owner}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "mustBeAlive2": true
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
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1192521276\">Kafka_Eidolon4</a>",
          "execute": [
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
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-287625887\">Kafka_Eidolon4_Sub</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Kafka_Listen_Rank1",
            "Kafka_Listen_Rank2",
            "Kafka_Listen_Rank6"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1021385452\">Kafka_Eidolon2_Sub</a>[<span class=\"descriptionNumberColor\">Fortississimo</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageDOT</span>&nbsp;",
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
          "description": "Increases DoT dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Fortississimo"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-899885235\">Kafka_Passive_CanAttackCD</a>[<span class=\"descriptionNumberColor\">Gentle but Cruel</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "The effect of Talent \"Gentle but Cruel\" cannot be triggered.",
          "type": "Other",
          "statusName": "Gentle but Cruel",
          "duration": 1
        }
      ],
      "references": []
    }
  }
}