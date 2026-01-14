const configAbility = {
  "fileName": "DanceatSunset_Ability23030",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_23030_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_23030_Sub[<span class=\"descriptionNumberColor\">Firedance</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Follow-up"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "MDF_DamageAddedRatio"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_DamageAddedRatio",
              "value": {
                "operator": "Variables[0] (0.36) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(0.36 * MDF_Layer)",
                "constants": [],
                "variables": [
                  0.36,
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG dealt by Follow-Up ATK increases by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "Follow-Up ATK DMG Boost",
      "statusName": "Firedance"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23030_Main",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (5) || RETURN",
                "displayLines": "5",
                "constants": [],
                "variables": [
                  5
                ]
              }
            }
          ]
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
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "LC_23030_Sub[<span class=\"descriptionNumberColor\">Firedance</span>]",
                  "duration": 2,
                  "stackLimit": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "addStacksPerTrigger": 1
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
  "desc": "Greatly increases the wearer's chance of getting attacked and increases CRIT DMG by #1[i]%. After the wearer uses Ultimate, receives 1 stack of \"Firedance,\" lasting for 2 turns and stacking up to #2[i] time(s). Each stack of \"Firedance\" increases the DMG dealt by the wearer's Follow-Up ATK by #3[i]%.",
  "params": [
    [
      0.36,
      2,
      0.36,
      5
    ],
    [
      0.42,
      2,
      0.42,
      5
    ],
    [
      0.48,
      2,
      0.48,
      5
    ],
    [
      0.54,
      2,
      0.54,
      5
    ],
    [
      0.6,
      2,
      0.6,
      5
    ]
  ]
}