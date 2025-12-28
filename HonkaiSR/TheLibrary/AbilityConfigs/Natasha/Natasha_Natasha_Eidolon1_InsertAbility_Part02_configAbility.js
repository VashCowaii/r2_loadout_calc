const configAbility = {
  "fileName": "Natasha_Natasha_Eidolon1_InsertAbility_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Heal",
      "target": "Single Target (Primary)",
      "healPercent": {
        "operator": "Variables[0] (0.15) || RETURN",
        "displayLines": "0.15",
        "constants": [],
        "variables": [
          0.15
        ]
      },
      "healFlat": {
        "operator": "Variables[0] (400) || RETURN",
        "displayLines": "400",
        "constants": [],
        "variables": [
          400
        ]
      },
      "formula": "Heal from Healer's MaxHP"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Natasha_Eidolon1_Check"
    }
  ],
  "references": []
}