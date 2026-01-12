const configAbility = {
  "fileName": "Himeko_Himeko_Trace03",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Himeko_Trace03"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Himeko_CriticalChance[<span class=\"descriptionNumberColor\">Benchmark</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "description": "CRIT Rate +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "CRIT Rate Boost",
      "statusName": "Benchmark"
    },
    {
      "name": "Modifier Construction",
      "for": "Himeko_Trace03",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "CurrentHP%",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Himeko_CriticalChance[<span class=\"descriptionNumberColor\">Benchmark</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.15) || RETURN",
                      "displayLines": "0.15",
                      "constants": [],
                      "variables": [
                        0.15
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "CurrentHP%",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Himeko_CriticalChance[<span class=\"descriptionNumberColor\">Benchmark</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.15) || RETURN",
                      "displayLines": "0.15",
                      "constants": [],
                      "variables": [
                        0.15
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Himeko_CriticalChance[<span class=\"descriptionNumberColor\">Benchmark</span>]"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}