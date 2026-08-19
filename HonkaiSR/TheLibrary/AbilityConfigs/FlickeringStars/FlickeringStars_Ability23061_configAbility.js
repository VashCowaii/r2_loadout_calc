const configAbility = {
  "fileName": "FlickeringStars_Ability23061",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1193867643\">LC_23061_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1872257470\">LC_23061_Sub_Team</a>[<span class=\"descriptionNumberColor\">Radiant Crown</span>]",
      "stackType": "Replace",
      "description": "DMG dealt ignores <span class=\"descriptionNumberColor\">MDF_TeamDefenceIgnoreRatio</span> of the target's DEF.",
      "type": "Buff",
      "statusName": "Radiant Crown",
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
                  "value": "(0 - MDF_TeamDefenceIgnoreRatio)"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-239068870\">LC_23061_Sub</a>[<span class=\"descriptionNumberColor\">Radiant Crown</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Skill DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Radiant Crown",
      "statusName": "Radiant Crown",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1872257470\">LC_23061_Sub_Team</a>[<span class=\"descriptionNumberColor\">Radiant Crown</span>]",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_TeamDefenceIgnoreRatio": {
              "operator": "Variables[0] (MDF_TeamDefenceIgnoreRatio) || RETURN",
              "displayLines": "MDF_TeamDefenceIgnoreRatio",
              "constants": [],
              "variables": [
                "MDF_TeamDefenceIgnoreRatio"
              ]
            }
          }
        }
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1872257470\">LC_23061_Sub_Team</a>[<span class=\"descriptionNumberColor\">Radiant Crown</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
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
                      "value": "MDF_PropertyValue"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"1872257470\">LC_23061_Sub_Team</a>[<span class=\"descriptionNumberColor\">Radiant Crown</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1872257470\">LC_23061_Sub_Team</a>[<span class=\"descriptionNumberColor\">Radiant Crown</span>]",
                  "valuePerStack": {
                    "MDF_TeamDefenceIgnoreRatio": {
                      "operator": "Variables[0] (MDF_TeamDefenceIgnoreRatio) || RETURN",
                      "displayLines": "MDF_TeamDefenceIgnoreRatio",
                      "constants": [],
                      "variables": [
                        "MDF_TeamDefenceIgnoreRatio"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1193867643\">LC_23061_Main</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Anyone]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_BPSpendDelta",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_BPSpendCount",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_BPTriggered",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Skill Point Changes",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Character"
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Current Turn Owner}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_BPSpendDelta",
                  "value": "ParamValue"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_BPSpendDelta",
                  "value": {
                    "operator": "Variables[0] (MDF_BPSpendDelta) || INVERT || RETURN",
                    "displayLines": "-MDF_BPSpendDelta",
                    "constants": [],
                    "variables": [
                      "MDF_BPSpendDelta"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_BPSpendCount",
                  "value": {
                    "operator": "Variables[0] (MDF_BPSpendCount) || Variables[1] (MDF_BPSpendDelta) || ADD || RETURN",
                    "displayLines": "(MDF_BPSpendCount + MDF_BPSpendDelta)",
                    "constants": [],
                    "variables": [
                      "MDF_BPSpendCount",
                      "MDF_BPSpendDelta"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_BPSpendCount",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (4) || RETURN",
                          "displayLines": "4",
                          "constants": [],
                          "variables": [
                            4
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_BPTriggered",
                        "compareType": "<",
                        "value2": 1
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
                      "modifier": "<a class=\"gModGreen\" id=\"-239068870\">LC_23061_Sub</a>[<span class=\"descriptionNumberColor\">Radiant Crown</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.72) || RETURN",
                          "displayLines": "0.72",
                          "constants": [],
                          "variables": [
                            0.72
                          ]
                        },
                        "MDF_TeamDefenceIgnoreRatio": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_BPTriggered",
                      "value": 1
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "isLightcone": true,
  "desc": "Increases the wearer's CRIT Rate by #1[i]%. When any ally character consumes a total of #3[i] or more Skill Points in a single turn, the wearer gains \"Radiant Crown,\" lasting for #4[i] turn(s). While the wearer holds \"Radiant Crown,\" all allies' DMG dealt ignores #5[i]% of the target's DEF, and the Skill DMG dealt by the wearer increases by #2[i]%. Effects of the same type cannot stack.",
  "params": [
    [
      0.18,
      0.72,
      4,
      3,
      0.2
    ],
    [
      0.21,
      0.84,
      4,
      3,
      0.24
    ],
    [
      0.24,
      0.96,
      4,
      3,
      0.28
    ],
    [
      0.27,
      1.08,
      4,
      3,
      0.32
    ],
    [
      0.3,
      1.2,
      4,
      3,
      0.36
    ]
  ]
}