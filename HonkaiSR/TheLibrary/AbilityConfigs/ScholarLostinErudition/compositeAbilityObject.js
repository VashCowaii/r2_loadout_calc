const compositeAbilityObject = {
  "fullCharacterName": "Scholar Lost in Erudition",
  "trimCharacterName": "ScholarLostinErudition",
  "abilityList": [
    "ScholarLostinErudition_Ability51221"
  ],
  "abilityObject": {
    "ScholarLostinErudition_Ability51221": {
      "fileName": "ScholarLostinErudition_Ability51221",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Relic_122_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_122_Sub[<span class=\"descriptionNumberColor\">Scholar Lost in Erudition</span>]",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_SkillFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
              ]
            },
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
                      "name": "Define Custom Variable",
                      "variableName": "_SkillFlag",
                      "value": 1
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
                    "skillType": "Skill"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "description": "Increases DMG dealt when using Skill by <span class=\"descriptionNumberColor\">#SkillRelic_122_4_P2_DamageAddedRatio</span>.",
          "type": "Buff",
          "effectName": "Skill DMG Boost",
          "statusName": "Scholar Lost in Erudition"
        },
        {
          "name": "Modifier Construction",
          "for": "Relic_122_Main",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill",
                      "Ultimate"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.2) || RETURN",
                        "displayLines": "0.2",
                        "constants": [],
                        "variables": [
                          0.2
                        ]
                      }
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
                      "to": "Caster",
                      "modifier": "Relic_122_Sub[<span class=\"descriptionNumberColor\">Scholar Lost in Erudition</span>]"
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
        "Increases CRIT Rate by 8%.",
        "Increases DMG dealt by Skill and Ultimate by 20%. After using Ultimate, additionally increases the DMG dealt by the next Skill by 25%."
      ],
      "params": [
        [
          0.08
        ],
        [
          0.2,
          0.25
        ]
      ]
    }
  },
  "fixedStats": {
    "2": {
      "CritRateBase": 0.08
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}