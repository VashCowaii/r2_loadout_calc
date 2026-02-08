const configAbility = {
  "fileName": "Seele_Seele_Eidolon4",
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
      "modifier": "<a class=\"gModGreen\" id=\"-268122719\">Seele_Eidolon4</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-268122719\">Seele_Eidolon4</a>",
      "execute": [
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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