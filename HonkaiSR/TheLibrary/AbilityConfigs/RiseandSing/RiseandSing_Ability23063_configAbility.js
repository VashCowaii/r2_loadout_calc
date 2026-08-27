const configAbility = {
  "fileName": "RiseandSing_Ability23063",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1501866017\">LC_23063_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1882738245\">LC_23063_SpeedBonus_Sub</a>[<span class=\"descriptionNumberColor\">New Melody</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp",
        "RemoveWhenCasterDead"
      ],
      "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedAddedRatio</span>.",
      "type": "Buff",
      "statusName": "New Melody",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedAddedRatio) || RETURN",
                "displayLines": "MDF_SpeedAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_SpeedAddedRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-679741368\">LC_23063_SpeedBonus</a>[<span class=\"descriptionNumberColor\">New Melody</span>]",
      "stackType": "ReplaceByCaster",
      "description": "All allies' SPD increases while held.",
      "type": "Other",
      "effectName": "New Melody",
      "statusName": "New Melody",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1882738245\">LC_23063_SpeedBonus_Sub</a>[<span class=\"descriptionNumberColor\">New Melody</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_SpeedAddedRatio": {
              "operator": "Variables[0] (MDF_SpeedAddedRatio) || RETURN",
              "displayLines": "MDF_SpeedAddedRatio",
              "constants": [],
              "variables": [
                "MDF_SpeedAddedRatio"
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1501866017\">LC_23063_Main</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
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
                  "name": "Skill Points Modification",
                  "adjustmentValue": 1,
                  "adjustmentType": "+"
                }
              ]
            }
          ]
        },
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
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Advance",
                  "multiAdd": "-0.3"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-679741368\">LC_23063_SpeedBonus</a>[<span class=\"descriptionNumberColor\">New Melody</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_SpeedAddedRatio": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ]
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's Max HP by #1[i]%. After the wearer uses Ultimate, recovers 1 Skill Point for allies. When entering combat, advances the wearer's action by #2[i]% and grants the wearer \"New Melody,\" lasting for #4[i] turn(s). While the wearer holds \"New Melody,\" all allies' SPD increases by #3[i]%.",
  "params": [
    [
      0.3,
      0.3,
      0.2,
      2
    ],
    [
      0.375,
      0.325,
      0.25,
      2
    ],
    [
      0.45,
      0.35,
      0.3,
      2
    ],
    [
      0.525,
      0.375,
      0.35,
      2
    ],
    [
      0.6,
      0.4,
      0.4,
      2
    ]
  ]
}