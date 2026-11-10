const configAbility = {
  "fileName": "3025013_Monster_W3_Sunday_IF_Ability07_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1243262352\">Enemy_W3_Sunday_IF_Ability07_Shield_Modifier</a>[<span class=\"descriptionNumberColor\">One With the Light</span>]",
      "valuePerStack": {
        "MDF_Ability07_P2_DamageRatio": {
          "operator": "Variables[0] ({[Skill07[1]]}) || RETURN",
          "displayLines": "{[Skill07[1]]}",
          "constants": [],
          "variables": [
            "{[Skill07[1]]}"
          ]
        }
      }
    },
    {
      "name": "Define Custom Variable",
      "value": 2,
      "variableName": "Weakness_CountDown"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}