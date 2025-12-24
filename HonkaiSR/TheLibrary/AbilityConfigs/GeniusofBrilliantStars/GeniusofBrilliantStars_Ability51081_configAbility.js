const configAbility = {
  "fileName": "GeniusofBrilliantStars_Ability51081",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Relic_108_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Relic_108_Main",
      "execute": [
        {
          "eventTrigger": "Deal Damage [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "on": "Defender",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.1) || RETURN",
                "displayLines": "0.1",
                "constants": [],
                "variables": [
                  0.1
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": "Target Receiving DMG",
                "DamageType": "Quantum"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.1) || RETURN",
                    "displayLines": "0.1",
                    "constants": [],
                    "variables": [
                      0.1
                    ]
                  }
                }
              ]
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
    "Increases Quantum DMG by 10%.",
    "When the wearer deals DMG to the target enemy, ignores 10% DEF. If the target enemy has Quantum Weakness, the wearer additionally ignores 10% DEF."
  ],
  "params": [
    [
      0.1
    ],
    [
      0.1,
      0.1
    ]
  ]
}