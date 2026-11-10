const configAbility = {
  "fileName": "Cipher_Cipher_PassiveAbility01_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1467539794\">Cipher_Eidolon1_Bonus</a>[<span class=\"descriptionNumberColor\">Read the Room, Seek the Glee</span>]",
          "duration": {
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.8"
            }
          }
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-315567514\">Cipher_BpKuoSan_Insert_Bonuser</a>"
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "Insert_Exec"
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
          "displayLines": "1.5"
        },
        "HitSplit": 0.2,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": [
          "Cipher's Insert"
        ],
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
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
          "displayLines": "1.5"
        },
        "HitSplit": 0.1,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": [
          "Cipher's Insert"
        ],
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
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
          "displayLines": "1.5"
        },
        "HitSplit": 0.1,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": [
          "Cipher's Insert"
        ],
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
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
          "displayLines": "1.5"
        },
        "HitSplit": 0.6,
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": [
          "Cipher's Insert"
        ],
        "attackType": "Follow-up",
        "EnergyGainPercent": "100%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "value": 0,
      "variableName": "Insert_Exec"
    },
    "Trigger: Skip Death Handling"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}