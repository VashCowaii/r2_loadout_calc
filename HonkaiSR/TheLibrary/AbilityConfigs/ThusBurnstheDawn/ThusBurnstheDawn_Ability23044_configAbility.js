const configAbility = {
  "fileName": "ThusBurnstheDawn_Ability23044",
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
      "modifier": "<a class=\"gModGreen\" id=\"-356600426\">LC_23044_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__237864619\">LC_23044_Sub2</a>[<span class=\"descriptionNumberColor\">Dispossession</span>]",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": "(0 - MDF_PropertyValue)"
                }
              ]
            }
          ]
        }
      ],
      "description": "When dealing DMG, ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of the target's DEF.",
      "type": "Buff",
      "statusName": "Dispossession"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__613021115\">LC_23044_Sub</a>[<span class=\"descriptionNumberColor\">Blazing Sun</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            "Modifier Deletes Itself"
          ],
          "priorityLevel": 200
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. This effect is dispelled at the start of its turn.",
      "type": "Buff",
      "effectName": "Blazing Sun",
      "statusName": "Blazing Sun"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-356600426\">LC_23044_Main</a>",
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"613021115\">LC_23044_Sub</a>[<span class=\"descriptionNumberColor\">Blazing Sun</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.6) || RETURN",
                      "displayLines": "0.6",
                      "constants": [],
                      "variables": [
                        0.6
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"237864619\">LC_23044_Sub2</a>[<span class=\"descriptionNumberColor\">Dispossession</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.18) || RETURN",
                  "displayLines": "0.18",
                  "constants": [],
                  "variables": [
                    0.18
                  ]
                }
              }
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
  "desc": "The wearer's base SPD increases by #1[i]. When dealing DMG, ignores #2[i]% of the target's DEF. After the wearer uses Ultimate, gains \"Blazing Sun,\" which is removed at the start of the turn. While holding \"Blazing Sun,\" increases the wearer's DMG dealt by #3[i]%.",
  "params": [
    [
      12,
      0.18,
      0.6
    ],
    [
      14,
      0.225,
      0.78
    ],
    [
      16,
      0.27,
      0.96
    ],
    [
      18,
      0.315,
      1.14
    ],
    [
      20,
      0.36,
      1.32
    ]
  ]
}