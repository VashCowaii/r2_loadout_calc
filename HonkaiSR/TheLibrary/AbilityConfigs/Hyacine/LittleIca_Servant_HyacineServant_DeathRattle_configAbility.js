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
      "modifier": "<a class=\"gModGreen\" id=\"1268391312\">Memosprite_HyacineServant_DeathRattle</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1268391312\">Memosprite_HyacineServant_DeathRattle</a>",
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
              "multiAdd": "(0 - 0.3)"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}