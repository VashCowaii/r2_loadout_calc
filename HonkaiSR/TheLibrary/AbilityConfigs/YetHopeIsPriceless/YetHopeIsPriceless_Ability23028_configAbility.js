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
      "modifier": "<a class=\"gModGreen\" id=\"-681605416\">LC_23028_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__5448581\">LC_23028_Sub</a>[<span class=\"descriptionNumberColor\">Promise</span>]",
      "stackType": "ReplaceByCaster",
      "description": "The DMG dealt by Ultimate or Follow-Up ATK ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of the target's DEF.",
      "type": "Buff",
      "effectName": "Promise",
      "statusName": "Promise",
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-681605416\">LC_23028_Main</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "_Layer"
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "_CasteCriticalDamage",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_CasteCriticalDamage",
                "compareType": ">=",
                "value2": {
                  "displayLines": "(1.2 + 0.2)"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(_CasteCriticalDamage - 1.2)"
                  },
                  "variableName": "_CasteCriticalDamage"
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "displayLines": "4"
                  },
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_CasteCriticalDamage",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "0.2"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(_CasteCriticalDamage - 0.2)"
                          },
                          "variableName": "_CasteCriticalDamage"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(_Layer + 1)"
                          },
                          "variableName": "_Layer"
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
                  "modifier": "<a class=\"gModGreen\" id=\"5448581\">LC_23028_Sub</a>[<span class=\"descriptionNumberColor\">Promise</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "0.2"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
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
                  "modifier": "<a class=\"gModGreen\" id=\"5448581\">LC_23028_Sub</a>[<span class=\"descriptionNumberColor\">Promise</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "0.2"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
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