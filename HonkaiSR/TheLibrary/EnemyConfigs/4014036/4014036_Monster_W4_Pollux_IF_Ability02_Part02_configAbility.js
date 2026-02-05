const configAbility = {
  "fileName": "4014036_Monster_W4_Pollux_IF_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Define Custom Variable with Team Count",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "variableName": "_PlayerNum",
      "livingTargets": true
    },
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
        "Damage": {
          "operator": "Variables[0] ({[Skill02[0]]}) || Variables[1] (_PlayerNum) || DIV || RETURN",
          "displayLines": "({[Skill02[0]]} / _PlayerNum)",
          "constants": [],
          "variables": [
            "{[Skill02[0]]}",
            "_PlayerNum"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "100%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "Enemy_W4_Pollux_IF_Strengthen[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill02[1]]}) || MUL || RETURN",
                  "displayLines": "(_MaxHP * {[Skill02[1]]})",
                  "constants": [],
                  "variables": [
                    "_MaxHP",
                    "{[Skill02[1]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK"
              }
            }
          ]
        }
      ]
    },
    "Trigger: Attack End",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "modifier": "Enemy_W4_Pollux_IF_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
        "invertCondition": true
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "Enemy_W4_Pollux_IF_ThirstBlood[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
          "valuePerStack": {
            "MDF_DamagePercentage": {
              "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
              "displayLines": "{[SkillP02[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[1]]}"
              ]
            },
            "MDF_DamageHpAddedRatio": {
              "operator": "Variables[0] ({[SkillP02[0]]}) || RETURN",
              "displayLines": "{[SkillP02[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP02[0]]}"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb"
    },
    "Trigger: Ability End"
  ],
  "references": []
}