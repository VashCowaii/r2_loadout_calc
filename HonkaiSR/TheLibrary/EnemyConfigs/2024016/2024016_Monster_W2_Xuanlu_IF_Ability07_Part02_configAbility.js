const configAbility = {
  "fileName": "2024016_Monster_W2_Xuanlu_IF_Ability07_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"677221093\">Enemy_W2_Xuanlu_IF_Ability07_WeaknessControl</a>[<span class=\"descriptionNumberColor\">Hardy Leaf Sheath</span>]",
      "duration": {
        "displayLines": "{[Skill07[1]]}"
      },
      "valuePerStack": {
        "MDF_DefenceAddedRatio": {
          "displayLines": "{[Skill07[0]]}"
        }
      }
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}