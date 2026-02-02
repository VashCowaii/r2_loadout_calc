const configAbility = {
  "fileName": "GlobalAbilitiesE_Monster_Standard_PassiveAbility_DeadTimeSlow",
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
      "modifier": "RO_015_DeadTimeSlowModifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "RO_015_DeadTimeSlowModifier",
      "execute": [
        {
          "eventTrigger": "When Put in Deathstate Limbo"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}