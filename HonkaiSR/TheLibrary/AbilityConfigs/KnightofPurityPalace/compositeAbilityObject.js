const compositeAbilityObject = {
  "fullCharacterName": "Knight of Purity Palace",
  "trimCharacterName": "KnightofPurityPalace",
  "abilityList": [
    "KnightofPurityPalace_Ability51031"
  ],
  "abilityObject": {
    "KnightofPurityPalace_Ability51031": {
      "fileName": "KnightofPurityPalace_Ability51031",
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
          "modifier": "<a class=\"gModGreen\" id=\"-458199754\">Relic_103_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-458199754\">Relic_103_Main</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Shield%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.2) || RETURN",
                    "displayLines": "0.2",
                    "constants": [],
                    "variables": [
                      0.2
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "isRelic": true,
      "desc": [
        "Increases DEF by 15%.",
        "Increases the max DMG that can be absorbed by the Shield created by the wearer by 20%."
      ],
      "params": [
        [
          0.15
        ],
        [
          0.2
        ]
      ]
    }
  },
  "fixedStats": {
    "2": {
      "DEF%": 0.15
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}