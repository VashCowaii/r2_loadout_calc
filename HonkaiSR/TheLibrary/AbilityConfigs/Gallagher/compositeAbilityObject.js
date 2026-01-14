const compositeAbilityObject = {
  "fullCharacterName": "Gallagher",
  "trimCharacterName": "Gallagher",
  "abilityList": [
    "Gallagher_Gallagher_TechniqueInLevel",
    "Gallagher_Gallagher_PassiveAbility01",
    "Gallagher_Gallagher_Ability03_Part02",
    "Gallagher_Gallagher_Ability03_Part01",
    "Gallagher_Gallagher_Ability03_EnterReady",
    "Gallagher_Gallagher_Ability02_Part02",
    "Gallagher_Gallagher_Ability02_Part01",
    "Gallagher_Gallagher_Ability11_Part02",
    "Gallagher_Gallagher_Ability11_Part01",
    "Gallagher_Gallagher_Ability01_Part02",
    "Gallagher_Gallagher_Ability01_Part01",
    "Gallagher_Modifiers"
  ],
  "abilityObject": {
    "Gallagher_Gallagher_TechniqueInLevel": {
      "fileName": "Gallagher_Gallagher_TechniqueInLevel",
      "childAbilityList": [
        "Gallagher_Gallagher_TechniqueInLevel"
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
          "name": "Random Value",
          "variableName": "Effect_Random_Key",
          "values": [
            1,
            2,
            3
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Gallagher_PreTechniqueUsage"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Gallagher_TechniqueUsage"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Gallagher_TechniqueUsage",
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
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Effect_Random_Key",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": "Use Prior Target(s) Defined",
                              "canPhase": true,
                              "AttackScaling": {
                                "DamageType": "Fire",
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
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Effect_Random_Key",
                              "value": {
                                "operator": "Variables[0] (Effect_Random_Key) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(Effect_Random_Key + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "Effect_Random_Key"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "Effect_Random_Key",
                                "compareType": "=",
                                "value2": 2
                              },
                              "passed": [
                                {
                                  "name": "ATK Scaling DMG",
                                  "target": "Use Prior Target(s) Defined",
                                  "canPhase": true,
                                  "AttackScaling": {
                                    "DamageType": "Fire",
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
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "Effect_Random_Key",
                                  "value": {
                                    "operator": "Variables[0] (Effect_Random_Key) || Constants[0] (1) || ADD || RETURN",
                                    "displayLines": "(Effect_Random_Key + 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "Effect_Random_Key"
                                    ]
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "ATK Scaling DMG",
                                  "target": "Use Prior Target(s) Defined",
                                  "canPhase": true,
                                  "AttackScaling": {
                                    "DamageType": "Fire",
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
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "Effect_Random_Key",
                                  "value": 1
                                }
                              ]
                            }
                          ]
                        }
                      ]
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
        },
        {
          "name": "Modifier Construction",
          "for": "Gallagher_PreTechniqueUsage",
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
                      "name": "Add Events/Bonuses",
                      "to": "All Hostile Entities (AOE)",
                      "modifier": "MWGallagher_Ability03_DeBonusModifier[<span class=\"descriptionNumberColor\">Besotted</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "PointB3_Active": {
                          "operator": "Variables[0] (PointB3_Active) || RETURN",
                          "displayLines": "PointB3_Active",
                          "constants": [],
                          "variables": [
                            "PointB3_Active"
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
    "Gallagher_Gallagher_PassiveAbility01": {
      "fileName": "Gallagher_Gallagher_PassiveAbility01",
      "childAbilityList": [
        "Gallagher_Gallagher_PassiveAbility01"
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
          "name": "Update Displayed Energy Bar",
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 1,
          "cooldown": 0
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
              "modifier": "Gallagher_Eidolon1_Modifier"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Bottoms Up"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "PointB3_Active",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Gallagher_PointB3_Modifier"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "PointB3_Active",
              "value": 0
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
              "to": "Caster",
              "modifier": "Gallagher_Eidolon2_Modifier"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Organic Yeast"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Gallagher_PointB2_PreshowModifier"
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
              "to": "Caster",
              "modifier": "Gallagher_Eidolon6_Modifier"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Novel Concoction"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Gallagher_Passive_Trace01"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Gallagher_Eidolon1_AddStatusModifier",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
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
          "name": "Modifier Construction",
          "for": "Gallagher_Eidolon1_Modifier",
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
                      "to": "Owner of this Modifier",
                      "modifier": "Gallagher_Eidolon1_AddStatusModifier"
                    },
                    {
                      "name": "Update Energy",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (20) || RETURN",
                        "displayLines": "20",
                        "constants": [],
                        "variables": [
                          20
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
        },
        {
          "name": "Modifier Construction",
          "for": "Gallagher_Eidolon6_Modifier",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.2) || RETURN",
                    "displayLines": "0.2",
                    "constants": [],
                    "variables": [
                      0.2
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Gallagher_PointB2_PreshowModifier",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": "Caster",
            "skillType": [
              "Ultimate"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": -1
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Gallagher_Eidolon2_Modifier",
          "stackType": "ReplaceByCaster",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Gallagher_PointB3_Modifier",
          "stackType": "ReplaceByCaster",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Gallagher_Gallagher_Ability03_Part02": {
      "fileName": "Gallagher_Gallagher_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Rank04_AddLifeTime",
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
              "variableName": "Rank04_AddLifeTime",
              "value": 0
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": "All Hostile Entities (AOE)",
          "modifier": "MWGallagher_Ability03_DeBonusModifier[<span class=\"descriptionNumberColor\">Besotted</span>]",
          "duration": {
            "operator": "Variables[0] (2) || Variables[1] (Rank04_AddLifeTime) || ADD || RETURN",
            "displayLines": "(2 + Rank04_AddLifeTime)",
            "constants": [],
            "variables": [
              2,
              "Rank04_AddLifeTime"
            ]
          },
          "valuePerStack": {
            "PointB3_Active": {
              "operator": "Variables[0] (PointB3_Active) || RETURN",
              "displayLines": "PointB3_Active",
              "constants": [],
              "variables": [
                "PointB3_Active"
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "All Hostile Entities (AOE)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
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
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Gallagher_NormalAttckAlter_Enable"
        },
        {
          "name": "Update Displayed Energy Bar",
          "assignState": "True",
          "priorState": "Active",
          "bar#": 1,
          "cooldown": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Organic Yeast"
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "target": "Caster",
              "advanceType": "Advance",
              "value": -1
            }
          ]
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Gallagher_Gallagher_Ability03_Part01": {
      "fileName": "Gallagher_Gallagher_Ability03_Part01",
      "childAbilityList": [
        "Gallagher_Gallagher_Ability03_Camera",
        "Gallagher_Gallagher_Ability03_EnterReady",
        "Gallagher_Gallagher_Ability03_Part01",
        "Gallagher_Gallagher_Ability03_Part02"
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
          "from": "Caster",
          "ability": "Gallagher_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Gallagher_Gallagher_Ability03_EnterReady": {
      "fileName": "Gallagher_Gallagher_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Gallagher_Gallagher_Ability02_Part02": {
      "fileName": "Gallagher_Gallagher_Ability02_Part02",
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
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Single Target (Primary)",
              "modifier": "MWGallagher_Ability02_StatusResModifier[<span class=\"descriptionNumberColor\">Effect RES Boost</span>]",
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
          "name": "Heal",
          "target": "Single Target (Primary)",
          "healFlat": {
            "operator": "Variables[0] (1600) || RETURN",
            "displayLines": "1600",
            "constants": [],
            "variables": [
              1600
            ]
          },
          "EnergyGainPercent": "100%"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Current Action Holder Is",
            "target": "Single Target (Primary)"
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Gallagher_Gallagher_Ability02_Part01": {
      "fileName": "Gallagher_Gallagher_Ability02_Part01",
      "childAbilityList": [
        "Gallagher_Gallagher_Ability02_Camera",
        "Gallagher_Gallagher_Ability02_Camera_End",
        "Gallagher_Gallagher_Ability02_Part01",
        "Gallagher_Gallagher_Ability02_Part02"
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
          "from": "Caster",
          "inherentTarget": "Single Target (Primary)",
          "ability": "Gallagher_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Gallagher_Gallagher_Ability11_Part02": {
      "fileName": "Gallagher_Gallagher_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2.5) || RETURN",
              "displayLines": "2.5",
              "constants": [],
              "variables": [
                2.5
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
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2.5) || RETURN",
              "displayLines": "2.5",
              "constants": [],
              "variables": [
                2.5
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
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (2.5) || RETURN",
              "displayLines": "2.5",
              "constants": [],
              "variables": [
                2.5
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
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": "Single Target (Primary)",
          "modifier": "MWGallagher_Ability11_AttackDownModifier[<span class=\"descriptionNumberColor\">ATK Reduction</span>]",
          "duration": {
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
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 1,
          "cooldown": 0
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Gallagher_Gallagher_Ability11_Part01": {
      "fileName": "Gallagher_Gallagher_Ability11_Part01",
      "childAbilityList": [
        "Gallagher_Gallagher_Ability11_Camera",
        "Gallagher_Gallagher_Ability11_Part01",
        "Gallagher_Gallagher_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        30,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Gallagher_Ability11_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Gallagher_Gallagher_Ability01_Part02": {
      "fileName": "Gallagher_Gallagher_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
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
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
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
    "Gallagher_Gallagher_Ability01_Part01": {
      "fileName": "Gallagher_Gallagher_Ability01_Part01",
      "childAbilityList": [
        "Gallagher_Gallagher_Ability01_Camera",
        "Gallagher_Gallagher_Ability01_Part01",
        "Gallagher_Gallagher_Ability01_Part02"
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
          "from": "Caster",
          "ability": "Gallagher_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Gallagher_Modifiers": {
      "fileName": "Gallagher_Modifiers",
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
          "for": "Gallagher_HealRatioAddedRatio",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingConverted</span>&nbsp;",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Gallagher_Passive_Trace01",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Gallagher_CheckBreakDamageAddedRatioChange"
                }
              ],
              "priorityLevel": -80
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakSUM</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Gallagher_CheckBreakDamageAddedRatioChange"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "Gallagher_CheckBreakDamageAddedRatioChange",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Caster",
                  "variableName": "MDF_CurrentBreakDamageAddedRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HealRatioAddedRatio",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentBreakDamageAddedRatio) || Variables[1] (0.5) || MUL || RETURN",
                    "displayLines": "(MDF_CurrentBreakDamageAddedRatio * 0.5)",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentBreakDamageAddedRatio",
                      0.5
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_HealRatioAddedRatio",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (0.75) || RETURN",
                      "displayLines": "0.75",
                      "constants": [],
                      "variables": [
                        0.75
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_HealRatioAddedRatio",
                      "value": {
                        "operator": "Variables[0] (0.75) || RETURN",
                        "displayLines": "0.75",
                        "constants": [],
                        "variables": [
                          0.75
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Gallagher_HealRatioAddedRatio",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_HealRatioAddedRatio) || RETURN",
                      "displayLines": "MDF_HealRatioAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_HealRatioAddedRatio"
                      ]
                    }
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
          "for": "MWGallagher_Ability11_AttackDownModifier[<span class=\"descriptionNumberColor\">ATK Reduction</span>]",
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
                    "operator": "Variables[0] (0.15) || INVERT || RETURN",
                    "displayLines": "-0.15",
                    "constants": [],
                    "variables": [
                      0.15
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "ATK decreases by <span class=\"descriptionNumberColor\">#Skill11_P2_AttackDownPercentage</span>.",
          "type": "Debuff",
          "effectName": "ATK Reduction",
          "statusName": "ATK Reduction"
        },
        {
          "name": "Modifier Construction",
          "for": "Gallagher_NormalAttckAlter_Enable",
          "stackType": "Refresh",
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
                  "name": "Update Ability Enhance Button",
                  "target": "Owner of this Modifier",
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
                    "skillName": "Skill11"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Gallagher_NormalAttckAlter_Enable"
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
          "for": "MWGallagher_Ability03_DeBonusModifier[<span class=\"descriptionNumberColor\">Besotted</span>]",
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
                    "name": "Attack Type",
                    "attackTypes": [
                      "Break DMG"
                    ],
                    "target": "Use Prior Target(s) Defined"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_BreakDamagTaken"
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
                  "name": "Define Custom Variable",
                  "variableName": "MDF_BreakDamagTaken",
                  "value": {
                    "operator": "Variables[0] (0.12) || RETURN",
                    "displayLines": "0.12",
                    "constants": [],
                    "variables": [
                      0.12
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamLight"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "PointB3_Active",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Has Modifier",
                            "target": "Use Prior Target(s) Defined",
                            "modifier": "Gallagher_NormalAttckAlter_Enable"
                          },
                          {
                            "name": "Skill Name",
                            "skillName": "Skill11"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": "Allied Team",
                          "searchRandom": true,
                          "ifTargetFound": [
                            {
                              "name": "Heal",
                              "target": "Use Prior Target(s) Defined",
                              "healFlat": {
                                "operator": "Variables[0] (640) || RETURN",
                                "displayLines": "640",
                                "constants": [],
                                "variables": [
                                  640
                                ]
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Heal",
                          "target": "Use Prior Target(s) Defined",
                          "healFlat": {
                            "operator": "Variables[0] (640) || RETURN",
                            "displayLines": "640",
                            "constants": [],
                            "variables": [
                              640
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
          "stackData": [
            "PointB3_Active"
          ],
          "latentQueue": [],
          "description": "Increases the received Break DMG by <span class=\"descriptionNumberColor\">MDF_BreakDamagTaken</span>. And every time this unit gets attacked by characters, the attacker will restore <span class=\"descriptionNumberColor\">#SkillP01_P2_HealAmount</span> HP.",
          "type": "Debuff",
          "effectName": "Besotted",
          "statusName": "Besotted"
        },
        {
          "name": "Modifier Construction",
          "for": "MWGallagher_Ability02_StatusResModifier[<span class=\"descriptionNumberColor\">Effect RES Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
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
          "description": "Increases Effect RES by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Effect RES Boost",
          "statusName": "Effect RES Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "Gallagher_PointB3_AddFireBreakDamageModifier",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreak</span>&nbsp;",
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
          ]
        }
      ],
      "references": []
    }
  }
}