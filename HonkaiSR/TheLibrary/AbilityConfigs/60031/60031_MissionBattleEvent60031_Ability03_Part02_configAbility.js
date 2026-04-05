const configAbility = {
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
          "priorityTag": "EnemyAttackFromSelf",
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
}