const configAbility = {
  "fileName": "1002021_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1281886828\">Monster_W1_Soldier01_03_Bonus</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "description": "ATK +<span class=\"descriptionNumberColor\">Modifier_AttackAddedRatio</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "ATK Boost",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "statValue": {
                "displayLines": "Modifier_AttackAddedRatio"
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "statValue": {
                "displayLines": "Modifier_SpeedDelta"
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}