const configAbility = {
  "fileName": "Clara_Klara_Trace01",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1111450796\">Klara_Trace01</a>",
      "valuePerStack": {
        "MDF_Chance": {
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1111450796\">Klara_Trace01</a>",
      "execute": [
        {
          "eventTrigger": "Being Attacked Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": {
                  "operator": "Variables[0] (MDF_Chance) || RETURN",
                  "displayLines": "MDF_Chance",
                  "constants": [],
                  "variables": [
                    "MDF_Chance"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "dispelCount": 1,
                  "dispelOrder": "LastAdded"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Chance"
      ],
      "latentQueue": []
    }
  ]
}