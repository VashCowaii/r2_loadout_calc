const configAbility = {
  "fileName": "Yukong_Yukong_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "NOT",
        "conditions": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1203634791\">Yukong_Passive_BonusCD</a>"
        }
      },
      "passed": [
        {
          "name": "Set Enhanced-State",
          "stateType": "YukongV2"
        }
      ],
      "failed": [
        "Set Enhanced-State"
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "NOT",
        "conditions": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1203634791\">Yukong_Passive_BonusCD</a>"
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1203634791\">Yukong_Passive_BonusCD</a>",
          "duration": {
            "displayLines": "1"
          },
          "valuePerStack": {
            "MDF_AddDamagePercentage": {
              "displayLines": "0.8"
            },
            "MDF_StanceBreakAddedRatio": {
              "displayLines": "1"
            }
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1583329525\">Yukong_Ability01_ShootV2</a>"
        }
      ],
      "failed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1033369969\">Yukong_Ability01_Shoot</a>"
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "whenAdded": [
    {
      "name": "Set Enhanced-State",
      "stateType": "YukongV2"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-566337732\">Yukong_Ability01_Preshow</a>"
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1033369969\">Yukong_Ability01_Shoot</a>",
      "parse": [
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "displayLines": "1"
                },
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1583329525\">Yukong_Ability01_ShootV2</a>",
      "parse": [
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "displayLines": "(1 + 0.8)"
                },
                "HitSplit": 0.2,
                "Toughness": {
                  "displayLines": "(ST Toughness Value * (1 + 1))"
                },
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "displayLines": "(1 + 0.8)"
                },
                "HitSplit": 0.2,
                "Toughness": {
                  "displayLines": "(ST Toughness Value * (1 + 1))"
                },
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "displayLines": "(1 + 0.8)"
                },
                "HitSplit": 0.6,
                "Toughness": {
                  "displayLines": "(ST Toughness Value * (1 + 1))"
                },
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-566337732\">Yukong_Ability01_Preshow</a>",
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Basic ATK",
        "conditions": {
          "name": "Has Modifier",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1203634791\">Yukong_Passive_BonusCD</a>",
          "invertCondition": true
        },
        "multiplier": {
          "displayLines": "(1 + 1)"
        }
      }
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}