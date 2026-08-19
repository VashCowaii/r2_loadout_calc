const configAbility = {
  "fileName": "AStarThatLightstheNight_Ability23060",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1943375340\">LC_23060_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-339892333\">LC_23060_Sub02</a>[<span class=\"descriptionNumberColor\">Ignore Defense</span>]",
      "stackType": "ReplaceByCaster",
      "description": "DMG dealt ignores <span class=\"descriptionNumberColor\">MDF_DefenceIgnoreRatio</span> of the target's DEF.",
      "type": "Buff",
      "statusName": "Ignore Defense",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Defender",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": "(0 - MDF_DefenceIgnoreRatio)"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1153343279\">LC_23060_Sub</a>[<span class=\"descriptionNumberColor\">Sail</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Each stack increases DMG dealt by Assist Skill by <span class=\"descriptionNumberColor\">MDF_AssistDamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "Sail",
      "statusName": "Sail",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_23060_Layer",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (MDF_23060_MaxCount) || RETURN",
                  "displayLines": "MDF_23060_MaxCount",
                  "constants": [],
                  "variables": [
                    "MDF_23060_MaxCount"
                  ]
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Assist Skill"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "(MDF_AssistDamageAddedRatio * MDF_23060_Layer)"
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
                      "Ultimate"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "(MDF_UltraDamageAddedRatio * MDF_23060_Layer)"
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Assist Skill"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "(MDF_AssistDamageAddedRatio * MDF_23060_Layer)"
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
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_23060_Layer",
              "modifierName": "<a class=\"gModGreen\" id=\"-1153343279\">LC_23060_Sub</a>[<span class=\"descriptionNumberColor\">Sail</span>]",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_23060_Layer",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (MDF_23060_MaxCount) || RETURN",
                  "displayLines": "MDF_23060_MaxCount",
                  "constants": [],
                  "variables": [
                    "MDF_23060_MaxCount"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Each stack increases Assist Skill DMG by <span class=\"descriptionNumberColor\">MDF_AssistDamageAddedRatio</span> and Ultimate DMG by <span class=\"descriptionNumberColor\">MDF_UltraDamageAddedRatio</span>."
                }
              ],
              "failed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Each stack increases DMG dealt by Assist Skill by <span class=\"descriptionNumberColor\">MDF_AssistDamageAddedRatio</span>."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1943375340\">LC_23060_Main</a>",
      "stackType": "ReplaceByCaster",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-339892333\">LC_23060_Sub02</a>[<span class=\"descriptionNumberColor\">Ignore Defense</span>]",
          "aliveOnly": "False",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_DefenceIgnoreRatio": {
              "operator": "Variables[0] (0.32) || RETURN",
              "displayLines": "0.32",
              "constants": [],
              "variables": [
                0.32
              ]
            }
          }
        }
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Assist Skill"
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (6) || RETURN",
                    "displayLines": "6",
                    "constants": [],
                    "variables": [
                      6
                    ]
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1153343279\">LC_23060_Sub</a>[<span class=\"descriptionNumberColor\">Sail</span>]",
                  "duration": 2,
                  "stackLimit": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_AssistDamageAddedRatio": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "MDF_UltraDamageAddedRatio": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "MDF_23060_MaxCount": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
                      ]
                    }
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
  "desc": "The wearer ignores #7[i]% of the target's DEF when dealing DMG. When the wearer uses Assist Skill, they regenerate #2[i] Energy and gain \"Sail,\" lasting for 2 turns and stacking up to #3[i] time(s). Each stack of \"Sail\" increases Assist Skill DMG by #4[i]%. When \"Sail\" reaches #5[i] stacks, each stack of \"Sail\" increases Ultimate DMG by #6[i]%.",
  "params": [
    [
      0,
      6,
      3,
      0.2,
      3,
      0.2,
      0.32
    ],
    [
      0,
      6,
      3,
      0.25,
      3,
      0.25,
      0.36
    ],
    [
      0,
      6,
      3,
      0.3,
      3,
      0.3,
      0.4
    ],
    [
      0,
      6,
      3,
      0.35,
      3,
      0.35,
      0.44
    ],
    [
      0,
      6,
      3,
      0.4,
      3,
      0.4,
      0.48
    ]
  ]
}