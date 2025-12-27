const compositeAbilityObject = {
  "fullCharacterName": "Baptism of Pure Thought",
  "trimCharacterName": "BaptismofPureThought",
  "abilityList": [
    "BaptismofPureThought_Ability23020"
  ],
  "fixedStats": {
    "1": {
      "CritDamageBase": 0.2
    },
    "2": {
      "CritDamageBase": 0.23
    },
    "3": {
      "CritDamageBase": 0.26
    },
    "4": {
      "CritDamageBase": 0.29
    },
    "5": {
      "CritDamageBase": 0.32
    }
  },
  "abilityObject": {
    "BaptismofPureThought_Ability23020": {
      "fileName": "BaptismofPureThought_Ability23020",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_23020_Main",
          "valuePerStack": {
            "_DebuffCount": 0,
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.08) || RETURN",
              "displayLines": "0.08",
              "constants": [],
              "variables": [
                0.08
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
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_23020_Sub[<span class=\"descriptionNumberColor\">Disputation</span>]",
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
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue2) || INVERT || RETURN",
                        "displayLines": "-MDF_PropertyValue2",
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
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue1) || RETURN",
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
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue1</span> and Follow-Up ATKs ignore <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span> of target DEF.",
          "type": "Buff",
          "effectName": "Disputation",
          "statusName": "Disputation"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23020_Main",
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
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (_DebuffCount) || MUL || RETURN",
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
                        "modifier": "LC_23020_Sub[<span class=\"descriptionNumberColor\">Disputation</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Adjust Target Stats",
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": {
                            "operator": "Variables[0] (0.36) || RETURN",
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
                      "modifier": "LC_23020_Sub[<span class=\"descriptionNumberColor\">Disputation</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue1": {
                          "operator": "Variables[0] (0.36) || RETURN",
                          "displayLines": "0.36",
                          "constants": [],
                          "variables": [
                            0.36
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (0.24) || RETURN",
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
      "isLightcone": true,
      "desc": "Increases the wearer's CRIT DMG by #1[i]%. For every debuff on the enemy target, the wearer's CRIT DMG dealt against this target additionally increases by #2[i]%, stacking up to #3[i] times. When using Ultimate to attack the enemy target, the wearer receives the \"Disputation\" effect, which increases DMG dealt by #4[i]% and enables their Follow-Up ATKs to ignore #5[i]% of the target's DEF. This effect lasts for #6[i] turns.",
      "params": [
        [
          0.2,
          0.08,
          3,
          0.36,
          0.24,
          2
        ],
        [
          0.23,
          0.09,
          3,
          0.42,
          0.28,
          2
        ],
        [
          0.26,
          0.1,
          3,
          0.48,
          0.32,
          2
        ],
        [
          0.29,
          0.11,
          3,
          0.54,
          0.36,
          2
        ],
        [
          0.32,
          0.12,
          3,
          0.6,
          0.4,
          2
        ]
      ]
    }
  },
  "isLightcone": true
}