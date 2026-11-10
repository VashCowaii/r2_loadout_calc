const configAbility = {
  "fileName": "2004013_Monster_W2_Kafka_IF02_Passive01",
  "childAbilityList": [
    "2004013_Monster_W2_Kafka_IF02_Passive01"
  ],
  "skillTrigger": "PassiveSkill01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Preload Battle Event(s)",
      "beID": [
        20005
      ]
    },
    {
      "name": "Add Battle Event",
      "eventID": 20005,
      "variables": null,
      "whenCreated": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1519530085\">Monster_W2_Kafka_IF02_BattleEventSummon</a>"
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1004356166\">Monster_W2_Kafka_IF02_ListenMonsterActionModifier</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1644855766\">Monster_W2_Kafka_IF02_BreakListen</a>"
    },
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
      "variableName": "DisPelCount",
      "scope": "TargetEntity"
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
      "modifier": "<a class=\"gModGreen\" id=\"781148168\">Monster_W2_Kafka_IF_HPRatioTriggerAOE</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-857035022\">Monster_W2_Kafka_IF_Pursuit</a>"
    },
    {
      "name": "Boss Bar Display",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "show": true
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1659045581\">Monster_W2_Kafka_IF02_PartController</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1086358837\">Monster_W2_Kafka_IF_Power</a>",
      "valuePerStack": {
        "MDF_DamageUpRatio_PerLayer": {
          "displayLines": "{[PassiveSkill02[0]]}"
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"593237238\">Monster_W2_Kafka_IF_LowHP</a>",
      "valuePerStack": {
        "MDF_LowHPRatio": {
          "displayLines": "{[PassiveSkill02[1]]}"
        }
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"651865792\">Monster_IF_BOSS_Standard_BreakBonus</a>"
    }
  ],
  "whenAdded": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  },
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
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MDF_HasTarget"
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
                  "value": 1,
                  "variableName": "MDF_HasTarget"
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
                      "variableName": "AIFlag",
                      "resetValue": 3,
                      "scope": "TargetEntity"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_HasTarget"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "JustinBreak"
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
      ]
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
      "for": "<a class=\"gModGreen\" id=\"mod__-680193995\">Monster_W2_Kafka_IF02_BreakBebuff</a>",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "statValue": 3
            }
          ]
        }
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
              "value": 1,
              "variableName": "JustinBreak"
            }
          ]
        }
      ]
    }
  ]
}