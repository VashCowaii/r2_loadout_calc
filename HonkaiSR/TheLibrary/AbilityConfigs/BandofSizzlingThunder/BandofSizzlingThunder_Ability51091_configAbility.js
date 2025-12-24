const configAbility = {
  "fileName": "BandofSizzlingThunder_Ability51091",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Relic_109_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Relic_109_Sub[<span class=\"descriptionNumberColor\">Band of Sizzling Thunder</span>]",
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
      ],
      "description": "ATK +<span class=\"descriptionNumberColor\">#SkillRelic_109_4_P1_AttackAddedRatio</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Band of Sizzling Thunder"
    },
    {
      "name": "Modifier Construction",
      "for": "Relic_109_Main",
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
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Relic_109_Sub[<span class=\"descriptionNumberColor\">Band of Sizzling Thunder</span>]",
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
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "isRelic": true,
  "desc": [
    "Increases Lightning DMG by 10%.",
    "When the wearer uses their Skill, increases the wearer's ATK by 20% for 1 turn(s)."
  ],
  "params": [
    [
      0.1
    ],
    [
      0.2,
      1
    ]
  ]
}