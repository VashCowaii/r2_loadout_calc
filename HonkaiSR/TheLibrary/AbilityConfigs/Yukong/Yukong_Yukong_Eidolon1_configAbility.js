const configAbility = {
  "fileName": "Yukong_Yukong_Eidolon1",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1803156714\">Yukong_Eidolon1_Bonus</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-65553749\">Yukong_Eidolon1_SpeedUp</a>[<span class=\"descriptionNumberColor\">Aerial Marshal</span>]",
      "description": "SPD +<span class=\"descriptionNumberColor\">MDF_SpeedUpRatio</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "Aerial Marshal",
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
                "displayLines": "MDF_SpeedUpRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1803156714\">Yukong_Eidolon1_Bonus</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-65553749\">Yukong_Eidolon1_SpeedUp</a>[<span class=\"descriptionNumberColor\">Aerial Marshal</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "MDF_SpeedUpRatio": {
                      "displayLines": "0.1"
                    },
                    "MDF_LifeTime": {
                      "displayLines": "2"
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