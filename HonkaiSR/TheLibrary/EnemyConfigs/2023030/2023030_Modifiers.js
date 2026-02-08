const configAbility = {
  "fileName": "2023030_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__545314015\">Monster_XP_Elite02_02_DirtyHPSpecial</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with HP%",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_DirtyHPRatio"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (1) || Variables[0] (MDF_DirtyHPRatio) || SUB || RETURN",
                "displayLines": "(1 - MDF_DirtyHPRatio)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_DirtyHPRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Missing Description",
      "type": "Debuff",
      "duration": 2
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-14434436\">Monster_XP_Elite02_02_DirtyHP</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
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
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DirtyHPRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_DirtyHPRatio_PerLayer * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_DirtyHPRatio_PerLayer",
                  "ModifierLayers"
                ]
              }
            }
          ]
        }
      ],
      "description": "Decreases Maximum Restorable HP by <span class=\"descriptionNumberColor\">MDF_DirtyHPRatio_PerLayer</span>.",
      "type": "Debuff",
      "effectName": "Prana-Siphoned",
      "statusName": "Prana-Siphoned",
      "stackLimit": 3,
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1633463751\">Monster_XP_Elite02_02_ChargeEffect</a>[<span class=\"descriptionNumberColor\">Japa</span>]",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself",
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1633463751\">Monster_XP_Elite02_02_ChargeEffect</a>[<span class=\"descriptionNumberColor\">Japa</span>]"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Uses Black Prana's Snare on all targets during the next action.",
      "type": "Buff",
      "effectName": "Japa",
      "statusName": "Japa"
    }
  ],
  "references": []
}