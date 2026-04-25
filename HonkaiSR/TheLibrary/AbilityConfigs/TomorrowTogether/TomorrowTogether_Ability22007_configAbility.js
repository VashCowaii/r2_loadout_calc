const configAbility = {
  "fileName": "TomorrowTogether_Ability22007",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1624034058\">LC_22007_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-639435365\">LC_22007_Sub</a>[<span class=\"descriptionNumberColor\">Elation Boost</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
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
      "description": "Elation increases by <span class=\"descriptionNumberColor\">#SkillEquip_P2_ElationAddedRatio</span>.",
      "type": "Buff",
      "effectName": "Elation Boost",
      "statusName": "Elation Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1624034058\">LC_22007_Main</a>",
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-639435365\">LC_22007_Sub</a>[<span class=\"descriptionNumberColor\">Elation Boost</span>]",
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
  "desc": "Increases the wearer's CRIT DMG by #1[i]%. After the wearer uses their Ultimate, increases all allies' Elation by #2[i]%, lasting for #3[i] turn(s).",
  "params": [
    [
      0.12,
      0.08,
      1
    ],
    [
      0.15,
      0.09,
      1
    ],
    [
      0.18,
      0.1,
      1
    ],
    [
      0.21,
      0.11,
      1
    ],
    [
      0.24,
      0.12,
      1
    ]
  ]
}