const compositeAbilityObject = {
  "fullCharacterName": 8013144,
  "trimCharacterName": 8013144,
  "abilityList": [
    "8013144_Monster_AML_Boss_Part2_DieChangePhase_Insert",
    "8013144_Monster_AML_Boss_Part2_HitEffect",
    "8013144_WMonster_W0_Boss_Part2_PassiveAbility03",
    "8013144_Monster_AML_Boss_Part2_Ability12_Part02",
    "8013144_Monster_AML_Boss_Part2_Ability12_Part01",
    "8013144_Monster_AML_Boss_Part2_Ability11_Part02",
    "8013144_Monster_AML_Boss_Part2_Ability11_Part01",
    "8013144_Monster_AML_Boss_Part2_Ability10_Part02",
    "8013144_Monster_AML_Boss_Part2_Ability10_Part01",
    "8013144_Monster_AML_Boss_Part2_Ability09_Part02",
    "8013144_Monster_AML_Boss_Part2_Ability09_Part01",
    "8013144_Monster_AML_Boss_Part2_Ability08_Part02",
    "8013144_Monster_AML_Boss_Part2_Ability08_Part01",
    "8013144_Monster_AML_Boss_Part2_Ability07_Part02",
    "8013144_Monster_AML_Boss_Part2_Ability07_Part01",
    "8013144_Modifiers"
  ],
  "abilityObject": {
    "8013144_Monster_AML_Boss_Part2_DieChangePhase_Insert": {
      "fileName": "8013144_Monster_AML_Boss_Part2_DieChangePhase_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": []
    },
    "8013144_Monster_AML_Boss_Part2_HitEffect": {
      "fileName": "8013144_Monster_AML_Boss_Part2_HitEffect",
      "skillTrigger": "PassiveSkill04",
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
          "modifier": "<a class=\"gModGreen\" id=\"-743479497\">Enemy_AML_Boss_Part2_HitEffect</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-743479497\">Enemy_AML_Boss_Part2_HitEffect</a>",
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
    "8013144_WMonster_W0_Boss_Part2_PassiveAbility03": {
      "fileName": "8013144_WMonster_W0_Boss_Part2_PassiveAbility03",
      "childAbilityList": [
        "8013144_WMonster_W0_Boss_Part2_PassiveAbility03"
      ],
      "skillTrigger": "PassiveSkill03",
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
          "modifier": "<a class=\"gModGreen\" id=\"2028329566\">AML_Boss_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-323890115\">Enemy_AML_Boss_Part2_OnBreakRecoverSoundEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1822762552\">Enemy_W0_Boss_Part2_OnBreakRecoverChangeWeak</a>"
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1383210331\">Enemy_W0_Boss_Part2_OnPhase3SpeedUp</a>[<span class=\"descriptionNumberColor\">Burst</span>]",
              "valuePerStack": {
                "MDF_SpeedAddedRatio": {
                  "operator": "Variables[0] ({[PassiveSkill03[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill03[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill03[0]]}"
                  ]
                }
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-323890115\">Enemy_AML_Boss_Part2_OnBreakRecoverSoundEffect</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1822762552\">Enemy_W0_Boss_Part2_OnBreakRecoverChangeWeak</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-141890754\">Enemy_Monster_AML_Boss_Part2_Ability07</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8013144_Monster_AML_Boss_Part2_Ability12_Part02": {
      "fileName": "8013144_Monster_AML_Boss_Part2_Ability12_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-842741041\">Enemy_AML_Boss_Part2_Ability11_ListenSelfDieModifier</a>"
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
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"596990185\">Enemy_W0_Boss_Part2_Ability11_Modifier</a>"
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8013144_Monster_AML_Boss_Part2_Ability12_Part01": {
      "fileName": "8013144_Monster_AML_Boss_Part2_Ability12_Part01",
      "childAbilityList": [
        "8013144_Monster_AML_Boss_Part2_Ability12_Part01",
        "8013144_Monster_AML_Boss_Part2_Ability12_Part02",
        "8013144_Monster_AML_Boss_Part2_Ability12_Camera"
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
          "ability": "Monster_AML_Boss_Part2_Ability12_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8013144_Monster_AML_Boss_Part2_Ability11_Part02": {
      "fileName": "8013144_Monster_AML_Boss_Part2_Ability11_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-842741041\">Enemy_AML_Boss_Part2_Ability11_ListenSelfDieModifier</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"596990185\">Enemy_W0_Boss_Part2_Ability11_Modifier</a>",
          "valuePerStack": {
            "MDF_AttackAddedRatio": {
              "operator": "Variables[0] ({[Skill11[0]]}) || RETURN",
              "displayLines": "{[Skill11[0]]}",
              "constants": [],
              "variables": [
                "{[Skill11[0]]}"
              ]
            }
          }
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
    "8013144_Monster_AML_Boss_Part2_Ability11_Part01": {
      "fileName": "8013144_Monster_AML_Boss_Part2_Ability11_Part01",
      "childAbilityList": [
        "8013144_Monster_AML_Boss_Part2_Ability11_Part01",
        "8013144_Monster_AML_Boss_Part2_Ability11_Part02",
        "8013144_Monster_AML_Boss_Part2_Ability11_Camera"
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
          "ability": "Monster_AML_Boss_Part2_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8013144_Monster_AML_Boss_Part2_Ability10_Part02": {
      "fileName": "8013144_Monster_AML_Boss_Part2_Ability10_Part02",
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
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8013144_Monster_AML_Boss_Part2_Ability10_Part01": {
      "fileName": "8013144_Monster_AML_Boss_Part2_Ability10_Part01",
      "childAbilityList": [
        "8013144_Monster_AML_Boss_Part2_Ability10_Part01",
        "8013144_Monster_AML_Boss_Part2_Ability10_Part02",
        "8013144_Monster_AML_Boss_Part2_Ability10_Camera"
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
          "ability": "Monster_AML_Boss_Part2_Ability10_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8013144_Monster_AML_Boss_Part2_Ability09_Part02": {
      "fileName": "8013144_Monster_AML_Boss_Part2_Ability09_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1761279918\">Enemy_W0_Boss_Part2_AttackUp_Ability07_Effect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-846464827\">Enemy_W0_Boss_Part2_AttackUp_Ability08_Effect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-354136848\">Enemy_W0_Boss_Part2_AttackUp_Ability07_Frensnel</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-859851761\">Enemy_W0_Boss_Part2_AttackUp_Ability08_Frensnel</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"360534641\">Enemy_W0_Boss_Part2_AttackUp</a>[<span class=\"descriptionNumberColor\">Amplification</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill09[1]]}) || RETURN",
            "displayLines": "{[Skill09[1]]}",
            "constants": [],
            "variables": [
              "{[Skill09[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_AttackAddedRatio": {
              "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
              "displayLines": "{[Skill09[0]]}",
              "constants": [],
              "variables": [
                "{[Skill09[0]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"360534641\">Enemy_W0_Boss_Part2_AttackUp</a>[<span class=\"descriptionNumberColor\">Amplification</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill09[1]]}) || RETURN",
            "displayLines": "{[Skill09[1]]}",
            "constants": [],
            "variables": [
              "{[Skill09[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_AttackAddedRatio": {
              "operator": "Variables[0] ({[Skill09[0]]}) || RETURN",
              "displayLines": "{[Skill09[0]]}",
              "constants": [],
              "variables": [
                "{[Skill09[0]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-141890754\">Enemy_Monster_AML_Boss_Part2_Ability07</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-141890754\">Enemy_Monster_AML_Boss_Part2_Ability07</a>"
        },
        "Ability Start",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8013144_Monster_AML_Boss_Part2_Ability09_Part01": {
      "fileName": "8013144_Monster_AML_Boss_Part2_Ability09_Part01",
      "childAbilityList": [
        "8013144_Monster_AML_Boss_Part2_Ability09_Part01",
        "8013144_Monster_AML_Boss_Part2_Ability09_Part02",
        "8013144_Monster_AML_Boss_Part2_Ability09_Camera"
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
          "ability": "Monster_AML_Boss_Part2_Ability09_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8013144_Monster_AML_Boss_Part2_Ability08_Part02": {
      "fileName": "8013144_Monster_AML_Boss_Part2_Ability08_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-846464827\">Enemy_W0_Boss_Part2_AttackUp_Ability08_Effect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-859851761\">Enemy_W0_Boss_Part2_AttackUp_Ability08_Frensnel</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"360534641\">Enemy_W0_Boss_Part2_AttackUp</a>[<span class=\"descriptionNumberColor\">Amplification</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill08[1]]}) || RETURN",
            "displayLines": "{[Skill08[1]]}",
            "constants": [],
            "variables": [
              "{[Skill08[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_AttackAddedRatio": {
              "operator": "Variables[0] ({[Skill08[0]]}) || RETURN",
              "displayLines": "{[Skill08[0]]}",
              "constants": [],
              "variables": [
                "{[Skill08[0]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 3}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-141890754\">Enemy_Monster_AML_Boss_Part2_Ability07</a>"
        },
        "Ability Start",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8013144_Monster_AML_Boss_Part2_Ability08_Part01": {
      "fileName": "8013144_Monster_AML_Boss_Part2_Ability08_Part01",
      "childAbilityList": [
        "8013144_Monster_AML_Boss_Part2_Ability08_Part01",
        "8013144_Monster_AML_Boss_Part2_Ability08_Part02",
        "8013144_Monster_AML_Boss_Part2_Ability08_Camera"
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
          "ability": "Monster_AML_Boss_Part2_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8013144_Monster_AML_Boss_Part2_Ability07_Part02": {
      "fileName": "8013144_Monster_AML_Boss_Part2_Ability07_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1761279918\">Enemy_W0_Boss_Part2_AttackUp_Ability07_Effect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-354136848\">Enemy_W0_Boss_Part2_AttackUp_Ability07_Frensnel</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-141890754\">Enemy_Monster_AML_Boss_Part2_Ability07</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Target Part 1}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"360534641\">Enemy_W0_Boss_Part2_AttackUp</a>[<span class=\"descriptionNumberColor\">Amplification</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill07[1]]}) || RETURN",
            "displayLines": "{[Skill07[1]]}",
            "constants": [],
            "variables": [
              "{[Skill07[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_AttackAddedRatio": {
              "operator": "Variables[0] ({[Skill07[0]]}) || RETURN",
              "displayLines": "{[Skill07[0]]}",
              "constants": [],
              "variables": [
                "{[Skill07[0]]}"
              ]
            }
          }
        },
        "Ability Start",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8013144_Monster_AML_Boss_Part2_Ability07_Part01": {
      "fileName": "8013144_Monster_AML_Boss_Part2_Ability07_Part01",
      "childAbilityList": [
        "8013144_Monster_AML_Boss_Part2_Ability07_Part01",
        "8013144_Monster_AML_Boss_Part2_Ability07_Part02",
        "8013144_Monster_AML_Boss_Part2_Ability07_Camera"
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
          "ability": "Monster_AML_Boss_Part2_Ability07_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8013144_Modifiers": {
      "fileName": "8013144_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__2028329566\">AML_Boss_BattleScore1</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Hit It Where It Hurts Most",
                          "desc": "Defeat the Antimatter Engine without defeating either of the Doomsday Beast's hands in Echo of War",
                          "rarity": "Low"
                        }
                      ]
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Target Part 0}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "AML_Boss_00_BattleScore2_Flag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Cataclysm Disruptor",
                          "desc": "Prevent the Doomsday Beast from using Impending Doom in Echo of War",
                          "rarity": "Low"
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
          "for": "<a class=\"gModGreen\" id=\"mod__596990185\">Enemy_W0_Boss_Part2_Ability11_Modifier</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Part 0}}"
                    },
                    "value1": "_Part1_Alive",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Target Part 1}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1202607969\">Enemy_W0_Boss_Charge_DisableAction</a>"
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
                    "value1": "_Part3_Alive",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Target Part 3}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1202607969\">Enemy_W0_Boss_Charge_DisableAction</a>"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                    "displayLines": "MDF_AttackAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddedRatio"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Part 0}}"
                    },
                    "value1": "_Part1_Alive",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Target Part 1}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1202607969\">Enemy_W0_Boss_Charge_DisableAction</a>"
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
                    "value1": "_Part3_Alive",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Target Part 3}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1202607969\">Enemy_W0_Boss_Charge_DisableAction</a>"
                    }
                  ]
                },
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
                    "modifier": "<a class=\"gModGreen\" id=\"596990185\">Enemy_W0_Boss_Part2_Ability11_Modifier</a>"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_AttackAddedRatio"
          ],
          "latentQueue": [
            "AML_Boss_00_BattleScore2_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1202607969\">Enemy_W0_Boss_Charge_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ],
          "stackData": [],
          "latentQueue": [
            "AML_Boss_00_BattleScore2_Flag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-859851761\">Enemy_W0_Boss_Part2_AttackUp_Ability08_Frensnel</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-846464827\">Enemy_W0_Boss_Part2_AttackUp_Ability08_Effect</a>",
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
                    "name": "Skill Name",
                    "skillName": "Skill10"
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
                    "name": "Skill Name",
                    "skillName": "Skill10"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-354136848\">Enemy_W0_Boss_Part2_AttackUp_Ability07_Frensnel</a>",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1761279918\">Enemy_W0_Boss_Part2_AttackUp_Ability07_Effect</a>",
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
                    "name": "Skill Name",
                    "skillName": "Skill10"
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
                    "name": "Skill Name",
                    "skillName": "Skill10"
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
          "for": "<a class=\"gModGreen\" id=\"mod__360534641\">Enemy_W0_Boss_Part2_AttackUp</a>[<span class=\"descriptionNumberColor\">Amplification</span>]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1761279918\">Enemy_W0_Boss_Part2_AttackUp_Ability07_Effect</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-354136848\">Enemy_W0_Boss_Part2_AttackUp_Ability07_Frensnel</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-846464827\">Enemy_W0_Boss_Part2_AttackUp_Ability08_Effect</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-859851761\">Enemy_W0_Boss_Part2_AttackUp_Ability08_Frensnel</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-141890754\">Enemy_Monster_AML_Boss_Part2_Ability07</a>"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                    "displayLines": "MDF_AttackAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_AttackAddedRatio"
          ],
          "latentQueue": [],
          "description": "ATK +<span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span>. Abilities are enhanced.",
          "type": "Buff",
          "effectName": "Amplification",
          "statusName": "Amplification"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-632703033\">Enemy_WMonster_W0_Boss_Part_Passive_WeakPhysical</a>",
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
                  "valueList": [
                    "Physical"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "resistArray": [
                    {
                      "element": "Physical",
                      "value": 0
                    },
                    {
                      "element": "Fire",
                      "value": 0
                    },
                    {
                      "element": "Ice",
                      "value": 0
                    },
                    {
                      "element": "Thunder",
                      "value": 0
                    },
                    {
                      "element": "Wind",
                      "value": 0
                    },
                    {
                      "element": "Quantum",
                      "value": 0
                    },
                    {
                      "element": "Imaginary",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-42840376\">Enemy_WMonster_W0_Boss_Part_Passive_WeakWind</a>",
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
                  "valueList": [
                    "Wind"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "resistArray": [
                    {
                      "element": "Physical",
                      "value": 0
                    },
                    {
                      "element": "Fire",
                      "value": 0
                    },
                    {
                      "element": "Ice",
                      "value": 0
                    },
                    {
                      "element": "Thunder",
                      "value": 0
                    },
                    {
                      "element": "Wind",
                      "value": 0
                    },
                    {
                      "element": "Quantum",
                      "value": 0
                    },
                    {
                      "element": "Imaginary",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1832434558\">Enemy_WMonster_W0_Boss_Part_Passive_WeakFire</a>",
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
                  "valueList": [
                    "Fire"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "resistArray": [
                    {
                      "element": "Physical",
                      "value": 0
                    },
                    {
                      "element": "Fire",
                      "value": 0
                    },
                    {
                      "element": "Ice",
                      "value": 0
                    },
                    {
                      "element": "Thunder",
                      "value": 0
                    },
                    {
                      "element": "Wind",
                      "value": 0
                    },
                    {
                      "element": "Quantum",
                      "value": 0
                    },
                    {
                      "element": "Imaginary",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-748933759\">Enemy_WMonster_W0_Boss_Part_Passive_WeakIce</a>",
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
                  "valueList": [
                    "Ice"
                  ]
                },
                {
                  "name": "Stack Element Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "resistArray": [
                    {
                      "element": "Physical",
                      "value": 0
                    },
                    {
                      "element": "Fire",
                      "value": 0
                    },
                    {
                      "element": "Ice",
                      "value": 0
                    },
                    {
                      "element": "Thunder",
                      "value": 0
                    },
                    {
                      "element": "Wind",
                      "value": 0
                    },
                    {
                      "element": "Quantum",
                      "value": 0
                    },
                    {
                      "element": "Imaginary",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-141890754\">Enemy_Monster_AML_Boss_Part2_Ability07</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1383210331\">Enemy_W0_Boss_Part2_OnPhase3SpeedUp</a>[<span class=\"descriptionNumberColor\">Burst</span>]",
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
          ],
          "stackData": [
            "MDF_SpeedAddedRatio"
          ],
          "latentQueue": [],
          "description": "Speed increased.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "Burst"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-842741041\">Enemy_AML_Boss_Part2_Ability11_ListenSelfDieModifier</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
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
                    "target": "{{Target Part 3}}"
                  },
                  "phase": "Phase0"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AML_Boss_00_BattleScore2_Flag"
          ]
        }
      ],
      "references": []
    }
  }
}