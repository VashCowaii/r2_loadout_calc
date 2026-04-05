const configAbility = {
  "fileName": "5014020_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__223685370\">Monster_W5_Pam_SummonedMinions_Appear</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MDF_BEAlive"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1216093576\">Modifier_W5_Pam_BattleEvent_ForceKill</a>",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value": "Pam_MainBoss"
              },
              "passed": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "ignoreHPLossTriggers": true,
                  "ignoreDeathTriggers": true
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
      "for": "<a class=\"gModGreen\" id=\"mod__2065504892\">W5_Pam_BattleScore2</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "W5_Pam_00_BattleScore2_Flag"
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "W5_Pam_00_BattleScore2_Flag2"
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "W5_Pam_00_BattleScore2_Flag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "W5_Pam_00_BattleScore2_Flag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "When Modifier is Added [Anyone]",
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
                    "value1": "W5_Pam_00_BattleScore2_Flag",
                    "compareType": "=",
                    "value2": 0
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
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-958061965\">Standard_Pam_ElationControl_ToMonster_02</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "W5_Pam_00_BattleScore2_Flag",
                  "value": 1
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "W5_Pam_00_BattleScore2_Flag2",
                  "value": 1,
                  "max": 100
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "W5_Pam_00_BattleScore2_Flag2",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Bubble Trendsetter",
                          "desc": "Trigger the \"Shiny\" effect of Potent Foam Soap at least #1 time(s) in a single battle against Alloy Mechatron: King Pom-Pom",
                          "rarity": "Low",
                          "params": [
                            3
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
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2115837749\">W5_Pam_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"2044531900\">Modifier_Monster_W5_Pam_DefenceUp_Remove_04</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Every Drop Counts",
                      "desc": "In the battle against Alloy Mechatron: King Pom-Pom, remove its \"Steam Wash\" state",
                      "rarity": "Low"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-299555653\">Monster_W5_Pam_SummonedMinions_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageAddedRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_DamageAddedRatio * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_DamageAddedRatio",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span>, up to <span class=\"descriptionNumberColor\">MDF_BuffMaxLayer</span> stack(s).",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-51456028\">Modifier_Monster_W5_Pam_DefenceUp_Boom</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"2044531900\">Modifier_Monster_W5_Pam_DefenceUp_Remove_04</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"989212197\">Monster_W5_Pam_zangshui_layer_display</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-458099336\">Monster_W5_Pam_zangshui_layer_display_02</a>"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "assignState": "False"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1493708935\">Modifier_Monster_W5_Pam_Charge</a>[<span class=\"descriptionNumberColor\">Raring to Go</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "revertDefault": true
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": {}
                    },
                    "Damage": {
                      "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
                      "displayLines": "{[Skill03[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill03[3]]}"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "True DMG"
                  },
                  "attackType": "Level"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_IsAngry",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2044531900\">Modifier_Monster_W5_Pam_DefenceUp_Remove_04</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-94545998\">Monster_W5_Pam_MainStory_ActionImmediately</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Lock HP",
              "threshold": 0.01
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "Pam_LockHP_Trigger",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "MainStory_DiePerform"
                },
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_W5_Pam_DeathRattle_Insert",
                  "priorityTag": "STAGE_Enemy",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Pam_LockHP_Trigger",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_FirstUltraSkill",
                "compareType": "<",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_Hit_Count",
                  "context": "ContextModifier",
                  "value": 1,
                  "max": 999
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_Hit_Count",
                        "compareType": ">=",
                        "value2": 10,
                        "contextScope": "ContextModifier"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (MDF_Lock_Radio) || RETURN",
                          "displayLines": "MDF_Lock_Radio",
                          "constants": [],
                          "variables": [
                            "MDF_Lock_Radio"
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "variableName": "MDF_Hit_Count",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_Lock_Radio",
                      "context": "ContextModifier",
                      "value": -0.24,
                      "max": 100
                    },
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
                          "name": "Assign Advance/Delay to Current Ability Use",
                          "adjustmentValue": 0,
                          "adjustmentType": "="
                        },
                        {
                          "name": "Action Advance/Delay",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "advanceType": "Advance",
                          "multiAdd": -1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "set": 0
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
      "stackData": [
        "MDF_Lock_Radio"
      ],
      "latentQueue": [
        "MDF_FirstUltraSkill"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-958061965\">Standard_Pam_ElationControl_ToMonster_02</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1583873554\">Modifier_Monster_W5_Pam_Endurance</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "_Is_BOSS",
                "compareType": ">=",
                "value2": 1,
                "contextScope": "ContextModifier"
              }
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Target_MaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "_Is_BOSS",
                "compareType": ">=",
                "value2": 1,
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": {}
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (Target_MaxHP) || Variables[1] (Skill07_P3_ToMonsterHpPercentage) || MUL || Constants[0] (0.3) || MUL || RETURN",
                      "displayLines": "((Target_MaxHP * Skill07_P3_ToMonsterHpPercentage) * 0.3)",
                      "constants": [
                        0.3
                      ],
                      "variables": [
                        "Target_MaxHP",
                        "Skill07_P3_ToMonsterHpPercentage"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "True DMG"
                  },
                  "overrideDamageOwner": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "attackType": "Additional DMG"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": {}
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (Target_MaxHP) || Variables[1] (Skill07_P3_ToMonsterHpPercentage) || MUL || Constants[0] (0.3) || MUL || RETURN",
                      "displayLines": "((Target_MaxHP * Skill07_P3_ToMonsterHpPercentage) * 0.3)",
                      "constants": [
                        0.3
                      ],
                      "variables": [
                        "Target_MaxHP",
                        "Skill07_P3_ToMonsterHpPercentage"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "True DMG"
                  },
                  "overrideDamageOwner": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "attackType": "Additional DMG"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": {}
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (Target_MaxHP) || Variables[1] (Skill07_P3_ToMonsterHpPercentage) || MUL || Constants[0] (0.4) || MUL || RETURN",
                      "displayLines": "((Target_MaxHP * Skill07_P3_ToMonsterHpPercentage) * 0.4)",
                      "constants": [
                        0.4
                      ],
                      "variables": [
                        "Target_MaxHP",
                        "Skill07_P3_ToMonsterHpPercentage"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "True DMG"
                  },
                  "overrideDamageOwner": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "attackType": "Additional DMG"
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": {}
                    },
                    "DamageFlat": {
                      "operator": "Variables[0] (Target_MaxHP) || Variables[1] (Skill07_P3_ToMonsterHpPercentage) || MUL || RETURN",
                      "displayLines": "(Target_MaxHP * Skill07_P3_ToMonsterHpPercentage)",
                      "constants": [],
                      "variables": [
                        "Target_MaxHP",
                        "Skill07_P3_ToMonsterHpPercentage"
                      ]
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "True DMG"
                  },
                  "overrideDamageOwner": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "attackType": "Additional DMG"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1583873554\">Modifier_Monster_W5_Pam_Endurance</a>"
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1830578188\">Standard_Pam_ElationControl_ToMonster</a>",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Attack Targets of Modifier Holder}}"
              },
              "searchRandom": true,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "compareType": ">=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-958061965\">Standard_Pam_ElationControl_ToMonster_02</a>",
                      "valuePerStack": {
                        "Ability07_P3_ToMonsterHpPercentage": {
                          "operator": "Variables[0] (Skill04_P3_ToMonsterHpPercentage) || RETURN",
                          "displayLines": "Skill04_P3_ToMonsterHpPercentage",
                          "constants": [],
                          "variables": [
                            "Skill04_P3_ToMonsterHpPercentage"
                          ]
                        },
                        "Ability07_P4_ElationPoint": {
                          "operator": "Variables[0] (Skill04_P4_ElationPoint) || RETURN",
                          "displayLines": "Skill04_P4_ElationPoint",
                          "constants": [],
                          "variables": [
                            "Skill04_P4_ElationPoint"
                          ]
                        },
                        "_Is_BOSS": 1
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-958061965\">Standard_Pam_ElationControl_ToMonster_02</a>",
                      "valuePerStack": {
                        "Ability07_P3_ToMonsterHpPercentage": {
                          "operator": "Variables[0] (Skill04_P3_ToMonsterHpPercentage) || RETURN",
                          "displayLines": "Skill04_P3_ToMonsterHpPercentage",
                          "constants": [],
                          "variables": [
                            "Skill04_P3_ToMonsterHpPercentage"
                          ]
                        },
                        "Ability07_P4_ElationPoint": {
                          "operator": "Variables[0] (Skill04_P4_ElationPoint) || RETURN",
                          "displayLines": "Skill04_P4_ElationPoint",
                          "constants": [],
                          "variables": [
                            "Skill04_P4_ElationPoint"
                          ]
                        },
                        "_Is_BOSS": 0
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "operator": "Variables[0] (Skill04_P4_ElationPoint) || RETURN",
                "displayLines": "Skill04_P4_ElationPoint",
                "constants": [],
                "variables": [
                  "Skill04_P4_ElationPoint"
                ]
              },
              "adjustment": "Add"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1830578188\">Standard_Pam_ElationControl_ToMonster</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-624604894\">Standard_Pam_ElationControl</a>[<span class=\"descriptionNumberColor\">Work Is Bliss!</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1850526283\">Standard_Pam_ElationControl_ToPlayer</a>",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": {
                "operator": "Variables[0] (Skill04_P6_BPPoint) || RETURN",
                "displayLines": "Skill04_P6_BPPoint",
                "constants": [],
                "variables": [
                  "Skill04_P6_BPPoint"
                ]
              },
              "adjustmentType": "+"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1850526283\">Standard_Pam_ElationControl_ToPlayer</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-624604894\">Standard_Pam_ElationControl</a>[<span class=\"descriptionNumberColor\">Work Is Bliss!</span>]"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-624604894\">Standard_Pam_ElationControl</a>[<span class=\"descriptionNumberColor\">Work Is Bliss!</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "RemoveWhenCasterUnstage"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              }
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Owner]",
          "execute": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "popUpText": "Using Basic ATK grants Punchlines, and using Skills will recover Skill Points."
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_TriggerMark",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Basic ATK"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1830578188\">Standard_Pam_ElationControl_ToMonster</a>",
                      "duration": 1,
                      "valuePerStack": {
                        "Ability04_P3_ToMonsterHpPercentage": {
                          "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                          "displayLines": "{[Skill04[2]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill04[2]]}"
                          ]
                        },
                        "Ability04_P4_ElationPoint": {
                          "operator": "Variables[0] ({[Skill04[3]]}) || RETURN",
                          "displayLines": "{[Skill04[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill04[3]]}"
                          ]
                        }
                      },
                      "casterAssign": "CasterSelf"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_TriggerMark",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1850526283\">Standard_Pam_ElationControl_ToPlayer</a>",
                          "duration": 1,
                          "valuePerStack": {
                            "Ability04_P6_BPPoint": {
                              "operator": "Variables[0] ({[Skill04[5]]}) || RETURN",
                              "displayLines": "{[Skill04[5]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill04[5]]}"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_TriggerMark",
                          "value": 1
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
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_TriggerMark",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Extra Action/Turn [Owner]: Start ",
          "execute": [
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "popUpText": "Using Basic ATK grants Punchlines, and using Skills will recover Skill Points."
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue01",
        "MDF_PropertyValue02",
        "MDF_PropertyValue03",
        "MDF_PropertyValue04"
      ],
      "latentQueue": [],
      "description": "After using Basic ATK, triggers the \"Shiny\" effect, additionally deals True DMG equal to <span class=\"descriptionNumberColor\">MDF_PropertyValue02</span> of the target's Max HP, and gains <span class=\"descriptionNumberColor\">MDF_PropertyValue03</span> Punchline(s). After using Skill, triggers the \"Pristine\" effect and recovers <span class=\"descriptionNumberColor\">MDF_PropertyValue04</span> Skill Point(s). This effect can trigger a max of 1 time while the \"Work Is Bliss!\" effect is active.",
      "type": "Other",
      "effectName": "Deep Clean",
      "statusName": "Work Is Bliss!"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1307668039\">Modifier_Monster_W5_Pam_zangshui_display</a>",
      "stackType": "Replace",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1556520356\">Modifier_Monster_W5_Pam_Rage</a>[<span class=\"descriptionNumberColor\">Steam Wash</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "MDF_IsAngry"
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Steam Wash"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2053579476\">Modifier_Monster_W5_Pam_DamageDown</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer_2",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Layer_2) || Constants[0] (0.25) || MUL || RETURN",
                "displayLines": "(MDF_Layer_2 * 0.25)",
                "constants": [
                  0.25
                ],
                "variables": [
                  "MDF_Layer_2"
                ]
              }
            }
          ]
        }
      ],
      "stackLimit": 3,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-605749584\">Monster_W5_Pam_PartController</a>",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
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
                "value2": 1
              },
              "passed": [
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "silent": true
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "InsertCheck"
                },
                {
                  "name": "Set Enemy Phase",
                  "mode": "Inc"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1808092737\">Monster_W5_Pam_SummonedMinions_die_count</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047455110\">Monster_APShow</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_IsAngry",
                  "value": 0
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-3818542\">Monster_W5_Pam_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value": "Monster_W5_Pam_00_MainStory"
                  }
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_W5_Pam_PassiveAbility_PartChange_Insert",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "EnemyPhaseChange",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__102979057\">Modifier_Monster_W5_Pam_summon_AIChange</a>",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 1
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "AIFlag",
              "value": 2
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1088041065\">Monster_W5_Pam_summon_zangshui_remove</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "CleanNum",
              "value": {
                "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__205) || RETURN",
                "displayLines": "ENEMIES_OBJECT_UNUSED__205",
                "constants": [],
                "variables": [
                  "ENEMIES_OBJECT_UNUSED__205"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1193401028\">Monster_W5_Pam_summon_zangshui</a>",
      "stackType": "Replace"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1808092737\">Monster_W5_Pam_SummonedMinions_die_count</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
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
                    "value1": null,
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "Layer"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Battle Event",
                  "teamName": "Player Team",
                  "eventID": 20032,
                  "assignOwner": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "variables": null,
                  "whenCreated": [
                    {
                      "name": "Assign Unique Name",
                      "uniqueName": "Pamu_Robot",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1250511369\">Monster_W5_Pam_SummonedMinions_monitor</a>",
      "modifierFlags": [
        "KeepOnDeathrattle"
      ],
      "execute": [
        {
          "eventTrigger": "Pre-Death [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Summoner of Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1808092737\">Monster_W5_Pam_SummonedMinions_die_count</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-458099336\">Monster_W5_Pam_zangshui_layer_display_02</a>",
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
              "modifier": "<a class=\"gModGreen\" id=\"1307668039\">Modifier_Monster_W5_Pam_zangshui_display</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "DefenceUpNum",
              "modifierName": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "DefenceUpNum",
                "compareType": "=",
                "value2": 0
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (DefenceUpNum) || RETURN",
                        "displayLines": "DefenceUpNum",
                        "constants": [],
                        "variables": [
                          "DefenceUpNum"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                        "displayLines": "{[Skill03[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[1]]}"
                        ]
                      },
                      "assignState": "True",
                      "state": "Normal"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (DefenceUpNum) || RETURN",
                        "displayLines": "DefenceUpNum",
                        "constants": [],
                        "variables": [
                          "DefenceUpNum"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                        "displayLines": "{[Skill03[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[4]]}"
                        ]
                      },
                      "assignState": "True",
                      "state": "Normal"
                    }
                  ]
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (DefenceUpNum) || RETURN",
                        "displayLines": "DefenceUpNum",
                        "constants": [],
                        "variables": [
                          "DefenceUpNum"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                        "displayLines": "{[Skill03[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[1]]}"
                        ]
                      },
                      "assignState": "True",
                      "state": "Active"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (DefenceUpNum) || RETURN",
                        "displayLines": "DefenceUpNum",
                        "constants": [],
                        "variables": [
                          "DefenceUpNum"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                        "displayLines": "{[Skill03[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill03[4]]}"
                        ]
                      },
                      "assignState": "True",
                      "state": "Active"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Modifier Was",
                    "modifier": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "DefenceUpNum",
                  "modifierName": "<a class=\"gModGreen\" id=\"-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]",
                  "multiplier": 1
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "DefenceUpNum",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 99,
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DefenceUpNum",
                    "compareType": "=",
                    "value2": 0
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (DefenceUpNum) || RETURN",
                            "displayLines": "DefenceUpNum",
                            "constants": [],
                            "variables": [
                              "DefenceUpNum"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                            "displayLines": "{[Skill03[1]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill03[1]]}"
                            ]
                          },
                          "assignState": "True",
                          "state": "Normal"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (DefenceUpNum) || RETURN",
                            "displayLines": "DefenceUpNum",
                            "constants": [],
                            "variables": [
                              "DefenceUpNum"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                            "displayLines": "{[Skill03[4]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill03[4]]}"
                            ]
                          },
                          "assignState": "True",
                          "state": "Normal"
                        }
                      ]
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
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (DefenceUpNum) || RETURN",
                            "displayLines": "DefenceUpNum",
                            "constants": [],
                            "variables": [
                              "DefenceUpNum"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                            "displayLines": "{[Skill03[1]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill03[1]]}"
                            ]
                          },
                          "assignState": "True",
                          "state": "Active"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (DefenceUpNum) || RETURN",
                            "displayLines": "DefenceUpNum",
                            "constants": [],
                            "variables": [
                              "DefenceUpNum"
                            ]
                          },
                          "entityClass": "Enemy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "maximum": {
                            "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
                            "displayLines": "{[Skill03[4]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill03[4]]}"
                            ]
                          },
                          "assignState": "True",
                          "state": "Active"
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
      "latentQueue": [
        "MDF_IsAngry"
      ],
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__989212197\">Monster_W5_Pam_zangshui_layer_display</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_dirty_part_num",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_dirty_part_num) || RETURN",
                    "displayLines": "MDF_dirty_part_num",
                    "constants": [],
                    "variables": [
                      "MDF_dirty_part_num"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__209) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__209",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__209"
                    ]
                  },
                  "assignState": "True",
                  "state": "Normal"
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_dirty_part_num) || RETURN",
                    "displayLines": "MDF_dirty_part_num",
                    "constants": [],
                    "variables": [
                      "MDF_dirty_part_num"
                    ]
                  },
                  "entityClass": "Enemy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "maximum": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__209) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__209",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__209"
                    ]
                  },
                  "assignState": "True",
                  "state": "Normal"
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_dirty_part_num",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 99,
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_dirty_part_num",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_dirty_part_num) || RETURN",
                        "displayLines": "MDF_dirty_part_num",
                        "constants": [],
                        "variables": [
                          "MDF_dirty_part_num"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__209) || RETURN",
                        "displayLines": "ENEMIES_OBJECT_UNUSED__209",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__209"
                        ]
                      },
                      "assignState": "True",
                      "state": "Normal"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_dirty_part_num) || RETURN",
                        "displayLines": "MDF_dirty_part_num",
                        "constants": [],
                        "variables": [
                          "MDF_dirty_part_num"
                        ]
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__209) || RETURN",
                        "displayLines": "ENEMIES_OBJECT_UNUSED__209",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__209"
                        ]
                      },
                      "assignState": "True",
                      "state": "Normal"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-3818542\">Monster_W5_Pam_Protect_Weakness</a>[<span class=\"descriptionNumberColor\">Weakness Protected</span>]",
      "modifierFlags": [
        "MuteBreak"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Modify Weaknesses",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "action": "Protected",
              "valueList": [
                "Physical",
                "Fire",
                "Ice",
                "Thunder",
                "Wind",
                "Quantum",
                "Imaginary"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "MDF_FirstUltraSkill"
      ],
      "description": "When \"Alloy Mechatron: King Pom-Pom\" is in the \"Raring to Go\" state, this unit's Toughness cannot be reduced.",
      "type": "Other",
      "effectName": "Weakness Protected",
      "statusName": "Weakness Protected"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1583873554\">Modifier_Monster_W5_Pam_Endurance</a>",
      "modifierFlags": [
        "MuteHitH"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Set Hit-Class",
              "class": "A"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Set Hit-Class",
              "reset": true
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "_Is_BOSS"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-983171602\">Modifier_Monster_W5_Pam_DefenceUp</a>[<span class=\"descriptionNumberColor\">Lasting Antibac</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1583873554\">Modifier_Monster_W5_Pam_Endurance</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Set Hit-Class",
              "reset": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1583873554\">Modifier_Monster_W5_Pam_Endurance</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1556520356\">Modifier_Monster_W5_Pam_Rage</a>[<span class=\"descriptionNumberColor\">Steam Wash</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"989212197\">Monster_W5_Pam_zangshui_layer_display</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-458099336\">Monster_W5_Pam_zangshui_layer_display_02</a>"
            },
            {
              "name": "Update Displayed Energy Bar",
              "entityClass": "Enemy",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "assignState": "False"
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
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
                    "value": "APOC_BOOL_OBJECT_UNUSED_27"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_26"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_25"
                  },
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_24"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_27"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_26"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_25"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value": "APOC_BOOL_OBJECT_UNUSED_24"
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Body-Types",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "types": "Thin"
                      },
                      {
                        "name": "Has Body-Types",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "types": [
                          "LargeMonster",
                          "LargeAvatar",
                          "LargeFakeAvatar"
                        ],
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": "<",
                        "value2": 5
                      }
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": "Thin"
                          },
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": [
                              "LargeMonster",
                              "LargeAvatar",
                              "LargeFakeAvatar"
                            ]
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 5
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Body-Types",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "types": "Thin",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": "<",
                            "value2": 5
                          }
                        ]
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
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": ">=",
                        "value2": 5
                      }
                    ]
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
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Layer) || Variables[1] (MDF_PropertyValue) || MUL || RETURN",
                "displayLines": "(MDF_Layer * MDF_PropertyValue)",
                "constants": [],
                "variables": [
                  "MDF_Layer",
                  "MDF_PropertyValue"
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
                "value1": null,
                "compareType": "=",
                "value2": 0,
                "valueType": "Layer"
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1583873554\">Modifier_Monster_W5_Pam_Endurance</a>"
            }
          ]
        },
        {
          "eventTrigger": "End Broken State [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1583873554\">Modifier_Monster_W5_Pam_Endurance</a>"
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "UltraSkillTimelineStart",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 99,
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "UltraSkillTimelineStart",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "variableName": "UltraSkillTimelineStart",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Variable Value Changes",
          "variableName": "UltraSkillTimelineEnd",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 99,
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "UltraSkillTimelineEnd",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "variableName": "UltraSkillTimelineEnd",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [
        "MDF_IsAngry"
      ],
      "description": "Each stack decreases DMG taken by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. When all stacks are removed, exits the \"Steam Wash\" state and takes massive DMG.",
      "type": "Buff",
      "effectName": "DMG Received Reduction",
      "statusName": "Lasting Antibac",
      "addStacksPerTrigger": -1
    }
  ],
  "references": []
}