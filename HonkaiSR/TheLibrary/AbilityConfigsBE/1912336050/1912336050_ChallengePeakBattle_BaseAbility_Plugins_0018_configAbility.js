const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0018",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1999697250\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0018</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1313154338\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0018_03</a>[<span class=\"descriptionNumberColor\">Hallowed Abjuration</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0018_ADF_2) || INVERT || RETURN",
                "displayLines": "-ChallengePeakBattle_Plugins_0018_ADF_2",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0018_ADF_2"
                ]
              }
            }
          ]
        }
      ],
      "description": "All-Type RES decreases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0018_ADF_2</span>.",
      "type": "Other",
      "statusName": "Hallowed Abjuration"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1296376719\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0018_02</a>[<span class=\"descriptionNumberColor\">Hallowed Abjuration</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0018_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0018_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0018_ADF_1"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0018_ADF_1</span>.",
      "type": "Other",
      "statusName": "Hallowed Abjuration"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1999697250\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0018</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1296376719\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0018_02</a>[<span class=\"descriptionNumberColor\">Hallowed Abjuration</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0018_ADF_1": {
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
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 5024010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Character ID",
                        "ID": 5022010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      }
                    ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1313154338\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0018_03</a>[<span class=\"descriptionNumberColor\">Hallowed Abjuration</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0018_ADF_2": {
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