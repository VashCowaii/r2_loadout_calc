const configAbility = {
  "fileName": "1012020_Monster_W1_GSMecha_01_PassiveAbility_KlaraCamera",
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
      "modifier": "<a class=\"gModGreen\" id=\"-498979834\">Monster_W1_GSMecha_01_PassiveAbility_KlaraEnterBattle</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-498979834\">Monster_W1_GSMecha_01_PassiveAbility_KlaraEnterBattle</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -55
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}