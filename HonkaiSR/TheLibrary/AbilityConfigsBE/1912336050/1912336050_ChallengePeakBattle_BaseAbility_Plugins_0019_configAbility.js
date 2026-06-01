const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0019",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1982919631\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0019</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2113549484\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0019_02</a>[<span class=\"descriptionNumberColor\">Chesty Chortle</span>]",
      "description": "Elation increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0019_ADF_1</span>.",
      "type": "Other",
      "statusName": "Chesty Chortle",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0019_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0019_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0019_ADF_1"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1982919631\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0019</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2113549484\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0019_02</a>[<span class=\"descriptionNumberColor\">Chesty Chortle</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0019_ADF_1": {
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
          ]
        },
        {
          "eventTrigger": "Aha Instant: Start",
          "execute": [
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "operator": "Variables[0] (#ADF_2) || RETURN",
                "displayLines": "#ADF_2",
                "constants": [],
                "variables": [
                  "#ADF_2"
                ]
              },
              "adjustment": "Add"
            }
          ]
        }
      ]
    }
  ]
}