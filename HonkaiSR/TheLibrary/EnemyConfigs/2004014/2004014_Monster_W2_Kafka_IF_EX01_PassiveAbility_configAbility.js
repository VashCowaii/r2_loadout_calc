const configAbility = {
  "fileName": "2004014_Monster_W2_Kafka_IF_EX01_PassiveAbility",
  "skillTrigger": "SkillEX01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HardLevel",
        "compareType": ">=",
        "value2": 1
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
          "modifier": "<a class=\"gModGreen\" id=\"-243559524\">Enemy_W2_Kafka_IF_WeaknessSplit</a>",
          "valuePerStack": {
            "MDF_MaxSummonNum": 2,
            "MDF_StanceWeaknessList": 1725,
            "_CurrWeaknessList": 1725
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-916114620\">Enemy_W2_Kafka_IF_AssistController</a>",
          "valuePerStack": {
            "MDF_DotMaxCount": {
              "operator": "Variables[0] ({[SkillIF01[0]]}) || RETURN",
              "displayLines": "{[SkillIF01[0]]}",
              "constants": [],
              "variables": [
                "{[SkillIF01[0]]}"
              ]
            },
            "MDF_DotConsume": {
              "operator": "Variables[0] ({[SkillIF01[1]]}) || RETURN",
              "displayLines": "{[SkillIF01[1]]}",
              "constants": [],
              "variables": [
                "{[SkillIF01[1]]}"
              ]
            },
            "MDF_DotCurCount": {
              "operator": "Variables[0] ({[SkillIF01[3]]}) || RETURN",
              "displayLines": "{[SkillIF01[3]]}",
              "constants": [],
              "variables": [
                "{[SkillIF01[3]]}"
              ]
            }
          }
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-916114620\">Enemy_W2_Kafka_IF_AssistController</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase] [Anyone]",
          "execute": [
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
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_DotCurCount",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (MDF_DotMaxCount) || RETURN",
                    "displayLines": "MDF_DotMaxCount",
                    "constants": [],
                    "variables": [
                      "MDF_DotMaxCount"
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
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_DotCurCount",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_DotConsume) || RETURN",
                      "displayLines": "MDF_DotConsume",
                      "constants": [],
                      "variables": [
                        "MDF_DotConsume"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_DotCurCount",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (MDF_DotMaxCount) || RETURN",
                      "displayLines": "MDF_DotMaxCount",
                      "constants": [],
                      "variables": [
                        "MDF_DotMaxCount"
                      ]
                    }
                  },
                  {
                    "name": "Is Entity a Battle Event/Summon",
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
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-689878752\">Monster_W2_Kafka_IF03_SummonKillBonus01</a>[<span class=\"descriptionNumberColor\">Madden</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-639545895\">Monster_W2_Kafka_IF03_SummonKillBonus02</a>[<span class=\"descriptionNumberColor\">Madden</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-656323514\">Monster_W2_Kafka_IF03_SummonKillBonus03</a>[<span class=\"descriptionNumberColor\">Madden</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-605990657\">Monster_W2_Kafka_IF03_SummonKillBonus04</a>[<span class=\"descriptionNumberColor\">Madden</span>]",
                        "invertCondition": true
                      },
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
                        "flagName": "DisableAction",
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
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Kafka_AbilityIF01_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "MonsterInsertAttackSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_DotCurCount",
                      "value": {
                        "operator": "Variables[0] (MDF_DotConsume) || INVERT || RETURN",
                        "displayLines": "-MDF_DotConsume",
                        "constants": [],
                        "variables": [
                          "MDF_DotConsume"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] (MDF_DotMaxCount) || RETURN",
                        "displayLines": "MDF_DotMaxCount",
                        "constants": [],
                        "variables": [
                          "MDF_DotMaxCount"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_DotCurCount",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_DotConsume) || RETURN",
                      "displayLines": "MDF_DotConsume",
                      "constants": [],
                      "variables": [
                        "MDF_DotConsume"
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_DotCurCount",
                    "compareType": "=",
                    "value2": {
                      "operator": "Variables[0] (MDF_DotMaxCount) || RETURN",
                      "displayLines": "MDF_DotMaxCount",
                      "constants": [],
                      "variables": [
                        "MDF_DotMaxCount"
                      ]
                    }
                  },
                  {
                    "name": "Is Entity a Battle Event/Summon",
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
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break",
                        "invertCondition": true
                      },
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
                        "flagName": "DisableAction",
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
                      "name": "Inject Ability Use",
                      "abilityName": "Monster_W2_Kafka_AbilityIF01_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "MonsterInsertAttackSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_DotCurCount",
                      "value": {
                        "operator": "Variables[0] (MDF_DotConsume) || INVERT || RETURN",
                        "displayLines": "-MDF_DotConsume",
                        "constants": [],
                        "variables": [
                          "MDF_DotConsume"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] (MDF_DotMaxCount) || RETURN",
                        "displayLines": "MDF_DotMaxCount",
                        "constants": [],
                        "variables": [
                          "MDF_DotMaxCount"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [
        "MDF_DotMaxCount",
        "MDF_DotConsume",
        "MDF_DotCurCount"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1540227508\">Enemy_W2_Kafka_IF_AssistController_Save</a>[<span class=\"descriptionNumberColor\">Threads of the Puppet</span>]",
      "description": "Consumes Threads of the Puppet to apply Madden to summons.",
      "type": "Other",
      "statusName": "Threads of the Puppet"
    }
  ]
}