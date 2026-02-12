const configAbility = {
  "fileName": "4052011_Monster_W2_Mecha02_02_LocalLegend_DeathRattle_Insert",
  "childAbilityList": [
    "4052011_Monster_W2_Mecha02_02_LocalLegend_DeathRattle_Insert"
  ],
  "skillTrigger": "Skill02",
  "abilityType": "Basic ATK",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "River of Souls' Intolerable Solitude"
    },
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "W2_Mecha02_02_DeathRattle",
      "context": "TargetEntity",
      "value": 1,
      "max": 1
    },
    {
      "name": "Animation Event",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "state": "Die",
      "passed": [
        {
          "name": "Animation Task"
        },
        {
          "name": "Animation Task"
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                  "displayLines": "{[Skill02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[1]]}"
                  ]
                },
                "ToughnessDMGType": {
                  "DamageType": "Ice"
                },
                "Tags": null,
                "attackType": "Basic ATK"
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Manta: Event Target 01}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-643353377\">Enemy_W4_Manta_LocalLegend_Virus_Monster</a>[<span class=\"descriptionNumberColor\">Glacial Erosion</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                "displayLines": "{[Skill02[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[3]]}"
                ]
              },
              "valuePerStack": {
                "MDF_DotHPRatio": {
                  "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                  "displayLines": "{[Skill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[2]]}"
                  ]
                },
                "MDF_DotDamageRatio": {
                  "operator": "Variables[0] (_DotDamageRatio) || RETURN",
                  "displayLines": "_DotDamageRatio",
                  "constants": [],
                  "variables": [
                    "_DotDamageRatio"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}} - {{Manta: Event Target 01}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-643353377\">Enemy_W4_Manta_LocalLegend_Virus_Monster</a>[<span class=\"descriptionNumberColor\">Glacial Erosion</span>]",
              "duration": {
                "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                "displayLines": "{[Skill02[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill02[3]]}"
                ]
              },
              "valuePerStack": {
                "MDF_DotHPRatio": {
                  "operator": "Variables[0] ({[Skill02[4]]}) || RETURN",
                  "displayLines": "{[Skill02[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[4]]}"
                  ]
                },
                "MDF_DotDamageRatio": {
                  "operator": "Variables[0] (_DotDamageRatio) || RETURN",
                  "displayLines": "_DotDamageRatio",
                  "constants": [],
                  "variables": [
                    "_DotDamageRatio"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            },
            "Trigger: Attack End"
          ]
        },
        {
          "name": "Animation Task"
        }
      ]
    }
  ],
  "references": []
}