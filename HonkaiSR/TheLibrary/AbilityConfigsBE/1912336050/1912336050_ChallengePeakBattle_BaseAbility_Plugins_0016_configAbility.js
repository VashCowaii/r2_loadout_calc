const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0016",
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
      "modifier": "<a class=\"gModGreen\" id=\"-2100362964\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0016</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__628193560\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0016_03</a>[<span class=\"descriptionNumberColor\">Cathartic Applause</span>]",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0016_ADF_2) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0016_ADF_2",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0016_ADF_2"
                ]
              },
              "adjustment": "Add"
            }
          ]
        }
      ],
      "description": "Gains <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0016_ADF_2</span> Punchline(s) at the start of each turn.",
      "type": "Other",
      "statusName": "Cathartic Applause"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__644971179\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0016_02</a>[<span class=\"descriptionNumberColor\">Cathartic Applause</span>]",
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
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "-ChallengePeakBattle_Plugins_0016_ADF_1"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Elation DMG dealt ignores <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0016_ADF_1</span> of the target's DEF.",
      "type": "Other",
      "statusName": "Cathartic Applause"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2100362964\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0016</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"644971179\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0016_02</a>[<span class=\"descriptionNumberColor\">Cathartic Applause</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0016_ADF_1": {
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
            },
            {
              "name": "IF",
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
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"628193560\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0016_03</a>[<span class=\"descriptionNumberColor\">Cathartic Applause</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0016_ADF_2": {
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