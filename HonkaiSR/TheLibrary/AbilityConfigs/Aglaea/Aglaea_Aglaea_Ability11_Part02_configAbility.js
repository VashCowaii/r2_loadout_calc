const configAbility = {
  "fileName": "Aglaea_Aglaea_Ability11_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "_CurrentSpeed",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Memosprite}}"
      },
      "variableName": "_ServantCurrentSpeed",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Rank06Ratio",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Memosprite}}"
      },
      "variableName": "_PairStanceDMG1",
      "value": {
        "operator": "Variables[0] (ST Toughness Value) || RETURN",
        "displayLines": "ST Toughness Value",
        "constants": [],
        "variables": [
          "ST Toughness Value"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Memosprite}}"
      },
      "variableName": "_PairStanceDMG2",
      "value": {
        "operator": "Variables[0] (Blast Toughness Value) || RETURN",
        "displayLines": "Blast Toughness Value",
        "constants": [],
        "variables": [
          "Blast Toughness Value"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_Energy",
      "value": {
        "operator": "Variables[0] (_Energy) || Constants[0] (1) || SUB || RETURN",
        "displayLines": "(_Energy - 1)",
        "constants": [
          1
        ],
        "variables": [
          "_Energy"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill11Count",
      "value": {
        "operator": "Variables[0] (Skill11Count) || Constants[0] (1) || ADD || RETURN",
        "displayLines": "(Skill11Count + 1)",
        "constants": [
          1
        ],
        "variables": [
          "Skill11Count"
        ]
      }
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
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "_SpRecover": {
              "operator": "Variables[0] (20) || RETURN",
              "displayLines": "20",
              "constants": [],
              "variables": [
                20
              ]
            },
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "MDF_PropertyValue2": {
              "operator": "Variables[0] (0.15) || RETURN",
              "displayLines": "0.15",
              "constants": [],
              "variables": [
                0.15
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
      "AttackScaling": {
        "DamageType": "Thunder",
        "Damage": {
          "operator": "Variables[0] (2) || Variables[1] (_Rank06Ratio) || ADD || RETURN",
          "displayLines": "(2 + _Rank06Ratio)",
          "constants": [],
          "variables": [
            2,
            "_Rank06Ratio"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "ST Toughness Value"
          ]
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
          "operator": "Variables[0] (0.9) || Variables[1] (_Rank06Ratio) || ADD || RETURN",
          "displayLines": "(0.9 + _Rank06Ratio)",
          "constants": [],
          "variables": [
            0.9,
            "_Rank06Ratio"
          ]
        },
        "HitSplit": 0.25,
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
          "operator": "Variables[0] (2) || Variables[1] (_Rank06Ratio) || ADD || RETURN",
          "displayLines": "(2 + _Rank06Ratio)",
          "constants": [],
          "variables": [
            2,
            "_Rank06Ratio"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "ST Toughness Value"
          ]
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
          "operator": "Variables[0] (0.9) || Variables[1] (_Rank06Ratio) || ADD || RETURN",
          "displayLines": "(0.9 + _Rank06Ratio)",
          "constants": [],
          "variables": [
            0.9,
            "_Rank06Ratio"
          ]
        },
        "HitSplit": 0.25,
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
          "operator": "Variables[0] (2) || Variables[1] (_Rank06Ratio) || ADD || RETURN",
          "displayLines": "(2 + _Rank06Ratio)",
          "constants": [],
          "variables": [
            2,
            "_Rank06Ratio"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "ST Toughness Value"
          ]
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
          "operator": "Variables[0] (0.9) || Variables[1] (_Rank06Ratio) || ADD || RETURN",
          "displayLines": "(0.9 + _Rank06Ratio)",
          "constants": [],
          "variables": [
            0.9,
            "_Rank06Ratio"
          ]
        },
        "HitSplit": 0.25,
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
          "operator": "Variables[0] (2) || Variables[1] (_Rank06Ratio) || ADD || RETURN",
          "displayLines": "(2 + _Rank06Ratio)",
          "constants": [],
          "variables": [
            2,
            "_Rank06Ratio"
          ]
        },
        "HitSplit": 0.25,
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "ST Toughness Value"
          ]
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
          "operator": "Variables[0] (0.9) || Variables[1] (_Rank06Ratio) || ADD || RETURN",
          "displayLines": "(0.9 + _Rank06Ratio)",
          "constants": [],
          "variables": [
            0.9,
            "_Rank06Ratio"
          ]
        },
        "HitSplit": 0.25,
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
  "references": []
}