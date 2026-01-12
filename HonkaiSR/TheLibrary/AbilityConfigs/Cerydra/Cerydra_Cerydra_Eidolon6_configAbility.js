const configAbility = {
  "fileName": "Cerydra_Cerydra_Eidolon6",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Cerydra_Eidolon6_AddDamageCarry"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Cerydra_Eidolon6_AddDamageCarry",
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