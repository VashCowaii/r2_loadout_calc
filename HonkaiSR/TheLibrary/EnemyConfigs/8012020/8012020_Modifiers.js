const configAbility = {
  "fileName": "8012020_Modifiers",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "%CasterName will focus attacks on this target.",
      "type": "Other",
      "effectName": "Lock On",
      "statusName": "Lock On"
    }
  ],
  "references": []
}