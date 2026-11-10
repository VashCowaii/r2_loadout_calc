const configAbility = {
  "fileName": "Aglaea_Aglaea_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "_CurrentSpeed",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "_ServantCurrentSpeed",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster's Memosprite}}"
      },
      "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "_Rank06Ratio"
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Memosprite}}"
      },
      "value": {
        "displayLines": "ST Toughness Value"
      },
      "variableName": "_PairStanceDMG1"
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Memosprite}}"
      },
      "value": {
        "displayLines": "Blast Toughness Value"
      },
      "variableName": "_PairStanceDMG2"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(_Energy - 1)"
      },
      "variableName": "_Energy"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(Skill11Count + 1)"
      },
      "variableName": "Skill11Count"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Target Exists",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Memosprite}}"
        },
        "living": true
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"216440055\">Aglaea_GoldenSword_Mark</a>[<span class=\"descriptionNumberColor\">Seam Stitch</span>]",
          "valuePerStack": {
            "BombDamagePercentage": {
              "displayLines": "0.3"
            },
            "_SpRecover": {
              "displayLines": "20"
            },
            "MDF_PropertyValue": {
              "displayLines": "0.3"
            },
            "MDF_PropertyValue2": {
              "displayLines": "0.15"
            }
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "(2 + _Rank06Ratio)"
        },
        "HitSplit": 0.25,
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.5)"
        },
        "instanceTag": "AglasaPairsDamage",
        "Tags": [
          "Joint-Attack"
        ],
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "(0.9 + _Rank06Ratio)"
        },
        "HitSplit": 0.25,
        "Toughness": {
          "displayLines": "(Blast Toughness Value * 0.5)"
        },
        "instanceTag": "AglasaPairsDamage",
        "Tags": [
          "Joint-Attack"
        ]
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "(2 + _Rank06Ratio)"
        },
        "HitSplit": 0.25,
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.5)"
        },
        "instanceTag": "AglasaPairsDamage",
        "Tags": [
          "Joint-Attack"
        ],
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "(0.9 + _Rank06Ratio)"
        },
        "HitSplit": 0.25,
        "Toughness": {
          "displayLines": "(Blast Toughness Value * 0.5)"
        },
        "instanceTag": "AglasaPairsDamage",
        "Tags": [
          "Joint-Attack"
        ]
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "(2 + _Rank06Ratio)"
        },
        "HitSplit": 0.25,
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.5)"
        },
        "instanceTag": "AglasaPairsDamage",
        "Tags": [
          "Joint-Attack"
        ],
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "(0.9 + _Rank06Ratio)"
        },
        "HitSplit": 0.25,
        "Toughness": {
          "displayLines": "(Blast Toughness Value * 0.5)"
        },
        "instanceTag": "AglasaPairsDamage",
        "Tags": [
          "Joint-Attack"
        ]
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "(2 + _Rank06Ratio)"
        },
        "HitSplit": 0.25,
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.5)"
        },
        "instanceTag": "AglasaPairsDamage",
        "Tags": [
          "Joint-Attack"
        ],
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "(0.9 + _Rank06Ratio)"
        },
        "HitSplit": 0.25,
        "Toughness": {
          "displayLines": "(Blast Toughness Value * 0.5)"
        },
        "instanceTag": "AglasaPairsDamage",
        "Tags": [
          "Joint-Attack"
        ]
      }
    },
    {
      "name": "Trigger: Attack End",
      "skipDeathSettle": true
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}