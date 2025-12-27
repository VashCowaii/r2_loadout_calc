const configAbility = {
  "fileName": "RutilantArena_Ability53091",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Relic_309_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Relic_309_Sub",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Basic ATK",
                  "Skill"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Relic_309_Main",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Ability Value",
                "target": "Owner of this Modifier",
                "value1": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (0.7) || RETURN",
                  "displayLines": "0.7",
                  "constants": [],
                  "variables": [
                    0.7
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Relic_309_Sub"
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": -1,
              "maxValue": {
                "operator": "Variables[0] (0.7) || RETURN",
                "displayLines": "0.7",
                "constants": [],
                "variables": [
                  0.7
                ]
              },
              "whenEnteringRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Relic_309_Sub",
                  "onlyRemoveOwnersInstance": true
                }
              ],
              "whenLeavingRange": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Relic_309_Sub"
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
    "Increases the wearer's CRIT Rate by 8%. When the wearer's current CRIT Rate reaches 70% or higher, DMG dealt by Basic ATK and Skill increases by 20%."
  ],
  "params": [
    [
      0.08,
      0.7,
      0.2
    ],
    []
  ]
}