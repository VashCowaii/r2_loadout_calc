const configAbility = {
  "fileName": "5013071_Monster_W5_RangerGroup_Revive",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1502379157\">Enemy_W5_RangerGroup_SummonedLockHp</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-488756959\">Enemy_W5_RangerGroup_SpecialWin</a>"
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "isFixed": "(Fixed)"
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "multiBase": 1
    },
    {
      "name": "Action Advance/Delay",
      "advanceType": "Set",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "set": 0
    },
    {
      "name": "Assign Advance/Delay to Current Ability Use",
      "adjustmentValue": 0,
      "adjustmentType": "="
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1761388509\">Enemy_W5_Ranger_Main_Ultra</a>[<span class=\"descriptionNumberColor\">Ultimate Daybreak</span>]"
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1577274573\">Enemy_W5_Ranger_Main_UltraViewMode</a>",
      "execute": [
        {
          "eventTrigger": "Enter View-Mode [Anyone]"
        },
        {
          "eventTrigger": "Exit View-Mode [Anyone]"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1761388509\">Enemy_W5_Ranger_Main_Ultra</a>[<span class=\"descriptionNumberColor\">Ultimate Daybreak</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate",
                "invertCondition": true
              }
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate",
                "invertCondition": true
              }
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1577274573\">Enemy_W5_Ranger_Main_UltraViewMode</a>"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": 10
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Cannot be knocked down. Ultimate DMG greatly increases.",
      "type": "Buff",
      "effectName": "Ultimate Daybreak",
      "statusName": "Ultimate Daybreak"
    }
  ]
}