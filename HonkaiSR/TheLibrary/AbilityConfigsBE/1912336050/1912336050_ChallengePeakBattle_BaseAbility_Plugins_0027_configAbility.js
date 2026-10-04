const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0027",
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
      "modifier": "<a class=\"gModGreen\" id=\"332141528\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0027</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-902695705\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0027_02</a>[<span class=\"descriptionNumberColor\">Ecstasy Night</span>]",
      "description": "Merrymakes Elation DMG dealt by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0027_ADF_1</span>.",
      "type": "Other",
      "statusName": "Ecstasy Night",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">MerryMake</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0027_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0027_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0027_ADF_1"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__332141528\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0027</a>",
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Far Left Player Entity(no Memosprite)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-902695705\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0027_02</a>[<span class=\"descriptionNumberColor\">Ecstasy Night</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0027_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ]
    }
  ]
}