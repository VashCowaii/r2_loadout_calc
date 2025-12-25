const compositeAbilityObject = {
  "fullCharacterName": "Cornucopia",
  "trimCharacterName": "Cornucopia",
  "abilityList": [
    "Cornucopia_Ability20001"
  ],
  "abilityObject": {
    "Cornucopia_Ability20001": {
      "fileName": "Cornucopia_Ability20001",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_20001_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_20001_HealRatio",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoing</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.12) || RETURN",
                    "displayLines": "0.12",
                    "constants": [],
                    "variables": [
                      0.12
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "LC_20001_Main",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "LC_20001_HealRatio"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "LC_20001_HealRatio",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "When the wearer uses their Skill or Ultimate, their Outgoing Healing increases by #1[i]%.",
      "params": [
        [
          0.12
        ],
        [
          0.15
        ],
        [
          0.18
        ],
        [
          0.21
        ],
        [
          0.24
        ]
      ]
    }
  },
  "isLightcone": true
}