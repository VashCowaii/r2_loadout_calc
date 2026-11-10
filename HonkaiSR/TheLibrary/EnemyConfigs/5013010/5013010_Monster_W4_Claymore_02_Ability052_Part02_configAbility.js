const configAbility = {
  "fileName": "5013010_Monster_W4_Claymore_02_Ability052_Part02",
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
          "variableName": "Index_Caster",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Define Custom Variable with Lineup Position",
          "variableName": "Index_Target",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Index_Caster",
            "compareType": ">",
            "value2": {
              "displayLines": "Index_Target"
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
                  "displayLines": "{[Skill05[5]]}"
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "displayLines": "{[Skill05[6]]}"
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
                  "displayLines": "{[Skill05[5]]}"
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": {
                  "displayLines": "{[Skill05[6]]}"
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
            "displayLines": "{[Skill05[2]]}"
          },
          "duration": {
            "displayLines": "{[Skill05[3]]}"
          },
          "baseChance": {
            "displayLines": "{[Skill05[1]]}"
          }
        }
      ]
    },
    {
      "name": "Adjust Team Punchline Value",
      "value": {
        "displayLines": "{[Skill05[7]]}"
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
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}