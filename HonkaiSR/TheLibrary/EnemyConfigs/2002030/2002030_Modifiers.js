const configAbility = {
  "fileName": "2002030_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-315004140\">Standard_Shake</a>[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
      "modifierFlags": [
        "DisableAction",
        "STAT_CTRL_Shake",
        "STAT_CTRL",
        "AvatarBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "advanceType": "Set",
              "multiAdd": "MDF_ActionDelayRatio"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "living": true
              }
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": null,
                "compareType": "=",
                "value2": 1,
                "valueType": "LifeTime"
              },
              "passed": [
                "Abort Modifier Phase Action"
              ],
              "failed": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "popUpText": "Engulfed in Strong Reverberations"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Disable Abilities",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "abilityTypes": [
                "Ultimate"
              ],
              "text": "Ability cannot be used"
            }
          ]
        }
      ],
      "description": "Action delayed. Cannot take actions for a certain number of turns.",
      "type": "Debuff",
      "effectName": "Strong Reverberation",
      "statusName": "Strong Reverberation"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__221482818\">Standard_Unstable</a>[<span class=\"descriptionNumberColor\">Reverberation</span>]",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-315004140\">Standard_Shake</a>[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
              "duration": 1,
              "valuePerStack": {
                "MDF_ActionDelayRatio": {
                  "operator": "Variables[0] (MDF_Shake_ActionDelayRatio) || RETURN",
                  "displayLines": "MDF_Shake_ActionDelayRatio",
                  "constants": [],
                  "variables": [
                    "MDF_Shake_ActionDelayRatio"
                  ]
                }
              },
              "success": []
            },
            "Modifier Deletes Itself"
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_Shake_ActionDelayRatio"
      ],
      "latentQueue": [],
      "description": "After receiving an attack, enters Strong Reverberation, then dispels Reverberation.",
      "type": "Debuff",
      "effectName": "Reverberation",
      "statusName": "Reverberation"
    }
  ],
  "references": []
}