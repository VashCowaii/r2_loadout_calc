const compositeAbilityObject = {
  "fullCharacterName": 4014033,
  "trimCharacterName": 4014033,
  "abilityList": [
    "4014033_Monster_W4_Pollux_Ability06_B_Part02",
    "4014033_Monster_W4_Pollux_Ability06_B_Part01",
    "4014033_Monster_W4_Pollux_Ability05_B_Part02",
    "4014033_Monster_W4_Pollux_Ability05_B_Part01",
    "4014033_Monster_W4_Pollux_EndInsert_Part02",
    "4014033_Monster_W4_Pollux_EndInsert_Part01",
    "4014033_Monster_W4_Pollux_SpecailAbility05",
    "4014033_Monster_W4_Pollux_Stun_Insert_Camera",
    "4014033_Monster_W4_Pollux_Stun_Insert",
    "4014033_Monster_W4_Pollux_StunRecover_Insert_Camera",
    "4014033_Monster_W4_Pollux_StunRecover_Insert",
    "4014033_Monster_W4_Pollux_PassiveAbility_Insert",
    "4014033_Monster_W4_Pollux_PassiveAbility_Initiate",
    "4014033_Monster_W4_Pollux_Ability06_Part02",
    "4014033_Monster_W4_Pollux_Ability06_Part01",
    "4014033_Monster_W4_Pollux_Ability05_Part02",
    "4014033_Monster_W4_Pollux_Ability05_Part01",
    "4014033_Monster_W4_Pollux_Ability04_Part02",
    "4014033_Monster_W4_Pollux_Ability04_Part01",
    "4014033_Monster_W4_Pollux_Ability03_Part02",
    "4014033_Monster_W4_Pollux_Ability03_Part01",
    "4014033_Monster_W4_Pollux_Ability02_Part02",
    "4014033_Monster_W4_Pollux_Ability02_Part01",
    "4014033_Monster_W4_Pollux_Ability01_Part02",
    "4014033_Monster_W4_Pollux_Ability01_Part01",
    "4014033_Monster_W4_Pollux_PassiveAbility_BGM",
    "4014033_Modifiers",
    "4014033_Functions",
    "4014033_BE_BattleEvents"
  ],
  "abilityObject": {
    "4014033_Monster_W4_Pollux_Ability06_B_Part02": {
      "fileName": "4014033_Monster_W4_Pollux_Ability06_B_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1292838645\">Modifier_Monster_W4_Pollux_B_HardLockHp</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "IsNeedFade",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
        },
        {
          "name": "Show BattleEvent Button",
          "show": true
        },
        {
          "name": "WAIT FOR",
          "condition": {
            "name": "Has Queued Ult"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[1]]}"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "AIFlag",
          "value": {
            "operator": "Variables[0] (_TempAIFlag) || RETURN",
            "displayLines": "_TempAIFlag",
            "constants": [],
            "variables": [
              "_TempAIFlag"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
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
          "name": "Define Custom Variable",
          "variableName": "IsNeedFade",
          "value": 0
        },
        "Trigger: Ability End"
      ],
      "whenAdded": [
        {
          "name": "Preload Battle Event(s)",
          "eventID": [
            60026
          ]
        },
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "eventID": 60026,
          "variables": null,
          "whenCreated": [
            "Show BattleEvent Button"
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1292838645\">Modifier_Monster_W4_Pollux_B_HardLockHp</a>",
          "valuePerStack": {
            "MDF_LockHp": {
              "operator": "Variables[0] ({[PassiveSkill02[5]]}) || RETURN",
              "displayLines": "{[PassiveSkill02[5]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill02[5]]}"
              ]
            }
          }
        }
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_Ability06_B_Part01": {
      "fileName": "4014033_Monster_W4_Pollux_Ability06_B_Part01",
      "childAbilityList": [
        "4014033_Monster_W4_Pollux_Ability06_B_Part01",
        "4014033_Monster_W4_Pollux_Ability06_B_Part02",
        "4014033_Monster_W4_Pollux_Ability06_Camera"
      ],
      "skillTrigger": "Skill06",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Pollux_Ability06_B_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_Ability05_B_Part02": {
      "fileName": "4014033_Monster_W4_Pollux_Ability05_B_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1324293112\">Modifier_Monster_W4_Pollux_B_HardLockHp_BFAbility05</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
            "invertCondition": true
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 1}} + {{Pollux Slumber Target 3}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                  "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 4)",
                  "constants": [
                    4
                  ],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 2}} + {{Pollux Slumber Target 4}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                  "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 4)",
                  "constants": [
                    4
                  ],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 1}} + {{Pollux Slumber Target 4}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (3) || DIV || RETURN",
                  "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 3)",
                  "constants": [
                    3
                  ],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 2}} + {{Pollux Slumber Target 3}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (3) || DIV || RETURN",
                  "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 3)",
                  "constants": [
                    3
                  ],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 3}} + {{Pollux Slumber Target 4}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (2) || DIV || RETURN",
                  "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 2)",
                  "constants": [
                    2
                  ],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 1}} + {{Pollux Slumber Target 2}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (2) || DIV || RETURN",
                  "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 2)",
                  "constants": [
                    2
                  ],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 2}} + {{Pollux Slumber Target 3}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || RETURN",
                  "displayLines": "(_TargetCurrentHp * _Skill05_LoseHpRatio)",
                  "constants": [],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 1}} + {{Pollux Slumber Target 4}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || RETURN",
                  "displayLines": "(_TargetCurrentHp * _Skill05_LoseHpRatio)",
                  "constants": [],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[1]]}"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[0]]}"
                  ]
                }
              }
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
            "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-84648127\">Monster_W4_Pollux_BloodRange</a>[<span class=\"descriptionNumberColor\">Indulging Slumber</span>]",
              "valuePerStack": {
                "_HpLimitRatio": {
                  "operator": "Variables[0] ({[Skill05[4]]}) || RETURN",
                  "displayLines": "{[Skill05[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[4]]}"
                  ]
                },
                "_FatigueRatio": {
                  "operator": "Variables[0] ({[Skill05[5]]}) || RETURN",
                  "displayLines": "{[Skill05[5]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[5]]}"
                  ]
                }
              }
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
            "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
              "valuePerStack": {
                "MDF_ShowValue1": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                  "displayLines": "{[Skill05[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[0]]}"
                  ]
                },
                "MDF_SpeedUpRatio": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                  "displayLines": "{[Skill05[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[0]]}"
                  ]
                }
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1324293112\">Modifier_Monster_W4_Pollux_B_HardLockHp_BFAbility05</a>",
          "valuePerStack": {
            "MDF_LockHp": {
              "operator": "Variables[0] (MIN) || Constants[0] (0.9) || Variables[1] ({[PassiveSkill02[5]]}) || Constants[1] (1.2) || MUL || PARAM_2 || FUNCTION || RETURN",
              "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(0.9, ({[PassiveSkill02[5]]} * 1.2))",
              "constants": [
                0.9,
                1.2
              ],
              "variables": [
                "MIN",
                "{[PassiveSkill02[5]]}"
              ]
            }
          }
        }
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_Ability05_B_Part01": {
      "fileName": "4014033_Monster_W4_Pollux_Ability05_B_Part01",
      "childAbilityList": [
        "4014033_Monster_W4_Pollux_Ability05_B_Part01",
        "4014033_Monster_W4_Pollux_Ability05_B_Part02",
        "4014033_Monster_W4_Pollux_Ability05_Camera"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Pollux_Ability05_B_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_EndInsert_Part02": {
      "fileName": "4014033_Monster_W4_Pollux_EndInsert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"276281376\">Monster_W4_Pollux_Main_DisableAction</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "StunCheck02",
            "compareType": "=",
            "value2": 0
          }
        }
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_EndInsert_Part01": {
      "fileName": "4014033_Monster_W4_Pollux_EndInsert_Part01",
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
          "ability": "Monster_W4_Pollux_EndInsert_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_SpecailAbility05": {
      "fileName": "4014033_Monster_W4_Pollux_SpecailAbility05",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "_StorySimulationSpeed",
          "value": 1
        }
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_Stun_Insert_Camera": {
      "fileName": "4014033_Monster_W4_Pollux_Stun_Insert_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "4014033_Monster_W4_Pollux_Stun_Insert": {
      "fileName": "4014033_Monster_W4_Pollux_Stun_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4014032,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
              },
              {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "<",
                "value2": 6
              }
            ]
          },
          "passed": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "consumePercent": {
                "operator": "Variables[0] (UnusedUnderThisBase_66) || RETURN",
                "displayLines": "UnusedUnderThisBase_66",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_66"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Consume",
              "consumeFrom": "MaxHP",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "consumePercent": {
                "operator": "Variables[0] ({[PassiveSkill02[3]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[3]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[3]]}"
                ]
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
                "name": "Enemy ID",
                "ID": 4014032,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
              },
              {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "<",
                "value2": 6
              }
            ]
          },
          "passed": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "healPercent": {
                "operator": "Variables[0] (UnusedUnderThisBase_85) || RETURN",
                "displayLines": "UnusedUnderThisBase_85",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_85"
                ]
              },
              "formula": "Heal from Target MaxHP"
            }
          ],
          "failed": [
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "healPercent": {
                "operator": "Variables[0] ({[PassiveSkill02[2]]}) || RETURN",
                "displayLines": "{[PassiveSkill02[2]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill02[2]]}"
                ]
              },
              "formula": "Heal from Target MaxHP"
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
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Assign Advance/Delay to Current Ability Use",
                  "adjustmentValue": {
                    "operator": "Variables[0] ({[PassiveSkill01[4]]}) || RETURN",
                    "displayLines": "{[PassiveSkill01[4]]}",
                    "constants": [],
                    "variables": [
                      "{[PassiveSkill01[4]]}"
                    ]
                  },
                  "adjustmentType": "Advance"
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "{[PassiveSkill01[4]]}"
                }
              ],
              "failed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "{[PassiveSkill01[4]]}"
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-888665654\">Monster_W4_Pollux_Strengthen_Break</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"891735658\">Monster_W4_Pollux_DisableAction</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1075172229\">HeiShengBei_PreAddBEModifier</a>"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Owner has Pending",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "AI_HeiShengBei_SpecialAI",
                  "value": 0
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "scope": "TargetEntity",
              "variableName": "AI_HeiShengBei_Need",
              "value": 1
            }
          ]
        }
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_StunRecover_Insert_Camera": {
      "fileName": "4014033_Monster_W4_Pollux_StunRecover_Insert_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "4014033_Monster_W4_Pollux_StunRecover_Insert": {
      "fileName": "4014033_Monster_W4_Pollux_StunRecover_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_PassiveAbility_Insert": {
      "fileName": "4014033_Monster_W4_Pollux_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_StorySimulationSpeed",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_StorySimulationSpeed",
              "value": 0
            }
          ]
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}} + {{Caster's Minions}}"
          },
          "flagNames": []
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"891735658\">Monster_W4_Pollux_DisableAction</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1688517080\">Enemy_W4_Pollux_Endurance</a>"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "set": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "searchRandom": true,
          "ifTargetFound": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
            }
          ]
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "AIFlag"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-720682465\">Monster_W4_Pollux_PartController_LockHP</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-888665654\">Monster_W4_Pollux_Strengthen_Break</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"586169347\">Monster_W4_Pollux_Strengthen_BreakMark</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_EnergyValue",
          "value": 0
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (_EnergyValue) || RETURN",
            "displayLines": "_EnergyValue",
            "constants": [],
            "variables": [
              "_EnergyValue"
            ]
          },
          "entityClass": "Enemy",
          "maximum": 1,
          "assignState": "True",
          "state": "Normal",
          "trigger": "SpEff_Trigger"
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "StoryMode",
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
              "modifier": "<a class=\"gModGreen\" id=\"-289587260\">Monster_W4_Pollux_StoryMode_LockHP</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4014032,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
              },
              {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "<",
                "value2": 6
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}} + {{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (UnusedUnderThisBase_76) || RETURN",
                  "displayLines": "UnusedUnderThisBase_76",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_76"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}} + {{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[4]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[4]]}"
                  ]
                }
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
                "name": "Enemy ID",
                "ID": 4014032,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
              }
            ]
          }
        }
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_PassiveAbility_Initiate": {
      "fileName": "4014033_Monster_W4_Pollux_PassiveAbility_Initiate",
      "skillTrigger": "Passive",
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
          "modifier": "<a class=\"gModGreen\" id=\"1132979046\">W4_Pollux_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1116201427\">W4_Pollux_BattleScore2</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1099423808\">W4_Pollux_BattleScore3</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1927341406\">Monster_W4_Pollux_Status</a>"
        },
        {
          "name": "Create Enemies",
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID0) || RETURN",
                "displayLines": "SummonID0",
                "constants": [],
                "variables": [
                  "SummonID0"
                ]
              },
              "locationType": "BeforeCaster",
              "locationOffset": -1,
              "leader": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-193308861\">Monster_W4_PolluxPart_L</a>"
        },
        {
          "name": "Create Enemies",
          "delayPercent": 1.3,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "operator": "Variables[0] (SummonID1) || RETURN",
                "displayLines": "SummonID1",
                "constants": [],
                "variables": [
                  "SummonID1"
                ]
              },
              "locationType": "AfterCaster",
              "locationOffset": 1,
              "leader": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Recently Summoned Enemies}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-226864099\">Monster_W4_PolluxPart_R</a>"
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
          "name": "Create Shared HP Group",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "subTarget": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "removeShields": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4014032,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
              },
              {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "<",
                "value2": 6
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}} + {{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (UnusedUnderThisBase_76) || RETURN",
                  "displayLines": "UnusedUnderThisBase_76",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_76"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}} + {{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] ({[PassiveSkill02[4]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[4]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[4]]}"
                  ]
                }
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
          "modifier": "<a class=\"gModGreen\" id=\"-977406110\">Monster_W4_Pollux_BloodPool</a>[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
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
          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4014033,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Castorice, Hand of Shadow",
            "isBaseCompare": true,
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Set Enemy Phase"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-720682465\">Monster_W4_Pollux_PartController_LockHP</a>"
            }
          ],
          "failed": [
            {
              "name": "Set Enemy Phase",
              "phase": 2
            }
          ]
        },
        {
          "name": "Define Custom Variable with WorldLevel",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "_WorldLevel"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Enemy ID",
                "ID": 4014032,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
              },
              {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "<",
                "value2": 6
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Skill05_LoseHpRatio",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_78) || RETURN",
                "displayLines": "UnusedUnderThisBase_78",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_78"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Skill05_ActionDelay",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_79) || RETURN",
                "displayLines": "UnusedUnderThisBase_79",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_79"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Skill05_Part_ActionDelay",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_80) || RETURN",
                "displayLines": "UnusedUnderThisBase_80",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_80"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Skill05_LoseHpRatio",
              "value": {
                "operator": "Variables[0] ({[Skill05[1]]}) || RETURN",
                "displayLines": "{[Skill05[1]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[1]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Skill05_ActionDelay",
              "value": {
                "operator": "Variables[0] ({[Skill05[2]]}) || RETURN",
                "displayLines": "{[Skill05[2]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[2]]}"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_Skill05_Part_ActionDelay",
              "value": {
                "operator": "Variables[0] ({[Skill05[3]]}) || RETURN",
                "displayLines": "{[Skill05[3]]}",
                "constants": [],
                "variables": [
                  "{[Skill05[3]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "StoryMode",
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
              "modifier": "<a class=\"gModGreen\" id=\"1130988503\">Monster_W4_Pollux_WaveStart</a>"
            }
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
          "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-226864099\">Monster_W4_PolluxPart_R</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-193308861\">Monster_W4_PolluxPart_L</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1927341406\">Monster_W4_Pollux_Status</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_EnergyValue",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "assignState": "False"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "_ReadyToCharge",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_TempAIFlag",
                      "value": {
                        "operator": "Variables[0] (_ReadyToCharge) || RETURN",
                        "displayLines": "_ReadyToCharge",
                        "constants": [],
                        "variables": [
                          "_ReadyToCharge"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 100
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Current Turn Is",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Assign Advance/Delay to Current Ability Use",
                          "adjustmentValue": {
                            "operator": "Variables[0] ({[PassiveSkill01[3]]}) || INVERT || RETURN",
                            "displayLines": "-{[PassiveSkill01[3]]}",
                            "constants": [],
                            "variables": [
                              "{[PassiveSkill01[3]]}"
                            ]
                          },
                          "adjustmentType": "Advance"
                        },
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "-{[PassiveSkill01[3]]}"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "-{[PassiveSkill01[3]]}"
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
                            "value1": "StoryMode",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "_StorySkill05",
                            "compareType": "=",
                            "value2": 0
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
                          "modifier": "<a class=\"gModGreen\" id=\"1061433740\">Monster_W4_Pollux_StoryMode_SpecailAbility05</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_ReadyToCharge",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_EnergyValue",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_EnergyValue) || RETURN",
                    "displayLines": "_EnergyValue",
                    "constants": [],
                    "variables": [
                      "_EnergyValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": 1,
                  "assignState": "True",
                  "state": "Normal"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2086497725\">Monster_W4_Pollux_EnergyBar</a>"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "_HPChangeValue",
                  "value": "ParamValue"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"586169347\">Monster_W4_Pollux_Strengthen_BreakMark</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_HPChangeValue",
                        "compareType": "<",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_HPChangeRatio",
                      "value": {
                        "operator": "Variables[0] (_HPChangeValue) || INVERT || Variables[1] (_TargetMaxHP) || DIV || RETURN",
                        "displayLines": "(-_HPChangeValue / _TargetMaxHP)",
                        "constants": [],
                        "variables": [
                          "_HPChangeValue",
                          "_TargetMaxHP"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_EnergyValue",
                      "value": {
                        "operator": "Variables[0] (_HPChangeRatio) || Variables[1] ({[PassiveSkill01[2]]}) || MUL || RETURN",
                        "displayLines": "(_HPChangeRatio * {[PassiveSkill01[2]]})",
                        "constants": [],
                        "variables": [
                          "_HPChangeRatio",
                          "{[PassiveSkill01[2]]}"
                        ]
                      },
                      "max": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Current Action Holder Is",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "invertCondition": true
                          },
                          {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Target Name",
                              "target": "{{Current Turn Owner}}"
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster's Minions}}"
                            },
                            "mustBeAlive2": true,
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (_EnergyValue) || RETURN",
                            "displayLines": "_EnergyValue",
                            "constants": [],
                            "variables": [
                              "_EnergyValue"
                            ]
                          },
                          "entityClass": "Enemy",
                          "maximum": 1
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
                    "name": "Skill Name",
                    "skillName": "Skill05"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Assign Advance/Delay to Current Ability Use",
                          "adjustmentValue": {
                            "operator": "Variables[0] (_Skill05_ActionDelay) || RETURN",
                            "displayLines": "_Skill05_ActionDelay",
                            "constants": [],
                            "variables": [
                              "_Skill05_ActionDelay"
                            ]
                          },
                          "adjustmentType": "Advance"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "advanceType": "Set",
                          "multiAdd": "_Skill05_ActionDelay",
                          "changeVersion": true
                        }
                      ]
                    },
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "advanceType": "Set",
                      "add": {
                        "operator": "Variables[0] (_Skill05_Part_ActionDelay) || RETURN",
                        "displayLines": "_Skill05_Part_ActionDelay",
                        "constants": [],
                        "variables": [
                          "_Skill05_Part_ActionDelay"
                        ]
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
                        "name": "Skill Name",
                        "skillName": "Skill05"
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
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 4014033,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "characterName": "Castorice, Hand of Shadow",
                        "isBaseCompare": true,
                        "invertCondition": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill06"
                      },
                      {
                        "name": "OR",
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
                            "ID": 4014033,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Castorice, Hand of Shadow",
                            "isBaseCompare": true
                          }
                        ]
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
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 7,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 0
                    }
                  ]
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_ReadyToCharge",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_EnergyValue",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_ReadyToCharge",
                          "value": 1
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                        }
                      ]
                    }
                  ],
                  "whenLeavingRange": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_ReadyToCharge",
                      "value": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1130988503\">Monster_W4_Pollux_WaveStart</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_WorldLevel",
            "StoryMode"
          ]
        }
      ]
    },
    "4014033_Monster_W4_Pollux_Ability06_Part02": {
      "fileName": "4014033_Monster_W4_Pollux_Ability06_Part02",
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
                "name": "Compare: Variable",
                "value1": "StoryMode",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Compare: Variable",
                "value1": "_StorySetSpeed",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_StorySimulationSpeed",
              "value": 1
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "IsNeedFade",
          "value": 1
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill06[0]]}) || MUL || Constants[0] (4) || DIV || RETURN",
                  "displayLines": "((_MaxHP * {[Skill06[0]]}) / 4)",
                  "constants": [
                    4
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill06[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "25%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill06[0]]}) || MUL || Constants[0] (4) || DIV || RETURN",
                  "displayLines": "((_MaxHP * {[Skill06[0]]}) / 4)",
                  "constants": [
                    4
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill06[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "25%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill06[0]]}) || MUL || Constants[0] (4) || DIV || RETURN",
                  "displayLines": "((_MaxHP * {[Skill06[0]]}) / 4)",
                  "constants": [
                    4
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill06[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "25%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-84648127\">Monster_W4_Pollux_BloodRange</a>[<span class=\"descriptionNumberColor\">Indulging Slumber</span>]"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill06[1]]}) || MUL || Variables[0] (_MaxHP) || Variables[2] ({[Skill06[0]]}) || MUL || Constants[0] (4) || DIV || ADD || RETURN",
                      "displayLines": "((_MaxHP * {[Skill06[1]]}) + ((_MaxHP * {[Skill06[0]]}) / 4))",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "_MaxHP",
                        "{[Skill06[1]]}",
                        "{[Skill06[0]]}"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "25%"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2065489118\">Standard_Entangle</a>[<span class=\"descriptionNumberColor\">Entanglement</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill06[3]]}) || RETURN",
                    "displayLines": "{[Skill06[3]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill06[3]]}"
                    ]
                  },
                  "baseChance": 1,
                  "valuePerStack": {
                    "MDF_ActionDelayRatio": {
                      "operator": "Variables[0] ({[Skill06[4]]}) || RETURN",
                      "displayLines": "{[Skill06[4]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill06[4]]}"
                      ]
                    },
                    "Modifier_Entangle_DamagePercentage": {
                      "operator": "Variables[0] ({[Skill06[5]]}) || RETURN",
                      "displayLines": "{[Skill06[5]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill06[5]]}"
                      ]
                    },
                    "Modifier_Entangle_DamageValue": 0
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill06[0]]}) || MUL || Constants[0] (4) || DIV || RETURN",
                      "displayLines": "((_MaxHP * {[Skill06[0]]}) / 4)",
                      "constants": [
                        4
                      ],
                      "variables": [
                        "_MaxHP",
                        "{[Skill06[0]]}"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "25%"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[1]]}"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "AIFlag",
          "value": {
            "operator": "Variables[0] (_TempAIFlag) || RETURN",
            "displayLines": "_TempAIFlag",
            "constants": [],
            "variables": [
              "_TempAIFlag"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"599310144\">Monster_W4_Pollux_FX_Ground</a>"
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
          "name": "Define Custom Variable",
          "variableName": "IsNeedFade",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "StoryMode",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_StorySimulationSpeed",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_StorySetSpeed",
              "value": 1
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_Ability06_Part01": {
      "fileName": "4014033_Monster_W4_Pollux_Ability06_Part01",
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
          "ability": "Monster_W4_Pollux_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_Ability05_Part02": {
      "fileName": "4014033_Monster_W4_Pollux_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": ">=",
                "value2": 2
              },
              {
                "name": "Enemy ID",
                "ID": 4014033,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Castorice, Hand of Shadow",
                "isBaseCompare": true
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 7
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": {
                "operator": "Variables[0] (_TempAIFlag) || RETURN",
                "displayLines": "_TempAIFlag",
                "constants": [],
                "variables": [
                  "_TempAIFlag"
                ]
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 1}} + {{Pollux Slumber Target 3}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                  "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 4)",
                  "constants": [
                    4
                  ],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 2}} + {{Pollux Slumber Target 4}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (4) || DIV || RETURN",
                  "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 4)",
                  "constants": [
                    4
                  ],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 1}} + {{Pollux Slumber Target 4}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (3) || DIV || RETURN",
                  "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 3)",
                  "constants": [
                    3
                  ],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 2}} + {{Pollux Slumber Target 3}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (3) || DIV || RETURN",
                  "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 3)",
                  "constants": [
                    3
                  ],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 3}} + {{Pollux Slumber Target 4}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (2) || DIV || RETURN",
                  "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 2)",
                  "constants": [
                    2
                  ],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 1}} + {{Pollux Slumber Target 2}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || Constants[0] (2) || DIV || RETURN",
                  "displayLines": "((_TargetCurrentHp * _Skill05_LoseHpRatio) / 2)",
                  "constants": [
                    2
                  ],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 2}} + {{Pollux Slumber Target 3}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || RETURN",
                  "displayLines": "(_TargetCurrentHp * _Skill05_LoseHpRatio)",
                  "constants": [],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollux Slumber Target 1}} + {{Pollux Slumber Target 4}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_TargetCurrentHp",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_TargetCurrentHp",
              "value": {
                "operator": "Variables[0] (_TargetCurrentHp) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(_TargetCurrentHp - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_TargetCurrentHp"
                ]
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_TargetCurrentHp) || Variables[1] (_Skill05_LoseHpRatio) || MUL || RETURN",
                  "displayLines": "(_TargetCurrentHp * _Skill05_LoseHpRatio)",
                  "constants": [],
                  "variables": [
                    "_TargetCurrentHp",
                    "_Skill05_LoseHpRatio"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "HitSplit": 0.25,
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team(Exclude Memosprites)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[1]]}"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[0]]}"
                  ]
                }
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
                "name": "Enemy ID",
                "ID": 4014032,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
              },
              {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "<",
                "value2": 6
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-84648127\">Monster_W4_Pollux_BloodRange</a>[<span class=\"descriptionNumberColor\">Indulging Slumber</span>]",
              "valuePerStack": {
                "_HpLimitRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_74) || RETURN",
                  "displayLines": "UnusedUnderThisBase_74",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_74"
                  ]
                },
                "_FatigueRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_75) || RETURN",
                  "displayLines": "UnusedUnderThisBase_75",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_75"
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team(Exclude Memosprites)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-84648127\">Monster_W4_Pollux_BloodRange</a>[<span class=\"descriptionNumberColor\">Indulging Slumber</span>]",
              "valuePerStack": {
                "_HpLimitRatio": {
                  "operator": "Variables[0] ({[Skill05[4]]}) || RETURN",
                  "displayLines": "{[Skill05[4]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[4]]}"
                  ]
                },
                "_FatigueRatio": {
                  "operator": "Variables[0] ({[Skill05[5]]}) || RETURN",
                  "displayLines": "{[Skill05[5]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[5]]}"
                  ]
                }
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
                "name": "Enemy ID",
                "ID": 4014032,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
              },
              {
                "name": "Compare: Variable",
                "value1": "_WorldLevel",
                "compareType": "<",
                "value2": 6
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
              "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
              "valuePerStack": {
                "MDF_ShowValue1": {
                  "operator": "Variables[0] (UnusedUnderThisBase_82) || RETURN",
                  "displayLines": "UnusedUnderThisBase_82",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_82"
                  ]
                },
                "MDF_SpeedUpRatio": {
                  "operator": "Variables[0] (UnusedUnderThisBase_82) || RETURN",
                  "displayLines": "UnusedUnderThisBase_82",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_82"
                  ]
                }
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
              "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
              "valuePerStack": {
                "MDF_ShowValue1": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                  "displayLines": "{[Skill05[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[0]]}"
                  ]
                },
                "MDF_SpeedUpRatio": {
                  "operator": "Variables[0] ({[Skill05[0]]}) || RETURN",
                  "displayLines": "{[Skill05[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill05[0]]}"
                  ]
                }
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
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4014033,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Castorice, Hand of Shadow",
                "isBaseCompare": true,
                "invertCondition": true
              }
            ]
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "StoryMode",
                "compareType": "=",
                "value2": 1
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
                "value1": "StoryMode",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Compare: Variable",
                "value1": "_StoryMsg",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1061433740\">Monster_W4_Pollux_StoryMode_SpecailAbility05</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_StorySimulationSpeed",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_StoryMsg",
              "value": 1
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_Ability05_Part01": {
      "fileName": "4014033_Monster_W4_Pollux_Ability05_Part01",
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
          "ability": "Monster_W4_Pollux_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_Ability04_Part02": {
      "fileName": "4014033_Monster_W4_Pollux_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2034261592\">Monster_W4_PolluxPart_Shield</a>[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]",
          "duration": {
            "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
            "displayLines": "{[Skill04[1]]}",
            "constants": [],
            "variables": [
              "{[Skill04[1]]}"
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_Ability04_Part01": {
      "fileName": "4014033_Monster_W4_Pollux_Ability04_Part01",
      "childAbilityList": [
        "4014033_Monster_W4_Pollux_Ability04_Part01",
        "4014033_Monster_W4_Pollux_Ability04_Part02",
        "4014033_Monster_W4_Pollux_Ability04_Camera"
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
          "ability": "Monster_W4_Pollux_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_Ability03_Part02": {
      "fileName": "4014033_Monster_W4_Pollux_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Taunt",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 3,
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1924886096\">Monster_W4_Pollux_Ability03_Mark</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemies by Aggro}}"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1924886096\">Monster_W4_Pollux_Ability03_Mark</a>"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 2,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1924886096\">Monster_W4_Pollux_Ability03_Mark</a>",
                "invertCondition": true
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1924886096\">Monster_W4_Pollux_Ability03_Mark</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Pollox Mourning Departed Target}}"
            },
            "compareType": "=",
            "value2": 1,
            "livingTargets": true
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Pollox Mourning Departed Target}}"
                },
                "compareType": "=",
                "value2": 2,
                "livingTargets": true
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Name",
              "target": "{{Pollox Mourning Departed Target}}"
            },
            "compareType": "=",
            "value2": 1,
            "livingTargets": true
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Pollox Mourning Departed Target}}"
                },
                "compareType": "=",
                "value2": 2,
                "livingTargets": true
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (0.15) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill03[0]]}) * 0.15)",
                  "constants": [
                    0.15
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill03[0]]}"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "15%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Pollox Mourning Departed Target}}"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (0.15) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill03[0]]}) * 0.15)",
                  "constants": [
                    0.15
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill03[0]]}"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "15%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (0.15) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill03[0]]}) * 0.15)",
                  "constants": [
                    0.15
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill03[0]]}"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "15%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (0.15) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill03[0]]}) * 0.15)",
                  "constants": [
                    0.15
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill03[0]]}"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "15%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (0.15) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill03[0]]}) * 0.15)",
                  "constants": [
                    0.15
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill03[0]]}"
                  ]
                },
                "cantKill": true,
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "15%"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageFlat": {
                  "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill03[0]]}) || MUL || Constants[0] (0.4) || MUL || RETURN",
                  "displayLines": "((_MaxHP * {[Skill03[0]]}) * 0.4)",
                  "constants": [
                    0.4
                  ],
                  "variables": [
                    "_MaxHP",
                    "{[Skill03[0]]}"
                  ]
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "behaviorTag": "DirectlyLoseHpHit",
                "attackType": "Basic ATK",
                "EnergyGainPercent": "40%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Pollox Mourning Departed Target}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[1]]}"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"189344788\">Monster_W4_Pollux_Strengthen_EggAbsorb_FX</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"2062281585\">Monster_W4_Pollux_Strengthen_EggAbsorb</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1924886096\">Monster_W4_Pollux_Ability03_Mark</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_Ability03_Part01": {
      "fileName": "4014033_Monster_W4_Pollux_Ability03_Part01",
      "childAbilityList": [
        "4014033_Monster_W4_Pollux_Ability03_Part01",
        "4014033_Monster_W4_Pollux_Ability03_Part02",
        "4014033_Monster_W4_Pollux_Ability03_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Pollux_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_Ability02_Part02": {
      "fileName": "4014033_Monster_W4_Pollux_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "_PlayerNum",
          "livingTargets": true
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] ({[Skill02[2]]}) || RETURN",
                  "displayLines": "{[Skill02[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[2]]}"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[3]]}) || Variables[1] (_PlayerNum) || DIV || Constants[0] (1) || Variables[2] (_DamageUpTemp) || ADD || MUL || RETURN",
                      "displayLines": "(({[Skill02[3]]} / _PlayerNum) * (1 + _DamageUpTemp))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "{[Skill02[3]]}",
                        "_PlayerNum",
                        "_DamageUpTemp"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill02[1]]}) || MUL || RETURN",
                      "displayLines": "(_MaxHP * {[Skill02[1]]})",
                      "constants": [],
                      "variables": [
                        "_MaxHP",
                        "{[Skill02[1]]}"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || Variables[1] (_PlayerNum) || DIV || RETURN",
                      "displayLines": "({[Skill02[0]]} / _PlayerNum)",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}",
                        "_PlayerNum"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[1]]}"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"189344788\">Monster_W4_Pollux_Strengthen_EggAbsorb_FX</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"2062281585\">Monster_W4_Pollux_Strengthen_EggAbsorb</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_Ability02_Part01": {
      "fileName": "4014033_Monster_W4_Pollux_Ability02_Part01",
      "childAbilityList": [
        "4014033_Monster_W4_Pollux_Ability02_Part01",
        "4014033_Monster_W4_Pollux_Ability02_Part02",
        "4014033_Monster_W4_Pollux_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Pollux_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_Ability01_Part02": {
      "fileName": "4014033_Monster_W4_Pollux_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] ({[Skill01[2]]}) || RETURN",
                  "displayLines": "{[Skill01[2]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill01[2]]}"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill01[3]]}) || Constants[0] (1) || Variables[1] (_DamageUpTemp) || ADD || MUL || RETURN",
                      "displayLines": "({[Skill01[3]]} * (1 + _DamageUpTemp))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "{[Skill01[3]]}",
                        "_DamageUpTemp"
                      ]
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (_MaxHP) || Variables[1] ({[Skill01[1]]}) || MUL || RETURN",
                      "displayLines": "(_MaxHP * {[Skill01[1]]})",
                      "constants": [],
                      "variables": [
                        "_MaxHP",
                        "{[Skill01[1]]}"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "behaviorTag": "DirectlyLoseHpHit",
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
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
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
                "invertCondition": true
              },
              {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
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
              "modifier": "<a class=\"gModGreen\" id=\"-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
              "valuePerStack": {
                "MDF_DamagePercentage": {
                  "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[1]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[1]]}"
                  ]
                },
                "MDF_DamageHpAddedRatio": {
                  "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill01[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill01[0]]}"
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"189344788\">Monster_W4_Pollux_Strengthen_EggAbsorb_FX</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"2062281585\">Monster_W4_Pollux_Strengthen_EggAbsorb</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_Ability01_Part01": {
      "fileName": "4014033_Monster_W4_Pollux_Ability01_Part01",
      "childAbilityList": [
        "4014033_Monster_W4_Pollux_Ability01_Part01",
        "4014033_Monster_W4_Pollux_Ability01_Part02",
        "4014033_Monster_W4_Pollux_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_W4_Pollux_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "4014033_Monster_W4_Pollux_PassiveAbility_BGM": {
      "fileName": "4014033_Monster_W4_Pollux_PassiveAbility_BGM",
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
          "modifier": "<a class=\"gModGreen\" id=\"715173654\">Enemy_W4_Pollux_ResetStageBGM</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__715173654\">Enemy_W4_Pollux_ResetStageBGM</a>",
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
              "eventTrigger": "New Enemy Wave",
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
    "4014033_Modifiers": {
      "fileName": "4014033_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1292838645\">Modifier_Monster_W4_Pollux_B_HardLockHp</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": {
                    "operator": "Variables[0] (MDF_LockHp) || RETURN",
                    "displayLines": "MDF_LockHp",
                    "constants": [],
                    "variables": [
                      "MDF_LockHp"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-460415799\">Modifier_StageSpecialAbility_MuteBreak</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Assign Advance/Delay to Current Ability Use",
                      "adjustmentValue": -1,
                      "adjustmentType": "Advance"
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "set": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "set": 0
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_IsStoryTri",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 99
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
                        "name": "Skill Name",
                        "skillName": "Skill03"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1408,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Phainon"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1398737430\">Modifier_StageSpecialAbility_SoftRage</a>",
                      "valuePerStack": {
                        "MDF_DamageAddedRatio": {
                          "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                          "displayLines": "{[Skill01[4]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill01[4]]}"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_LockHp"
          ],
          "latentQueue": [
            "IsNeedFade",
            "AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1324293112\">Modifier_Monster_W4_Pollux_B_HardLockHp_BFAbility05</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": {
                    "operator": "Variables[0] (MDF_LockHp) || RETURN",
                    "displayLines": "MDF_LockHp",
                    "constants": [],
                    "variables": [
                      "MDF_LockHp"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_LockHp"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1099423808\">W4_Pollux_BattleScore3</a>",
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "ID": 1407,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Castorice"
                      },
                      {
                        "name": "Character ID",
                        "ID": 1407,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}.[[getSummoner]]"
                        },
                        "characterName": "Castorice"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Resting in the Cocoon",
                          "desc": "Use ally character Castorice to deal the final blow against \"Pollux, Netherwing Husk, Ferry of Souls\"",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1116201427\">W4_Pollux_BattleScore2</a>",
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team(Exclude Memosprites)}}"
                  },
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">=",
                    "value2": 0.5
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_CheckAvatarHpRatio2",
                      "value": 1
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
                    "value1": "_CheckAvatarHpRatio2",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Half-Life",
                          "desc": "Defeat \"Pollux, Netherwing Husk, Ferry of Souls\" while all ally characters' Max HP percentage is below #1%",
                          "rarity": "Low",
                          "params": [
                            50
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
          "for": "<a class=\"gModGreen\" id=\"mod__1132979046\">W4_Pollux_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill06"
                      },
                      {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Player Team(Exclude Memosprites)}}"
                            },
                            {
                              "name": "Target Filter",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-84648127\">Monster_W4_Pollux_BloodRange</a>[<span class=\"descriptionNumberColor\">Indulging Slumber</span>]"
                              }
                            }
                          ]
                        },
                        "compareType": "=",
                        "value2": 0,
                        "livingTargets": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "After Death... There Will Be No Eternal Sleep",
                          "desc": "When \"Pollux, Netherwing Husk, Ferry of Souls\" uses \"Death Wishes For More Death,\" no ally characters enter the \"Indulging Slumber\" state",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1061433740\">Monster_W4_Pollux_StoryMode_SpecailAbility05</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W4_Pollux_SpecailAbility05",
                  "priorityTag": "MonsterChangePhase",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_StorySkill05",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.000010000076
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "AIFlag",
            "StoryMode",
            "_StorySkill05"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2024056044\">Monster_W4_Pollux_ThirstBlood</a>[<span class=\"descriptionNumberColor\">Hastened Death</span>]",
          "stackType": "Replace",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetMaxHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetCurrentHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || Constants[0] (1) || Variables[1] (_TargetCurrentHp) || Variables[2] (_TargetMaxHp) || DIV || Variables[3] (MDF_DamageHpAddedRatio) || MUL || ADD || MUL || RETURN",
                      "displayLines": "(MDF_DamagePercentage * (1 + ((_TargetCurrentHp / _TargetMaxHp) * MDF_DamageHpAddedRatio)))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "MDF_DamagePercentage",
                        "_TargetCurrentHp",
                        "_TargetMaxHp",
                        "MDF_DamageHpAddedRatio"
                      ]
                    },
                    "cantKill": true,
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetMaxHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetCurrentHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "operator": "Variables[0] (MDF_DamagePercentage) || Constants[0] (1) || Variables[1] (_TargetCurrentHp) || Variables[2] (_TargetMaxHp) || DIV || Variables[3] (MDF_DamageHpAddedRatio) || MUL || ADD || MUL || RETURN",
                      "displayLines": "(MDF_DamagePercentage * (1 + ((_TargetCurrentHp / _TargetMaxHp) * MDF_DamageHpAddedRatio)))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "MDF_DamagePercentage",
                        "_TargetCurrentHp",
                        "_TargetMaxHp",
                        "MDF_DamageHpAddedRatio"
                      ]
                    },
                    "cantKill": true,
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MDF_DamagePercentage",
            "MDF_DamageHpAddedRatio"
          ],
          "latentQueue": [],
          "description": "Receives DMG at the start of the turn. The higher the target's current HP percentage, the more DMG they receive. This DMG is \"Non-fatal.\"",
          "type": "Debuff",
          "effectName": "DoT",
          "statusName": "Hastened Death",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1688517080\">Enemy_W4_Pollux_Endurance</a>",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-289587260\">Monster_W4_Pollux_StoryMode_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "EndCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "StunCheck",
                        "compareType": "=",
                        "value2": 0
                      },
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "StunCheck02",
                          "value": 1
                        }
                      ]
                    },
                    {
                      "name": "Remove Modifier Behavior Flag(s)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}} + {{Caster's Minions}}"
                      },
                      "flagNames": []
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"891735658\">Monster_W4_Pollux_DisableAction</a>"
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}} + {{Caster's Minions}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1688517080\">Enemy_W4_Pollux_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "EndCheck"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Pollux_EndInsert_Part01",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_StorySimulationSpeed",
            "AIFlag",
            "StoryMode"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-720682465\">Monster_W4_Pollux_PartController_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "Waiting for Healing in Limbo",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "InsertCheck",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "StunCheck",
                        "compareType": "=",
                        "value2": 0
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1688517080\">Enemy_W4_Pollux_Endurance</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Pollux_PassiveAbility_Insert",
                      "priorityTag": "MonsterChangePhase",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ],
              "priorityLevel": -90
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_WorldLevel"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1861751766\">Monster_W4_Pollux_PartStrong</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__931855053\">Monster_W4_Pollux_Fatigue</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                      "value": "_FatigueRatio"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-84648127\">Monster_W4_Pollux_BloodRange</a>[<span class=\"descriptionNumberColor\">Indulging Slumber</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "RemoveWhenCasterUnstage"
          ],
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
                  "modifier": "<a class=\"gModGreen\" id=\"931855053\">Monster_W4_Pollux_Fatigue</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetCurrentHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ShowValue1",
                  "value": {
                    "operator": "Constants[0] (1) || Variables[0] (_TargetCurrentHp) || Variables[1] (_TargetMaxHP) || DIV || Variables[2] (_HpLimitRatio) || DIV || SUB || Variables[3] (_FatigueRatio) || MUL || RETURN",
                    "displayLines": "((1 - ((_TargetCurrentHp / _TargetMaxHP) / _HpLimitRatio)) * _FatigueRatio)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "_TargetCurrentHp",
                      "_TargetMaxHP",
                      "_HpLimitRatio",
                      "_FatigueRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ShowValue2",
                  "value": {
                    "operator": "Variables[0] (_TargetMaxHP) || Variables[1] (_HpLimitRatio) || MUL || RETURN",
                    "displayLines": "(_TargetMaxHP * _HpLimitRatio)",
                    "constants": [],
                    "variables": [
                      "_TargetMaxHP",
                      "_HpLimitRatio"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"931855053\">Monster_W4_Pollux_Fatigue</a>",
                  "valuePerStack": {
                    "_FatigueRatio": {
                      "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                      "displayLines": "MDF_ShowValue1",
                      "constants": [],
                      "variables": [
                        "MDF_ShowValue1"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ShowValue1",
                  "value": {
                    "operator": "Variables[0] (MDF_ShowValue1) || Constants[0] (0.01) || ADD || RETURN",
                    "displayLines": "(MDF_ShowValue1 + 0.01)",
                    "constants": [
                      0.01
                    ],
                    "variables": [
                      "MDF_ShowValue1"
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
                    "value1": "CurrentHP%",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (_HpLimitRatio) || RETURN",
                      "displayLines": "_HpLimitRatio",
                      "constants": [],
                      "variables": [
                        "_HpLimitRatio"
                      ]
                    }
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_TargetCurrentHp",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (_HpLimitRatio) || RETURN",
                      "displayLines": "_HpLimitRatio",
                      "constants": [],
                      "variables": [
                        "_HpLimitRatio"
                      ]
                    }
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ShowValue1",
                      "value": {
                        "operator": "Constants[0] (1) || Variables[0] (_TargetCurrentHp) || Variables[1] (_TargetMaxHP) || DIV || Variables[2] (_HpLimitRatio) || DIV || SUB || Variables[3] (_FatigueRatio) || MUL || RETURN",
                        "displayLines": "((1 - ((_TargetCurrentHp / _TargetMaxHP) / _HpLimitRatio)) * _FatigueRatio)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_TargetCurrentHp",
                          "_TargetMaxHP",
                          "_HpLimitRatio",
                          "_FatigueRatio"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ShowValue2",
                      "value": {
                        "operator": "Variables[0] (_TargetMaxHP) || Variables[1] (_HpLimitRatio) || MUL || RETURN",
                        "displayLines": "(_TargetMaxHP * _HpLimitRatio)",
                        "constants": [],
                        "variables": [
                          "_TargetMaxHP",
                          "_HpLimitRatio"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"931855053\">Monster_W4_Pollux_Fatigue</a>",
                      "valuePerStack": {
                        "_FatigueRatio": {
                          "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                          "displayLines": "MDF_ShowValue1",
                          "constants": [],
                          "variables": [
                            "MDF_ShowValue1"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_ShowValue1",
                      "value": {
                        "operator": "Variables[0] (MDF_ShowValue1) || Constants[0] (0.01) || ADD || RETURN",
                        "displayLines": "(MDF_ShowValue1 + 0.01)",
                        "constants": [
                          0.01
                        ],
                        "variables": [
                          "MDF_ShowValue1"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "_HpLimitRatio",
            "_FatigueRatio"
          ],
          "latentQueue": [
            "AIFlag",
            "_WorldLevel"
          ],
          "description": "When this target deals DMG to enemy targets, decreases DMG received by enemy targets by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>. Restore HP to an ally target until it reaches <span class=\"descriptionNumberColor\">MDF_ShowValue2</span> to dispel this effect.",
          "type": "Other",
          "effectName": "DMG Reduction",
          "statusName": "Indulging Slumber"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2034261592\">Monster_W4_PolluxPart_Shield</a>[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_LifeCountTime",
                    "compareType": "=",
                    "value2": 3
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Summoner of Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1861751766\">Monster_W4_Pollux_PartStrong</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_LifeCountTime",
                  "value": 1,
                  "max": 3
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                },
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "-{[Skill04[0]]}"
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Remove Modifier Behavior Flag(s)",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "flagNames": []
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
                        "value2": 1
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 4014033,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Castorice, Hand of Shadow",
                        "isBaseCompare": true,
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Summoner of Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1861751766\">Monster_W4_Pollux_PartStrong</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            },
                            {
                              "name": "Target Filter",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"2034261592\">Monster_W4_PolluxPart_Shield</a>[<span class=\"descriptionNumberColor\">Overdue Obituary</span>]"
                              }
                            }
                          ]
                        },
                        "compareType": "=",
                        "value2": 2,
                        "livingTargets": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Summoner of Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1861751766\">Monster_W4_Pollux_PartStrong</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "\"The Living Shan't Flee\" enhances to \"The Dead Shan't Avoid.\"",
          "type": "Other",
          "effectName": "Enhance",
          "statusName": "Overdue Obituary"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__276281376\">Monster_W4_Pollux_Main_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__891735658\">Monster_W4_Pollux_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ],
          "stackData": [],
          "latentQueue": [
            "_WorldLevel"
          ],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-888665654\">Monster_W4_Pollux_Strengthen_Break</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "StunCheck",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"586169347\">Monster_W4_Pollux_Strengthen_BreakMark</a>"
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Pollux_StunRecover_Insert",
                      "priorityTag": "MonsterChangePhase",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"891735658\">Monster_W4_Pollux_DisableAction</a>"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "_WorldLevel"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__586169347\">Monster_W4_Pollux_Strengthen_BreakMark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__477176839\">Monster_W4_Pollux_GridFight_Strengthen_Shield</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_CurrentShieldValue",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase2"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "StunCheck",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"586169347\">Monster_W4_Pollux_Strengthen_BreakMark</a>"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Pollux_Stun_Insert",
                      "priorityTag": "MonsterForceKill",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 1,
                  "assignState": "False"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Anyone]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
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
                        }
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Caster's Minions}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_AttackDamageData",
                      "context": "ContextModifier"
                    },
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_AttackDamageDataMulRatio",
                      "value": "Result_FinalDamageMulRatio",
                      "context": "ContextModifier"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CurrentShieldValue",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentShieldValue) || Variables[1] (MDF_AttackDamageData) || Variables[2] (MDF_SummonerMaxHP_DownScale) || DIV || Constants[0] (1000) || DIV || Variables[3] (MDF_AttackDamageDataMulRatio) || MUL || SUB || RETURN",
                        "displayLines": "(MDF_CurrentShieldValue - (((MDF_AttackDamageData / MDF_SummonerMaxHP_DownScale) / 1000) * MDF_AttackDamageDataMulRatio))",
                        "constants": [
                          1000
                        ],
                        "variables": [
                          "MDF_CurrentShieldValue",
                          "MDF_AttackDamageData",
                          "MDF_SummonerMaxHP_DownScale",
                          "MDF_AttackDamageDataMulRatio"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_LastEnergyBarValue",
                      "value": {
                        "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                        "displayLines": "MDF_EnergyBarValue",
                        "constants": [],
                        "variables": [
                          "MDF_EnergyBarValue"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-891601506\">Monster_W4_Pollux_RLBoss_Status</a>"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "_IsAttack",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_LastEnergyBarValue_RLCheck",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_LastEnergyBarValue_RL",
                          "value": {
                            "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                            "displayLines": "MDF_EnergyBarValue",
                            "constants": [],
                            "variables": [
                              "MDF_EnergyBarValue"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_LastEnergyBarValue_RLCheck",
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
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_CurrentShieldValue",
                            "compareType": "<=",
                            "value2": 0
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"23603986\">Modifier_StageSpecialAbility_10441065_OnPollux</a>",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_EnergyBarValue",
                          "value": 0
                        },
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "healPercent": {
                            "operator": "Variables[0] (MDF_LastEnergyBarValue_RL) || Variables[1] (MDF_EnergyBarValue) || SUB || Variables[2] (MDF_SummonerMaxHP_DownScale) || MUL || Constants[0] (1000) || MUL || Variables[3] (MDF_ShieldAttack_HealRatio) || MUL || RETURN",
                            "displayLines": "((((MDF_LastEnergyBarValue_RL - MDF_EnergyBarValue) * MDF_SummonerMaxHP_DownScale) * 1000) * MDF_ShieldAttack_HealRatio)",
                            "constants": [
                              1000
                            ],
                            "variables": [
                              "MDF_LastEnergyBarValue_RL",
                              "MDF_EnergyBarValue",
                              "MDF_SummonerMaxHP_DownScale",
                              "MDF_ShieldAttack_HealRatio"
                            ]
                          },
                          "formula": "Heal from Target MaxHP"
                        },
                        "Modifier Deletes Itself"
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_EnergyBarValue",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentShieldValue) || Variables[1] (MDF_MaxShieldValue) || DIV || RETURN",
                            "displayLines": "(MDF_CurrentShieldValue / MDF_MaxShieldValue)",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentShieldValue",
                              "MDF_MaxShieldValue"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-891601506\">Monster_W4_Pollux_RLBoss_Status</a>",
                                "invertCondition": true
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "_IsAttack",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Heal",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "healPercent": {
                                "operator": "Variables[0] (MDF_LastEnergyBarValue_RL) || Variables[1] (MDF_EnergyBarValue) || SUB || Variables[2] (MDF_SummonerMaxHP_DownScale) || MUL || Constants[0] (1000) || MUL || Variables[3] (MDF_ShieldAttack_HealRatio) || MUL || RETURN",
                                "displayLines": "((((MDF_LastEnergyBarValue_RL - MDF_EnergyBarValue) * MDF_SummonerMaxHP_DownScale) * 1000) * MDF_ShieldAttack_HealRatio)",
                                "constants": [
                                  1000
                                ],
                                "variables": [
                                  "MDF_LastEnergyBarValue_RL",
                                  "MDF_EnergyBarValue",
                                  "MDF_SummonerMaxHP_DownScale",
                                  "MDF_ShieldAttack_HealRatio"
                                ]
                              },
                              "formula": "Heal from Target MaxHP"
                            }
                          ]
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                            "displayLines": "MDF_EnergyBarValue",
                            "constants": [],
                            "variables": [
                              "MDF_EnergyBarValue"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": 1
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
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_SummonerMaxHP_DownScale",
                  "value": 1000
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_MaxShieldValue",
                  "value": {
                    "operator": "Variables[0] (MDF_ShieldPercentage) || RETURN",
                    "displayLines": "MDF_ShieldPercentage",
                    "constants": [],
                    "variables": [
                      "MDF_ShieldPercentage"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentShieldValue",
                  "value": {
                    "operator": "Variables[0] (MDF_MaxShieldValue) || RETURN",
                    "displayLines": "MDF_MaxShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_MaxShieldValue"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_EnergyBarValue",
                  "value": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                    "displayLines": "MDF_EnergyBarValue",
                    "constants": [],
                    "variables": [
                      "MDF_EnergyBarValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                    "displayLines": "MDF_EnergyBarValue",
                    "constants": [],
                    "variables": [
                      "MDF_EnergyBarValue"
                    ]
                  },
                  "assignState": "True",
                  "state": "Active",
                  "trigger": "SpEff_Trigger"
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Anyone]",
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
                      "variableName": "_IsAttack",
                      "value": 1
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
                      "variableName": "_IsAttack",
                      "value": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-891601506\">Monster_W4_Pollux_RLBoss_Status</a>"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_LastEnergyBarValue_RL",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                              "displayLines": "MDF_EnergyBarValue",
                              "constants": [],
                              "variables": [
                                "MDF_EnergyBarValue"
                              ]
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_LastEnergyBarValue_RLCheck",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "healPercent": {
                            "operator": "Variables[0] (MDF_LastEnergyBarValue) || Variables[1] (MDF_EnergyBarValue) || SUB || Variables[2] (MDF_SummonerMaxHP_DownScale) || MUL || Constants[0] (1000) || MUL || Variables[3] (MDF_ShieldAttack_HealRatio) || MUL || RETURN",
                            "displayLines": "((((MDF_LastEnergyBarValue - MDF_EnergyBarValue) * MDF_SummonerMaxHP_DownScale) * 1000) * MDF_ShieldAttack_HealRatio)",
                            "constants": [
                              1000
                            ],
                            "variables": [
                              "MDF_LastEnergyBarValue",
                              "MDF_EnergyBarValue",
                              "MDF_SummonerMaxHP_DownScale",
                              "MDF_ShieldAttack_HealRatio"
                            ]
                          },
                          "formula": "Heal from Target MaxHP"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_LastEnergyBarValue_RLCheck",
                          "value": 0
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
          "for": "<a class=\"gModGreen\" id=\"mod__1873235590\">Monster_W4_Pollux_Strengthen_Shield</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_CurrentShieldValue",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase2"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "StunCheck",
                      "value": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"586169347\">Monster_W4_Pollux_Strengthen_BreakMark</a>"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_Pollux_Stun_Insert",
                      "priorityTag": "MonsterForceKill",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": 1,
                  "assignState": "False"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Anyone]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
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
                        }
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Caster's Minions}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_AttackDamageData",
                      "context": "ContextModifier"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_CurrentShieldValue",
                      "value": {
                        "operator": "Variables[0] (MDF_CurrentShieldValue) || Variables[1] (MDF_AttackDamageData) || SUB || RETURN",
                        "displayLines": "(MDF_CurrentShieldValue - MDF_AttackDamageData)",
                        "constants": [],
                        "variables": [
                          "MDF_CurrentShieldValue",
                          "MDF_AttackDamageData"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_LastEnergyBarValue",
                      "value": {
                        "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                        "displayLines": "MDF_EnergyBarValue",
                        "constants": [],
                        "variables": [
                          "MDF_EnergyBarValue"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-891601506\">Monster_W4_Pollux_RLBoss_Status</a>"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "_IsAttack",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_LastEnergyBarValue_RLCheck",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_LastEnergyBarValue_RL",
                          "value": {
                            "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                            "displayLines": "MDF_EnergyBarValue",
                            "constants": [],
                            "variables": [
                              "MDF_EnergyBarValue"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_LastEnergyBarValue_RLCheck",
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
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_CurrentShieldValue",
                            "compareType": "<=",
                            "value2": 0
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"23603986\">Modifier_StageSpecialAbility_10441065_OnPollux</a>",
                            "invertCondition": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_EnergyBarValue",
                          "value": 0
                        },
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "healPercent": {
                            "operator": "Variables[0] (MDF_LastEnergyBarValue_RL) || Variables[1] (MDF_EnergyBarValue) || SUB || Variables[2] (MDF_ShieldAttack_HealRatio) || MUL || RETURN",
                            "displayLines": "((MDF_LastEnergyBarValue_RL - MDF_EnergyBarValue) * MDF_ShieldAttack_HealRatio)",
                            "constants": [],
                            "variables": [
                              "MDF_LastEnergyBarValue_RL",
                              "MDF_EnergyBarValue",
                              "MDF_ShieldAttack_HealRatio"
                            ]
                          },
                          "formula": "Heal from Target MaxHP"
                        },
                        "Modifier Deletes Itself"
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_EnergyBarValue",
                          "value": {
                            "operator": "Variables[0] (MDF_CurrentShieldValue) || Variables[1] (MDF_MaxShieldValue) || DIV || RETURN",
                            "displayLines": "(MDF_CurrentShieldValue / MDF_MaxShieldValue)",
                            "constants": [],
                            "variables": [
                              "MDF_CurrentShieldValue",
                              "MDF_MaxShieldValue"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-891601506\">Monster_W4_Pollux_RLBoss_Status</a>",
                                "invertCondition": true
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "_IsAttack",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Heal",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "healPercent": {
                                "operator": "Variables[0] (MDF_LastEnergyBarValue_RL) || Variables[1] (MDF_EnergyBarValue) || SUB || Variables[2] (MDF_ShieldAttack_HealRatio) || MUL || RETURN",
                                "displayLines": "((MDF_LastEnergyBarValue_RL - MDF_EnergyBarValue) * MDF_ShieldAttack_HealRatio)",
                                "constants": [],
                                "variables": [
                                  "MDF_LastEnergyBarValue_RL",
                                  "MDF_EnergyBarValue",
                                  "MDF_ShieldAttack_HealRatio"
                                ]
                              },
                              "formula": "Heal from Target MaxHP"
                            }
                          ]
                        },
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                            "displayLines": "MDF_EnergyBarValue",
                            "constants": [],
                            "variables": [
                              "MDF_EnergyBarValue"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": 1
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
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_SummonerMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_MaxShieldValue",
                  "value": {
                    "operator": "Variables[0] (MDF_SummonerMaxHP) || Variables[1] (MDF_ShieldPercentage) || MUL || RETURN",
                    "displayLines": "(MDF_SummonerMaxHP * MDF_ShieldPercentage)",
                    "constants": [],
                    "variables": [
                      "MDF_SummonerMaxHP",
                      "MDF_ShieldPercentage"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_CurrentShieldValue",
                  "value": {
                    "operator": "Variables[0] (MDF_MaxShieldValue) || RETURN",
                    "displayLines": "MDF_MaxShieldValue",
                    "constants": [],
                    "variables": [
                      "MDF_MaxShieldValue"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_EnergyBarValue",
                  "value": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                    "displayLines": "MDF_EnergyBarValue",
                    "constants": [],
                    "variables": [
                      "MDF_EnergyBarValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                    "displayLines": "MDF_EnergyBarValue",
                    "constants": [],
                    "variables": [
                      "MDF_EnergyBarValue"
                    ]
                  },
                  "assignState": "True",
                  "state": "Active",
                  "trigger": "SpEff_Trigger"
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Anyone]",
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
                      "variableName": "_IsAttack",
                      "value": 1
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
                      "variableName": "_IsAttack",
                      "value": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-891601506\">Monster_W4_Pollux_RLBoss_Status</a>"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_LastEnergyBarValue_RL",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (MDF_EnergyBarValue) || RETURN",
                              "displayLines": "MDF_EnergyBarValue",
                              "constants": [],
                              "variables": [
                                "MDF_EnergyBarValue"
                              ]
                            }
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_LastEnergyBarValue_RLCheck",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "healPercent": {
                            "operator": "Variables[0] (MDF_LastEnergyBarValue) || Variables[1] (MDF_EnergyBarValue) || SUB || Variables[2] (MDF_ShieldAttack_HealRatio) || MUL || RETURN",
                            "displayLines": "((MDF_LastEnergyBarValue - MDF_EnergyBarValue) * MDF_ShieldAttack_HealRatio)",
                            "constants": [],
                            "variables": [
                              "MDF_LastEnergyBarValue",
                              "MDF_EnergyBarValue",
                              "MDF_ShieldAttack_HealRatio"
                            ]
                          },
                          "formula": "Heal from Target MaxHP"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_LastEnergyBarValue_RLCheck",
                          "value": 0
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
          "for": "<a class=\"gModGreen\" id=\"mod__1777171408\">Monster_W4_Pollux_Strengthen_SpeedAdded</a>",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                    "displayLines": "MDF_ShowValue1",
                    "constants": [],
                    "variables": [
                      "MDF_ShowValue1"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-501677850\">Monster_W4_Pollux_Strengthen_Property</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]",
          "modifierFlags": [
            "MuteBreak",
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isLock": false
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                },
                {
                  "name": "Block Advance/Delay Effects",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "whitelist": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "whitelistTag": "Mask_TurnBasedAdvance",
                  "whitelistTagType": "Bit_Decrease"
                },
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
          "description": "Before \"Pollux\" takes their next action, their Toughness cannot be reduced and is immune to action delay effects inflicted by targets.",
          "type": "Other",
          "statusName": "Weakness Protected"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}} + {{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"471853411\">Standard_Monster_AllDamageReduce</a>[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "assignState": "False"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-977406110\">Monster_W4_Pollux_BloodPool</a>[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 4014032,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Pollux, Netherwing Husk, Ferry of Souls"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_WorldLevel",
                        "compareType": "<",
                        "value2": 6
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
                      "modifier": "<a class=\"gModGreen\" id=\"1873235590\">Monster_W4_Pollux_Strengthen_Shield</a>",
                      "valuePerStack": {
                        "MDF_ShieldPercentage": {
                          "operator": "Variables[0] (UnusedUnderThisBase_71) || RETURN",
                          "displayLines": "UnusedUnderThisBase_71",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_71"
                          ]
                        },
                        "MDF_ShieldAttack_HealRatio": {
                          "operator": "Variables[0] (UnusedUnderThisBase_69) || RETURN",
                          "displayLines": "UnusedUnderThisBase_69",
                          "constants": [],
                          "variables": [
                            "UnusedUnderThisBase_69"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
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
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"477176839\">Monster_W4_Pollux_GridFight_Strengthen_Shield</a>",
                          "valuePerStack": {
                            "MDF_ShieldPercentage": {
                              "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                              "displayLines": "{[PassiveSkill02[0]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill02[0]]}"
                              ]
                            },
                            "MDF_ShieldAttack_HealRatio": {
                              "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                              "displayLines": "{[PassiveSkill02[1]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill02[1]]}"
                              ]
                            }
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
                          "modifier": "<a class=\"gModGreen\" id=\"1873235590\">Monster_W4_Pollux_Strengthen_Shield</a>",
                          "valuePerStack": {
                            "MDF_ShieldPercentage": {
                              "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                              "displayLines": "{[PassiveSkill02[0]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill02[0]]}"
                              ]
                            },
                            "MDF_ShieldAttack_HealRatio": {
                              "operator": "Variables[0] ({[PassiveSkill02[1]]}) || RETURN",
                              "displayLines": "{[PassiveSkill02[1]]}",
                              "constants": [],
                              "variables": [
                                "{[PassiveSkill02[1]]}"
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 4014033,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Castorice, Hand of Shadow",
                        "isBaseCompare": true
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
                        "modifier": "<a class=\"gModGreen\" id=\"-891601506\">Monster_W4_Pollux_RLBoss_Status</a>",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-501677850\">Monster_W4_Pollux_Strengthen_Property</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
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
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 100,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 7,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1873235590\">Monster_W4_Pollux_Strengthen_Shield</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"477176839\">Monster_W4_Pollux_GridFight_Strengthen_Shield</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1777171408\">Monster_W4_Pollux_Strengthen_SpeedAdded</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-977406110\">Monster_W4_Pollux_BloodPool</a>[<span class=\"descriptionNumberColor\">Dream of Demise</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-501677850\">Monster_W4_Pollux_Strengthen_Property</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
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
                  "name": "Define Custom Variable",
                  "variableName": "_EnergyValue",
                  "value": 0
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_EnergyValue) || RETURN",
                    "displayLines": "_EnergyValue",
                    "constants": [],
                    "variables": [
                      "_EnergyValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "maximum": 1,
                  "assignState": "True",
                  "state": "Normal",
                  "trigger": "SpEff_Trigger"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-501677850\">Monster_W4_Pollux_Strengthen_Property</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ShowValue1",
                  "value": {
                    "operator": "Variables[0] (MDF_ShowValue1) || Variables[1] (MDF_SpeedUpRatio) || ADD || RETURN",
                    "displayLines": "(MDF_ShowValue1 + MDF_SpeedUpRatio)",
                    "constants": [],
                    "variables": [
                      "MDF_ShowValue1",
                      "MDF_SpeedUpRatio"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1777171408\">Monster_W4_Pollux_Strengthen_SpeedAdded</a>",
                  "valuePerStack": {
                    "MDF_ShowValue1": {
                      "operator": "Variables[0] (MDF_ShowValue1) || RETURN",
                      "displayLines": "MDF_ShowValue1",
                      "constants": [],
                      "variables": [
                        "MDF_ShowValue1"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DamageUpTemp",
                  "value": {
                    "operator": "Variables[0] (_DamageUpTemp) || Variables[1] (MDF_DamageUpRatio) || ADD || RETURN",
                    "displayLines": "(_DamageUpTemp + MDF_DamageUpRatio)",
                    "constants": [],
                    "variables": [
                      "_DamageUpTemp",
                      "MDF_DamageUpRatio"
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
                    "value1": "_DamageUpTemp",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"946339673\">Monster_W1_CocoliaP1_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "valuePerStack": {
                        "MDF_DamageUpRatio_PerLayer": {
                          "operator": "Variables[0] (MDF_DamageUpRatio) || RETURN",
                          "displayLines": "MDF_DamageUpRatio",
                          "constants": [],
                          "variables": [
                            "MDF_DamageUpRatio"
                          ]
                        }
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
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 4014033,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Castorice, Hand of Shadow",
                    "isBaseCompare": true
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span> at the end of each turn. Attacks against \"Castorice, Hand of Shadow\" or \"The Long Arms of Sorrow\" can reduce \"Desperate Bubble\" and restore allies' HP. When \"Desperate Bubble\" depletes, dispels \"Fragrance of Death.\""
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            }
          ],
          "stackData": [
            "MDF_ShowValue1",
            "MDF_SpeedUpRatio"
          ],
          "latentQueue": [
            "AIFlag",
            "_WorldLevel"
          ],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_ShowValue1</span>. Attacks against \"Pollux\" or \"The Long Arms of Sorrow\" can reduce \"Desperate Bubble\" and restore allies' HP. When \"Desperate Bubble\" depletes, dispels \"Fragrance of Death.\"",
          "type": "Other",
          "effectName": "Enhance",
          "statusName": "Fragrance of Death"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2086497725\">Monster_W4_Pollux_EnergyBar</a>",
          "stackData": [],
          "latentQueue": [
            "AIFlag",
            "StoryMode",
            "_StorySkill05"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-977406110\">Monster_W4_Pollux_BloodPool</a>[<span class=\"descriptionNumberColor\">Dream of Demise</span>]",
          "stackData": [],
          "latentQueue": [
            "_WorldLevel",
            "AIFlag"
          ],
          "description": "When ally targets' HP reduces, accumulates \"Desperate Bubble.\" When \"Desperate Bubble\" reaches the limit, this unit action advances and enters \"Fragrance of Death\" state in the next turn.",
          "type": "Other",
          "statusName": "Dream of Demise"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1924886096\">Monster_W4_Pollux_Ability03_Mark</a>",
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__599310144\">Monster_W4_Pollux_FX_Ground</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "IsNeedFade",
                    "compareType": "=",
                    "value2": 0
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "IsNeedFade",
                    "compareType": "=",
                    "value2": 0
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "StoryMode",
            "_StorySetSpeed",
            "_StorySimulationSpeed",
            "IsNeedFade",
            "AIFlag"
          ]
        }
      ],
      "references": []
    },
    "4014033_Functions": {
      "fileName": "4014033_Functions",
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
          "functionName": "<a class=\"gTempYellow\" id=\"fun__189344788\">Monster_W4_Pollux_Strengthen_EggAbsorb_FX</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2086497725\">Monster_W4_Pollux_EnergyBar</a>"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__2062281585\">Monster_W4_Pollux_Strengthen_EggAbsorb</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1709215218\">Monster_W4_Pollux_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2086497725\">Monster_W4_Pollux_EnergyBar</a>"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (_EnergyValue) || RETURN",
                    "displayLines": "_EnergyValue",
                    "constants": [],
                    "variables": [
                      "_EnergyValue"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "maximum": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Tutorial",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Tutorial",
                      "value": 1
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
    "4014033_BE_BattleEvents": {
      "fileName": "4014033_BE_BattleEvents",
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
          "ID": 60026,
          "team": "Player Team",
          "eventType": "Assist",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
              "value": 100
            }
          ],
          "eventSpeed": 100,
          "hardLevelEvent": true,
          "eliteGroup": true
        }
      ],
      "references": []
    }
  }
}