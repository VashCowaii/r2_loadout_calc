const configAbility = {
  "fileName": "1012030_Monster_W1_Mecha01_01_PassiveAbility_KlaraSpecialVictory",
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
      "modifier": "<a class=\"gModGreen\" id=\"-411560977\">Monster_W1_Mecha01_01_KlaraSpecialVictory_LockHP</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__266091507\">Monster_W1_Mecha01_01_Instance_DisableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-411560977\">Monster_W1_Mecha01_01_KlaraSpecialVictory_LockHP</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"266091507\">Monster_W1_Mecha01_01_Instance_DisableAction</a>"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}