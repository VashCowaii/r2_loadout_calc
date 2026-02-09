const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_Challenge_New_03",
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
      "modifier": "<a class=\"gModGreen\" id=\"923200482\">Modifier_BattleEventAbility_Challenge_New_03</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1686422512\">MLevel_BattleEventAbility_Challenge_New_03</a>[<span class=\"descriptionNumberColor\">Weakness Break Efficiency Boost</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ADF_1) || RETURN",
                "displayLines": "ADF_1",
                "constants": [],
                "variables": [
                  "ADF_1"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "description": "Increases Weakness Break Efficiency by <span class=\"descriptionNumberColor\">ADF_1</span>, dispelled after attacking.",
      "type": "Buff",
      "effectName": "Weakness Break Efficiency Boost",
      "statusName": "Weakness Break Efficiency Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__923200482\">Modifier_BattleEventAbility_Challenge_New_03</a>",
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1686422512\">MLevel_BattleEventAbility_Challenge_New_03</a>[<span class=\"descriptionNumberColor\">Weakness Break Efficiency Boost</span>]",
              "valuePerStack": {
                "ADF_1": {
                  "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
                  "displayLines": "#BattleEvent_P1_ADF",
                  "constants": [],
                  "variables": [
                    "#BattleEvent_P1_ADF"
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}