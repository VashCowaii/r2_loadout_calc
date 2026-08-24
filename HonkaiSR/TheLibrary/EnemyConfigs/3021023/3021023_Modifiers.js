const configAbility = {
  "fileName": "3021023_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1086329449\">Enemy_Argenti_DamageUP_FateRin_Sub</a>",
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
                "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                "displayLines": "MDF_ShowValue1",
                "constants": [],
                "variables": [
                  "MDF_ShowValue1"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1125306110\">Enemy_Argenti_DamageUP_FateRin</a>",
      "stackType": "Replace",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Override Modifier Name",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"1125306110\">Enemy_Argenti_DamageUP_FateRin</a>",
              "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-957742074\">Enemy_Argenti_DamageUP</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Add Target by Unique Identifier",
                "identifier": "Activity_FateRin_BigTurn_LightTeamAgent"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1086329449\">Enemy_Argenti_DamageUP_FateRin_Sub</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1086329449\">Enemy_Argenti_DamageUP_FateRin_Sub</a>"
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_ShowValue2",
              "multiplier": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Add Target by Unique Identifier",
                "identifier": "Activity_FateRin_BigTurn_LightTeamAgent"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1086329449\">Enemy_Argenti_DamageUP_FateRin_Sub</a>",
              "valuePerStack": {
                "MDF_ShowValue1": {
                  "operator": "Variables[0] (MDF_ShowValue1) || Variables[1] (MDF_ShowValue2) || MUL || RETURN",
                  "displayLines": "(MDF_ShowValue1 * MDF_ShowValue2)",
                  "constants": [],
                  "variables": [
                    "MDF_ShowValue1",
                    "MDF_ShowValue2"
                  ]
                }
              },
              "asSubModifier": true
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1086329449\">Enemy_Argenti_DamageUP_FateRin_Sub</a>",
              "valuePerStack": {
                "MDF_ShowValue1": {
                  "operator": "Variables[0] (MDF_ShowValue1) || Variables[1] (MDF_ShowValue2) || MUL || RETURN",
                  "displayLines": "(MDF_ShowValue1 * MDF_ShowValue2)",
                  "constants": [],
                  "variables": [
                    "MDF_ShowValue1",
                    "MDF_ShowValue2"
                  ]
                }
              },
              "asSubModifier": true
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-957742074\">Enemy_Argenti_DamageUP</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "Replace",
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost",
      "addStacksPerTrigger": 1,
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
              "variableName": "MDF_ShowValue2",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_ShowValue2) || Variables[1] (MDF_ShowValue1) || MUL || RETURN",
                "displayLines": "(MDF_ShowValue2 * MDF_ShowValue1)",
                "constants": [],
                "variables": [
                  "MDF_ShowValue2",
                  "MDF_ShowValue1"
                ]
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}