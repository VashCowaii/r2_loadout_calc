const configAbility = {
  "fileName": "63003_Activity_FinalityBattle_1_CountDown63003",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"42032737\">Modifier_Activity_FinalityBattle_1_CountDown63003</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__42032737\">Modifier_Activity_FinalityBattle_1_CountDown63003</a>",
      "modifierFlags": [
        "MuteResetActionDelay"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        }
      ]
    }
  ]
}