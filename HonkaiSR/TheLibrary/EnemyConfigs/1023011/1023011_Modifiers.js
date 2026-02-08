const configAbility = {
  "fileName": "1023011_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1129963596\">Monster_W1_Mecha_Fire_Burning_CD</a>",
      "execute": [
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__188036182\">Monster_W1_Mecha_Fire_Burning</a>[<span class=\"descriptionNumberColor\">Mania</span>]",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1129963596\">Monster_W1_Mecha_Fire_Burning_CD</a>"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (Modifier_AttackAddedRatio) || RETURN",
                "displayLines": "Modifier_AttackAddedRatio",
                "constants": [],
                "variables": [
                  "Modifier_AttackAddedRatio"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] ('Modifier_SpeedDelta) || RETURN",
                "displayLines": "'Modifier_SpeedDelta",
                "constants": [],
                "variables": [
                  "'Modifier_SpeedDelta"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "Modifier_AttackAddedRatio",
        "Modifier_SpeedDelta"
      ],
      "latentQueue": [],
      "description": "Increases ATK by <span class=\"descriptionNumberColor\">Modifier_AttackAddedRatio</span> and SPD by <span class=\"descriptionNumberColor\">Modifier_SpeedDelta</span> pts.",
      "type": "Buff",
      "effectName": "Mania",
      "statusName": "Mania"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1848655652\">Monster_W1_Mecha_Fire_Passive</a>[<span class=\"descriptionNumberColor\">Out of Control</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "ModifierCriticalChanceRatio",
              "value": {
                "operator": "Variables[0] (ModifierCriticalChanceRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(ModifierCriticalChanceRatio_PerLayer * ModifierLayers)",
                "constants": [],
                "variables": [
                  "ModifierCriticalChanceRatio_PerLayer",
                  "ModifierLayers"
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
                "operator": "Variables[0] (ModifierCriticalChanceRatio) || RETURN",
                "displayLines": "ModifierCriticalChanceRatio",
                "constants": [],
                "variables": [
                  "ModifierCriticalChanceRatio"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [
        "ModifierCriticalChanceRatio_PerLayer"
      ],
      "latentQueue": [
        "Monster_W1_Mecha_Fire_PassiveCounter_01"
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">ModifierCriticalChanceRatio</span>. Stack up to 5 times.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Out of Control",
      "stackLimit": 5,
      "addStacksPerTrigger": {
        "operator": "Variables[0] (ModifierStackLayer) || RETURN",
        "displayLines": "ModifierStackLayer",
        "constants": [],
        "variables": [
          "ModifierStackLayer"
        ]
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1466752435\">Monster_W1_Mecha04_01_HeadEffect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}