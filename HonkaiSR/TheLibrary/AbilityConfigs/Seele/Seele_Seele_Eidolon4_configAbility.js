const configAbility = {
  "fileName": "Seele_Seele_Eidolon4",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Seele_Eidolon4",
      "valuePerStack": {
        "MDF_AddSP": {
          "operator": "Variables[0] (15) || RETURN",
          "displayLines": "15",
          "constants": [],
          "variables": [
            15
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Seele_Eidolon4",
      "execute": [
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "Update Energy",
              "on": "Caster",
              "value": {
                "operator": "Variables[0] (MDF_AddSP) || RETURN",
                "displayLines": "MDF_AddSP",
                "constants": [],
                "variables": [
                  "MDF_AddSP"
                ]
              },
              "isFixed": "* ERR"
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AddSP"
      ],
      "latentQueue": []
    }
  ]
}