const configAbility = {
  "fileName": "3021043_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__777357174\">Enemy_W2_Beast02_BlockDamage_FateRin</a>[<span class=\"descriptionNumberColor\">Barrier</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "BlockDamageExcludeDot",
        "MuteBreak"
      ],
      "useEntitySnapshot": true,
      "description": "%DynamicTargetName nullifies all DMG received except DoTs. This state is dispelled after being attacked.",
      "type": "Buff",
      "effectName": "Barrier",
      "statusName": "Barrier",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Set Hit-Class",
              "reset": true
            }
          ]
        },
        {
          "eventTrigger": "Take Damage End [Owner]: Hit"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Set Target Parameter",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "paramTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MMonster_W2_Beast02_00_BlockDamage_FateRin_DynamicTarget"
            },
            {
              "name": "Set Hit-Class"
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Damage was Blocked",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "passed": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "function": "Add"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-899723889\">Monster_ArgentiTotem_ListenToSummer</a>",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "PowerFlag"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1996205483\">Enemy_W2_ArgentiTotem_Initiate</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-463337026\">Enemy_W2_ArgentiTotem_01_Initiate</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"803386037\">Enemy_W2_ArgentiTotem_02_Initiate</a>"
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}