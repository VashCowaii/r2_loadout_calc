const configAbility = {
  "fileName": "DanHengIL_DanHengIL_Trace02",
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
      "modifier": "DanHengIL_Trace02_Resistance",
      "valuePerStack": {
        "MDF_Resistance": {
          "operator": "Variables[0] (0.35) || RETURN",
          "displayLines": "0.35",
          "constants": [],
          "variables": [
            0.35
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "DanHengIL_Trace02_Resistance",
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