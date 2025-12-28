const configAbility = {
  "fileName": "Natasha_Natasha_Trace02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_Trace_HealRatioUp",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.1) || RETURN",
          "displayLines": "0.1",
          "constants": [],
          "variables": [
            0.1
          ]
        }
      }
    }
  ],
  "references": []
}