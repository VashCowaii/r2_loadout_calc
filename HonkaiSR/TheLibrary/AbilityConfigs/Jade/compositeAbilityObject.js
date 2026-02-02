const compositeAbilityObject = {
  "fullCharacterName": "Jade",
  "trimCharacterName": "Jade",
  "abilityList": [
    "Jade_Jade_Trace02",
    "Jade_Jade_TechniqueInLevel",
    "Jade_Jade_Passive_Part02_02",
    "Jade_Jade_Passive_Part02_01",
    "Jade_Jade_Passive_Part01",
    "Jade_Jade_PassiveAbility01",
    "Jade_Jade_Ability03_Part02",
    "Jade_Jade_Ability03_Part01",
    "Jade_Jade_Ability03_EnterReady",
    "Jade_Jade_Ability02_Part02",
    "Jade_Jade_Ability02_Part01",
    "Jade_Jade_Ability01_Part02",
    "Jade_Jade_Ability01_Part01",
    "Jade_Modifiers"
  ],
  "abilityObject": {
    "Jade_Jade_Trace02": {
      "fileName": "Jade_Jade_Trace02",
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
          "modifier": "Jade_Tree02"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Jade_Tree02",
          "stackType": "ReplaceByCaster",
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
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "advanceType": "Advance",
                      "multi": "-0.5"
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
    "Jade_Jade_TechniqueInLevel": {
      "fileName": "Jade_Jade_TechniqueInLevel",
      "childAbilityList": [
        "Jade_Jade_TechniqueInLevel"
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
          "modifier": "StageAbility_Maze_Jade_Modifier",
          "valuePerStack": {
            "MDF_HitNumb_Maze": 0
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_Jade_Modifier",
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "StageAbility_MazeStandard_EnterBattle_Monster_Modifier",
                        "invertCondition": true
                      },
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
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
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
                            "attackType": "Technique"
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_RateLayer",
                          "value": {
                            "operator": "Variables[0] (_RateLayer) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(_RateLayer + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_RateLayer"
                            ]
                          }
                        }
                      ]
                    },
                    "Trigger: Attack End",
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Jade_Passive_Rate[<span class=\"descriptionNumberColor\">Pawned Asset</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (50) || RETURN",
                        "displayLines": "50",
                        "constants": [],
                        "variables": [
                          50
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.024) || RETURN",
                          "displayLines": "0.024",
                          "constants": [],
                          "variables": [
                            0.024
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (0.005) || RETURN",
                          "displayLines": "0.005",
                          "constants": [],
                          "variables": [
                            0.005
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (15) || RETURN",
                        "displayLines": "15",
                        "constants": [],
                        "variables": [
                          15
                        ]
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -60
            }
          ],
          "stackData": [
            "MDF_HitNumb_Maze"
          ],
          "latentQueue": []
        }
      ]
    },
    "Jade_Jade_Passive_Part02_02": {
      "fileName": "Jade_Jade_Passive_Part02_02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
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
              "modifier": "Jade_Eidolon1_InsertDamageRatio",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.32) || RETURN",
                  "displayLines": "0.32",
                  "constants": [],
                  "variables": [
                    0.32
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_RateLayer",
          "value": {
            "operator": "Variables[0] (_RateLayer) || Variables[1] (_InsertTriggerCount) || SUB || RETURN",
            "displayLines": "(_RateLayer - _InsertTriggerCount)",
            "constants": [],
            "variables": [
              "_RateLayer",
              "_InsertTriggerCount"
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (_RateLayer) || RETURN",
            "displayLines": "_RateLayer",
            "constants": [],
            "variables": [
              "_RateLayer"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Jade_Passive_Rate[<span class=\"descriptionNumberColor\">Pawned Asset</span>]",
          "stackLimit": {
            "operator": "Variables[0] (50) || RETURN",
            "displayLines": "50",
            "constants": [],
            "variables": [
              50
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.024) || RETURN",
              "displayLines": "0.024",
              "constants": [],
              "variables": [
                0.024
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (5) || RETURN",
            "displayLines": "5",
            "constants": [],
            "variables": [
              5
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || Variables[1] (0.8) || ADD || RETURN",
              "displayLines": "(1.2 + 0.8)",
              "constants": [],
              "variables": [
                1.2,
                0.8
              ]
            },
            "HitSplit": 0.1,
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
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || Variables[1] (0.8) || ADD || RETURN",
              "displayLines": "(1.2 + 0.8)",
              "constants": [],
              "variables": [
                1.2,
                0.8
              ]
            },
            "HitSplit": 0.1,
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
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || Variables[1] (0.8) || ADD || RETURN",
              "displayLines": "(1.2 + 0.8)",
              "constants": [],
              "variables": [
                1.2,
                0.8
              ]
            },
            "HitSplit": 0.1,
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
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || Variables[1] (0.8) || ADD || RETURN",
              "displayLines": "(1.2 + 0.8)",
              "constants": [],
              "variables": [
                1.2,
                0.8
              ]
            },
            "HitSplit": 0.1,
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
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || Variables[1] (0.8) || ADD || RETURN",
              "displayLines": "(1.2 + 0.8)",
              "constants": [],
              "variables": [
                1.2,
                0.8
              ]
            },
            "HitSplit": 0.6,
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
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Jade_Eidolon1_InsertDamageRatio"
            }
          ]
        },
        {
          "name": "Define Modifier Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "Jade_Ultimate_Insert[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]",
          "function": "Add"
        }
      ],
      "references": []
    },
    "Jade_Jade_Passive_Part02_01": {
      "fileName": "Jade_Jade_Passive_Part02_01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
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
              "modifier": "Jade_Eidolon1_InsertDamageRatio",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.32) || RETURN",
                  "displayLines": "0.32",
                  "constants": [],
                  "variables": [
                    0.32
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_RateLayer",
          "value": {
            "operator": "Variables[0] (_RateLayer) || Variables[1] (_InsertTriggerCount) || SUB || RETURN",
            "displayLines": "(_RateLayer - _InsertTriggerCount)",
            "constants": [],
            "variables": [
              "_RateLayer",
              "_InsertTriggerCount"
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (_RateLayer) || RETURN",
            "displayLines": "_RateLayer",
            "constants": [],
            "variables": [
              "_RateLayer"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Jade_Passive_Rate[<span class=\"descriptionNumberColor\">Pawned Asset</span>]",
          "stackLimit": {
            "operator": "Variables[0] (50) || RETURN",
            "displayLines": "50",
            "constants": [],
            "variables": [
              50
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.024) || RETURN",
              "displayLines": "0.024",
              "constants": [],
              "variables": [
                0.024
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (5) || RETURN",
            "displayLines": "5",
            "constants": [],
            "variables": [
              5
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
              ]
            },
            "HitSplit": 0.15,
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
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
              ]
            },
            "HitSplit": 0.15,
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
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
              ]
            },
            "HitSplit": 0.15,
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
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
              ]
            },
            "HitSplit": 0.15,
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
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
              ]
            },
            "HitSplit": 0.4,
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
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Jade_Eidolon1_InsertDamageRatio"
            }
          ]
        },
        {
          "name": "Define Modifier Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "Jade_Ultimate_Insert[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]",
          "function": "Add"
        }
      ],
      "references": []
    },
    "Jade_Jade_Passive_Part01": {
      "fileName": "Jade_Jade_Passive_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Fang of Flare Flaying"
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Jade_Ultimate_Insert[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]",
            "invertCondition": true
          },
          "passed": [
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
              "ability": "Jade_Passive_Part02_01",
              "isTrigger": true
            }
          ],
          "failed": [
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
              "ability": "Jade_Passive_Part02_02",
              "isTrigger": true
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Jade_Ultimate_Insert[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]"
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
            "modifier": "Jade_Ultimate_Insert[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]"
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
            "modifier": "Jade_Ultimate_Insert[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]",
            "invertCondition": true
          },
          "passed": [
            "Deleted bullshit",
            {
              "name": "IF",
              "conditions": {
                "name": "NOT",
                "condition": {
                  "name": "Enemies Still Alive",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "includeNonTargets": true
                }
              },
              "passed": [
                "Deleted bullshit"
              ]
            }
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "references": []
    },
    "Jade_Jade_PassiveAbility01": {
      "fileName": "Jade_Jade_PassiveAbility01",
      "childAbilityList": [
        "Jade_Jade_Passive_Camera_Start",
        "Jade_Jade_Passive_Camera_End01",
        "Jade_Jade_Passive_Camera_End01_ToStandBy",
        "Jade_Jade_Passive_Camera_End02",
        "Jade_Jade_PassiveAbility01",
        "Jade_Jade_Passive_Part01",
        "Jade_Jade_Passive_Part02_01",
        "Jade_Jade_Passive_Part02_02"
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
          "modifier": "Jade_Passive"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Jade_Passive_CharacterCreateRate"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Jade_AbilityPreShowModifier"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Pursued_DamagePercentage",
          "value": {
            "operator": "Variables[0] (0.25) || RETURN",
            "displayLines": "0.25",
            "constants": [],
            "variables": [
              0.25
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_InsertTriggerCount",
          "value": {
            "operator": "Variables[0] (8) || RETURN",
            "displayLines": "8",
            "constants": [],
            "variables": [
              8
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (_RateLayer) || RETURN",
            "displayLines": "_RateLayer",
            "constants": [],
            "variables": [
              "_RateLayer"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (_InsertTriggerCount) || RETURN",
            "displayLines": "_InsertTriggerCount",
            "constants": [],
            "variables": [
              "_InsertTriggerCount"
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 2
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Jade_Passive_BPBuffAddLayer",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Reverse Repo"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Jade_PointB1_Passive",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
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
                "target": "{{Caster}}"
              },
              "modifier": "Jade_Eidolon6_Check"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Jade_Eidolon6_Check",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Jade_AbilityPreShowModifier",
          "stackType": "ReplaceByCaster",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "OR",
                  "conditionList": [
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Jade_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                    },
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Jade_Eidolon6_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                    }
                  ],
                  "invertCondition": true
                },
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
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "30(SPD Change)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Jade_PointB1_Passive",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
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
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Jade_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Jade_Eidolon6_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Jade_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Jade_Eidolon6_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
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
                          "modifier": "Jade_Passive_Rate[<span class=\"descriptionNumberColor\">Pawned Asset</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (50) || RETURN",
                            "displayLines": "50",
                            "constants": [],
                            "variables": [
                              50
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.024) || RETURN",
                              "displayLines": "0.024",
                              "constants": [],
                              "variables": [
                                0.024
                              ]
                            },
                            "MDF_PropertyValue2": {
                              "operator": "Variables[0] (0.005) || RETURN",
                              "displayLines": "0.005",
                              "constants": [],
                              "variables": [
                                0.005
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
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
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Jade_Passive_CharacterCreateRate",
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Jade_Passive_contract"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Reverse Repo"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Jade_Passive_Rate[<span class=\"descriptionNumberColor\">Pawned Asset</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (50) || RETURN",
                            "displayLines": "50",
                            "constants": [],
                            "variables": [
                              50
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.024) || RETURN",
                              "displayLines": "0.024",
                              "constants": [],
                              "variables": [
                                0.024
                              ]
                            },
                            "MDF_PropertyValue2": {
                              "operator": "Variables[0] (0.005) || RETURN",
                              "displayLines": "0.005",
                              "constants": [],
                              "variables": [
                                0.005
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
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
          "for": "Jade_Passive",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "Jade_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "Jade_Eidolon6_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Attack Targets of Modifier Holder}}"
                          },
                          "includeDyingTargets": true,
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_RateLayer",
                              "value": {
                                "operator": "Variables[0] (_RateLayer) || Constants[0] (1) || ADD || Variables[1] (Jade_Passive_BPBuffAddLayer) || ADD || RETURN",
                                "displayLines": "((_RateLayer + 1) + Jade_Passive_BPBuffAddLayer)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "_RateLayer",
                                  "Jade_Passive_BPBuffAddLayer"
                                ]
                              }
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_HitNumb_Self",
                              "value": {
                                "operator": "Variables[0] (MDF_HitNumb_Self) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(MDF_HitNumb_Self + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "MDF_HitNumb_Self"
                                ]
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Attack Targets of Modifier Holder}}"
                          },
                          "includeDyingTargets": true,
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_RateLayer",
                              "value": {
                                "operator": "Variables[0] (_RateLayer) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(_RateLayer + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "_RateLayer"
                                ]
                              }
                            }
                          ]
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
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_HitNumb_Self",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_RateLayer",
                              "value": {
                                "operator": "Variables[0] (_RateLayer) || Variables[1] (1) || ADD || RETURN",
                                "displayLines": "(_RateLayer + 1)",
                                "constants": [],
                                "variables": [
                                  "_RateLayer",
                                  1
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "MDF_HitNumb_Self",
                                "compareType": "=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "_RateLayer",
                                  "value": {
                                    "operator": "Variables[0] (_RateLayer) || Variables[1] (2) || ADD || RETURN",
                                    "displayLines": "(_RateLayer + 2)",
                                    "constants": [],
                                    "variables": [
                                      "_RateLayer",
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
                      "name": "Define Custom Variable",
                      "variableName": "MDF_HitNumb_Self",
                      "value": 0
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
                        "name": "Compare: Variable",
                        "value1": "_RateLayer",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (_InsertTriggerCount) || RETURN",
                          "displayLines": "_InsertTriggerCount",
                          "constants": [],
                          "variables": [
                            "_InsertTriggerCount"
                          ]
                        }
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
                      "abilityName": "Jade_Passive_Part01",
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
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "modifier": "Jade_Passive_contract"
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
                        "name": "Compare: Variable",
                        "value1": "_RateLayer",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (_InsertTriggerCount) || RETURN",
                          "displayLines": "_InsertTriggerCount",
                          "constants": [],
                          "variables": [
                            "_InsertTriggerCount"
                          ]
                        }
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
                      "abilityName": "Jade_Passive_Part01",
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
                        "name": "Compare: Variable",
                        "value1": "_RateLayer",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (_InsertTriggerCount) || RETURN",
                          "displayLines": "_InsertTriggerCount",
                          "constants": [],
                          "variables": [
                            "_InsertTriggerCount"
                          ]
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
                      "abilityName": "Jade_Passive_Part01",
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
                        "name": "Compare: Variable",
                        "value1": "_RateLayer",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (_InsertTriggerCount) || RETURN",
                          "displayLines": "_InsertTriggerCount",
                          "constants": [],
                          "variables": [
                            "_InsertTriggerCount"
                          ]
                        }
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
                      "abilityName": "Jade_Passive_Part01",
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
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_RateLayer",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 99,
                  "whenValueChanges": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_RateLayer) || RETURN",
                        "displayLines": "_RateLayer",
                        "constants": [],
                        "variables": [
                          "_RateLayer"
                        ]
                      }
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
                            "name": "Compare: Variable",
                            "value1": "_RateLayer",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (_InsertTriggerCount) || RETURN",
                              "displayLines": "_InsertTriggerCount",
                              "constants": [],
                              "variables": [
                                "_InsertTriggerCount"
                              ]
                            }
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
                          "abilityName": "Jade_Passive_Part01",
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
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Jade_Jade_Ability03_Part02": {
      "fileName": "Jade_Jade_Ability03_Part02",
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
          "modifier": "Jade_Ultimate_Insert[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]",
          "counter": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            },
            "MDF_Count": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
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
              "modifier": "Jade_Eidolon4_DefPenetrate[<span class=\"descriptionNumberColor\">Sincerity? Put Option Only</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.12) || RETURN",
                  "displayLines": "0.12",
                  "constants": [],
                  "variables": [
                    0.12
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (2.4) || RETURN",
              "displayLines": "2.4",
              "constants": [],
              "variables": [
                2.4
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
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Jade_Ultimate_Insert[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [
            "MDF_PropertyRatio",
            "MDF_Count"
          ],
          "latentQueue": [],
          "description": "Increases the multiplier for the DMG dealt by Talent's Follow-Up ATK by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>. This can take effect for up to <span class=\"descriptionNumberColor\">MDF_Count</span> time(s).",
          "type": "Buff",
          "effectName": "Follow-Up ATK Boost",
          "statusName": "Follow-Up ATK Boost"
        }
      ]
    },
    "Jade_Jade_Ability03_Part01": {
      "fileName": "Jade_Jade_Ability03_Part01",
      "childAbilityList": [
        "Jade_Jade_Ability03_Camera",
        "Jade_Jade_Ability03_EnterReady",
        "Jade_Jade_Ability03_Part01",
        "Jade_Jade_Ability03_Part02"
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
          "ability": "Jade_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Jade_Jade_Ability03_EnterReady": {
      "fileName": "Jade_Jade_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Jade_Jade_Ability02_Part02": {
      "fileName": "Jade_Jade_Ability02_Part02",
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
          "modifier": "Jade_BPAbilityBonusListen"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "Jade_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "Jade_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "Jade_Eidolon6_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "Jade_Eidolon6_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "Jade_Eidolon6_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
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
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "Jade_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
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
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Jade_BPAbilityBonusListen",
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
                  "modifier": "Jade_Eidolon6_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (30) || RETURN",
                      "displayLines": "30",
                      "constants": [],
                      "variables": [
                        30
                      ]
                    },
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "MDF_Eidolon1_Flag": 1,
                    "MDF_Eidolon1_HitNumb": 0,
                    "MDF_LoseHP": {
                      "operator": "Variables[0] (0.02) || RETURN",
                      "displayLines": "0.02",
                      "constants": [],
                      "variables": [
                        0.02
                      ]
                    },
                    "MDF_Eidolon1_AddRateLayer": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "MDF_Eidolon1_AddRateLayer02": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    }
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
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "Jade_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (30) || RETURN",
                          "displayLines": "30",
                          "constants": [],
                          "variables": [
                            30
                          ]
                        },
                        "MDF_Eidolon1_Flag": 1,
                        "MDF_Eidolon1_HitNumb": 0,
                        "MDF_LoseHP": {
                          "operator": "Variables[0] (0.02) || RETURN",
                          "displayLines": "0.02",
                          "constants": [],
                          "variables": [
                            0.02
                          ]
                        },
                        "MDF_Eidolon1_AddRateLayer": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        },
                        "MDF_Eidolon1_AddRateLayer02": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
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
                      "modifier": "Jade_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (30) || RETURN",
                          "displayLines": "30",
                          "constants": [],
                          "variables": [
                            30
                          ]
                        },
                        "MDF_Eidolon1_Flag": 0,
                        "MDF_Eidolon1_HitNumb": 0,
                        "MDF_LoseHP": {
                          "operator": "Variables[0] (0.02) || RETURN",
                          "displayLines": "0.02",
                          "constants": [],
                          "variables": [
                            0.02
                          ]
                        },
                        "MDF_Eidolon1_AddRateLayer": 0,
                        "MDF_Eidolon1_AddRateLayer02": 0
                      }
                    }
                  ]
                }
              ]
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
          "for": "Jade_Eidolon6_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
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
                  "modifier": "Jade_Eidolon6_QuantumPenetrate"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
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
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Jade_Eidolon6_QuantumPenetrate",
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
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (_Pursued_DamagePercentage) || RETURN",
                          "displayLines": "_Pursued_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "_Pursued_DamagePercentage"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "latentQueue": [],
          "description": "Quantum RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>. After attacking, for each enemy target hit, Jade gains 1 point of Charge and deals Additional DMG.",
          "type": "Buff",
          "effectName": "Debt Collector",
          "statusName": "Debt Collector"
        },
        {
          "name": "Modifier Construction",
          "for": "Jade_Eidolon6_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "Unknow",
          "modifierFlags": [
            "STAT_SpeedUp",
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Jade_BPAbilityBonusListen"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
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
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
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
                      "name": "Define Modifier Variable",
                      "modifierName": "Jade_Eidolon6_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
                      "function": "Add",
                      "valueType": "Duration"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
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
                      "modifier": "Jade_Eidolon6_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
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
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (MDF_LoseHP) || RETURN",
                    "displayLines": "MDF_LoseHP",
                    "constants": [],
                    "variables": [
                      "MDF_LoseHP"
                    ]
                  },
                  "consumeFloor": 1,
                  "attackType": "BPSkill"
                },
                {
                  "name": "Define Custom Variable with Attack Targets",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_Rank01_HitNumb"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (_Pursued_DamagePercentage) || RETURN",
                          "displayLines": "_Pursued_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "_Pursued_DamagePercentage"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Rank01_Flag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Rank01_HitNumb",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_RateLayer",
                          "value": {
                            "operator": "Variables[0] (_RateLayer) || Variables[1] (MDF_Eidolon1_AddRateLayer) || ADD || RETURN",
                            "displayLines": "(_RateLayer + MDF_Eidolon1_AddRateLayer)",
                            "constants": [],
                            "variables": [
                              "_RateLayer",
                              "MDF_Eidolon1_AddRateLayer"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_Rank01_HitNumb",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_RateLayer",
                              "value": {
                                "operator": "Variables[0] (_RateLayer) || Variables[1] (MDF_Eidolon1_AddRateLayer02) || ADD || RETURN",
                                "displayLines": "(_RateLayer + MDF_Eidolon1_AddRateLayer02)",
                                "constants": [],
                                "variables": [
                                  "_RateLayer",
                                  "MDF_Eidolon1_AddRateLayer02"
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
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Rank01_HitNumb",
                  "value": 0
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue",
            "MDF_PropertyRatio",
            "MDF_Rank01_Flag",
            "MDF_Rank01_HitNumb",
            "MDF_LoseHP",
            "MDF_Rank01_AddRateLayer",
            "MDF_Rank01_AddRateLayer02"
          ],
          "latentQueue": [],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. After using an attack, consumes a small amount of HP. For each enemy target hit, Jade gains 1 point of Charge and deals Additional DMG.",
          "type": "Buff",
          "effectName": "Debt Collector",
          "statusName": "Debt Collector"
        },
        {
          "name": "Modifier Construction",
          "for": "Jade_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Skill"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (_Pursued_DamagePercentage) || RETURN",
                          "displayLines": "_Pursued_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "_Pursued_DamagePercentage"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "After using an attack, for each enemy target hit, Jade gains 1 point of Charge and deals Additional DMG.",
          "type": "Buff",
          "effectName": "Debt Collector",
          "statusName": "Debt Collector"
        },
        {
          "name": "Modifier Construction",
          "for": "Jade_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "Unknow",
          "modifierFlags": [
            "STAT_SpeedUp",
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Jade_BPAbilityBonusListen"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
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
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
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
                      "name": "Define Modifier Variable",
                      "modifierName": "Jade_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
                      "function": "Add",
                      "valueType": "Duration"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
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
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (MDF_LoseHP) || RETURN",
                    "displayLines": "MDF_LoseHP",
                    "constants": [],
                    "variables": [
                      "MDF_LoseHP"
                    ]
                  },
                  "consumeFloor": 1,
                  "attackType": "BPSkill"
                },
                {
                  "name": "Define Custom Variable with Attack Targets",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_Rank01_HitNumb"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (_Pursued_DamagePercentage) || RETURN",
                          "displayLines": "_Pursued_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "_Pursued_DamagePercentage"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Rank01_Flag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Rank01_HitNumb",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_RateLayer",
                          "value": {
                            "operator": "Variables[0] (_RateLayer) || Variables[1] (MDF_Eidolon1_AddRateLayer) || ADD || RETURN",
                            "displayLines": "(_RateLayer + MDF_Eidolon1_AddRateLayer)",
                            "constants": [],
                            "variables": [
                              "_RateLayer",
                              "MDF_Eidolon1_AddRateLayer"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_Rank01_HitNumb",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_RateLayer",
                              "value": {
                                "operator": "Variables[0] (_RateLayer) || Variables[1] (MDF_Eidolon1_AddRateLayer02) || ADD || RETURN",
                                "displayLines": "(_RateLayer + MDF_Eidolon1_AddRateLayer02)",
                                "constants": [],
                                "variables": [
                                  "_RateLayer",
                                  "MDF_Eidolon1_AddRateLayer02"
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
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Rank01_HitNumb",
                  "value": 0
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue",
            "MDF_Rank01_Flag",
            "MDF_Rank01_HitNumb",
            "MDF_LoseHP",
            "MDF_Rank01_AddRateLayer",
            "MDF_Rank01_AddRateLayer02"
          ],
          "latentQueue": [],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. After using an attack, consumes a small amount of HP. For each enemy target hit, Jade gains 1 point of Charge and deals Additional DMG.",
          "type": "Buff",
          "effectName": "Debt Collector",
          "statusName": "Debt Collector"
        },
        {
          "name": "Modifier Construction",
          "for": "Jade_BPAbilityBonusListen",
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
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "Jade_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Jade_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Jade_Eidolon6_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "Jade_Eidolon6_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "Jade_Eidolon6_BPAbilitySelf[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Skill"
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
    "Jade_Jade_Ability02_Part01": {
      "fileName": "Jade_Jade_Ability02_Part01",
      "childAbilityList": [
        "Jade_Jade_Ability02_Camera",
        "Jade_Jade_Ability02_Camera_Self",
        "Jade_Jade_Ability02_Part01",
        "Jade_Jade_Ability02_Part02"
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
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Jade_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "Jade_Jade_Ability01_Part02": {
      "fileName": "Jade_Jade_Ability01_Part02",
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
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
            "attackType": "Basic ATK",
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
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
            "Tags": null,
            "attackType": "Basic ATK"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Jade_Jade_Ability01_Part01": {
      "fileName": "Jade_Jade_Ability01_Part01",
      "childAbilityList": [
        "Jade_Jade_Ability01_Camera",
        "Jade_Jade_Ability01_Part01",
        "Jade_Jade_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        5
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Jade_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Jade_Modifiers": {
      "fileName": "Jade_Modifiers",
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
          "for": "Jade_Eidolon6_QuantumPenetrate",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumPEN</span>&nbsp;",
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
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Jade_Eidolon4_DefPenetrate[<span class=\"descriptionNumberColor\">Sincerity? Put Option Only</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                          "value": "-MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "Ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of enemy targets' DEF.",
          "type": "Buff",
          "effectName": "Sincerity? Put Option Only",
          "statusName": "Sincerity? Put Option Only"
        },
        {
          "name": "Modifier Construction",
          "for": "Jade_Eidolon2_CriticalChance[<span class=\"descriptionNumberColor\">Morality? Herein Authenticated</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
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
          "description": "Increases CRIT Rate by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT Rate Boost",
          "statusName": "Morality? Herein Authenticated"
        },
        {
          "name": "Modifier Construction",
          "for": "Jade_Eidolon1_InsertDamageRatio",
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
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Jade_Passive_contract",
          "modifierFlags": [
            "KeepOnDeathrattle",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_AttackFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "Jade_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "Jade_Eidolon6_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                              }
                            ]
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "_HitFlag",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_HitFlag",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_RateLayer",
                          "value": {
                            "operator": "Variables[0] (_RateLayer) || Variables[1] (Jade_Passive_BPBuffAddLayer) || ADD || RETURN",
                            "displayLines": "(_RateLayer + Jade_Passive_BPBuffAddLayer)",
                            "constants": [],
                            "variables": [
                              "_RateLayer",
                              "Jade_Passive_BPBuffAddLayer"
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
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_AttackFlag",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Jade_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Jade_Eidolon6_BPAbility[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_AttackFlag",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_HitFlag",
                      "value": 0
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
          "for": "Jade_Passive_Rate[<span class=\"descriptionNumberColor\">Pawned Asset</span>]",
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
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_Layer",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (15) || RETURN",
                          "displayLines": "15",
                          "constants": [],
                          "variables": [
                            15
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
                        "target": "{{Caster}}"
                      },
                      "modifier": "Jade_Eidolon2_CriticalChance[<span class=\"descriptionNumberColor\">Morality? Herein Authenticated</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.18) || RETURN",
                          "displayLines": "0.18",
                          "constants": [],
                          "variables": [
                            0.18
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Asset Forfeiture"
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                        "displayLines": "(MDF_PropertyValue2 * MDF_Layer)",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue2",
                          "MDF_Layer"
                        ]
                      }
                    },
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Every stack increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>."
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue",
            "MDF_PropertyValue2"
          ],
          "latentQueue": [],
          "description": "Each stack increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Pawned Asset",
          "statusName": "Pawned Asset"
        },
        {
          "name": "Modifier Construction",
          "for": "Jade_Passive_Count",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        }
      ],
      "references": []
    }
  }
}