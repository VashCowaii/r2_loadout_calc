const configAbility = {
  "fileName": "Mem_Servant_PlayerBoyServant_30_DeathRattle",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Memosprite_PlayerBoyServant_30_DeathRattle"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Memosprite_PlayerBoyServant_30_DeathRattle",
      "modifierFlags": [
        "Deathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "target": "Caster's Summoner",
              "advanceType": "Set",
              "value": "(0 - 0.25)"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}