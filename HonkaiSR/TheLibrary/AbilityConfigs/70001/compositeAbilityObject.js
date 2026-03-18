const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 70001,
  "trimCharacterName": 70001,
  "abilityList": [
    "70001_BattleEventAbility_Elation_Passive",
    "70001_BattleEventAbility_Elation_Ability43_RestartElationTime",
    "70001_BattleEventAbility_Elation_Ability42_EndElationTime",
    "70001_BattleEventAbility_Elation_Ability41_Part2",
    "70001_BattleEventAbility_Elation_Ability41_Part1",
    "70001_BattleEventAbility_Elation_Ability04_02",
    "70001_BattleEventAbility_Elation_Ability04_01",
    "70001_BattleEventAbility_Elation_Ability03_Entry",
    "70001_StageAbility_Elation",
    "70001_Modifiers",
    "70001_BE_BattleEvents"
  ],
  "abilityObject": {
    "70001_BattleEventAbility_Elation_Passive": {
      "fileName": "70001_BattleEventAbility_Elation_Passive",
      "childAbilityList": [
        "70001_Activity_ElationBattle_BEStart_ForShowOnly",
        "70001_BattleEventAbility_Elation_Passive"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"112407337\">MBattleEvent_Elation_Passive</a>"
        }
      ],
      "references": []
    },
    "70001_BattleEventAbility_Elation_Ability43_RestartElationTime": {
      "fileName": "70001_BattleEventAbility_Elation_Ability43_RestartElationTime",
      "childAbilityList": [
        "70001_BattleEventAbility_Elation_Ability43_RestartElationTime"
      ],
      "skillTrigger": "Skill43",
      "abilityType": "Elation",
      "toughnessList": null,
      "parse": [
        "Unknown EventType (Not always an error)",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "70001_BattleEventAbility_Elation_Ability42_EndElationTime": {
      "fileName": "70001_BattleEventAbility_Elation_Ability42_EndElationTime",
      "childAbilityList": [
        "70001_BattleEventAbility_Elation_Ability42_EndElationTime"
      ],
      "skillTrigger": "Skill42",
      "abilityType": "Elation",
      "toughnessList": null,
      "parse": [
        {
          "name": "Lock Battle Actions"
        },
        "Unknown EventType2 (Not always an error)[1 false]",
        "Unknown EventType3 (Not always an error)",
        "Unknown EventType3 (Not always an error)[1 false]",
        "Unknown EventType1 (Not always an error)[1 false][2 true]",
        {
          "name": "Lock Battle Actions",
          "isLock": false
        }
      ],
      "references": []
    },
    "70001_BattleEventAbility_Elation_Ability41_Part2": {
      "fileName": "70001_BattleEventAbility_Elation_Ability41_Part2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Looped Event",
          "maxLoops": 10,
          "Event": [
            {
              "name": "Random Event",
              "odds": [
                {
                  "operator": "Variables[0] ({[Skill41[2]]}) || RETURN",
                  "displayLines": "{[Skill41[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill41[2]]}"
                  ]
                },
                {
                  "operator": "Variables[0] ({[Skill41[3]]}) || RETURN",
                  "displayLines": "{[Skill41[3]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill41[3]]}"
                  ]
                }
              ],
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "paramSequence": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "DamageFlat": {
                          "displayLines": 1
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Elation DMG"
                      }
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "operator": "Variables[0] ({[Skill41[4]]}) || RETURN",
                        "displayLines": "{[Skill41[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill41[4]]}"
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "paramSequence": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "DamageElation": {
                          "operator": "Variables[0] ({[Skill41[1]]}) || RETURN",
                          "displayLines": "{[Skill41[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill41[1]]}"
                          ]
                        },
                        "dmgFormula": "Elation Scaling",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Elation DMG"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Aha Instant: Aha Battle Event}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"211849600\">MLevel_ElationBE_ActionStateFalse_02</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Aha Instant: Aha Battle Event}}"
            },
            "value1": "ElationTime_IsNoConsume",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Aha Instant: Aha Battle Event}}"
              },
              "variableName": "ElationTime_IsNoConsume",
              "value": 0
            }
          ],
          "failed": [
            {
              "name": "Adjust Team Punchline Value",
              "value": 0,
              "adjustment": "Set"
            }
          ]
        },
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Elation: Player Team with Unselectables}} + {{Elation: Currency Wars Full OffFieldList}} - {{Elation: OffField Sparxie}}"
          },
          "variableName": "Elation_Character_Num",
          "livingTargets": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Elation_Character_Num",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "operator": "Variables[0] (Elation_Character_Num) || Constants[0] (1) || MUL || RETURN",
                "displayLines": "(Elation_Character_Num * 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Elation_Character_Num"
                ]
              },
              "adjustment": "Add"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "70001_BattleEventAbility_Elation_Ability41_Part1": {
      "fileName": "70001_BattleEventAbility_Elation_Ability41_Part1",
      "childAbilityList": [
        "70001_BattleEventAbility_Elation_Ability41_Part1",
        "70001_BattleEventAbility_Elation_Ability41_Camera",
        "70001_BattleEventAbility_Elation_Ability41_Part2"
      ],
      "skillTrigger": "Skill41",
      "abilityType": "Elation",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "BattleEventAbility_Elation_Ability41_Part2",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "70001_BattleEventAbility_Elation_Ability04_02": {
      "fileName": "70001_BattleEventAbility_Elation_Ability04_02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Unbind Unique Name",
          "uniqueName": "Target_Elation"
        },
        {
          "name": "Assign Unique Name",
          "uniqueName": "Target_Elation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Define Variable with Elation Skill Count",
          "variableName": "ElationTime_SkillCount"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "ElationTime_SkillCount",
            "compareType": ">",
            "value2": 4
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "70001_BattleEventAbility_Elation_Ability04_01": {
      "fileName": "70001_BattleEventAbility_Elation_Ability04_01",
      "childAbilityList": [
        "70001_BattleEventAbility_Elation_Ability04_01",
        "70001_BattleEventAbility_Elation_Ability04_02",
        "70001_BattleEventAbility_Elation_Ability04_02_Camera"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Elation",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Elation: Player Team with Unselectables}}"
          },
          "toRemove": [
            "STAT_CTRL"
          ]
        },
        {
          "name": "Inject Extra-Turn",
          "actionTag": "ElationTime_CustomTag",
          "forcedPunchline": {
            "operator": "Variables[0] (ElationTime_OverrideElationPoint) || RETURN",
            "displayLines": "ElationTime_OverrideElationPoint",
            "constants": [],
            "variables": [
              "ElationTime_OverrideElationPoint"
            ]
          },
          "sourceOverride": "Add Target by Current Extra-Turn Source",
          "target": {
            "name": "Target Name",
            "target": "{{Elation: Elation Entities}}"
          },
          "afterInjection": [],
          "abortFlags": [
            "STAT_CTRL"
          ],
          "priorityTag": "DuringElationTime_UseElationSkill",
          "priorityTagPending": "ElationTime"
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "ElationTime_OverrideElationPointForEcho",
          "value": {
            "operator": "Variables[0] (ElationTime_OverrideElationPoint) || RETURN",
            "displayLines": "ElationTime_OverrideElationPoint",
            "constants": [],
            "variables": [
              "ElationTime_OverrideElationPoint"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "ElationTime_OverrideElationPoint",
          "value": -1
        },
        {
          "name": "Define Custom String with Value",
          "value": {},
          "scope": "ContextAbility",
          "variableName": "ElationTime_CustomTag"
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "variableName": "ElationTime_IsNoConsume",
          "value": {
            "operator": "Variables[0] (ElationTime_IsNoConsume) || RETURN",
            "displayLines": "ElationTime_IsNoConsume",
            "constants": [],
            "variables": [
              "ElationTime_IsNoConsume"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "ElationTime_IsNoConsumeTemp2",
          "value": 0
        },
        {
          "name": "Lock Battle Actions"
        },
        {
          "name": "Lock Battle Actions",
          "isLock": false
        },
        "Unknown EventType (Not always an error)",
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "BattleEventAbility_Elation_Ability04_02",
          "isTrigger": true
        },
        "Unknown EventType2 (Not always an error)",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              "Unknown CONDITON2 [inverse: true]",
              {
                "name": "Is Entity a Battle Event/Summon",
                "target": {
                  "name": "Target Name",
                  "target": "{{Aha Instant: All Targets}}.[[index0]]"
                }
              }
            ]
          }
        }
      ],
      "references": [],
      "dynamicStringsArray": [
        {
          "name": "ElationTime_CustomTag",
          "value": "-1"
        }
      ]
    },
    "70001_BattleEventAbility_Elation_Ability03_Entry": {
      "fileName": "70001_BattleEventAbility_Elation_Ability03_Entry",
      "childAbilityList": [
        "70001_BattleEventAbility_Elation_Ability03_Entry"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Elation",
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "ElationTime_CanStartElationTime",
          "value": 0
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Elation: Currency Wars Full OffFieldList}} + {{Elation: All Battle Events}} - {{Elation: OffField Sparxie}}"
          },
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "ElationTime_CanStartElationTime",
              "value": 1
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Elation: Player Team with Unselectables with Elation Skills}}"
          },
          "conditions": {
            "name": "Living State",
            "state": "Mask_AliveOnly",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_CTRL",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "DisableAction",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "ElationTime_CanStartElationTime",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "ElationTime_CanStartElationTimeTemp",
                  "value": 1
                },
                {
                  "name": "Reconstruct Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      "Unknown EventType3 (Not always an error)[inverse: true]"
                    ]
                  },
                  "flagFilter": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "execute": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ElationTime_CanStartElationTimeTemp",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ElationTime_CanStartElationTimeTemp",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "ElationTime_CanStartElationTime",
                      "value": 1
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
            "value1": "ElationTime_CanStartElationTime",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Inject Extra-Turn",
              "actionTag": null,
              "skillIndex": 1,
              "valuePerStack": {
                "ElationTime_OverrideElationPoint": {
                  "operator": "Variables[0] (ElationTime_OverrideElationPointTemp) || RETURN",
                  "displayLines": "ElationTime_OverrideElationPointTemp",
                  "constants": [],
                  "variables": [
                    "ElationTime_OverrideElationPointTemp"
                  ]
                },
                "ElationTime_IsNoConsumeTemp2": {
                  "operator": "Variables[0] (ElationTime_IsNoConsumeTemp) || RETURN",
                  "displayLines": "ElationTime_IsNoConsumeTemp",
                  "constants": [],
                  "variables": [
                    "ElationTime_IsNoConsumeTemp"
                  ]
                }
              },
              "sourceOverride": "Add Target by Current Extra-Turn Source",
              "dynamicStringsArray": [
                {
                  "name": "ElationTime_CustomTag",
                  "value": {
                    "Custom": true,
                    "Key": "ElationTime_CustomTagTemp"
                  }
                }
              ],
              "afterInjection": [],
              "priorityTag": "StartElationTime",
              "priorityTagPending": "Highest"
            }
          ],
          "failed": [
            {
              "name": "Inject Extra-Turn",
              "actionTag": "ElationTime_CustomTagTemp",
              "forcedPunchline": {
                "operator": "Variables[0] (ElationTime_OverrideElationPointTemp) || RETURN",
                "displayLines": "ElationTime_OverrideElationPointTemp",
                "constants": [],
                "variables": [
                  "ElationTime_OverrideElationPointTemp"
                ]
              },
              "skillIndex": 2,
              "afterInjection": []
            },
            {
              "name": "Define Custom Variable",
              "scope": "ContextCaster",
              "variableName": "ElationTime_IsNoConsume",
              "value": {
                "operator": "Variables[0] (ElationTime_IsNoConsumeTemp) || RETURN",
                "displayLines": "ElationTime_IsNoConsumeTemp",
                "constants": [],
                "variables": [
                  "ElationTime_IsNoConsumeTemp"
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "ElationTime_IsNoConsumeTemp",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "variableName": "ElationTime_OverrideElationPointTemp",
          "value": -1
        },
        {
          "name": "Define Custom String with Value",
          "value": {},
          "scope": "ContextAbility",
          "variableName": "ElationTime_CustomTagTemp"
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "dynamicStringsArray": [
        {
          "name": "ElationTime_CustomTagTemp",
          "value": "-1"
        }
      ]
    },
    "70001_StageAbility_Elation": {
      "fileName": "70001_StageAbility_Elation",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Preload Battle Event(s)",
          "eventID": [
            70001
          ]
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"994071549\">MLevel_Elation_Standard</a>"
        }
      ],
      "references": []
    },
    "70001_Modifiers": {
      "fileName": "70001_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__291062653\">MBattleEvent_Elation_InsertActionCheck</a>",
          "stackType": "Multiple",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "dynamicStringsArray": [
            {
              "name": "MDF_CustomTag",
              "value": "-1"
            }
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1447027795\">Elation_InsertRetarget</a>",
                  "variables": {
                    "TP_OverrideElationPoint": {
                      "operator": "Variables[0] (MDF_OverrideElationPoint) || RETURN",
                      "displayLines": "MDF_OverrideElationPoint",
                      "constants": [],
                      "variables": [
                        "MDF_OverrideElationPoint"
                      ]
                    },
                    "TP_ElationTimeIsNoConsume": {
                      "operator": "Variables[0] (MDF_ElationTimeIsNoConsume) || RETURN",
                      "displayLines": "MDF_ElationTimeIsNoConsume",
                      "constants": [],
                      "variables": [
                        "MDF_ElationTimeIsNoConsume"
                      ]
                    },
                    "TP_OnCreating": 1
                  },
                  "dynamicStringsArray": [
                    {
                      "name": "TP_CustomTag",
                      "value": {
                        "Custom": true,
                        "Key": "MDF_CustomTag"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1447027795\">Elation_InsertRetarget</a>",
                  "variables": {
                    "TP_OverrideElationPoint": {
                      "operator": "Variables[0] (MDF_OverrideElationPoint) || RETURN",
                      "displayLines": "MDF_OverrideElationPoint",
                      "constants": [],
                      "variables": [
                        "MDF_OverrideElationPoint"
                      ]
                    },
                    "TP_ElationTimeIsNoConsume": {
                      "operator": "Variables[0] (MDF_ElationTimeIsNoConsume) || RETURN",
                      "displayLines": "MDF_ElationTimeIsNoConsume",
                      "constants": [],
                      "variables": [
                        "MDF_ElationTimeIsNoConsume"
                      ]
                    }
                  },
                  "dynamicStringsArray": [
                    {
                      "name": "TP_CustomTag",
                      "value": {
                        "Custom": true,
                        "Key": "MDF_CustomTag"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1447027795\">Elation_InsertRetarget</a>",
                  "variables": {
                    "TP_OverrideElationPoint": {
                      "operator": "Variables[0] (MDF_OverrideElationPoint) || RETURN",
                      "displayLines": "MDF_OverrideElationPoint",
                      "constants": [],
                      "variables": [
                        "MDF_OverrideElationPoint"
                      ]
                    },
                    "TP_ElationTimeIsNoConsume": {
                      "operator": "Variables[0] (MDF_ElationTimeIsNoConsume) || RETURN",
                      "displayLines": "MDF_ElationTimeIsNoConsume",
                      "constants": [],
                      "variables": [
                        "MDF_ElationTimeIsNoConsume"
                      ]
                    }
                  },
                  "dynamicStringsArray": [
                    {
                      "name": "TP_CustomTag",
                      "value": {
                        "Custom": true,
                        "Key": "MDF_CustomTag"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1447027795\">Elation_InsertRetarget</a>",
                  "variables": {
                    "TP_OverrideElationPoint": {
                      "operator": "Variables[0] (MDF_OverrideElationPoint) || RETURN",
                      "displayLines": "MDF_OverrideElationPoint",
                      "constants": [],
                      "variables": [
                        "MDF_OverrideElationPoint"
                      ]
                    },
                    "TP_ElationTimeIsNoConsume": {
                      "operator": "Variables[0] (MDF_ElationTimeIsNoConsume) || RETURN",
                      "displayLines": "MDF_ElationTimeIsNoConsume",
                      "constants": [],
                      "variables": [
                        "MDF_ElationTimeIsNoConsume"
                      ]
                    }
                  },
                  "dynamicStringsArray": [
                    {
                      "name": "TP_CustomTag",
                      "value": {
                        "Custom": true,
                        "Key": "MDF_CustomTag"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOrRevivable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1447027795\">Elation_InsertRetarget</a>",
                      "variables": {
                        "TP_OverrideElationPoint": {
                          "operator": "Variables[0] (MDF_OverrideElationPoint) || RETURN",
                          "displayLines": "MDF_OverrideElationPoint",
                          "constants": [],
                          "variables": [
                            "MDF_OverrideElationPoint"
                          ]
                        },
                        "TP_ElationTimeIsNoConsume": {
                          "operator": "Variables[0] (MDF_ElationTimeIsNoConsume) || RETURN",
                          "displayLines": "MDF_ElationTimeIsNoConsume",
                          "constants": [],
                          "variables": [
                            "MDF_ElationTimeIsNoConsume"
                          ]
                        }
                      },
                      "dynamicStringsArray": [
                        {
                          "name": "TP_CustomTag",
                          "value": {
                            "Custom": true,
                            "Key": "MDF_CustomTag"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__1447027795\">Elation_InsertRetarget</a>",
              "dynamicStringsArray": [
                {
                  "name": "TP_CustomTag",
                  "value": "-1"
                }
              ],
              "parse": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "living": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "TP_OnCreating",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "ContextTaskTemplate"
                      },
                      "passed": [
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": null,
                          "valuePerStack": {
                            "ElationTime_OverrideElationPointTemp": {
                              "operator": "Variables[0] (MDF_OverrideElationPoint) || RETURN",
                              "displayLines": "MDF_OverrideElationPoint",
                              "constants": [],
                              "variables": [
                                "MDF_OverrideElationPoint"
                              ]
                            },
                            "ElationTime_IsNoConsumeTemp": {
                              "operator": "Variables[0] (MDF_ElationTimeIsNoConsume) || RETURN",
                              "displayLines": "MDF_ElationTimeIsNoConsume",
                              "constants": [],
                              "variables": [
                                "MDF_ElationTimeIsNoConsume"
                              ]
                            }
                          },
                          "target": {
                            "name": "Target Name",
                            "target": "{{Aha Instant: Aha Battle Event}}"
                          },
                          "dynamicStringsArray": [
                            {
                              "name": "ElationTime_CustomTagTemp",
                              "value": {
                                "Custom": true,
                                "Key": "MDF_CustomTag"
                              }
                            }
                          ],
                          "afterInjection": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Aha Instant: Aha Battle Event}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"291062653\">MBattleEvent_Elation_InsertActionCheck</a>",
                              "valuePerStack": {
                                "MDF_OverrideElationPoint": {
                                  "operator": "Variables[0] (TP_OverrideElationPoint) || RETURN",
                                  "displayLines": "TP_OverrideElationPoint",
                                  "constants": [],
                                  "variables": [
                                    "TP_OverrideElationPoint"
                                  ]
                                },
                                "MDF_ElationTimeIsNoConsume": {
                                  "operator": "Variables[0] (TP_ElationTimeIsNoConsume) || RETURN",
                                  "displayLines": "TP_ElationTimeIsNoConsume",
                                  "constants": [],
                                  "variables": [
                                    "TP_ElationTimeIsNoConsume"
                                  ]
                                }
                              },
                              "dynamicStringsArray": [
                                {
                                  "name": "MDF_CustomTag",
                                  "value": {
                                    "Custom": true,
                                    "Key": "TP_CustomTag"
                                  }
                                }
                              ]
                            }
                          ],
                          "copyAbortFlags": true
                        }
                      ],
                      "failed": [
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": null,
                          "valuePerStack": {
                            "ElationTime_OverrideElationPointTemp": {
                              "operator": "Variables[0] (MDF_OverrideElationPoint) || RETURN",
                              "displayLines": "MDF_OverrideElationPoint",
                              "constants": [],
                              "variables": [
                                "MDF_OverrideElationPoint"
                              ]
                            },
                            "ElationTime_IsNoConsumeTemp": {
                              "operator": "Variables[0] (MDF_ElationTimeIsNoConsume) || RETURN",
                              "displayLines": "MDF_ElationTimeIsNoConsume",
                              "constants": [],
                              "variables": [
                                "MDF_ElationTimeIsNoConsume"
                              ]
                            }
                          },
                          "target": {
                            "name": "Target Name",
                            "target": "{{Aha Instant: Aha Battle Event}}"
                          },
                          "dynamicStringsArray": [
                            {
                              "name": "ElationTime_CustomTagTemp",
                              "value": {
                                "Custom": true,
                                "Key": "MDF_CustomTag"
                              }
                            }
                          ],
                          "afterInjection": [],
                          "copyAbortFlags": true
                        }
                      ]
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1644535867\">MLevel_ElationBE_ElationEchoPointBonus_OnEnterBattle</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
          "stackType": "Multiple",
          "modifierFlags": [
            "STAT_ElationEchoPoint"
          ],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ElationEchoPoint) || RETURN",
                    "displayLines": "ElationEchoPoint",
                    "constants": [],
                    "variables": [
                      "ElationEchoPoint"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Missing Description",
          "type": "Buff",
          "duration": 2
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1491295670\">MBattleEvent_Elation_ElationEchoPointBonus</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
          "stackType": "Multiple",
          "modifierFlags": [
            "STAT_ElationEchoPoint"
          ],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (ElationEchoPoint) || RETURN",
                    "displayLines": "ElationEchoPoint",
                    "constants": [],
                    "variables": [
                      "ElationEchoPoint"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Missing Description",
          "type": "Buff",
          "duration": 2
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-636762237\">MBattleEvent_Elation_BaseSpeedNeedRefresh</a>",
          "stackType": "Replace"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2005969165\">MBattleEvent_Elation_BaseSpeedCalOnTeammate</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Character Path Change [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      },
                      {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Elation"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "whenEnteringRange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-636762237\">MBattleEvent_Elation_BaseSpeedNeedRefresh</a>"
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-636762237\">MBattleEvent_Elation_BaseSpeedNeedRefresh</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1613366517\">MBattleEvent_GridFight_Elation_BaseSpeed</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}} + {{Currency Wars OffFieldList}} - {{Elation: OffField Sparxie}}"
                  },
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Elation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2005969165\">MBattleEvent_Elation_BaseSpeedCalOnTeammate</a>"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Aha Instant: Aha Battle Event}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-636762237\">MBattleEvent_Elation_BaseSpeedNeedRefresh</a>"
                }
              ]
            },
            {
              "eventTrigger": "Character Path Change [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Elation"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2005969165\">MBattleEvent_Elation_BaseSpeedCalOnTeammate</a>"
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
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-636762237\">MBattleEvent_Elation_BaseSpeedNeedRefresh</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BattleEvent_Elation_00_BaseSpeed",
                      "value": {
                        "operator": "Variables[0] (AHA_OBJECT_UNUSED__194) || RETURN",
                        "displayLines": "AHA_OBJECT_UNUSED__194",
                        "constants": [],
                        "variables": [
                          "AHA_OBJECT_UNUSED__194"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SpeedRank",
                      "value": 1
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)V2}} + {{Currency Wars OffFieldList}} - {{Elation: OffField Sparxie}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Target is Pathstrider",
                              "path": [
                                "Elation"
                              ],
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            }
                          },
                          {
                            "name": "Sort by Stat",
                            "stat": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
                            "living": true,
                            "sortByHighest": true
                          }
                        ]
                      },
                      "conditions": {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Elation"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "MDF_SpeedCalTemp1",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                        },
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (MDF_SpeedRank) || RETURN",
                            "displayLines": "MDF_SpeedRank",
                            "constants": [],
                            "variables": [
                              "MDF_SpeedRank"
                            ]
                          },
                          "compareType": ">=",
                          "caseEvents": [
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 5,
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_SpeedCalTemp2",
                                  "value": {
                                    "operator": "Variables[0] (AHA_OBJECT_UNUSED__195) || RETURN",
                                    "displayLines": "AHA_OBJECT_UNUSED__195",
                                    "constants": [],
                                    "variables": [
                                      "AHA_OBJECT_UNUSED__195"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 4,
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_SpeedCalTemp2",
                                  "value": {
                                    "operator": "Variables[0] (AHA_OBJECT_UNUSED__196) || RETURN",
                                    "displayLines": "AHA_OBJECT_UNUSED__196",
                                    "constants": [],
                                    "variables": [
                                      "AHA_OBJECT_UNUSED__196"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3,
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_SpeedCalTemp2",
                                  "value": {
                                    "operator": "Variables[0] (AHA_OBJECT_UNUSED__197) || RETURN",
                                    "displayLines": "AHA_OBJECT_UNUSED__197",
                                    "constants": [],
                                    "variables": [
                                      "AHA_OBJECT_UNUSED__197"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2,
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_SpeedCalTemp2",
                                  "value": {
                                    "operator": "Variables[0] (AHA_OBJECT_UNUSED__198) || RETURN",
                                    "displayLines": "AHA_OBJECT_UNUSED__198",
                                    "constants": [],
                                    "variables": [
                                      "AHA_OBJECT_UNUSED__198"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 1,
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_SpeedCalTemp2",
                                  "value": {
                                    "operator": "Variables[0] (AHA_OBJECT_UNUSED__199) || RETURN",
                                    "displayLines": "AHA_OBJECT_UNUSED__199",
                                    "constants": [],
                                    "variables": [
                                      "AHA_OBJECT_UNUSED__199"
                                    ]
                                  }
                                }
                              ]
                            }
                          ],
                          "defaultEvents": []
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_SpeedRank",
                          "value": {
                            "operator": "Variables[0] (MDF_SpeedRank) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_SpeedRank + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_SpeedRank"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "BattleEvent_Elation_00_BaseSpeed",
                          "value": {
                            "operator": "Variables[0] (BattleEvent_Elation_00_BaseSpeed) || Variables[1] (MDF_SpeedCalTemp1) || Variables[2] (MDF_SpeedCalTemp2) || MUL || ADD || RETURN",
                            "displayLines": "(BattleEvent_Elation_00_BaseSpeed + (MDF_SpeedCalTemp1 * MDF_SpeedCalTemp2))",
                            "constants": [],
                            "variables": [
                              "BattleEvent_Elation_00_BaseSpeed",
                              "MDF_SpeedCalTemp1",
                              "MDF_SpeedCalTemp2"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (BattleEvent_Elation_00_BaseSpeed) || RETURN",
                        "displayLines": "BattleEvent_Elation_00_BaseSpeed",
                        "constants": [],
                        "variables": [
                          "BattleEvent_Elation_00_BaseSpeed"
                        ]
                      },
                      "isRefresh": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1103918396\">MBattleEvent_Elation_BaseSpeed</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Elation"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2005969165\">MBattleEvent_Elation_BaseSpeedCalOnTeammate</a>"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Aha Instant: Aha Battle Event}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-636762237\">MBattleEvent_Elation_BaseSpeedNeedRefresh</a>"
                }
              ]
            },
            {
              "eventTrigger": "Character Path Change [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Elation"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2005969165\">MBattleEvent_Elation_BaseSpeedCalOnTeammate</a>"
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
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-636762237\">MBattleEvent_Elation_BaseSpeedNeedRefresh</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BattleEvent_Elation_00_BaseSpeed",
                      "value": {
                        "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                        "displayLines": "{[SkillP01[0]]}",
                        "constants": [],
                        "variables": [
                          "{[SkillP01[0]]}"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CalCount",
                      "value": 1
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)V2}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Target is Pathstrider",
                              "path": [
                                "Elation"
                              ],
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            }
                          },
                          {
                            "name": "Sort by Stat",
                            "stat": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
                            "living": true,
                            "sortByHighest": true
                          }
                        ]
                      },
                      "conditions": {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Elation"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "MDF_SpeedCalTemp1",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                        },
                        {
                          "name": "SWITCH",
                          "switchValue": {
                            "operator": "Variables[0] (MDF_CalCount) || RETURN",
                            "displayLines": "MDF_CalCount",
                            "constants": [],
                            "variables": [
                              "MDF_CalCount"
                            ]
                          },
                          "compareType": ">=",
                          "caseEvents": [
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 5,
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_SpeedCalTemp2",
                                  "value": {
                                    "operator": "Variables[0] ({[SkillP01[5]]}) || RETURN",
                                    "displayLines": "{[SkillP01[5]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[SkillP01[5]]}"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 4,
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_SpeedCalTemp2",
                                  "value": {
                                    "operator": "Variables[0] ({[SkillP01[4]]}) || RETURN",
                                    "displayLines": "{[SkillP01[4]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[SkillP01[4]]}"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 3,
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_SpeedCalTemp2",
                                  "value": {
                                    "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                                    "displayLines": "{[SkillP01[3]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[SkillP01[3]]}"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 2,
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_SpeedCalTemp2",
                                  "value": {
                                    "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
                                    "displayLines": "{[SkillP01[2]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[SkillP01[2]]}"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "SWITCH CONDITON",
                              "caseValueIs": 1,
                              "execute": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "MDF_SpeedCalTemp2",
                                  "value": {
                                    "operator": "Variables[0] ({[SkillP01[1]]}) || RETURN",
                                    "displayLines": "{[SkillP01[1]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[SkillP01[1]]}"
                                    ]
                                  }
                                }
                              ]
                            }
                          ],
                          "defaultEvents": []
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_CalCount",
                          "value": {
                            "operator": "Variables[0] (MDF_CalCount) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_CalCount + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_CalCount"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "BattleEvent_Elation_00_BaseSpeed",
                          "value": {
                            "operator": "Variables[0] (BattleEvent_Elation_00_BaseSpeed) || Variables[1] (MDF_SpeedCalTemp1) || Variables[2] (MDF_SpeedCalTemp2) || MUL || ADD || RETURN",
                            "displayLines": "(BattleEvent_Elation_00_BaseSpeed + (MDF_SpeedCalTemp1 * MDF_SpeedCalTemp2))",
                            "constants": [],
                            "variables": [
                              "BattleEvent_Elation_00_BaseSpeed",
                              "MDF_SpeedCalTemp1",
                              "MDF_SpeedCalTemp2"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (BattleEvent_Elation_00_BaseSpeed) || RETURN",
                        "displayLines": "BattleEvent_Elation_00_BaseSpeed",
                        "constants": [],
                        "variables": [
                          "BattleEvent_Elation_00_BaseSpeed"
                        ]
                      },
                      "isRefresh": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-468079573\">MBattleEvent_Elation_ListenElationTimeEnd</a>",
          "execute": [
            {
              "eventTrigger": "Aha Instant: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Aha Instant: Aha Battle Event}}"
                    },
                    "value1": "ElationTime_IsNoConsume",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "variableName": "ElationTime_IsNoConsume",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Elation: Player Team with Unselectables}} + {{Elation: Currency Wars Full OffFieldList}} - {{Elation: OffField Sparxie}}"
                  },
                  "variableName": "MDF_Elation_Character_Num",
                  "livingTargets": true
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Elation_Character_Num",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Adjust Team Punchline Value",
                      "value": {
                        "operator": "Variables[0] (MDF_Elation_Character_Num) || Constants[0] (1) || MUL || RETURN",
                        "displayLines": "(MDF_Elation_Character_Num * 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_Elation_Character_Num"
                        ]
                      },
                      "adjustment": "Add"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__112407337\">MBattleEvent_Elation_Passive</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh",
            "MuteResetActionDelay",
            "ImmuneDebuff"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": {
                    "operator": "Constants[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [
                      1
                    ],
                    "variables": []
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Aha Instant: Aha Battle Event}}"
                  },
                  "lockHolder": "<a class=\"gModGreen\" id=\"334413599\">Elation_BE_LockHP</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Stage Type",
                    "stageType": "GridFightActivity"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1613366517\">MBattleEvent_GridFight_Elation_BaseSpeed</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1103918396\">MBattleEvent_Elation_BaseSpeed</a>"
                    }
                  ]
                },
                {
                  "name": "Declare Custom Variable",
                  "variableName": "Elation_CurrentPoint"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Aha Instant: Aha Battle Event}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-468079573\">MBattleEvent_Elation_ListenElationTimeEnd</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Elation_CurrentPoint",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-881220179\">MLevel_ElationBE_ActionStateFalse</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-881220179\">MLevel_ElationBE_ActionStateFalse</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"211849600\">MLevel_ElationBE_ActionStateFalse_02</a>"
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": null,
                  "afterInjection": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"291062653\">MBattleEvent_Elation_InsertActionCheck</a>",
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"211849600\">MLevel_ElationBE_ActionStateFalse_02</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Elation: Elation Entities}}"
                  },
                  "variableName": "Elation_Character_Num",
                  "livingTargets": true
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
                        "name": "Skill Type",
                        "skillType": "Elation"
                      },
                      {
                        "name": "In Aha-Instant"
                      }
                    ]
                  },
                  "passed": [
                    "Unknown EventType2 (Not always an error)[2 true]"
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
                    "name": "Aha Instant is Paused"
                  },
                  "passed": [
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": null,
                      "skillIndex": 4,
                      "afterInjection": [],
                      "priorityTag": "RestartElationTime",
                      "priorityTagPending": "Highest"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Aha Instant: Start",
              "execute": [
                "Unknown EventType1 (Not always an error)",
                "Override Priority Tags (true) [OBJECT WIP]"
              ],
              "priorityLevel": 100
            },
            {
              "eventTrigger": "Aha Instant: End",
              "execute": [
                "Override Priority Tags (false) [OBJECT WIP]",
                "Unknown EventType2 (Not always an error)[1 false]",
                "Unknown EventType1 (Not always an error)[1 false][2 true]",
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Aha Instant: Aha Battle Event}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"211849600\">MLevel_ElationBE_ActionStateFalse_02</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Aha Instant: Aha Battle Event}}"
                    },
                    "value1": "ElationTime_IsNoConsume",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Player Team with Unselectables and OffField}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1491295670\">MBattleEvent_Elation_ElationEchoPointBonus</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
                      "valuePerStack": {
                        "ElationEchoPoint": {
                          "operator": "Variables[0] (AHA_OBJECT_UNUSED__200) || RETURN",
                          "displayLines": "AHA_OBJECT_UNUSED__200",
                          "constants": [],
                          "variables": [
                            "AHA_OBJECT_UNUSED__200"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "variableName": "Elation_CurrentPoint"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Player Team with Unselectables and OffField}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1491295670\">MBattleEvent_Elation_ElationEchoPointBonus</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
                      "valuePerStack": {
                        "ElationEchoPoint": {
                          "operator": "Variables[0] (Elation_CurrentPoint) || RETURN",
                          "displayLines": "Elation_CurrentPoint",
                          "constants": [],
                          "variables": [
                            "Elation_CurrentPoint"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Adjust Team Punchline Value",
                      "value": 0,
                      "adjustment": "Set"
                    }
                  ]
                }
              ],
              "priorityLevel": -100
            },
            {
              "eventTrigger": "Aha Instant: End (Pending)",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "BattleEventAbility_Elation_Ability42_EndElationTime",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "LevelPerformAvatarInsert",
                  "canHitNonTargets": true,
                  "silentExecute": true,
                  "customFlags": [
                    "ElationTimeEnd"
                  ],
                  "allowAbilityTriggers": true
                }
              ]
            }
          ],
          "elationValueChange": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 9999,
              "whenValueChanges": [
                {
                  "name": "Declare Custom Variable",
                  "propertyType": "BasePoint",
                  "variableName": "Elation_CurrentPoint"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Elation_CurrentPoint",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Battle Event List}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Battle Event ID",
                        "ID": 70001,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Aha Instant: Aha Battle Event}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-881220179\">MLevel_ElationBE_ActionStateFalse</a>"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-881220179\">MLevel_ElationBE_ActionStateFalse</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Elation_CurrentPoint",
                    "compareType": ">=",
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
          "for": "<a class=\"gModGreen\" id=\"mod__211849600\">MLevel_ElationBE_ActionStateFalse_02</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "<a class=\"gModGreen\" id=\"211849600\">MLevel_ElationBE_ActionStateFalse_02</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "<a class=\"gModGreen\" id=\"211849600\">MLevel_ElationBE_ActionStateFalse_02</a>",
                  "state": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-881220179\">MLevel_ElationBE_ActionStateFalse</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "<a class=\"gModGreen\" id=\"-881220179\">MLevel_ElationBE_ActionStateFalse</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Set Action-State",
                  "on": null,
                  "stateName": "<a class=\"gModGreen\" id=\"-881220179\">MLevel_ElationBE_ActionStateFalse</a>",
                  "state": false
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "ElationTime_IsNoConsume"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__994071549\">MLevel_Elation_Standard</a>",
          "execute": [
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
                      "name": "Define Custom Variable with Team Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Elation: Player Team with Unselectables}} + {{Elation: Currency Wars Full OffFieldList}} - {{Elation: OffField Sparxie}}"
                      },
                      "variableName": "MDF_Elation_Character_Num",
                      "livingTargets": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Elation: Player Team with Unselectables}} + {{Elation: Currency Wars Full OffFieldList}} - {{Elation: OffField Sparxie}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1644535867\">MLevel_ElationBE_ElationEchoPointBonus_OnEnterBattle</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
                      "valuePerStack": {
                        "ElationEchoPoint": 20
                      }
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
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_Elation_Character_Num",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Team Punchline Value",
                      "value": {
                        "operator": "Variables[0] (MDF_Elation_Character_Num) || Constants[0] (1) || MUL || RETURN",
                        "displayLines": "(MDF_Elation_Character_Num * 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_Elation_Character_Num"
                        ]
                      },
                      "adjustment": "Add"
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "elationValueChange": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 9999,
              "whenValueChanges": [
                {
                  "name": "Declare Custom Variable",
                  "propertyType": "BasePoint",
                  "variableName": "Elation_CurrentPoint"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ParameterValue",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Battle Event List}}"
                      },
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Battle Event ID",
                        "ID": 70001,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "noTargetFound": [
                        {
                          "name": "Add Battle Event",
                          "teamName": "Neutral Team",
                          "eventID": 70001,
                          "canDupe": true,
                          "variables": null
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
      "references": []
    },
    "70001_BE_BattleEvents": {
      "fileName": "70001_BE_BattleEvents",
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
          "ID": 70001,
          "team": "Neutral Team",
          "eventType": "Elation Battle-Event",
          "abilityList": null,
          "overridesArray": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 10000
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "hardLevelEvent": true
        }
      ],
      "references": []
    }
  },
  "enemyData": {
    "Skill04": {
      "skillID": 7000101,
      "trigger": "Skill04",
      "name": "Aha Instant",
      "type": "Single Target",
      "slot": "Ultimate",
      "desc": "Causes units capable of using Elation Skills to use their Elation Skill once. Then, participating characters gain the \"Certified Banger\" state for the Punchline points taken into account this time, lasting for 2 turns.",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": []
      },
      "element": "Quantum",
      "attackType": "Ultra",
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": [
        "BattleEventAbility_Elation_00_Skill04_01",
        "BattleEventAbility_Elation_00_Skill04_02",
        "BattleEventAbility_Elation_00_Skill04_02_Camera"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    },
    "SkillP01": {
      "skillID": 7000102,
      "trigger": "SkillP01",
      "name": null,
      "type": "Enhance",
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
          80,
          0.2,
          0.1,
          0.05,
          0.025,
          0.025
        ]
      },
      "skillEffect": "Passive",
      "maxLevel": 1,
      "configAbilityList": [
        "Activity_ElationBattle_BEStart_ForShowOnly",
        "BattleEventAbility_Elation_00_Passive"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    },
    "Skill41": {
      "skillID": 7000103,
      "trigger": "Skill41",
      "name": "Let There Be Laughter",
      "type": "Single Target",
      "slot": "Ultimate",
      "desc": "Randomly launches up to 10 hits against both sides, with each hit dealing Quantum Elation DMG. When allies are hit, they regenerate a minor amount of Energy each hit.",
      "energyCost": null,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          0.02,
          3,
          0.5,
          0.5,
          2
        ]
      },
      "element": "Quantum",
      "attackType": "ElationDamage",
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": [
        "BattleEventAbility_Elation_00_Skill41_Phase1",
        "BattleEventAbility_Elation_00_Skill41_Camera",
        "BattleEventAbility_Elation_00_Skill41_Phase2"
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