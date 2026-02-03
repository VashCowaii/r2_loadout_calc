const compositeAbilityObject = {
  "fullCharacterName": 8013145,
  "trimCharacterName": 8013145,
  "abilityList": [
    "8013145_Monster_AML_Boss_Part2_IF_PassiveAbilityInitiate",
    "8013145_Monster_AML_Boss_Part2_IF_AbilityP01",
    "8013145_Monster_AML_Boss_Part2_IF_Ability14_Part02",
    "8013145_Monster_AML_Boss_Part2_IF_Ability14_Part01",
    "8013145_Monster_AML_Boss_Part2_IF_Ability13_Part02",
    "8013145_Monster_AML_Boss_Part2_IF_Ability13_Part01",
    "8013145_Monster_AML_Boss_Part2_IF_Ability12_Part02",
    "8013145_Monster_AML_Boss_Part2_IF_Ability12_Part01",
    "8013145_Monster_AML_Boss_Part2_IF_Ability11_Part02",
    "8013145_Monster_AML_Boss_Part2_IF_Ability11_Part01",
    "8013145_Monster_AML_Boss_Part2_IF_Ability10_Part02",
    "8013145_Monster_AML_Boss_Part2_IF_Ability10_Part01",
    "8013145_Monster_AML_Boss_Part2_IF_Ability09_Part02",
    "8013145_Monster_AML_Boss_Part2_IF_Ability09_Part01",
    "8013145_Monster_AML_Boss_Part2_IF_Ability08_Part02",
    "8013145_Monster_AML_Boss_Part2_IF_Ability08_Part01",
    "8013145_Monster_AML_Boss_Part2_IF_Ability07_Part02",
    "8013145_Monster_AML_Boss_Part2_IF_Ability07_Part01",
    "8013145_Modifiers"
  ],
  "abilityObject": {
    "8013145_Monster_AML_Boss_Part2_IF_PassiveAbilityInitiate": {
      "fileName": "8013145_Monster_AML_Boss_Part2_IF_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkillInitiate",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_Standard_MuteHitFly"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "AML_Boss_BattleScore1"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_OnBreakRecoverSoundEffect"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_OnBreakRecoverChangeWeak"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Target Part 0}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_HitEffect"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Target Part 0}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "OneMorePerTurn"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "MoreOneMorePerTurn"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_IF_RemoveOneMore"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part2_HitEffect",
          "execute": [
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<",
                    "value2": 0.3
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<",
                        "value2": 0.6
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": "<",
                            "value2": 0.8
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part2_OnBreakRecoverSoundEffect",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
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
                        "flagName": "Break"
                      },
                      {
                        "name": "Current Action Holder Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
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
          "for": "Enemy_AML_Boss_Part2_OnBreakRecoverChangeWeak",
          "execute": [
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Enemy_Monster_AML_Boss_Part2_Ability07"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8013145_Monster_AML_Boss_Part2_IF_AbilityP01": {
      "fileName": "8013145_Monster_AML_Boss_Part2_IF_AbilityP01",
      "childAbilityList": [
        "8013145_Monster_AML_Boss_Part2_IF_AbilityP01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "8013145_Monster_AML_Boss_Part2_IF_Ability14_Part02": {
      "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability14_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill14[0]]}) || RETURN",
              "displayLines": "{[Skill14[0]]}",
              "constants": [],
              "variables": [
                "{[Skill14[0]]}"
              ]
            },
            "HitSplit": 0.16,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
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
              "operator": "Variables[0] ({[Skill14[0]]}) || RETURN",
              "displayLines": "{[Skill14[0]]}",
              "constants": [],
              "variables": [
                "{[Skill14[0]]}"
              ]
            },
            "HitSplit": 0.16,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
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
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill14[0]]}) || RETURN",
              "displayLines": "{[Skill14[0]]}",
              "constants": [],
              "variables": [
                "{[Skill14[0]]}"
              ]
            },
            "HitSplit": 0.16,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
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
              "operator": "Variables[0] ({[Skill14[0]]}) || RETURN",
              "displayLines": "{[Skill14[0]]}",
              "constants": [],
              "variables": [
                "{[Skill14[0]]}"
              ]
            },
            "HitSplit": 0.16,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
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
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill14[0]]}) || RETURN",
              "displayLines": "{[Skill14[0]]}",
              "constants": [],
              "variables": [
                "{[Skill14[0]]}"
              ]
            },
            "HitSplit": 0.18,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
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
              "operator": "Variables[0] ({[Skill14[0]]}) || RETURN",
              "displayLines": "{[Skill14[0]]}",
              "constants": [],
              "variables": [
                "{[Skill14[0]]}"
              ]
            },
            "HitSplit": 0.18,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Enemy_AML_Boss_IF_AbilityEX03"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Standard_AttackRatioUp[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
              "duration": 1,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (SkillEX03_P1_AttackAddedRatio) || RETURN",
                  "displayLines": "SkillEX03_P1_AttackAddedRatio",
                  "constants": [],
                  "variables": [
                    "SkillEX03_P1_AttackAddedRatio"
                  ]
                }
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8013145_Monster_AML_Boss_Part2_IF_Ability14_Part01": {
      "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability14_Part01",
      "childAbilityList": [
        "8013145_Monster_AML_Boss_Part2_IF_Ability14_Part01",
        "8013145_Monster_AML_Boss_Part2_IF_Ability14_Part02",
        "8013145_Monster_AML_Boss_Part2_IF_Ability14_Camera"
      ],
      "skillTrigger": "Skill14",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_AML_Boss_Part2_IF_Ability14_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8013145_Monster_AML_Boss_Part2_IF_Ability13_Part02": {
      "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability13_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "Skill13DamagePerformFinishFlag",
          "value": 0
        },
        "Ability Start",
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "QuantumEnhancedNumber"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "ImaginaryEnhancedNumber"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "QuantumEnhancedNumber",
          "livingTargets": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Enemy_AML_Boss_IF_Enhance_Quantum[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]"
          }
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "ImaginaryEnhancedNumber",
          "livingTargets": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Enemy_AML_Boss_IF_Enhance_Imaginary[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]"
          }
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">",
            "value2": 0,
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_AML_Boss_Part2_IF_Ability13_Mark",
              "invertCondition": true
            }
          },
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_AML_Boss_Part2_IF_Ability13_Mark",
                "invertCondition": true
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
                    "modifier": "Enemy_AML_Boss_IF_Enhance_Quantum[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_AML_Boss_ReactTarget_Q"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Enemy_AML_Boss_IF_Enhance_Imaginary[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Enemy_AML_Boss_ReactTarget_I"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Random Event",
                          "isUnique": true,
                          "maskKey": "EnhanceRandomFlag",
                          "odds": [
                            0.5,
                            0.5
                          ],
                          "execute": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Enemy_AML_Boss_IF_Enhance_Imaginary[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]",
                              "valuePerStack": {
                                "MDF_DamagePercentage": {
                                  "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                                  "displayLines": "{[SkillP01[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[0]]}"
                                  ]
                                },
                                "MDF_ControlChance": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                },
                                "MDF_ControlSpeedDownRatio": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "MDF_ControlActionDelayRatio": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "MDF_ControlDamagePercentage": {
                                  "operator": "Variables[0] ({[SkillP01[4]]}) || RETURN",
                                  "displayLines": "{[SkillP01[4]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[4]]}"
                                  ]
                                },
                                "MDF_StanceBreakAddedRatio": {
                                  "operator": "Variables[0] ({[SkillP01[5]]}) || RETURN",
                                  "displayLines": "{[SkillP01[5]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[5]]}"
                                  ]
                                }
                              }
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Enemy_AML_Boss_IF_Enhance_Quantum[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]",
                              "valuePerStack": {
                                "MDF_DamagePercentage": {
                                  "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                                  "displayLines": "{[SkillP01[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[0]]}"
                                  ]
                                },
                                "MDF_ControlChance": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                },
                                "MDF_ControlSpeedDownRatio": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "MDF_ControlActionDelayRatio": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "MDF_ControlDamagePercentage": {
                                  "operator": "Variables[0] ({[SkillP01[4]]}) || RETURN",
                                  "displayLines": "{[SkillP01[4]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[4]]}"
                                  ]
                                },
                                "MDF_StanceBreakAddedRatio": {
                                  "operator": "Variables[0] ({[SkillP01[5]]}) || RETURN",
                                  "displayLines": "{[SkillP01[5]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[5]]}"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_AML_Boss_Part2_IF_Ability13_Mark"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Enemy_AML_Boss_ReactTarget_Q"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill13DamagePerformFinishFlag",
              "value": 1
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Constants[0] (0.5) || Variables[0] ({[SkillP01[0]]}) || MUL || RETURN",
                  "displayLines": "(0.5 * {[SkillP01[0]]})",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "{[SkillP01[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Pure (No DMG%)",
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Constants[0] (0.5) || Variables[0] ({[SkillP01[0]]}) || MUL || RETURN",
                  "displayLines": "(0.5 * {[SkillP01[0]]})",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "{[SkillP01[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Pure (No DMG%)",
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_AML_Boss_IF_CTRL_ConfineAndEntangle[<span class=\"descriptionNumberColor\">Snarelock</span>]",
              "duration": 1,
              "baseChance": {
                "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                "displayLines": "{[SkillP01[1]]}",
                "constants": [],
                "variables": [
                  "{[SkillP01[1]]}"
                ]
              },
              "valuePerStack": {
                "MDF_SpeedDownRatio": {
                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                  "displayLines": "{[SkillP01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[2]]}"
                  ]
                },
                "MDF_ActionDelayRatio": {
                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                  "displayLines": "{[SkillP01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[3]]}"
                  ]
                },
                "Modifier_Entangle_DamagePercentage": {
                  "operator": "Variables[0] ({[SkillP01[4]]}) || RETURN",
                  "displayLines": "{[SkillP01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[4]]}"
                  ]
                },
                "Modifier_Entangle_DamageValue": 0
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Enhance_Quantum[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_AML_Boss_ReactTarget_Q"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Enemy_AML_Boss_ReactTarget_I"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "Skill13DamagePerformFinishFlag",
              "value": 1
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Constants[0] (0.5) || Variables[0] ({[SkillP01[0]]}) || MUL || RETURN",
                  "displayLines": "(0.5 * {[SkillP01[0]]})",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "{[SkillP01[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Pure (No DMG%)",
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Constants[0] (0.5) || Variables[0] ({[SkillP01[0]]}) || MUL || RETURN",
                  "displayLines": "(0.5 * {[SkillP01[0]]})",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "{[SkillP01[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Pure (No DMG%)",
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_AML_Boss_IF_CTRL_ConfineAndEntangle[<span class=\"descriptionNumberColor\">Snarelock</span>]",
              "duration": 1,
              "baseChance": {
                "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                "displayLines": "{[SkillP01[1]]}",
                "constants": [],
                "variables": [
                  "{[SkillP01[1]]}"
                ]
              },
              "valuePerStack": {
                "MDF_SpeedDownRatio": {
                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                  "displayLines": "{[SkillP01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[2]]}"
                  ]
                },
                "MDF_ActionDelayRatio": {
                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                  "displayLines": "{[SkillP01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[3]]}"
                  ]
                },
                "Modifier_Entangle_DamagePercentage": {
                  "operator": "Variables[0] ({[SkillP01[4]]}) || RETURN",
                  "displayLines": "{[SkillP01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[4]]}"
                  ]
                },
                "Modifier_Entangle_DamageValue": 0
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Enhance_Imaginary[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_AML_Boss_ReactTarget_I"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Skill13DamagePerformFinishFlag",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            "Trigger: Attack End"
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_IF_Ability13_Mark"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8013145_Monster_AML_Boss_Part2_IF_Ability13_Part01": {
      "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability13_Part01",
      "childAbilityList": [
        "8013145_Monster_AML_Boss_Part2_IF_Ability13_Part01",
        "8013145_Monster_AML_Boss_Part2_IF_Ability13_Part02",
        "8013145_Monster_AML_Boss_Part2_IF_Ability13_Camera"
      ],
      "skillTrigger": "Skill13",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_AML_Boss_Part2_IF_Ability13_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8013145_Monster_AML_Boss_Part2_IF_Ability12_Part02": {
      "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability12_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AML_Boss_00_BattleScore2_Flag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_Ability11_ListenSelfDieModifier"
        },
        "Ability Start",
        {
          "name": "Looped Event",
          "maxLoops": 4,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] ({[Skill12[0]]}) || Constants[0] (0.125) || MUL || RETURN",
                  "displayLines": "({[Skill12[0]]} * 0.125)",
                  "constants": [
                    0.125
                  ],
                  "variables": [
                    "{[Skill12[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "12.5%"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] ({[Skill12[0]]}) || Constants[0] (0.125) || MUL || RETURN",
                  "displayLines": "({[Skill12[0]]} * 0.125)",
                  "constants": [
                    0.125
                  ],
                  "variables": [
                    "{[Skill12[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "12.5%"
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_Ability11_Charge"
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">",
            "value2": 0,
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_AML_Boss_Part2_IF_Ability13_Mark",
              "invertCondition": true
            }
          },
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Enemy_AML_Boss_Part2_IF_Ability13_Mark",
                "invertCondition": true
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
                    "modifier": "Enemy_AML_Boss_IF_Enhance_Quantum[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_AML_Boss_ReactTarget_Q"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Enemy_AML_Boss_IF_Enhance_Imaginary[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Enemy_AML_Boss_ReactTarget_I"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Random Event",
                          "isUnique": true,
                          "maskKey": "EnhanceRandomFlag",
                          "odds": [
                            0.5,
                            0.5
                          ],
                          "execute": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Enemy_AML_Boss_IF_Enhance_Imaginary[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]",
                              "valuePerStack": {
                                "MDF_DamagePercentage": {
                                  "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                                  "displayLines": "{[SkillP01[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[0]]}"
                                  ]
                                },
                                "MDF_ControlChance": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                },
                                "MDF_ControlSpeedDownRatio": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "MDF_ControlActionDelayRatio": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "MDF_ControlDamagePercentage": {
                                  "operator": "Variables[0] ({[SkillP01[4]]}) || RETURN",
                                  "displayLines": "{[SkillP01[4]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[4]]}"
                                  ]
                                },
                                "MDF_StanceBreakAddedRatio": {
                                  "operator": "Variables[0] ({[SkillP01[5]]}) || RETURN",
                                  "displayLines": "{[SkillP01[5]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[5]]}"
                                  ]
                                }
                              }
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Enemy_AML_Boss_IF_Enhance_Quantum[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]",
                              "valuePerStack": {
                                "MDF_DamagePercentage": {
                                  "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                                  "displayLines": "{[SkillP01[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[0]]}"
                                  ]
                                },
                                "MDF_ControlChance": {
                                  "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                  "displayLines": "{[SkillP01[1]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[1]]}"
                                  ]
                                },
                                "MDF_ControlSpeedDownRatio": {
                                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                  "displayLines": "{[SkillP01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[2]]}"
                                  ]
                                },
                                "MDF_ControlActionDelayRatio": {
                                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                  "displayLines": "{[SkillP01[3]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[3]]}"
                                  ]
                                },
                                "MDF_ControlDamagePercentage": {
                                  "operator": "Variables[0] ({[SkillP01[4]]}) || RETURN",
                                  "displayLines": "{[SkillP01[4]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[4]]}"
                                  ]
                                },
                                "MDF_StanceBreakAddedRatio": {
                                  "operator": "Variables[0] ({[SkillP01[5]]}) || RETURN",
                                  "displayLines": "{[SkillP01[5]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[SkillP01[5]]}"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_AML_Boss_Part2_IF_Ability13_Mark"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Enemy_AML_Boss_ReactTarget_Q"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Constants[0] (0.5) || Variables[0] ({[SkillP01[0]]}) || MUL || RETURN",
                  "displayLines": "(0.5 * {[SkillP01[0]]})",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "{[SkillP01[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Pure (No DMG%)",
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Constants[0] (0.5) || Variables[0] ({[SkillP01[0]]}) || MUL || RETURN",
                  "displayLines": "(0.5 * {[SkillP01[0]]})",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "{[SkillP01[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Pure (No DMG%)",
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_AML_Boss_IF_CTRL_ConfineAndEntangle[<span class=\"descriptionNumberColor\">Snarelock</span>]",
              "duration": 1,
              "baseChance": {
                "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                "displayLines": "{[SkillP01[1]]}",
                "constants": [],
                "variables": [
                  "{[SkillP01[1]]}"
                ]
              },
              "valuePerStack": {
                "MDF_SpeedDownRatio": {
                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                  "displayLines": "{[SkillP01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[2]]}"
                  ]
                },
                "MDF_ActionDelayRatio": {
                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                  "displayLines": "{[SkillP01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[3]]}"
                  ]
                },
                "Modifier_Entangle_DamagePercentage": {
                  "operator": "Variables[0] ({[SkillP01[4]]}) || RETURN",
                  "displayLines": "{[SkillP01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[4]]}"
                  ]
                },
                "Modifier_Entangle_DamageValue": 0
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Enhance_Quantum[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_AML_Boss_ReactTarget_Q"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "Enemy_AML_Boss_ReactTarget_I"
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Constants[0] (0.5) || Variables[0] ({[SkillP01[0]]}) || MUL || RETURN",
                  "displayLines": "(0.5 * {[SkillP01[0]]})",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "{[SkillP01[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Pure (No DMG%)",
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Constants[0] (0.5) || Variables[0] ({[SkillP01[0]]}) || MUL || RETURN",
                  "displayLines": "(0.5 * {[SkillP01[0]]})",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "{[SkillP01[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Pure (No DMG%)",
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_AML_Boss_IF_CTRL_ConfineAndEntangle[<span class=\"descriptionNumberColor\">Snarelock</span>]",
              "duration": 1,
              "baseChance": {
                "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                "displayLines": "{[SkillP01[1]]}",
                "constants": [],
                "variables": [
                  "{[SkillP01[1]]}"
                ]
              },
              "valuePerStack": {
                "MDF_SpeedDownRatio": {
                  "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                  "displayLines": "{[SkillP01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[2]]}"
                  ]
                },
                "MDF_ActionDelayRatio": {
                  "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                  "displayLines": "{[SkillP01[3]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[3]]}"
                  ]
                },
                "Modifier_Entangle_DamagePercentage": {
                  "operator": "Variables[0] ({[SkillP01[4]]}) || RETURN",
                  "displayLines": "{[SkillP01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP01[4]]}"
                  ]
                },
                "Modifier_Entangle_DamageValue": 0
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Enhance_Imaginary[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Enemy_AML_Boss_ReactTarget_I"
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_IF_Ability13_Mark"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Enemy_AML_Boss_IF_AbilityEX03"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Standard_AttackRatioUp[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
              "duration": 1,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (SkillEX03_P1_AttackAddedRatio) || RETURN",
                  "displayLines": "SkillEX03_P1_AttackAddedRatio",
                  "constants": [],
                  "variables": [
                    "SkillEX03_P1_AttackAddedRatio"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 0}}"
          },
          "phase": "Phase0"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "phase": "Phase0"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "phase": "Phase0"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "phase": "Phase0"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8013145_Monster_AML_Boss_Part2_IF_Ability12_Part01": {
      "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability12_Part01",
      "childAbilityList": [
        "8013145_Monster_AML_Boss_Part2_IF_Ability12_Part01",
        "8013145_Monster_AML_Boss_Part2_IF_Ability12_Part02",
        "8013145_Monster_AML_Boss_Part2_Ability12_Camera"
      ],
      "skillTrigger": "Skill12",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_AML_Boss_Part2_IF_Ability12_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8013145_Monster_AML_Boss_Part2_IF_Ability11_Part02": {
      "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AML_Boss_00_BattleScore2_Flag",
          "value": 1
        },
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_Ability11_ListenSelfDieModifier"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_Ability11_Charge"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 0}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 2}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "phase": "Phase1"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8013145_Monster_AML_Boss_Part2_IF_Ability11_Part01": {
      "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability11_Part01",
      "childAbilityList": [
        "8013145_Monster_AML_Boss_Part2_IF_Ability11_Part01",
        "8013145_Monster_AML_Boss_Part2_IF_Ability11_Part02",
        "8013145_Monster_AML_Boss_Part2_Ability11_Camera"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_AML_Boss_Part2_IF_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8013145_Monster_AML_Boss_Part2_IF_Ability10_Part02": {
      "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability10_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[0]]}) || RETURN",
              "displayLines": "{[Skill10[0]]}",
              "constants": [],
              "variables": [
                "{[Skill10[0]]}"
              ]
            },
            "HitSplit": 0.5,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill10[0]]}) || RETURN",
              "displayLines": "{[Skill10[0]]}",
              "constants": [],
              "variables": [
                "{[Skill10[0]]}"
              ]
            },
            "HitSplit": 0.5,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Enemy_AML_Boss_IF_AbilityEX03"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Standard_SpeedRatioUp",
              "duration": 1,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (SkillEX03_P2_SpeedAddedRatio) || RETURN",
                  "displayLines": "SkillEX03_P2_SpeedAddedRatio",
                  "constants": [],
                  "variables": [
                    "SkillEX03_P2_SpeedAddedRatio"
                  ]
                }
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8013145_Monster_AML_Boss_Part2_IF_Ability10_Part01": {
      "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability10_Part01",
      "childAbilityList": [
        "8013145_Monster_AML_Boss_Part2_IF_Ability10_Part01",
        "8013145_Monster_AML_Boss_Part2_IF_Ability10_Part02",
        "8013145_Monster_AML_Boss_Part2_Ability10_Camera"
      ],
      "skillTrigger": "Skill10",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_AML_Boss_Part2_IF_Ability10_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8013145_Monster_AML_Boss_Part2_IF_Ability09_Part02": {
      "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability09_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_Ability07_Effect"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_Ability08_Effect"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_Ability07_Frensnel"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_Ability08_Frensnel"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement",
          "addStacksPerTrigger": 1
        },
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Enemy_AML_Boss_IF_AbilityEX03"
          },
          "passed": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Target Part 1}}"
              },
              "healPercent": {
                "operator": "Variables[0] (SkillEX03_P3_HealHPRatio) || RETURN",
                "displayLines": "SkillEX03_P3_HealHPRatio",
                "constants": [],
                "variables": [
                  "SkillEX03_P3_HealHPRatio"
                ]
              },
              "formula": "Heal from Target MaxHP"
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
            "modifier": "Enemy_AML_Boss_IF_AbilityEX03"
          },
          "passed": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Target Part 3}}"
              },
              "healPercent": {
                "operator": "Variables[0] (SkillEX03_P3_HealHPRatio) || RETURN",
                "displayLines": "SkillEX03_P3_HealHPRatio",
                "constants": [],
                "variables": [
                  "SkillEX03_P3_HealHPRatio"
                ]
              },
              "formula": "Heal from Target MaxHP"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8013145_Monster_AML_Boss_Part2_IF_Ability09_Part01": {
      "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability09_Part01",
      "childAbilityList": [
        "8013145_Monster_AML_Boss_Part2_IF_Ability09_Part01",
        "8013145_Monster_AML_Boss_Part2_IF_Ability09_Part02",
        "8013145_Monster_AML_Boss_Part2_Ability09_Camera"
      ],
      "skillTrigger": "Skill09",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_AML_Boss_Part2_IF_Ability09_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8013145_Monster_AML_Boss_Part2_IF_Ability08_Part02": {
      "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_Ability08_Effect"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_Ability08_Frensnel"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement",
          "addStacksPerTrigger": 1
        },
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Enemy_AML_Boss_IF_AbilityEX03"
          },
          "passed": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Target Part 3}}"
              },
              "healPercent": {
                "operator": "Variables[0] (SkillEX03_P3_HealHPRatio) || RETURN",
                "displayLines": "SkillEX03_P3_HealHPRatio",
                "constants": [],
                "variables": [
                  "SkillEX03_P3_HealHPRatio"
                ]
              },
              "formula": "Heal from Target MaxHP"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8013145_Monster_AML_Boss_Part2_IF_Ability08_Part01": {
      "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability08_Part01",
      "childAbilityList": [
        "8013145_Monster_AML_Boss_Part2_IF_Ability08_Part01",
        "8013145_Monster_AML_Boss_Part2_IF_Ability08_Part02",
        "8013145_Monster_AML_Boss_Part2_Ability08_Camera"
      ],
      "skillTrigger": "Skill08",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_AML_Boss_Part2_IF_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8013145_Monster_AML_Boss_Part2_IF_Ability07_Part02": {
      "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability07_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_Ability07_Effect"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_Ability07_Frensnel"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement",
          "addStacksPerTrigger": 1
        },
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "Enemy_AML_Boss_IF_AbilityEX03"
          },
          "passed": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Target Part 1}}"
              },
              "healPercent": {
                "operator": "Variables[0] (SkillEX03_P3_HealHPRatio) || RETURN",
                "displayLines": "SkillEX03_P3_HealHPRatio",
                "constants": [],
                "variables": [
                  "SkillEX03_P3_HealHPRatio"
                ]
              },
              "formula": "Heal from Target MaxHP"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8013145_Monster_AML_Boss_Part2_IF_Ability07_Part01": {
      "fileName": "8013145_Monster_AML_Boss_Part2_IF_Ability07_Part01",
      "childAbilityList": [
        "8013145_Monster_AML_Boss_Part2_IF_Ability07_Part01",
        "8013145_Monster_AML_Boss_Part2_IF_Ability07_Part02",
        "8013145_Monster_AML_Boss_Part2_Ability07_Camera"
      ],
      "skillTrigger": "Skill07",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_AML_Boss_Part2_IF_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8013145_Modifiers": {
      "fileName": "8013145_Modifiers",
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
          "for": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part3[<span class=\"descriptionNumberColor\">Imaginary Mark</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Fire",
                    "Wind",
                    "Physical"
                  ]
                }
              ]
            }
          ],
          "description": "Toughness can be reduced by attacks from Imaginary Infused allied targets.",
          "type": "Other",
          "statusName": "Imaginary Mark"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part1[<span class=\"descriptionNumberColor\">Quantum Mark</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Attach",
                  "valueList": [
                    "Fire",
                    "Ice",
                    "Physical"
                  ]
                }
              ]
            }
          ],
          "description": "Toughness can be reduced by attacks from Quantum Infused allied targets.",
          "type": "Other",
          "statusName": "Quantum Mark"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part2_IF_AbilityP01_WeaknessControll",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueList": []
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Enemy_AML_Boss_IF_Sign_Part1"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "Enemy_AML_Boss_IF_Part_Unselectable"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part1[<span class=\"descriptionNumberColor\">Quantum Mark</span>]"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Enemy_AML_Boss_IF_Sign_Part3"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "Enemy_AML_Boss_IF_Part_Unselectable"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part3[<span class=\"descriptionNumberColor\">Imaginary Mark</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part2_IF_Ability13_Mark",
          "stackData": [],
          "latentQueue": [
            "AML_Boss_00_BattleScore2_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part2_IF_RemoveOneMore",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Part 0}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
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
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 7,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "MoreOneMorePerTurn"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "MoreOneMorePerTurn"
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "MoreOneMorePerTurn"
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
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Part 0}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 2,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 4,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 6,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "AIFlag",
                          "context": "TargetEntity",
                          "value": -1,
                          "max": 20
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "OneMorePerTurn"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "OneMorePerTurn"
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
                      "target": "{{Target Part 0}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 2,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 3,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 1
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "MoreOneMorePerTurn"
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "MoreOneMorePerTurn"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 5,
                            "contextScope": "TargetEntity"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 6,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 4
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "MoreOneMorePerTurn"
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "MoreOneMorePerTurn"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 7,
                            "contextScope": "TargetEntity"
                          }
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
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part2_Ability11_Charge",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_APShow"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Target Part 0}}"
                  },
                  "phase": "Phase0"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Target Part 1}}"
                  },
                  "phase": "Phase0"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Target Part 2}}"
                  },
                  "phase": "Phase0"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Target Part 3}}"
                  },
                  "phase": "Phase0"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Monster_APShow"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase2"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "Enemy_AML_Boss_Part2_Ability11_Charge"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [],
          "latentQueue": [
            "AML_Boss_00_BattleScore2_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Charge_DisableAction",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Charge_DisableAction_Controller",
          "execute": [
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Was",
                    "modifier": "Enemy_AML_Boss_Part2_Ability11_Charge"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_AML_Boss_Charge_DisableAction"
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
                    "name": "Modifier Was",
                    "modifier": "Enemy_AML_Boss_Part2_Ability11_Charge"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_AML_Boss_Charge_DisableAction"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part2_IF_Enhancement_Ability08_Frensnel",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part2_IF_Enhancement_Ability08_Effect",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill10"
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill14"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill10"
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill14"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part2_IF_Enhancement_Ability07_Frensnel",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part2_IF_Enhancement_Ability07_Effect",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill10"
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill14"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill10"
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill14"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part2_IF_Enhancement_LV2Effect_Part3",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill10"
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill14"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill10"
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill14"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part2_IF_Enhancement_LV2Effect_Part1",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill10"
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill14"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill10"
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill14"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part2_IF_Enhancement_DisplayLV2[<span class=\"descriptionNumberColor\">Amplification</span>]",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_AML_Boss_IF_Sign_Part1"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_LV2Effect_Part1"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Enemy_AML_Boss_IF_Sign_Part3"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_LV2Effect_Part3"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_LV2Effect_Part1"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_LV2Effect_Part3"
                }
              ]
            }
          ],
          "description": "Skill is enhanced. Current Enhancement Level: 2",
          "type": "Other",
          "effectName": "Amplification",
          "statusName": "Amplification"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part2_IF_Enhancement_DisplayLV1[<span class=\"descriptionNumberColor\">Amplification</span>]",
          "description": "Skill is enhanced. Current Enhancement Level: 1",
          "type": "Other",
          "effectName": "Amplification",
          "statusName": "Amplification"
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part2_IF_Enhancement",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_Ability07_Effect"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_Ability07_Frensnel"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_Ability08_Effect"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_Ability08_Frensnel"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_Monster_AML_Boss_Part2_Ability07"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AML_Boss_00_Part_EnhancementLevel",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_DisplayLV1[<span class=\"descriptionNumberColor\">Amplification</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_DisplayLV2[<span class=\"descriptionNumberColor\">Amplification</span>]"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_EnhancementLevel",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_EnhancementLevel",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_DisplayLV2[<span class=\"descriptionNumberColor\">Amplification</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_DisplayLV1[<span class=\"descriptionNumberColor\">Amplification</span>]"
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
                    "value1": "MDF_EnhancementLevel",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_DisplayLV1[<span class=\"descriptionNumberColor\">Amplification</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Enemy_AML_Boss_Part2_IF_Enhancement_DisplayLV2[<span class=\"descriptionNumberColor\">Amplification</span>]"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AML_Boss_00_Part_EnhancementLevel",
                  "value": {
                    "operator": "Variables[0] (MDF_EnhancementLevel) || RETURN",
                    "displayLines": "MDF_EnhancementLevel",
                    "constants": [],
                    "variables": [
                      "MDF_EnhancementLevel"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "stackLimit": 2
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part2_OnPhase3SpeedUp",
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
                    "operator": "Variables[0] (MDF_SpeedAddedRatio) || RETURN",
                    "displayLines": "MDF_SpeedAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedAddedRatio"
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