const compositeAbilityObject = {
  "fullCharacterName": -283828886,
  "trimCharacterName": -283828886,
  "abilityList": [
    "-283828886_Functions"
  ],
  "abilityObject": {
    "-283828886_Functions": {
      "fileName": "-283828886_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 7,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "TaskList_Stage_EnterBattleUIPerform",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Stage Type",
                    "stageType": "AetherDivide",
                    "invertCondition": true
                  },
                  {
                    "name": "Check String Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value": "TEMP_OBJECT_UNUSED_1",
                    "invertCondition": true
                  }
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Stage Type",
                "stageType": "EvolveBuildActivity"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Stage Type",
                "stageType": "GridFightActivity"
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Wave_ShowRoleTrialPage",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Stage Type",
                    "stageType": "Trial"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "RoleTrialDetailPageShowed",
                    "compareType": "=",
                    "value2": 0
                  },
                  {
                    "name": "Enemy Team is Dead",
                    "forWaveEnd": true,
                    "invertCondition": true
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "All_Enemy_Ranks",
                        "compareType": "<",
                        "value2": 3,
                        "invertCondition": true
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "RoleTrialDetailPageShowed",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "TaskList_ShowBattleStartUI",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "TaskList_TriggerBattleStartUI",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check String Value",
                    "value": "_SpecialBattleStartCamera"
                  },
                  {
                    "name": "Check String Value",
                    "value": "_CloseBattleStartDialog"
                  },
                  {
                    "name": "Check String Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value": "TEMP_OBJECT_UNUSED_3"
                  },
                  {
                    "name": "Check String Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value": "TEMP_OBJECT_UNUSED_1"
                  },
                  {
                    "name": "Battle Perform Queued"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check String Value",
                    "value": "_CloseBattleStartDialog",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "DelayTriggerBattleStartDialog",
                      "value": 1
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "TaskList_ShowBattleStartUI"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "TaskList_DelayTriggerBattleStartUI",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check String Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value": "TEMP_OBJECT_UNUSED_4"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "DelayTriggerBattleStartDialog",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Check String Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value": "TEMP_OBJECT_UNUSED_1",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "TaskList_ShowBattleStartUI"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "TaskList_DelayTriggerBattleStartUI_AfterBattlePerform",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check String Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value": "TEMP_OBJECT_UNUSED_1"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "value1": "BattlePerformInsertOnBattleEnter",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passed": [
                {
                  "name": "WAIT FOR",
                  "condition": {
                    "name": "Battle Perform Queued"
                  }
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "TaskList_ShowBattleStartUI"
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "TaskList_Stage_InfoDetailPage",
          "parse": []
        }
      ],
      "references": []
    }
  }
}