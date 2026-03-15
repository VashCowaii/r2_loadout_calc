const configAbility = {
  "fileName": "5013011_Monster_W4_Claymore_02_Ability052_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-491236403\">W4_Claymore_02_BattleScore2</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Lineup Position",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Index_Caster"
        },
        {
          "name": "Define Custom Variable with Lineup Position",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "Index_Target"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Index_Caster",
            "compareType": ">",
            "value2": {
              "operator": "Variables[0] (Index_Target) || RETURN",
              "displayLines": "Index_Target",
              "constants": [],
              "variables": [
                "Index_Target"
              ]
            }
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[5]]}) || RETURN",
                  "displayLines": "{[Skill05[5]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[5]]}"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] ({[Skill05[6]]}) || RETURN",
                  "displayLines": "{[Skill05[6]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[6]]}"
                  ]
                },
                "Tags": null
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Imaginary",
                "Damage": {
                  "operator": "Variables[0] ({[Skill05[5]]}) || RETURN",
                  "displayLines": "{[Skill05[5]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[5]]}"
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "operator": "Variables[0] ({[Skill05[6]]}) || RETURN",
                  "displayLines": "{[Skill05[6]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[6]]}"
                  ]
                },
                "Tags": null
              }
            }
          ]
        },
        "Trigger: Attack End"
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "searchRandom": true,
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "<=",
        "value2": 3
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target List}}.[[randomize]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"604474914\">MModifier_Monster_W4_Claymore_02_Ability05_Status</a>[<span class=\"descriptionNumberColor\">Revelry</span>]",
          "maxTargetCount": {
            "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
            "displayLines": "{[Skill05[2]]}",
            "constants": [],
            "variables": [
              "{[Skill05[2]]}"
            ]
          },
          "duration": {
            "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
            "displayLines": "{[Skill05[3]]}",
            "constants": [],
            "variables": [
              "{[Skill05[3]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
            "displayLines": "{[Skill05[1]]}",
            "constants": [],
            "variables": [
              "{[Skill05[1]]}"
            ]
          }
        }
      ]
    },
    {
      "name": "Adjust Team Punchline Value",
      "value": {
        "operator": "Variables[0] ({[Skill05[7]]}) || RETURN",
        "displayLines": "{[Skill05[7]]}",
        "constants": [],
        "variables": [
          "{[Skill05[7]]}"
        ]
      },
      "adjustment": "Add"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1907385221\">MModifier_Monster_W4_Claymore_02_Elation</a>[<span class=\"descriptionNumberColor\">Frenzied Rendition</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": []
}