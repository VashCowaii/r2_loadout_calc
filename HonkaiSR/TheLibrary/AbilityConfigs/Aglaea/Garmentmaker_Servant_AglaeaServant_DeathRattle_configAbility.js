const configAbility = {
  "fileName": "Garmentmaker_Servant_AglaeaServant_DeathRattle",
  "childAbilityList": [
    "Garmentmaker_Servant_AglaeaServant_DeathRattle"
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
      "modifier": "Memosprite_AglaeaServant_DeathRattle"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Memosprite_AglaeaServant_DeathRattle",
      "modifierFlags": [
        "Deathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Was Killed (Queued) [Owner]",
          "execute": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "value": {
                "operator": "Variables[0] (20) || RETURN",
                "displayLines": "20",
                "constants": [],
                "variables": [
                  20
                ]
              },
              "isFixed": "* ERR"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}