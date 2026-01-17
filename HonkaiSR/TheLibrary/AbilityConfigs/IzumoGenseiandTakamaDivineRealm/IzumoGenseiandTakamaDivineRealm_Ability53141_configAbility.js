const configAbility = {
  "fileName": "IzumoGenseiandTakamaDivineRealm_Ability53141",
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
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
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
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}.[[removeMemosprite]]"
              },
              "matchToPathFrom": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
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