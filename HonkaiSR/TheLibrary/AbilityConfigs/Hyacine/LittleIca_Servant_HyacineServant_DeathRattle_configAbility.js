const configAbility = {
  "fileName": "LittleIca_Servant_HyacineServant_DeathRattle",
  "childAbilityList": [
    "LittleIca_Servant_HyacineServant_DeathRattle"
  ],
  "skillTrigger": "SkillP04",
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
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "Memosprite_HyacineServant_DeathRattle"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Memosprite_HyacineServant_DeathRattle",
      "modifierFlags": [
        "Deathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "advanceType": "Set",
              "multi": "(0 - 0.3)"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}