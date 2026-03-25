const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0013",
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
      "modifier": "<a class=\"gModGreen\" id=\"2144271475\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0013</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1779059478\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0013_02</a>[<span class=\"descriptionNumberColor\">Beaming with Joy</span>]",
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
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0013_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0013_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0013_ADF_1"
                ]
              }
            }
          ]
        }
      ],
      "description": "Elation stat increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0013_ADF_1</span>.",
      "type": "Other",
      "statusName": "Beaming with Joy"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2144271475\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0013</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1779059478\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0013_02</a>[<span class=\"descriptionNumberColor\">Beaming with Joy</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0013_ADF_1": {
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
          "eventTrigger": "Aha Instant: End",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Character"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "valuePercent": {
                    "operator": "Variables[0] (#ADF_2) || RETURN",
                    "displayLines": "#ADF_2",
                    "constants": [],
                    "variables": [
                      "#ADF_2"
                    ]
                  },
                  "isFixed": "(Fixed)"
                },
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "living": true
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