const configAbility = {
  "fileName": "-1857366819_TrialPlayer_1101208_FuXuan_Ability",
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
      "modifier": "<a class=\"gModGreen\" id=\"1185796836\">MTrialPlayer_1101208_FuXuan_Ability</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1185796836\">MTrialPlayer_1101208_FuXuan_Ability</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": 120,
              "isFixed": "(Fixed)"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}