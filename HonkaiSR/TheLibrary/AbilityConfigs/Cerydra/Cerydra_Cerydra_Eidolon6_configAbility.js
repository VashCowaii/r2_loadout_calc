const configAbility = {
  "fileName": "Cerydra_Cerydra_Eidolon6",
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
      "modifier": "<a class=\"gModGreen\" id=\"1076811702\">Cerydra_Eidolon6_AddDamageCarry</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1076811702\">Cerydra_Eidolon6_AddDamageCarry</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "scope": "AITag",
              "variableName": "DamageCarry",
              "value": 0.0009999999
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}