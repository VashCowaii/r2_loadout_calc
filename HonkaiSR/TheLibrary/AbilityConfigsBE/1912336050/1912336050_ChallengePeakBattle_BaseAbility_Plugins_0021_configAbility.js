const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0021",
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
      "modifier": "<a class=\"gModGreen\" id=\"432807242\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0021</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1871244851\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0021_02</a>[<span class=\"descriptionNumberColor\">Shatter the Adamant</span>]",
      "stackType": "Replace",
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_TotalDmgUp</span>.",
      "type": "Other",
      "statusName": "Shatter the Adamant",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_KillCount",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_TotalDmgUp",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0021_ADF_1) || Variables[1] (ChallengePeakBattle_Plugins_0021_ADF_2) || Variables[2] (MDF_KillCount) || MUL || ADD || RETURN",
                "displayLines": "(ChallengePeakBattle_Plugins_0021_ADF_1 + (ChallengePeakBattle_Plugins_0021_ADF_2 * MDF_KillCount))",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0021_ADF_1",
                  "ChallengePeakBattle_Plugins_0021_ADF_2",
                  "MDF_KillCount"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_TotalDmgUp) || RETURN",
                "displayLines": "MDF_TotalDmgUp",
                "constants": [],
                "variables": [
                  "MDF_TotalDmgUp"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Got a Kill [Owner]",
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1871244851\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0021_02</a>[<span class=\"descriptionNumberColor\">Shatter the Adamant</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0021_ADF_1": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0021_ADF_1) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0021_ADF_1",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0021_ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0021_ADF_2": {
                      "operator": "Variables[0] (ChallengePeakBattle_Plugins_0021_ADF_2) || RETURN",
                      "displayLines": "ChallengePeakBattle_Plugins_0021_ADF_2",
                      "constants": [],
                      "variables": [
                        "ChallengePeakBattle_Plugins_0021_ADF_2"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__432807242\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0021</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1871244851\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0021_02</a>[<span class=\"descriptionNumberColor\">Shatter the Adamant</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0021_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_Plugins_0021_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    }
                  },
                  "addStacksPerTrigger": 0
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}