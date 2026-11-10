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
      "modifier": "<a class=\"gModGreen\" id=\"1828112803\">M_DanHeng_Tree02</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1050755614\">DanHeng_PointB2_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "description": "SPD +<span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1828112803\">M_DanHeng_Tree02</a>",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": {
                  "displayLines": "0.5"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1050755614\">DanHeng_PointB2_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "displayLines": "0.2"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}