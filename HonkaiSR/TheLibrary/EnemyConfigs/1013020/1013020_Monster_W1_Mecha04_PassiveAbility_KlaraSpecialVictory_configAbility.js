const configAbility = {
  "fileName": "1013020_Monster_W1_Mecha04_PassiveAbility_KlaraSpecialVictory",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-220942891\">Monster_W1_Mecha04_KlaraSpecialVictory_LockHP</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__151548297\">Monster_W1_Mecha04_Instance_DisableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-220942891\">Monster_W1_Mecha04_KlaraSpecialVictory_LockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.01
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"151548297\">Monster_W1_Mecha04_Instance_DisableAction</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}