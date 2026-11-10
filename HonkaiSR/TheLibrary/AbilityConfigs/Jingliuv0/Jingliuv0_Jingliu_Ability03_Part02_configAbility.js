const configAbility = {
  "fileName": "Jingliuv0_Jingliu_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1949094753\">Jingliu_Eidolon1_CriticalDamage</a>[<span class=\"descriptionNumberColor\">Moon Crashes Tianguan Gate</span>]",
          "duration": {
            "displayLines": "1"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.24"
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
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "displayLines": "3"
        },
        "Toughness": {
          "displayLines": "ST Toughness Value"
        },
        "Tags": null,
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Targets Adjacent(Blast)}}"
            },
            "value1": "TeamCharacterCount",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "displayLines": "1.5"
                },
                "Toughness": {
                  "displayLines": "Blast Toughness Value"
                },
                "Tags": null
              }
            }
          ],
          "failed": [
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
                  "displayLines": "1"
                },
                "Toughness": null,
                "Tags": null
              }
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "1.5"
            },
            "Toughness": {
              "displayLines": "Blast Toughness Value"
            },
            "Tags": null
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1566484434\">MWJingliu_Attack_Transfer</a>"
      },
      "passed": [
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Jingliu_FullMoonFlag",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "displayLines": "1"
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "Jingliu_FullMoonFlag"
          },
          "maximum": {
            "displayLines": "Jingliu_FullMoonFlagMax"
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3,
          "cooldown": 0
        }
      ],
      "failed": [
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Jingliu_MoonFlag",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "displayLines": "1"
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "Jingliu_MoonFlag"
          },
          "maximum": {
            "displayLines": "Jingliu_MoonFlagMax"
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        }
      ]
    },
    "Trigger: Attack End",
    "Trigger: Skip Death Handling",
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
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1760867163\">Jingliu_Eidolon2</a>[<span class=\"descriptionNumberColor\">Crescent Shadows Qixing Dipper</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.8"
            }
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Skill Point User}}"
  }
}