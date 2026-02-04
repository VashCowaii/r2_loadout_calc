const configAbility = {
  "fileName": "1012021_Monster_W1_GSMecha_01_PassiveAbility_KlaraCamera",
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
      "modifier": "Monster_W1_GSMecha_01_PassiveAbility_KlaraEnterBattle"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Monster_W1_GSMecha_01_PassiveAbility_KlaraEnterBattle",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -55
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}