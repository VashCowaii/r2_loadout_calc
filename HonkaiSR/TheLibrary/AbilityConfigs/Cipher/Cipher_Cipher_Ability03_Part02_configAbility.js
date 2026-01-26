const configAbility = {
  "fileName": "Cipher_Cipher_Ability03_Part02",
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
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Snapshot Stat Source}}"
      },
      "variableName": "MDF_CasterAttack",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
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
          "operator": "Variables[0] (1.2) || RETURN",
          "displayLines": "1.2",
          "constants": [],
          "variables": [
            1.2
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Variables[1] (Blast Toughness Value) || SUB || RETURN",
          "displayLines": "(ST Toughness Value - Blast Toughness Value)",
          "constants": [],
          "variables": [
            "ST Toughness Value",
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
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": {}
        },
        "Damage": {
          "operator": "Variables[0] (SkillP01_FinalDamage) || Constants[0] (0.2) || MUL || Variables[1] (0.25) || MUL || RETURN",
          "displayLines": "((SkillP01_FinalDamage * 0.2) * 0.25)",
          "constants": [
            0.2
          ],
          "variables": [
            "SkillP01_FinalDamage",
            0.25
          ]
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "attackType": "True DMG"
      },
      "isConvertedDMG": true
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": {}
        },
        "Damage": {
          "operator": "Variables[0] (SkillP01_FinalDamage) || Constants[0] (0.2) || MUL || Variables[1] (0.25) || MUL || RETURN",
          "displayLines": "((SkillP01_FinalDamage * 0.2) * 0.25)",
          "constants": [
            0.2
          ],
          "variables": [
            "SkillP01_FinalDamage",
            0.25
          ]
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "attackType": "True DMG"
      },
      "isConvertedDMG": true
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": {}
        },
        "Damage": {
          "operator": "Variables[0] (SkillP01_FinalDamage) || Constants[0] (0.2) || MUL || Variables[1] (0.25) || MUL || RETURN",
          "displayLines": "((SkillP01_FinalDamage * 0.2) * 0.25)",
          "constants": [
            0.2
          ],
          "variables": [
            "SkillP01_FinalDamage",
            0.25
          ]
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "attackType": "True DMG"
      },
      "isConvertedDMG": true
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": {}
        },
        "Damage": {
          "operator": "Variables[0] (SkillP01_FinalDamage) || Constants[0] (0.2) || MUL || Variables[1] (0.25) || MUL || RETURN",
          "displayLines": "((SkillP01_FinalDamage * 0.2) * 0.25)",
          "constants": [
            0.2
          ],
          "variables": [
            "SkillP01_FinalDamage",
            0.25
          ]
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "attackType": "True DMG"
      },
      "isConvertedDMG": true
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": {
          "name": "Damage Type Source",
          "sourceType": {}
        },
        "Damage": {
          "operator": "Variables[0] (SkillP01_FinalDamage) || Constants[0] (0.2) || MUL || Variables[1] (0.25) || MUL || RETURN",
          "displayLines": "((SkillP01_FinalDamage * 0.2) * 0.25)",
          "constants": [
            0.2
          ],
          "variables": [
            "SkillP01_FinalDamage",
            0.25
          ]
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "attackType": "True DMG"
      },
      "isConvertedDMG": true
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{ST and Blast}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (0.4) || RETURN",
          "displayLines": "0.4",
          "constants": [],
          "variables": [
            0.4
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
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{ST and Blast}}"
      },
      "variableName": "S03_Alive_Count",
      "livingTargets": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "S03_Alive_Count",
        "compareType": ">=",
        "value2": 1
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{ST and Blast}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Living State",
                  "state": "Mask_AliveOnly",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              }
            ]
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "Damage": {
              "operator": "Variables[0] (SkillP01_FinalDamage) || Variables[1] (0.75) || MUL || Variables[2] (S03_Alive_Count) || DIV || RETURN",
              "displayLines": "((SkillP01_FinalDamage * 0.75) / S03_Alive_Count)",
              "constants": [],
              "variables": [
                "SkillP01_FinalDamage",
                0.75,
                "S03_Alive_Count"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          },
          "isConvertedDMG": true
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          },
          "variableName": "S03_Alive_Count"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "Damage": {
              "operator": "Variables[0] (SkillP01_FinalDamage) || Variables[1] (0.75) || MUL || Variables[2] (S03_Alive_Count) || DIV || RETURN",
              "displayLines": "((SkillP01_FinalDamage * 0.75) / S03_Alive_Count)",
              "constants": [],
              "variables": [
                "SkillP01_FinalDamage",
                0.75,
                "S03_Alive_Count"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          },
          "isConvertedDMG": true
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "variableName": "Insert_Count",
      "value": 1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Rank06_RecordedTotal",
          "value": {
            "operator": "Variables[0] (SkillP01_TotalDamage) || RETURN",
            "displayLines": "SkillP01_TotalDamage",
            "constants": [],
            "variables": [
              "SkillP01_TotalDamage"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Rank06_RecordedFinal",
          "value": {
            "operator": "Variables[0] (SkillP01_FinalDamage) || RETURN",
            "displayLines": "SkillP01_FinalDamage",
            "constants": [],
            "variables": [
              "SkillP01_FinalDamage"
            ]
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SkillP01_TotalDamage",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "SkillP01_FinalDamage",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "SkillP01_TotalDamage",
          "value": {
            "operator": "Variables[0] (Rank06_RecordedTotal) || Variables[1] (0.2) || MUL || RETURN",
            "displayLines": "(Rank06_RecordedTotal * 0.2)",
            "constants": [],
            "variables": [
              "Rank06_RecordedTotal",
              0.2
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SkillP01_FinalDamage",
          "value": {
            "operator": "Variables[0] (Rank06_RecordedFinal) || Variables[1] (0.2) || MUL || RETURN",
            "displayLines": "(Rank06_RecordedFinal * 0.2)",
            "constants": [],
            "variables": [
              "Rank06_RecordedFinal",
              0.2
            ]
          }
        }
      ]
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (SkillP01_FinalDamage) || Constants[0] (1000) || DIV || RETURN",
        "displayLines": "(SkillP01_FinalDamage / 1000)",
        "constants": [
          1000
        ],
        "variables": [
          "SkillP01_FinalDamage"
        ]
      },
      "maximum": {
        "operator": "Constants[0] (99999) || RETURN",
        "displayLines": "99999",
        "constants": [
          99999
        ],
        "variables": []
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 4,
      "cooldown": 0
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": []
}