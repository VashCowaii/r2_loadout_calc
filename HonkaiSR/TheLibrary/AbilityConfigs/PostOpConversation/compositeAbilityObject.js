const compositeAbilityObject = {
  "fullCharacterName": "Post-Op Conversation",
  "trimCharacterName": "PostOpConversation",
  "abilityList": [
    "PostOpConversation_Ability21000"
  ],
  "fixedStats": {
    "1": {
      "EnergyRegenRate": 0.08
    },
    "2": {
      "EnergyRegenRate": 0.1
    },
    "3": {
      "EnergyRegenRate": 0.12
    },
    "4": {
      "EnergyRegenRate": 0.14
    },
    "5": {
      "EnergyRegenRate": 0.16
    }
  },
  "abilityObject": {
    "PostOpConversation_Ability21000": {
      "fileName": "PostOpConversation_Ability21000",
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
          "modifier": "LC_21000_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21000_Main",
          "execute": [
            {
              "eventTrigger": "Heal Target Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Healing Stats",
                      "on": "Healer",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
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
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's Energy Regeneration Rate by #1[i]% and increases Outgoing Healing when they use their Ultimate by #2[i]%.",
      "params": [
        [
          0.08,
          0.12
        ],
        [
          0.1,
          0.15
        ],
        [
          0.12,
          0.18
        ],
        [
          0.14,
          0.21
        ],
        [
          0.16,
          0.24
        ]
      ]
    }
  },
  "isLightcone": true
}