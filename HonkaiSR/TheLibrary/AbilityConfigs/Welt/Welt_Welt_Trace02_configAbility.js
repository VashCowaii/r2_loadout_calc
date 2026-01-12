const configAbility = {
  "fileName": "Welt_Welt_Trace02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "M_Ultimate_ExtraSP",
      "valuePerStack": {
        "MDF_AddValue": {
          "operator": "Variables[0] (10) || RETURN",
          "displayLines": "10",
          "constants": [],
          "variables": [
            10
          ]
        }
      }
    }
  ],
  "references": []
}