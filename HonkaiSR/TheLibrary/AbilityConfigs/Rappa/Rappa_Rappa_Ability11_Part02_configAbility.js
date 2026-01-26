const configAbility = {
  "fileName": "Rappa_Rappa_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "_AMMO",
      "value": {
        "operator": "Variables[0] (DV_StockTempCount) || RETURN",
        "displayLines": "DV_StockTempCount",
        "constants": [],
        "variables": [
          "DV_StockTempCount"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_AMMO_RELOADED",
      "value": 1
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
      "name": "Define Custom Variable with Distance to Team Center",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "variableName": "DV_PositionOffsetRatio",
      "living": false
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Weakness",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
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
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
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
                  "operator": "Variables[0] (ST Toughness Value) || Constants[0] (1) || Variables[1] (0.5) || ADD || MUL || RETURN",
                  "displayLines": "(ST Toughness Value * (1 + 0.5))",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "ST Toughness Value",
                    0.5
                  ]
                },
                "instanceTag": "Rappa_UltraAttack_Damage",
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
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
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "instanceTag": "Rappa_UltraAttack_Damage",
                "Tags": null,
                "attackType": "Basic ATK"
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
          "modifier": "Rappa_ForceStanceDamage"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
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
                  "operator": "Variables[0] (ST Toughness Value) || Constants[0] (1) || Variables[1] (0.5) || ADD || MUL || RETURN",
                  "displayLines": "(ST Toughness Value * (1 + 0.5))",
                  "constants": [
                    1
                  ],
                  "variables": [
                    "ST Toughness Value",
                    0.5
                  ]
                },
                "instanceTag": "Rappa_UltraAttack_Damage",
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
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
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
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
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "includeDyingTargets": true,
      "maxTargets": 2,
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
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
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
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
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
      "name": "Update Ability Binding",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "abilityName": "Skill12",
      "skillSlot": "Basic ATK"
    },
    {
      "name": "Force-Trigger Ability Next-Phase",
      "ability": "MISSING NAME OBJECT(Or implicit from Context)"
    },
    {
      "name": "Trigger: Ability End",
      "skipAttackSettle": true
    }
  ],
  "references": []
}