const configAbility = {
  "fileName": "TrailblazerDestruction_PlayerBoy_AutoUseUltraAbility",
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
      "modifier": "M_Player_AutoUseUltraAbility"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_Player_AutoUseUltraAbility",
      "stackData": [],
      "latentQueue": []
    }
  ]
}