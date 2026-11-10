const configAbility = {
  "fileName": "Herta_Herta_Trace02",
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
      "modifier": "<a class=\"gModGreen\" id=\"499178350\">Herta_Trace02_Resistance</a>",
      "valuePerStack": {
        "MDF_Resistance": {
          "displayLines": "0.35"
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__499178350\">Herta_Trace02_Resistance</a>",
      "stackData": [
        "MDF_Resistance"
      ],
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
                "displayLines": "MDF_Resistance"
              }
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}