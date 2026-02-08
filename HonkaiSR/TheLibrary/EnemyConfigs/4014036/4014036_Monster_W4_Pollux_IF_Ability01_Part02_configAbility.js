const configAbility = {
  "fileName": "4014036_Monster_W4_Pollux_IF_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "AttackScaling": {
        "DamageType": "Quantum",
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
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
      },
      "passed": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "_MaxHP",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "DamageFlat": {
              "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill01[1]]}) || MUL || RETURN",
              "displayLines": "(_MaxHP * {[Skill01[1]]})",
              "constants": [],
              "variables": [
                "_MaxHP",
                "{[Skill01[1]]}"
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
    },
    "Trigger: Attack End",
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-976528853\">Enemy_W4_Pollux_IF_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
            "invertCondition": true
          },
          {
            "name": "Is Part Of Team",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "team": "Player Team"
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-976528853\">Enemy_W4_Pollux_IF_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
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
      "functionName": "<a class=\"gTempYellow\" id=\"1601406944\">TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb_FX</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-766570299\">TaskList_Monster_W4_Pollux_IF_Strengthen_EggAbsorb</a>"
    },
    "Trigger: Ability End"
  ],
  "references": []
}