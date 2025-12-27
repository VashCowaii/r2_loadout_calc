const configAbility = {
  "fileName": "Gallagher_Gallagher_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Dispel Debuffs",
          "target": "Single Target (Primary)",
          "dispelCount": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "dispelOrder": "LastAdded"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Single Target (Primary)",
          "modifier": "MWGallagher_Ability02_StatusResModifier[<span class=\"descriptionNumberColor\">Effect RES Boost</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Heal",
      "target": "Single Target (Primary)",
      "healFlat": {
        "operator": "Variables[0] (1600) || RETURN",
        "displayLines": "1600",
        "constants": [],
        "variables": [
          1600
        ]
      },
      "EnergyGainPercent": "100%"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Current Action Holder Is",
        "target": "Single Target (Primary)"
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}