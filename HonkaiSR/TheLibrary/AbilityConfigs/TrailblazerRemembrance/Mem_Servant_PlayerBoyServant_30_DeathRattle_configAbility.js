const configAbility = {
  "fileName": "Mem_Servant_PlayerBoyServant_30_DeathRattle",
  "childAbilityList": [
    "Mem_Servant_PlayerBoyServant_30_DeathRattle"
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
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}.[[getSummoner]]"
              },
              "advanceType": "Set",
              "multi": "(0 - 0.25)"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}