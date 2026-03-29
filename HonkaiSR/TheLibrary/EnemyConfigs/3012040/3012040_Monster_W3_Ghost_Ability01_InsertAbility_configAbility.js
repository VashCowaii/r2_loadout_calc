const configAbility = {
  "fileName": "3012040_Monster_W3_Ghost_Ability01_InsertAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-892811864\">Enemy_W3_Ghost_Ability01_Parasitize_Target</a>[<span class=\"descriptionNumberColor\">Deception's Crown</span>]"
    },
    {
      "name": "UI Display Event (On Entity)",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "popUpText": "Deception's Crown dispelled"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}