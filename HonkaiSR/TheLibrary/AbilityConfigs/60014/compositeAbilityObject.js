const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60014,
  "trimCharacterName": 60014,
  "abilityList": [
    "60014_MissionBattleEvent60014_Insert_Part01",
    "60014_MissionBattleEvent60014_Ability03_Part01"
  ],
  "abilityObject": {
    "60014_MissionBattleEvent60014_Insert_Part01": {
      "fileName": "60014_MissionBattleEvent60014_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Random Event",
          "odds": [
            0.5,
            0.5
          ]
        },
        "Deleted bullshit",
        "Deleted bullshit",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "DamageExtra": {
              "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
              "displayLines": "{[SkillP01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[0]]}"
              ]
            },
            "dmgFormulaExtra": "Max HP Scaling",
            "Toughness": {
              "displayLines": 120
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "DamageExtra": {
              "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
              "displayLines": "{[SkillP01[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP01[1]]}"
              ]
            },
            "dmgFormulaExtra": "Max HP Scaling",
            "Toughness": {
              "displayLines": 120
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": 9,
          "Event": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageExtra": {
                      "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                      "displayLines": "{[SkillP01[2]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP01[2]]}"
                      ]
                    },
                    "dmgFormulaExtra": "Max HP Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Follow-up"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1898161246\">Yunli_AddRegardAsAttackType</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "60014_MissionBattleEvent60014_Ability03_Part01": {
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
  },
  "enemyData": {
    "SkillP01": {
      "skillID": 6001401,
      "trigger": "SkillP01",
      "name": "Horizon's Echo From Afar",
      "type": "Talent",
      "slot": "Talent",
      "desc": "",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          10,
          5,
          4
        ]
      },
      "element": "Physical",
      "attackType": "Ultra",
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60014_Skill03_Phase01",
        "Avatar_MissionBattleEvent60014_Skill03_Camera",
        "Avatar_MissionBattleEvent60014_Skill03_Camera0"
      ],
      "toughnessList": [
        0,
        90,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true
}