const configAbility = {
  "fileName": "ForTomorrowsJourney_Ability22002",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_22002_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_22002_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
                "operator": "Variables[0] (0.18)",
                "displayLines": "0.18",
                "constants": [],
                "variables": [
                  0.18
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
      "for": "LC_22002_Main",
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
                  "to": "Owner of this Modifier",
                  "modifier": "LC_22002_Sub[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "duration": {
                    "operator": "Variables[0] (1)",
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
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's ATK by #1[i]%. After the wearer uses their Ultimate, increases their DMG dealt by #2[i]%, lasting for #3[i] turn(s).",
  "params": [
    [
      0.16,
      0.18,
      1
    ],
    [
      0.2,
      0.21,
      1
    ],
    [
      0.24,
      0.24,
      1
    ],
    [
      0.28,
      0.27,
      1
    ],
    [
      0.32,
      0.3,
      1
    ]
  ]
}