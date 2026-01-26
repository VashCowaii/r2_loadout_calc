const configAbility = {
  "fileName": "Cipher_Cipher_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Cipher_BpKuoSan[<span class=\"descriptionNumberColor\">Patron</span>]",
      "valuePerStack": {}
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{ST and Blast}}"
      },
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Cipher_BP_Debuff[<span class=\"descriptionNumberColor\">Hey, Jackpot for the Taking</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (1.2) || RETURN",
            "displayLines": "1.2",
            "constants": [],
            "variables": [
              1.2
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.1) || RETURN",
              "displayLines": "0.1",
              "constants": [],
              "variables": [
                0.1
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Cipher_BP_Bonus[<span class=\"descriptionNumberColor\">Hey, Jackpot for the Taking</span>]",
      "duration": {
        "operator": "Variables[0] (2) || RETURN",
        "displayLines": "2",
        "constants": [],
        "variables": [
          2
        ]
      },
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.3) || RETURN",
          "displayLines": "0.3",
          "constants": [],
          "variables": [
            0.3
          ]
        }
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (2) || RETURN",
          "displayLines": "2",
          "constants": [],
          "variables": [
            2
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
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (1) || Constants[0] (0.1) || MUL || RETURN",
          "displayLines": "(1 * 0.1)",
          "constants": [
            0.1
          ],
          "variables": [
            1
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
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (2) || RETURN",
          "displayLines": "2",
          "constants": [],
          "variables": [
            2
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
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (1) || Constants[0] (0.1) || MUL || RETURN",
          "displayLines": "(1 * 0.1)",
          "constants": [
            0.1
          ],
          "variables": [
            1
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
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (2) || RETURN",
          "displayLines": "2",
          "constants": [],
          "variables": [
            2
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
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (1) || Constants[0] (0.1) || MUL || RETURN",
          "displayLines": "(1 * 0.1)",
          "constants": [
            0.1
          ],
          "variables": [
            1
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
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (2) || RETURN",
          "displayLines": "2",
          "constants": [],
          "variables": [
            2
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
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (1) || Constants[0] (0.1) || MUL || RETURN",
          "displayLines": "(1 * 0.1)",
          "constants": [
            0.1
          ],
          "variables": [
            1
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
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (2) || RETURN",
          "displayLines": "2",
          "constants": [],
          "variables": [
            2
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
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (1) || Constants[0] (0.1) || MUL || RETURN",
          "displayLines": "(1 * 0.1)",
          "constants": [
            0.1
          ],
          "variables": [
            1
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
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (2) || RETURN",
          "displayLines": "2",
          "constants": [],
          "variables": [
            2
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
      "target": {
        "name": "Target Name",
        "target": "{{Ability Targets Adjacent(Blast)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (1) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "(1 * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            1
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (Blast Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "(Blast Toughness Value * 0.5)",
          "constants": [
            0.5
          ],
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
  "references": []
}