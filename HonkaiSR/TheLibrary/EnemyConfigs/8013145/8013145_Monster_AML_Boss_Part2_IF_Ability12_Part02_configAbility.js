const configAbility = {
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
}