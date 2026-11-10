const configAbility = {
  "fileName": "8012021_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1906134144\">Enemy_AML_Minion03_Target</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "TeamAction"
      ],
      "description": "%CasterName will focus attacks on this target.",
      "type": "Other",
      "effectName": "Lock On",
      "statusName": "Lock On",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Modifier Description",
              "popUpText": "Targeted by %CasterName. Receives <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> more DMG."
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}