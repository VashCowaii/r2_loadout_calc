const configAbility = {
  "fileName": "BlackSwan_BlackSwan_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "AttackScaling": {
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] (0.6) || RETURN",
          "displayLines": "0.6",
          "constants": [],
          "variables": [
            0.6
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
        "ToughnessDMGType": {
          "DamageType": "Wind"
        },
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Is Part Of Team",
        "target": "Single Target (Primary)",
        "team": "TeamDark"
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "AddDot",
          "variables": {
            "Arg01": {
              "operator": "Variables[0] (0.65) || RETURN",
              "displayLines": "0.65",
              "constants": [],
              "variables": [
                0.65
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": "Single Target (Primary)",
            "flagName": "STAT_DOT_Poison"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "AddDot",
              "variables": {
                "Arg01": {
                  "operator": "Variables[0] (0.65) || RETURN",
                  "displayLines": "0.65",
                  "constants": [],
                  "variables": [
                    0.65
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": "Single Target (Primary)",
            "flagName": "STAT_DOT_Bleed"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "AddDot",
              "variables": {
                "Arg01": {
                  "operator": "Variables[0] (0.65) || RETURN",
                  "displayLines": "0.65",
                  "constants": [],
                  "variables": [
                    0.65
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": "Single Target (Primary)",
            "flagName": "STAT_DOT_Burn"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "AddDot",
              "variables": {
                "Arg01": {
                  "operator": "Variables[0] (0.65) || RETURN",
                  "displayLines": "0.65",
                  "constants": [],
                  "variables": [
                    0.65
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": "Single Target (Primary)",
            "flagName": "STAT_DOT_Electric"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "AddDot",
              "variables": {
                "Arg01": {
                  "operator": "Variables[0] (0.65) || RETURN",
                  "displayLines": "0.65",
                  "constants": [],
                  "variables": [
                    0.65
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}