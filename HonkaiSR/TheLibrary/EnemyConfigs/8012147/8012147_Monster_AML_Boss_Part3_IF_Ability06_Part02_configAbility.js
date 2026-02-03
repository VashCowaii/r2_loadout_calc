const configAbility = {
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
}