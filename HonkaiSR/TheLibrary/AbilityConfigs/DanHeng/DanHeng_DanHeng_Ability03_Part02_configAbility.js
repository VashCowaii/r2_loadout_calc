const configAbility = {
  "fileName": "DanHeng_DanHeng_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "DanHeng_Eidolon4_Trigger"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": "Single Target (Primary)",
        "flagName": "STAT_SpeedDown"
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (4) || Variables[1] (1.2) || ADD || RETURN",
              "displayLines": "(4 + 1.2)",
              "constants": [],
              "variables": [
                4,
                1.2
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
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Wind",
            "Damage": {
              "operator": "Variables[0] (4) || RETURN",
              "displayLines": "4",
              "constants": [],
              "variables": [
                4
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
            "Tags": null,
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
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "DanHeng_Eidolon4_Trigger"
        }
      ]
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "DanHeng_Eidolon4_Trigger",
      "execute": [
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": "Caster",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Got a Queued Kill [Owner]",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": "Caster",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}