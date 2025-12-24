const configAbility = {
  "fileName": "ThiefofShootingMeteor_Ability51111",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Relic_111_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Relic_111_Main",
      "execute": [
        {
          "eventTrigger": "Caused Weakness Break [Owner]",
          "execute": [
            {
              "name": "Update Energy",
              "on": "Owner of this Modifier",
              "value": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "isFixed": "* ERR"
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
    "Increases Break Effect by 16%.",
    "Increases the wearer's Break Effect by 16%. After the wearer inflicts Weakness Break on an enemy, regenerates 3 Energy."
  ],
  "params": [
    [
      0.16
    ],
    [
      0.16,
      3
    ]
  ]
}