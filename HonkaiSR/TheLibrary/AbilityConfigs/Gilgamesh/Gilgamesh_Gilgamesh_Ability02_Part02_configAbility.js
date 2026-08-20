const configAbility = {
  "fileName": "Gilgamesh_Gilgamesh_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "Gilgamesh_00_Rank02_MainTargetDamageAdded",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Gilgamesh_00_Rank02_AdjacentTargetDamageAdded",
      "value": 0
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
          "variableName": "Gilgamesh_00_Rank02_MainTargetDamageAdded",
          "value": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Gilgamesh_00_Rank02_AdjacentTargetDamageAdded",
          "value": {
            "operator": "Variables[0] (0.5) || RETURN",
            "displayLines": "0.5",
            "constants": [],
            "variables": [
              0.5
            ]
          }
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
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "valuePerStack": {
            "MDF_DefenceDownRatio": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "MDF_AttackAdd": {
              "operator": "Variables[0] (0.6) || RETURN",
              "displayLines": "0.6",
              "constants": [],
              "variables": [
                0.6
              ]
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
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "valuePerStack": {
            "MDF_DefenceDownRatio": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
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
          "operator": "Variables[0] (2.8) || Variables[1] (Gilgamesh_00_Rank02_AdjacentTargetDamageAdded) || ADD || RETURN",
          "displayLines": "(2.8 + Gilgamesh_00_Rank02_AdjacentTargetDamageAdded)",
          "constants": [],
          "variables": [
            2.8,
            "Gilgamesh_00_Rank02_AdjacentTargetDamageAdded"
          ]
        },
        "HitSplit": 0.1,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
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
          "operator": "Variables[0] (1.4) || Variables[1] (Gilgamesh_00_Rank02_MainTargetDamageAdded) || ADD || RETURN",
          "displayLines": "(1.4 + Gilgamesh_00_Rank02_MainTargetDamageAdded)",
          "constants": [],
          "variables": [
            1.4,
            "Gilgamesh_00_Rank02_MainTargetDamageAdded"
          ]
        },
        "HitSplit": 0.1,
        "Toughness": {
          "operator": "Variables[0] (Blast Toughness Value) || RETURN",
          "displayLines": "Blast Toughness Value",
          "constants": [],
          "variables": [
            "Blast Toughness Value"
          ]
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
          "operator": "Variables[0] (2.8) || Variables[1] (Gilgamesh_00_Rank02_AdjacentTargetDamageAdded) || ADD || RETURN",
          "displayLines": "(2.8 + Gilgamesh_00_Rank02_AdjacentTargetDamageAdded)",
          "constants": [],
          "variables": [
            2.8,
            "Gilgamesh_00_Rank02_AdjacentTargetDamageAdded"
          ]
        },
        "HitSplit": 0.1,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
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
          "operator": "Variables[0] (1.4) || Variables[1] (Gilgamesh_00_Rank02_MainTargetDamageAdded) || ADD || RETURN",
          "displayLines": "(1.4 + Gilgamesh_00_Rank02_MainTargetDamageAdded)",
          "constants": [],
          "variables": [
            1.4,
            "Gilgamesh_00_Rank02_MainTargetDamageAdded"
          ]
        },
        "HitSplit": 0.1,
        "Toughness": {
          "operator": "Variables[0] (Blast Toughness Value) || RETURN",
          "displayLines": "Blast Toughness Value",
          "constants": [],
          "variables": [
            "Blast Toughness Value"
          ]
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
          "operator": "Variables[0] (2.8) || Variables[1] (Gilgamesh_00_Rank02_AdjacentTargetDamageAdded) || ADD || RETURN",
          "displayLines": "(2.8 + Gilgamesh_00_Rank02_AdjacentTargetDamageAdded)",
          "constants": [],
          "variables": [
            2.8,
            "Gilgamesh_00_Rank02_AdjacentTargetDamageAdded"
          ]
        },
        "HitSplit": 0.2,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
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
          "operator": "Variables[0] (1.4) || Variables[1] (Gilgamesh_00_Rank02_MainTargetDamageAdded) || ADD || RETURN",
          "displayLines": "(1.4 + Gilgamesh_00_Rank02_MainTargetDamageAdded)",
          "constants": [],
          "variables": [
            1.4,
            "Gilgamesh_00_Rank02_MainTargetDamageAdded"
          ]
        },
        "HitSplit": 0.2,
        "Toughness": {
          "operator": "Variables[0] (Blast Toughness Value) || RETURN",
          "displayLines": "Blast Toughness Value",
          "constants": [],
          "variables": [
            "Blast Toughness Value"
          ]
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
          "operator": "Variables[0] (2.8) || Variables[1] (Gilgamesh_00_Rank02_AdjacentTargetDamageAdded) || ADD || RETURN",
          "displayLines": "(2.8 + Gilgamesh_00_Rank02_AdjacentTargetDamageAdded)",
          "constants": [],
          "variables": [
            2.8,
            "Gilgamesh_00_Rank02_AdjacentTargetDamageAdded"
          ]
        },
        "HitSplit": 0.2,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || RETURN",
          "displayLines": "ST Toughness Value",
          "constants": [],
          "variables": [
            "ST Toughness Value"
          ]
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
          "operator": "Variables[0] (1.4) || Variables[1] (Gilgamesh_00_Rank02_MainTargetDamageAdded) || ADD || RETURN",
          "displayLines": "(1.4 + Gilgamesh_00_Rank02_MainTargetDamageAdded)",
          "constants": [],
          "variables": [
            1.4,
            "Gilgamesh_00_Rank02_MainTargetDamageAdded"
          ]
        },
        "HitSplit": 0.2,
        "Toughness": {
          "operator": "Variables[0] (Blast Toughness Value) || RETURN",
          "displayLines": "Blast Toughness Value",
          "constants": [],
          "variables": [
            "Blast Toughness Value"
          ]
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
          "operator": "Variables[0] (2.8) || Variables[1] (Gilgamesh_00_Rank02_AdjacentTargetDamageAdded) || ADD || RETURN",
          "displayLines": "(2.8 + Gilgamesh_00_Rank02_AdjacentTargetDamageAdded)",
          "constants": [],
          "variables": [
            2.8,
            "Gilgamesh_00_Rank02_AdjacentTargetDamageAdded"
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
          "operator": "Variables[0] (1.4) || Variables[1] (Gilgamesh_00_Rank02_MainTargetDamageAdded) || ADD || RETURN",
          "displayLines": "(1.4 + Gilgamesh_00_Rank02_MainTargetDamageAdded)",
          "constants": [],
          "variables": [
            1.4,
            "Gilgamesh_00_Rank02_MainTargetDamageAdded"
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