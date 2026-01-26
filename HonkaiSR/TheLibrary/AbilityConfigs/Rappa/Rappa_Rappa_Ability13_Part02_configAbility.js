const configAbility = {
  "fileName": "Rappa_Rappa_Ability13_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "_PassiveBreakCount",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_AMMO",
      "value": {
        "operator": "Variables[0] (_AMMO) || Constants[0] (1) || SUB || RETURN",
        "displayLines": "(_AMMO - 1)",
        "constants": [
          1
        ],
        "variables": [
          "_AMMO"
        ]
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "includeDyingTargets": true,
      "maxTargets": 10,
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Weakness",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "DamageType": "Imaginary",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Rappa_ForceStanceDamage"
            },
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
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
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
                "instanceTag": "Rappa_UltraAttack_Damage",
                "Tags": null,
                "attackType": "Basic ATK"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Rappa_ForceStanceDamage"
            }
          ],
          "failed": [
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
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
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
                "instanceTag": "Rappa_UltraAttack_Damage",
                "Tags": null,
                "attackType": "Basic ATK"
              }
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
      "includeDyingTargets": true,
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "DV_Ultra_Damage_MaxStance",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
          "warningType": "MaxToughness"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DV_FinalBreakDamagePercentage",
          "value": {
            "operator": "Constants[0] (0.5) || Variables[0] (DV_Ultra_Damage_MaxStance) || Constants[1] (30) || DIV || Constants[2] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (0.6) || Variables[2] (_PassiveBreakCountBase) || Variables[3] (DV_TempCount) || ADD || Variables[4] (0.5) || MUL || ADD || MUL || RETURN",
            "displayLines": "(((0.5 * ((DV_Ultra_Damage_MaxStance / 30) + 2)) / 4) * (0.6 + ((_PassiveBreakCountBase + DV_TempCount) * 0.5)))",
            "constants": [
              0.5,
              30,
              2,
              4
            ],
            "variables": [
              "DV_Ultra_Damage_MaxStance",
              0.6,
              "_PassiveBreakCountBase",
              "DV_TempCount",
              0.5
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Rappa_ForceStanceDamage_ForPassive"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "DamageBreak": {
              "operator": "Variables[0] (DV_FinalBreakDamagePercentage) || RETURN",
              "displayLines": "DV_FinalBreakDamagePercentage",
              "constants": [],
              "variables": [
                "DV_FinalBreakDamagePercentage"
              ]
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": {
              "operator": "Variables[0] (2) || Variables[1] (_PassiveBreakCountBase) || Variables[2] (DV_TempCount) || ADD || Variables[3] (1) || MUL || ADD || Constants[0] (3) || MUL || RETURN",
              "displayLines": "((2 + ((_PassiveBreakCountBase + DV_TempCount) * 1)) * 3)",
              "constants": [
                3
              ],
              "variables": [
                2,
                "_PassiveBreakCountBase",
                "DV_TempCount",
                1
              ]
            },
            "instanceTag": "Rappa_UltraAttack_Damage",
            "Tags": null,
            "attackType": "Break DMG"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Rappa_ForceStanceDamage_ForPassive"
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Rappa_Break_Modifier_ForShow[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "_PassiveBreakCountBase",
            "compareType": ">",
            "value2": 0
          },
          {
            "name": "Compare: Variable",
            "value1": "_PassiveBreakCount",
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
          "modifier": "Rappa_Break_Modifier_ForShow[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
          "stackLimit": {
            "operator": "Variables[0] (_PassiveBreakCountMax) || RETURN",
            "displayLines": "_PassiveBreakCountMax",
            "constants": [],
            "variables": [
              "_PassiveBreakCountMax"
            ]
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (_PassiveBreakCountBase) || Variables[1] (_PassiveBreakCount) || ADD || RETURN",
            "displayLines": "(_PassiveBreakCountBase + _PassiveBreakCount)",
            "constants": [],
            "variables": [
              "_PassiveBreakCountBase",
              "_PassiveBreakCount"
            ]
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
      "modifier": "Rappa_UltraMode_BanSKL02_ForCaster"
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
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Rappa_Ability13_StanceDamagePreShow"
    },
    {
      "name": "Update Ability Binding",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "abilityName": "Skill01",
      "skillSlot": "Basic ATK"
    },
    {
      "name": "Adjust Variable Value",
      "adjustmentType": "Add to Value (Default)",
      "variableName": "_AR_STATE_LIFETIME",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": {
        "operator": "Constants[0] (1) || INVERT || RETURN",
        "displayLines": "-1",
        "constants": [
          1
        ],
        "variables": []
      }
    },
    "Trigger: Ability End",
    "Trigger: Skip Death Handling"
  ],
  "references": []
}