const configAbility = {
  "fileName": "Gepard_Gepard_Trace01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_Trace_AggroUp",
      "valuePerStack": {
        "MDF_PropertyValue": {
          "operator": "Variables[0] (3) || RETURN",
          "displayLines": "3",
          "constants": [],
          "variables": [
            3
          ]
        }
      }
    }
  ],
  "references": []
}