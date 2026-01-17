const configAbility = {
  "fileName": "Natasha_Natasha_Eidolon4",
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
      "modifier": "Natasha_Eidolon4_Check"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Natasha_Eidolon4_Check",
      "execute": [
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (5) || RETURN",
                "displayLines": "5",
                "constants": [],
                "variables": [
                  5
                ]
              },
              "isFixed": "* ERR"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}