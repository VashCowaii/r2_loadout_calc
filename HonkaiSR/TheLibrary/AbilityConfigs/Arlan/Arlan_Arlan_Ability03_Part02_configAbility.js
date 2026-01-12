const configAbility = {
  "fileName": "Arlan_Arlan_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Dispel Debuffs",
          "target": "Caster",
          "dispelCount": 1,
          "dispelOrder": "LastAdded"
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (3.2) || Constants[0] (0.3) || MUL || RETURN",
          "displayLines": "(3.2 * 0.3)",
          "constants": [
            0.3
          ],
          "variables": [
            3.2
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.3) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.3)",
          "constants": [
            0.3
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "30%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          {
            "name": "Compare: Variable",
            "target": "Caster",
            "value1": "CurrentHP%",
            "compareType": "<=",
            "value2": 0.5
          }
        ]
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": "Blast (Adjacent)",
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (3.2) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "(3.2 * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                3.2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "(Blast Toughness Value * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": "Blast (Adjacent)",
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1.6) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "(1.6 * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                1.6
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.3) || MUL || RETURN",
              "displayLines": "(Blast Toughness Value * 0.3)",
              "constants": [
                0.3
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (3.2) || Constants[0] (0.1) || MUL || RETURN",
          "displayLines": "(3.2 * 0.1)",
          "constants": [
            0.1
          ],
          "variables": [
            3.2
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.1) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.1)",
          "constants": [
            0.1
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "10%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          {
            "name": "Compare: Variable",
            "target": "Caster",
            "value1": "CurrentHP%",
            "compareType": "<=",
            "value2": 0.5
          }
        ]
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": "Blast (Adjacent)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (3.2) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(3.2 * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                3.2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(Blast Toughness Value * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": "Blast (Adjacent)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1.6) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(1.6 * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                1.6
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.1) || MUL || RETURN",
              "displayLines": "(Blast Toughness Value * 0.1)",
              "constants": [
                0.1
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (3.2) || Constants[0] (0.6) || MUL || RETURN",
          "displayLines": "(3.2 * 0.6)",
          "constants": [
            0.6
          ],
          "variables": [
            3.2
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.6) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.6)",
          "constants": [
            0.6
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "60%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          {
            "name": "Compare: Variable",
            "target": "Caster",
            "value1": "CurrentHP%",
            "compareType": "<=",
            "value2": 0.5
          }
        ]
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": "Blast (Adjacent)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (3.2) || Constants[0] (0.6) || MUL || RETURN",
              "displayLines": "(3.2 * 0.6)",
              "constants": [
                0.6
              ],
              "variables": [
                3.2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.6) || MUL || RETURN",
              "displayLines": "(Blast Toughness Value * 0.6)",
              "constants": [
                0.6
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": "Blast (Adjacent)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "operator": "Variables[0] (1.6) || Constants[0] (0.6) || MUL || RETURN",
              "displayLines": "(1.6 * 0.6)",
              "constants": [
                0.6
              ],
              "variables": [
                1.6
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.6) || MUL || RETURN",
              "displayLines": "(Blast Toughness Value * 0.6)",
              "constants": [
                0.6
              ],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}