const configAbility = {
  "fileName": "Moze_Moze_TechniqueInLevel",
  "abilityType": "Technique",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Moze_TechniqueUsage"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Moze_TechniqueUsage_DamageUpModifier[<span class=\"descriptionNumberColor\">Bated Wings</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Bated Wings",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Moze_TechniqueUsage",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Technique Modifies Current Wave"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Moze_TechniqueUsage_DamageUpModifier[<span class=\"descriptionNumberColor\">Bated Wings</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
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