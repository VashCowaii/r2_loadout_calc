const configAbility = {
  "fileName": "4015020_Monster_W4_DawnsEye_01_PassiveAbilityInitiate",
  "skillTrigger": "SkillP06",
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
      "modifier": "<a class=\"gModGreen\" id=\"-459185506\">Enemy_W4_DawnsEye_01_StandbyEffect</a>"
    },
    {
      "name": "Create Enemy as Body Part",
      "partName": "Head_R",
      "value": {
        "operator": "Variables[0] (PartEntity1_MonsterID) || RETURN",
        "displayLines": "PartEntity1_MonsterID",
        "constants": [],
        "variables": [
          "PartEntity1_MonsterID"
        ]
      },
      "offset": -2,
      "linkHitByPart": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1480712068\">W4_DawnsEye_BattleScore3</a>"
    },
    {
      "name": "Create Enemy as Body Part",
      "partName": "Head_L",
      "value": {
        "operator": "Variables[0] (PartEntity3_MonsterID) || RETURN",
        "displayLines": "PartEntity3_MonsterID",
        "constants": [],
        "variables": [
          "PartEntity3_MonsterID"
        ]
      },
      "offset": 2,
      "type": 3,
      "linkHitByPart": true
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Stage ID",
        "ID": 2148,
        "compareType": "=",
        "characterName": null
      },
      "passed": [
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "advanceType": "Delay",
          "multiAdd": 1
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "advanceType": "Delay",
          "multiAdd": 99
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 401502000,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 7
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
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
      "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-752624700\">Enemy_W4_DawnsEye_01_MainStory</a>"
      },
      "failed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1186573263\">W4_DawnsEye_01_TargetChange</a>"
        }
      ]
    },
    {
      "name": "Preload Battle Event(s)",
      "eventID": [
        20015,
        60029
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "BaseAttack",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
    },
    {
      "name": "Add Battle Event",
      "teamName": "Enemy Team",
      "eventID": 20015,
      "variables": {
        "BaseAttack": {
          "operator": "Variables[0] (BaseAttack) || RETURN",
          "displayLines": "BaseAttack",
          "constants": [],
          "variables": [
            "BaseAttack"
          ]
        }
      },
      "whenCreated": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"428140510\">Enemy_W4_DawnsEye_01_BESpeed</a>",
          "valuePerStack": {
            "MDF_Speed": {
              "operator": "Variables[0] ({[SkillP07[4]]}) || RETURN",
              "displayLines": "{[SkillP07[4]]}",
              "constants": [],
              "variables": [
                "{[SkillP07[4]]}"
              ]
            }
          }
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "multiBase": {
            "operator": "Variables[0] ({[SkillP07[3]]}) || RETURN",
            "displayLines": "{[SkillP07[3]]}",
            "constants": [],
            "variables": [
              "{[SkillP07[3]]}"
            ]
          }
        },
        {
          "name": "Assign Unique Name",
          "uniqueName": "RagBattleEvent",
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
          "modifier": "<a class=\"gModGreen\" id=\"-355315499\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamageActionListener</a>",
          "valuePerStack": {
            "MDF_TotalDamageRatioAdd": {
              "operator": "Variables[0] ({[SkillP09[2]]}) || RETURN",
              "displayLines": "{[SkillP09[2]]}",
              "constants": [],
              "variables": [
                "{[SkillP09[2]]}"
              ]
            },
            "MDF_TotalDamageRatioCut": 0
          },
          "casterAssign": "CasterSelf"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 401502000,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": null
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2100215981\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamage</a>[<span class=\"descriptionNumberColor\">Black Tide Sync Rate</span>]",
          "valuePerStack": {
            "MDF_TotalDamageRatio": {
              "operator": "Variables[0] ({[SkillP09[0]]}) || Variables[1] ({[SkillP09[5]]}) || ADD || RETURN",
              "displayLines": "({[SkillP09[0]]} + {[SkillP09[5]]})",
              "constants": [],
              "variables": [
                "{[SkillP09[0]]}",
                "{[SkillP09[5]]}"
              ]
            },
            "MDF_TotalDamageRatioMin": {
              "operator": "Variables[0] ({[SkillP09[0]]}) || RETURN",
              "displayLines": "{[SkillP09[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP09[0]]}"
              ]
            },
            "MDF_TotalDamageRatioMax": {
              "operator": "Variables[0] ({[SkillP09[1]]}) || RETURN",
              "displayLines": "{[SkillP09[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP09[1]]}"
              ]
            },
            "MDF_BaseAttack": {
              "operator": "Variables[0] (BaseAttack) || RETURN",
              "displayLines": "BaseAttack",
              "constants": [],
              "variables": [
                "BaseAttack"
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
          "modifier": "<a class=\"gModGreen\" id=\"-2100215981\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamage</a>[<span class=\"descriptionNumberColor\">Black Tide Sync Rate</span>]",
          "valuePerStack": {
            "MDF_TotalDamageRatio": {
              "operator": "Variables[0] ({[SkillP09[0]]}) || RETURN",
              "displayLines": "{[SkillP09[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP09[0]]}"
              ]
            },
            "MDF_TotalDamageRatioMin": {
              "operator": "Variables[0] ({[SkillP09[0]]}) || RETURN",
              "displayLines": "{[SkillP09[0]]}",
              "constants": [],
              "variables": [
                "{[SkillP09[0]]}"
              ]
            },
            "MDF_TotalDamageRatioMax": {
              "operator": "Variables[0] ({[SkillP09[1]]}) || RETURN",
              "displayLines": "{[SkillP09[1]]}",
              "constants": [],
              "variables": [
                "{[SkillP09[1]]}"
              ]
            },
            "MDF_BaseAttack": {
              "operator": "Variables[0] (BaseAttack) || RETURN",
              "displayLines": "BaseAttack",
              "constants": [],
              "variables": [
                "BaseAttack"
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
      "modifier": "<a class=\"gModGreen\" id=\"-355315499\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamageActionListener</a>",
      "valuePerStack": {
        "MDF_TotalDamageRatioAdd": {
          "operator": "Variables[0] ({[SkillP09[2]]}) || RETURN",
          "displayLines": "{[SkillP09[2]]}",
          "constants": [],
          "variables": [
            "{[SkillP09[2]]}"
          ]
        },
        "MDF_TotalDamageRatioCut": 0
      }
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All(with Unselectable)}}"
      },
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value": "MonsterType_W4_BossPart"
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1807935838\">Enemy_W4_DawnsEye_PartController</a>",
          "casterAssign": "CasterSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 4015021,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Hyacinthia, Eye of Twilight",
            "isBaseCompare": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1459512555\">Enemy_W4_DawnsEye_B_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
              "casterAssign": "CasterSelf"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
              "casterAssign": "CasterSelf"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-355315499\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamageActionListener</a>",
          "valuePerStack": {
            "MDF_TotalDamageRatioAdd": 0,
            "MDF_TotalDamageRatioCut": {
              "operator": "Variables[0] ({[SkillP09[3]]}) || RETURN",
              "displayLines": "{[SkillP09[3]]}",
              "constants": [],
              "variables": [
                "{[SkillP09[3]]}"
              ]
            }
          },
          "casterAssign": "CasterSelf"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
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
            "ID": 401502000,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null,
            "invertCondition": true
          },
          {
            "name": "Enemy ID",
            "ID": 4015021,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Hyacinthia, Eye of Twilight",
            "invertCondition": true
          }
        ]
      },
      "passed": [
        {
          "name": "Add Battle Event",
          "teamName": "Player Team",
          "eventID": 60029,
          "variables": {
            "BaseAttack": {
              "operator": "Variables[0] (BaseAttack) || RETURN",
              "displayLines": "BaseAttack",
              "constants": [],
              "variables": [
                "BaseAttack"
              ]
            }
          },
          "whenCreated": [
            {
              "name": "Assign Unique Name",
              "uniqueName": "HealBattleEvent",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "value": {
                "operator": "Variables[0] ({[SkillP10[5]]}) || RETURN",
                "displayLines": "{[SkillP10[5]]}",
                "constants": [],
                "variables": [
                  "{[SkillP10[5]]}"
                ]
              },
              "isFixed": "* ERR"
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
      "modifier": "<a class=\"gModGreen\" id=\"1313380500\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarok</a>",
      "valuePerStack": {
        "MDF_DirtyHPBase": {
          "operator": "Variables[0] ({[SkillP07[0]]}) || RETURN",
          "displayLines": "{[SkillP07[0]]}",
          "constants": [],
          "variables": [
            "{[SkillP07[0]]}"
          ]
        },
        "MDF_BaseAttack": {
          "operator": "Variables[0] (BaseAttack) || RETURN",
          "displayLines": "BaseAttack",
          "constants": [],
          "variables": [
            "BaseAttack"
          ]
        },
        "MDF_DeathSPAdd": {
          "operator": "Variables[0] ({[SkillP07[2]]}) || RETURN",
          "displayLines": "{[SkillP07[2]]}",
          "constants": [],
          "variables": [
            "{[SkillP07[2]]}"
          ]
        }
      }
    },
    {
      "name": "Add Stage Ability",
      "abilityName": "BattleEventAbility_Monster_DawnEye_01_RognarokTrigger"
    },
    {
      "name": "Add Stage Ability",
      "abilityName": "Monster_W4_DawnsEye_01_Rognarok_Camera"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1259657295\">Enemy_W4_DawnsEye_01_BreakController</a>",
      "valuePerStack": {
        "StanceDamage": {
          "operator": "Variables[0] ({[SkillP06[2]]}) || RETURN",
          "displayLines": "{[SkillP06[2]]}",
          "constants": [],
          "variables": [
            "{[SkillP06[2]]}"
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
      "modifier": "<a class=\"gModGreen\" id=\"-105944791\">Enemy_W4_DawnsEye_01_SoundController</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-105944791\">Enemy_W4_DawnsEye_01_SoundController</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle"
        },
        {
          "eventTrigger": "Leave Battle"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1646746780\">MWMonster_W4_DawnsEye_01_PartController</a>",
      "counter": 1,
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "ChangePhase_InsertController"
            }
          ]
        },
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "MonsterType_W4_BossPart"
              },
              "ifTargetFound": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "ChangePhase_InsertController",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
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
                    "value1": "CurrentHP",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ChangePhase_InsertController",
                      "value": 1
                    },
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "silent": true
                    },
                    {
                      "name": "Set Enemy Phase",
                      "mode": "Inc"
                    },
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W4_DawnsEye_01_PassiveAbility_Insert",
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ]
    }
  ]
}