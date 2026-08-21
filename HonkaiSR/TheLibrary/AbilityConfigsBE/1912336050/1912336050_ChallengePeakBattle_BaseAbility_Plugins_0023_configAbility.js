const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0023",
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
      "modifier": "<a class=\"gModGreen\" id=\"399252004\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0023</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__296379619\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0023_02</a>[<span class=\"descriptionNumberColor\">Endless Euphoria</span>]",
      "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0023_ADF_1</span>, and the All-Type RES PEN of Elation DMG dealt additionally increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0023_ADF_2</span>.",
      "type": "Other",
      "statusName": "Endless Euphoria",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Elation DMG"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                      "value": "(ChallengePeakBattle_Plugins_0023_ADF_1 + ChallengePeakBattle_Plugins_0023_ADF_2)"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                      "value": "ChallengePeakBattle_Plugins_0023_ADF_1"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__399252004\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0023</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"296379619\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0023_02</a>[<span class=\"descriptionNumberColor\">Endless Euphoria</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0023_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0023_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}