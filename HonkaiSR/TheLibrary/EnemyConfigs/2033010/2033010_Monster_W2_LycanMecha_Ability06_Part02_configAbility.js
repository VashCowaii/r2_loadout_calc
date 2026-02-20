const configAbility = {
  "fileName": "2033010_Monster_W2_LycanMecha_Ability06_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "UI Display Event",
      "popUpText": "Borisin Instinct"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "includeDyingTargets": true,
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value": "ENEMIES_OBJECT_UNUSED__167"
      }
    },
    {
      "name": "Define Custom Variable with Added Value",
      "target": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "variableName": "Wolf_MaxAttackCount",
      "value": {
        "operator": "Variables[0] ({[SkillP01[1]]}) || INVERT || RETURN",
        "displayLines": "-{[SkillP01[1]]}",
        "constants": [],
        "variables": [
          "{[SkillP01[1]]}"
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Level Entity}}"
        },
        "value1": "Wolf_AttackCount",
        "compareType": ">=",
        "value2": {
          "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
          "displayLines": "Wolf_MaxAttackCount",
          "constants": [],
          "variables": [
            "Wolf_MaxAttackCount"
          ]
        }
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "Wolf_AttackCount",
          "value": {
            "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
            "displayLines": "Wolf_MaxAttackCount",
            "constants": [],
            "variables": [
              "Wolf_MaxAttackCount"
            ]
          }
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variable": "Wolf_MaxAttackCount",
          "target2": null,
          "variable2": "Wolf_MaxAttackCount"
        },
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variable": "Wolf_AttackCount",
          "target2": null,
          "variable2": "Wolf_AttackCount"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__167"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "Wolf_MaxAttackCount",
              "value": {
                "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                "displayLines": "Wolf_MaxAttackCount",
                "constants": [],
                "variables": [
                  "Wolf_MaxAttackCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "Wolf_AttackCount",
              "value": {
                "operator": "Variables[0] (Wolf_AttackCount) || RETURN",
                "displayLines": "Wolf_AttackCount",
                "constants": [],
                "variables": [
                  "Wolf_AttackCount"
                ]
              }
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
                "target": "{{Parameter Target}}"
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
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"74215986\">Enemy_W2_LycanMecha_Ability06_Impact</a>[<span class=\"descriptionNumberColor\">Blood Fervor</span>]",
              "casterAssign": "TargetSelf"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variableName": "Wolf_AttackCount",
          "value": 0
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
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
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "compareType": "=",
                "value2": 4
              },
              {
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
                    "flagName": "Break",
                    "invertCondition": true
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
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Monster_W2_LycanKing_Ability07_Part01",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "priorityTag": "MonsterChangeState",
              "canHitNonTargets": true,
              "valuePerStack": {
                "MaxWolfRank": 4
              },
              "allowAbilityTriggers": false
            }
          ],
          "noTargetFound": [
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
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": "=",
                    "value2": 3
                  },
                  {
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
                        "flagName": "Break",
                        "invertCondition": true
                      }
                    ]
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
                  "abilityName": "Monster_W2_LycanMecha_Ability03_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "MonsterChangeState",
                  "canHitNonTargets": true,
                  "valuePerStack": {
                    "MaxWolfRank": 3
                  },
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
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
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "=",
                        "value2": 3
                      },
                      {
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
                            "flagName": "Break",
                            "invertCondition": true
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
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": 1
                      },
                      "abilityName": "Monster_W2_LycanMecha_Ability03_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "priorityTag": "MonsterChangeState",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "MaxWolfRank": 3
                      },
                      "allowAbilityTriggers": false
                    }
                  ],
                  "noTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__167"
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "BattleEventAbility_Monster_Lycan_RageStart",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Level Entity}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "MonsterChangeState",
                          "canHitNonTargets": true,
                          "valuePerStack": {
                            "MaxWolfRank": 2
                          },
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
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
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "compareType": "=",
                                "value2": 2
                              }
                            ]
                          },
                          "ifTargetFound": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "BattleEventAbility_Monster_Lycan_RageStart",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Level Entity}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "priorityTag": "MonsterChangeState",
                              "canHitNonTargets": true,
                              "valuePerStack": {
                                "MaxWolfRank": 2
                              },
                              "allowAbilityTriggers": false
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
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable with Copy",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "variable": "Wolf_MaxAttackCount",
          "target2": null,
          "variable2": "Wolf_MaxAttackCount"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__167"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "Wolf_MaxAttackCount",
              "value": {
                "operator": "Variables[0] (Wolf_MaxAttackCount) || RETURN",
                "displayLines": "Wolf_MaxAttackCount",
                "constants": [],
                "variables": [
                  "Wolf_MaxAttackCount"
                ]
              }
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
                "target": "{{Parameter Target}}"
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
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"74215986\">Enemy_W2_LycanMecha_Ability06_Impact</a>[<span class=\"descriptionNumberColor\">Blood Fervor</span>]",
              "casterAssign": "TargetSelf"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}