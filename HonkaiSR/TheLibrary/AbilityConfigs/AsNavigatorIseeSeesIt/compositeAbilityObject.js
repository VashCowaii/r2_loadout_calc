const entityPageType = "relic"
const compositeAbilityObject = {
  "fullCharacterName": "As Navigator Isee Sees It",
  "trimCharacterName": "AsNavigatorIseeSeesIt",
  "abilityList": [
    "AsNavigatorIseeSeesIt_Ability51311"
  ],
  "abilityObject": {
    "AsNavigatorIseeSeesIt_Ability51311": {
      "fileName": "AsNavigatorIseeSeesIt_Ability51311",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1636446699\">Relic_131_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-151396438\">Relic_131_Sub</a>[<span class=\"descriptionNumberColor\">As Navigator Isee Sees It</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Each stack increases DMG dealt by Skill and Ultimate by <span class=\"descriptionNumberColor\">#SkillRelic_131_4_P1_DamageAddedRatio</span>.",
          "type": "Buff",
          "statusName": "As Navigator Isee Sees It",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate",
                      "Skill"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "(0.18 * _Layer)"
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Layer",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1636446699\">Relic_131_Main</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-151396438\">Relic_131_Sub</a>[<span class=\"descriptionNumberColor\">As Navigator Isee Sees It</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-151396438\">Relic_131_Sub</a>[<span class=\"descriptionNumberColor\">As Navigator Isee Sees It</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "addStacksPerTrigger": {
                        "operator": "Constants[0] (1) || INVERT || Variables[0] (1) || MUL || RETURN",
                        "displayLines": "(-1 * 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          1
                        ]
                      }
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
                      "modifier": "<a class=\"gModGreen\" id=\"-151396438\">Relic_131_Sub</a>[<span class=\"descriptionNumberColor\">As Navigator Isee Sees It</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "addStacksPerTrigger": 1
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
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-151396438\">Relic_131_Sub</a>[<span class=\"descriptionNumberColor\">As Navigator Isee Sees It</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-151396438\">Relic_131_Sub</a>[<span class=\"descriptionNumberColor\">As Navigator Isee Sees It</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (3) || RETURN",
                            "displayLines": "3",
                            "constants": [],
                            "variables": [
                              3
                            ]
                          },
                          "addStacksPerTrigger": {
                            "operator": "Constants[0] (1) || INVERT || Variables[0] (1) || MUL || RETURN",
                            "displayLines": "(-1 * 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              1
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
                      "modifier": "<a class=\"gModGreen\" id=\"-151396438\">Relic_131_Sub</a>[<span class=\"descriptionNumberColor\">As Navigator Isee Sees It</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "isLightcone": true,
      "isRelic": true,
      "desc": [
        "Increases ATK by 12%.",
        "When the wearer enters combat or uses Skill, the DMG dealt by their Skill and Ultimate increases by 18%, stacking up to 3 time(s). At the start of the wearer's turn or after using Ultimate, removes 1 stack(s) of this effect."
      ],
      "params": [
        [
          0.12
        ],
        [
          0.18,
          3,
          1
        ]
      ]
    }
  },
  "fixedStats": {
    "2": {
      "ATK%": 0.12
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true,
  "noReader": false
}