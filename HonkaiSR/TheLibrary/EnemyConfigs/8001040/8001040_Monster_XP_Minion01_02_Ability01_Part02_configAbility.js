const configAbility = {
  "fileName": "8001040_Monster_XP_Minion01_02_Ability01_Part02",
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
        "DamageType": "Thunder",
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
      "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
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
        "Modifier_Electric_DamagePercentage": {
          "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
          "displayLines": "{[Skill01[3]]}",
          "constants": [],
          "variables": [
            "{[Skill01[3]]}"
          ]
        }
      },
      "stackFlag": "CharacterSkill"
    },
    "Trigger: Ability End"
  ],
  "references": []
}