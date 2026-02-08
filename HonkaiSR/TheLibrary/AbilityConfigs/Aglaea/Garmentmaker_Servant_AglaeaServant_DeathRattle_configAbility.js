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
      "modifier": "<a class=\"gModGreen\" id=\"1556251146\">Memosprite_AglaeaServant_DeathRattle</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1556251146\">Memosprite_AglaeaServant_DeathRattle</a>",
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