const compositeAbilityObject = {
  "fullCharacterName": 8012147,
  "trimCharacterName": 8012147,
  "abilityList": [
    "8012147_Monster_AML_Boss_Part3_IF_PassiveAbilityInitiate",
    "8012147_Monster_AML_Boss_Part3_IF_AbilityP01_WeaknessChange",
    "8012147_Monster_AML_Boss_Part3_IF_AbilityP01_ReflexInsert",
    "8012147_Monster_AML_Boss_Part3_IF_AbilityP01",
    "8012147_Monster_AML_Boss_Part3_IF_Ability06_Part02",
    "8012147_Monster_AML_Boss_Part3_IF_Ability06_Part01",
    "8012147_Monster_AML_Boss_Part3_IF_Ability05_Part02",
    "8012147_Monster_AML_Boss_Part3_IF_Ability05_Part01",
    "8012147_Monster_AML_Boss_Part3_IF_Ability04_Part02",
    "8012147_Monster_AML_Boss_Part3_IF_Ability04_Part01",
    "8012147_Modifiers"
  ],
  "abilityObject": {
    "8012147_Monster_AML_Boss_Part3_IF_PassiveAbilityInitiate": {
      "fileName": "8012147_Monster_AML_Boss_Part3_IF_PassiveAbilityInitiate",
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
          "modifier": "Enemy_AML_Boss_Part3_HitEffect"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_AML_Boss_Part3_OnBreakRecoverSoundEffect"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part3_OnBreakRecoverSoundEffect",
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
          "for": "Enemy_AML_Boss_Part3_HitEffect",
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
        }
      ]
    },
    "8012147_Monster_AML_Boss_Part3_IF_AbilityP01_WeaknessChange": {
      "fileName": "8012147_Monster_AML_Boss_Part3_IF_AbilityP01_WeaknessChange",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part3[<span class=\"descriptionNumberColor\">Imaginary Mark</span>]"
        },
        {
          "name": "Deal Toughness DMG",
          "value": {
            "operator": "Variables[0] (SkillEX02_P1_Core_StanceDamageValue) || RETURN",
            "displayLines": "SkillEX02_P1_Core_StanceDamageValue",
            "constants": [],
            "variables": [
              "SkillEX02_P1_Core_StanceDamageValue"
            ]
          },
          "attacker": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "defender": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "forceReduction": true,
          "canDelay": true,
          "ToughnessDMGType": "Quantum"
        },
        "Trigger: Attack End",
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "references": []
    },
    "8012147_Monster_AML_Boss_Part3_IF_AbilityP01_ReflexInsert": {
      "fileName": "8012147_Monster_AML_Boss_Part3_IF_AbilityP01_ReflexInsert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": 0.8
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End"
      ],
      "references": []
    },
    "8012147_Monster_AML_Boss_Part3_IF_AbilityP01": {
      "fileName": "8012147_Monster_AML_Boss_Part3_IF_AbilityP01",
      "childAbilityList": [
        "8012147_Monster_AML_Boss_Part3_IF_AbilityP01",
        "8012147_Monster_AML_Boss_Part3_IF_AbilityP01_ReflexInsert",
        "8012147_Monster_AML_Boss_Part3_IF_AbilityP01_ReflexInsert_Camera",
        "8012147_Monster_AML_Boss_Part3_IF_AbilityP01_WeaknessChange",
        "8012147_Monster_AML_Boss_Part3_IF_AbilityP01_WeaknessChange_Camera"
      ],
      "skillTrigger": "SkillP01",
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
          "modifier": "Enemy_AML_Boss_Part3_IF_AbilityP01_OneMoreController"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_AML_Boss_Part2_IF_AbilityP01_Weakness_Part3[<span class=\"descriptionNumberColor\">Imaginary Mark</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Enemy_AML_Boss_Part3_IF_AbilityP01_WeaknessControll"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part3_IF_AbilityP01_WeaknessControll",
          "modifierFlags": [
            "Deathrattle",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Inject Ability Use",
                  "conditionActive": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Target Part 0}}"
                        },
                        "value1": "_Part1_Alive",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Target Part 0}}"
                        },
                        "value1": "_Part2_Alive",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Target Part 0}}"
                        },
                        "value1": "_Part3_Alive",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ],
                    "invertCondition": true
                  },
                  "checkOverride": {
                    "name": "Condition Priority",
                    "overridePriority": "MonsterForceKill",
                    "condition": {
                      "name": "Compare: Ability Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                      "compareType": "<=",
                      "value2": 0
                    }
                  },
                  "abilityName": "Monster_AML_Boss_Part3_IF_AbilityP01_WeaknessChange",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Target Part 2}}"
                  },
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Enemy_AML_Boss_Part3_IF_AbilityP01_ReflexController",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "ReflexInsertFlag"
                }
              ]
            },
            {
              "eventTrigger": "Action End [Anyone]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "ReflexInsertFlag"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
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
                        "value1": "ReflexInsertFlag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "Enemy_AML_Boss_IF_Enhance_Quantum[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "ReflexInsertFlag",
                      "value": 1
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Advance",
                      "multiAdd": -0.3
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "8012147_Monster_AML_Boss_Part3_IF_Ability06_Part02": {
      "fileName": "8012147_Monster_AML_Boss_Part3_IF_Ability06_Part02",
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
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
              "operator": "Variables[0] ({[Skill06[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill06[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "Enemy_AML_Boss_IF_Enhance_Imaginary[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Enemy_AML_Boss_ReactTarget_I"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "Enemy_AML_Boss_IF_Enhance_Quantum[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
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
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "Enemy_AML_Boss_ReactTarget_I"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
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
                "target": "{{Ability Target(ST)}}"
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
                "target": "{{Ability Target(ST)}}"
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
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Enhance_Imaginary[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Enemy_AML_Boss_ReactTarget_I"
            }
          ]
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
    "8012147_Monster_AML_Boss_Part3_IF_Ability06_Part01": {
      "fileName": "8012147_Monster_AML_Boss_Part3_IF_Ability06_Part01",
      "childAbilityList": [
        "8012147_Monster_AML_Boss_Part3_IF_Ability06_Part01",
        "8012147_Monster_AML_Boss_Part3_IF_Ability06_Part02",
        "8012147_Monster_AML_Boss_Part3_Ability06_Camera"
      ],
      "skillTrigger": "Skill06",
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
          "ability": "Monster_AML_Boss_Part3_IF_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8012147_Monster_AML_Boss_Part3_IF_Ability05_Part02": {
      "fileName": "8012147_Monster_AML_Boss_Part3_IF_Ability05_Part02",
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
              "displayLines": "{[Skill05[0]]}",
              "constants": [],
              "variables": [
                "{[Skill05[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "Enemy_AML_Boss_IF_Enhance_Imaginary[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Enemy_AML_Boss_ReactTarget_I"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "Enemy_AML_Boss_IF_Enhance_Quantum[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
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
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "Enemy_AML_Boss_ReactTarget_I"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
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
                "target": "{{Ability Target(ST)}}"
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
                "target": "{{Ability Target(ST)}}"
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
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Enemy_AML_Boss_IF_Enhance_Imaginary[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Enemy_AML_Boss_ReactTarget_I"
            }
          ]
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
    "8012147_Monster_AML_Boss_Part3_IF_Ability05_Part01": {
      "fileName": "8012147_Monster_AML_Boss_Part3_IF_Ability05_Part01",
      "childAbilityList": [
        "8012147_Monster_AML_Boss_Part3_IF_Ability05_Part01",
        "8012147_Monster_AML_Boss_Part3_IF_Ability05_Part02",
        "8012147_Monster_AML_Boss_Part3_Ability05_Camera"
      ],
      "skillTrigger": "Skill05",
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
          "ability": "Monster_AML_Boss_Part3_IF_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8012147_Monster_AML_Boss_Part3_IF_Ability04_Part02": {
      "fileName": "8012147_Monster_AML_Boss_Part3_IF_Ability04_Part02",
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
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
    "8012147_Monster_AML_Boss_Part3_IF_Ability04_Part01": {
      "fileName": "8012147_Monster_AML_Boss_Part3_IF_Ability04_Part01",
      "childAbilityList": [
        "8012147_Monster_AML_Boss_Part3_IF_Ability04_Part01",
        "8012147_Monster_AML_Boss_Part3_IF_Ability04_Part02",
        "8012147_Monster_AML_Boss_Part3_Ability04_Camera"
      ],
      "skillTrigger": "Skill04",
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
          "ability": "Monster_AML_Boss_Part3_IF_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8012147_Modifiers": {
      "fileName": "8012147_Modifiers",
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
          "for": "Standard_SpeedRatioUp",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
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
          "for": "Enemy_AML_Boss_Part3_IF_AbilityP01_OneMoreController",
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "ImaginaryEnhancedNumber",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 2,
                  "maxValue": 99,
                  "whenEnteringRange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "OneMorePerTurn"
                    }
                  ],
                  "whenLeavingRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "OneMorePerTurn"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}