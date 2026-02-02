const configAbility = {
  "fileName": "GlobalAbilitiesE_Monster_Standard_PassiveAbility_Formation2_Back",
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
      "modifier": "Standard_Formation2_Back"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Standard_Formation2_Back",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Assign Target Battle-Location",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "row": 1
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}