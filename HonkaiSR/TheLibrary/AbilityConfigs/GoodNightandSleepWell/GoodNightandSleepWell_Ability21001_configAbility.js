const configAbility = {
  "fileName": "GoodNightandSleepWell_Ability21001",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_21001_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_21001_DamageUp_Debuff",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable with Status Counter",
              "target": "Use Prior Target(s) Defined",
              "variableName": "_DebuffCount"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_DebuffCount",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                  "displayLines": "MDF_MaxCount",
                  "constants": [],
                  "variables": [
                    "MDF_MaxCount"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DebuffCount",
                  "value": {
                    "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                    "displayLines": "MDF_MaxCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": "(MDF_PropertyValue * _DebuffCount)"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "LC_21001_Main",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "LC_21001_DamageUp_Debuff",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.12) || RETURN",
                  "displayLines": "0.12",
                  "constants": [],
                  "variables": [
                    0.12
                  ]
                },
                "MDF_MaxCount": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                }
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "For every debuff the target enemy has, the DMG dealt by the wearer increases by #1[i]%, stacking up to #2[i] time(s). This effect also applies to DoT.",
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