const configAbility = {
  "fileName": "Arrows_Ability20000",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_20000_Main[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
      "duration": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_20000_Main[<span class=\"descriptionNumberColor\">CRIT Rate Boost</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
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
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "CRIT Rate +<span class=\"descriptionNumberColor\">#SkillEquip_P1_CriticalChance</span>.",
      "type": "Buff",
      "effectName": "CRIT Rate Boost",
      "statusName": "CRIT Rate Boost"
    }
  ],
  "isLightcone": true,
  "desc": "At the start of the battle, the wearer's CRIT Rate increases by #1[i]% for #2[i] turn(s).",
  "params": [
    [
      0.12,
      3
    ],
    [
      0.15,
      3
    ],
    [
      0.18,
      3
    ],
    [
      0.21,
      3
    ],
    [
      0.24,
      3
    ]
  ]
}