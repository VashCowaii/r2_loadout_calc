const configAbility = {
  "fileName": "SelfEnshroudedRecluse_Ability51280",
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
      "modifier": "Relic_128_Main2"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Relic_128_Main2",
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
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "isRelic": true,
  "desc": [
    "The provided Shield Effect increases by 10%.",
    "Increases the Shield Effect provided by the wearer by 12%. When an ally target holds a Shield provided by the wearer, the ally target's CRIT DMG increases by 15%."
  ],
  "params": [
    [
      0.1
    ],
    [
      0.12,
      0.15
    ]
  ]
}