const configAbility = {
  "fileName": "20037_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1808493640\">Enemy_Standard_LocalLegend_Init_LockHp</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.9
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__449361701\">Enemy_Standard_LocalLegend_Init_MuteBreak</a>",
      "modifierFlags": [
        "MuteBreak"
      ]
    }
  ],
  "references": []
}