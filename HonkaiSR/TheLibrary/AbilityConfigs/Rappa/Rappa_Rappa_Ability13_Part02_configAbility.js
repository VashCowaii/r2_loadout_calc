const configAbility = {
  "fileName": "Rappa_Rappa_Ability13_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "_PassiveBreakCount"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(_AMMO - 1)"
      },
      "variableName": "_AMMO"
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
              "modifier": "<a class=\"gModGreen\" id=\"2114229234\">Rappa_ForceStanceDamage</a>"
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
                  "displayLines": "1"
                },
                "Toughness": {
                  "displayLines": "AOE Toughness Value"
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
              "modifier": "<a class=\"gModGreen\" id=\"2114229234\">Rappa_ForceStanceDamage</a>"
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
                  "displayLines": "1"
                },
                "Toughness": {
                  "displayLines": "AOE Toughness Value"
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
          "variableName": "DV_Ultra_Damage_MaxStance",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "warningType": "MaxToughness",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(((0.5 * ((DV_Ultra_Damage_MaxStance / 30) + 2)) / 4) * (0.6 + ((_PassiveBreakCountBase + DV_TempCount) * 0.5)))"
          },
          "variableName": "DV_FinalBreakDamagePercentage"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"185730135\">Rappa_ForceStanceDamage_ForPassive</a>"
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
              "displayLines": "DV_FinalBreakDamagePercentage"
            },
            "dmgFormula": "Break DMG Scaling",
            "dmgFormulaFinal": "Pure (No DMG%)",
            "Toughness": {
              "displayLines": "((2 + ((_PassiveBreakCountBase + DV_TempCount) * 1)) * 3)"
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
          "modifier": "<a class=\"gModGreen\" id=\"185730135\">Rappa_ForceStanceDamage_ForPassive</a>"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1458859803\">Rappa_Break_Modifier_ForShow</a>[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1458859803\">Rappa_Break_Modifier_ForShow</a>[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
          "stackLimit": {
            "displayLines": "_PassiveBreakCountMax"
          },
          "addStacksPerTrigger": {
            "displayLines": "(_PassiveBreakCountBase + _PassiveBreakCount)"
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
      "modifier": "<a class=\"gModGreen\" id=\"685299865\">Rappa_UltraMode_BanSKL02_ForCaster</a>"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1369082619\">Rappa_Ability13_StanceDamagePreShow</a>"
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
        "displayLines": "-1"
      }
    },
    "Trigger: Ability End",
    "Trigger: Skip Death Handling"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}