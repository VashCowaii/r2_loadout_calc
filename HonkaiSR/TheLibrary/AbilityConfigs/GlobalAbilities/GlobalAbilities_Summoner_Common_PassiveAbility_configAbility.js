const configAbility = {
  "fileName": "GlobalAbilities_Summoner_Common_PassiveAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Single Target (Primary)",
      "modifier": "Summoner_Common_PassiveModifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Summoner_Common_PassiveModifier",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Skill"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": "Caster's Memosprite",
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": "Caster's Memosprite",
                      "toRemove": [
                        "STAT_CTRL",
                        "DisableAction"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target Exists",
                "target": "Caster's Memosprite",
                "living": true
              },
              "passed": [
                {
                  "name": "Dispel Debuffs",
                  "target": "Caster's Memosprite",
                  "toRemove": [
                    "STAT_CTRL",
                    "DisableAction"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}