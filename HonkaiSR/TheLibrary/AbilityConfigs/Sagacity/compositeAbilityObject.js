const compositeAbilityObject = {
  "fullCharacterName": "Sagacity",
  "trimCharacterName": "Sagacity",
  "abilityList": [
    "Sagacity_Ability20020"
  ],
  "fixedStats": {},
  "abilityObject": {
    "Sagacity_Ability20020": {
      "fileName": "Sagacity_Ability20020",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_20020_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_20020_Sub[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.24) || RETURN",
                    "displayLines": "0.24",
                    "constants": [],
                    "variables": [
                      0.24
                    ]
                  }
                }
              ]
            }
          ],
          "description": "ATK +<span class=\"descriptionNumberColor\">#SkillEquip_P1_AttackAddedRatio</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "ATK Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_20020_Main",
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
                      "to": "Owner of this Modifier",
                      "modifier": "LC_20020_Sub[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
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
      "desc": "When the wearer uses their Ultimate, increases ATK by #1[i]% for #2[i] turn(s).",
      "params": [
        [
          0.24,
          2
        ],
        [
          0.3,
          2
        ],
        [
          0.36,
          2
        ],
        [
          0.42,
          2
        ],
        [
          0.48,
          2
        ]
      ]
    }
  },
  "isLightcone": true
}