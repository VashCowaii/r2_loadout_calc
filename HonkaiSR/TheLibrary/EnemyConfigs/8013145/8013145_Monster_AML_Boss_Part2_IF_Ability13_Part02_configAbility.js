const configAbility = {
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
        "modifier": "<a class=\"gModGreen\" id=\"-291765317\">Enemy_AML_Boss_IF_Enhance_Quantum</a>[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]"
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
        "modifier": "<a class=\"gModGreen\" id=\"-1433767937\">Enemy_AML_Boss_IF_Enhance_Imaginary</a>[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]"
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
          "modifier": "<a class=\"gModGreen\" id=\"1178360880\">Enemy_AML_Boss_Part2_IF_Ability13_Mark</a>",
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
                          "modifier": "<a class=\"gModGreen\" id=\"-291765317\">Enemy_AML_Boss_IF_Enhance_Quantum</a>[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]",
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
          "modifier": "<a class=\"gModGreen\" id=\"975559492\">Enemy_AML_Boss_IF_CTRL_ConfineAndEntangle</a>[<span class=\"descriptionNumberColor\">Snarelock</span>]",
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
          "modifier": "<a class=\"gModGreen\" id=\"975559492\">Enemy_AML_Boss_IF_CTRL_ConfineAndEntangle</a>[<span class=\"descriptionNumberColor\">Snarelock</span>]",
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
      "modifier": "<a class=\"gModGreen\" id=\"1178360880\">Enemy_AML_Boss_Part2_IF_Ability13_Mark</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}