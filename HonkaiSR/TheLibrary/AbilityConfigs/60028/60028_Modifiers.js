const configAbility = {
  "fileName": "60028_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__121064899\">Modifier_StageSpecialAbility_10441217_BanUltra</a>",
      "execute": [
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
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1578480323\">Modifier_StageSpecialAbility_10441217_ForceActionable</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Tutorial"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1578480323\">Modifier_StageSpecialAbility_10441217_ForceActionable</a>",
      "modifierFlags": [
        "STAT_ForceActionable"
      ],
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Tutorial"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1300476012\">Modifier_StageSpecialAbility_10441217_Sub</a>[<span class=\"descriptionNumberColor\">Command Spell</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_DamageUpRatio",
              "value": {
                "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                "displayLines": "{[Skill03[0]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[0]]}"
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
                "operator": "Variables[0] (MDF_DamageUpRatio) || RETURN",
                "displayLines": "MDF_DamageUpRatio",
                "constants": [],
                "variables": [
                  "MDF_DamageUpRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_Trigger"
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio</span>.",
      "type": "Buff",
      "effectName": "Command Spell",
      "statusName": "Command Spell"
    }
  ],
  "references": []
}