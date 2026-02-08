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
        "operator": "Variables[0] (0.15) || RETURN",
        "displayLines": "0.15",
        "constants": [],
        "variables": [
          0.15
        ]
      },
      "healFlat": {
        "operator": "Variables[0] (400) || RETURN",
        "displayLines": "400",
        "constants": [],
        "variables": [
          400
        ]
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
  "references": []
}