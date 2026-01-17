const configAbility = {
  "fileName": "Jingliu_Advanced_Jingliu_Ability03_Part02",
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
          "modifier": "Advanced_Jingliu_Eidolon1_CriticalDamage[<span class=\"descriptionNumberColor\">Moon Crashes Tianguan Gate</span>]",
          "duration": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.36) || RETURN",
              "displayLines": "0.36",
              "constants": [],
              "variables": [
                0.36
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
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Ice",
        "Damage": {
          "operator": "Variables[0] (1.8) || RETURN",
          "displayLines": "1.8",
          "constants": [],
          "variables": [
            1.8
          ]
        },
        "dmgFormula": "Max HP Scaling",
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
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
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
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
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
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": null,
            "Tags": null
          }
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
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
              ]
            },
            "dmgFormula": "Max HP Scaling",
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "AdvancedJingliu_Attack_Transfer"
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
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Jingliu_FullMoonFlag",
            "compareType": ">",
            "value2": {
              "operator": "Variables[0] (Jingliu_FullMoonFlagMax) || RETURN",
              "displayLines": "Jingliu_FullMoonFlagMax",
              "constants": [],
              "variables": [
                "Jingliu_FullMoonFlagMax"
              ]
            },
            "contextScope": "ContextCaster"
          },
          "passed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Overwrite Value",
              "variableName": "Jingliu_FullMoonFlag",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (Jingliu_FullMoonFlagMax) || RETURN",
                "displayLines": "Jingliu_FullMoonFlagMax",
                "constants": [],
                "variables": [
                  "Jingliu_FullMoonFlagMax"
                ]
              }
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (Jingliu_FullMoonFlag) || RETURN",
            "displayLines": "Jingliu_FullMoonFlag",
            "constants": [],
            "variables": [
              "Jingliu_FullMoonFlag"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (Jingliu_FullMoonFlagMax) || RETURN",
            "displayLines": "Jingliu_FullMoonFlagMax",
            "constants": [],
            "variables": [
              "Jingliu_FullMoonFlagMax"
            ]
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
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (Jingliu_MoonFlag) || RETURN",
            "displayLines": "Jingliu_MoonFlag",
            "constants": [],
            "variables": [
              "Jingliu_MoonFlag"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
            "displayLines": "Jingliu_MoonFlagMax",
            "constants": [],
            "variables": [
              "Jingliu_MoonFlagMax"
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        }
      ]
    },
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
          "modifier": "Advanced_Jingliu_Eidolon2[<span class=\"descriptionNumberColor\">Crescent Shadows Qixing Dipper</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            }
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}