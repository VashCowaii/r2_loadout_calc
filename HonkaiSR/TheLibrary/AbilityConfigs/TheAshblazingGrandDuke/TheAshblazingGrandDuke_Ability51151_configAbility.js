const configAbility = {
  "fileName": "TheAshblazingGrandDuke_Ability51151",
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
      "modifier": "<a class=\"gModGreen\" id=\"-256966985\">Relic_115_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1551453236\">Relic_115_Sub</a>[<span class=\"descriptionNumberColor\">The Ashblazing Grand Duke</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
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
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Layer) || Variables[1] (0.06) || MUL || RETURN",
                "displayLines": "(MDF_Layer * 0.06)",
                "constants": [],
                "variables": [
                  "MDF_Layer",
                  0.06
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">#SkillRelic_115_4_P1_AttackAddedRatio</span>, up to <span class=\"descriptionNumberColor\">#SkillRelic_115_4_P2_MaxLayer</span> stack(s).",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "The Ashblazing Grand Duke",
      "stackLimit": 6,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-256966985\">Relic_115_Main</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ]
                  }
                ]
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1551453236\">Relic_115_Sub</a>[<span class=\"descriptionNumberColor\">The Ashblazing Grand Duke</span>]"
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
                        "value1": "<a class=\"gModGreen\" id=\"-1551453236\">Relic_115_Sub</a>[<span class=\"descriptionNumberColor\">The Ashblazing Grand Duke</span>]",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (8) || RETURN",
                          "displayLines": "8",
                          "constants": [],
                          "variables": [
                            8
                          ]
                        },
                        "valueType": "Layer"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1551453236\">Relic_115_Sub</a>[<span class=\"descriptionNumberColor\">The Ashblazing Grand Duke</span>]",
                          "duration": {
                            "operator": "Variables[0] (3) || RETURN",
                            "displayLines": "3",
                            "constants": [],
                            "variables": [
                              3
                            ]
                          },
                          "stackLimit": {
                            "operator": "Variables[0] (8) || RETURN",
                            "displayLines": "8",
                            "constants": [],
                            "variables": [
                              8
                            ]
                          }
                        },
                        {
                          "name": "Adjust Target Stats",
                          "modifiedValuesArray": [
                            {
                              "on": "Attacker",
                              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                              "value": "0.06"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1551453236\">Relic_115_Sub</a>[<span class=\"descriptionNumberColor\">The Ashblazing Grand Duke</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (8) || RETURN",
                        "displayLines": "8",
                        "constants": [],
                        "variables": [
                          8
                        ]
                      }
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                          "value": "0.06"
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
          "eventTrigger": "Attack Start [Owner]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1551453236\">Relic_115_Sub</a>[<span class=\"descriptionNumberColor\">The Ashblazing Grand Duke</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "Old_Layer",
                      "modifierName": "<a class=\"gModGreen\" id=\"-1551453236\">Relic_115_Sub</a>[<span class=\"descriptionNumberColor\">The Ashblazing Grand Duke</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                          "value": "(-Old_Layer * 0.06)"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1551453236\">Relic_115_Sub</a>[<span class=\"descriptionNumberColor\">The Ashblazing Grand Duke</span>]"
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
  "isRelic": true,
  "desc": [
    "Increases the DMG dealt by Follow-Up ATK by 20%.",
    "When the wearer uses a Follow-Up ATK, increases the wearer's ATK by 6% for every time the Follow-Up ATK deals DMG. This effect can stack up to 8 time(s) and lasts for 3 turn(s). This effect is removed the next time the wearer uses a Follow-Up ATK."
  ],
  "params": [
    [
      0.2
    ],
    [
      0.06,
      8,
      3
    ]
  ]
}