const configAbility = {
  "fileName": "Mediation_Ability20019",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_20019_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_20019_Sub[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "execute": [
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (12)",
                "displayLines": "12",
                "constants": [],
                "variables": [
                  12
                ]
              }
            }
          ]
        }
      ],
      "description": "SPD +<span class=\"descriptionNumberColor\">#SkillEquip_P1_SpeedDelta</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_20019_Main",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Allied Team(No Memosprite)",
                  "modifier": "LC_20019_Sub[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
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
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "Upon entering battle, increases SPD of all allies by #1[i] points for #2[i] turn(s).",
  "params": [
    [
      12,
      1
    ],
    [
      14,
      1
    ],
    [
      16,
      1
    ],
    [
      18,
      1
    ],
    [
      20,
      1
    ]
  ]
}