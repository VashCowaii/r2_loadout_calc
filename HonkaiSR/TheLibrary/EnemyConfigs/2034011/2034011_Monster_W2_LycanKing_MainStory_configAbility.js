const configAbility = {
  "fileName": "2034011_Monster_W2_LycanKing_MainStory",
  "childAbilityList": [
    "2034011_Monster_W2_LycanKing_MainStory"
  ],
  "skillTrigger": "PassiveSkill02",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 2034011,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": "Borisin Warhead: Hoolay"
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"545997619\">Monster_W2_LycanKing_Revive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1274154445\">Enemy_W2_LycanKing_MainStoryPhase01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-655371918\">Enemy_W2_LycanKing_FirstTimeRageMark</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-571680589\">Enemy_W2_LycanKing_HPListener</a>"
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Enemy ID",
            "ID": 203401100,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": null
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"545997619\">Monster_W2_LycanKing_Revive</a>"
            },
            {
              "name": "Add Stage Ability",
              "abilityName": "Monster_W2_LycanKing_MainStoryPhase02Start",
              "parameters": {
                "P1_LoseHPRatio": {
                  "operator": "Variables[0] ({[PassiveSkill02[0]]}) || RETURN",
                  "displayLines": "{[PassiveSkill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[PassiveSkill02[0]]}"
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
              "modifier": "<a class=\"gModGreen\" id=\"1099267528\">Enemy_W2_LycanKing_HPListenerPhase02</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1749070529\">Enemy_W2_LycanKing_MainStoryChangePhaseLockHP</a>"
            }
          ]
        }
      ]
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
      "for": "<a class=\"gModGreen\" id=\"mod__-913728417\">Enemy_W2_LycanKing_MainStoryPhase2LockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.0009999999
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase1"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1370655977\">Enemy_W2_LycanKing_MainStoryPhase2Mark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1749070529\">Enemy_W2_LycanKing_MainStoryChangePhaseLockHP</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.5
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Trigger 0-Toughness",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              }
            },
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase1"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
              },
              "passed": [
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
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"979801477\">Monster_Standard_Endurance</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1370655977\">Enemy_W2_LycanKing_MainStoryPhase2Mark</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-913728417\">Enemy_W2_LycanKing_MainStoryPhase2LockHP</a>"
            },
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Monster_W2_LycanKing_PassiveAbility_Insert",
              "priorityTag": "EnemyPhaseChange",
              "ownerState": "Mask_AliveOrLimbo",
              "targetState": "Mask_AliveOrLimbo",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "allowAbilityTriggers": false
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1099267528\">Enemy_W2_LycanKing_HPListenerPhase02</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Monster_W2_LycanKing_MainStoryPhase02Start",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "priorityTag": "EnemyPhaseChange",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
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
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.75
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0.5
                  }
                ]
              }
            },
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
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.25
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0.0009999999
                  }
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-571680589\">Enemy_W2_LycanKing_HPListener</a>",
      "execute": [
        {
          "eventTrigger": "Action Phase Start [Owner][?]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_DialogFlag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.0009999999
            }
          ]
        },
        {
          "eventTrigger": "HP Change [Owner]",
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
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": 0.5
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0.25
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_DialogFlag",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DialogFlag",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1220,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Feixiao"
                  },
                  "ifTargetFound": [
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
                            "value1": "CurrentHP%",
                            "compareType": "<=",
                            "value2": 0.0009999999
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
                          "abilityName": "Monster_W2_LycanKing_MainStoryPhase01End",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "EnemyPhaseChange",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ]
                    }
                  ],
                  "noTargetFound": [
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
                            "value1": "CurrentHP%",
                            "compareType": "<=",
                            "value2": 0.25
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0.0009999999
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_DialogFlag",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_DialogFlag",
                          "value": 1
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
                            "value1": "CurrentHP%",
                            "compareType": "<=",
                            "value2": 0.0009999999
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "Monster_W2_LycanKing_MainStoryPhase01End",
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "priorityTag": "EnemyPhaseChange",
                              "canHitNonTargets": true,
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
        },
        {
          "eventTrigger": "Being Attacked Completed [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_DialogFlag",
              "value": 0
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-655371918\">Enemy_W2_LycanKing_FirstTimeRageMark</a>",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1274154445\">Enemy_W2_LycanKing_MainStoryPhase01</a>",
      "stackData": [],
      "latentQueue": []
    }
  ]
}