const configAbility = {
  "fileName": "GlobalAbilitiesE_Monster_Standard_MuteHitFly",
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
      "modifier": "Local_MuteHitFly"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Local_MuteHitFly",
      "modifierFlags": [
        "MuteHitFly"
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}