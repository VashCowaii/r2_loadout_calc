const configAbility = {
  "fileName": "4023013_Monster_W4_Griffin_Ability01_Part02",
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
        "DamageType": "Fire",
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
    "Trigger: Attack End",
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "ENEMIES_OBJECT_UNUSED__181"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"263350627\">Enemy_XP_Elite01_Burn</a>[<span class=\"descriptionNumberColor\">Enkindle</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
            "displayLines": "{[Skill01[2]]}",
            "constants": [],
            "variables": [
              "{[Skill01[2]]}"
            ]
          },
          "baseChance": {
            "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
            "displayLines": "{[Skill01[1]]}",
            "constants": [],
            "variables": [
              "{[Skill01[1]]}"
            ]
          },
          "valuePerStack": {
            "MDF_DamagePercentage_Layer": {
              "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
              "displayLines": "{[Skill01[3]]}",
              "constants": [],
              "variables": [
                "{[Skill01[3]]}"
              ]
            }
          }
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}