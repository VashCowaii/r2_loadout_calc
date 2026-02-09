const configAbility = {
  "fileName": "262250248_BoxingGym_Break_OneMoreWeak",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-492660274\">BoxingGym_Break_OneMoreWeak_Level</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-492660274\">BoxingGym_Break_OneMoreWeak_Level</a>",
      "execute": [
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-44392521\">BoxingGym_Break_OneMoreWeak</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}