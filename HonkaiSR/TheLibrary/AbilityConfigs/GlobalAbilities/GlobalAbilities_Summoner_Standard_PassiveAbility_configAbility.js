const configAbility = {
  "fileName": "GlobalAbilities_Summoner_Standard_PassiveAbility",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Ability Target(ST)}}"
      },
      "modifier": "Summoner_Standard_PassiveModifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Summoner_Standard_PassiveModifier",
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}.[[getMemosprite]]"
                    },
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}.[[getMemosprite]]"
                      },
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
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}.[[getMemosprite]]"
                },
                "living": true
              },
              "passed": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}.[[getMemosprite]]"
                  },
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