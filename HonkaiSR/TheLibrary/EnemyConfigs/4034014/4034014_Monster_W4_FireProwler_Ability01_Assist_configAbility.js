const configAbility = {
  "fileName": "4034014_Monster_W4_FireProwler_Ability01_Assist",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-1484368126\">Enemy_W4_FireProwler_10_NoMask</a>"
      }
    },
    "Deleted bullshit",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
          "displayLines": "{[Skill01[0]]}",
          "constants": [],
          "variables": [
            "{[Skill01[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
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
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
          "displayLines": "{[Skill01[1]]}",
          "constants": [],
          "variables": [
            "{[Skill01[1]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "Skill01_Assist_Damage"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "Skill01_Assist_Damage_Adjoin"
    },
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2020453285\">Enemy_W4_FireProwler_01_DamageValue</a>",
      "variable": "MDF_Skill01",
      "target2": null,
      "variable2": "Skill01_Assist_Damage"
    },
    {
      "name": "Define Custom Variable with Copy",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2020453285\">Enemy_W4_FireProwler_01_DamageValue</a>",
      "variable": "MDF_Skill01_Adjoin",
      "target2": null,
      "variable2": "Skill01_Assist_Damage_Adjoin"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          {
            "name": "Enemy ID",
            "ID": 4034017,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Flame Reaver of the Deepest Dark",
            "isBaseCompare": true,
            "invertCondition": true
          },
          {
            "name": "Compare: Variable",
            "value1": "Skill01_AssistCount",
            "compareType": "=",
            "value2": 1
          }
        ]
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (Skill01_Assist_Damage) || RETURN",
              "displayLines": "Skill01_Assist_Damage",
              "constants": [],
              "variables": [
                "Skill01_Assist_Damage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (Skill01_Assist_Damage_Adjoin) || RETURN",
              "displayLines": "Skill01_Assist_Damage_Adjoin",
              "constants": [],
              "variables": [
                "Skill01_Assist_Damage_Adjoin"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": ">",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4034017,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Flame Reaver of the Deepest Dark",
                "isBaseCompare": true
              }
            ]
          },
          {
            "name": "Compare: Variable",
            "value1": "Skill01_AssistCount",
            "compareType": "=",
            "value2": 1
          }
        ]
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (Skill01_Assist_Damage) || RETURN",
              "displayLines": "Skill01_Assist_Damage",
              "constants": [],
              "variables": [
                "Skill01_Assist_Damage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (Skill01_Assist_Damage_Adjoin) || RETURN",
              "displayLines": "Skill01_Assist_Damage_Adjoin",
              "constants": [],
              "variables": [
                "Skill01_Assist_Damage_Adjoin"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": ">",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4034017,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Flame Reaver of the Deepest Dark",
                "isBaseCompare": true
              }
            ]
          },
          {
            "name": "Compare: Variable",
            "value1": "Skill01_AssistCount",
            "compareType": "=",
            "value2": 2
          }
        ]
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (Skill01_Assist_Damage) || RETURN",
              "displayLines": "Skill01_Assist_Damage",
              "constants": [],
              "variables": [
                "Skill01_Assist_Damage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (Skill01_Assist_Damage_Adjoin) || RETURN",
              "displayLines": "Skill01_Assist_Damage_Adjoin",
              "constants": [],
              "variables": [
                "Skill01_Assist_Damage_Adjoin"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          {
            "name": "Enemy ID",
            "ID": 4034017,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Flame Reaver of the Deepest Dark",
            "isBaseCompare": true,
            "invertCondition": true
          },
          {
            "name": "Compare: Variable",
            "value1": "Skill01_AssistCount",
            "compareType": "=",
            "value2": 2
          }
        ]
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (Skill01_Assist_Damage) || RETURN",
              "displayLines": "Skill01_Assist_Damage",
              "constants": [],
              "variables": [
                "Skill01_Assist_Damage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (Skill01_Assist_Damage_Adjoin) || RETURN",
              "displayLines": "Skill01_Assist_Damage_Adjoin",
              "constants": [],
              "variables": [
                "Skill01_Assist_Damage_Adjoin"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": ">",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4034017,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Flame Reaver of the Deepest Dark",
                "isBaseCompare": true
              }
            ]
          },
          {
            "name": "Compare: Variable",
            "value1": "Skill01_AssistCount",
            "compareType": "=",
            "value2": 3
          }
        ]
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (Skill01_Assist_Damage) || RETURN",
              "displayLines": "Skill01_Assist_Damage",
              "constants": [],
              "variables": [
                "Skill01_Assist_Damage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (Skill01_Assist_Damage_Adjoin) || RETURN",
              "displayLines": "Skill01_Assist_Damage_Adjoin",
              "constants": [],
              "variables": [
                "Skill01_Assist_Damage_Adjoin"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": ">",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4034017,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Flame Reaver of the Deepest Dark",
                "isBaseCompare": true
              }
            ]
          },
          {
            "name": "Compare: Variable",
            "value1": "Skill01_AssistCount",
            "compareType": "=",
            "value2": 4
          }
        ]
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (Skill01_Assist_Damage) || RETURN",
              "displayLines": "Skill01_Assist_Damage",
              "constants": [],
              "variables": [
                "Skill01_Assist_Damage"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (Skill01_Assist_Damage_Adjoin) || RETURN",
              "displayLines": "Skill01_Assist_Damage_Adjoin",
              "constants": [],
              "variables": [
                "Skill01_Assist_Damage_Adjoin"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        }
      ]
    },
    "Trigger: Attack End"
  ],
  "references": []
}