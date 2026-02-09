const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_Challenge_New_06",
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
      "modifier": "<a class=\"gModGreen\" id=\"872867625\">Modifier_BattleEventAbility_Challenge_New_06</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1602534417\">MLevel_BattleEventAbility_Challenge_New_06</a>[<span class=\"descriptionNumberColor\">CRIT Rate and CRIT DMG Boost</span>]",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ADF_1) || RETURN",
                "displayLines": "ADF_1",
                "constants": [],
                "variables": [
                  "ADF_1"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ADF_2) || RETURN",
                "displayLines": "ADF_2",
                "constants": [],
                "variables": [
                  "ADF_2"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases CRIT Rate by <span class=\"descriptionNumberColor\">ADF_1</span> and CRIT DMG by <span class=\"descriptionNumberColor\">ADF_2</span>.",
      "type": "Buff",
      "effectName": "CRIT Rate and CRIT DMG Boost",
      "statusName": "CRIT Rate and CRIT DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__872867625\">Modifier_BattleEventAbility_Challenge_New_06</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Player Team Entity}}"
              },
              "ability": "BattleEventAbility_Camear_AllLightTeam",
              "isTrigger": true
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                  "displayLines": "#BattleEvent_P1_ADF",
                  "constants": [],
                  "variables": [
                    "#BattleEvent_P1_ADF"
                  ]
                }
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1602534417\">MLevel_BattleEventAbility_Challenge_New_06</a>[<span class=\"descriptionNumberColor\">CRIT Rate and CRIT DMG Boost</span>]",
                  "duration": {
                    "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
                    "displayLines": "#BattleEvent_P4_ADF",
                    "constants": [],
                    "variables": [
                      "#BattleEvent_P4_ADF"
                    ]
                  },
                  "valuePerStack": {
                    "ADF_1": {
                      "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P2_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P2_ADF"
                      ]
                    },
                    "ADF_2": {
                      "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P3_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P3_ADF"
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