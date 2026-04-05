const configAbility = {
  "fileName": "2034014_Monster_W2_LycanKing_PassiveAbilityInitiate",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
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
      "name": "Define Custom Variable",
      "variableName": "WolfBoss_BloodRageMaxCount",
      "value": {
        "operator": "Variables[0] (AIFlag) || RETURN",
        "displayLines": "AIFlag",
        "constants": [],
        "variables": [
          "AIFlag"
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1905621078\">Enemy_W2_Lycan_RageControllerV2</a>",
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
      "modifier": "<a class=\"gModGreen\" id=\"-448339194\">Enemy_W2_LycanKing_RageListener</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{Level Entity}}"
        },
        "value1": "WolfID01",
        "compareType": "=",
        "value2": 0,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "WolfID01",
          "value": {
            "operator": "Variables[0] (WolfSummon01) || RETURN",
            "displayLines": "WolfSummon01",
            "constants": [],
            "variables": [
              "WolfSummon01"
            ]
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
          "target": "{{Level Entity}}"
        },
        "value1": "WolfID02",
        "compareType": "=",
        "value2": 0,
        "contextScope": "TargetEntity"
      },
      "passed": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "scope": "TargetEntity",
          "variableName": "WolfID02",
          "value": {
            "operator": "Variables[0] (WolfSummon02) || RETURN",
            "displayLines": "WolfSummon02",
            "constants": [],
            "variables": [
              "WolfSummon02"
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "value": "ENEMIES_OBJECT_UNUSED__170"
      },
      "failed": [
        {
          "name": "Preload Battle Event(s)",
          "eventID": [
            20008
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "value": "ENEMIES_OBJECT_UNUSED__168"
          },
          "passed": [
            {
              "name": "Add Battle Event",
              "teamName": "Enemy Team",
              "eventID": 20008,
              "variables": {
                "P3_Lycan01Delay": {
                  "operator": "Variables[0] (UnusedUnderThisBase_330) || RETURN",
                  "displayLines": "UnusedUnderThisBase_330",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_330"
                  ]
                },
                "P4_Lycan02Delay": {
                  "operator": "Variables[0] (UnusedUnderThisBase_331) || RETURN",
                  "displayLines": "UnusedUnderThisBase_331",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_331"
                  ]
                },
                "P5_Lycan03Delay": {
                  "operator": "Variables[0] (UnusedUnderThisBase_332) || RETURN",
                  "displayLines": "UnusedUnderThisBase_332",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_332"
                  ]
                },
                "P6_Lycan04Delay": {
                  "operator": "Variables[0] (UnusedUnderThisBase_333) || RETURN",
                  "displayLines": "UnusedUnderThisBase_333",
                  "constants": [],
                  "variables": [
                    "UnusedUnderThisBase_333"
                  ]
                }
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
                "value1": "P3_Lycan01Delay",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "P3_Lycan01Delay",
                  "value": {
                    "operator": "Variables[0] (UnusedUnderThisBase_330) || RETURN",
                    "displayLines": "UnusedUnderThisBase_330",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_330"
                    ]
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
                  "target": "{{Level Entity}}"
                },
                "value1": "P4_Lycan02Delay",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "P4_Lycan02Delay",
                  "value": {
                    "operator": "Variables[0] (UnusedUnderThisBase_331) || RETURN",
                    "displayLines": "UnusedUnderThisBase_331",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_331"
                    ]
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
                  "target": "{{Level Entity}}"
                },
                "value1": "P5_Lycan03Delay",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "P5_Lycan03Delay",
                  "value": {
                    "operator": "Variables[0] (UnusedUnderThisBase_332) || RETURN",
                    "displayLines": "UnusedUnderThisBase_332",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_332"
                    ]
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
                  "target": "{{Level Entity}}"
                },
                "value1": "P6_Lycan04Delay",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "P6_Lycan04Delay",
                  "value": {
                    "operator": "Variables[0] (UnusedUnderThisBase_333) || RETURN",
                    "displayLines": "UnusedUnderThisBase_333",
                    "constants": [],
                    "variables": [
                      "UnusedUnderThisBase_333"
                    ]
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Add Battle Event",
              "teamName": "Enemy Team",
              "eventID": 20008,
              "variables": {
                "P3_Lycan01Delay": {
                  "operator": "Variables[0] ({[SkillP03[1]]}) || RETURN",
                  "displayLines": "{[SkillP03[1]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP03[1]]}"
                  ]
                },
                "P4_Lycan02Delay": {
                  "operator": "Variables[0] ({[SkillP03[2]]}) || RETURN",
                  "displayLines": "{[SkillP03[2]]}",
                  "constants": [],
                  "variables": [
                    "{[SkillP03[2]]}"
                  ]
                }
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
                "value1": "P3_Lycan01Delay",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "P3_Lycan01Delay",
                  "value": {
                    "operator": "Variables[0] ({[SkillP03[1]]}) || RETURN",
                    "displayLines": "{[SkillP03[1]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP03[1]]}"
                    ]
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
                  "target": "{{Level Entity}}"
                },
                "value1": "P4_Lycan02Delay",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "P4_Lycan02Delay",
                  "value": {
                    "operator": "Variables[0] ({[SkillP03[2]]}) || RETURN",
                    "displayLines": "{[SkillP03[2]]}",
                    "constants": [],
                    "variables": [
                      "{[SkillP03[2]]}"
                    ]
                  }
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
          "modifier": "<a class=\"gModGreen\" id=\"545997619\">Monster_W2_LycanKing_Revive</a>"
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2054251220\">Enemy_W2_LycanKing_BloodRage</a>",
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
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "WolfBoss_BloodRageCount",
              "value": {
                "operator": "Variables[0] (UnusedUnderThisBase_342) || RETURN",
                "displayLines": "UnusedUnderThisBase_342",
                "constants": [],
                "variables": [
                  "UnusedUnderThisBase_342"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"563066245\">Enemy_W2_LycanKing_BloodRageMark</a>[<span class=\"descriptionNumberColor\">Irate</span>]",
              "stackLimit": {
                "operator": "Variables[0] (WolfBoss_BloodRageMaxCount) || RETURN",
                "displayLines": "WolfBoss_BloodRageMaxCount",
                "constants": [],
                "variables": [
                  "WolfBoss_BloodRageMaxCount"
                ]
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (WolfBoss_BloodRageCount) || RETURN",
                "displayLines": "WolfBoss_BloodRageCount",
                "constants": [],
                "variables": [
                  "WolfBoss_BloodRageCount"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"435779874\">Monster_W2_LycanKing_RefreshEnergyBar</a>"
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1708829325\">Enemy_W2_LycanKing_RageEffectFadeout</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "WolfBoss_BloodRageCount",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (WolfBoss_BloodRageMaxCount) || RETURN",
                    "displayLines": "WolfBoss_BloodRageMaxCount",
                    "constants": [],
                    "variables": [
                      "WolfBoss_BloodRageMaxCount"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"563066245\">Enemy_W2_LycanKing_BloodRageMark</a>[<span class=\"descriptionNumberColor\">Irate</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (WolfBoss_BloodRageMaxCount) || RETURN",
                    "displayLines": "WolfBoss_BloodRageMaxCount",
                    "constants": [],
                    "variables": [
                      "WolfBoss_BloodRageMaxCount"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"435779874\">Monster_W2_LycanKing_RefreshEnergyBar</a>"
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
                        "value1": "WolfBoss_BloodRageCount",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (WolfBoss_BloodRageMaxCount) || RETURN",
                          "displayLines": "WolfBoss_BloodRageMaxCount",
                          "constants": [],
                          "variables": [
                            "WolfBoss_BloodRageMaxCount"
                          ]
                        }
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
                        "flagName": "Break",
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
                      "abilityName": "Monster_W2_LycanKing_Ability05_Insert_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Enemies by Aggro}}"
                      },
                      "priorityTag": "EnemyAttackFromOthers",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "Break",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_BloodRageCountRemain",
                      "value": {
                        "operator": "Variables[0] (WolfBoss_BloodRageMaxCount) || Variables[1] (WolfBoss_BloodRageCount) || SUB || RETURN",
                        "displayLines": "(WolfBoss_BloodRageMaxCount - WolfBoss_BloodRageCount)",
                        "constants": [],
                        "variables": [
                          "WolfBoss_BloodRageMaxCount",
                          "WolfBoss_BloodRageCount"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_BloodRageCountRemain",
                        "compareType": "<=",
                        "value2": 3
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1708829325\">Enemy_W2_LycanKing_RageEffectFadeout</a>",
                    "invertCondition": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "WolfBoss_BloodRageCount",
                  "value": 1,
                  "max": {
                    "operator": "Variables[0] (WolfBoss_BloodRageMaxCount) || RETURN",
                    "displayLines": "WolfBoss_BloodRageMaxCount",
                    "constants": [],
                    "variables": [
                      "WolfBoss_BloodRageMaxCount"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"563066245\">Enemy_W2_LycanKing_BloodRageMark</a>[<span class=\"descriptionNumberColor\">Irate</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (WolfBoss_BloodRageMaxCount) || RETURN",
                    "displayLines": "WolfBoss_BloodRageMaxCount",
                    "constants": [],
                    "variables": [
                      "WolfBoss_BloodRageMaxCount"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"435779874\">Monster_W2_LycanKing_RefreshEnergyBar</a>"
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
                        "value1": "WolfBoss_BloodRageCount",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (WolfBoss_BloodRageMaxCount) || RETURN",
                          "displayLines": "WolfBoss_BloodRageMaxCount",
                          "constants": [],
                          "variables": [
                            "WolfBoss_BloodRageMaxCount"
                          ]
                        }
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
                        "flagName": "Break",
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
                      "abilityName": "Monster_W2_LycanKing_Ability05_Insert_Part01",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Enemies by Aggro}}"
                      },
                      "priorityTag": "EnemyAttackFromOthers",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "Break",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_BloodRageCountRemain",
                      "value": {
                        "operator": "Variables[0] (WolfBoss_BloodRageMaxCount) || Variables[1] (WolfBoss_BloodRageCount) || SUB || RETURN",
                        "displayLines": "(WolfBoss_BloodRageMaxCount - WolfBoss_BloodRageCount)",
                        "constants": [],
                        "variables": [
                          "WolfBoss_BloodRageMaxCount",
                          "WolfBoss_BloodRageCount"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_BloodRageCountRemain",
                        "compareType": "<=",
                        "value2": 3
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
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
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__168"
                      }
                    ]
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
                        "value1": "WolfBoss_BloodRageCount",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (WolfBoss_BloodRageMaxCount) || RETURN",
                          "displayLines": "WolfBoss_BloodRageMaxCount",
                          "constants": [],
                          "variables": [
                            "WolfBoss_BloodRageMaxCount"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_BloodRageCountBefore",
                          "value": {
                            "operator": "Variables[0] (WolfBoss_BloodRageCount) || RETURN",
                            "displayLines": "WolfBoss_BloodRageCount",
                            "constants": [],
                            "variables": [
                              "WolfBoss_BloodRageCount"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "WolfBoss_BloodRageCount",
                          "value": -1,
                          "max": {
                            "operator": "Variables[0] (WolfBoss_BloodRageMaxCount) || RETURN",
                            "displayLines": "WolfBoss_BloodRageMaxCount",
                            "constants": [],
                            "variables": [
                              "WolfBoss_BloodRageMaxCount"
                            ]
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"435779874\">Monster_W2_LycanKing_RefreshEnergyBar</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "value1": "MDF_BloodRageCountBefore",
                                "compareType": ">",
                                "value2": 0
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "WolfBoss_BloodRageCount",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"563066245\">Enemy_W2_LycanKing_BloodRageMark</a>[<span class=\"descriptionNumberColor\">Irate</span>]"
                            },
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "conditionActive": {
                                "name": "Target Exists",
                                "target": {
                                  "name": "Add Target by Unique Identifier",
                                  "identifier": "RageEnd"
                                },
                                "living": true
                              },
                              "abilityName": "BattleEventAbility_Monster_W2_LycanKing_StanceDamage",
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "priorityTag": "EnemyChangeState",
                              "canHitNonTargets": true,
                              "valuePerStack": {
                                "ResetBloodRageCount": {
                                  "operator": "Variables[0] (UnusedUnderThisBase_339) || RETURN",
                                  "displayLines": "UnusedUnderThisBase_339",
                                  "constants": [],
                                  "variables": [
                                    "UnusedUnderThisBase_339"
                                  ]
                                },
                                "DelayRatio": {
                                  "operator": "Variables[0] (UnusedUnderThisBase_340) || RETURN",
                                  "displayLines": "UnusedUnderThisBase_340",
                                  "constants": [],
                                  "variables": [
                                    "UnusedUnderThisBase_340"
                                  ]
                                },
                                "StanceDamage": {
                                  "operator": "Variables[0] (UnusedUnderThisBase_341) || RETURN",
                                  "displayLines": "UnusedUnderThisBase_341",
                                  "constants": [],
                                  "variables": [
                                    "UnusedUnderThisBase_341"
                                  ]
                                }
                              },
                              "allowAbilityTriggers": false
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_BloodRageCountBefore",
                              "value": 0
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"563066245\">Enemy_W2_LycanKing_BloodRageMark</a>[<span class=\"descriptionNumberColor\">Irate</span>]",
                              "stackLimit": {
                                "operator": "Variables[0] (WolfBoss_BloodRageMaxCount) || RETURN",
                                "displayLines": "WolfBoss_BloodRageMaxCount",
                                "constants": [],
                                "variables": [
                                  "WolfBoss_BloodRageMaxCount"
                                ]
                              },
                              "addStacksPerTrigger": -1
                            }
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_BloodRageCountBefore",
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
      "for": "<a class=\"gModGreen\" id=\"mod__540941563\">Enemy_W2_LycanKing_RageStatusPhase2</a>[<span class=\"descriptionNumberColor\">Eclipse's Wrath</span>]",
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
              "modifier": "<a class=\"gModGreen\" id=\"-518764402\">W2_LycanKing_BattleScore1</a>"
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
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
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
              "variableName": "AIFlag",
              "value": 5
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
      "description": "Enters the Moon Rage state and increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUpRatio</span>. While in this state, Hoolay gains Irate and can use Barrenness of Earth Gouged and Lupine Chase Calls Bloody Gleam. This state will be removed when this unit is Weakness Broken.",
      "type": "Buff",
      "effectName": "Enters the Eclipse's Wrath state",
      "statusName": "Eclipse's Wrath"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__224849748\">Enemy_W2_LycanKing_RageStatus</a>[<span class=\"descriptionNumberColor\">Eclipse's Ire</span>]",
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
              "modifier": "<a class=\"gModGreen\" id=\"-518764402\">W2_LycanKing_BattleScore1</a>"
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
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedUpRatio) || RETURN",
                "displayLines": "MDF_SpeedUpRatio",
                "constants": [],
                "variables": [
                  "MDF_SpeedUpRatio"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "ENEMIES_OBJECT_UNUSED__168"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1075172229\">HeiShengBei_PreAddBEModifier</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 5
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "AIFlag",
                  "value": 1
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
      "description": "Enters the Moon Rage state and increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedUpRatio</span>. While in this state, Hoolay gains Irate and can use Lupine Chase Calls Bloody Gleam. This state will be removed when this unit is Weakness Broken.",
      "type": "Buff",
      "effectName": "Enters the Eclipse's Ire state",
      "statusName": "Eclipse's Ire"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-448339194\">Enemy_W2_LycanKing_RageListener</a>",
      "stackType": "Replace",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-2073013741\">Enemy_W2_Lycan_RageMarkV2</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1495768773\">Enemy_W2_Lycan_RageStatus</a>[<span class=\"descriptionNumberColor\">Moon Rage</span>]",
                    "invertCondition": true
                  }
                ]
              }
            }
          ]
        },
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
                  "modifier": "<a class=\"gModGreen\" id=\"1729331430\">Enemy_W2_LycanKing_RageStatusEnhance</a>[<span class=\"descriptionNumberColor\">Lupine Lord's Majesty</span>]",
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
                      "value": "ENEMIES_OBJECT_UNUSED__167"
                    }
                  }
                ]
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Battle Event List}}"
              },
              "conditions": {
                "name": "Battle Event ID",
                "ID": 20008,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "ifTargetFound": [
                {
                  "name": "Destroy Battle Entity",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"1729331430\">Enemy_W2_LycanKing_RageStatusEnhance</a>[<span class=\"descriptionNumberColor\">Lupine Lord's Majesty</span>]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-518764402\">W2_LycanKing_BattleScore1</a>"
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
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "set": 0
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Assign Advance/Delay to Current Ability Use",
                          "adjustmentValue": 0,
                          "adjustmentType": "="
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"224849748\">Enemy_W2_LycanKing_RageStatus</a>[<span class=\"descriptionNumberColor\">Eclipse's Ire</span>]",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-2054251220\">Enemy_W2_LycanKing_BloodRage</a>"
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
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "set": 0
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Target",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Current Turn Owner}}"
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          },
                          "passed": [
                            {
                              "name": "Assign Advance/Delay to Current Ability Use",
                              "adjustmentValue": 0,
                              "adjustmentType": "="
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"540941563\">Enemy_W2_LycanKing_RageStatusPhase2</a>[<span class=\"descriptionNumberColor\">Eclipse's Wrath</span>]",
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
                          "modifier": "<a class=\"gModGreen\" id=\"-2054251220\">Enemy_W2_LycanKing_BloodRage</a>"
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
    }
  ]
}