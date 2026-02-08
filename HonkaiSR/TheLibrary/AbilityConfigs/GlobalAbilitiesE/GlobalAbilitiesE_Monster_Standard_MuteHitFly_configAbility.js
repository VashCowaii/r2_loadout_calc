const configAbility = {
  "fileName": "GlobalAbilitiesE_Monster_Standard_MuteHitFly",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1010816158\">Local_MuteHitFly</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1010816158\">Local_MuteHitFly</a>",
      "modifierFlags": [
        "MuteHitFly"
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}