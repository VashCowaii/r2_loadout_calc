const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0020",
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
      "modifier": "<a class=\"gModGreen\" id=\"449584861\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0020</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__96867120\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0020_02</a>[<span class=\"descriptionNumberColor\">Electrical Firestorm</span>]",
      "modifierFlags": [
        "WEAKNESS_IMPLANT"
      ],
      "description": "Has additional Fire and Lightning Weaknesses applied, and Fire and Lightning RES decreases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0020_ADF_1</span>.",
      "type": "Other",
      "statusName": "Electrical Firestorm",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Attach",
              "valueList": [
                "Fire",
                "Thunder"
              ]
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceFireBonus</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0020_ADF_1) || INVERT || RETURN",
                "displayLines": "-ChallengePeakBattle_Plugins_0020_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0020_ADF_1"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceLightningBonus</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0020_ADF_1) || INVERT || RETURN",
                "displayLines": "-ChallengePeakBattle_Plugins_0020_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0020_ADF_1"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__449584861\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0020</a>",
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
                    "team": "Enemy Team"
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 802501000,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Character ID",
                        "ID": 802202000,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Character ID",
                        "ID": 802203000,
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
                  "modifier": "<a class=\"gModGreen\" id=\"96867120\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0020_02</a>[<span class=\"descriptionNumberColor\">Electrical Firestorm</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0020_ADF_1": {
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
        }
      ]
    }
  ]
}