const configAbility = {
  "fileName": "HeyOverHere_Ability22001",
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
      "modifier": "LC_22001_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_22001_Sub[<span class=\"descriptionNumberColor\">Outgoing Healing Boost</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoing</span>&nbsp;",
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
      "description": "Increases Outgoing Healing by <span class=\"descriptionNumberColor\">#SkillEquip_P2_HealRatio</span>.",
      "type": "Buff",
      "effectName": "Outgoing Healing Boost",
      "statusName": "Outgoing Healing Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_22001_Main",
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "LC_22001_Sub[<span class=\"descriptionNumberColor\">Outgoing Healing Boost</span>]",
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
  "desc": "Increases the wearer's Max HP by #1[i]%. When the wearer uses their Skill, increases Outgoing Healing by #2[i]%, lasting for #3[i] turn(s).",
  "params": [
    [
      0.08,
      0.16,
      2
    ],
    [
      0.09,
      0.19,
      2
    ],
    [
      0.1,
      0.22,
      2
    ],
    [
      0.11,
      0.25,
      2
    ],
    [
      0.12,
      0.28,
      2
    ]
  ]
}