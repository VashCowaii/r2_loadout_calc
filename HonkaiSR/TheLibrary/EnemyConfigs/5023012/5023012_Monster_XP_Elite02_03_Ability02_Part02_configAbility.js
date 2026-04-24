const configAbility = {
  "fileName": "5023012_Monster_XP_Elite02_03_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "scope": "TargetEntity",
      "variableName": "SameMonsterNum",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill02_AssistCount",
      "value": 0
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "XP_Elite02_03_Mark"
          },
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
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Current Turn Owner}}"
          },
          "variableName": "SameMonsterNum",
          "context": "TargetEntity",
          "value": 1,
          "max": 100
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SameMonsterNum",
        "compareType": ">",
        "value2": 1
      },
      "passed": [
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "XP_Elite02_03_Mark"
          },
          "ifTargetFound": [
            {
              "name": "Trigger Joint-Attack Ability",
              "abilityList": [
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
                  "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_00"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Filter",
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
                            }
                          ]
                        }
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict"
                      }
                    ]
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_01"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Filter",
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
                            }
                          ]
                        }
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict",
                        "indexValue": 1
                      }
                    ]
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_01"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Filter",
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
                            }
                          ]
                        }
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict",
                        "indexValue": 2
                      }
                    ]
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_01"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Filter",
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
                            }
                          ]
                        }
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict",
                        "indexValue": 3
                      }
                    ]
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_01"
                }
              ]
            }
          ],
          "noTargetFound": [
            {
              "name": "Trigger Joint-Attack Ability",
              "abilityList": [
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
                  "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_00"
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "XP_Elite02_03_Mark"
          },
          "ifTargetFound": [
            {
              "name": "Trigger Joint-Attack Ability",
              "abilityList": [
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
                  "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_02"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Filter",
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
                            }
                          ]
                        }
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict"
                      }
                    ]
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_03"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Filter",
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
                            }
                          ]
                        }
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict",
                        "indexValue": 1
                      }
                    ]
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_03"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Filter",
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
                            }
                          ]
                        }
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict",
                        "indexValue": 2
                      }
                    ]
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_03"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Parameter Target List}}"
                      },
                      {
                        "name": "Target Filter",
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
                            }
                          ]
                        }
                      },
                      {
                        "name": "Target Index",
                        "indexType": "IndexStrict",
                        "indexValue": 3
                      }
                    ]
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_03"
                }
              ]
            }
          ],
          "noTargetFound": [
            {
              "name": "Trigger Joint-Attack Ability",
              "abilityList": [
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
                  "ability": "Monster_XP_Elite02_03_Ability02_Part02_Assist_02"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}