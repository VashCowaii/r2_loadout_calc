const configAbility = {
  "fileName": "-1097634517_BattleEventAbility_Challenge_12",
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
      "modifier": "<a class=\"gModGreen\" id=\"1818336215\">Modifier_BattleEventAbility_Challenge_12</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1593037657\">MLevel_BattleEventAbility_Challenge_12</a>[<span class=\"descriptionNumberColor\">DEF Boost</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
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
      "description": "Increases DEF by <span class=\"descriptionNumberColor\">ADF_1</span> up to 5 times.",
      "type": "Buff",
      "effectName": "DEF Boost",
      "statusName": "DEF Boost",
      "stackLimit": 5,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1818336215\">Modifier_BattleEventAbility_Challenge_12</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"1593037657\">MLevel_BattleEventAbility_Challenge_12</a>[<span class=\"descriptionNumberColor\">DEF Boost</span>]",
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