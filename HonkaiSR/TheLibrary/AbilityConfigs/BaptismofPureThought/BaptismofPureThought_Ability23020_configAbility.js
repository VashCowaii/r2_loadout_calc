const configAbility = {
  "fileName": "BaptismofPureThought_Ability23020",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "MEquip_23020_Main",
      "valuePerStack": {
        "_DebuffCount": 0,
        "MDF_PropertyValue": {
          "operator": "Variables[0] (0.08)",
          "displayLines": "0.08",
          "constants": [],
          "variables": [
            0.08
          ]
        },
        "MDF_MaxCount": {
          "operator": "Variables[0] (3)",
          "displayLines": "3",
          "constants": [],
          "variables": [
            3
          ]
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "MEquip_23020_Sub[<span class=\"descriptionNumberColor\">Disputation</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage [Owner]: Any",
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
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue2)",
                    "displayLines": "MDF_PropertyValue2",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue2"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue1)",
                "displayLines": "MDF_PropertyValue1",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue1"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue1</span> and Follow-up ATKs ignore <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span> of target DEF.",
      "type": "Buff",
      "effectName": "Disputation",
      "statusName": "Disputation"
    },
    {
      "name": "Modifier Construction",
      "for": "MEquip_23020_Main",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Deal Damage [Owner]: Any",
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
                  "operator": "Variables[0] (MDF_MaxCount)",
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
                    "operator": "Variables[0] (MDF_MaxCount)",
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
              "on": "Attacker",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (_DebuffCount) || MUL",
                "displayLines": "(MDF_PropertyValue * _DebuffCount)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue",
                  "_DebuffCount"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "MEquip_23020_Sub[<span class=\"descriptionNumberColor\">Disputation</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.36)",
                        "displayLines": "0.36",
                        "constants": [],
                        "variables": [
                          0.36
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "MEquip_23020_Sub[<span class=\"descriptionNumberColor\">Disputation</span>]",
                  "duration": {
                    "operator": "Variables[0] (2)",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue1": {
                      "operator": "Variables[0] (0.36)",
                      "displayLines": "0.36",
                      "constants": [],
                      "variables": [
                        0.36
                      ]
                    },
                    "MDF_PropertyValue2": {
                      "operator": "Variables[0] (0.24)",
                      "displayLines": "0.24",
                      "constants": [],
                      "variables": [
                        0.24
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "_DebuffCount",
        "MDF_PropertyValue",
        "MDF_MaxCount"
      ],
      "latentQueue": []
    }
  ],
  "isLightcone": true
}