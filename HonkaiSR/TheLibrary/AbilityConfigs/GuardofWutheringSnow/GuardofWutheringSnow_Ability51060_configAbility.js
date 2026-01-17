const configAbility = {
  "fileName": "GuardofWutheringSnow_Ability51060",
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
      "modifier": "Relic_106_Main2"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Relic_106_Main2",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.08) || RETURN",
                "displayLines": "0.08",
                "constants": [],
                "variables": [
                  0.08
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
    "Reduces DMG taken by 8%.",
    "At the beginning of the turn, if the wearer's HP percentage is equal to or less than 50%, restores HP equal to 8% of their Max HP and regenerates 5 Energy."
  ],
  "params": [
    [
      0.08
    ],
    [
      0.5,
      0.08,
      5
    ]
  ]
}