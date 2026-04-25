const configAbility = {
  "fileName": "WelcometotheCosmicCity_Ability23057",
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
      "modifier": "<a class=\"gModGreen\" id=\"-2058966774\">LC_23057_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__919563615\">LC_23057_Sub</a>[<span class=\"descriptionNumberColor\">Guaranteed Victory</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "<=",
                    "value2": 1
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"919563615\">LC_23057_Sub</a>[<span class=\"descriptionNumberColor\">Guaranteed Victory</span>]",
                      "counter": {
                        "operator": "Variables[0] (MDF_Count) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(MDF_Count - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_Count"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "The effect to gain Punchlines from \"Guaranteed Victory\" cannot be triggered now. Triggers again after using Basic ATK <span class=\"descriptionNumberColor\">MDF_Count</span> more time(s).",
      "type": "Other",
      "statusName": "Guaranteed Victory"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2058966774\">LC_23057_Main</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Elation DMG"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(0 - 0.2)"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getAbilityTargetList]]"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getAbilityTargetList]]"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    ]
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"919563615\">LC_23057_Sub</a>[<span class=\"descriptionNumberColor\">Guaranteed Victory</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"919563615\">LC_23057_Sub</a>[<span class=\"descriptionNumberColor\">Guaranteed Victory</span>]",
                  "counter": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                },
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] (20) || RETURN",
                    "displayLines": "20",
                    "constants": [],
                    "variables": [
                      20
                    ]
                  },
                  "adjustment": "Add"
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
  "desc": "Increases the wearer's SPD by #1[i]%. The Elation DMG dealt ignores #2[i]% of the target's DEF. When the wearer uses Ultimate on themselves, gains #3[i] point(s) of \"Punchline.\" This effect can be triggered up to 1 time. And resets this trigger count after using Basic ATK #4[i] time(s).",
  "params": [
    [
      0.18,
      0.2,
      20,
      3
    ],
    [
      0.21,
      0.24,
      25,
      3
    ],
    [
      0.24,
      0.28,
      30,
      3
    ],
    [
      0.27,
      0.32,
      35,
      3
    ],
    [
      0.3,
      0.36,
      40,
      3
    ]
  ]
}