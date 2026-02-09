const configAbility = {
  "fileName": "1002020_Modifiers",
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
                "operator": "Variables[0] (Modifier_SpeedDelta) || RETURN",
                "displayLines": "Modifier_SpeedDelta",
                "constants": [],
                "variables": [
                  "Modifier_SpeedDelta"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "Modifier_AttackAddedRatio",
        "Modifier_SpeedDelta"
      ],
      "latentQueue": [],
      "description": "ATK +<span class=\"descriptionNumberColor\">Modifier_AttackAddedRatio</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "ATK Boost"
    }
  ],
  "references": []
}