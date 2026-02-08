const configAbility = {
  "fileName": "Sampo_Sampo_Trace02",
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
      "modifier": "<a class=\"gModGreen\" id=\"63874351\">M_Ultimate_ExtraSP</a>",
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