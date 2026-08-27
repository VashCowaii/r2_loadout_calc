const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0024",
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
      "modifier": "<a class=\"gModGreen\" id=\"382474385\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0024</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-542209017\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0024_03</a>",
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
                      "value": "ChallengePeakBattle_Plugins_0024_ADF_2"
                    }
                  ]
                }
              ]
            }
          ]
        },
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
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0024_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0024_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0024_ADF_1"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-558986636\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0024_02</a>[<span class=\"descriptionNumberColor\">Marvelous Laughter</span>]",
      "description": "Increases Elation by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0024_ADF_1</span> and All-Type RES PEN of Elation DMG dealt by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0024_ADF_2</span>. This effect is doubled when using an Elation Skill.",
      "type": "Other",
      "statusName": "Marvelous Laughter",
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
                      "value": "ChallengePeakBattle_Plugins_0024_ADF_2"
                    }
                  ]
                }
              ]
            }
          ]
        },
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
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0024_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0024_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0024_ADF_1"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Elation"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-542209017\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0024_03</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0024_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0024_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0024_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0024_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0024_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0024_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0024_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0024_ADF_2"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Elation"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-542209017\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0024_03</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__382474385\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0024</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-558986636\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0024_02</a>[<span class=\"descriptionNumberColor\">Marvelous Laughter</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0024_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0024_ADF_2": {
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