const compositeAbilityObject = {
  "fullCharacterName": "Firesmith of Lava-Forging",
  "trimCharacterName": "FiresmithofLavaForging",
  "abilityList": [
    "FiresmithofLavaForging_Ability51071"
  ],
  "abilityObject": {
    "FiresmithofLavaForging_Ability51071": {
      "fileName": "FiresmithofLavaForging_Ability51071",
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
          "modifier": "<a class=\"gModGreen\" id=\"496104730\">Relic_107_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2026250788\">Relic_107_FireDamageAddRatio</a>[<span class=\"descriptionNumberColor\">Firesmith of Lava-Forging</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageFire</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.12) || RETURN",
                    "displayLines": "0.12",
                    "constants": [],
                    "variables": [
                      0.12
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "description": "The next attack's Fire DMG increases by <span class=\"descriptionNumberColor\">#SkillRelic_107_4_P2_DamageAddedRatio</span>.",
          "type": "Buff",
          "effectName": "Fire DMG Boost",
          "statusName": "Firesmith of Lava-Forging"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__496104730\">Relic_107_Main</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.12"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
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
                      "modifier": "<a class=\"gModGreen\" id=\"2026250788\">Relic_107_FireDamageAddRatio</a>[<span class=\"descriptionNumberColor\">Firesmith of Lava-Forging</span>]"
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
      "isRelic": true,
      "desc": [
        "Increases Fire DMG by 10%.",
        "Increases DMG by the wearer's Skill by 12%. After unleashing Ultimate, increases the wearer's Fire DMG by 12% for the next attack."
      ],
      "params": [
        [
          0.1
        ],
        [
          0.12,
          0.12
        ]
      ]
    }
  },
  "fixedStats": {
    "2": {
      "DamageFire": 0.1
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}