const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0017",
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
      "modifier": "<a class=\"gModGreen\" id=\"-2083585345\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0017</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1547663194\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0017_02</a>[<span class=\"descriptionNumberColor\">Devastating Sweep</span>]",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Break DMG"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                      "value": "ChallengePeakBattle_Plugins_0017_ADF_1"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "advanceType": "Set",
              "multiAdd": "-ChallengePeakBattle_Plugins_0017_ADF_2"
            }
          ]
        }
      ],
      "description": "Increases Break DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0017_ADF_1</span>. Each time the wearer enters the Weakness Broken state, all allies' actions advance by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0017_ADF_2</span>.",
      "type": "Other",
      "statusName": "Devastating Sweep"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2083585345\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0017</a>",
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
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1547663194\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0017_02</a>[<span class=\"descriptionNumberColor\">Devastating Sweep</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0017_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0017_ADF_2": {
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
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}