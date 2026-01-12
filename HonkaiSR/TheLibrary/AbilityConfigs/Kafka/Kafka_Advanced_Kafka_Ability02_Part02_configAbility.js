const configAbility = {
  "fileName": "Kafka_Advanced_Kafka_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "_HasDot",
      "value": 0
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
          "to": "Single Target (Primary) + Blast (Adjacent)",
          "modifier": "Advanced_Kafka_PassiveDotDamage_Eidolon1[<span class=\"descriptionNumberColor\">DoT Vulnerability</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "valuePerStack": {
            "MDF_DotRatio": {
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
      "target": "Single Target (Primary)",
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (1.6) || RETURN",
          "displayLines": "1.6",
          "constants": [],
          "variables": [
            1.6
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
      "target": "Single Target (Primary)",
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (1.6) || RETURN",
          "displayLines": "1.6",
          "constants": [],
          "variables": [
            1.6
          ]
        },
        "HitSplit": 0.3,
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
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (1.6) || RETURN",
          "displayLines": "1.6",
          "constants": [],
          "variables": [
            1.6
          ]
        },
        "HitSplit": 0.5,
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
      "target": "Blast (Adjacent)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (0.6) || RETURN",
          "displayLines": "0.6",
          "constants": [],
          "variables": [
            0.6
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
        "Tags": null
      }
    },
    {
      "name": "Find New Target",
      "from": "Single Target (Primary) + Blast (Adjacent)",
      "includeDyingTargets": true,
      "conditions": {
        "name": "Has Flag",
        "target": "Use Prior Target(s) Defined",
        "flagName": "STAT_DOT"
      },
      "ignoreParallelWarning": true,
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_HasDot",
            "compareType": "=",
            "value2": 0
          }
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": "Single Target (Primary) + Blast (Adjacent)",
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of",
            "of": "Single Target (Primary)",
            "target": "Use Prior Target(s) Defined",
            "mustBeAlive2": true
          },
          "passed": [
            {
              "name": "Trigger Modifier Event",
              "target": "Use Prior Target(s) Defined",
              "variableName": "DOT_TriggerRatio",
              "eventType": "DOT",
              "value": {
                "operator": "Variables[0] (0.75) || RETURN",
                "displayLines": "0.75",
                "constants": [],
                "variables": [
                  0.75
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Trigger Modifier Event",
              "target": "Use Prior Target(s) Defined",
              "variableName": "DOT_TriggerRatio",
              "eventType": "DOT",
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
            "name": "Has Flag",
            "target": "Use Prior Target(s) Defined",
            "flagName": "STAT_DOT"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_HasDot",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_HasDot",
                  "value": 1
                }
              ]
            }
          ]
        }
      ],
      "noTargetFound": [
        "Trigger: Attack End"
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}