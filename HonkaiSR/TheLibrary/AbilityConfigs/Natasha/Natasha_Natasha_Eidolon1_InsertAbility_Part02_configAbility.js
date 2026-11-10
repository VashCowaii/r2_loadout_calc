const configAbility = {
  "fileName": "Natasha_Natasha_Eidolon1_InsertAbility_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Heal",
      "target": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "healPercent": {
        "displayLines": "0.15"
      },
      "healFlat": {
        "displayLines": "400"
      },
      "formula": "Heal from Healer's MaxHP"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1397815058\">Natasha_Eidolon1_Check</a>"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}