const compositeAbilityObject = {
  "fullCharacterName": "Izumo Gensei and Takama Divine Realm",
  "trimCharacterName": "IzumoGenseiandTakamaDivineRealm",
  "abilityList": [
    "IzumoGenseiandTakamaDivineRealm_Ability53141"
  ],
  "abilityObject": {
    "IzumoGenseiandTakamaDivineRealm_Ability53141": {
      "fileName": "IzumoGenseiandTakamaDivineRealm_Ability53141",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Relic_314_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_314_Sub",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
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
          "for": "Relic_314_Main",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Define Custom Variable with Matching Path",
                  "target": "All Teammates (Excluding Owner, NO Memosprites)",
                  "matchToPathFrom": "Caster",
                  "variableName": "_SameTypeCount"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_SameTypeCount",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Relic_314_Sub"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "isRelic": true,
      "desc": [
        "Increases the wearer's ATK by 12%. When entering battle, if at least one teammate follows the same Path as the wearer, then the wearer's CRIT Rate increases by 12%."
      ],
      "params": [
        [
          0.12,
          0.12
        ],
        []
      ]
    }
  },
  "fixedStats": {
    "2": {
      "ATK%": 0.12
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}