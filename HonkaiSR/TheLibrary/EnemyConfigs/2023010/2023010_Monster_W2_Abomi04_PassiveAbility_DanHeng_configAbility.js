const configAbility = {
  "fileName": "2023010_Monster_W2_Abomi04_PassiveAbility_DanHeng",
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
      "modifier": "Monster_W2_Abomi04_PassiveAbility_DanHeng"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_W2_Abomi04_PassiveAbility_DanHeng",
      "execute": [
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "OneMorePerTurn"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "OneMore"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}