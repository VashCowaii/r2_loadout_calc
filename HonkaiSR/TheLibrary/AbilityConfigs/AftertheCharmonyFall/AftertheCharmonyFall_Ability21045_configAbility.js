const configAbility = {
  "fileName": "AftertheCharmonyFall_Ability21045",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_21045_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_21045_Sub[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
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
      "description": "Increases SPD by <span class=\"descriptionNumberColor\">#SkillEquip_P2_SpeedAddedRatio</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21045_Main",
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
                  "modifier": "LC_21045_Sub[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
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
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": "Owner of this Modifier",
        "skillType": [
          "Ultimate"
        ],
        "conditions": {
          "name": "Has Modifier",
          "target": "Owner of this Modifier",
          "modifier": "LC_21045_Sub[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "invertCondition": true
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "0.08(SPD Change)"
        }
      }
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's Break Effect by #1[i]%. After the wearer uses Ultimate, increases SPD by #2[i]%, lasting for #3[i] turn(s).",
  "params": [
    [
      0.28,
      0.08,
      2
    ],
    [
      0.35,
      0.1,
      2
    ],
    [
      0.42,
      0.12,
      2
    ],
    [
      0.49,
      0.14,
      2
    ],
    [
      0.56,
      0.16,
      2
    ]
  ]
}