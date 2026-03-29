const configAbility = {
  "fileName": "2034014_Monster_W2_LycanKing_IF_PassiveAbilityInitiate",
  "childAbilityList": [
    "2034014_Monster_W2_LycanKing_PassiveAbilityInitiate"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Preload Battle Event(s)",
      "eventID": [
        20018
      ]
    },
    {
      "name": "Add Battle Event",
      "teamName": "Neutral Team",
      "eventID": 20018,
      "variables": {
        "Ability03_BPRecover": {
          "operator": "Variables[0] ({[SkillP02[4]]}) || RETURN",
          "displayLines": "{[SkillP02[4]]}",
          "constants": [],
          "variables": [
            "{[SkillP02[4]]}"
          ]
        }
      },
      "whenCreated": [
        {
          "name": "Assign Unique Name",
          "uniqueName": "SelectTarget",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1613653748\">Enemy_W2_LycanKing_IF_PickUpMessage</a>"
        },
        "Show BattleEvent Button"
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-929176982\">Enemy_W2_LycanKing_IF_Command</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1543064469\">Enemy_W2_LycanKing_IF_ProtectWeaknessController</a>"
    },
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"-149187790\">Lycanking_SummonLycan</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-71943107\">Enemy_W2_LycanKing_IF_ChampionMarkHalo</a>",
      "valuePerStack": {
        "MDF_MaxLayer": {
          "operator": "Variables[0] ({[Skill08[3]]}) || RETURN",
          "displayLines": "{[Skill08[3]]}",
          "constants": [],
          "variables": [
            "{[Skill08[3]]}"
          ]
        },
        "MDF_HealPercentage": {
          "operator": "Variables[0] ({[Skill08[1]]}) || RETURN",
          "displayLines": "{[Skill08[1]]}",
          "constants": [],
          "variables": [
            "{[Skill08[1]]}"
          ]
        },
        "MDF_AllDamageTypeAddedRatio": {
          "operator": "Variables[0] ({[Skill08[4]]}) || RETURN",
          "displayLines": "{[Skill08[4]]}",
          "constants": [],
          "variables": [
            "{[Skill08[4]]}"
          ]
        },
        "MDF_DamageStancePerLayer": {
          "operator": "Variables[0] ({[Skill08[2]]}) || RETURN",
          "displayLines": "{[Skill08[2]]}",
          "constants": [],
          "variables": [
            "{[Skill08[2]]}"
          ]
        },
        "MDF_BreakDamageAddedRatioBase": {
          "operator": "Variables[0] ({[Skill08[5]]}) || RETURN",
          "displayLines": "{[Skill08[5]]}",
          "constants": [],
          "variables": [
            "{[Skill08[5]]}"
          ]
        }
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"924072592\">Enemy_W2_LycanKing_IF_AbilityEX01</a>"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1587187705\">Enemy_W2_Cocolia_IF_SuperArmorController</a>",
          "valuePerStack": {
            "MDF_IF_BOSS_BreakDelay": {
              "operator": "Variables[0] ({[SkillEX01[2]]}) || RETURN",
              "displayLines": "{[SkillEX01[2]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[2]]}"
              ]
            },
            "MDF_IF_BOSS_WeaknessDMGUpRatio": {
              "operator": "Variables[0] ({[SkillEX01[1]]}) || RETURN",
              "displayLines": "{[SkillEX01[1]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[1]]}"
              ]
            },
            "MDF_IF_BOSS_Standard_Defence": {
              "operator": "Variables[0] ({[SkillEX01[0]]}) || RETURN",
              "displayLines": "{[SkillEX01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillEX01[0]]}"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1246789467\">Enemy_W2_Cocolia_IF_SoftFrenzyController</a>",
          "valuePerStack": {
            "MDF_FrenzyStartDelay": {
              "operator": "Variables[0] ({[SkillEX05[0]]}) || RETURN",
              "displayLines": "{[SkillEX05[0]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[0]]}"
              ]
            },
            "MDF_FrenzyIntervalDelay": {
              "operator": "Variables[0] ({[SkillEX05[1]]}) || RETURN",
              "displayLines": "{[SkillEX05[1]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[1]]}"
              ]
            },
            "MDF_MaxFrenzyLayer": {
              "operator": "Variables[0] ({[SkillEX05[2]]}) || RETURN",
              "displayLines": "{[SkillEX05[2]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[2]]}"
              ]
            },
            "MDF_TokenDMGAddRatioPerLayer": {
              "operator": "Variables[0] ({[SkillEX05[3]]}) || RETURN",
              "displayLines": "{[SkillEX05[3]]}",
              "constants": [],
              "variables": [
                "{[SkillEX05[3]]}"
              ]
            }
          }
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
      "variableName": "AIFlag",
      "value": 1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1019940220\">Enemy_Standard_HideMonsterHUD</a>"
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
      "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Wolf_MaxAttackCount",
      "value": {
        "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
        "displayLines": "{[SkillP01[2]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[2]]}"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1148945924\">Enemy_W2_LycanKing_IF_RageControllerV2</a>",
      "valuePerStack": {
        "MaxAttackCount": {
          "operator": "Variables[0] ({[SkillP01[2]]}) || RETURN",
          "displayLines": "{[SkillP01[2]]}",
          "constants": [],
          "variables": [
            "{[SkillP01[2]]}"
          ]
        }
      },
      "casterAssign": "TargetSelf"
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1937880260\">Enemy_W2_LycanKing_IF_RageListener</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1959235815\">Monster_W2_LycanKing_IF_Revive</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-970015149\">Enemy_W2_LycanKing_IF_HintToastController</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-970015149\">Enemy_W2_LycanKing_IF_HintToastController</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "UI Display Event",
              "popUpText": "Defeat Wolftroopers to gain enhancement"
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]"
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "UI Display Event",
              "popUpText": "Defeat Wolftroopers to gain enhancement"
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
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
                  },
                  {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Defeat Wolftroopers to gain enhancement"
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
                "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1187836177\">Enemy_W2_LycanKing_IF_BloodRageMark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1423551326\">Enemy_W2_LycanKing_IF_BloodRage</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
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
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (Wolf_AttackCount) || RETURN",
                "displayLines": "Wolf_AttackCount",
                "constants": [],
                "variables": [
                  "Wolf_AttackCount"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                "displayLines": "Wolf_MaxAttackCount",
                "constants": [],
                "variables": [
                  "Wolf_MaxAttackCount"
                ]
              },
              "assignState": "True",
              "state": "Normal"
            }
          ]
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isCountDown",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_CountDown",
                  "value": -1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                    "displayLines": "MDF_MaxCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxCount"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_CountDown) || RETURN",
                    "displayLines": "MDF_CountDown",
                    "constants": [],
                    "variables": [
                      "MDF_CountDown"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                    "displayLines": "MDF_MaxCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxCount"
                    ]
                  },
                  "assignState": "True"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_CountDown",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "BattleEventAbility_Monster_W2_LycanKing_IF_RageFinish",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterChangeState",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
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
                        "value1": "MDF_CountDown",
                        "compareType": "<=",
                        "value2": 3
                      }
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
                    "value1": "MDF_CountDown",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 5
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
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isCountDown",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1187836177\">Enemy_W2_LycanKing_IF_BloodRageMark</a>"
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
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_MaxCount",
                  "value": {
                    "operator": "Variables[0] ({[SkillP02[0]]}) || RETURN",
                    "displayLines": "{[SkillP02[0]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP02[0]]}"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_MaxCount",
                  "value": {
                    "operator": "Variables[0] ({[SkillP02[1]]}) || RETURN",
                    "displayLines": "{[SkillP02[1]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP02[1]]}"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CountDown",
              "value": {
                "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                "displayLines": "MDF_MaxCount",
                "constants": [],
                "variables": [
                  "MDF_MaxCount"
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_CountDown) || RETURN",
                "displayLines": "MDF_CountDown",
                "constants": [],
                "variables": [
                  "MDF_CountDown"
                ]
              },
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "maximum": {
                "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                "displayLines": "MDF_MaxCount",
                "constants": [],
                "variables": [
                  "MDF_MaxCount"
                ]
              },
              "assignState": "True"
            }
          ]
        },
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
                    "team": "Player Team"
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Character"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "BattleEventAbility_Monster_W2_LycanKing_IF_RageFinish",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "MonsterChangeState",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1187836177\">Enemy_W2_LycanKing_IF_BloodRageMark</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "sourceTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] ({[SkillP02[3]]}) || RETURN",
                    "displayLines": "{[SkillP02[3]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP02[3]]}"
                    ]
                  },
                  "roundDMG": true,
                  "attackType": "Pursued",
                  "DamageType": {
                    "name": "Damage Type Source",
                    "sourceType": "Thunder"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1187836177\">Enemy_W2_LycanKing_IF_BloodRageMark</a>"
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
                "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
              },
              "failed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_CountDown",
                  "value": -1,
                  "max": {
                    "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                    "displayLines": "MDF_MaxCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxCount"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_CountDown) || RETURN",
                    "displayLines": "MDF_CountDown",
                    "constants": [],
                    "variables": [
                      "MDF_CountDown"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                    "displayLines": "MDF_MaxCount",
                    "constants": [],
                    "variables": [
                      "MDF_MaxCount"
                    ]
                  },
                  "assignState": "True"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isCountDown",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_CountDown",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "BattleEventAbility_Monster_W2_LycanKing_IF_RageFinish",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "priorityTag": "MonsterChangeState",
                      "canHitNonTargets": true,
                      "allowAbilityTriggers": false
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
                        "value1": "MDF_CountDown",
                        "compareType": "<=",
                        "value2": 3
                      }
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
                    "value1": "MDF_CountDown",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AIFlag",
                      "value": 5
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
            }
          ]
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__327803157\">Enemy_W2_LycanKing_IF_RageStatusPhase2</a>[<span class=\"descriptionNumberColor\">Full Moon's Furor</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"268414254\">W2_LycanKing_BattleScore2Mark</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-535542021\">W2_LycanKing_BattleScore2</a>"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"268414254\">W2_LycanKing_BattleScore2Mark</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 1
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"348054271\">Enemy_W2_LycanKing_IF_ReactionModel</a>"
            }
          ]
        },
        {
          "eventTrigger": "Turn Start [Anyone]",
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isSetActionDelay",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "set": {
                    "operator": "Variables[0] (MDF_SpeedUpRatio) || RETURN",
                    "displayLines": "MDF_SpeedUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedUpRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isSetActionDelay",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Owner][?]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_isSetActionDelay",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
              },
              "passed": [
                "Modifier Deletes Itself"
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-2068184553\">Enemy_W2_LycanKing_RageEffect</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Enters the \"Lunar Devourer\" state and gains immunity to action delay effects from targets. While in this state, Hoolay gains \"Irate\" and can use \"Lupine Chase Calls Bloody Gleam.\" This state will be removed when this unit is Weakness Broken.",
      "type": "Buff",
      "effectName": "Entering the \"Full Moon's Furor\" state",
      "statusName": "Full Moon's Furor"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__609854366\">Enemy_W2_LycanKing_IF_RageStatus</a>[<span class=\"descriptionNumberColor\">Full Moon's Furor</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"268414254\">W2_LycanKing_BattleScore2Mark</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-535542021\">W2_LycanKing_BattleScore2</a>"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"268414254\">W2_LycanKing_BattleScore2Mark</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 1
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"348054271\">Enemy_W2_LycanKing_IF_ReactionModel</a>"
            }
          ]
        },
        {
          "eventTrigger": "Turn Start [Anyone]",
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_isSetActionDelay",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "set": {
                    "operator": "Variables[0] (MDF_SpeedUpRatio) || RETURN",
                    "displayLines": "MDF_SpeedUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedUpRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_isSetActionDelay",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Action Phase Start [Owner][?]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_isSetActionDelay",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "When Losing Modifier [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
              },
              "passed": [
                "Modifier Deletes Itself"
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-2068184553\">Enemy_W2_LycanKing_RageEffect</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-2068184553\">Enemy_W2_LycanKing_RageEffect</a>"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Enters the \"Lunar Devourer\" state and gains immunity to action delay effects from targets. While in this state, Hoolay gains \"Irate\" and can use \"Lupine Chase Calls Bloody Gleam.\" This state will be removed when this unit is Weakness Broken.",
      "type": "Buff",
      "effectName": "Entering the \"Full Moon's Furor\" state",
      "statusName": "Full Moon's Furor"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1937880260\">Enemy_W2_LycanKing_IF_RageListener</a>",
      "stackType": "Replace",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
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
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__167"
                  },
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
                  "modifier": "<a class=\"gModGreen\" id=\"1045160712\">Enemy_W2_LycanKing_IF_RageStatusEnhance</a>",
                  "valuePerStack": {
                    "MDF_SpeedAddRatio": {
                      "operator": "Variables[0] ({[SkillP03[0]]}) || RETURN",
                      "displayLines": "{[SkillP03[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP03[0]]}"
                      ]
                    }
                  },
                  "casterAssign": "CasterSelf"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1736159544\">Enemy_W2_Lycan_RageStatus</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}} + {{Enemy Team Unselectables}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Check Boolean Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "ENEMIES_OBJECT_UNUSED__167"
                    }
                  }
                ]
              }
            },
            {
              "name": "Destroy Battle Entity",
              "target": {
                "name": "Add Target by Unique Identifier",
                "identifier": "SelectTarget"
              }
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__167"
                  },
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
                  "modifier": "<a class=\"gModGreen\" id=\"1045160712\">Enemy_W2_LycanKing_IF_RageStatusEnhance</a>",
                  "valuePerStack": {
                    "MDF_SpeedAddRatio": {
                      "operator": "Variables[0] ({[SkillP03[0]]}) || RETURN",
                      "displayLines": "{[SkillP03[0]]}",
                      "constants": [],
                      "variables": [
                        "{[SkillP03[0]]}"
                      ]
                    }
                  },
                  "casterAssign": "CasterSelf"
                }
              ]
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
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1736159544\">Enemy_W2_Lycan_RageStatus</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "AIFlag",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"348054271\">Enemy_W2_LycanKing_IF_ReactionModel</a>"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1370655977\">Enemy_W2_LycanKing_MainStoryPhase2Mark</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__170",
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
                      "modifier": "<a class=\"gModGreen\" id=\"609854366\">Enemy_W2_LycanKing_IF_RageStatus</a>[<span class=\"descriptionNumberColor\">Full Moon's Furor</span>]",
                      "valuePerStack": {
                        "MDF_SpeedUpRatio": {
                          "operator": "Variables[0] ({[SkillP01[0]]}) || RETURN",
                          "displayLines": "{[SkillP01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP01[0]]}"
                          ]
                        },
                        "MDF_SpeedUpRatioPerWolf": {
                          "operator": "Variables[0] ({[SkillP03[0]]}) || RETURN",
                          "displayLines": "{[SkillP03[0]]}",
                          "constants": [],
                          "variables": [
                            "{[SkillP03[0]]}"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1423551326\">Enemy_W2_LycanKing_IF_BloodRage</a>"
                    }
                  ],
                  "failed": [
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
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1370655977\">Enemy_W2_LycanKing_MainStoryPhase2Mark</a>"
                          },
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__170"
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
                          "modifier": "<a class=\"gModGreen\" id=\"327803157\">Enemy_W2_LycanKing_IF_RageStatusPhase2</a>[<span class=\"descriptionNumberColor\">Full Moon's Furor</span>]",
                          "valuePerStack": {
                            "MDF_SpeedUpRatio": {
                              "operator": "Variables[0] ({[SkillP01[3]]}) || RETURN",
                              "displayLines": "{[SkillP01[3]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP01[3]]}"
                              ]
                            },
                            "MDF_SpeedUpRatioPerWolf": {
                              "operator": "Variables[0] ({[SkillP03[0]]}) || RETURN",
                              "displayLines": "{[SkillP03[0]]}",
                              "constants": [],
                              "variables": [
                                "{[SkillP03[0]]}"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1423551326\">Enemy_W2_LycanKing_IF_BloodRage</a>"
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
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__348054271\">Enemy_W2_LycanKing_IF_ReactionModel</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
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
            }
          ]
        },
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
          "eventTrigger": "Action Phase Start [Owner][?]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "conditions": {
                "name": "Is Entity Type",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "type": "Character"
              },
              "ifTargetFound": [
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "set": 0
                },
                {
                  "name": "Advance/Delay up to Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}.[[getAttachedSummon]] - {{Parameter Target}}.[[getAttachedSummon]].[[removeBattleEventsFromOthers]]"
                  },
                  "targetRef": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "refPoint": "After",
                  "isStartingAV": true
                },
                {
                  "name": "Advance/Delay up to Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}.[[getMemosprite]]"
                  },
                  "targetRef": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "refPoint": "After",
                  "isStartingAV": true
                },
                {
                  "name": "Advance/Delay up to Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}.[[getAttachedSummon]].[[removeBattleEventsFromOthers]]"
                  },
                  "targetRef": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "refPoint": "After",
                  "isStartingAV": true
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: Start [Owner]"
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-929176982\">Enemy_W2_LycanKing_IF_Command</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Team Action",
              "conditionsActor": {
                "name": "OR",
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
              "conditionsTarget": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"659682696\">Enemy_W2_LycanKing_IF_PickUpMark</a>"
              },
              "abilityName": "LycanKingCommand"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1613653748\">Enemy_W2_LycanKing_IF_PickUpMessage</a>",
      "execute": [
        {
          "eventTrigger": "Ultimate Prep-Phase [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}