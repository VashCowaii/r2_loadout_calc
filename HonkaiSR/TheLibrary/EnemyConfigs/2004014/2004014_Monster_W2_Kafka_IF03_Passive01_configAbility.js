const configAbility = {
  "fileName": "2004014_Monster_W2_Kafka_IF03_Passive01",
  "childAbilityList": [
    "2004014_Monster_W2_Kafka_IF03_Passive01"
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
      "modifier": "<a class=\"gModGreen\" id=\"1961920728\">Monster_W2_Kafka_BattleScore1</a>"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "scope": "TargetEntity",
      "variableName": "DisPelCount"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1735231980\">Monster_W2_Kafka_IF02_Pursuit</a>"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1742511370\">Monster_W2_Kafka_IF03_PartController</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1977361532\">Monster_W2_Kafka_IF03_Summon</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-471232771\">Monster_W2_Kafka_IF03_MonsterAssistControl</a>"
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
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1808450599\">Monster_W2_Kafka_IF03_SummonControl</a>",
      "valuePerStack": {
        "MDF_WeakDMGReduceRatio": {
          "operator": "Variables[0] ({[SkillEX01[3]]}) || RETURN",
          "displayLines": "{[SkillEX01[3]]}",
          "constants": [],
          "variables": [
            "{[SkillEX01[3]]}"
          ]
        },
        "MDF_WeakStatusProbReduceRatio": {
          "operator": "Variables[0] ({[SkillEX01[4]]}) || RETURN",
          "displayLines": "{[SkillEX01[4]]}",
          "constants": [],
          "variables": [
            "{[SkillEX01[4]]}"
          ]
        },
        "MDF_WeakStanceSliceRatio": {
          "operator": "Variables[0] ({[SkillEX01[5]]}) || RETURN",
          "displayLines": "{[SkillEX01[5]]}",
          "constants": [],
          "variables": [
            "{[SkillEX01[5]]}"
          ]
        },
        "MDF_BreakDMGTokenAddRatio": {
          "operator": "Variables[0] ({[SkillEX02[1]]}) || RETURN",
          "displayLines": "{[SkillEX02[1]]}",
          "constants": [],
          "variables": [
            "{[SkillEX02[1]]}"
          ]
        },
        "MDF_BreakDelayRatio": {
          "operator": "Variables[0] ({[SkillEX02[2]]}) || RETURN",
          "displayLines": "{[SkillEX02[2]]}",
          "constants": [],
          "variables": [
            "{[SkillEX02[2]]}"
          ]
        },
        "MDF_FrenzyDMGTokenAddRatio": {
          "operator": "Variables[0] ({[SkillEX02[3]]}) || RETURN",
          "displayLines": "{[SkillEX02[3]]}",
          "constants": [],
          "variables": [
            "{[SkillEX02[3]]}"
          ]
        },
        "MDF_FrenzySpeedAddRatio": {
          "operator": "Variables[0] ({[SkillEX02[4]]}) || RETURN",
          "displayLines": "{[SkillEX02[4]]}",
          "constants": [],
          "variables": [
            "{[SkillEX02[4]]}"
          ]
        },
        "MDF_FrenzyStanceSliceRatio": {
          "operator": "Variables[0] ({[SkillEX02[5]]}) || RETURN",
          "displayLines": "{[SkillEX02[5]]}",
          "constants": [],
          "variables": [
            "{[SkillEX02[5]]}"
          ]
        },
        "MDF_StanceDMGPerTeamMate": {
          "operator": "Variables[0] ({[SkillEX02[0]]}) || RETURN",
          "displayLines": "{[SkillEX02[0]]}",
          "constants": [],
          "variables": [
            "{[SkillEX02[0]]}"
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
      "modifier": "<a class=\"gModGreen\" id=\"-1421140468\">Monster_W2_Kafka_IF03_CancelMindControlBEOnBeingBreak</a>",
      "casterAssign": "CasterSelf"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"635367509\">MModifier_Kafka_IF_BattleAlert</a>"
    }
  ],
  "whenAdded": [],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1004356166\">Monster_W2_Kafka_IF02_ListenMonsterActionModifier</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Force Entity Death",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_HasTarget",
              "value": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-98989183\">Monster_W2_Kafka_IF02_Ability08_ExecuteTag</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-995385853\">Monster_Company_Coin</a>[<span class=\"descriptionNumberColor\">Performance Points</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1555516473\">Monster_Company_Coin_Elite</a>[<span class=\"descriptionNumberColor\">Performance Points</span>]"
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_HasTarget",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-98989183\">Monster_W2_Kafka_IF02_Ability08_ExecuteTag</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_HasTarget",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "JustinBreak",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1155608240\">Monster_W2_Kafka_IF02_ContainJXDTag</a>"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 3
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_HasTarget",
                      "value": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "JustinBreak",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1961920728\">Monster_W2_Kafka_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "Modifier Cleansed [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-1307984397\">Standard_MindControl</a>[<span class=\"descriptionNumberColor\">Dominated</span>]"
                  },
                  {
                    "name": "Is Teammate",
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
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "DisPelCount",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 3
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DisPelCount",
                    "compareType": ">=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Will of Steel",
                          "desc": "In a single battle against Boss Kafka, dispel Dominated 3 times",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-376688543\">Monster_W2_Kafka_IF02_BEFrozen</a>",
      "modifierFlags": [
        "MuteSpeed"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1644855766\">Monster_W2_Kafka_IF02_BreakListen</a>",
      "execute": [
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "JustinBreak",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1421140468\">Monster_W2_Kafka_IF03_CancelMindControlBEOnBeingBreak</a>",
      "execute": [
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
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster's Battle-Events}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Battle-Events}}"
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1862927139\">Monster_W2_Kafka_RL_MindControl_True</a>[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2031893844\">Monster_W2_Kafka_RL_MindControl_TrueEffect</a>[<span class=\"descriptionNumberColor\">Psychological Suggestion Revelation</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2054484016\">Monster_W2_Kafka_RL_MindControl_False</a>[<span class=\"descriptionNumberColor\">Psychological Suggestion</span>]"
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "BattleEventFlag",
                      "value": 0
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
        "DisPelCount"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__635367509\">MModifier_Kafka_IF_BattleAlert</a>",
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
                  },
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "=",
                    "value2": 3
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "noTargetFound": [
                    {
                      "name": "Update Enemy InfoPanel"
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
                  "name": "Update Enemy InfoPanel",
                  "text": "Defeat summoned enemies to weaken the boss",
                  "type": "Warning"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "DisPelCount"
      ]
    }
  ]
}