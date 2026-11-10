const configAbility = {
  "fileName": "Rappa_Rappa_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "DV_StockTempCount"
      },
      "variableName": "_AMMO"
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "_AMMO_RELOADED"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(_AMMO - 1)"
      },
      "variableName": "_AMMO"
    },
    {
      "name": "Define Custom Variable with Distance to Team Center",
      "variableName": "DV_PositionOffsetRatio",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      }
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
          "modifier": "<a class=\"gModGreen\" id=\"2114229234\">Rappa_ForceStanceDamage</a>"
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
                  "displayLines": "1"
                },
                "Toughness": {
                  "displayLines": "(ST Toughness Value * (1 + 0.5))"
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
                  "displayLines": "1"
                },
                "Toughness": {
                  "displayLines": "ST Toughness Value"
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
          "modifier": "<a class=\"gModGreen\" id=\"2114229234\">Rappa_ForceStanceDamage</a>"
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
                  "displayLines": "1"
                },
                "Toughness": {
                  "displayLines": "(ST Toughness Value * (1 + 0.5))"
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
                  "displayLines": "1"
                },
                "Toughness": {
                  "displayLines": "ST Toughness Value"
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
                  "displayLines": "0.5"
                },
                "Toughness": {
                  "displayLines": "Blast Toughness Value"
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
                  "displayLines": "0.5"
                },
                "Toughness": {
                  "displayLines": "Blast Toughness Value"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}