const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_RogueDLCRuin_Upgrade1",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1450756805\">Modifier_RogueDLCRuin_Upgrade1_Level</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1071238655\">Modifier_RogueDLCRuin_Upgrade1_DefenceDown</a>[<span class=\"descriptionNumberColor\">Formation Extrapolation: Extreme Helium Flash</span>]",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (1) || INVERT || Variables[0] (#ADF_1) || MUL || RETURN",
                "displayLines": "(-1 * #ADF_1)",
                "constants": [
                  1
                ],
                "variables": [
                  "#ADF_1"
                ]
              }
            }
          ]
        }
      ],
      "description": "Reduces DEF by <span class=\"descriptionNumberColor\">#ADF_1</span>.",
      "type": "Debuff",
      "effectName": "DEF Reduction",
      "statusName": "Formation Extrapolation: Extreme Helium Flash"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-461606810\">Modifier_RogueDLCRuin_Upgrade1</a>",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1071238655\">Modifier_RogueDLCRuin_Upgrade1_DefenceDown</a>[<span class=\"descriptionNumberColor\">Formation Extrapolation: Extreme Helium Flash</span>]",
              "duration": {
                "operator": "Variables[0] (#ADF_2) || RETURN",
                "displayLines": "#ADF_2",
                "constants": [],
                "variables": [
                  "#ADF_2"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1450756805\">Modifier_RogueDLCRuin_Upgrade1_Level</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Battle Event List}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Battle Event ID",
                "ID": 43002,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-461606810\">Modifier_RogueDLCRuin_Upgrade1</a>"
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}