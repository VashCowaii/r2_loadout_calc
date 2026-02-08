const compositeAbilityObject = {
  "fullCharacterName": "Landau's Choice",
  "trimCharacterName": "LandausChoice",
  "abilityList": [
    "LandausChoice_Ability21009"
  ],
  "fixedStats": {},
  "abilityObject": {
    "LandausChoice_Ability21009": {
      "fileName": "LandausChoice_Ability21009",
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
          "modifier": "<a class=\"gModGreen\" id=\"854343753\">LC_21009_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__854343753\">LC_21009_Main</a>",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.16) || RETURN",
                    "displayLines": "0.16",
                    "constants": [],
                    "variables": [
                      0.16
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
      "desc": "The wearer is more likely to be attacked, and DMG taken is reduced by #2[i]%.",
      "params": [
        [
          2,
          0.16
        ],
        [
          2,
          0.18
        ],
        [
          2,
          0.2
        ],
        [
          2,
          0.22
        ],
        [
          2,
          0.24
        ]
      ]
    }
  },
  "isLightcone": true
}