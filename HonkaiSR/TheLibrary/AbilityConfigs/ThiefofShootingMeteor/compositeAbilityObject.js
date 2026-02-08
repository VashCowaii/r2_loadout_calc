const compositeAbilityObject = {
  "fullCharacterName": "Thief of Shooting Meteor",
  "trimCharacterName": "ThiefofShootingMeteor",
  "abilityList": [
    "ThiefofShootingMeteor_Ability51111"
  ],
  "abilityObject": {
    "ThiefofShootingMeteor_Ability51111": {
      "fileName": "ThiefofShootingMeteor_Ability51111",
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
          "modifier": "<a class=\"gModGreen\" id=\"1931630891\">Relic_111_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1931630891\">Relic_111_Main</a>",
          "execute": [
            {
              "eventTrigger": "Caused Weakness Break [Owner]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
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
  },
  "fixedStats": {
    "2": {
      "DamageBreak": 0.16
    },
    "4": {
      "DamageBreak": 0.16
    }
  },
  "isLightcone": true,
  "isRelic": true
}