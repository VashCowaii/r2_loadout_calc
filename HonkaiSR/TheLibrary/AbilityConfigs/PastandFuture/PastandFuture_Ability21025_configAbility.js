const configAbility = {
  "fileName": "PastandFuture_Ability21025",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_21025_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_21025_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.16) || RETURN",
                "displayLines": "0.16",
                "constants": [],
                "variables": [
                  0.16
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">#SkillEquip_P1_DamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21025_Main",
      "execute": [
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
                {
                  "name": "Find New Target",
                  "from": "All Teammates (Excluding Owner)",
                  "searchRandom": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Target is Next Turn",
                    "target": "Use Prior Target(s) Defined",
                    "partOf": "All Teammates (Excluding Owner)",
                    "exclude": "Owner of this Modifier"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "LC_21025_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "duration": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      }
                    }
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
  ],
  "isLightcone": true,
  "desc": "When the wearer uses their Skill, the next ally taking action (except the wearer) deals #1[i]% increased DMG for #2[i] turn(s).",
  "params": [
    [
      0.16,
      1
    ],
    [
      0.2,
      1
    ],
    [
      0.24,
      1
    ],
    [
      0.28,
      1
    ],
    [
      0.32,
      1
    ]
  ]
}