const configAbility = {
  "fileName": "5012020_Monster_W2_Beast01_05_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1253957657\">Enemy_W2_Beast01_05_Boss</a>[<span class=\"descriptionNumberColor\">Fealty</span>]",
      "valuePerStack": {
        "MDF_ElationPoint": {
          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
          "displayLines": "{[Skill02[0]]}",
          "constants": [],
          "variables": [
            "{[Skill02[0]]}"
          ]
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"7174242\">Enemy_W2_Beast01_05_BossEffect</a>"
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}