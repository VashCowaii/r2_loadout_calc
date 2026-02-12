const configAbility = {
  "fileName": "4044012_Monster_W4_Theoroi_Ability12_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-356060077\">Monster_W4_Theoroi_Ability12_Self</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{All Team Members(Exclude Self)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"688363638\">Monster_W4_Theoroi_Destruction</a>[<span class=\"descriptionNumberColor\">Retribution of \"Law\"</span>]",
      "valuePerStack": {
        "MDF_LoseHPRatio": {
          "operator": "Variables[0] ({[Skill12[0]]}) || RETURN",
          "displayLines": "{[Skill12[0]]}",
          "constants": [],
          "variables": [
            "{[Skill12[0]]}"
          ]
        }
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}