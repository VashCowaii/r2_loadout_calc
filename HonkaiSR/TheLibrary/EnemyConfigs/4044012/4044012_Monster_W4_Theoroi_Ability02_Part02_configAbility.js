const configAbility = {
  "fileName": "4044012_Monster_W4_Theoroi_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "set": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-303636173\">Monster_W4_Theoroi_Creation</a>[<span class=\"descriptionNumberColor\">Potential Realization</span>]",
      "valuePerStack": {
        "MDF_DamageUpRatio": {
          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
          "displayLines": "{[Skill02[0]]}",
          "constants": [],
          "variables": [
            "{[Skill02[0]]}"
          ]
        },
        "MDF_HPHealRatio": {
          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
          "displayLines": "{[Skill02[1]]}",
          "constants": [],
          "variables": [
            "{[Skill02[1]]}"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}