const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_Challenge_11",
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
      "modifier": "<a class=\"gModGreen\" id=\"1835113834\">Modifier_BattleEventAbility_Challenge_11</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1542704800\">MLevel_BattleEventAbility_Challenge_11</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ADF_1) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(ADF_1 * MDF_Layer)",
                "constants": [],
                "variables": [
                  "ADF_1",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases CRIT Rate by <span class=\"descriptionNumberColor\">ADF_1</span>, up to 5 stacks.",
      "type": "Buff",
      "effectName": "CRIT Rate Boost",
      "statusName": "CRIT Rate Boost",
      "stackLimit": 5,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1835113834\">Modifier_BattleEventAbility_Challenge_11</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"1542704800\">MLevel_BattleEventAbility_Challenge_11</a>[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
              "stackLimit": {
                "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                "displayLines": "#BattleEvent_P2_ADF",
                "constants": [],
                "variables": [
                  "#BattleEvent_P2_ADF"
                ]
              },
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