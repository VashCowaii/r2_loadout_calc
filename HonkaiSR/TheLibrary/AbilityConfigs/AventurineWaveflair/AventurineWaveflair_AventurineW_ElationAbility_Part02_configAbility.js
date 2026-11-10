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
          "displayLines": "0.6"
        },
        "dmgFormula": "Elation Scaling",
        "HitSplit": 0.5,
        "Toughness": {
          "displayLines": "AOE Toughness Value"
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
        "displayLines": "10"
      },
      "execute": [
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
                  "displayLines": "0.18"
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": {
                  "displayLines": "ST Toughness Value"
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
          "displayLines": "0.6"
        },
        "dmgFormula": "Elation Scaling",
        "HitSplit": 0.5,
        "Toughness": {
          "displayLines": "AOE Toughness Value"
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
      "conditions": "In Aha-Instant"
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}