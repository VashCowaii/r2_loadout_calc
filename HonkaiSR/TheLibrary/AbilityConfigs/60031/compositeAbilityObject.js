const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 60031,
  "trimCharacterName": 60031,
  "abilityList": [
    "60031_MissionBattleEvent60031_AbilityP01",
    "60031_MissionBattleEvent60031_Ability03_Part022",
    "60031_MissionBattleEvent60031_Ability03_Part02",
    "60031_MissionBattleEvent60031_Ability03_Insert",
    "60031_MissionBattleEvent60031_Ability03_Part01",
    "60031_Functions"
  ],
  "abilityObject": {
    "60031_MissionBattleEvent60031_AbilityP01": {
      "fileName": "60031_MissionBattleEvent60031_AbilityP01",
      "childAbilityList": [
        "60031_MissionBattleEvent60031_AbilityP01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Automatically use Ultimate",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-454077007\">MissionBattleEvent60031_AbilityP01</a>"
        }
      ],
      "whenAdded": [],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-454077007\">MissionBattleEvent60031_AbilityP01</a>",
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
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": -1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
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
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": 1,
                      "isFixed": "(Fixed)"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeOverride": "Buff"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeOverride": "Other"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "60031_MissionBattleEvent60031_Ability03_Part022": {
      "fileName": "60031_MissionBattleEvent60031_Ability03_Part022",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Phantom}}"
            },
            "value1": "_PhaseLock",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Core}}"
          },
          "variableName": "_WorldErosion",
          "value": {
            "operator": "Variables[0] ({[Skill03[1]]}) || INVERT || Constants[0] (100) || MUL || RETURN",
            "displayLines": "(-{[Skill03[1]]} * 100)",
            "constants": [
              100
            ],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "max": 100
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-741050485\">BattleEvent_60031_Week_Damage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-741050485\">BattleEvent_60031_Week_Damage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-741050485\">BattleEvent_60031_Week_Damage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-741050485\">BattleEvent_60031_Week_Damage</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-741050485\">BattleEvent_60031_Week_Damage</a>"
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Phantom}}"
            },
            "value1": "_PhaseLock",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Core}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"187835282\">MModifier_W4_IronTombCore_Ability07_Charge</a>[<span class=\"descriptionNumberColor\">Resist and Destroy</span>]"
          }
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      }
    },
    "60031_MissionBattleEvent60031_Ability03_Part02": {
      "fileName": "60031_MissionBattleEvent60031_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Phantom}}"
            },
            "value1": "_PhaseLock",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_MissionTalkType",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Core}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-356206556\">Enemy_W4_IronTombCore_Main_P3_AllDamageReduce</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_CommonTalkType",
                    "compareType": "=",
                    "value2": 0
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_CommonTalkType",
                        "compareType": "=",
                        "value2": 1
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "_CommonTalkType",
                            "compareType": "=",
                            "value2": 2
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CommonTalkType",
                  "value": {
                    "operator": "Variables[0] (_MissionTalkType) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(_MissionTalkType + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_MissionTalkType"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_MissionTalkType",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Irontomb: Core}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"736974722\">Enemy_W4_IronTombCore_Main_P3_HardLockHp_5</a>"
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
                "ID": 4035011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Core}}"
                },
                "characterName": "Anti-Creator, Hatred Inundate"
              },
              {
                "name": "Stage ID",
                "ID": 2294,
                "compareType": "=",
                "characterName": null
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Battle Event ID",
                "ID": 60033,
                "target": {
                  "name": "Target Name",
                  "target": "{{BattleEvent60033}}"
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_MissionTalkType",
            "compareType": "=",
            "value2": 2
          }
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Core}}"
          },
          "variableName": "_WorldErosion02",
          "value": {
            "operator": "Variables[0] ({[Skill03[1]]}) || INVERT || Constants[0] (70) || MUL || RETURN",
            "displayLines": "(-{[Skill03[1]]} * 70)",
            "constants": [
              70
            ],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "min": 1,
          "max": 99
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Core}}"
          },
          "variableName": "_WorldErosion",
          "value": {
            "operator": "Variables[0] ({[Skill03[1]]}) || INVERT || Constants[0] (100) || MUL || RETURN",
            "displayLines": "(-{[Skill03[1]]} * 100)",
            "constants": [
              100
            ],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "max": 100
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 1
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1221521032\">BattleEvent_60031_Damage</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 6
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 28
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 134
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1221521032\">BattleEvent_60031_Damage</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 496
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 8128
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 108642
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1221521032\">BattleEvent_60031_Damage</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 2003432
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 4000001
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1221521032\">BattleEvent_60031_Damage</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 23570000
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_MissionTalkType",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Phantom}}"
              },
              "AttackScaling": {
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": {}
                },
                "DamageFlat": {
                  "displayLines": 33550336
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "True DMG"
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Irontomb: Phantom}}"
              },
              "AttackScaling": {
                "DamageType": {
                  "name": "Damage Type Source",
                  "sourceType": {}
                },
                "DamageFlat": {
                  "displayLines": 33550336
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "True DMG"
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1221521032\">BattleEvent_60031_Damage</a>"
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_MissionTalkType",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Irontomb: Core}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"895432020\">Enemy_W4_IronTombCore_Main_DisableAction</a>"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Monster_W4_IronTombCore_Main_EndPerform_Part01",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Irontomb: Core}}"
              },
              "priorityTag": "MonsterInsertAttackSelf",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
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
                "ID": 4035011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Irontomb: Core}}"
                },
                "characterName": "Anti-Creator, Hatred Inundate"
              },
              {
                "name": "Stage ID",
                "ID": 2294,
                "compareType": "=",
                "characterName": null
              }
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Phantom}}"
            },
            "value1": "_PhaseLock",
            "compareType": "=",
            "value2": 1
          }
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      }
    },
    "60031_MissionBattleEvent60031_Ability03_Insert": {
      "fileName": "60031_MissionBattleEvent60031_Ability03_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Phantom}}"
            },
            "value1": "_PhaseLock",
            "compareType": "=",
            "value2": 1
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Battle Event ID",
            "ID": 60033,
            "target": {
              "name": "Target Name",
              "target": "{{BattleEvent60033}}"
            }
          }
        },
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "variableName": "_MissionTalkType",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Irontomb: Core}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1163429243\">Enemy_W4_IronTombCore_Main_InfinityHPEnd</a>",
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Core}}"
          },
          "variableName": "_WorldErosion02",
          "value": {
            "operator": "Variables[0] ({[Skill03[1]]}) || INVERT || Constants[0] (70) || MUL || RETURN",
            "displayLines": "(-{[Skill03[1]]} * 70)",
            "constants": [
              70
            ],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "min": 1,
          "max": 99
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Core}}"
          },
          "variableName": "_WorldErosion",
          "value": {
            "operator": "Variables[0] ({[Skill03[1]]}) || INVERT || Constants[0] (100) || MUL || RETURN",
            "displayLines": "(-{[Skill03[1]]} * 100)",
            "constants": [
              100
            ],
            "variables": [
              "{[Skill03[1]]}"
            ]
          },
          "max": 100
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 1
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1221521032\">BattleEvent_60031_Damage</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 6
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 28
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 134
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1221521032\">BattleEvent_60031_Damage</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 496
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 8128
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 108642
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1221521032\">BattleEvent_60031_Damage</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 2003432
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 4000001
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1221521032\">BattleEvent_60031_Damage</a>"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 23570000
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Irontomb: Phantom}}"
          },
          "AttackScaling": {
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": {}
            },
            "DamageFlat": {
              "displayLines": 33550336
            },
            "dmgFormulaFinal": "Converted DMG Base",
            "Toughness": null,
            "Tags": null,
            "attackType": "True DMG"
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1221521032\">BattleEvent_60031_Damage</a>"
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Irontomb: Phantom}}"
            },
            "value1": "_PhaseLock",
            "compareType": "=",
            "value2": 1
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      }
    },
    "60031_MissionBattleEvent60031_Ability03_Part01": {
      "fileName": "60031_MissionBattleEvent60031_Ability03_Part01",
      "childAbilityList": [
        "60031_MissionBattleEvent60031_Ability03_Part01",
        "60031_MissionBattleEvent60031_Ability03_Part02",
        "60031_MissionBattleEvent60031_Ability03_Insert",
        "60031_MissionBattleEvent60031_Ability03_Part022",
        "60031_MissionBattleEvent60031_Ability03_Camera",
        "60031_MissionBattleEvent60031_Ability03_Camera02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        40,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_IsWeek",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "MissionBattleEvent60031_Ability03_Part02",
              "isTrigger": true
            },
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "MissionBattleEvent60031_Ability03_Part022",
              "isTrigger": true
            },
            "Deleted bullshit"
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      },
      "realTargetData": {
        "primaryTarget": "All Enemy Team"
      }
    },
    "60031_Functions": {
      "fileName": "60031_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 2,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1221521032\">BattleEvent_60031_Damage</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Irontomb: Core}}"
              },
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": {}
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (5) || DIV || RETURN",
                      "displayLines": "((_MaxHp * {[Skill03[0]]}) / 5)",
                      "constants": [
                        5
                      ],
                      "variables": [
                        "_MaxHp",
                        "{[Skill03[0]]}"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "True DMG"
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 1}} + {{Irontomb: Part 2}}"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": {}
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[2]]}) || MUL || Constants[0] (5) || DIV || RETURN",
                      "displayLines": "((_MaxHp * {[Skill03[2]]}) / 5)",
                      "constants": [
                        5
                      ],
                      "variables": [
                        "_MaxHp",
                        "{[Skill03[2]]}"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "True DMG"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-741050485\">BattleEvent_60031_Week_Damage</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Irontomb: Core}}"
              },
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": {}
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (5) || DIV || RETURN",
                      "displayLines": "((_MaxHp * {[Skill03[0]]}) / 5)",
                      "constants": [
                        5
                      ],
                      "variables": [
                        "_MaxHp",
                        "{[Skill03[0]]}"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "True DMG"
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 1}}"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": {}
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[2]]}) || MUL || Constants[0] (5) || DIV || RETURN",
                      "displayLines": "((_MaxHp * {[Skill03[2]]}) / 5)",
                      "constants": [
                        5
                      ],
                      "variables": [
                        "_MaxHp",
                        "{[Skill03[2]]}"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "True DMG"
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Irontomb: Part 2}}"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": {}
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHp) || Variables[1] ({[Skill03[2]]}) || MUL || Constants[0] (5) || DIV || RETURN",
                      "displayLines": "((_MaxHp * {[Skill03[2]]}) / 5)",
                      "constants": [
                        5
                      ],
                      "variables": [
                        "_MaxHp",
                        "{[Skill03[2]]}"
                      ]
                    },
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
      ],
      "references": []
    }
  },
  "enemyData": {
    "Skill03": {
      "skillID": 6003101,
      "trigger": "Skill03",
      "name": "Epics, as We've Written",
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "Ally targets using Ultimate can regenerate 1 Energy, deal massive True DMG to all enemies, and greatly reduce \"Amphorean Hatred\"!",
      "energyCost": 4,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          0.025,
          0.3,
          0.3
        ]
      },
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60031_Skill03_Phase01",
        "Avatar_MissionBattleEvent60031_Skill03_Phase02",
        "Avatar_MissionBattleEvent60031_Skill03_Insert",
        "Avatar_MissionBattleEvent60031_Skill03_Phase022",
        "Avatar_MissionBattleEvent60031_Skill03_Camera",
        "Avatar_MissionBattleEvent60031_Skill03_Camera02"
      ],
      "toughnessList": [
        0,
        120,
        0
      ],
      "hitSplits": []
    },
    "SkillP01": {
      "skillID": 6003102,
      "trigger": "SkillP01",
      "name": null,
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
        "1": []
      },
      "skillEffect": "Passive",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_MissionBattleEvent60031_SkillP01"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true
}