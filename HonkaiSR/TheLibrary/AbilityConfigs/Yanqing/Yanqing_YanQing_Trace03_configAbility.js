const configAbility = {
  "fileName": "Yanqing_YanQing_Trace03",
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
      "modifier": "<a class=\"gModGreen\" id=\"645549950\">M_Yanqing_Tree03</a>",
      "valuePerStack": {
        "MDF_SpeedValue": {
          "operator": "Variables[0] (0.1) || RETURN",
          "displayLines": "0.1",
          "constants": [],
          "variables": [
            0.1
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2119684740\">M_Yanqing_Tree03SpeedUP</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedValue) || RETURN",
                "displayLines": "MDF_SpeedValue",
                "constants": [],
                "variables": [
                  "MDF_SpeedValue"
                ]
              }
            }
          ]
        }
      ],
      "description": "SPD +<span class=\"descriptionNumberColor\">MDF_SpeedValue</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__645549950\">M_Yanqing_Tree03</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is a Crit"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2119684740\">M_Yanqing_Tree03SpeedUP</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_SpeedValue": {
                      "operator": "Variables[0] (MDF_SpeedValue) || RETURN",
                      "displayLines": "MDF_SpeedValue",
                      "constants": [],
                      "variables": [
                        "MDF_SpeedValue"
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
          ]
        }
      ],
      "stackData": [
        "MDF_SpeedValue"
      ],
      "latentQueue": []
    }
  ]
}