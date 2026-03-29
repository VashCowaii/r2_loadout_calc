const configAbility = {
  "fileName": "4015020_Monster_W4_DawnsEye_01_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "maxTargets": 1,
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": {
              "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
              "displayLines": "PartEntity3_MonsterID",
              "constants": [],
              "variables": [
                "PartEntity3_MonsterID"
              ]
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "flagNames": []
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Reset Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Exit Broken-State",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Player Team All}}"
      },
      "variableName": "LightTeamCount",
      "livingTargets": true
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "DamageFlat": {
          "operator": "Variables[0] ({[Skill02P3[0]]}) || Variables[1] (BaseAttack) || MUL || Variables[2] (TotalDamageRatio) || MUL || Variables[3] (LightTeamCount) || DIV || Constants[0] (6) || DIV || RETURN",
          "displayLines": "(((({[Skill02P3[0]]} * BaseAttack) * TotalDamageRatio) / LightTeamCount) / 6)",
          "constants": [
            6
          ],
          "variables": [
            "{[Skill02P3[0]]}",
            "BaseAttack",
            "TotalDamageRatio",
            "LightTeamCount"
          ]
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "16.666667%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "DamageFlat": {
          "operator": "Variables[0] ({[Skill02P3[0]]}) || Variables[1] (BaseAttack) || MUL || Variables[2] (TotalDamageRatio) || MUL || Variables[3] (LightTeamCount) || DIV || Constants[0] (6) || DIV || RETURN",
          "displayLines": "(((({[Skill02P3[0]]} * BaseAttack) * TotalDamageRatio) / LightTeamCount) / 6)",
          "constants": [
            6
          ],
          "variables": [
            "{[Skill02P3[0]]}",
            "BaseAttack",
            "TotalDamageRatio",
            "LightTeamCount"
          ]
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "16.666667%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "DamageFlat": {
          "operator": "Variables[0] ({[Skill02P3[0]]}) || Variables[1] (BaseAttack) || MUL || Variables[2] (TotalDamageRatio) || MUL || Variables[3] (LightTeamCount) || DIV || Constants[0] (6) || DIV || RETURN",
          "displayLines": "(((({[Skill02P3[0]]} * BaseAttack) * TotalDamageRatio) / LightTeamCount) / 6)",
          "constants": [
            6
          ],
          "variables": [
            "{[Skill02P3[0]]}",
            "BaseAttack",
            "TotalDamageRatio",
            "LightTeamCount"
          ]
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "16.666667%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "DamageFlat": {
          "operator": "Variables[0] ({[Skill02P3[0]]}) || Variables[1] (BaseAttack) || MUL || Variables[2] (TotalDamageRatio) || MUL || Variables[3] (LightTeamCount) || DIV || Constants[0] (6) || DIV || RETURN",
          "displayLines": "(((({[Skill02P3[0]]} * BaseAttack) * TotalDamageRatio) / LightTeamCount) / 6)",
          "constants": [
            6
          ],
          "variables": [
            "{[Skill02P3[0]]}",
            "BaseAttack",
            "TotalDamageRatio",
            "LightTeamCount"
          ]
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "16.666667%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "DamageFlat": {
          "operator": "Variables[0] ({[Skill02P3[0]]}) || Variables[1] (BaseAttack) || MUL || Variables[2] (TotalDamageRatio) || MUL || Variables[3] (LightTeamCount) || DIV || Constants[0] (6) || DIV || RETURN",
          "displayLines": "(((({[Skill02P3[0]]} * BaseAttack) * TotalDamageRatio) / LightTeamCount) / 6)",
          "constants": [
            6
          ],
          "variables": [
            "{[Skill02P3[0]]}",
            "BaseAttack",
            "TotalDamageRatio",
            "LightTeamCount"
          ]
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "16.666667%"
      }
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Imaginary",
        "DamageFlat": {
          "operator": "Variables[0] ({[Skill02P3[0]]}) || Variables[1] (BaseAttack) || MUL || Variables[2] (TotalDamageRatio) || MUL || Variables[3] (LightTeamCount) || DIV || Constants[0] (6) || DIV || RETURN",
          "displayLines": "(((({[Skill02P3[0]]} * BaseAttack) * TotalDamageRatio) / LightTeamCount) / 6)",
          "constants": [
            6
          ],
          "variables": [
            "{[Skill02P3[0]]}",
            "BaseAttack",
            "TotalDamageRatio",
            "LightTeamCount"
          ]
        },
        "dmgFormulaFinal": "Converted DMG Base",
        "Toughness": null,
        "Tags": null,
        "EnergyGainPercent": "16.666667%"
      }
    },
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "AIFlag",
        "compareType": "=",
        "value2": 8
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1186573263\">W4_DawnsEye_01_TargetChange</a>"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}