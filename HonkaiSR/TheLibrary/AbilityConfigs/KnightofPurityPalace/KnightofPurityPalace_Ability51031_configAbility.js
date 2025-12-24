const configAbility = {
  "fileName": "KnightofPurityPalace_Ability51031",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Relic_103_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Relic_103_Main",
      "execute": [
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
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