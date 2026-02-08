const compositeAbilityObject = {
  "fullCharacterName": "Geniuses' Greetings",
  "trimCharacterName": "GeniusesGreetings",
  "abilityList": [
    "GeniusesGreetings_Ability21051"
  ],
  "fixedStats": {
    "1": {
      "ATK%": 0.16
    },
    "2": {
      "ATK%": 0.2
    },
    "3": {
      "ATK%": 0.24
    },
    "4": {
      "ATK%": 0.28
    },
    "5": {
      "ATK%": 0.32
    }
  },
  "abilityObject": {
    "GeniusesGreetings_Ability21051": {
      "fileName": "GeniusesGreetings_Ability21051",
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
          "modifier": "<a class=\"gModGreen\" id=\"-659675954\">LC_21051_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-833650413\">LC_21051_Sub</a>[<span class=\"descriptionNumberColor\">Basic ATK DMG Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.2"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Basic ATK DMG increases by <span class=\"descriptionNumberColor\">#SkillEquip_P2_DamageAddedRatio</span>.",
          "type": "Buff",
          "effectName": "Basic ATK DMG Boost",
          "statusName": "Basic ATK DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-659675954\">LC_21051_Main</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-833650413\">LC_21051_Sub</a>[<span class=\"descriptionNumberColor\">Basic ATK DMG Boost</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Memosprite}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-833650413\">LC_21051_Sub</a>[<span class=\"descriptionNumberColor\">Basic ATK DMG Boost</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's ATK by #1[i]%. After the wearer uses Ultimate, increases the Basic ATK DMG dealt by the wearer and their memosprite by #2[i]%, lasting for #3[i] turn(s).",
      "params": [
        [
          0.16,
          0.2,
          3
        ],
        [
          0.2,
          0.25,
          3
        ],
        [
          0.24,
          0.3,
          3
        ],
        [
          0.28,
          0.35,
          3
        ],
        [
          0.32,
          0.4,
          3
        ]
      ]
    }
  },
  "isLightcone": true
}