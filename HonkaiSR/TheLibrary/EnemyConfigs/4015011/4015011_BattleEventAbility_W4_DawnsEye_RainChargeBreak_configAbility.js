const configAbility = {
  "fileName": "4015011_BattleEventAbility_W4_DawnsEye_RainChargeBreak",
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
      "variableName": "Thunder_CountDark",
      "value": {
        "operator": "Variables[0] (Thunder_CountLight) || Variables[1] (Thunder_CountDark) || ADD || RETURN",
        "displayLines": "(Thunder_CountLight + Thunder_CountDark)",
        "constants": [],
        "variables": [
          "Thunder_CountLight",
          "Thunder_CountDark"
        ]
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Thunder_TempCount",
      "value": {
        "operator": "Variables[0] (Thunder_CountDark) || RETURN",
        "displayLines": "Thunder_CountDark",
        "constants": [],
        "variables": [
          "Thunder_CountDark"
        ]
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-526594563\">Modifier_Monster_W4_DawnsEye_WheaterRainChargeBreak</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
              "operator": "Variables[0] ({[SkillP02[1]]}) || Variables[1] (Thunder_TempCount) || Constants[0] (6) || DIV || MUL || RETURN",
              "displayLines": "({[SkillP02[1]]} * (Thunder_TempCount / 6))",
              "constants": [
                6
              ],
              "variables": [
                "{[SkillP02[1]]}",
                "Thunder_TempCount"
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
              "operator": "Variables[0] ({[SkillP02[1]]}) || Variables[1] (Thunder_TempCount) || Constants[0] (6) || DIV || MUL || RETURN",
              "displayLines": "({[SkillP02[1]]} * (Thunder_TempCount / 6))",
              "constants": [
                6
              ],
              "variables": [
                "{[SkillP02[1]]}",
                "Thunder_TempCount"
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
    "Trigger: Attack End",
    {
      "name": "Define Custom Variable",
      "variableName": "Thunder_CountDark",
      "value": 0
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