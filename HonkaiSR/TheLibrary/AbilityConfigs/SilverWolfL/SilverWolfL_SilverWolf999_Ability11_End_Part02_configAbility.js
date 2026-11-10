const configAbility = {
  "fileName": "SilverWolfL_SilverWolf999_Ability11_End_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable with Team Count",
      "variableName": "ADF_TargetCount",
      "scope": "ContextAbility",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}.[[living]]"
      },
      "living": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "flagName": "ElationEchoPoint"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}.[[living]]"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageElation": {
                  "displayLines": "1"
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": {
                  "displayLines": "AOE Toughness Value"
                },
                "Tags": null,
                "attackType": "Elation DMG"
              },
              "distributeEqually": true
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "DamageElation": {
                  "displayLines": "1"
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": {
                  "displayLines": "AOE Toughness Value"
                },
                "Tags": null,
                "attackType": "Elation DMG"
              },
              "distributeEqually": true
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemies Still Alive",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}.[[living]]"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "displayLines": "1"
                },
                "Toughness": {
                  "displayLines": "AOE Toughness Value"
                },
                "Tags": null,
                "attackType": "Basic ATK"
              },
              "distributeEqually": true
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "displayLines": "1"
                },
                "Toughness": {
                  "displayLines": "AOE Toughness Value"
                },
                "Tags": null,
                "attackType": "Basic ATK"
              },
              "distributeEqually": true
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Skip Death Handling",
    {
      "name": "IF",
      "conditions": {
        "name": "Enemies Still Alive",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        }
      },
      "failed": [
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team Entity}}"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1024723850\">_M_SilverWolf999_IsDuringAbility11</a>"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(UltraAttackCount - 1)"
      },
      "variableName": "UltraAttackCount"
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}