const compositeAbilityObject = {
  "fullCharacterName": "Hunter of Glacial Forest",
  "trimCharacterName": "HunterofGlacialForest",
  "abilityList": [
    "HunterofGlacialForest_Ability51041"
  ],
  "abilityObject": {
    "HunterofGlacialForest_Ability51041": {
      "fileName": "HunterofGlacialForest_Ability51041",
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
          "modifier": "Relic_104_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_104_CriticalDamage[<span class=\"descriptionNumberColor\">Hunter of Glacial Forest</span>]",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.25) || RETURN",
                    "displayLines": "0.25",
                    "constants": [],
                    "variables": [
                      0.25
                    ]
                  }
                }
              ]
            }
          ],
          "description": "CRIT DMG +<span class=\"descriptionNumberColor\">#SkillRelic_104_4_P1_CriticalDamage</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Hunter of Glacial Forest"
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_104_Main",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
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
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Relic_104_CriticalDamage[<span class=\"descriptionNumberColor\">Hunter of Glacial Forest</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
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
      "isRelic": true,
      "desc": [
        "Increases Ice DMG by 10%.",
        "After the wearer uses their Ultimate, their CRIT DMG increases by 25% for 2 turn(s)."
      ],
      "params": [
        [
          0.1
        ],
        [
          0.25,
          2
        ]
      ]
    }
  },
  "fixedStats": {
    "2": {
      "DamageIce": 0.1
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}