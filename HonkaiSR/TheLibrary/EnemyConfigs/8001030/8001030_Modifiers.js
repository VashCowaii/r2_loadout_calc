const configAbility = {
  "fileName": "8001030_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1727496698\">Monster_XP_Minion03_Attack</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
      "stackType": "ReplaceByCaster",
      "description": "ATK +<span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "ATK Boost",
      "duration": 1,
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
                "displayLines": "MDF_AttackAddedRatio"
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}