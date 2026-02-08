const configAbility = {
  "fileName": "Luocha_Luocha_Trace03",
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
      "modifier": "<a class=\"gModGreen\" id=\"-579247332\">M_Luocha_Trace03</a>",
      "valuePerStack": {
        "MDF_Resistance": {
          "operator": "Variables[0] (0.7) || RETURN",
          "displayLines": "0.7",
          "constants": [],
          "variables": [
            0.7
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-579247332\">M_Luocha_Trace03</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Resistance",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "STAT_CTRL",
              "value": {
                "operator": "Variables[0] (MDF_Resistance) || RETURN",
                "displayLines": "MDF_Resistance",
                "constants": [],
                "variables": [
                  "MDF_Resistance"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Resistance"
      ],
      "latentQueue": []
    }
  ]
}