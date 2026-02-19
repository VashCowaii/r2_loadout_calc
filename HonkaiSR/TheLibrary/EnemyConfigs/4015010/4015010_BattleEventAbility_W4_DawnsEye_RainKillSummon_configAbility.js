const configAbility = {
  "fileName": "4015010_BattleEventAbility_W4_DawnsEye_RainKillSummon",
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
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Thunder_CountDark",
        "compareType": ">",
        "value2": {
          "operator": "Variables[0] (ThunderKillCount) || Variables[1] ({[SkillP02[4]]}) || MUL || RETURN",
          "displayLines": "(ThunderKillCount * {[SkillP02[4]]})",
          "constants": [],
          "variables": [
            "ThunderKillCount",
            "{[SkillP02[4]]}"
          ]
        }
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
                  "operator": "Variables[0] ({[SkillP02[1]]}) || Variables[1] (ThunderKillCount) || Variables[2] ({[SkillP02[4]]}) || MUL || Constants[0] (3) || DIV || MUL || RETURN",
                  "displayLines": "({[SkillP02[1]]} * ((ThunderKillCount * {[SkillP02[4]]}) / 3))",
                  "constants": [
                    3
                  ],
                  "variables": [
                    "{[SkillP02[1]]}",
                    "ThunderKillCount",
                    "{[SkillP02[4]]}"
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
                  "operator": "Variables[0] ({[SkillP02[1]]}) || Variables[1] (Thunder_CountDark) || MUL || Constants[0] (3) || DIV || RETURN",
                  "displayLines": "(({[SkillP02[1]]} * Thunder_CountDark) / 3)",
                  "constants": [
                    3
                  ],
                  "variables": [
                    "{[SkillP02[1]]}",
                    "Thunder_CountDark"
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
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "Thunder_CountDark",
      "value": {
        "operator": "Constants[0] (0) || Variables[0] (ThunderKillCount) || Variables[1] ({[SkillP02[4]]}) || MUL || SUB || RETURN",
        "displayLines": "(0 - (ThunderKillCount * {[SkillP02[4]]}))",
        "constants": [
          0
        ],
        "variables": [
          "ThunderKillCount",
          "{[SkillP02[4]]}"
        ]
      },
      "max": 999
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "ThunderKillCount",
      "value": 0
    }
  ],
  "references": []
}