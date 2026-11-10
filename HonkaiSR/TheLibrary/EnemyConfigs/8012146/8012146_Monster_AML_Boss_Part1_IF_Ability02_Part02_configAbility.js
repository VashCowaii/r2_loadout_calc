const configAbility = {
  "fileName": "8012146_Monster_AML_Boss_Part1_IF_Ability02_Part02",
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
          "displayLines": "{[Skill02[0]]}"
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-291765317\">Enemy_AML_Boss_IF_Enhance_Quantum</a>[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1243397700\">Enemy_AML_Boss_Part1_IF_Ability01_Mark</a>",
            "invertCondition": true
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
          "modifier": "<a class=\"gModGreen\" id=\"1243397700\">Enemy_AML_Boss_Part1_IF_Ability01_Mark</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"554191527\">Enemy_AML_Boss_ReactTarget_Q</a>"
        }
      ],
      "noTargetFound": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1433767937\">Enemy_AML_Boss_IF_Enhance_Imaginary</a>[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1243397700\">Enemy_AML_Boss_Part1_IF_Ability01_Mark</a>",
                "invertCondition": true
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
              "modifier": "<a class=\"gModGreen\" id=\"1243397700\">Enemy_AML_Boss_Part1_IF_Ability01_Mark</a>"
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
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-291765317\">Enemy_AML_Boss_IF_Enhance_Quantum</a>[<span class=\"descriptionNumberColor\">Quantum Infusion</span>]"
          },
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1243397700\">Enemy_AML_Boss_Part1_IF_Ability01_Mark</a>",
            "invertCondition": true
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
          "modifier": "<a class=\"gModGreen\" id=\"1243397700\">Enemy_AML_Boss_Part1_IF_Ability01_Mark</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"554191527\">Enemy_AML_Boss_ReactTarget_Q</a>"
        }
      ],
      "noTargetFound": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1433767937\">Enemy_AML_Boss_IF_Enhance_Imaginary</a>[<span class=\"descriptionNumberColor\">Imaginary Infusion</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1243397700\">Enemy_AML_Boss_Part1_IF_Ability01_Mark</a>",
                "invertCondition": true
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
              "modifier": "<a class=\"gModGreen\" id=\"1243397700\">Enemy_AML_Boss_Part1_IF_Ability01_Mark</a>"
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
      "maxTargets": 2,
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
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1243397700\">Enemy_AML_Boss_Part1_IF_Ability01_Mark</a>"
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
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}