const configAbility = {
  "fileName": "Gilgamesh_Gilgamesh_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Gilgamesh_00_Rank02_MainTargetDamageAdded"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Gilgamesh_00_Rank02_AdjacentTargetDamageAdded"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "1"
          },
          "variableName": "Gilgamesh_00_Rank02_MainTargetDamageAdded"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "0.5"
          },
          "variableName": "Gilgamesh_00_Rank02_AdjacentTargetDamageAdded"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1516158451\">Gilgamesh_DroneAnalysis_Team</a>[<span class=\"descriptionNumberColor\">King's Acknowledgement</span>]",
          "duration": {
            "displayLines": "3"
          },
          "valuePerStack": {
            "MDF_DefenceDownRatio": {
              "displayLines": "0.3"
            },
            "MDF_AttackAdd": {
              "displayLines": "0.6"
            }
          }
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1220268105\">Gilgamesh_DroneAnalysis</a>[<span class=\"descriptionNumberColor\">King's Acknowledgement</span>]",
          "duration": {
            "displayLines": "3"
          },
          "valuePerStack": {
            "MDF_DefenceDownRatio": {
              "displayLines": "0.3"
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
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "(2.8 + Gilgamesh_00_Rank02_MainTargetDamageAdded)"
        },
        "HitSplit": 0.1,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "(1.4 + Gilgamesh_00_Rank02_AdjacentTargetDamageAdded)"
        },
        "HitSplit": 0.1,
        "Toughness": {
          "displayLines": "Blast Toughness Value"
        },
        "Tags": null
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "(2.8 + Gilgamesh_00_Rank02_MainTargetDamageAdded)"
        },
        "HitSplit": 0.1,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "(1.4 + Gilgamesh_00_Rank02_AdjacentTargetDamageAdded)"
        },
        "HitSplit": 0.1,
        "Toughness": {
          "displayLines": "Blast Toughness Value"
        },
        "Tags": null
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "(2.8 + Gilgamesh_00_Rank02_MainTargetDamageAdded)"
        },
        "HitSplit": 0.2,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "(1.4 + Gilgamesh_00_Rank02_AdjacentTargetDamageAdded)"
        },
        "HitSplit": 0.2,
        "Toughness": {
          "displayLines": "Blast Toughness Value"
        },
        "Tags": null
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "(2.8 + Gilgamesh_00_Rank02_MainTargetDamageAdded)"
        },
        "HitSplit": 0.2,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "(1.4 + Gilgamesh_00_Rank02_AdjacentTargetDamageAdded)"
        },
        "HitSplit": 0.2,
        "Toughness": {
          "displayLines": "Blast Toughness Value"
        },
        "Tags": null
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "(2.8 + Gilgamesh_00_Rank02_MainTargetDamageAdded)"
        },
        "HitSplit": 0.4,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "displayLines": "(1.4 + Gilgamesh_00_Rank02_AdjacentTargetDamageAdded)"
        },
        "HitSplit": 0.4,
        "Toughness": {
          "displayLines": "Blast Toughness Value"
        },
        "Tags": null
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}