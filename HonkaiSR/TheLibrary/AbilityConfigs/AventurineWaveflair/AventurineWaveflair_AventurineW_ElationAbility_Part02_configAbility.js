const configAbility = {
  "fileName": "AventurineWaveflair_AventurineW_ElationAbility_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "DamageElation": {
          "operator": "Variables[0] (0.6) || RETURN",
          "displayLines": "0.6",
          "constants": [],
          "variables": [
            0.6
          ]
        },
        "dmgFormula": "Elation Scaling",
        "HitSplit": 0.5,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "instanceTag": "ElationSkill_1",
        "Tags": null,
        "attackType": "Elation DMG",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (10) || RETURN",
        "displayLines": "10",
        "constants": [],
        "variables": [
          10
        ]
      },
      "Event": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "paramSequence": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageElation": {
                  "operator": "Variables[0] (0.18) || RETURN",
                  "displayLines": "0.18",
                  "constants": [],
                  "variables": [
                    0.18
                  ]
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "instanceTag": "ElationSkill_1",
                "Tags": null,
                "attackType": "Elation DMG"
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
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "DamageElation": {
          "operator": "Variables[0] (0.6) || RETURN",
          "displayLines": "0.6",
          "constants": [],
          "variables": [
            0.6
          ]
        },
        "dmgFormula": "Elation Scaling",
        "HitSplit": 0.5,
        "Toughness": {
          "operator": "Variables[0] (AOE Toughness Value) || RETURN",
          "displayLines": "AOE Toughness Value",
          "constants": [],
          "variables": [
            "AOE Toughness Value"
          ]
        },
        "instanceTag": "ElationSkill_1",
        "Tags": null,
        "attackType": "Elation DMG",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "In Aha-Instant"
      }
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}