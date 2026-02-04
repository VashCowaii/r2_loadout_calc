const configAbility = {
  "fileName": "1013024_Monster_W1_Mecha04_PassiveAbility_KlaraSpecialVictory",
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
      "modifier": "Monster_W1_Mecha04_KlaraSpecialVictory_LockHP"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha04_Instance_DisableAction",
      "modifierFlags": [
        "DisableAction"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_Mecha04_KlaraSpecialVictory_LockHP",
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
              "modifier": "Monster_W1_Mecha04_Instance_DisableAction"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}