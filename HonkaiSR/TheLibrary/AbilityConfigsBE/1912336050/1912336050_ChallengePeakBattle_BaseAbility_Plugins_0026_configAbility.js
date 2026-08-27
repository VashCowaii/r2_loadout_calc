const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0026",
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
      "modifier": "<a class=\"gModGreen\" id=\"348919147\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0026</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__41781525\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0026_03</a>[<span class=\"descriptionNumberColor\">Midnight Song</span>]",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "description": "SPD increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0026_ADF_2</span>.",
      "type": "Other",
      "statusName": "Midnight Song",
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
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0026_ADF_2) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0026_ADF_2",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0026_ADF_2"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__25003906\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0026_02</a>[<span class=\"descriptionNumberColor\">Midnight Song</span>]",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "description": "SPD increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0026_ADF_1</span>.",
      "type": "Other",
      "statusName": "Midnight Song",
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
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0026_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0026_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0026_ADF_1"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__348919147\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0026</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"25003906\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0026_02</a>[<span class=\"descriptionNumberColor\">Midnight Song</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0026_ADF_1": {
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
          "eventTrigger": "Battle Event/Summon Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Battle Event ID",
                "ID": 60050,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"41781525\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0026_03</a>[<span class=\"descriptionNumberColor\">Midnight Song</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0026_ADF_2": {
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