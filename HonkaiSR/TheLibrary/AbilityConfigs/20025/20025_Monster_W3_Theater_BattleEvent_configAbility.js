const configAbility = {
  "fileName": "20025_Monster_W3_Theater_BattleEvent",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-429378171\">Enemy_W3_Theater_BattleEvent</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-429378171\">Enemy_W3_Theater_BattleEvent</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Turn [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;",
                    "compareType": "<=",
                    "value2": 4
                  },
                  {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "TheaterCore"
                    },
                    "variableName": "Theater_Rogue"
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
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
                    "variableName": "ENEMIES_OBJECT_UNUSED__114"
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"614869660\">MModifier_Monster_W3_TV_02_Side1</a>[<span class=\"descriptionNumberColor\">Off-Class Channel</span>]"
                      }
                    ]
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_Monster_W3_Theater_Insert_RestartPhase2",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "EnemyChangeState",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ],
              "noTargetFound": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Check Boolean Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "MonsterType_W3_Dinosaur_00"
                        }
                      }
                    ]
                  },
                  "ability": "Monster_W3_Dinosaur_02_Ultimate_Part00",
                  "isTrigger": true
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Add Target by Unique Identifier",
                    "identifier": "TheaterCore"
                  },
                  "value": 1,
                  "variableName": "W3_Theater_00_BattleScore1_Flag"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-618537723\">Enemy_Monster_W3_Theater_Part02Recover</a>"
                },
                "Wait for Pending Ability Completions",
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "variableName": "MonsterType_W1_Mecha01_02"
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
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedOverride</span>&nbsp;",
              "statValue": {
                "displayLines": "BE_P1_BESpeed"
              }
            },
            {
              "name": "Action Advance/Delay",
              "advanceType": "Set",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "multiBase": {
                "displayLines": "BE_P3_InitDelay"
              }
            }
          ]
        },
        {
          "eventTrigger": "Weakness Break [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "variableName": "ENEMIES_OBJECT_UNUSED__114"
              },
              "passed": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Set",
                  "multiAdd": "P2_BreakDelayRatioPerFigure"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Add Target by Unique Identifier",
                      "identifier": "TheaterCore"
                    },
                    "variableName": "Theater_Rogue"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}