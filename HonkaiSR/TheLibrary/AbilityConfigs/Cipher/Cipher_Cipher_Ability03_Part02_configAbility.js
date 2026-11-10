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
      "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"291142985\">Cipher_BpKuoSan</a>[<span class=\"descriptionNumberColor\">Patron</span>]",
      "valuePerStack": {}
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "MDF_CasterAttack",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Snapshot Stat Source}}"
      },
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
          "displayLines": "1.2"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value - Blast Toughness Value)"
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
        "DamageType": "Null Type",
        "DamageFlat": {
          "displayLines": "((SkillP01_FinalDamage * 0.2) * 0.25)"
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
        "DamageType": "Null Type",
        "DamageFlat": {
          "displayLines": "((SkillP01_FinalDamage * 0.2) * 0.25)"
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
        "DamageType": "Null Type",
        "DamageFlat": {
          "displayLines": "((SkillP01_FinalDamage * 0.2) * 0.25)"
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
        "DamageType": "Null Type",
        "DamageFlat": {
          "displayLines": "((SkillP01_FinalDamage * 0.2) * 0.25)"
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
        "DamageType": "Null Type",
        "DamageFlat": {
          "displayLines": "((SkillP01_FinalDamage * 0.2) * 0.25)"
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
          "displayLines": "0.4"
        },
        "Toughness": {
          "displayLines": "Blast Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Define Custom Variable with Team Count",
      "variableName": "S03_Alive_Count",
      "readTarget": {
        "name": "Target Name",
        "target": "{{ST and Blast}}"
      },
      "living": true
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
            "TargetList": [
              {
                "name": "Target Name",
                "target": "{{ST and Blast}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Living State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "livingState": "Mask_AliveOnly"
                }
              }
            ]
          },
          "AttackScaling": {
            "DamageType": "Null Type",
            "DamageFlat": {
              "displayLines": "((SkillP01_FinalDamage * 0.75) / S03_Alive_Count)"
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
          "variableName": "S03_Alive_Count",
          "readTarget": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{ST and Blast}}"
          },
          "AttackScaling": {
            "DamageType": "Null Type",
            "DamageFlat": {
              "displayLines": "((SkillP01_FinalDamage * 0.75) / S03_Alive_Count)"
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
      "value": 1,
      "variableName": "Insert_Count"
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
          "value": {
            "displayLines": "SkillP01_TotalDamage"
          },
          "variableName": "Rank06_RecordedTotal"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "SkillP01_FinalDamage"
          },
          "variableName": "Rank06_RecordedFinal"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "SkillP01_TotalDamage"
    },
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "SkillP01_FinalDamage"
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
          "value": {
            "displayLines": "(Rank06_RecordedTotal * 0.2)"
          },
          "variableName": "SkillP01_TotalDamage"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(Rank06_RecordedFinal * 0.2)"
          },
          "variableName": "SkillP01_FinalDamage"
        }
      ]
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "displayLines": "(SkillP01_FinalDamage / 1000)"
      },
      "maximum": {
        "displayLines": "99999"
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 4,
      "cooldown": 0
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}