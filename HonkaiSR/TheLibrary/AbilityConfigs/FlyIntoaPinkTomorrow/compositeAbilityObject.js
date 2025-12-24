const compositeAbilityObject = {
  "fullCharacterName": "Fly Into a Pink Tomorrow",
  "trimCharacterName": "FlyIntoaPinkTomorrow",
  "abilityList": [
    "FlyIntoaPinkTomorrow_Ability22006"
  ],
  "abilityObject": {
    "FlyIntoaPinkTomorrow_Ability22006": {
      "fileName": "FlyIntoaPinkTomorrow_Ability22006",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_22006_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_22006_Halo[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.08) || RETURN",
                    "displayLines": "0.08",
                    "constants": [],
                    "variables": [
                      0.08
                    ]
                  }
                }
              ]
            }
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">#SkillEquip_P2_DamageAddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_22006_Sub2",
          "execute": [
            {
              "eventTrigger": "When Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.6) || RETURN",
                    "displayLines": "0.6",
                    "constants": [],
                    "variables": [
                      0.6
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Attack End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "LC_22006_Sub",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Name",
                    "skillName": "Skill11"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster + Memosprite",
                      "modifier": "LC_22006_Sub2"
                    }
                  ]
                }
              ]
            }
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": "Allied Team(ALL) [Exclude battle mechanics]",
              "modifier": "LC_22006_Halo[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "haloStatus": true
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "LC_22006_Main",
          "execute": [
            {
              "eventTrigger": "When Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 8007,
                        "target": "Caster",
                        "characterName": "{NICKNAME}"
                      },
                      {
                        "name": "Character ID",
                        "ID": 8008,
                        "target": "Caster",
                        "characterName": "{NICKNAME}"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "LC_22006_Sub"
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
      "desc": "Increases the wearer's CRIT DMG by #1[i]%. When equipped by Trailblazer (Remembrance), increases all ally targets' DMG dealt by #2[i]% and increases the DMG dealt by the Enhanced Basic ATK \"Together, We Script Tomorrow!\" by #3[i]%.",
      "params": [
        [
          0.12,
          0.08,
          0.6
        ],
        [
          0.15,
          0.1,
          0.7
        ],
        [
          0.18,
          0.12,
          0.8
        ],
        [
          0.21,
          0.14,
          0.9
        ],
        [
          0.24,
          0.16,
          1
        ]
      ]
    }
  },
  "isLightcone": true
}