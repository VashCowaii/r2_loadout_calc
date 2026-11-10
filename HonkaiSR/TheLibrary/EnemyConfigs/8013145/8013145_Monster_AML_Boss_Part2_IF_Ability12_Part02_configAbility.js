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
      "variableName": "AML_Boss_00_BattleScore2_Flag",
      "scope": "TargetEntity"
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
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "({[Skill12[0]]} * 0.125)"
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
              "displayLines": "({[Skill12[0]]} * 0.125)"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1128742763\">Enemy_AML_Boss_Part2_Ability11_Charge</a>"
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
          "modifier": "<a class=\"gModGreen\" id=\"1178360880\">Enemy_AML_Boss_Part2_IF_Ability13_Mark</a>",
          "invertCondition": true
        }
      },
      "execute": [
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
            "modifier": "<a class=\"gModGreen\" id=\"1178360880\">Enemy_AML_Boss_Part2_IF_Ability13_Mark</a>",
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
                "modifier": "<a class=\"gModGreen\" id=\"-291765317\">Enemy_AML_Boss_IF_Enhance_Quantum</a>[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"554191527\">Enemy_AML_Boss_ReactTarget_Q</a>"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1433767937\">Enemy_AML_Boss_IF_Enhance_Imaginary</a>[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"151528671\">Enemy_AML_Boss_ReactTarget_I</a>"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1433767937\">Enemy_AML_Boss_IF_Enhance_Imaginary</a>[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]",
                          "valuePerStack": {
                            "MDF_DamagePercentage": {
                              "displayLines": "{[SkillP01[0]]}"
                            },
                            "MDF_ControlChance": {
                              "displayLines": "{[SkillP01[1]]}"
                            },
                            "MDF_ControlSpeedDownRatio": {
                              "displayLines": "{[SkillP01[2]]}"
                            },
                            "MDF_ControlActionDelayRatio": {
                              "displayLines": "{[SkillP01[3]]}"
                            },
                            "MDF_ControlDamagePercentage": {
                              "displayLines": "{[SkillP01[4]]}"
                            },
                            "MDF_StanceBreakAddedRatio": {
                              "displayLines": "{[SkillP01[5]]}"
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-291765317\">Enemy_AML_Boss_IF_Enhance_Quantum</a>[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]",
                          "valuePerStack": {
                            "MDF_DamagePercentage": {
                              "displayLines": "{[SkillP01[0]]}"
                            },
                            "MDF_ControlChance": {
                              "displayLines": "{[SkillP01[1]]}"
                            },
                            "MDF_ControlSpeedDownRatio": {
                              "displayLines": "{[SkillP01[2]]}"
                            },
                            "MDF_ControlActionDelayRatio": {
                              "displayLines": "{[SkillP01[3]]}"
                            },
                            "MDF_ControlDamagePercentage": {
                              "displayLines": "{[SkillP01[4]]}"
                            },
                            "MDF_StanceBreakAddedRatio": {
                              "displayLines": "{[SkillP01[5]]}"
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
              "modifier": "<a class=\"gModGreen\" id=\"1178360880\">Enemy_AML_Boss_Part2_IF_Ability13_Mark</a>"
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
        "modifier": "<a class=\"gModGreen\" id=\"554191527\">Enemy_AML_Boss_ReactTarget_Q</a>"
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
              "displayLines": "(0.5 * {[SkillP01[0]]})"
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
              "displayLines": "(0.5 * {[SkillP01[0]]})"
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
          "modifier": "<a class=\"gModGreen\" id=\"975559492\">Enemy_AML_Boss_IF_CTRL_ConfineAndEntangle</a>[<span class=\"descriptionNumberColor\">Snarelock</span>]",
          "duration": 1,
          "baseChance": {
            "displayLines": "{[SkillP01[1]]}"
          },
          "valuePerStack": {
            "MDF_SpeedDownRatio": {
              "displayLines": "{[SkillP01[2]]}"
            },
            "MDF_ActionDelayRatio": {
              "displayLines": "{[SkillP01[3]]}"
            },
            "Modifier_Entangle_DamagePercentage": {
              "displayLines": "{[SkillP01[4]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-291765317\">Enemy_AML_Boss_IF_Enhance_Quantum</a>[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"554191527\">Enemy_AML_Boss_ReactTarget_Q</a>"
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
        "modifier": "<a class=\"gModGreen\" id=\"151528671\">Enemy_AML_Boss_ReactTarget_I</a>"
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
              "displayLines": "(0.5 * {[SkillP01[0]]})"
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
              "displayLines": "(0.5 * {[SkillP01[0]]})"
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
          "modifier": "<a class=\"gModGreen\" id=\"975559492\">Enemy_AML_Boss_IF_CTRL_ConfineAndEntangle</a>[<span class=\"descriptionNumberColor\">Snarelock</span>]",
          "duration": 1,
          "baseChance": {
            "displayLines": "{[SkillP01[1]]}"
          },
          "valuePerStack": {
            "MDF_SpeedDownRatio": {
              "displayLines": "{[SkillP01[2]]}"
            },
            "MDF_ActionDelayRatio": {
              "displayLines": "{[SkillP01[3]]}"
            },
            "Modifier_Entangle_DamagePercentage": {
              "displayLines": "{[SkillP01[4]]}"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1433767937\">Enemy_AML_Boss_IF_Enhance_Imaginary</a>[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"151528671\">Enemy_AML_Boss_ReactTarget_I</a>"
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
      "modifier": "<a class=\"gModGreen\" id=\"1178360880\">Enemy_AML_Boss_Part2_IF_Ability13_Mark</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1802184614\">Enemy_AML_Boss_IF_AbilityEX03</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1638600472\">Standard_AttackRatioUp</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "duration": 1,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "SkillEX03_P1_AttackAddedRatio"
            }
          }
        }
      ]
    },
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 0}}"
      },
      "phase": "Phase0"
    },
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 1}}"
      },
      "phase": "Phase0"
    },
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 2}}"
      },
      "phase": "Phase0"
    },
    {
      "name": "Change Entity Turn-State",
      "target": {
        "name": "Target Name",
        "target": "{{Target Part 3}}"
      },
      "phase": "Phase0"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}