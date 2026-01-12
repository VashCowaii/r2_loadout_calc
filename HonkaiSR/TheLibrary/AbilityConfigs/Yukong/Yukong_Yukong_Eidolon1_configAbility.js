const configAbility = {
  "fileName": "Yukong_Yukong_Eidolon1",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Yukong_Eidolon1_Bonus"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Yukong_Eidolon1_SpeedUp[<span class=\"descriptionNumberColor\">Aerial Marshal</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedUpRatio) || RETURN",
                "displayLines": "MDF_SpeedUpRatio",
                "constants": [],
                "variables": [
                  "MDF_SpeedUpRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "SPD +<span class=\"descriptionNumberColor\">MDF_SpeedUpRatio</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "Aerial Marshal"
    },
    {
      "name": "Modifier Construction",
      "for": "Yukong_Eidolon1_Bonus",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Team Members(In Context)",
                  "modifier": "Yukong_Eidolon1_SpeedUp[<span class=\"descriptionNumberColor\">Aerial Marshal</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_SpeedUpRatio": {
                      "operator": "Variables[0] (0.1) || RETURN",
                      "displayLines": "0.1",
                      "constants": [],
                      "variables": [
                        0.1
                      ]
                    },
                    "MDF_LifeTime": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    }
                  }
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
  ]
}