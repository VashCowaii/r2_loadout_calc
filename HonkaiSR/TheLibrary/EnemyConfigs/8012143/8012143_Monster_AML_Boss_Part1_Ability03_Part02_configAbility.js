const configAbility = {
  "fileName": "8012143_Monster_AML_Boss_Part1_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "ATK Scaling DMG",
      "target": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "AttackScaling": {
        "DamageType": "Imaginary",
        "Damage": {
          "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.5) || MUL || RETURN",
          "displayLines": "({[Skill03[0]]} * 0.5)",
          "constants": [
            0.5
          ],
          "variables": [
            "{[Skill03[0]]}"
          ]
        },
        "Toughness": null,
        "Tags": null,
        "attackType": "Basic ATK",
        "EnergyGainPercent": "50%"
      }
    },
    {
      "name": "Looped Event",
      "Event": [
        "Move to Next Listed Target",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "50%"
          }
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
        "displayLines": "{[Skill03[2]]}",
        "constants": [],
        "variables": [
          "{[Skill03[2]]}"
        ]
      },
      "baseChance": {
        "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
        "displayLines": "{[Skill03[1]]}",
        "constants": [],
        "variables": [
          "{[Skill03[1]]}"
        ]
      },
      "immediateEffect": true,
      "valuePerStack": {
        "MDF_SpeedDownRatio": {
          "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
          "displayLines": "{[Skill03[3]]}",
          "constants": [],
          "variables": [
            "{[Skill03[3]]}"
          ]
        },
        "MDF_ActionDelayRatio": {
          "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
          "displayLines": "{[Skill03[4]]}",
          "constants": [],
          "variables": [
            "{[Skill03[4]]}"
          ]
        }
      }
    },
    "Trigger: Attack End",
    "Trigger: Ability End"
  ],
  "references": []
}