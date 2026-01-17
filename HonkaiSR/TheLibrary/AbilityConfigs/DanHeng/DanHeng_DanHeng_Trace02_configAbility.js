const configAbility = {
  "fileName": "DanHeng_DanHeng_Trace02",
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
      "modifier": "M_DanHeng_Tree02"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "DanHeng_PointB2_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                "displayLines": "MDF_PropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "SPD +<span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "M_DanHeng_Tree02",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "DanHeng_PointB2_SpeedUp[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    }
                  }
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