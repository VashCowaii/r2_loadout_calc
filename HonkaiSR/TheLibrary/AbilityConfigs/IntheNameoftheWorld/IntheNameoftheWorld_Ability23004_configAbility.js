const configAbility = {
  "fileName": "IntheNameoftheWorld_Ability23004",
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
      "modifier": "LC_23004_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_23004_Sub",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.24) || RETURN",
                "displayLines": "0.24",
                "constants": [],
                "variables": [
                  0.24
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (0.18) || RETURN",
                "displayLines": "0.18",
                "constants": [],
                "variables": [
                  0.18
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23004_Main",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target TAKING DMG}}"
                },
                "value1": "StatusCount",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "0.24"
                    }
                  ]
                }
              ]
            }
          ]
        },
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
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_23004_Sub"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "LC_23004_Sub",
              "onlyRemoveOwnersInstance": true
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's DMG to debuffed enemies by #1[i]%. When the wearer uses their Skill, the Effect Hit Rate for this attack increases by #2[i]%, and ATK increases by #3[i]%.",
  "params": [
    [
      0.24,
      0.18,
      0.24
    ],
    [
      0.28,
      0.21,
      0.28
    ],
    [
      0.32,
      0.24,
      0.32
    ],
    [
      0.36,
      0.27,
      0.36
    ],
    [
      0.4,
      0.3,
      0.4
    ]
  ]
}