const configAbility = {
  "fileName": "YetHopeIsPriceless_Ability23028",
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
      "modifier": "LC_23028_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_23028_Sub[<span class=\"descriptionNumberColor\">Promise</span>]",
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
                  "Follow-up",
                  "Ultimate"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "-0.2"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "The DMG dealt by Ultimate or Follow-Up ATK ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of the target's DEF.",
      "type": "Buff",
      "effectName": "Promise",
      "statusName": "Promise"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23028_Main",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Layer",
              "value": 0
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_CasteCriticalDamage",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_CasteCriticalDamage",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (1.2) || Variables[1] (0.2) || ADD || RETURN",
                  "displayLines": "(1.2 + 0.2)",
                  "constants": [],
                  "variables": [
                    1.2,
                    0.2
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CasteCriticalDamage",
                  "value": {
                    "operator": "Variables[0] (_CasteCriticalDamage) || Variables[1] (1.2) || SUB || RETURN",
                    "displayLines": "(_CasteCriticalDamage - 1.2)",
                    "constants": [],
                    "variables": [
                      "_CasteCriticalDamage",
                      1.2
                    ]
                  }
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (4) || RETURN",
                    "displayLines": "4",
                    "constants": [],
                    "variables": [
                      4
                    ]
                  },
                  "Event": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_CasteCriticalDamage",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_CasteCriticalDamage",
                          "value": {
                            "operator": "Variables[0] (_CasteCriticalDamage) || Variables[1] (0.2) || SUB || RETURN",
                            "displayLines": "(_CasteCriticalDamage - 0.2)",
                            "constants": [],
                            "variables": [
                              "_CasteCriticalDamage",
                              0.2
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Layer",
                          "value": {
                            "operator": "Variables[0] (_Layer) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(_Layer + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_Layer"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
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
                      "value": "(_Layer * 0.12)"
                    }
                  ]
                }
              ]
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
                "skillType": "Basic ATK"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_23028_Sub[<span class=\"descriptionNumberColor\">Promise</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "LC_23028_Sub[<span class=\"descriptionNumberColor\">Promise</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
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
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's CRIT Rate by #1[i]%. While the wearer is in battle, for every #3[i]% CRIT DMG that exceeds #2[i]%, the DMG dealt by Follow-Up ATK increases by #4[i]%. This effect can stack up to #5[i] time(s). When the battle starts or after the wearer uses their Basic ATK, enables the DMG dealt by Ultimate or Follow-Up ATK to ignore #6[i]% of the target's DEF, lasting for #7[i] turn(s).",
  "params": [
    [
      0.16,
      1.2,
      0.2,
      0.12,
      4,
      0.2,
      2
    ],
    [
      0.19,
      1.2,
      0.2,
      0.14,
      4,
      0.24,
      2
    ],
    [
      0.22,
      1.2,
      0.2,
      0.16,
      4,
      0.28,
      2
    ],
    [
      0.25,
      1.2,
      0.2,
      0.18,
      4,
      0.32,
      2
    ],
    [
      0.28,
      1.2,
      0.2,
      0.2,
      4,
      0.36,
      2
    ]
  ]
}