const configAbility = {
  "fileName": "Archer_Archer_Ability02Cancel_Part02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1612899858\">Archer_BonusTrigger</a>[<span class=\"descriptionNumberColor\">Circuit Connection</span>]"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "MDF_InBonus",
      "value": 0
    },
    "Trigger: Ability End"
  ],
  "references": []
}