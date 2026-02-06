const compositeAbilityObject = {
  "fullCharacterName": "Aventurine",
  "trimCharacterName": "Aventurine",
  "abilityList": [
    "Aventurine_Aventurine_Trace02",
    "Aventurine_Aventurine_TechniqueInLevel_02",
    "Aventurine_Aventurine_TechniqueInLevel_01",
    "Aventurine_Aventurine_TechniqueInLevel_00",
    "Aventurine_Aventurine_TechniqueInLevel",
    "Aventurine_Aventurine_PassiveAbility01_InsertAbilityPhase02",
    "Aventurine_Aventurine_PassiveAbility01_InsertAbility",
    "Aventurine_Aventurine_PassiveAbility01",
    "Aventurine_Aventurine_Ability03_Part02",
    "Aventurine_Aventurine_Ability03_Part01",
    "Aventurine_Aventurine_Ability03_EnterReady",
    "Aventurine_Aventurine_Ability02_Part02",
    "Aventurine_Aventurine_Ability02_Part01",
    "Aventurine_Aventurine_Ability01_Part02",
    "Aventurine_Aventurine_Ability01_Part01",
    "Aventurine_Modifiers",
    "Aventurine_Functions"
  ],
  "abilityObject": {
    "Aventurine_Aventurine_Trace02": {
      "fileName": "Aventurine_Aventurine_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Aventurine_Aventurine_TechniqueInLevel_02": {
      "fileName": "Aventurine_Aventurine_TechniqueInLevel_02",
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
          "modifier": "Aventurine_Maze_Modifier_02"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Maze_Modifier_02",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Aventurine_Maze_Defence[<span class=\"descriptionNumberColor\">The Red or the Black</span>]",
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
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
                      ]
                    }
                  }
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Aventurine_Aventurine_TechniqueInLevel_01": {
      "fileName": "Aventurine_Aventurine_TechniqueInLevel_01",
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
          "modifier": "Aventurine_Maze_Modifier_01"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Maze_Modifier_01",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Aventurine_Maze_Defence[<span class=\"descriptionNumberColor\">The Red or the Black</span>]",
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
                      "operator": "Variables[0] (0.36) || RETURN",
                      "displayLines": "0.36",
                      "constants": [],
                      "variables": [
                        0.36
                      ]
                    }
                  }
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Aventurine_Aventurine_TechniqueInLevel_00": {
      "fileName": "Aventurine_Aventurine_TechniqueInLevel_00",
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
          "modifier": "Aventurine_Maze_Modifier_00"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Maze_Modifier_00",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "Aventurine_Maze_Defence[<span class=\"descriptionNumberColor\">The Red or the Black</span>]",
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
                      "operator": "Variables[0] (0.24) || RETURN",
                      "displayLines": "0.24",
                      "constants": [],
                      "variables": [
                        0.24
                      ]
                    }
                  }
                },
                "Modifier Deletes Itself"
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Aventurine_Aventurine_TechniqueInLevel": {
      "fileName": "Aventurine_Aventurine_TechniqueInLevel",
      "childAbilityList": [
        "Aventurine_Aventurine_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [],
      "references": []
    },
    "Aventurine_Aventurine_PassiveAbility01_InsertAbilityPhase02": {
      "fileName": "Aventurine_Aventurine_PassiveAbility01_InsertAbilityPhase02",
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Aventurine_Passive_AddDefence[<span class=\"descriptionNumberColor\">Unexpected Hanging Paradox</span>]",
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
              "name": "Define Custom Variable",
              "variableName": "MDF_AttackCount",
              "value": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Bingo!"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Aventurine_Trace03_Trigger"
            }
          ]
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "MDF_Layer2",
          "modifierName": "Aventurine_Passive_ShieldEnergy",
          "multiplier": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Aventurine_Passive_ShieldEnergy"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Aventurine_Passive_ShieldEnergy",
          "addStacksPerTrigger": {
            "operator": "Variables[0] (MDF_Layer2) || Constants[0] (7) || SUB || RETURN",
            "displayLines": "(MDF_Layer2 - 7)",
            "constants": [
              7
            ],
            "variables": [
              "MDF_Layer2"
            ]
          }
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "ContextCaster",
          "variableName": "MDF_AttackGap",
          "value": {
            "operator": "Constants[0] (1) || Variables[0] (7) || Variables[1] (MDF_AttackCount) || ADD || DIV || RETURN",
            "displayLines": "(1 / (7 + MDF_AttackCount))",
            "constants": [
              1
            ],
            "variables": [
              7,
              "MDF_AttackCount"
            ]
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (7) || Variables[1] (MDF_AttackCount) || ADD || RETURN",
            "displayLines": "(7 + MDF_AttackCount)",
            "constants": [],
            "variables": [
              7,
              "MDF_AttackCount"
            ]
          },
          "Event": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Bounce_SelectTarget",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "paramSequence": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    },
                    "dmgFormula": "DEF Scaling",
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
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "Aventurine_Aventurine_PassiveAbility01_InsertAbility": {
      "fileName": "Aventurine_Aventurine_PassiveAbility01_InsertAbility",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Shot Loaded Right"
        },
        "Deleted bullshit",
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
          "ability": "Aventurine_PassiveAbility01_InsertAbilityPhase02",
          "isTrigger": true
        }
      ],
      "onAbort": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Aventurine_Trace03_Trigger"
        }
      ],
      "references": []
    },
    "Aventurine_Aventurine_PassiveAbility01": {
      "fileName": "Aventurine_Aventurine_PassiveAbility01",
      "childAbilityList": [
        "Aventurine_Aventurine_PassiveAbility01",
        "Aventurine_Aventurine_PassiveAbility01_InsertAbility",
        "Aventurine_Aventurine_PassiveAbility01_InsertAbilityPhase02",
        "Aventurine_Aventurine_PassiveAbility01_InsertAbility_Camera"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 1,
      "toughnessList": [
        3.3333333333333335,
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
          "modifier": "Aventurine_Passive"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": 7,
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 2,
          "cooldown": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Leverage"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Aventurine_Trace01"
            }
          ]
        }
      ],
      "references": []
    },
    "Aventurine_Aventurine_Ability03_Part02": {
      "fileName": "Aventurine_Aventurine_Ability03_Part02",
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
          "modifier": "Aventurine_Ability03_CoinAdd"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Aventurine_Ability03_CritDmgIncrease[<span class=\"descriptionNumberColor\">Unnerved</span>]",
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
              "operator": "Variables[0] (0.15) || RETURN",
              "displayLines": "0.15",
              "constants": [],
              "variables": [
                0.15
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (2.7) || RETURN",
              "displayLines": "2.7",
              "constants": [],
              "variables": [
                2.7
              ]
            },
            "dmgFormula": "DEF Scaling",
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Ultimate",
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
              "name": "Use Custom Character Function",
              "functionName": "Aventurine_RecordCurrentShield"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "MDF_CurrentDefence2",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "Aventurine_StackableShield",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "valuePerStack": {
                "MDF_InitShieldValue": {
                  "operator": "Variables[0] (1) || Variables[1] (MDF_CurrentDefence2) || Variables[2] (0.24) || MUL || Variables[3] (320) || ADD || MUL || RETURN",
                  "displayLines": "(1 * ((MDF_CurrentDefence2 * 0.24) + 320))",
                  "constants": [],
                  "variables": [
                    1,
                    "MDF_CurrentDefence2",
                    0.24,
                    320
                  ]
                },
                "MDF_MaxShieldRatio": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                },
                "MDF_ForceShield": {
                  "operator": "Variables[0] (MDF_CurrentDefence2) || Variables[1] (0.24) || MUL || Variables[2] (320) || ADD || RETURN",
                  "displayLines": "((MDF_CurrentDefence2 * 0.24) + 320)",
                  "constants": [],
                  "variables": [
                    "MDF_CurrentDefence2",
                    0.24,
                    320
                  ]
                }
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Aventurine_Ability02_ShieldEffect",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_TeammateCount1",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Random Event",
                          "odds": [
                            0.2,
                            0.2,
                            0.2
                          ],
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_TeammateCount1",
                              "value": 2
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_TeammateCount1",
                              "value": 3
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_TeammateCount1",
                              "value": 4
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Aventurine_Ability02_ShieldEffect",
                      "valuePerStack": {
                        "MDF_ResistanceRatio": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "MDF_TeammateCount": {
                          "operator": "Variables[0] (MDF_TeammateCount1) || RETURN",
                          "displayLines": "MDF_TeammateCount1",
                          "constants": [],
                          "variables": [
                            "MDF_TeammateCount1"
                          ]
                        },
                        "MDF_CritDmg1": {
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
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Heal_Mark"
        }
      ]
    },
    "Aventurine_Aventurine_Ability03_Part01": {
      "fileName": "Aventurine_Aventurine_Ability03_Part01",
      "childAbilityList": [
        "Aventurine_Aventurine_Ability03_Camera",
        "Aventurine_Aventurine_Ability03_EnterReady",
        "Aventurine_Aventurine_Ability03_Part01",
        "Aventurine_Aventurine_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        30,
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
          "ability": "Aventurine_Ability03_Part02",
          "isTrigger": true
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 801501,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_WMonster_W0_Boss_Unselectable[<span class=\"descriptionNumberColor\">Vestige Valor</span>]",
                "invertCondition": true
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 801502,
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
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
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "Monster_W2_Huanlong_Part1"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "modifier": "Monster_W2_Huanlong_Part2"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Ability Target(ST)}}"
                        },
                        "modifier": "Monster_W2_Huanlong_Part3"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "Aventurine_Aventurine_Ability03_EnterReady": {
      "fileName": "Aventurine_Aventurine_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Aventurine_Aventurine_Ability02_Part02": {
      "fileName": "Aventurine_Aventurine_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Aventurine_Ability02_ShieldEffect"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "MDF_CurrentDefence2",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "Aventurine_RecordCurrentShield"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "Aventurine_StackableShield",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "valuePerStack": {
            "MDF_InitShieldValue": {
              "operator": "Variables[0] (MDF_CurrentDefence2) || Variables[1] (0.24) || MUL || Variables[2] (320) || ADD || RETURN",
              "displayLines": "((MDF_CurrentDefence2 * 0.24) + 320)",
              "constants": [],
              "variables": [
                "MDF_CurrentDefence2",
                0.24,
                320
              ]
            },
            "MDF_MaxShieldRatio": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "MDF_ForceShield": {
              "operator": "Variables[0] (MDF_CurrentDefence2) || Variables[1] (0.24) || MUL || Variables[2] (320) || ADD || RETURN",
              "displayLines": "((MDF_CurrentDefence2 * 0.24) + 320)",
              "constants": [],
              "variables": [
                "MDF_CurrentDefence2",
                0.24,
                320
              ]
            }
          }
        },
        {
          "name": "Looped Event",
          "Event": [
            "Move to Next Listed Target",
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TeammateCount1",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Random Event",
                  "odds": [
                    0.2,
                    0.2,
                    0.2
                  ],
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TeammateCount1",
                      "value": 2
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TeammateCount1",
                      "value": 3
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TeammateCount1",
                      "value": 4
                    }
                  ]
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Aventurine_Ability02_ShieldEffect",
              "valuePerStack": {
                "MDF_CanTriggerShieldEffect": 1,
                "MDF_ResistanceRatio": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                },
                "MDF_TeammateCount": {
                  "operator": "Variables[0] (MDF_TeammateCount1) || RETURN",
                  "displayLines": "MDF_TeammateCount1",
                  "constants": [],
                  "variables": [
                    "MDF_TeammateCount1"
                  ]
                },
                "MDF_CritDmg1": {
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
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_TeammateCount1",
          "value": {
            "operator": "Constants[0] (0) || RETURN",
            "displayLines": "0",
            "constants": [
              0
            ],
            "variables": []
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Aventurine_Aventurine_Ability02_Part01": {
      "fileName": "Aventurine_Aventurine_Ability02_Part01",
      "childAbilityList": [
        "Aventurine_Aventurine_Ability02_Camera",
        "Aventurine_Aventurine_Ability02_Part01",
        "Aventurine_Aventurine_Ability02_Part02"
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
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Aventurine_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Aventurine_Aventurine_Ability01_Part02": {
      "fileName": "Aventurine_Aventurine_Ability01_Part02",
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Aventurine_Eidolon2_ResistanceDown[<span class=\"descriptionNumberColor\">Bounded Rationality</span>]",
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
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "dmgFormula": "DEF Scaling",
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
    "Aventurine_Aventurine_Ability01_Part01": {
      "fileName": "Aventurine_Aventurine_Ability01_Part01",
      "childAbilityList": [
        "Aventurine_Aventurine_Ability01_Camera",
        "Aventurine_Aventurine_Ability01_Part01",
        "Aventurine_Aventurine_Ability01_Part02"
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
          "ability": "Aventurine_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Aventurine_Modifiers": {
      "fileName": "Aventurine_Modifiers",
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
          "for": "Aventurine_Maze_Defence[<span class=\"descriptionNumberColor\">The Red or the Black</span>]",
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
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_CurrentDefence2",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "DEF increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>",
          "type": "Buff",
          "effectName": "DEF Boost",
          "statusName": "The Red or the Black"
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_ResistCtrlCD[<span class=\"descriptionNumberColor\">Shot Loaded Right</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Aventurine_StackableShield"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Aventurine_ResistCtrl"
                    }
                  ]
                }
              ]
            }
          ],
          "description": "The Talent's Crowd Control debuff resist effect cannot be triggered yet.",
          "type": "Other",
          "statusName": "Shot Loaded Right"
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_ResistCtrl",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "Debuff Immunity[?]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Aventurine_ResistCtrlCD[<span class=\"descriptionNumberColor\">Shot Loaded Right</span>]",
                        "invertCondition": true
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
                      "modifier": "Aventurine_ResistCtrlCD[<span class=\"descriptionNumberColor\">Shot Loaded Right</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      }
                    },
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
          "for": "Aventurine_PointB3_ShieldMark",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Eidolon1_Status[<span class=\"descriptionNumberColor\">Prisoner's Dilemma</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Prisoner's Dilemma"
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Trace03_Status[<span class=\"descriptionNumberColor\">Bingo!</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "description": "After a teammate with \"Fortified Wager\" uses Follow-Up ATK, Aventurine gains 1 \"Blind Bet.\" This effect can be triggered <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> more time(s).",
          "type": "Other",
          "statusName": "Bingo!"
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Trace03_AddShield",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Trace03_Trigger",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Attack Action Completed [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_CurrentDefence2",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Shield",
                            "invertCondition": true
                          },
                          {
                            "name": "Target Has Lowest/Highest Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "partOf": {
                              "name": "Target Sequence",
                              "Sequence": [
                                {
                                  "name": "Target Name",
                                  "target": "{{Player Team All}}"
                                },
                                {
                                  "name": "Target Filter",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "Shield",
                                    "invertCondition": true
                                  }
                                }
                              ]
                            },
                            "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                            "minOrMax": "Min"
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Shield"
                          },
                          {
                            "name": "Target Has Lowest/Highest Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "partOf": {
                              "name": "Target Name",
                              "target": "{{Player Team All}}"
                            },
                            "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">ShieldValue</span>&nbsp;",
                            "minOrMax": "Min"
                          }
                        ]
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Aventurine_PointB3_ShieldMark"
                    }
                  ]
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Aventurine_RecordCurrentShield"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Aventurine_StackableShield"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Aventurine_StackableShield",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_InitShieldValue": {
                          "operator": "Variables[0] (MDF_CurrentDefence2) || Variables[1] (0.072) || MUL || Variables[2] (96) || ADD || RETURN",
                          "displayLines": "((MDF_CurrentDefence2 * 0.072) + 96)",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentDefence2",
                            0.072,
                            96
                          ]
                        },
                        "MDF_MaxShieldRatio": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "MDF_ForceShield": {
                          "operator": "Variables[0] (MDF_CurrentDefence2) || Variables[1] (0.24) || MUL || Variables[2] (320) || ADD || RETURN",
                          "displayLines": "((MDF_CurrentDefence2 * 0.24) + 320)",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentDefence2",
                            0.24,
                            320
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
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Aventurine_StackableShield",
                      "duration": 3,
                      "valuePerStack": {
                        "MDF_InitShieldValue": {
                          "operator": "Variables[0] (MDF_CurrentDefence2) || Variables[1] (0.072) || MUL || Variables[2] (96) || ADD || RETURN",
                          "displayLines": "((MDF_CurrentDefence2 * 0.072) + 96)",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentDefence2",
                            0.072,
                            96
                          ]
                        },
                        "MDF_MaxShieldRatio": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "MDF_ForceShield": {
                          "operator": "Variables[0] (MDF_CurrentDefence2) || Variables[1] (0.24) || MUL || Variables[2] (320) || ADD || RETURN",
                          "displayLines": "((MDF_CurrentDefence2 * 0.24) + 320)",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentDefence2",
                            0.24,
                            320
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Aventurine_PointB3_ShieldMark"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Aventurine_RecordCurrentShield"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Aventurine_StackableShield",
                      "duration": 3,
                      "valuePerStack": {
                        "MDF_InitShieldValue": {
                          "operator": "Variables[0] (MDF_CurrentDefence2) || Variables[1] (0.072) || MUL || Variables[2] (96) || ADD || RETURN",
                          "displayLines": "((MDF_CurrentDefence2 * 0.072) + 96)",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentDefence2",
                            0.072,
                            96
                          ]
                        },
                        "MDF_MaxShieldRatio": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "MDF_ForceShield": {
                          "operator": "Variables[0] (MDF_CurrentDefence2) || Variables[1] (0.24) || MUL || Variables[2] (320) || ADD || RETURN",
                          "displayLines": "((MDF_CurrentDefence2 * 0.24) + 320)",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentDefence2",
                            0.24,
                            320
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Aventurine_PointB3_ShieldMark"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Aventurine_Ability02_ShieldEffect"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Aventurine_Ability02_ShieldEffect",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "mustBeAlive2": true
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_TeammateCount1",
                              "value": 1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Random Event",
                              "odds": [
                                0.2,
                                0.2,
                                0.2
                              ],
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_TeammateCount1",
                                  "value": 2
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_TeammateCount1",
                                  "value": 3
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_TeammateCount1",
                                  "value": 4
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Aventurine_Ability02_ShieldEffect",
                      "valuePerStack": {
                        "MDF_CanTriggerShieldEffect": 0,
                        "MDF_ResistanceRatio": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "MDF_TeammateCount": {
                          "operator": "Variables[0] (MDF_TeammateCount1) || RETURN",
                          "displayLines": "MDF_TeammateCount1",
                          "constants": [],
                          "variables": [
                            "MDF_TeammateCount1"
                          ]
                        },
                        "MDF_CritDmg1": {
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
              "eventTrigger": "Injected Ability Use [Owner]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_StackableShield",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "Shield"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Aventurine_Ability02_ShieldEffect"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Aventurine_Eidolon1_Status[<span class=\"descriptionNumberColor\">Prisoner's Dilemma</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Aventurine_Ability02_ShieldEffect2[<span class=\"descriptionNumberColor\">Fortified Wager: Hearts</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Aventurine_Ability02_ShieldEffect3[<span class=\"descriptionNumberColor\">Fortified Wager: Diamonds</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Aventurine_Ability02_ShieldEffect4[<span class=\"descriptionNumberColor\">Fortified Wager: Clubs</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Aventurine_Ability02_BlackJack[<span class=\"descriptionNumberColor\">Fortified Wager: Spades</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Aventurine_ResistCtrl"
                },
                {
                  "name": "Set Hit-Class",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class"
                },
                {
                  "name": "Stack Shield",
                  "stackValue": {
                    "operator": "Variables[0] (MDF_InitShieldValue) || RETURN",
                    "displayLines": "MDF_InitShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_InitShieldValue"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (MDF_ForceShield) || Variables[1] (MDF_MaxShieldRatio) || MUL || RETURN",
                    "displayLines": "(MDF_ForceShield * MDF_MaxShieldRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_ForceShield",
                      "MDF_MaxShieldRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.5) || RETURN",
                    "displayLines": "0.5",
                    "constants": [],
                    "variables": [
                      0.5
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Aventurine_ResistCtrlCD[<span class=\"descriptionNumberColor\">Shot Loaded Right</span>]",
                        "invertCondition": true
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
                      "modifier": "Aventurine_ResistCtrl"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_InsertLeftValue",
                  "value": {
                    "operator": "Variables[0] (MDF_InsertLeftValue) || Variables[1] (MDF_InsertAttackCount) || SUB || RETURN",
                    "displayLines": "(MDF_InsertLeftValue - MDF_InsertAttackCount)",
                    "constants": [],
                    "variables": [
                      "MDF_InsertLeftValue",
                      "MDF_InsertAttackCount"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Bingo!"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_InsertLeftValue",
                        "compareType": ">",
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
                      "modifier": "Aventurine_Trace03_Status[<span class=\"descriptionNumberColor\">Bingo!</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_InsertLeftValue) || Variables[1] (MDF_InsertAttackCount) || SUB || RETURN",
                          "displayLines": "(MDF_InsertLeftValue - MDF_InsertAttackCount)",
                          "constants": [],
                          "variables": [
                            "MDF_InsertLeftValue",
                            "MDF_InsertAttackCount"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "mustBeAlive2": true
                  },
                  "passed": [
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "Aventurine_StackableShield",
                      "modifierNameUpdate": "Aventurine_Ability02_BlackJack[<span class=\"descriptionNumberColor\">Fortified Wager: Spades</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "Aventurine_StackableShield",
                      "modifierNameUpdate": "Aventurine_Ability02_ShieldEffect2[<span class=\"descriptionNumberColor\">Fortified Wager: Hearts</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_InitShieldValue",
            "MDF_MaxShieldRatio",
            "MDF_ForceShield"
          ],
          "latentQueue": [],
          "type": "Buff",
          "effectName": "Shield"
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_RemoveAttackValue",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_Fatigue"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Eidolon6_Sub[<span class=\"descriptionNumberColor\">Stag Hunt Game</span>]",
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
                    "operator": "Variables[0] (MDF_AttackAddRatio) || RETURN",
                    "displayLines": "MDF_AttackAddRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_AttackAddRatio</span>.",
          "type": "Buff",
          "statusName": "Stag Hunt Game"
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Eidolon6",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Shield"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ShieldCount",
                      "value": 0
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                      },
                      "searchRandom": true,
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Shield"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_ShieldCount",
                              "value": {
                                "operator": "Variables[0] (MDF_ShieldCount) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(MDF_ShieldCount + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "MDF_ShieldCount"
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
                        "name": "Compare: Variable",
                        "value1": "MDF_ShieldCount",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "_AttackAddedRatio",
                          "value": {
                            "operator": "Variables[0] (MDF_ShieldCount) || Variables[1] (0.5) || MUL || RETURN",
                            "displayLines": "(MDF_ShieldCount * 0.5)",
                            "constants": [],
                            "variables": [
                              "MDF_ShieldCount",
                              0.5
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_AttackAddedRatio",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (1.5) || RETURN",
                              "displayLines": "1.5",
                              "constants": [],
                              "variables": [
                                1.5
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "Aventurine_Eidolon6_Sub[<span class=\"descriptionNumberColor\">Stag Hunt Game</span>]",
                              "valuePerStack": {
                                "MDF_AttackAddRatio": {
                                  "operator": "Variables[0] (1.5) || RETURN",
                                  "displayLines": "1.5",
                                  "constants": [],
                                  "variables": [
                                    1.5
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
                                "target": "{{Caster}}"
                              },
                              "modifier": "Aventurine_Eidolon6_Sub[<span class=\"descriptionNumberColor\">Stag Hunt Game</span>]",
                              "valuePerStack": {
                                "MDF_AttackAddRatio": {
                                  "operator": "Variables[0] (MDF_ShieldCount) || Variables[1] (0.5) || MUL || RETURN",
                                  "displayLines": "(MDF_ShieldCount * 0.5)",
                                  "constants": [],
                                  "variables": [
                                    "MDF_ShieldCount",
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
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Shield"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ShieldCount",
                      "value": 0
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
                      },
                      "searchRandom": true,
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Shield"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_ShieldCount",
                              "value": {
                                "operator": "Variables[0] (MDF_ShieldCount) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(MDF_ShieldCount + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "MDF_ShieldCount"
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
                        "name": "Compare: Variable",
                        "value1": "MDF_ShieldCount",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "_AttackAddedRatio",
                          "value": {
                            "operator": "Variables[0] (MDF_ShieldCount) || Variables[1] (0.5) || MUL || RETURN",
                            "displayLines": "(MDF_ShieldCount * 0.5)",
                            "constants": [],
                            "variables": [
                              "MDF_ShieldCount",
                              0.5
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_AttackAddedRatio",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (1.5) || RETURN",
                              "displayLines": "1.5",
                              "constants": [],
                              "variables": [
                                1.5
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "Aventurine_Eidolon6_Sub[<span class=\"descriptionNumberColor\">Stag Hunt Game</span>]",
                              "valuePerStack": {
                                "MDF_AttackAddRatio": {
                                  "operator": "Variables[0] (1.5) || RETURN",
                                  "displayLines": "1.5",
                                  "constants": [],
                                  "variables": [
                                    1.5
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
                                "target": "{{Caster}}"
                              },
                              "modifier": "Aventurine_Eidolon6_Sub[<span class=\"descriptionNumberColor\">Stag Hunt Game</span>]",
                              "valuePerStack": {
                                "MDF_AttackAddRatio": {
                                  "operator": "Variables[0] (MDF_ShieldCount) || Variables[1] (0.5) || MUL || RETURN",
                                  "displayLines": "(MDF_ShieldCount * 0.5)",
                                  "constants": [],
                                  "variables": [
                                    "MDF_ShieldCount",
                                    0.5
                                  ]
                                }
                              }
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
                          "modifier": "Aventurine_Eidolon6_Sub[<span class=\"descriptionNumberColor\">Stag Hunt Game</span>]"
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
          "for": "Aventurine_Eidolon4_CountDown",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Aventurine_Eidolon4"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Eidolon4",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Eidolon2_Mark"
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Eidolon2_ResistanceDown[<span class=\"descriptionNumberColor\">Bounded Rationality</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
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
          "description": "All-Type RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "All-Type RES Reduction",
          "statusName": "Bounded Rationality"
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Trace01_Sub[<span class=\"descriptionNumberColor\">Leverage</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Multipler",
                  "value": {
                    "operator": "Variables[0] (FLOOR) || Variables[1] (MDF_PropertyValue) || Constants[0] (0.01) || MUL || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_PropertyValue * 0.01))",
                    "constants": [
                      0.01
                    ],
                    "variables": [
                      "FLOOR",
                      "MDF_PropertyValue"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue2",
                  "value": {
                    "operator": "Variables[0] (MDF_Multipler) || Variables[1] (0.02) || MUL || RETURN",
                    "displayLines": "(MDF_Multipler * 0.02)",
                    "constants": [],
                    "variables": [
                      "MDF_Multipler",
                      0.02
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_PropertyValue2",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (0.48) || RETURN",
                      "displayLines": "0.48",
                      "constants": [],
                      "variables": [
                        0.48
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue2",
                      "value": {
                        "operator": "Variables[0] (0.48) || RETURN",
                        "displayLines": "0.48",
                        "constants": [],
                        "variables": [
                          0.48
                        ]
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateConverted</span>&nbsp;",
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
          "description": "Increases CRIT Rate by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
          "type": "Buff",
          "statusName": "Leverage"
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Trace01",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Aventurine_Trace01_Sub"
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Aventurine_Trace01_Sub"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "Aventurine_Trace01_Sub",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentDefence",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_CurrentDefenceConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentDefence2",
                  "value": {
                    "operator": "Variables[0] (MDF_CurrentDefence) || Variables[1] (MDF_CurrentDefenceConvert) || SUB || RETURN",
                    "displayLines": "(MDF_CurrentDefence - MDF_CurrentDefenceConvert)",
                    "constants": [],
                    "variables": [
                      "MDF_CurrentDefence",
                      "MDF_CurrentDefenceConvert"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_CurrentDefence2",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (1600) || Constants[0] (100) || ADD || RETURN",
                      "displayLines": "(1600 + 100)",
                      "constants": [
                        100
                      ],
                      "variables": [
                        1600
                      ]
                    }
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
                        "modifier": "Aventurine_Trace01_Sub[<span class=\"descriptionNumberColor\">Leverage</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Aventurine_Trace01_Sub[<span class=\"descriptionNumberColor\">Leverage</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_CurrentDefence2) || Variables[1] (1600) || SUB || RETURN",
                              "displayLines": "(MDF_CurrentDefence2 - 1600)",
                              "constants": [],
                              "variables": [
                                "MDF_CurrentDefence2",
                                1600
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
                            "target": "{{Caster}}"
                          },
                          "modifier": "Aventurine_Trace01_Sub[<span class=\"descriptionNumberColor\">Leverage</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_CurrentDefence2) || Variables[1] (1600) || SUB || RETURN",
                              "displayLines": "(MDF_CurrentDefence2 - 1600)",
                              "constants": [],
                              "variables": [
                                "MDF_CurrentDefence2",
                                1600
                              ]
                            }
                          }
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
                      "modifier": "Aventurine_Trace01_Sub[<span class=\"descriptionNumberColor\">Leverage</span>]"
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
          "for": "Aventurine_Passive_AddDefence[<span class=\"descriptionNumberColor\">Unexpected Hanging Paradox</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_BaseDefence",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DefencePercentage",
                  "value": {
                    "operator": "Variables[0] (0.4) || RETURN",
                    "displayLines": "0.4",
                    "constants": [],
                    "variables": [
                      0.4
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.4) || RETURN",
                    "displayLines": "0.4",
                    "constants": [],
                    "variables": [
                      0.4
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "DEF increases by <span class=\"descriptionNumberColor\">MDF_DefencePercentage</span>",
          "type": "Buff",
          "effectName": "DEF Boost",
          "statusName": "Unexpected Hanging Paradox"
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Ability03_CritDmgIncrease[<span class=\"descriptionNumberColor\">Unnerved</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
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
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
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
          "latentQueue": [],
          "description": "Increase the CRIT DMG dealt by allies to this unit by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "The received CRIT DMG increases",
          "statusName": "Unnerved"
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Ability03_CoinAdd",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Variable with Random Value",
                  "scope": "ContextModifier",
                  "integer": true,
                  "variableName": "MDF_Coin",
                  "min": 1,
                  "max": {
                    "operator": "Variables[0] (7) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(7 + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      7
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Aventurine_Passive_ShieldEnergy",
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (MDF_Coin) || RETURN",
                    "displayLines": "MDF_Coin",
                    "constants": [],
                    "variables": [
                      "MDF_Coin"
                    ]
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "type": "Buff",
          "effectName": "Blind Bet received: <unbreak>#1[i]</unbreak> Point(s)"
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Ability02_ShieldEffect4[<span class=\"descriptionNumberColor\">Fortified Wager: Clubs</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "description": "Gains a Shield that absorbs DMG and increases Effect RES by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. While the Shield persists or before the effect disappears, enemy attacks will not reduce the Shielded characters' HP. After these characters receive DMG, Aventurine receives 1 point of Blind Bet.",
          "type": "Buff",
          "effectName": "Shield",
          "statusName": "Fortified Wager: Clubs"
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Ability02_ShieldEffect3[<span class=\"descriptionNumberColor\">Fortified Wager: Diamonds</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "description": "Gains a Shield that absorbs DMG and increases Effect RES by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. While the Shield persists or before the effect disappears, enemy attacks will not reduce the Shielded characters' HP. After these characters receive DMG, Aventurine receives 1 point of Blind Bet.",
          "type": "Buff",
          "effectName": "Shield",
          "statusName": "Fortified Wager: Diamonds"
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Ability02_ShieldEffect2[<span class=\"descriptionNumberColor\">Fortified Wager: Hearts</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "description": "Gains a Shield that absorbs DMG and increases Effect RES by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. While the Shield persists or before the effect disappears, enemy attacks will not reduce the Shielded characters' HP. After these characters receive DMG, Aventurine receives 1 point of Blind Bet.",
          "type": "Buff",
          "effectName": "Shield",
          "statusName": "Fortified Wager: Hearts"
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Ability02_BlackJack[<span class=\"descriptionNumberColor\">Fortified Wager: Spades</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "description": "Gains a Shield that absorbs DMG and increases Effect RES by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. While the Shield persists or before the effect disappears, enemy attacks will not reduce the Shielded characters' HP. After these characters receive DMG, Aventurine receives 2 points of Blind Bet.",
          "type": "Buff",
          "effectName": "Shield",
          "statusName": "Fortified Wager: Spades"
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Ability02_ShieldEffect",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_TeammateCount",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_CanTriggerShieldEffect",
                        "compareType": "=",
                        "value2": 1
                      }
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "modifierName": "Aventurine_StackableShield",
                      "variableName": "MDF_PropertyValue",
                      "value": {
                        "operator": "Variables[0] (MDF_ResistanceRatio) || RETURN",
                        "displayLines": "MDF_ResistanceRatio",
                        "constants": [],
                        "variables": [
                          "MDF_ResistanceRatio"
                        ]
                      }
                    },
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "Aventurine_StackableShield",
                      "modifierNameUpdate": "Aventurine_Ability02_BlackJack[<span class=\"descriptionNumberColor\">Fortified Wager: Spades</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Aventurine_Ability02_ShieldEffect2[<span class=\"descriptionNumberColor\">Fortified Wager: Hearts</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Aventurine_Ability02_ShieldEffect3[<span class=\"descriptionNumberColor\">Fortified Wager: Diamonds</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Aventurine_Ability02_ShieldEffect4[<span class=\"descriptionNumberColor\">Fortified Wager: Clubs</span>]"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 1
                      },
                      "passed": [
                        {
                          "name": "Stack Target Stat Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                          "value": {
                            "operator": "Variables[0] (MDF_CritDmg1) || RETURN",
                            "displayLines": "MDF_CritDmg1",
                            "constants": [],
                            "variables": [
                              "MDF_CritDmg1"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Aventurine_Eidolon1_Status[<span class=\"descriptionNumberColor\">Prisoner's Dilemma</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_CritDmg1) || RETURN",
                              "displayLines": "MDF_CritDmg1",
                              "constants": [],
                              "variables": [
                                "MDF_CritDmg1"
                              ]
                            }
                          }
                        }
                      ]
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
                          "name": "Stack Target Stat Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                          "value": {
                            "operator": "Variables[0] (MDF_CritDmg1) || RETURN",
                            "displayLines": "MDF_CritDmg1",
                            "constants": [],
                            "variables": [
                              "MDF_CritDmg1"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Aventurine_Eidolon1_Status[<span class=\"descriptionNumberColor\">Prisoner's Dilemma</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_CritDmg1) || RETURN",
                              "displayLines": "MDF_CritDmg1",
                              "constants": [],
                              "variables": [
                                "MDF_CritDmg1"
                              ]
                            }
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
                        "value1": "MDF_TeammateCount",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_CanTriggerShieldEffect",
                            "compareType": "=",
                            "value2": 1
                          }
                        },
                        {
                          "name": "Define Modifier-Specific Variable",
                          "modifierName": "Aventurine_StackableShield",
                          "variableName": "MDF_PropertyValue",
                          "value": {
                            "operator": "Variables[0] (MDF_ResistanceRatio) || RETURN",
                            "displayLines": "MDF_ResistanceRatio",
                            "constants": [],
                            "variables": [
                              "MDF_ResistanceRatio"
                            ]
                          }
                        },
                        {
                          "name": "Override Modifier Name",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifierName": "Aventurine_StackableShield",
                          "modifierNameUpdate": "Aventurine_Ability02_ShieldEffect2[<span class=\"descriptionNumberColor\">Fortified Wager: Hearts</span>]"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Aventurine_Ability02_ShieldEffect3[<span class=\"descriptionNumberColor\">Fortified Wager: Diamonds</span>]"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Aventurine_Ability02_ShieldEffect4[<span class=\"descriptionNumberColor\">Fortified Wager: Clubs</span>]"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Aventurine_Ability02_BlackJack[<span class=\"descriptionNumberColor\">Fortified Wager: Spades</span>]"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_TeammateCount",
                            "compareType": "=",
                            "value2": 3,
                            "contextScope": "ContextModifier"
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "MDF_CanTriggerShieldEffect",
                                "compareType": "=",
                                "value2": 1
                              }
                            },
                            {
                              "name": "Define Modifier-Specific Variable",
                              "modifierName": "Aventurine_StackableShield",
                              "variableName": "MDF_PropertyValue",
                              "value": {
                                "operator": "Variables[0] (MDF_ResistanceRatio) || RETURN",
                                "displayLines": "MDF_ResistanceRatio",
                                "constants": [],
                                "variables": [
                                  "MDF_ResistanceRatio"
                                ]
                              }
                            },
                            {
                              "name": "Override Modifier Name",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifierName": "Aventurine_StackableShield",
                              "modifierNameUpdate": "Aventurine_Ability02_ShieldEffect3[<span class=\"descriptionNumberColor\">Fortified Wager: Diamonds</span>]"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "Aventurine_Ability02_ShieldEffect2[<span class=\"descriptionNumberColor\">Fortified Wager: Hearts</span>]"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "Aventurine_Ability02_ShieldEffect4[<span class=\"descriptionNumberColor\">Fortified Wager: Clubs</span>]"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "Aventurine_Ability02_BlackJack[<span class=\"descriptionNumberColor\">Fortified Wager: Spades</span>]"
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "MDF_CanTriggerShieldEffect",
                                "compareType": "=",
                                "value2": 1
                              }
                            },
                            {
                              "name": "Define Modifier-Specific Variable",
                              "modifierName": "Aventurine_StackableShield",
                              "variableName": "MDF_PropertyValue",
                              "value": {
                                "operator": "Variables[0] (MDF_ResistanceRatio) || RETURN",
                                "displayLines": "MDF_ResistanceRatio",
                                "constants": [],
                                "variables": [
                                  "MDF_ResistanceRatio"
                                ]
                              }
                            },
                            {
                              "name": "Override Modifier Name",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifierName": "Aventurine_StackableShield",
                              "modifierNameUpdate": "Aventurine_Ability02_ShieldEffect4[<span class=\"descriptionNumberColor\">Fortified Wager: Clubs</span>]"
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
          "stackData": [
            "MDF_CanTriggerShieldEffect",
            "MDF_ResistanceRatio",
            "MDF_TeammateCount",
            "MDF_CritDmg1"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Ability02_ForceContrlShield"
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Passive_ShieldEnergy",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
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
                    "name": "Compare: Variable",
                    "value1": "MDF_Layer",
                    "compareType": ">=",
                    "value2": 7,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_Layer) || RETURN",
                        "displayLines": "MDF_Layer",
                        "constants": [],
                        "variables": [
                          "MDF_Layer"
                        ]
                      },
                      "maximum": 7,
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 2,
                      "cooldown": 0
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Aventurine_PassiveAbility01_InsertAbility",
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
                        "DisableAction",
                        "STAT_CTRL"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_Layer) || RETURN",
                        "displayLines": "MDF_Layer",
                        "constants": [],
                        "variables": [
                          "MDF_Layer"
                        ]
                      },
                      "maximum": 7,
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 2,
                      "cooldown": 0
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
                        "value1": "MDF_Layer",
                        "compareType": ">=",
                        "value2": 7,
                        "contextScope": "ContextModifier"
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
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Aventurine_PassiveAbility01_InsertAbility",
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
                        "DisableAction",
                        "STAT_CTRL"
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
                        "value1": "MDF_Layer",
                        "compareType": ">=",
                        "value2": 7,
                        "contextScope": "ContextModifier"
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
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Aventurine_PassiveAbility01_InsertAbility",
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
                        "DisableAction",
                        "STAT_CTRL"
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
                        "value1": "MDF_Layer",
                        "compareType": ">=",
                        "value2": 7,
                        "contextScope": "ContextModifier"
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
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Aventurine_PassiveAbility01_InsertAbility",
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
                        "DisableAction",
                        "STAT_CTRL"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "stackLimit": 10
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Passive_AddEnergyMark"
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Passive_OnAfterBeingAttacked",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Bingo!"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Aventurine_StackableShield"
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
                            "name": "Compare: Variable",
                            "value1": "MDF_InsertAttackCount",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (3) || RETURN",
                              "displayLines": "3",
                              "constants": [],
                              "variables": [
                                3
                              ]
                            }
                          }
                        ]
                      },
                      "passed": [
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
                              "name": "Define Custom Variable",
                              "variableName": "MDF_IsInsert",
                              "value": 1
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
                          "modifier": "Aventurine_Trace03_Status[<span class=\"descriptionNumberColor\">Bingo!</span>]"
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Aventurine_StackableShield"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "mustBeAlive2": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Aventurine_Passive_AddEnergyMark",
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (MDF_BlackJackEnergy) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_BlackJackEnergy + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_BlackJackEnergy"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "Aventurine_Passive_AddEnergyMark",
                          "addStacksPerTrigger": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_IsInsert",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
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
                        "value1": "MDF_IsInsert",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "mustBeAlive2": true,
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_InsertAttackCount",
                      "value": {
                        "operator": "Variables[0] (MDF_InsertAttackCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_InsertAttackCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_InsertAttackCount"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Aventurine_Trace03_Status[<span class=\"descriptionNumberColor\">Bingo!</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_InsertLeftValue) || Variables[1] (MDF_InsertAttackCount) || SUB || RETURN",
                          "displayLines": "(MDF_InsertLeftValue - MDF_InsertAttackCount)",
                          "constants": [],
                          "variables": [
                            "MDF_InsertLeftValue",
                            "MDF_InsertAttackCount"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Aventurine_Passive_ShieldEnergy",
                      "addStacksPerTrigger": 1
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
                        "value1": "MDF_InsertAttackCount",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Aventurine_Trace03_Status[<span class=\"descriptionNumberColor\">Bingo!</span>]"
                    }
                  ]
                }
              ],
              "priorityLevel": -100
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Aventurine_Passive_AddEnergyMark"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "MDF_Layer2",
                      "modifierName": "Aventurine_Passive_AddEnergyMark",
                      "multiplier": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Aventurine_Passive_ShieldEnergy",
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_Layer2) || RETURN",
                        "displayLines": "MDF_Layer2",
                        "constants": [],
                        "variables": [
                          "MDF_Layer2"
                        ]
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Aventurine_Passive_AddEnergyMark"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Aventurine_Passive",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_InsertAttackCount",
                  "value": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Bingo!"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Aventurine_Trace03_Status[<span class=\"descriptionNumberColor\">Bingo!</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_InsertLeftValue) || Variables[1] (MDF_InsertAttackCount) || SUB || RETURN",
                          "displayLines": "(MDF_InsertLeftValue - MDF_InsertAttackCount)",
                          "constants": [],
                          "variables": [
                            "MDF_InsertLeftValue",
                            "MDF_InsertAttackCount"
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
                      "modifier": "Aventurine_Eidolon2_Mark"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_InsertAttackLimit",
                  "value": {
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
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "Aventurine_Passive_OnAfterBeingAttacked",
                  "valuePerStack": {
                    "MDF_BlackJackEnergy": {
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
                      "modifier": "Aventurine_Eidolon6"
                    }
                  ]
                }
              ]
            },
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
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "Aventurine_Passive_OnAfterBeingAttacked",
                      "valuePerStack": {
                        "MDF_BlackJackEnergy": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
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
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Hot Hand"
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
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_CurrentDefence2",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                    },
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Aventurine_RecordCurrentShield"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "Aventurine_StackableShield",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_InitShieldValue": {
                          "operator": "Variables[0] (1) || Variables[1] (MDF_CurrentDefence2) || Variables[2] (0.24) || MUL || Variables[3] (320) || ADD || MUL || RETURN",
                          "displayLines": "(1 * ((MDF_CurrentDefence2 * 0.24) + 320))",
                          "constants": [],
                          "variables": [
                            1,
                            "MDF_CurrentDefence2",
                            0.24,
                            320
                          ]
                        },
                        "MDF_MaxShieldRatio": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "MDF_ForceShield": {
                          "operator": "Variables[0] (MDF_CurrentDefence2) || Variables[1] (0.24) || MUL || Variables[2] (320) || ADD || RETURN",
                          "displayLines": "((MDF_CurrentDefence2 * 0.24) + 320)",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentDefence2",
                            0.24,
                            320
                          ]
                        }
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "Aventurine_Ability02_ShieldEffect",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Is Part Of",
                                "of": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "mustBeAlive2": true
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_TeammateCount1",
                                  "value": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Random Event",
                                  "odds": [
                                    0.2,
                                    0.2,
                                    0.2
                                  ],
                                  "execute": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "MDF_TeammateCount1",
                                      "value": 2
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "MDF_TeammateCount1",
                                      "value": 3
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "MDF_TeammateCount1",
                                      "value": 4
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Aventurine_Ability02_ShieldEffect",
                              "valuePerStack": {
                                "MDF_ResistanceRatio": {
                                  "operator": "Variables[0] (0.5) || RETURN",
                                  "displayLines": "0.5",
                                  "constants": [],
                                  "variables": [
                                    0.5
                                  ]
                                },
                                "MDF_TeammateCount": {
                                  "operator": "Variables[0] (MDF_TeammateCount1) || RETURN",
                                  "displayLines": "MDF_TeammateCount1",
                                  "constants": [],
                                  "variables": [
                                    "MDF_TeammateCount1"
                                  ]
                                },
                                "MDF_CritDmg1": {
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
                  ]
                }
              ],
              "priorityLevel": -79
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    },
    "Aventurine_Functions": {
      "fileName": "Aventurine_Functions",
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
          "functionName": "Aventurine_RecordCurrentShield",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Aventurine_StackableShield"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "tmp_currentshield"
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "valueType": "CurrentShield",
                      "variableName": "tmp_currentshield",
                      "modifierName": "Aventurine_StackableShield",
                      "multiplier": 1
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AventurineShieldValue",
                      "value": {
                        "operator": "Variables[0] (tmp_currentshield) || RETURN",
                        "displayLines": "tmp_currentshield",
                        "constants": [],
                        "variables": [
                          "tmp_currentshield"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AventurineShieldValue",
                      "value": {
                        "operator": "Constants[0] (0) || RETURN",
                        "displayLines": "0",
                        "constants": [
                          0
                        ],
                        "variables": []
                      }
                    }
                  ]
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