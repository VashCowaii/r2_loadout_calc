const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_RogueDLCAbundance_Upgrade2",
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
      "modifier": "<a class=\"gModGreen\" id=\"955621781\">Modifier_RogueDLCAbundance_Upgrade2_Level</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1581262672\">Modifier_RogueDLCAbundance_Upgrade2_AttackUp</a>[<span class=\"descriptionNumberColor\">Formation Extrapolation: Mountain High</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (#ADF_1) || RETURN",
                "displayLines": "#ADF_1",
                "constants": [],
                "variables": [
                  "#ADF_1"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases ATK by <span class=\"descriptionNumberColor\">#ADF_1</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Formation Extrapolation: Mountain High"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1193378592\">Modifier_RogueDLCAbundance_Upgrade2</a>",
      "execute": [
        {
          "eventTrigger": "Injected Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1581262672\">Modifier_RogueDLCAbundance_Upgrade2_AttackUp</a>[<span class=\"descriptionNumberColor\">Formation Extrapolation: Mountain High</span>]",
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
      "for": "<a class=\"gModGreen\" id=\"mod__955621781\">Modifier_RogueDLCAbundance_Upgrade2_Level</a>",
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
                "ID": 43004,
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1193378592\">Modifier_RogueDLCAbundance_Upgrade2</a>"
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