const configAbility = {
  "fileName": "Gepard_Gepard_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "displayLines": "(2 * 0.15)"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.15)"
        },
        "Tags": null,
        "EnergyGainPercent": "15%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "displayLines": "(2 * 0.35)"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.35)"
        },
        "Tags": null,
        "EnergyGainPercent": "35%"
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
        "DamageType": "Ice",
        "Damage": {
          "displayLines": "(2 * 0.5)"
        },
        "Toughness": {
          "displayLines": "(ST Toughness Value * 0.5)"
        },
        "Tags": null,
        "EnergyGainPercent": "50%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
      "duration": {
        "displayLines": "1"
      },
      "baseChance": {
        "displayLines": "(0.65 + MDF_Rank01_P1_Chance)"
      },
      "valuePerStack": {
        "Modifier_Frozen_DamagePercentage": {
          "displayLines": "0.6"
        }
      },
      "success": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-367770919\">Gepard_Eidolon2_Delay</a>",
              "valuePerStack": {
                "MDF_SPD": {
                  "displayLines": "0.2"
                },
                "MDF_Lifetime": {
                  "displayLines": "1"
                }
              }
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}