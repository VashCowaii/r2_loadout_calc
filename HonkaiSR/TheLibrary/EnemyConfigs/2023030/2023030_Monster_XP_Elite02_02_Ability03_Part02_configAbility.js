const configAbility = {
  "fileName": "2023030_Monster_XP_Elite02_02_Ability03_Part02",
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
        "DamageType": "Wind",
        "Damage": {
          "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
          "displayLines": "{[Skill03[0]]}",
          "constants": [],
          "variables": [
            "{[Skill03[0]]}"
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Standard_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
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
      "valuePerStack": {
        "Modifier_Poison_DamagePercentage": {
          "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
          "displayLines": "{[Skill03[3]]}",
          "constants": [],
          "variables": [
            "{[Skill03[3]]}"
          ]
        }
      },
      "stackFlag": "CharacterSkill"
    },
    "Trigger: Ability End"
  ],
  "references": []
}