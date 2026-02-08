const configAbility = {
  "fileName": "GlobalAbilitiesE_Monster_Standard_BossInfoBar",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Boss Bar Display",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "display": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-887060833\">Standard_BOSSInfoBar_Active</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-887060833\">Standard_BOSSInfoBar_Active</a>",
      "stackData": [],
      "latentQueue": []
    }
  ]
}