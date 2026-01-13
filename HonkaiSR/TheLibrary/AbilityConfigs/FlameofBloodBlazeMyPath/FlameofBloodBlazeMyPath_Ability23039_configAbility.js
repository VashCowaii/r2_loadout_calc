const configAbility = {
  "fileName": "FlameofBloodBlazeMyPath_Ability23039",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_23039_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_23039_Sub",
      "stackType": "ReplaceByCaster"
    },
    {
      "name": "Modifier Construction",
      "for": "LC_23039_Main",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Owner of this Modifier",
                "modifier": "LC_23039_Sub",
                "justAddedOrActive": true
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (_DmgAddedRatio) || RETURN",
                    "displayLines": "_DmgAddedRatio",
                    "constants": [],
                    "variables": [
                      "_DmgAddedRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Event was Triggered by Modifier's Self"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "_HPChangeValue",
                  "value": "ParamValue"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_HPChangeValue",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (_HPChangeValue) || SUB || RETURN",
                    "displayLines": "(0 - _HPChangeValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "_HPChangeValue"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "_HPChangeValue",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (500) || RETURN",
                      "displayLines": "500",
                      "constants": [],
                      "variables": [
                        500
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DmgAddedRatio",
                      "value": {
                        "operator": "Variables[0] (0.3) || Variables[1] (0.3) || ADD || RETURN",
                        "displayLines": "(0.3 + 0.3)",
                        "constants": [],
                        "variables": [
                          0.3,
                          0.3
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DmgAddedRatio",
                      "value": {
                        "operator": "Variables[0] (0.3) || RETURN",
                        "displayLines": "0.3",
                        "constants": [],
                        "variables": [
                          0.3
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
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": "Owner of this Modifier",
                  "consumePercent": {
                    "operator": "Variables[0] (0.06) || RETURN",
                    "displayLines": "0.06",
                    "constants": [],
                    "variables": [
                      0.06
                    ]
                  },
                  "consumeFloor": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "LC_23039_Sub"
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
              "to": "Owner of this Modifier",
              "modifier": "LC_23039_Sub"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DmgAddedRatio",
              "value": {
                "operator": "Variables[0] (0.3) || RETURN",
                "displayLines": "0.3",
                "constants": [],
                "variables": [
                  0.3
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": "Use Prior Target(s) Defined",
                "target2": "Owner of this Modifier"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Caster",
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Update UI Preview",
                  "show": "Show",
                  "skillType": [
                    "Skill",
                    "Ultimate"
                  ],
                  "target": "Caster",
                  "previewType": null,
                  "previewValue": {
                    "operator": "Variables[0] (_MaxHP) || Variables[1] (0.06) || MUL || RETURN",
                    "displayLines": "(_MaxHP * 0.06)",
                    "constants": [],
                    "variables": [
                      "_MaxHP",
                      0.06
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
  "desc": "Increases the wearer's Max HP by #1[i]% and Incoming Healing by #6[i]%. When using Skill or Ultimate, consumes HP equal to #2[f1]% of the wearer's Max HP and increases the DMG dealt by this attack by #3[i]%. If this effect's consumed HP is greater than #4[i], the DMG additionally increases by #5[i]%.\\nIf the current HP is not sufficient, this effect reduces the wearer's current HP down to 1.",
  "params": [
    [
      0.18,
      0.06,
      0.3,
      500,
      0.3,
      0.2
    ],
    [
      0.21,
      0.065,
      0.35,
      500,
      0.35,
      0.25
    ],
    [
      0.24,
      0.07,
      0.4,
      500,
      0.4,
      0.3
    ],
    [
      0.27,
      0.075,
      0.45,
      500,
      0.45,
      0.35
    ],
    [
      0.3,
      0.08,
      0.5,
      500,
      0.5,
      0.4
    ]
  ]
}