const configAbility = {
  "fileName": "1002040_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1864245059\">Monster_W1_Soldier01_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
      "stackType": "Replace",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "modifierFlags": [
        "DEF_DOWN"
      ],
      "description": "DEF -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Debuff",
      "effectName": "DEF Reduction",
      "statusName": "DEF Reduction",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
              "statValue": {
                "displayLines": "(0 - MDF_PropertyValue)"
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}