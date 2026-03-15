const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 5012110,
  "trimCharacterName": 5012110,
  "abilityList": [
    "5012110_Monster_W5_Limao_Ability02_Part02",
    "5012110_Monster_W5_Limao_Ability02_Part01",
    "5012110_Monster_W5_Limao_Ability01_Part02",
    "5012110_Monster_W5_Limao_Ability01_Part01",
    "5012110_Monster_W5_Limao_FrameCapture",
    "5012110_Monster_W5_Limao_PassiveAbilityInitiate",
    "5012110_Modifiers"
  ],
  "abilityObject": {
    "5012110_Monster_W5_Limao_Ability02_Part02": {
      "fileName": "5012110_Monster_W5_Limao_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Ugly Close-Up"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_MaxHp",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_RankRatio",
          "value": {
            "operator": "Variables[0] (_FinalDamage) || Variables[1] (_MaxHp) || DIV || RETURN",
            "displayLines": "(_FinalDamage / _MaxHp)",
            "constants": [],
            "variables": [
              "_FinalDamage",
              "_MaxHp"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_RankRatio",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[1]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[1]]}"
              ]
            }
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_RankRatio",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] ({[PassiveSkillInitiate[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkillInitiate[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkillInitiate[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_RankRatio",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] ({[PassiveSkillInitiate[1]]}) || RETURN",
              "displayLines": "{[PassiveSkillInitiate[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkillInitiate[1]]}"
              ]
            }
          },
          "passed": [
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "operator": "Variables[0] ({[PassiveSkillInitiate[4]]}) || RETURN",
                "displayLines": "{[PassiveSkillInitiate[4]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkillInitiate[4]]}"
                ]
              },
              "adjustment": "Add"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"873012820\">Enemy_W5_Limao_RankB</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_RankRatio",
                "compareType": "<",
                "value2": {
                  "operator": "Variables[0] ({[PassiveSkillInitiate[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkillInitiate[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkillInitiate[0]]}"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkillInitiate[3]]}) || RETURN",
                    "displayLines": "{[PassiveSkillInitiate[3]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkillInitiate[3]]}"
                    ]
                  },
                  "adjustment": "Add"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"923345677\">Enemy_W5_Limao_RankA</a>"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1340998593\">Monster_W5_Limao_BattleScore1Count</a>"
                },
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] ({[PassiveSkillInitiate[2]]}) || RETURN",
                    "displayLines": "{[PassiveSkillInitiate[2]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkillInitiate[2]]}"
                    ]
                  },
                  "adjustment": "Add"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"621348535\">Enemy_W5_Limao_RankS</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"621348535\">Enemy_W5_Limao_RankS</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1492528010\">Enemy_W5_Limao_ElationDamageUp</a>[<span class=\"descriptionNumberColor\">Make Headlines, Please!</span>]",
              "duration": {
                "operator": "Variables[0] ({[PassiveSkillInitiate[8]]}) || RETURN",
                "displayLines": "{[PassiveSkillInitiate[8]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkillInitiate[8]]}"
                ]
              },
              "valuePerStack": {
                "MDF_ElationDamageAddedRatio": {
                  "operator": "Variables[0] ({[PassiveSkillInitiate[5]]}) || RETURN",
                  "displayLines": "{[PassiveSkillInitiate[5]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkillInitiate[5]]}"
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"923345677\">Enemy_W5_Limao_RankA</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1492528010\">Enemy_W5_Limao_ElationDamageUp</a>[<span class=\"descriptionNumberColor\">Make Headlines, Please!</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[PassiveSkillInitiate[8]]}) || RETURN",
                    "displayLines": "{[PassiveSkillInitiate[8]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkillInitiate[8]]}"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_ElationDamageAddedRatio": {
                      "operator": "Variables[0] ({[PassiveSkillInitiate[6]]}) || RETURN",
                      "displayLines": "{[PassiveSkillInitiate[6]]}",
                      "constants": [],
                      "variables": [
                        "{[PassiveSkillInitiate[6]]}"
                      ]
                    }
                  },
                  "casterAssign": "TargetSelf"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"873012820\">Enemy_W5_Limao_RankB</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1492528010\">Enemy_W5_Limao_ElationDamageUp</a>[<span class=\"descriptionNumberColor\">Make Headlines, Please!</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[PassiveSkillInitiate[8]]}) || RETURN",
                        "displayLines": "{[PassiveSkillInitiate[8]]}",
                        "constants": [],
                        "variables": [
                          "{[PassiveSkillInitiate[8]]}"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_ElationDamageAddedRatio": {
                          "operator": "Variables[0] ({[PassiveSkillInitiate[7]]}) || RETURN",
                          "displayLines": "{[PassiveSkillInitiate[7]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkillInitiate[7]]}"
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "5012110_Monster_W5_Limao_Ability02_Part01": {
      "fileName": "5012110_Monster_W5_Limao_Ability02_Part01",
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
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_W5_Limao_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "5012110_Monster_W5_Limao_Ability01_Part02": {
      "fileName": "5012110_Monster_W5_Limao_Ability01_Part02",
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
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
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "5012110_Monster_W5_Limao_Ability01_Part01": {
      "fileName": "5012110_Monster_W5_Limao_Ability01_Part01",
      "childAbilityList": [
        "5012110_Monster_W5_Limao_Ability01_Part01",
        "5012110_Monster_W5_Limao_Ability01_Part02",
        "5012110_Monster_W5_Limao_Ability01_Camera"
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
          "ability": "Monster_W5_Limao_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "5012110_Monster_W5_Limao_FrameCapture": {
      "fileName": "5012110_Monster_W5_Limao_FrameCapture",
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
              "target": "{{Level Entity}}"
            },
            "value1": "#CL_PhotoCheck",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "scope": "TargetEntity",
              "variableName": "#CL_PhotoCheck",
              "value": 2
            }
          ]
        }
      ],
      "references": []
    },
    "5012110_Monster_W5_Limao_PassiveAbilityInitiate": {
      "fileName": "5012110_Monster_W5_Limao_PassiveAbilityInitiate",
      "skillTrigger": "PassiveSkillInitiate",
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
          "modifier": "<a class=\"gModGreen\" id=\"836243397\">W5_Limao_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"785910540\">W5_Limao_BattleScore2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"727316386\">Enemy_W5_Limao_Status</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-617244796\">Enemy_W5_Limao_PhotoController</a>",
          "casterAssign": "TargetSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-929608328\">Enemy_W5_Limao_Deathrattle</a>"
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
          "name": "Change Character Transformation",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase0"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-929608328\">Enemy_W5_Limao_Deathrattle</a>",
          "modifierFlags": [
            "Deathrattle",
            "MuteHitFly",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 11415,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Action Owner}}"
                        },
                        "characterName": null
                      },
                      {
                        "name": "Has Turn-State",
                        "states": [
                          "InsertUltraSkillExecuting"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "_SpecialPhoto",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "_SpecialPhoto_BeingLimbo",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "_KillerSkill",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "#CL_PhotoCheck",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "_Seconds",
                      "value": 1
                    },
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "ability": "Monster_W5_Limao_FrameCapture"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Turn-State",
                        "states": [
                          "InsertUltraSkillExecuting"
                        ]
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Elation"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "_SpecialPhoto",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "_SpecialPhoto_BeingLimbo",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "_KillerSkill",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "#CL_PhotoCheck",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "_Seconds",
                      "value": 0.3
                    },
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "ability": "Monster_W5_Limao_FrameCapture"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)}}"
                  },
                  "variableName": "_KillerNum",
                  "livingTargets": true,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"990252855\">Enemy_W5_Limao_Killer</a>",
                    "justAddedOrActive": true,
                    "casterFilter": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_KillerNum",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_IsPhase1",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"990252855\">Enemy_W5_Limao_Killer</a>",
                      "onlyRemoveOwnersInstance": true
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team(Exclude Memosprites)}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"990252855\">Enemy_W5_Limao_Killer</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W5_Limao_Ability02_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Furbo Journalist: Killer}}"
                  },
                  "priorityTag": "MonsterDeathRattle",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Mark Entity For Immediate Death"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__727316386\">Enemy_W5_Limao_Status</a>",
          "modifierFlags": [
            "STAT_AITargetHigherPriority",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TotalDamage",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_IsPhase1",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action END Phase] [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_IsPhase1",
                      "value": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "CurrentHP%",
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
                              "target": "{{Level Entity}}"
                            },
                            "value1": "#CL_PhotoCheck",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "#CL_PhotoCheck",
                              "value": 0
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_FinalDamage",
                          "value": {
                            "operator": "Variables[0] (MDF_TotalDamage) || RETURN",
                            "displayLines": "MDF_TotalDamage",
                            "constants": [],
                            "variables": [
                              "MDF_TotalDamage"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "#CL_PhotoCheck",
                          "value": 2
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TotalDamage",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_IsTogetherAttack",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_IsTogetherAttackLock",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Has Damage Tags",
                        "damageTag": [
                          "Joint-Attack"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IsTogetherAttack",
                      "value": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IsTogetherAttackLock",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Define Custom Variable with Damage Data",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_HitDamage"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_TotalDamage",
                  "value": {
                    "operator": "Variables[0] (MDF_TotalDamage) || Variables[1] (MDF_HitDamage) || ADD || RETURN",
                    "displayLines": "(MDF_TotalDamage + MDF_HitDamage)",
                    "constants": [],
                    "variables": [
                      "MDF_TotalDamage",
                      "MDF_HitDamage"
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
                        "value1": "MDF_IsDying",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Additional DMG",
                          "True DMG"
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
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "type": "Character"
                          },
                          {
                            "name": "Target is Unselectable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "source": {
                              "name": "Target Name",
                              "target": "{{Enemy Team Entity}}"
                            },
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)V2}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"990252855\">Enemy_W5_Limao_Killer</a>",
                          "onlyRemoveOwnersInstance": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"990252855\">Enemy_W5_Limao_Killer</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Is Entity Type",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "type": "Memosprite"
                                  },
                                  {
                                    "name": "Is Entity Type",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}.[[getCreator]]"
                                    },
                                    "type": "Character"
                                  },
                                  {
                                    "name": "Target is Unselectable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}.[[getCreator]]"
                                    },
                                    "source": {
                                      "name": "Target Name",
                                      "target": "{{Enemy Team Entity}}"
                                    },
                                    "invertCondition": true
                                  }
                                ]
                              },
                              {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Is Entity Type",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "type": "Battle Event"
                                  },
                                  {
                                    "name": "Is Entity Type",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}.[[getCreator]]"
                                    },
                                    "type": "Character"
                                  },
                                  {
                                    "name": "Target is Unselectable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}.[[getCreator]]"
                                    },
                                    "source": {
                                      "name": "Target Name",
                                      "target": "{{Enemy Team Entity}}"
                                    },
                                    "invertCondition": true
                                  }
                                ]
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Player Team All(with Unselectable)V2}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"990252855\">Enemy_W5_Limao_Killer</a>",
                              "onlyRemoveOwnersInstance": true
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}.[[getCreator]]"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"990252855\">Enemy_W5_Limao_Killer</a>"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Player Team All(with Unselectable)V2}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"990252855\">Enemy_W5_Limao_Killer</a>",
                              "onlyRemoveOwnersInstance": true
                            },
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Player Team(Exclude Memosprites)}}"
                              },
                              "searchRandom": true,
                              "maxTargets": 1,
                              "ifTargetFound": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"990252855\">Enemy_W5_Limao_Killer</a>"
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_IsDying",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_IsTogetherAttack",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_IsTogetherAttackLock",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TotalDamage",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked Completed [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "=",
                    "value2": 0
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
                              "target": "{{Level Entity}}"
                            },
                            "value1": "#CL_PhotoCheck",
                            "compareType": "=",
                            "value2": 2
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Level Entity}}"
                            },
                            "value1": "_SpecialPhoto_BeingLimbo",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "Self_Killer_AfterSkill",
                            "compareType": "=",
                            "value2": 1,
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "#CL_PhotoCheck",
                          "value": 0
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
                        "value1": "Self_Killer_AfterSkill",
                        "compareType": "=",
                        "value2": 1,
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Self_KillerSkill",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_FinalDamage",
                          "value": {
                            "operator": "Variables[0] (MDF_TotalDamage) || RETURN",
                            "displayLines": "MDF_TotalDamage",
                            "constants": [],
                            "variables": [
                              "MDF_TotalDamage"
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
                                  "target": "{{Level Entity}}"
                                },
                                "value1": "#CL_PhotoCheck",
                                "compareType": "=",
                                "value2": 0
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "MDF_IsTogetherAttack",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "_KillerSkill",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "scope": "TargetEntity",
                              "variableName": "#CL_PhotoCheck",
                              "value": 1
                            },
                            {
                              "name": "Trigger Ability",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "ability": "Monster_W5_Limao_FrameCapture"
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
                    "value1": "MDF_IsTogetherAttack",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TotalDamage",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IsTogetherAttackLock",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IsTogetherAttack",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Skill Type",
                            "skillType": "Skill",
                            "invertCondition": true
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Ultimate",
                            "invertCondition": true
                          },
                          {
                            "name": "Skill Type",
                            "skillType": "Elation",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "variableName": "_Seconds",
                          "value": 0.1
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "variableName": "_Seconds",
                          "value": 0.3
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Type",
                        "skillType": "Elation"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "variableName": "_Seconds",
                          "value": 0.3
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "variableName": "_Seconds",
                          "value": 0
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Character ID",
                                "ID": 1208,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": "Fu Xuan"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "variableName": "_Seconds",
                              "value": 0.3
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "variableName": "_SpecialPhoto",
                              "value": 1
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Character ID",
                                "ID": 1223,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": "Moze"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "variableName": "_Seconds",
                              "value": 0.1
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "variableName": "_SpecialPhoto",
                              "value": 1
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Character ID",
                                "ID": 1414,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": "Dan Heng • Permansor Terrae"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "variableName": "_Seconds",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "variableName": "_SpecialPhoto",
                              "value": 1
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Character ID",
                                "ID": 1212,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": "Jingliu"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "variableName": "_Seconds",
                              "value": 0.1
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "variableName": "_SpecialPhoto",
                              "value": 1
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Character ID",
                                "ID": 1220,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": "Feixiao"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "variableName": "_Seconds",
                              "value": 0.1
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "variableName": "_SpecialPhoto",
                              "value": 1
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Character ID",
                                "ID": 1308,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": "Acheron"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "variableName": "_Seconds",
                              "value": 0.1
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "variableName": "_SpecialPhoto",
                              "value": 1
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Character ID",
                                "ID": 1314,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": "Jade"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "variableName": "_Seconds",
                              "value": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "variableName": "_SpecialPhoto",
                              "value": 1
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Character ID",
                                "ID": 1005,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": "Kafka"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "variableName": "_Seconds",
                              "value": 0.3
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "variableName": "_SpecialPhoto",
                              "value": 1
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Character ID",
                                "ID": 8007,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": "Trailblazer - Remembrance[M]"
                              },
                              {
                                "name": "Character ID",
                                "ID": 8008,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "characterName": "Trailblazer - Remembrance[F]"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "variableName": "_Seconds",
                              "value": 0.1
                            },
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "variableName": "_SpecialPhoto",
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
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Self_KillerSkill",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Self_Killer_AfterSkill",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Self_KillerSkill",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Self_Killer_AfterSkill",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Modifier Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "STAT_Confine"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_Confine"
                      },
                      {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "conditions": {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "flagName": "STAT_Confine"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Target Count SUM",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "conditions": {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "flagName": "Break"
                        },
                        "invertCondition": true
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Player Team"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "_Seconds",
                      "value": 0.1
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Self_KillerSkill",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Self_Killer_AfterSkill",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Update Target ViewMode(UI) [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "STAT_Confine"
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "5012110_Modifiers": {
      "fileName": "5012110_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__826874318\">Monster_W5_Limao_BattleScore2Count</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1340998593\">Monster_W5_Limao_BattleScore1Count</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "stackData": [],
          "latentQueue": [
            "_RankRatio"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__785910540\">W5_Limao_BattleScore2</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"826874318\">Monster_W5_Limao_BattleScore2Count</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"826874318\">Monster_W5_Limao_BattleScore2Count</a>"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"826874318\">Monster_W5_Limao_BattleScore2Count</a>"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Dedicated Journalist",
                          "desc": "Have the Furbo Journalist eliminated at the start of its turn and trigger \"Ugly Close-Up\"",
                          "rarity": "Low"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"826874318\">Monster_W5_Limao_BattleScore2Count</a>"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__836243397\">W5_Limao_BattleScore1</a>",
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1340998593\">Monster_W5_Limao_BattleScore1Count</a>",
                    "includePreDeath": true
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Most Photogenic Moment",
                          "desc": "In a battle against the Furbo Journalist, receive the highest rating when getting your photo taken",
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
          "for": "<a class=\"gModGreen\" id=\"mod__873012820\">Enemy_W5_Limao_RankB</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "stackData": [],
          "latentQueue": [
            "_RankRatio"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__923345677\">Enemy_W5_Limao_RankA</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "stackData": [],
          "latentQueue": [
            "_RankRatio"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__621348535\">Enemy_W5_Limao_RankS</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "stackData": [],
          "latentQueue": [
            "_RankRatio"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1492528010\">Enemy_W5_Limao_ElationDamageUp</a>[<span class=\"descriptionNumberColor\">Make Headlines, Please!</span>]",
          "stackType": "Multiple",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGConverted</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_ElationDamageAddedRatio) || RETURN",
                    "displayLines": "MDF_ElationDamageAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_ElationDamageAddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ElationDamageAddedRatio"
          ],
          "latentQueue": [
            "_RankRatio"
          ],
          "description": "Elation increases by <span class=\"descriptionNumberColor\">MDF_ElationDamageAddedRatio</span>.",
          "type": "Buff",
          "effectName": "Elation Boost",
          "statusName": "Make Headlines, Please!"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-617244796\">Enemy_W5_Limao_PhotoController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Monster_W5_Limao_FrameCapture"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextCaster",
                  "variableName": "_Seconds"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextCaster",
                  "variableName": "#CL_PhotoCheck"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextCaster",
                  "variableName": "_KillerSkill"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextCaster",
                  "variableName": "_SpecialPhoto"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextCaster",
                  "variableName": "_SpecialPhoto_BeingLimbo"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextCaster",
                  "variableName": "_LimaoLimboCount"
                }
              ]
            },
            {
              "eventTrigger": "Action Completed [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "_KillerSkill",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "_SpecialPhoto",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variableName": "_SpecialPhoto_BeingLimbo",
                  "value": 0
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__990252855\">Enemy_W5_Limao_Killer</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "stackData": [],
          "latentQueue": [
            "_IsPhase1",
            "#CL_PhotoCheck",
            "MDF_IsTogetherAttack",
            "MDF_IsTogetherAttackLock",
            "MDF_IsDying"
          ]
        }
      ],
      "references": []
    }
  }
}