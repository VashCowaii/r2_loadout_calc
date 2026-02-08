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
      "modifier": "<a class=\"gModGreen\" id=\"1143439505\">Memosprite_PlayerBoyServant_30_DeathRattle</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1143439505\">Memosprite_PlayerBoyServant_30_DeathRattle</a>",
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
              "multiAdd": "(0 - 0.25)"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}