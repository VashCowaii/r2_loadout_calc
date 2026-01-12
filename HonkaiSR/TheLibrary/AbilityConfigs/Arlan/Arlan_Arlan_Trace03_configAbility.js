const configAbility = {
  "fileName": "Arlan_Arlan_Trace03",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": "Caster",
        "value1": "CurrentHP%",
        "compareType": "<=",
        "value2": {
          "operator": "Variables[0] (0.5) || RETURN",
          "displayLines": "0.5",
          "constants": [],
          "variables": [
            0.5
          ]
        }
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "BlockDamage_Count[<span class=\"descriptionNumberColor\">Repel</span>]"
        }
      ]
    }
  ],
  "references": []
}