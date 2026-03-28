const configAbility = {
  "fileName": "4015011_BattleEventAbility_W4_DawnsEye_RainSKill04Result",
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
        "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"185030676\">Enemy_W4_DawnsEye_ThunderAttackPhase02</a>"
        }
      ]
    },
    "Deleted bullshit",
    {
      "name": "Define Custom Variable",
      "variableName": "Thunder_CountTotal",
      "value": {
        "operator": "Variables[0] (Thunder_CountLight) || RETURN",
        "displayLines": "Thunder_CountLight",
        "constants": [],
        "variables": [
          "Thunder_CountLight"
        ]
      }
    },
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "phase": "Thunder"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Thunder_CountLight",
        "compareType": ">",
        "value2": 5
      },
      "passed": [
        {
          "name": "Looped Event",
          "maxLoops": 3,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[SkillP02[1]]}) || Variables[1] (Thunder_CountTotal) || Constants[0] (6) || DIV || MUL || RETURN",
                  "displayLines": "({[SkillP02[1]]} * (Thunder_CountTotal / 6))",
                  "constants": [
                    6
                  ],
                  "variables": [
                    "{[SkillP02[1]]}",
                    "Thunder_CountTotal"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": 3,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[SkillP02[1]]}) || Variables[1] (Thunder_CountTotal) || Constants[0] (6) || DIV || MUL || RETURN",
                  "displayLines": "({[SkillP02[1]]} * (Thunder_CountTotal / 6))",
                  "constants": [
                    6
                  ],
                  "variables": [
                    "{[SkillP02[1]]}",
                    "Thunder_CountTotal"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Looped Event",
          "maxLoops": 3,
          "Event": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "operator": "Variables[0] ({[SkillP02[1]]}) || Variables[1] (Thunder_CountLight) || MUL || Constants[0] (3) || DIV || RETURN",
                  "displayLines": "(({[SkillP02[1]]} * Thunder_CountLight) / 3)",
                  "constants": [
                    3
                  ],
                  "variables": [
                    "{[SkillP02[1]]}",
                    "Thunder_CountLight"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Change Character Transformation",
      "target": {
        "name": "Target Name",
        "target": "{{Modifier Holder}}"
      },
      "phase": "Default"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Thunder_CountLight",
      "value": 0
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}