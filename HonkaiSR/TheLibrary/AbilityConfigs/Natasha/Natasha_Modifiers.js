const configAbility = {
  "fileName": "Natasha_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "Natasha_BPAbility_DefenceRatioUp[<span class=\"descriptionNumberColor\">DEF Boost</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
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
      "description": "DEF increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>",
      "type": "Buff",
      "effectName": "DEF Boost",
      "statusName": "DEF Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "Natasha_Passive_FatigueRatio[<span class=\"descriptionNumberColor\">Weaken</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_Fatigue"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
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
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "Deals <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> less DMG to your team.",
      "type": "Debuff",
      "effectName": "Weaken",
      "statusName": "Weaken"
    },
    {
      "name": "Modifier Construction",
      "for": "Natasha_HOT_HPByMaxHP[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Heal",
                  "target": "Owner of this Modifier",
                  "healPercent": {
                    "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                    "displayLines": "MDF_ShowValue1",
                    "constants": [],
                    "variables": [
                      "MDF_ShowValue1"
                    ]
                  },
                  "healFlat": {
                    "operator": "Variables[0] (MDF_ShowValue2) || RETURN",
                    "displayLines": "MDF_ShowValue2",
                    "constants": [],
                    "variables": [
                      "MDF_ShowValue2"
                    ]
                  },
                  "formula": "Heal from Healer's MaxHP"
                }
              ]
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_ShowValue1",
        "MDF_ShowValue2"
      ],
      "latentQueue": [],
      "description": "Restores a certain amount of HP at the start of each turn.",
      "type": "Buff",
      "effectName": "Healing Over Time",
      "statusName": "Healing Over Time"
    }
  ],
  "references": []
}