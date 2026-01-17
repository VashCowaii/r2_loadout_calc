const configAbility = {
  "fileName": "Seele_Seele_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Seele_Passive_DamageUp[<span class=\"descriptionNumberColor\">Amplification</span>]",
      "duration": {
        "operator": "Variables[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [],
        "variables": [
          1
        ]
      },
      "valuePerStack": {
        "seele_dmg_percent": {
          "operator": "Variables[0] (0.8) || RETURN",
          "displayLines": "0.8",
          "constants": [],
          "variables": [
            0.8
          ]
        },
        "MDF_Penetrate": {
          "operator": "Variables[0] (0.2) || RETURN",
          "displayLines": "0.2",
          "constants": [],
          "variables": [
            0.2
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
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] (4.25) || RETURN",
          "displayLines": "4.25",
          "constants": [],
          "variables": [
            4.25
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
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Seele_Eidolon6_Flag[<span class=\"descriptionNumberColor\">Butterfly Flurry</span>]",
          "duration": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "valuePerStack": {
            "MDF_Eidolon6_Damage": {
              "operator": "Variables[0] (4.25) || Variables[1] (0.15) || MUL || RETURN",
              "displayLines": "(4.25 * 0.15)",
              "constants": [],
              "variables": [
                4.25,
                0.15
              ]
            }
          }
        }
      ]
    },
    "Trigger: Skip Death Handling",
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Seele_Eidolon6_Flag[<span class=\"descriptionNumberColor\">Butterfly Flurry</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (MDF_Rank06_Damage) || RETURN",
                  "displayLines": "MDF_Rank06_Damage",
                  "constants": [],
                  "variables": [
                    "MDF_Rank06_Damage"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Additional DMG"
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Rank06_Damage"
      ],
      "latentQueue": [],
      "description": "On a hit, receives an extra Quantum DMG from Seele.",
      "type": "Debuff",
      "effectName": "Butterfly Flurry",
      "statusName": "Butterfly Flurry"
    }
  ]
}