const configAbility = {
  "fileName": "Firefly_Advanced_Sam_Ability21_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-385959697\">Advanced_Sam_Ultimate_BreakDamageAddRatio</a>",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.2) || RETURN",
          "displayLines": "0.2",
          "constants": [],
          "variables": [
            0.2
          ]
        }
      }
    },
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "healPercent": 0.25,
      "formula": "Heal from Healer's MaxHP"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{ST and Blast}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1165299909\">Advanced_Sam_Ability21_FireWeakType</a>[<span class=\"descriptionNumberColor\">Additional Fire Weakness</span>]",
      "duration": 2
    },
    {
      "name": "Looped Event",
      "maxLoops": 4,
      "Event": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (Skill21_DamagePercentage) || RETURN",
              "displayLines": "Skill21_DamagePercentage",
              "constants": [],
              "variables": [
                "Skill21_DamagePercentage"
              ]
            },
            "HitSplit": 0.15,
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Fire"
            },
            "Tags": null,
            "attackType": "Skill",
            "EnergyGainPercent": "100%"
          }
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
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (Skill21_DamagePercentageAD) || RETURN",
                  "displayLines": "Skill21_DamagePercentageAD",
                  "constants": [],
                  "variables": [
                    "Skill21_DamagePercentageAD"
                  ]
                },
                "HitSplit": 0.15,
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Fire"
                },
                "Tags": null,
                "attackType": "Skill"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Fire",
        "Damage": {
          "operator": "Variables[0] (Skill21_DamagePercentage) || RETURN",
          "displayLines": "Skill21_DamagePercentage",
          "constants": [],
          "variables": [
            "Skill21_DamagePercentage"
          ]
        },
        "HitSplit": 0.4,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "ToughnessDMGType": {
          "DamageType": "Fire"
        },
        "Tags": null,
        "attackType": "Skill",
        "EnergyGainPercent": "100%"
      }
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (Skill21_DamagePercentageAD) || RETURN",
              "displayLines": "Skill21_DamagePercentageAD",
              "constants": [],
              "variables": [
                "Skill21_DamagePercentageAD"
              ]
            },
            "HitSplit": 0.4,
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "ToughnessDMGType": {
              "DamageType": "Fire"
            },
            "Tags": null,
            "attackType": "Skill"
          }
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
      "modifier": "<a class=\"gModGreen\" id=\"-385959697\">Advanced_Sam_Ultimate_BreakDamageAddRatio</a>"
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}