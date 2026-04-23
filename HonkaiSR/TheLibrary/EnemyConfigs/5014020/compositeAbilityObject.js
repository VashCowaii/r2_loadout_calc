const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 5014020,
  "trimCharacterName": 5014020,
  "abilityList": [
    "5014020_BattleEventAbility_W5_Pam_SummonMonster",
    "5014020_BattleEventAbility_W5_Pam_Summon",
    "5014020_Monster_W5_Pam_DeathRattle_Insert",
    "5014020_Monster_W5_Pam_PassiveAbility_BGM",
    "5014020_Monster_W5_Pam_PassiveAbility_PartChange_Insert",
    "5014020_Monster_W5_Pam_PassiveAbility02_Part01",
    "5014020_Monster_W5_Pam_PassiveAbility01_Part01",
    "5014020_BattleEvent_W5_Pam_Part01",
    "5014020_Monster_W5_Pam_Ability10_Part02",
    "5014020_Monster_W5_Pam_Ability10_Part01",
    "5014020_Monster_W5_Pam_Ability09_Part02",
    "5014020_Monster_W5_Pam_Ability09_Part01",
    "5014020_Monster_W5_Pam_Ability08_Part02",
    "5014020_Monster_W5_Pam_Ability08_Part01",
    "5014020_Monster_W5_Pam_Ability06_Part02",
    "5014020_Monster_W5_Pam_Ability06_Part01",
    "5014020_Monster_W5_Pam_Ability05_Part02",
    "5014020_Monster_W5_Pam_Ability05_Part01",
    "5014020_Monster_W5_Pam_Ability04_Part02",
    "5014020_Monster_W5_Pam_Ability04_Part01",
    "5014020_Monster_W5_Pam_Ability03_Part02",
    "5014020_Monster_W5_Pam_Ability03_Part01",
    "5014020_Monster_W5_Pam_Ability02_Part02",
    "5014020_Monster_W5_Pam_Ability02_Part01",
    "5014020_Monster_W5_Pam_Ability01_Part02",
    "5014020_Monster_W5_Pam_Ability01_Part01",
    "5014020_Modifiers",
    "5014020_BE_BattleEvents"
  ],
  "abilityObject": {
    "5014020_BattleEventAbility_W5_Pam_SummonMonster": {
      "fileName": "5014020_BattleEventAbility_W5_Pam_SummonMonster",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "MDF_BEAlive",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<",
                    "value2": 4
                  }
                ]
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0.25,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonList_ADF_1",
                      "summonLocation": "KeepOnEdge"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"223685370\">Monster_W5_Pam_SummonedMinions_Appear</a>"
                },
                {
                  "name": "Create Enemies",
                  "delayPercent": 0.75,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonList_ADF_1",
                      "summonLocation": "KeepOnEdge"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"223685370\">Monster_W5_Pam_SummonedMinions_Appear</a>"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 4
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0.25,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "SummonList_ADF_1",
                          "summonLocation": "KeepOnEdge"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Recently Summoned Enemies}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"223685370\">Monster_W5_Pam_SummonedMinions_Appear</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "value": "GridFightBoss"
              },
              "passed": [
                {
                  "name": "Add Battle Event",
                  "teamName": "Player Team",
                  "eventID": 20032,
                  "assignOwner": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variables": {
                    "PassiveAbility01_P6_SpeedRatio": {
                      "operator": "Variables[0] ({[PassiveSkill01[5]]}) || RETURN",
                      "displayLines": "{[PassiveSkill01[5]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkill01[5]]}"
                      ]
                    }
                  },
                  "whenCreated": [
                    {
                      "name": "Assign Unique Name",
                      "uniqueName": "Pamu_Robot",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Remove from Team Target Grouping",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "stayInTeam": false
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Add Battle Event",
                  "teamName": "Player Team",
                  "eventID": 20032,
                  "assignOwner": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variables": null,
                  "whenCreated": [
                    {
                      "name": "Assign Unique Name",
                      "uniqueName": "Pamu_Robot",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Remove from Team Target Grouping",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "stayInTeam": false
                    }
                  ]
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_BEAlive",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Battle Event List}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Battle Event ID",
                "ID": 20032,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "ifTargetFound": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "stayInTeam": false
                }
              ]
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
                      "target": "{{Enemy Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<",
                    "value2": 4
                  }
                ]
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": 0.25,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonList_ADF_1",
                      "summonLocation": "KeepOnEdge"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"223685370\">Monster_W5_Pam_SummonedMinions_Appear</a>"
                },
                {
                  "name": "Create Enemies",
                  "delayPercent": 0.75,
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonList_ADF_1",
                      "summonLocation": "KeepOnEdge"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"223685370\">Monster_W5_Pam_SummonedMinions_Appear</a>"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "=",
                        "value2": 4
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0.25,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "SummonList_ADF_1",
                          "summonLocation": "KeepOnEdge"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Recently Summoned Enemies}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"223685370\">Monster_W5_Pam_SummonedMinions_Appear</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Battle Event List}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Battle Event ID",
            "ID": 20032,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          },
          "ifTargetFound": [
            {
              "name": "Remove from Team Target Grouping",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "stayInTeam": false
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "5014020_BattleEventAbility_W5_Pam_Summon": {
      "fileName": "5014020_BattleEventAbility_W5_Pam_Summon",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Add Stage Ability",
          "abilityName": "BattleEventAbility_W5_Pam_SummonMonster",
          "parameters": {}
        },
        {
          "name": "Add Stage Ability",
          "abilityName": "Monster_W5_Pam_PassiveAbility01_Camera_2",
          "parameters": {}
        },
        {
          "name": "Add Stage Ability",
          "abilityName": "Monster_W5_Pam_PassiveAbility01_Camera_3",
          "parameters": {}
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": {
            "operator": "Variables[0] (PassiveAbility01_P2_DelayPercentage) || RETURN",
            "displayLines": "PassiveAbility01_P2_DelayPercentage",
            "constants": [],
            "variables": [
              "PassiveAbility01_P2_DelayPercentage"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster's Summoner}}"
            },
            "value": "GridFightBoss"
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "CurrentSpeed"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Summoner}}"
              },
              "variableName": "CurrentSpeed",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1803941679\">Modifier_W5_Pam_BattleEvent_BaseSpeed</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"746359205\">Modifier_BattleEventAbility_SummonMonster</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1216093576\">Modifier_W5_Pam_BattleEvent_ForceKill</a>"
        },
        {
          "name": "Assign Unique Name",
          "uniqueName": "PamuSummon",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1803941679\">Modifier_W5_Pam_BattleEvent_BaseSpeed</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedOverride</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (CurrentSpeed) || Variables[1] (PassiveSkill01_P6_SpeedRatio) || MUL || RETURN",
                    "displayLines": "(CurrentSpeed * PassiveSkill01_P6_SpeedRatio)",
                    "constants": [],
                    "variables": [
                      "CurrentSpeed",
                      "PassiveSkill01_P6_SpeedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__746359205\">Modifier_BattleEventAbility_SummonMonster</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "Pam_MainBoss"
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "BattleEventAbility_W5_Pam_SummonMonster",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "EnemyChangeState",
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "5014020_Monster_W5_Pam_DeathRattle_Insert": {
      "fileName": "5014020_Monster_W5_Pam_DeathRattle_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-94545998\">Monster_W5_Pam_MainStory_ActionImmediately</a>"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5014020_Monster_W5_Pam_PassiveAbility_BGM": {
      "fileName": "5014020_Monster_W5_Pam_PassiveAbility_BGM",
      "childAbilityList": [
        "5014020_Monster_W5_Pam_PassiveAbility_BGM"
      ],
      "skillTrigger": "Passive_BGM",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              },
              {
                "name": "Stage Type",
                "stageType": "GridFightActivity"
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1633233015\">Enemy_W5_Pam_ResetStageBGM</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1633233015\">Enemy_W5_Pam_ResetStageBGM</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex",
                  "value": "CurWaveIndex"
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave: Start",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex2",
                  "value": "CurWaveIndex"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_WaveIndex",
                    "compareType": "NOT=",
                    "value2": {
                      "operator": "Variables[0] (MDF_WaveIndex2) || RETURN",
                      "displayLines": "MDF_WaveIndex2",
                      "constants": [],
                      "variables": [
                        "MDF_WaveIndex2"
                      ]
                    }
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "5014020_Monster_W5_Pam_PassiveAbility_PartChange_Insert": {
      "fileName": "5014020_Monster_W5_Pam_PassiveAbility_PartChange_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1404384913\">Modifier_Monster_W5_Pam_DefenceUp_Remove</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2010976662\">Modifier_Monster_W5_Pam_DefenceUp_Remove_02</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2027754281\">Modifier_Monster_W5_Pam_DefenceUp_Remove_03</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2044531900\">Modifier_Monster_W5_Pam_DefenceUp_Remove_04</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "Monster_W5_Pam_00_MainStory"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
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
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Turn-State",
                    "invertCondition": true,
                    "states": [
                      "ModifierPhase1Begin"
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>",
                  "adjustmentType": "+",
                  "variableName": "OneMoreCount",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1808092737\">Monster_W5_Pam_SummonedMinions_die_count</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-3818542\">Monster_W5_Pam_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_dirty_part_num",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1493708935\">Modifier_Monster_W5_Pam_Charge</a>[<span class=\"descriptionNumberColor\">Raring to Go</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "Monster_W5_Pam_00_MainStory"
          },
          "passed": [
            "Deleted bullshit",
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"766895631\">Standard_Monster_Floating_DamageReduceController</a>",
              "valuePerStack": {
                "MDF_LockHpActionDecreaseRatio": 0.2,
                "MDF_LastLockHpRatio": 0.85,
                "MDF_LockHpUpLimitRatio": 0.9,
                "MDF_DamageReduceRatio": 0.98
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-94545998\">Monster_W5_Pam_MainStory_ActionImmediately</a>",
              "valuePerStack": {
                "MDF_Lock_Radio": 0.5
              }
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 2
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": ">",
                "value2": 2
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 5014021,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Alloy Mechatron: King Pom-Pom",
                "isBaseCompare": true,
                "invertCondition": true
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 3
              }
            ]
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Monster_W5_Pam_Ability03_Part01",
              "isTrigger": true
            }
          ]
        },
        {
          "name": "UI Display Event",
          "popUpText": "High-Temp Sterilization Mode"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-579291314\">Monster_W5_Pam_DisableAction_Modifier_02</a>",
          "modifierFlags": [
            "DisableAction"
          ]
        }
      ]
    },
    "5014020_Monster_W5_Pam_PassiveAbility02_Part01": {
      "fileName": "5014020_Monster_W5_Pam_PassiveAbility02_Part01",
      "childAbilityList": [
        "5014020_Monster_W5_Pam_PassiveAbility02_Part01",
        "5014020_Monster_W5_Pam_PassiveAbility_PartChange_Insert",
        "5014020_Monster_W5_Pam_DeathRattle_Insert",
        "5014020_Monster_W5_Pam_PartChange_Camera",
        "5014020_Monster_W5_Pam_PartChange_Camera_02",
        "5014020_Monster_W5_Pam_PartChange_Camera_03"
      ],
      "skillTrigger": "PassiveSkill02",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2085750266\">Monster_W5_Pam_MonsterNumCount</a>"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "display": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-605749584\">Monster_W5_Pam_PartController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2115837749\">W5_Pam_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2065504892\">W5_Pam_BattleScore2</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "GridFightBoss"
          },
          "passed": [
            {
              "name": "Add Battle Event",
              "teamName": "Neutral Team",
              "eventID": 20033,
              "variables": {
                "PassiveAbility01_P2_DelayPercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[1]]}"
                  ]
                },
                "PassiveAbility01_P5_SpeedRatio": {
                  "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[4]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[4]]}"
                  ]
                }
              },
              "whenCreated": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "Pamu_Summon",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Add Battle Event",
              "teamName": "Neutral Team",
              "eventID": 20033,
              "variables": {
                "PassiveAbility01_P2_DelayPercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[1]]}"
                  ]
                }
              },
              "whenCreated": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "Pamu_Summon",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__495266650\">Monster_W5_Pam_CanSummon</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2085750266\">Monster_W5_Pam_MonsterNumCount</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "variableName": "MDF_MonsterNum",
                  "livingTargets": true
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "variableName": "MDF_MonsterNum",
                      "livingTargets": true
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
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "variableName": "MDF_MonsterNum",
                      "livingTargets": true
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_MonsterNum",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 99,
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_MonsterNum",
                            "compareType": "<",
                            "value2": 5
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
                          "modifier": "<a class=\"gModGreen\" id=\"495266650\">Monster_W5_Pam_CanSummon</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"495266650\">Monster_W5_Pam_CanSummon</a>"
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1678930905\">Monster_W5_Pam_DisableAction_Modifier</a>",
          "modifierFlags": [
            "DisableAction"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2015018608\">Monster_W5_Pam_Insert_Mark</a>"
        }
      ]
    },
    "5014020_Monster_W5_Pam_PassiveAbility01_Part01": {
      "fileName": "5014020_Monster_W5_Pam_PassiveAbility01_Part01",
      "childAbilityList": [
        "5014020_Monster_W5_Pam_PassiveAbility01_Camera",
        "5014020_Monster_W5_Pam_PassiveAbility01_Part01",
        "5014020_BattleEventAbility_W5_Pam_SummonMonster",
        "5014020_Monster_W5_Pam_PassiveAbility01_Camera_2",
        "5014020_Monster_W5_Pam_PassiveAbility01_Camera_3"
      ],
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-216839443\">Monster_W5_Pam_summon_zangshui_monitor</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"761695263\">Monster_W5_Pam_Deathrattle</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-51456028\">Modifier_Monster_W5_Pam_DefenceUp_Boom</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "Monster_W5_Pam_00_MainStory"
          }
        }
      ],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "Monster_W5_Pam_00_MainStory"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1299504024\">Monster_W5_Pam_MainStory_Monitor</a>"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1299504024\">Monster_W5_Pam_MainStory_Monitor</a>",
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
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
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0.5
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__761695263\">Monster_W5_Pam_Deathrattle</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_IsAngry",
                    "compareType": "=",
                    "value2": 1
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-216839443\">Monster_W5_Pam_summon_zangshui_monitor</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"2010976662\">Modifier_Monster_W5_Pam_DefenceUp_Remove_02</a>"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]",
                        "compareType": ">",
                        "value2": 0,
                        "valueType": "Layer"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "5014020_BattleEvent_W5_Pam_Part01": {
      "fileName": "5014020_BattleEvent_W5_Pam_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "Pam_MainBoss"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"833181750\">Enemy_W2_LycanKing_IF_MuteUltra</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "Pam_MainBoss"
          },
          "ifTargetFound": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "ability": "Monster_W5_Pam_Ability05_Part01",
              "isTrigger": true
            }
          ]
        },
        "Wait for Pending Ability Completions",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5014020_Monster_W5_Pam_Ability10_Part02": {
      "fileName": "5014020_Monster_W5_Pam_Ability10_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "compareType": "<=",
                "value2": 3,
                "livingTargets": true
              }
            ]
          },
          "passed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__206) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__206",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__206"
                ]
              },
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonList_ADF_1",
                  "summonLocation": "AroundCasterOnEdge"
                }
              ]
            },
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__207) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__207",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__207"
                ]
              },
              "enemyList": [
                {
                  "name": "Create Enemy from Custom",
                  "value": "SummonList_ADF_1",
                  "summonLocation": "AroundCasterOnEdge"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "compareType": "=",
                "value2": 4,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__207) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__207",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__207"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Create Enemy from Custom",
                      "value": "SummonList_ADF_1",
                      "summonLocation": "AroundCasterOnEdge"
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
            "name": "Compare: Variable",
            "value1": "MDF_BEAlive",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Add Battle Event",
              "teamName": "Player Team",
              "eventID": 20032,
              "assignOwner": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "variables": null,
              "whenCreated": [
                {
                  "name": "Assign Unique Name",
                  "uniqueName": "Pamu_Robot",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_BEAlive",
              "value": 1
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5014020_Monster_W5_Pam_Ability10_Part01": {
      "fileName": "5014020_Monster_W5_Pam_Ability10_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_Pam_Ability10_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5014020_Monster_W5_Pam_Ability09_Part02": {
      "fileName": "5014020_Monster_W5_Pam_Ability09_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1808092737\">Monster_W5_Pam_SummonedMinions_die_count</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1250511369\">Monster_W5_Pam_SummonedMinions_monitor</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_dirty_part_num",
          "value": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-3818542\">Monster_W5_Pam_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5014020_Monster_W5_Pam_Ability09_Part01": {
      "fileName": "5014020_Monster_W5_Pam_Ability09_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_Pam_Ability09_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5014020_Monster_W5_Pam_Ability08_Part02": {
      "fileName": "5014020_Monster_W5_Pam_Ability08_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_31) || RETURN",
              "displayLines": "UnusedUnderThisBase_31",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_31"
              ]
            },
            "HitSplit": 0.6,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (UnusedUnderThisBase_31) || RETURN",
              "displayLines": "UnusedUnderThisBase_31",
              "constants": [],
              "variables": [
                "UnusedUnderThisBase_31"
              ]
            },
            "HitSplit": 0.4,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__208) || RETURN",
            "displayLines": "ENEMIES_OBJECT_UNUSED__208",
            "constants": [],
            "variables": [
              "ENEMIES_OBJECT_UNUSED__208"
            ]
          },
          "adjustment": "Add"
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1364752860\">W1_Mecha02_AttackBonus_Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "5014020_Monster_W5_Pam_Ability08_Part01": {
      "fileName": "5014020_Monster_W5_Pam_Ability08_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_Pam_Ability08_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "5014020_Monster_W5_Pam_Ability06_Part02": {
      "fileName": "5014020_Monster_W5_Pam_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_FirstUltraSkill",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_FirstUltraSkill",
              "value": 2
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"766895631\">Standard_Monster_Floating_DamageReduceController</a>"
            }
          ]
        },
        {
          "name": "Define Modifier-Specific Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]",
          "variableName": "UltraSkillTimelineStart",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1493708935\">Modifier_Monster_W5_Pam_Charge</a>[<span class=\"descriptionNumberColor\">Raring to Go</span>]"
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.05,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill06[0]]}) || RETURN",
              "displayLines": "{[Skill06[0]]}",
              "constants": [],
              "variables": [
                "{[Skill06[0]]}"
              ]
            },
            "HitSplit": 0.5,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "operator": "Variables[0] ({[Skill06[1]]}) || RETURN",
            "displayLines": "{[Skill06[1]]}",
            "constants": [],
            "variables": [
              "{[Skill06[1]]}"
            ]
          },
          "adjustment": "Add"
        },
        "Trigger: Attack End",
        {
          "name": "Define Modifier-Specific Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]",
          "variableName": "UltraSkillTimelineEnd",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase1"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-3818542\">Monster_W5_Pam_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "5014020_Monster_W5_Pam_Ability06_Part01": {
      "fileName": "5014020_Monster_W5_Pam_Ability06_Part01",
      "childAbilityList": [
        "5014020_Monster_W5_Pam_Ability06_Camera",
        "5014020_Monster_W5_Pam_Ability06_Part01",
        "5014020_Monster_W5_Pam_Ability06_Part02"
      ],
      "skillTrigger": "Skill06",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_Pam_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "5014020_Monster_W5_Pam_Ability05_Part02": {
      "fileName": "5014020_Monster_W5_Pam_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "Monster_W5_Pam_00_MainStory"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_FirstUltraSkill",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_FirstUltraSkill",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-94545998\">Monster_W5_Pam_MainStory_ActionImmediately</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-94545998\">Monster_W5_Pam_MainStory_ActionImmediately</a>",
                  "valuePerStack": {
                    "MDF_Lock_Radio": 0.3
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Modifier-Specific Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]",
          "variableName": "UltraSkillTimelineStart",
          "value": 1
        },
        "Ability Start",
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "PhaseCharge"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1493708935\">Modifier_Monster_W5_Pam_Charge</a>[<span class=\"descriptionNumberColor\">Raring to Go</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-3818542\">Monster_W5_Pam_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1493708935\">Modifier_Monster_W5_Pam_Charge</a>[<span class=\"descriptionNumberColor\">Raring to Go</span>]",
          "stackType": "Replace",
          "stackData": [],
          "latentQueue": [
            "MDF_FirstUltraSkill"
          ],
          "description": "Uses \"Saturation Cleaning!\" in the next action.",
          "type": "Other",
          "effectName": "Charging",
          "statusName": "Raring to Go"
        }
      ]
    },
    "5014020_Monster_W5_Pam_Ability05_Part01": {
      "fileName": "5014020_Monster_W5_Pam_Ability05_Part01",
      "childAbilityList": [
        "5014020_Monster_W5_Pam_Ability05_Camera",
        "5014020_Monster_W5_Pam_Ability05_Part01",
        "5014020_Monster_W5_Pam_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_Pam_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5014020_Monster_W5_Pam_Ability04_Part02": {
      "fileName": "5014020_Monster_W5_Pam_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
              "displayLines": "{[Skill04[0]]}",
              "constants": [],
              "variables": [
                "{[Skill04[0]]}"
              ]
            },
            "HitSplit": 0.4,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "operator": "Variables[0] ({[Skill04[4]]}) || RETURN",
            "displayLines": "{[Skill04[4]]}",
            "constants": [],
            "variables": [
              "{[Skill04[4]]}"
            ]
          },
          "adjustment": "Add"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-624604894\">Standard_Pam_ElationControl</a>[<span class=\"descriptionNumberColor\">Work Is Bliss!</span>]",
          "duration": 1,
          "valuePerStack": {
            "MDF_PropertyValue01": {
              "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
              "displayLines": "{[Skill04[1]]}",
              "constants": [],
              "variables": [
                "{[Skill04[1]]}"
              ]
            },
            "MDF_PropertyValue02": {
              "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
              "displayLines": "{[Skill04[2]]}",
              "constants": [],
              "variables": [
                "{[Skill04[2]]}"
              ]
            },
            "MDF_PropertyValue03": {
              "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
              "displayLines": "{[Skill04[3]]}",
              "constants": [],
              "variables": [
                "{[Skill04[3]]}"
              ]
            },
            "MDF_PropertyValue04": {
              "operator": "Variables[0] ({[Skill04[5]]}) || RETURN",
              "displayLines": "{[Skill04[5]]}",
              "constants": [],
              "variables": [
                "{[Skill04[5]]}"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "5014020_Monster_W5_Pam_Ability04_Part01": {
      "fileName": "5014020_Monster_W5_Pam_Ability04_Part01",
      "childAbilityList": [
        "5014020_Monster_W5_Pam_Ability04_Camera",
        "5014020_Monster_W5_Pam_Ability04_Part01",
        "5014020_Monster_W5_Pam_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_Pam_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "5014020_Monster_W5_Pam_Ability03_Part02": {
      "fileName": "5014020_Monster_W5_Pam_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_IsAngry",
          "value": 1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1556520356\">Modifier_Monster_W5_Pam_Rage</a>[<span class=\"descriptionNumberColor\">Steam Wash</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
              "displayLines": "{[Skill03[0]]}",
              "constants": [],
              "variables": [
                "{[Skill03[0]]}"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
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
              "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]",
              "stackLimit": {
                "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                "displayLines": "{[Skill03[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[1]]}"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] ({[Skill03[2]]}) || RETURN",
                  "displayLines": "{[Skill03[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[2]]}"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                "displayLines": "{[Skill03[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[1]]}"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]",
              "stackLimit": {
                "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                "displayLines": "{[Skill03[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[4]]}"
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] ({[Skill03[5]]}) || RETURN",
                  "displayLines": "{[Skill03[5]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill03[5]]}"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                "displayLines": "{[Skill03[4]]}",
                "constants": [],
                "variables": [
                  "{[Skill03[4]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-458099336\">Monster_W5_Pam_zangshui_layer_display_02</a>"
        },
        {
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "PhaseRage"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            "Trigger: Ability End"
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              {
                "name": "Enemy ID",
                "ID": 5014021,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Alloy Mechatron: King Pom-Pom",
                "isBaseCompare": true
              }
            ]
          },
          "passed": [
            "Trigger: Ability End"
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5014020_Monster_W5_Pam_Ability03_Part01": {
      "fileName": "5014020_Monster_W5_Pam_Ability03_Part01",
      "childAbilityList": [
        "5014020_Monster_W5_Pam_Ability03_Camera",
        "5014020_Monster_W5_Pam_Ability03_Part01",
        "5014020_Monster_W5_Pam_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_Pam_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "5014020_Monster_W5_Pam_Ability02_Part02": {
      "fileName": "5014020_Monster_W5_Pam_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]"
          }
        },
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.18,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.18,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.18,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.18,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "HitSplit": 0.28,
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
            "displayLines": "{[Skill02[1]]}",
            "constants": [],
            "variables": [
              "{[Skill02[1]]}"
            ]
          },
          "adjustment": "Add"
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]"
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "5014020_Monster_W5_Pam_Ability02_Part01": {
      "fileName": "5014020_Monster_W5_Pam_Ability02_Part01",
      "childAbilityList": [
        "5014020_Monster_W5_Pam_Ability02_Camera",
        "5014020_Monster_W5_Pam_Ability02_Part01",
        "5014020_Monster_W5_Pam_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_Pam_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "5014020_Monster_W5_Pam_Ability01_Part02": {
      "fileName": "5014020_Monster_W5_Pam_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
              "displayLines": "{[Skill01[0]]}",
              "constants": [],
              "variables": [
                "{[Skill01[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
            "displayLines": "{[Skill01[1]]}",
            "constants": [],
            "variables": [
              "{[Skill01[1]]}"
            ]
          },
          "adjustment": "Add"
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "references": []
    },
    "5014020_Monster_W5_Pam_Ability01_Part01": {
      "fileName": "5014020_Monster_W5_Pam_Ability01_Part01",
      "childAbilityList": [
        "5014020_Monster_W5_Pam_Ability01_Camera",
        "5014020_Monster_W5_Pam_Ability01_Part01",
        "5014020_Monster_W5_Pam_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W5_Pam_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      },
      "references": []
    },
    "5014020_Modifiers": {
      "fileName": "5014020_Modifiers",
      "abilityType": "Char. Modifiers",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__223685370\">Monster_W5_Pam_SummonedMinions_Appear</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_BEAlive"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1216093576\">Modifier_W5_Pam_BattleEvent_ForceKill</a>",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "Pam_MainBoss"
                  },
                  "passed": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "ignoreHPLossTriggers": true,
                      "ignoreDeathTriggers": true
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2065504892\">W5_Pam_BattleScore2</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W5_Pam_00_BattleScore2_Flag"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W5_Pam_00_BattleScore2_Flag2"
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "W5_Pam_00_BattleScore2_Flag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "W5_Pam_00_BattleScore2_Flag",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]",
              "execute": [
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
                        "value1": "W5_Pam_00_BattleScore2_Flag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-958061965\">Standard_Pam_ElationControl_ToMonster_02</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "W5_Pam_00_BattleScore2_Flag",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "W5_Pam_00_BattleScore2_Flag2",
                      "value": 1,
                      "max": 100
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "W5_Pam_00_BattleScore2_Flag2",
                        "compareType": ">=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Achievement",
                          "relatedAchievements": [
                            {
                              "title": "Bubble Trendsetter",
                              "desc": "Trigger the \"Shiny\" effect of Potent Foam Soap at least #1 time(s) in a single battle against Alloy Mechatron: King Pom-Pom",
                              "rarity": "Low",
                              "params": [
                                3
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2115837749\">W5_Pam_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"2044531900\">Modifier_Monster_W5_Pam_DefenceUp_Remove_04</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Every Drop Counts",
                          "desc": "In the battle against Alloy Mechatron: King Pom-Pom, remove its \"Steam Wash\" state",
                          "rarity": "Low"
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-299555653\">Monster_W5_Pam_SummonedMinions_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageAddedRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_DamageAddedRatio * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageAddedRatio",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span>, up to <span class=\"descriptionNumberColor\">MDF_BuffMaxLayer</span> stack(s).",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-51456028\">Modifier_Monster_W5_Pam_DefenceUp_Boom</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"2044531900\">Modifier_Monster_W5_Pam_DefenceUp_Remove_04</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"989212197\">Monster_W5_Pam_zangshui_layer_display</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-458099336\">Monster_W5_Pam_zangshui_layer_display_02</a>"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "assignState": "False"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1493708935\">Modifier_Monster_W5_Pam_Charge</a>[<span class=\"descriptionNumberColor\">Raring to Go</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Change Character Transformation",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "revertDefault": true
                        }
                      ]
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": {}
                        },
                        "Damage": {
                          "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
                          "displayLines": "{[Skill03[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill03[3]]}"
                          ]
                        },
                        "dmgFormula": "Max HP Scaling",
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "True DMG"
                      },
                      "attackType": "Level"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IsAngry",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2044531900\">Modifier_Monster_W5_Pam_DefenceUp_Remove_04</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-94545998\">Monster_W5_Pam_MainStory_ActionImmediately</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.01
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Pam_LockHP_Trigger",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "phase": "MainStory_DiePerform"
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Monster_W5_Pam_DeathRattle_Insert",
                      "priorityTag": "STAGE_Enemy",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Pam_LockHP_Trigger",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_FirstUltraSkill",
                    "compareType": "<",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_Hit_Count",
                      "context": "ContextModifier",
                      "value": 1,
                      "max": 999
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_Hit_Count",
                            "compareType": ">=",
                            "value2": 10,
                            "contextScope": "ContextModifier"
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": "<=",
                            "value2": {
                              "operator": "Variables[0] (MDF_Lock_Radio) || RETURN",
                              "displayLines": "MDF_Lock_Radio",
                              "constants": [],
                              "variables": [
                                "MDF_Lock_Radio"
                              ]
                            }
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "scope": "ContextModifier",
                          "variableName": "MDF_Hit_Count",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_Lock_Radio",
                          "context": "ContextModifier",
                          "value": -0.24,
                          "max": 100
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Current Turn Is",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "Assign Advance/Delay to Current Ability Use",
                              "adjustmentValue": 0,
                              "adjustmentType": "="
                            },
                            {
                              "name": "Action Advance/Delay",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "advanceType": "Advance",
                              "multiAdd": -1
                            }
                          ],
                          "failed": [
                            {
                              "name": "Action Advance/Delay",
                              "advanceType": "Set",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "set": 0
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
          "stackData": [
            "MDF_Lock_Radio"
          ],
          "latentQueue": [
            "MDF_FirstUltraSkill"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-958061965\">Standard_Pam_ElationControl_ToMonster_02</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1583873554\">Modifier_Monster_W5_Pam_Endurance</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_Is_BOSS",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "Target_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_Is_BOSS",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": {}
                        },
                        "DamageFlat": {
                          "operator": "Variables[0] (Target_MaxHP) || Variables[1] (Skill07_P3_ToMonsterHpPercentage) || MUL || Constants[0] (0.3) || MUL || RETURN",
                          "displayLines": "((Target_MaxHP * Skill07_P3_ToMonsterHpPercentage) * 0.3)",
                          "constants": [
                            0.3
                          ],
                          "variables": [
                            "Target_MaxHP",
                            "Skill07_P3_ToMonsterHpPercentage"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "True DMG"
                      },
                      "overrideDamageOwner": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "attackType": "Additional DMG"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": {}
                        },
                        "DamageFlat": {
                          "operator": "Variables[0] (Target_MaxHP) || Variables[1] (Skill07_P3_ToMonsterHpPercentage) || MUL || Constants[0] (0.3) || MUL || RETURN",
                          "displayLines": "((Target_MaxHP * Skill07_P3_ToMonsterHpPercentage) * 0.3)",
                          "constants": [
                            0.3
                          ],
                          "variables": [
                            "Target_MaxHP",
                            "Skill07_P3_ToMonsterHpPercentage"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "True DMG"
                      },
                      "overrideDamageOwner": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "attackType": "Additional DMG"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": {}
                        },
                        "DamageFlat": {
                          "operator": "Variables[0] (Target_MaxHP) || Variables[1] (Skill07_P3_ToMonsterHpPercentage) || MUL || Constants[0] (0.4) || MUL || RETURN",
                          "displayLines": "((Target_MaxHP * Skill07_P3_ToMonsterHpPercentage) * 0.4)",
                          "constants": [
                            0.4
                          ],
                          "variables": [
                            "Target_MaxHP",
                            "Skill07_P3_ToMonsterHpPercentage"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "True DMG"
                      },
                      "overrideDamageOwner": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "attackType": "Additional DMG"
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": {
                          "name": "Damage Type Source",
                          "sourceType": {}
                        },
                        "DamageFlat": {
                          "operator": "Variables[0] (Target_MaxHP) || Variables[1] (Skill07_P3_ToMonsterHpPercentage) || MUL || RETURN",
                          "displayLines": "(Target_MaxHP * Skill07_P3_ToMonsterHpPercentage)",
                          "constants": [],
                          "variables": [
                            "Target_MaxHP",
                            "Skill07_P3_ToMonsterHpPercentage"
                          ]
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "True DMG"
                      },
                      "overrideDamageOwner": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "attackType": "Additional DMG"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1583873554\">Modifier_Monster_W5_Pam_Endurance</a>"
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1830578188\">Standard_Pam_ElationControl_ToMonster</a>",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": ">=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-958061965\">Standard_Pam_ElationControl_ToMonster_02</a>",
                          "valuePerStack": {
                            "Ability07_P3_ToMonsterHpPercentage": {
                              "operator": "Variables[0] (Skill04_P3_ToMonsterHpPercentage) || RETURN",
                              "displayLines": "Skill04_P3_ToMonsterHpPercentage",
                              "constants": [],
                              "variables": [
                                "Skill04_P3_ToMonsterHpPercentage"
                              ]
                            },
                            "Ability07_P4_ElationPoint": {
                              "operator": "Variables[0] (Skill04_P4_ElationPoint) || RETURN",
                              "displayLines": "Skill04_P4_ElationPoint",
                              "constants": [],
                              "variables": [
                                "Skill04_P4_ElationPoint"
                              ]
                            },
                            "_Is_BOSS": 1
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-958061965\">Standard_Pam_ElationControl_ToMonster_02</a>",
                          "valuePerStack": {
                            "Ability07_P3_ToMonsterHpPercentage": {
                              "operator": "Variables[0] (Skill04_P3_ToMonsterHpPercentage) || RETURN",
                              "displayLines": "Skill04_P3_ToMonsterHpPercentage",
                              "constants": [],
                              "variables": [
                                "Skill04_P3_ToMonsterHpPercentage"
                              ]
                            },
                            "Ability07_P4_ElationPoint": {
                              "operator": "Variables[0] (Skill04_P4_ElationPoint) || RETURN",
                              "displayLines": "Skill04_P4_ElationPoint",
                              "constants": [],
                              "variables": [
                                "Skill04_P4_ElationPoint"
                              ]
                            },
                            "_Is_BOSS": 0
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] (Skill04_P4_ElationPoint) || RETURN",
                    "displayLines": "Skill04_P4_ElationPoint",
                    "constants": [],
                    "variables": [
                      "Skill04_P4_ElationPoint"
                    ]
                  },
                  "adjustment": "Add"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1830578188\">Standard_Pam_ElationControl_ToMonster</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-624604894\">Standard_Pam_ElationControl</a>[<span class=\"descriptionNumberColor\">Work Is Bliss!</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1850526283\">Standard_Pam_ElationControl_ToPlayer</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "Skill Points Modification",
                  "adjustmentValue": {
                    "operator": "Variables[0] (Skill04_P6_BPPoint) || RETURN",
                    "displayLines": "Skill04_P6_BPPoint",
                    "constants": [],
                    "variables": [
                      "Skill04_P6_BPPoint"
                    ]
                  },
                  "adjustmentType": "+"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1850526283\">Standard_Pam_ElationControl_ToPlayer</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-624604894\">Standard_Pam_ElationControl</a>[<span class=\"descriptionNumberColor\">Work Is Bliss!</span>]"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-624604894\">Standard_Pam_ElationControl</a>[<span class=\"descriptionNumberColor\">Work Is Bliss!</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "RemoveWhenCasterUnstage"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_TriggerMark",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1830578188\">Standard_Pam_ElationControl_ToMonster</a>",
                          "duration": 1,
                          "valuePerStack": {
                            "Ability04_P3_ToMonsterHpPercentage": {
                              "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                              "displayLines": "{[Skill04[2]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill04[2]]}"
                              ]
                            },
                            "Ability04_P4_ElationPoint": {
                              "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
                              "displayLines": "{[Skill04[3]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill04[3]]}"
                              ]
                            }
                          },
                          "casterAssign": "CasterSelf"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_TriggerMark",
                          "value": 1
                        }
                      ],
                      "failed": [
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
                              "modifier": "<a class=\"gModGreen\" id=\"1850526283\">Standard_Pam_ElationControl_ToPlayer</a>",
                              "duration": 1,
                              "valuePerStack": {
                                "Ability04_P6_BPPoint": {
                                  "operator": "Variables[0] ({[Skill04[5]]}) || RETURN",
                                  "displayLines": "{[Skill04[5]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill04[5]]}"
                                  ]
                                }
                              }
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_TriggerMark",
                              "value": 1
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
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_TriggerMark",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "UI Display Event (On Entity)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue01",
            "MDF_PropertyValue02",
            "MDF_PropertyValue03",
            "MDF_PropertyValue04"
          ],
          "latentQueue": [],
          "description": "After using Basic ATK, triggers the \"Shiny\" effect, additionally deals True DMG equal to <span class=\"descriptionNumberColor\">MDF_PropertyValue02</span> of the target's Max HP, and gains <span class=\"descriptionNumberColor\">MDF_PropertyValue03</span> Punchline(s). After using Skill, triggers the \"Pristine\" effect and recovers <span class=\"descriptionNumberColor\">MDF_PropertyValue04</span> Skill Point(s). This effect can trigger a max of 1 time while the \"Work Is Bliss!\" effect is active.",
          "type": "Other",
          "effectName": "Deep Clean",
          "statusName": "Work Is Bliss!"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1307668039\">Modifier_Monster_W5_Pam_zangshui_display</a>",
          "stackType": "Replace",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1556520356\">Modifier_Monster_W5_Pam_Rage</a>[<span class=\"descriptionNumberColor\">Steam Wash</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "MDF_IsAngry"
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Steam Wash"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2053579476\">Modifier_Monster_W5_Pam_DamageDown</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer_2",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer_2) || Constants[0] (0.25) || MUL || RETURN",
                    "displayLines": "(MDF_Layer_2 * 0.25)",
                    "constants": [
                      0.25
                    ],
                    "variables": [
                      "MDF_Layer_2"
                    ]
                  }
                }
              ]
            }
          ],
          "stackLimit": 3,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-605749584\">Monster_W5_Pam_PartController</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 5014021,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Alloy Mechatron: King Pom-Pom",
                        "isBaseCompare": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1808092737\">Monster_W5_Pam_SummonedMinions_die_count</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IsAngry",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-3818542\">Monster_W5_Pam_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W5_Pam_PassiveAbility_PartChange_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1808092737\">Monster_W5_Pam_SummonedMinions_die_count</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IsAngry",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-3818542\">Monster_W5_Pam_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value": "Monster_W5_Pam_00_MainStory"
                      }
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W5_Pam_PassiveAbility_PartChange_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__102979057\">Modifier_Monster_W5_Pam_summon_AIChange</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 2
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1088041065\">Monster_W5_Pam_summon_zangshui_remove</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "CleanNum",
                  "value": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__205) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__205",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__205"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1193401028\">Monster_W5_Pam_summon_zangshui</a>",
          "stackType": "Replace"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1808092737\">Monster_W5_Pam_SummonedMinions_die_count</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
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
                        "value1": null,
                        "compareType": "=",
                        "value2": 1,
                        "valueType": "Layer"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Battle Event",
                      "teamName": "Player Team",
                      "eventID": 20032,
                      "assignOwner": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variables": null,
                      "whenCreated": [
                        {
                          "name": "Assign Unique Name",
                          "uniqueName": "Pamu_Robot",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1250511369\">Monster_W5_Pam_SummonedMinions_monitor</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1808092737\">Monster_W5_Pam_SummonedMinions_die_count</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-458099336\">Monster_W5_Pam_zangshui_layer_display_02</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1307668039\">Modifier_Monster_W5_Pam_zangshui_display</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "DefenceUpNum",
                  "modifierName": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]",
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
                    "value1": "DefenceUpNum",
                    "compareType": "=",
                    "value2": 0
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (DefenceUpNum) || RETURN",
                            "displayLines": "DefenceUpNum",
                            "constants": [],
                            "variables": [
                              "DefenceUpNum"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                            "displayLines": "{[Skill03[1]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill03[1]]}"
                            ]
                          },
                          "assignState": "True",
                          "state": "Normal"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (DefenceUpNum) || RETURN",
                            "displayLines": "DefenceUpNum",
                            "constants": [],
                            "variables": [
                              "DefenceUpNum"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                            "displayLines": "{[Skill03[4]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill03[4]]}"
                            ]
                          },
                          "assignState": "True",
                          "state": "Normal"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (DefenceUpNum) || RETURN",
                            "displayLines": "DefenceUpNum",
                            "constants": [],
                            "variables": [
                              "DefenceUpNum"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                            "displayLines": "{[Skill03[1]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill03[1]]}"
                            ]
                          },
                          "assignState": "True",
                          "state": "Active"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (DefenceUpNum) || RETURN",
                            "displayLines": "DefenceUpNum",
                            "constants": [],
                            "variables": [
                              "DefenceUpNum"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                            "displayLines": "{[Skill03[4]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill03[4]]}"
                            ]
                          },
                          "assignState": "True",
                          "state": "Active"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "DefenceUpNum",
                      "modifierName": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]",
                      "multiplier": 1
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "DefenceUpNum",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 99,
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "DefenceUpNum",
                        "compareType": "=",
                        "value2": 0
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
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (DefenceUpNum) || RETURN",
                                "displayLines": "DefenceUpNum",
                                "constants": [],
                                "variables": [
                                  "DefenceUpNum"
                                ]
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                                "displayLines": "{[Skill03[1]]}",
                                "constants": [],
                                "variables": [
                                  "{[Skill03[1]]}"
                                ]
                              },
                              "assignState": "True",
                              "state": "Normal"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (DefenceUpNum) || RETURN",
                                "displayLines": "DefenceUpNum",
                                "constants": [],
                                "variables": [
                                  "DefenceUpNum"
                                ]
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                                "displayLines": "{[Skill03[4]]}",
                                "constants": [],
                                "variables": [
                                  "{[Skill03[4]]}"
                                ]
                              },
                              "assignState": "True",
                              "state": "Normal"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (DefenceUpNum) || RETURN",
                                "displayLines": "DefenceUpNum",
                                "constants": [],
                                "variables": [
                                  "DefenceUpNum"
                                ]
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                                "displayLines": "{[Skill03[1]]}",
                                "constants": [],
                                "variables": [
                                  "{[Skill03[1]]}"
                                ]
                              },
                              "assignState": "True",
                              "state": "Active"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Update Displayed Energy Bar",
                              "value": {
                                "operator": "Variables[0] (DefenceUpNum) || RETURN",
                                "displayLines": "DefenceUpNum",
                                "constants": [],
                                "variables": [
                                  "DefenceUpNum"
                                ]
                              },
                              "entityClass": "Enemy",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "maximum": {
                                "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                                "displayLines": "{[Skill03[4]]}",
                                "constants": [],
                                "variables": [
                                  "{[Skill03[4]]}"
                                ]
                              },
                              "assignState": "True",
                              "state": "Active"
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
          "latentQueue": [
            "MDF_IsAngry"
          ],
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__989212197\">Monster_W5_Pam_zangshui_layer_display</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_dirty_part_num",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_dirty_part_num) || RETURN",
                        "displayLines": "MDF_dirty_part_num",
                        "constants": [],
                        "variables": [
                          "MDF_dirty_part_num"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__209) || RETURN",
                        "displayLines": "ENEMIES_OBJECT_UNUSED__209",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__209"
                        ]
                      },
                      "assignState": "True",
                      "state": "Normal"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_dirty_part_num) || RETURN",
                        "displayLines": "MDF_dirty_part_num",
                        "constants": [],
                        "variables": [
                          "MDF_dirty_part_num"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__209) || RETURN",
                        "displayLines": "ENEMIES_OBJECT_UNUSED__209",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__209"
                        ]
                      },
                      "assignState": "True",
                      "state": "Normal"
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_dirty_part_num",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 99,
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_dirty_part_num",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_dirty_part_num) || RETURN",
                            "displayLines": "MDF_dirty_part_num",
                            "constants": [],
                            "variables": [
                              "MDF_dirty_part_num"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__209) || RETURN",
                            "displayLines": "ENEMIES_OBJECT_UNUSED__209",
                            "constants": [],
                            "variables": [
                              "ENEMIES_OBJECT_UNUSED__209"
                            ]
                          },
                          "assignState": "True",
                          "state": "Normal"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_dirty_part_num) || RETURN",
                            "displayLines": "MDF_dirty_part_num",
                            "constants": [],
                            "variables": [
                              "MDF_dirty_part_num"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__209) || RETURN",
                            "displayLines": "ENEMIES_OBJECT_UNUSED__209",
                            "constants": [],
                            "variables": [
                              "ENEMIES_OBJECT_UNUSED__209"
                            ]
                          },
                          "assignState": "True",
                          "state": "Normal"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-3818542\">Monster_W5_Pam_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]",
          "modifierFlags": [
            "MuteBreak"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Modify Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "action": "Protected",
                  "valueList": [
                    "Physical",
                    "Fire",
                    "Ice",
                    "Thunder",
                    "Wind",
                    "Quantum",
                    "Imaginary"
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "MDF_FirstUltraSkill"
          ],
          "description": "When \"Alloy Mechatron: King Pom-Pom\" is in the \"Raring to Go\" state, this unit's Toughness cannot be reduced.",
          "type": "Other",
          "effectName": "Weakness Protected",
          "statusName": "Weakness Protected"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1583873554\">Modifier_Monster_W5_Pam_Endurance</a>",
          "modifierFlags": [
            "MuteHitH"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class",
                  "class": "A"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Hit-Class",
                  "reset": true
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_Is_BOSS"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1583873554\">Modifier_Monster_W5_Pam_Endurance</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Hit-Class",
                  "reset": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1583873554\">Modifier_Monster_W5_Pam_Endurance</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1556520356\">Modifier_Monster_W5_Pam_Rage</a>[<span class=\"descriptionNumberColor\">Steam Wash</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"989212197\">Monster_W5_Pam_zangshui_layer_display</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-458099336\">Monster_W5_Pam_zangshui_layer_display_02</a>"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "assignState": "False"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_27"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_26"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_25"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_24"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_27"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_26"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_25"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "APOC_BOOL_OBJECT_UNUSED_24"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": "Thin"
                          },
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": [
                              "LargeMonster",
                              "LargeAvatar",
                              "LargeFakeAvatar"
                            ],
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 5
                          }
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": "Thin"
                              },
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": [
                                  "LargeMonster",
                                  "LargeAvatar",
                                  "LargeFakeAvatar"
                                ]
                              },
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 5
                              }
                            ]
                          },
                          {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Has Body-Types",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "types": "Thin",
                                "invertCondition": true
                              },
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "compareType": "<",
                                "value2": 5
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": ">=",
                            "value2": 5
                          }
                        ]
                      }
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
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || Variables[1] (MDF_PropertyValue) || MUL || RETURN",
                    "displayLines": "(MDF_Layer * MDF_PropertyValue)",
                    "constants": [],
                    "variables": [
                      "MDF_Layer",
                      "MDF_PropertyValue"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": null,
                    "compareType": "=",
                    "value2": 0,
                    "valueType": "Layer"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1583873554\">Modifier_Monster_W5_Pam_Endurance</a>"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1583873554\">Modifier_Monster_W5_Pam_Endurance</a>"
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "UltraSkillTimelineStart",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 99,
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "UltraSkillTimelineStart",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "scope": "ContextModifier",
                          "variableName": "UltraSkillTimelineStart",
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Changes",
              "variableName": "UltraSkillTimelineEnd",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 99,
                  "includeMaxValueInRange": true,
                  "whenValueChanges": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "UltraSkillTimelineEnd",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "scope": "ContextModifier",
                          "variableName": "UltraSkillTimelineEnd",
                          "value": 0
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "MDF_IsAngry"
          ],
          "description": "Each stack decreases DMG taken by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. When all stacks are removed, exits the \"Steam Wash\" state and takes massive DMG.",
          "type": "Buff",
          "effectName": "DMG Received Reduction",
          "statusName": "Lasting Antibac",
          "addStacksPerTrigger": -1
        }
      ],
      "references": []
    },
    "5014020_BE_BattleEvents": {
      "fileName": "5014020_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "ID": 20032,
          "team": "Neutral Team",
          "eventType": "Summon",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": 110
            }
          ],
          "hardLevelEvent": true,
          "actionDescription": "Ally's \"Alloy Pommy.\"\\nEach time allies gain 1 Punchline, accumulates 1 point of Charge. When the Charge reaches <unbreak>#1[i]</unbreak> points, immediately gains 1 extra turn and enhances Basic ATK.\\nBasic ATK deals Quantum DMG to one designated enemy target and gains Punchlines.\\nEnhanced Basic ATK consumes <unbreak>#1[i]</unbreak> points of Charge, dealing Quantum DMG to one designated enemy target and True DMG equal to a certain percentage of the target's Max HP, and removes 1 stack of the \"Lasting Antibac\" effect from the target."
        },
        {
          "name": "Battle Event Construction",
          "ID": 20033,
          "team": "Enemy Team",
          "eventType": "Assist",
          "abilityList": [
            "BattleEventAbility_W5_Pam_Summon"
          ],
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": 120
            }
          ],
          "hardLevelEvent": true,
          "actionDescription": "When taking action, summons an \"Alloy Pommy\" for both ally and enemy teams.\\nAllies can only have 1 \"Alloy Pommy,\" and it cannot be targeted by abilities from either team."
        }
      ],
      "references": []
    }
  }
}