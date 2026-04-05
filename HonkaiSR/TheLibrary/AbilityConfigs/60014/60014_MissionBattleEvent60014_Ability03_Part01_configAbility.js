const configAbility = {
  "fileName": "60014_MissionBattleEvent60014_Ability03_Part01",
  "childAbilityList": [
    "60014_MissionBattleEvent60014_Ability03_Part01",
    "60014_MissionBattleEvent60014_Ability03_Camera",
    "60014_MissionBattleEvent60014_Ability03_Camera0"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    30,
    0
  ],
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1415126963\">MStageMissionBattleEvent60014</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1917850230\">MStageMissionBattleEvent60014_LightTeamCount</a>",
      "execute": [
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Yanqing_KillCount",
              "value": {
                "operator": "Variables[0] (MDF_Yanqing_KillCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(MDF_Yanqing_KillCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_Yanqing_KillCount"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1415126963\">MStageMissionBattleEvent60014</a>",
      "modifierFlags": [
        "BlockDamage",
        "Stealth"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            "Mark Entity as Non-Target(Unselectable)"
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "MissionBattleEvent60014_Insert_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "STAGE_Character",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "MissionBattleEvent60014_Insert_Part01"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_KillCount",
              "value": 0
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1917850230\">MStageMissionBattleEvent60014_LightTeamCount</a>"
            }
          ]
        },
        {
          "eventTrigger": "Got a Kill [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_KillCount",
              "value": {
                "operator": "Variables[0] (MDF_KillCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(MDF_KillCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_KillCount"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1917850230\">MStageMissionBattleEvent60014_LightTeamCount</a>"
            }
          ]
        },
        {
          "eventTrigger": "Leave Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Yanqing_KillCount",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (MDF_KillCount) || RETURN",
                  "displayLines": "MDF_KillCount",
                  "constants": [],
                  "variables": [
                    "MDF_KillCount"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Assign Value to Stat",
                  "variableName": "_PlayerWin",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Assign Value to Stat",
                  "variableName": "_PlayerWin",
                  "value": 0
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_KillCount",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 99,
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_KillCount",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (MDF_Yanqing_KillCount) || RETURN",
                      "displayLines": "MDF_Yanqing_KillCount",
                      "constants": [],
                      "variables": [
                        "MDF_Yanqing_KillCount"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_LeadTalkSwitch",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_LeadTalkSwitch",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Yanqing_Behind",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "MDF_Yunli_Behind",
                                "compareType": "=",
                                "value2": 1
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "MDF_ReverseTalkSwitch",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_ReverseTalkSwitch",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Yanqing_Behind",
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
          ]
        },
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_Yanqing_KillCount",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Yanqing_KillCount",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (MDF_KillCount) || RETURN",
                      "displayLines": "MDF_KillCount",
                      "constants": [],
                      "variables": [
                        "MDF_KillCount"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_LeadTalkSwitch",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_LeadTalkSwitch",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Yunli_Behind",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "MDF_Yanqing_Behind",
                                "compareType": "=",
                                "value2": 1
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "MDF_ReverseTalkSwitch",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_ReverseTalkSwitch",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_Yunli_Behind",
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
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}