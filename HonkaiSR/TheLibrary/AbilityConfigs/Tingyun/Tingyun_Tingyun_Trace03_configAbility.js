const configAbility = {
  "fileName": "Tingyun_Tingyun_Trace03",
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
      "modifier": "Tingyun_Tree03"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Tingyun_Tree03",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
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