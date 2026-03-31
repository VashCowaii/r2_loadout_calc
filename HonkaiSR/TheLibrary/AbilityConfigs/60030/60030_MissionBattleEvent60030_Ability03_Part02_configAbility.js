const configAbility = {
  "fileName": "60030_MissionBattleEvent60030_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "#CL_ViewMode",
      "value": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_FirstBE",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)}} + {{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"895432020\">Enemy_W4_IronTombCore_Main_DisableAction</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1254643304\">Enemy_W4_IronTombCore_Main_P1_DamageReduceRatio</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Irontomb: Part 1}}"
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Irontomb: Part 2}}"
        }
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Core}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1868461228\">Enemy_W4_IronTombCorePart_01_Ability02_Charge</a>"
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Irontomb: Core}}"
        }
      }
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Irontomb: Core}}"
      },
      "variableName": "_WorldErosion",
      "value": {
        "operator": "Variables[0] ({[Skill03[1]]}) || INVERT || Constants[0] (100) || MUL || RETURN",
        "displayLines": "(-{[Skill03[1]]} * 100)",
        "constants": [
          100
        ],
        "variables": [
          "{[Skill03[1]]}"
        ]
      },
      "max": 100
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "_FirstBE",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "healPercent": 1,
          "formula": "Heal from Target MaxHP"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_FirstBE",
          "value": 0
        }
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "variableName": "_MaxHp",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target",
        "target": {
          "name": "Target Name",
          "target": "{{Ability Target(ST)}}"
        },
        "target2": {
          "name": "Target Name",
          "target": "{{Irontomb: Core}}"
        }
      },
      "passed": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "DamageFlat": {
              "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (3) || DIV || RETURN",
              "displayLines": "((_MaxHp * {[Skill03[0]]}) / 3)",
              "constants": [
                3
              ],
              "variables": [
                "_MaxHp",
                "{[Skill03[0]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "Ultimate"
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
            "DamageFlat": {
              "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (3) || DIV || RETURN",
              "displayLines": "((_MaxHp * {[Skill03[0]]}) / 3)",
              "constants": [
                3
              ],
              "variables": [
                "_MaxHp",
                "{[Skill03[0]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "Ultimate"
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
            "DamageFlat": {
              "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (3) || DIV || RETURN",
              "displayLines": "((_MaxHp * {[Skill03[0]]}) / 3)",
              "constants": [
                3
              ],
              "variables": [
                "_MaxHp",
                "{[Skill03[0]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "Ultimate"
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
          "AttackScaling": {
            "DamageType": "Ice",
            "DamageFlat": {
              "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[2]]}) || MUL || Constants[0] (3) || DIV || RETURN",
              "displayLines": "((_MaxHp * {[Skill03[2]]}) / 3)",
              "constants": [
                3
              ],
              "variables": [
                "_MaxHp",
                "{[Skill03[2]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "Ultimate"
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
            "DamageFlat": {
              "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[2]]}) || MUL || Constants[0] (3) || DIV || RETURN",
              "displayLines": "((_MaxHp * {[Skill03[2]]}) / 3)",
              "constants": [
                3
              ],
              "variables": [
                "_MaxHp",
                "{[Skill03[2]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "Ultimate"
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
            "DamageFlat": {
              "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[2]]}) || MUL || Constants[0] (3) || DIV || RETURN",
              "displayLines": "((_MaxHp * {[Skill03[2]]}) / 3)",
              "constants": [
                3
              ],
              "variables": [
                "_MaxHp",
                "{[Skill03[2]]}"
              ]
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "Ultimate"
          }
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Irontomb: Core}}"
        },
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 1
      }
    },
    "Trigger: Ability End"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}