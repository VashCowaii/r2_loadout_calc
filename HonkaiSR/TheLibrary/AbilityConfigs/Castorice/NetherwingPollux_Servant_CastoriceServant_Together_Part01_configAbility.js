const configAbility = {
  "fileName": "NetherwingPollux_Servant_CastoriceServant_Together_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-902705289\">Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "includeDyingTargets": true,
          "ifTargetFound": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1405272466\">Servant_CastoriceServant_SetDamageRatio</a>"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (Castorice_Ability21_P3_HPPercentage) || Variables[1] (Castorice_Rank01_DamageRatio) || MUL || RETURN",
                  "displayLines": "(Castorice_Ability21_P3_HPPercentage * Castorice_Rank01_DamageRatio)",
                  "constants": [],
                  "variables": [
                    "Castorice_Ability21_P3_HPPercentage",
                    "Castorice_Rank01_DamageRatio"
                  ]
                },
                "dmgFormula": "[SUMMONER] Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] (_PairStance) || Constants[0] (0.5) || MUL || RETURN",
                  "displayLines": "(_PairStance * 0.5)",
                  "constants": [
                    0.5
                  ],
                  "variables": [
                    "_PairStance"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Quantum"
                },
                "instanceTag": "CastoricePairsDamage",
                "Tags": [
                  "Joint-Attack"
                ],
                "attackType": "Skill",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (Castorice_Ability21_P3_HPPercentage) || RETURN",
              "displayLines": "Castorice_Ability21_P3_HPPercentage",
              "constants": [],
              "variables": [
                "Castorice_Ability21_P3_HPPercentage"
              ]
            },
            "dmgFormula": "[SUMMONER] Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (_PairStance) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(_PairStance * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "_PairStance"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Quantum"
            },
            "instanceTag": "CastoricePairsDamage",
            "Tags": [
              "Joint-Attack"
            ],
            "attackType": "Skill",
            "EnergyGainPercent": "100%"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-902705289\">Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage</a>"
        }
      ]
    }
  ],
  "references": []
}