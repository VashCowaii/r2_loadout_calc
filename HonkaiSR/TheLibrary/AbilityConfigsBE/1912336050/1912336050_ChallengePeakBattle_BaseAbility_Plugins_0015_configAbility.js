const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0015",
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
      "modifier": "<a class=\"gModGreen\" id=\"-2050030107\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0015</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1429915339\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0015_03</a>[<span class=\"descriptionNumberColor\">Logistics Boost</span>]",
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
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0015_ADF_2) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0015_ADF_2",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0015_ADF_2"
                ]
              }
            }
          ]
        }
      ],
      "description": "SPD increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0015_ADF_2</span>.",
      "type": "Other",
      "statusName": "Logistics Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1413137720\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0015_02</a>[<span class=\"descriptionNumberColor\">Logistics Boost</span>]",
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
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0015_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0015_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0015_ADF_1"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0015_ADF_1</span>.",
      "type": "Other",
      "statusName": "Logistics Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2050030107\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0015</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1413137720\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0015_02</a>[<span class=\"descriptionNumberColor\">Logistics Boost</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0015_ADF_1": {
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Battle Event ID",
                    "ID": 20032,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
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
                  "modifier": "<a class=\"gModGreen\" id=\"1429915339\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0015_03</a>[<span class=\"descriptionNumberColor\">Logistics Boost</span>]",
                  "valuePerStack": {
                    "ChallengePeakBattle_Plugins_0015_ADF_2": {
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