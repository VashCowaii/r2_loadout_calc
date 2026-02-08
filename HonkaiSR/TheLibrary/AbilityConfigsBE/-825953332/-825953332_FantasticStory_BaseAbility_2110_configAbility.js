const configAbility = {
  "fileName": "-825953332_FantasticStory_BaseAbility_2110",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_BaseAbility_CountSum"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_BaseAbility_CountSumTemp"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_EnterFeverValue",
      "value": {
        "operator": "Variables[0] (ADF_1_Get) || RETURN",
        "displayLines": "ADF_1_Get",
        "constants": [],
        "variables": [
          "ADF_1_Get"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_BeforeFeverEliteDmgRatio",
      "value": {
        "operator": "Variables[0] (ADF_3_Get) || RETURN",
        "displayLines": "ADF_3_Get",
        "constants": [],
        "variables": [
          "ADF_3_Get"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_BeforeFeverKillChargeRatio",
      "value": {
        "operator": "Variables[0] (ADF_4_Get) || RETURN",
        "displayLines": "ADF_4_Get",
        "constants": [],
        "variables": [
          "ADF_4_Get"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FeverKillReturnRatio",
      "value": {
        "operator": "Variables[0] (ADF_5_Get) || RETURN",
        "displayLines": "ADF_5_Get",
        "constants": [],
        "variables": [
          "ADF_5_Get"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FeverBESpeed",
      "value": {
        "operator": "Variables[0] (ADF_6_Get) || RETURN",
        "displayLines": "ADF_6_Get",
        "constants": [],
        "variables": [
          "ADF_6_Get"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_BaseAbility_CountSumTempMax",
      "value": {
        "operator": "Variables[0] (ADF_1_Get) || Variables[1] (ADF_2_Get) || MUL || RETURN",
        "displayLines": "(ADF_1_Get * ADF_2_Get)",
        "constants": [],
        "variables": [
          "ADF_1_Get",
          "ADF_2_Get"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_2111"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_2112"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_PlusAbility_2113"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "BattleEvent_BaseHP"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "BattleEvent_BaseHP",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "BattleEvent_BaseHP",
      "value": {
        "operator": "Variables[0] (BattleEvent_BaseHP) || Constants[0] (90) || MUL || RETURN",
        "displayLines": "(BattleEvent_BaseHP * 90)",
        "constants": [
          90
        ],
        "variables": [
          "BattleEvent_BaseHP"
        ]
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "ContextCaster",
      "variableName": "DV_FantasticStory_BaseAbility_TriggerFlag"
    },
    {
      "name": "Update Surging Grit[PF]",
      "max": {
        "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
        "displayLines": "DV_EnterFeverValue",
        "constants": [],
        "variables": [
          "DV_EnterFeverValue"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1377844470\">Modifier_FantasticStory_BaseAbility_2110</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1598958563\">Modifier_FantasticStory_BaseAbility_2110_sub</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Ability",
              "abilityName": "FantasticStory_BaseAbility_AllLightTeam_Insert_Camera"
            },
            {
              "name": "Add Ability",
              "abilityName": "FantasticStory_BaseAbility_2110_Insert"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2111",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1363213920\">Modifier_FantasticStory_BaseAbility_2110_Plus1AddOn</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2112",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1928021681\">Modifier_FantasticStory_BaseAbility_2110_Plus2AddOn</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_2113",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1058073602\">Modifier_FantasticStory_BaseAbility_2110_Plus3AddOn</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_TriggerFlag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]]"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "FantasticStory_BaseAbility_2110_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "AvatarBuffSelf",
                      "ownerState": "Anyone",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "includeNonTargets": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_TriggerFlag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]]"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "FantasticStory_BaseAbility_2110_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "AvatarBuffSelf",
                      "ownerState": "Anyone",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "includeNonTargets": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_BaseAbility_TriggerFlag",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]]"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "FantasticStory_BaseAbility_2110_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "AvatarBuffSelf",
                      "ownerState": "Anyone",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "DV_FantasticStory_BaseAbility_CountSum",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": {
                "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                "displayLines": "DV_EnterFeverValue",
                "constants": [],
                "variables": [
                  "DV_EnterFeverValue"
                ]
              },
              "maxValue": 1000000000,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_FantasticStory_BaseAbility_TriggerFlag",
                  "value": 1
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[removeMemosprite]]"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "FantasticStory_BaseAbility_2110_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "AvatarBuffSelf",
                      "ownerState": "Anyone",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1377844470\">Modifier_FantasticStory_BaseAbility_2110</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": ">=",
                        "value2": 3
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 8003060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Fictional Ensemble"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Max Wave Count",
                      "add": -99
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1135719358\">MDF_NoScore</a>"
                    },
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1135719358\">MDF_NoScore</a>"
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1923363748\">Modifier_FantasticStory_BaseAbility_2110_aura</a>"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Sequence",
                                "Sequence": [
                                  {
                                    "name": "Target Name",
                                    "target": "{{Battle Event List}}"
                                  },
                                  {
                                    "name": "Target Filter",
                                    "conditions": {
                                      "name": "Has Modifier",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"1391985236\">Modifier_FantasticStory_BaseAbility_2110_ListenBEDelay</a>"
                                    }
                                  }
                                ]
                              },
                              "variableName": "DV_Delay",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DV_FantasticStory_BaseAbility_CountSumTemp",
                              "value": {
                                "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSumTemp) || Variables[1] (DV_EnterFeverValue) || Variables[2] (DV_BeforeFeverKillChargeRatio) || MUL || ADD || RETURN",
                                "displayLines": "(DV_FantasticStory_BaseAbility_CountSumTemp + (DV_EnterFeverValue * DV_BeforeFeverKillChargeRatio))",
                                "constants": [],
                                "variables": [
                                  "DV_FantasticStory_BaseAbility_CountSumTemp",
                                  "DV_EnterFeverValue",
                                  "DV_BeforeFeverKillChargeRatio"
                                ]
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "DV_FantasticStory_BaseAbility_CountSumTemp",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSumTempMax) || RETURN",
                                  "displayLines": "DV_FantasticStory_BaseAbility_CountSumTempMax",
                                  "constants": [],
                                  "variables": [
                                    "DV_FantasticStory_BaseAbility_CountSumTempMax"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "DV_FantasticStory_BaseAbility_CountSumTemp",
                                  "value": {
                                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSumTempMax) || RETURN",
                                    "displayLines": "DV_FantasticStory_BaseAbility_CountSumTempMax",
                                    "constants": [],
                                    "variables": [
                                      "DV_FantasticStory_BaseAbility_CountSumTempMax"
                                    ]
                                  }
                                },
                                {
                                  "name": "Update Surging Grit[PF]",
                                  "current": {
                                    "operator": "Variables[0] (DV_Delay) || Constants[0] (10) || MUL || RETURN",
                                    "displayLines": "(DV_Delay * 10)",
                                    "constants": [
                                      10
                                    ],
                                    "variables": [
                                      "DV_Delay"
                                    ]
                                  },
                                  "max": 100,
                                  "extra": {
                                    "operator": "Variables[0] (FLOOR) || Variables[1] (DV_FantasticStory_BaseAbility_CountSumTemp) || PARAM_1 || FUNCTION || RETURN",
                                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(DV_FantasticStory_BaseAbility_CountSumTemp)",
                                    "constants": [],
                                    "variables": [
                                      "FLOOR",
                                      "DV_FantasticStory_BaseAbility_CountSumTemp"
                                    ]
                                  },
                                  "phaseType": "P1",
                                  "reachedLimit": true
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Update Surging Grit[PF]",
                                  "current": {
                                    "operator": "Variables[0] (DV_Delay) || Constants[0] (10) || MUL || RETURN",
                                    "displayLines": "(DV_Delay * 10)",
                                    "constants": [
                                      10
                                    ],
                                    "variables": [
                                      "DV_Delay"
                                    ]
                                  },
                                  "max": 100,
                                  "extra": {
                                    "operator": "Variables[0] (FLOOR) || Variables[1] (DV_FantasticStory_BaseAbility_CountSumTemp) || PARAM_1 || FUNCTION || RETURN",
                                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(DV_FantasticStory_BaseAbility_CountSumTemp)",
                                    "constants": [],
                                    "variables": [
                                      "FLOOR",
                                      "DV_FantasticStory_BaseAbility_CountSumTemp"
                                    ]
                                  },
                                  "phaseType": "P1"
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "DV_FantasticStory_BaseAbility_CountSum",
                              "value": {
                                "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || Variables[1] (DV_EnterFeverValue) || Variables[2] (DV_FeverKillReturnRatio) || MUL || ADD || RETURN",
                                "displayLines": "(DV_FantasticStory_BaseAbility_CountSum + (DV_EnterFeverValue * DV_FeverKillReturnRatio))",
                                "constants": [],
                                "variables": [
                                  "DV_FantasticStory_BaseAbility_CountSum",
                                  "DV_EnterFeverValue",
                                  "DV_FeverKillReturnRatio"
                                ]
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "DV_FantasticStory_BaseAbility_CountSum",
                                "compareType": ">=",
                                "value2": {
                                  "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                                  "displayLines": "DV_EnterFeverValue",
                                  "constants": [],
                                  "variables": [
                                    "DV_EnterFeverValue"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Update Surging Grit[PF]",
                                  "current": 100,
                                  "max": 100,
                                  "delta": {
                                    "operator": "Variables[0] (DV_EnterFeverValue) || Variables[1] (DV_FeverKillReturnRatio) || MUL || RETURN",
                                    "displayLines": "(DV_EnterFeverValue * DV_FeverKillReturnRatio)",
                                    "constants": [],
                                    "variables": [
                                      "DV_EnterFeverValue",
                                      "DV_FeverKillReturnRatio"
                                    ]
                                  },
                                  "type": "Normal",
                                  "phaseType": "P1"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Update Surging Grit[PF]",
                                  "current": {
                                    "operator": "Variables[0] (DV_FantasticStory_BaseAbility_CountSum) || RETURN",
                                    "displayLines": "DV_FantasticStory_BaseAbility_CountSum",
                                    "constants": [],
                                    "variables": [
                                      "DV_FantasticStory_BaseAbility_CountSum"
                                    ]
                                  },
                                  "max": {
                                    "operator": "Variables[0] (DV_EnterFeverValue) || RETURN",
                                    "displayLines": "DV_EnterFeverValue",
                                    "constants": [],
                                    "variables": [
                                      "DV_EnterFeverValue"
                                    ]
                                  },
                                  "delta": {
                                    "operator": "Variables[0] (DV_EnterFeverValue) || Variables[1] (DV_FeverKillReturnRatio) || MUL || RETURN",
                                    "displayLines": "(DV_EnterFeverValue * DV_FeverKillReturnRatio)",
                                    "constants": [],
                                    "variables": [
                                      "DV_EnterFeverValue",
                                      "DV_FeverKillReturnRatio"
                                    ]
                                  },
                                  "type": "Normal"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": ">=",
                            "value2": 3
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "DV_maxHP",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                            },
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "canPhase": true,
                              "AttackScaling": {
                                "DamageType": "Physical",
                                "DamageFlat": {
                                  "operator": "Variables[0] (DV_maxHP) || Variables[1] (DV_BeforeFeverEliteDmgRatio) || MUL || RETURN",
                                  "displayLines": "(DV_maxHP * DV_BeforeFeverEliteDmgRatio)",
                                  "constants": [],
                                  "variables": [
                                    "DV_maxHP",
                                    "DV_BeforeFeverEliteDmgRatio"
                                  ]
                                },
                                "notAHit": true,
                                "dmgFormulaFinal": "Converted DMG Base",
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "True DMG"
                              }
                            }
                          ],
                          "noTargetFound": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All(with Unselectable)}}"
                              },
                              "searchRandom": true,
                              "maxTargets": 1,
                              "conditions": {
                                "name": "Enemy ID",
                                "ID": 8003060,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": "Fictional Ensemble"
                              },
                              "ifTargetFound": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "DV_maxHP",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                                },
                                {
                                  "name": "ATK Scaling DMG",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "canPhase": true,
                                  "AttackScaling": {
                                    "DamageType": "Physical",
                                    "DamageFlat": {
                                      "operator": "Variables[0] (DV_maxHP) || Constants[0] (20) || DIV || Constants[1] (0.0009999999) || ADD || RETURN",
                                      "displayLines": "((DV_maxHP / 20) + 0.0009999999)",
                                      "constants": [
                                        20,
                                        0.0009999999
                                      ],
                                      "variables": [
                                        "DV_maxHP"
                                      ]
                                    },
                                    "notAHit": true,
                                    "dmgFormulaFinal": "Converted DMG Base",
                                    "Toughness": null,
                                    "Tags": null,
                                    "attackType": "True DMG"
                                  }
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
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": ">=",
                        "value2": 3
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 8003060,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Fictional Ensemble"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-149468610\">Modifier_FantasticStory_HPParentChild</a>[<span class=\"descriptionNumberColor\">Binding Obligation</span>]"
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1598958563\">Modifier_FantasticStory_BaseAbility_2110_sub</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">=",
                    "value2": 3
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 8003060,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Fictional Ensemble"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-149468610\">Modifier_FantasticStory_HPParentChild</a>[<span class=\"descriptionNumberColor\">Binding Obligation</span>]"
                },
                {
                  "name": "Boss Bar Display",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "display": true
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DV_FantasticStory_PlusAbility_2111",
        "DV_FantasticStory_PlusAbility_2112",
        "DV_FantasticStory_PlusAbility_2113",
        "DV_FantasticStory_BaseAbility_TriggerFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1532586988\">Modifier_FantasticStory_HPParentChildForShow</a>[<span class=\"descriptionNumberColor\">Fate's Convergence</span>]",
      "stackType": "ReplaceByCaster",
      "description": "After being defeated, deal DMG based on a certain percentage of their Max HP to the Elite enemy target.",
      "type": "Buff",
      "effectName": "Fate's Convergence",
      "statusName": "Fate's Convergence"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-149468610\">Modifier_FantasticStory_HPParentChild</a>[<span class=\"descriptionNumberColor\">Binding Obligation</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Sever Group Relationship",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "relatedGroup": "HPParentChild"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1532586988\">Modifier_FantasticStory_HPParentChildForShow</a>[<span class=\"descriptionNumberColor\">Fate's Convergence</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Establish Group Relationship",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "subTarget": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}} - {{Modifier Holder}}"
              },
              "relatedGroup": "HPParentChild"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}} - {{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1532586988\">Modifier_FantasticStory_HPParentChildForShow</a>[<span class=\"descriptionNumberColor\">Fate's Convergence</span>]"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DV_FantasticStory_BaseAbility_TriggerFlag",
        "DV_FantasticStory_PlusAbility_2113",
        "DV_FantasticStory_PlusAbility_2112",
        "DV_FantasticStory_PlusAbility_2111"
      ],
      "description": "After non-Elite enemy targets are defeated, receive DMG based on a certain percentage of this unit's Max HP.",
      "type": "Buff",
      "effectName": "Binding Obligation",
      "statusName": "Binding Obligation"
    }
  ]
}