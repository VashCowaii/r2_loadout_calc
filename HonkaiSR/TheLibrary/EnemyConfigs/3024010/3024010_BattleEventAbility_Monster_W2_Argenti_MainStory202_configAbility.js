const configAbility = {
  "fileName": "3024010_BattleEventAbility_Monster_W2_Argenti_MainStory202",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Monster_Monster_W2_Argenti_BattlePerform_LockHP"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_Monster_W2_Argenti_BattlePerform_LockHP",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.0009999999
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}