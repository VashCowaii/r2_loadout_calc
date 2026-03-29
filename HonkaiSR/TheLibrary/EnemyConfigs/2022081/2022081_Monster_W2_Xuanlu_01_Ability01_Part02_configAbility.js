const configAbility = {
  "fileName": "2022081_Monster_W2_Xuanlu_01_Ability01_Part02",
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
          "operator": "Variables[0] (UnusedUnderThisBase_3) || RETURN",
          "displayLines": "UnusedUnderThisBase_3",
          "constants": [],
          "variables": [
            "UnusedUnderThisBase_3"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1794338335\">Standard_CTRL_Crazy</a>[<span class=\"descriptionNumberColor\">Outrage</span>]",
      "duration": {
        "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
        "displayLines": "{[Skill01[1]]}",
        "constants": [],
        "variables": [
          "{[Skill01[1]]}"
        ]
      },
      "baseChance": 1
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}