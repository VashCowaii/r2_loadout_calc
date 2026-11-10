const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 2024021,
  "trimCharacterName": 2024021,
  "abilityList": [
    "2024021_Modifiers",
    "2024021_Monster_Fuyan_Die",
    "2024021_Monster_Fuyan_RL_Hit_Part02",
    "2024021_Monster_Fuyan_RL_Hit_Part01",
    "2024021_Monster_Fuyan_Hit_Part02",
    "2024021_Monster_Fuyan_Hit_Part01",
    "2024021_Monster_Fuyan_Born_Part02",
    "2024021_Monster_Fuyan_Born_Part01",
    "2024021_Monster_Fuyan_PassiveAbility_Insert2",
    "2024021_Monster_Fuyan_PassiveAbility_Insert",
    "2024021_Monster_Fuyan_PassiveAbilityInitiate2",
    "2024021_Monster_Fuyan_PassiveAbilityInitiate",
    "2024021_Monster_Fuyan_RL_Ability04_Part02",
    "2024021_Monster_Fuyan_RL_Ability04_Part01",
    "2024021_Monster_Fuyan_RL_Ability03_Part02",
    "2024021_Monster_Fuyan_RL_Ability03_Part01",
    "2024021_Monster_Fuyan_Ability02_Part02",
    "2024021_Monster_Fuyan_Ability02_Part01",
    "2024021_Monster_Fuyan_RL_Ability01_Part02",
    "2024021_Monster_Fuyan_RL_Ability01_Part01",
    "2024021_Monster_W2_Fuyan_PassiveAbility_BGM",
    "2024021_Handling"
  ],
  "abilityObject": {
    "2024021_Modifiers": {
      "fileName": "2024021_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1968119799\">Monster_Fuyan_AddBonus</a>",
          "execute": [
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DamageUpCount",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1230803206\">Monster_Fuyan_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Slay Move</span>]",
                          "valuePerStack": {
                            "MDF_DamageUpRatio_PerLayer": {
                              "displayLines": "{[Skill01[0]]}"
                            }
                          },
                          "addStacksPerTrigger": {
                            "displayLines": "DamageUpCount"
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SpeedAddCount",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1579371120\">Monster_Fuyan_RL_SpeedUp</a>[<span class=\"descriptionNumberColor\">Transfer Move</span>]",
                          "valuePerStack": {
                            "MDF_SpeedAddedRatio_PerLayer": {
                              "displayLines": "{[Skill01[1]]}"
                            }
                          },
                          "addStacksPerTrigger": {
                            "displayLines": "SpeedAddCount"
                          }
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
          "for": "<a class=\"gModGreen\" id=\"mod__852885665\">Monster_Fuyan_RL_HPShared_Part3_2</a>",
          "execute": [
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
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_SummonValue + 1)"
                      },
                      "variableName": "MDF_SummonValue"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_SummonValue",
                        "compareType": ">=",
                        "value2": 5
                      },
                      "passed": [
                        {
                          "name": "Create Shared HP Group",
                          "subTarget": {
                            "name": "Target Name",
                            "target": "{{All Team Members(Exclude Self)}}"
                          }
                        },
                        "Modifier Deletes Itself"
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
          "for": "<a class=\"gModGreen\" id=\"mod__417134444\">Monster_Fuyan_RL_HPShared_Part3</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_SummonValue + 1)"
                  },
                  "variableName": "MDF_SummonValue"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_SummonValue",
                    "compareType": ">=",
                    "value2": 3
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
          "for": "<a class=\"gModGreen\" id=\"mod__1663924159\">Monster_Fuyan_RL_HPShared</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_SummonValue + 1)"
                  },
                  "variableName": "MDF_SummonValue"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_SummonValue",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Create Shared HP Group",
                      "subTarget": {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      }
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1579371120\">Monster_Fuyan_RL_SpeedUp</a>[<span class=\"descriptionNumberColor\">Transfer Move</span>]",
          "stackType": "Replace",
          "stackData": [
            "MDF_SpeedAddedRatio_PerLayer"
          ],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedAddedRatio_PerLayer</span>. This effect can stack.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "Transfer Move",
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(MDF_SpeedAddedRatio_PerLayer * ModifierLayers)"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1230803206\">Monster_Fuyan_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Slay Move</span>]",
          "stackType": "Replace",
          "stackData": [
            "MDF_DamageUpRatio_PerLayer"
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span>. This effect can stack.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Slay Move",
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(MDF_DamageUpRatio_PerLayer * ModifierLayers)"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-100079329\">Enemy_Fuyan_RL_MonsterDieListener</a>",
          "modifierFlags": [
            "KeepOnDeathrattle",
            "Deathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1940788756\">Enemy_Fuyan_MonsterDieListener</a>"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"288555768\">Monster_Fuyan_LockHP</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
                        "invertCondition": true,
                        "includePreDeath": true
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
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "displayLines": "(DeathCount + 1)"
                      },
                      "variableName": "DeathCount"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "ADF_MaxHPValue",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "((1 / MonsterCount) + 0.0009999999)"
                      },
                      "variableName": "ADF_HPDamageRatioValue"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "ADF_CurrentHPValue",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "ADF_CurrentHPValue",
                        "compareType": "<=",
                        "value2": {
                          "displayLines": "((ADF_MaxHPValue * ADF_HPDamageRatioValue) * DeathCount)"
                        }
                      },
                      "passed": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "ability": "Monster_Fuyan_RL_Hit_Part01"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "ability": "Monster_Fuyan_RL_Hit_Part01"
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
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "AchievementCount"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 8001010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Flamespawn"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(AchievementCount + 1)"
                          },
                          "variableName": "AchievementCount"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AchievementCount",
                    "compareType": ">",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Inferno",
                          "desc": "Have #1[i] Flamespawns simultaneously on the field during the \"Illusory Maze: Cirrus\" challenge",
                          "rarity": "Low",
                          "type": "Hidden until Completion",
                          "params": [
                            4
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_Fuyan_Die",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "EnemyDeathEffect",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Parameter Target's Attack Targets}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1
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
          "for": "<a class=\"gModGreen\" id=\"mod__2135326892\">Monster_Fuyan_Endurance</a>",
          "modifierFlags": [
            "Endurance"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1368675926\">Monster_Fuyan_PartController</a>",
          "execute": [
            {
              "eventTrigger": "Waiting in Limbo [Owner]",
              "priorityLevel": -90,
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
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
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2135326892\">Monster_Fuyan_Endurance</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "InsertCheck",
                          "scope": "TargetEntity"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_Fuyan_PassiveAbility_Insert",
                          "priorityTag": "EnemyPhaseChange",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
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
                        "value1": "InsertCheck",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
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
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2135326892\">Monster_Fuyan_Endurance</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "InsertCheck",
                          "scope": "TargetEntity"
                        },
                        {
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_Fuyan_PassiveAbility_Insert2",
                          "priorityTag": "EnemyPhaseChange",
                          "ownerState": "Mask_AliveOrLimbo",
                          "targetState": "Mask_AliveOrLimbo",
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__574070131\">Monster_Fuyan_LeaveTeam</a>",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "displayLines": "2022110"
                          },
                          "locationType": "First"
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
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "displayLines": "2022110"
                              },
                              "locationType": "First"
                            },
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "displayLines": "2022110"
                              },
                              "locationType": "Last"
                            }
                          ]
                        },
                        {
                          "name": "Update Max Wave Count",
                          "add": 5
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
                            "value2": 3
                          },
                          "passed": [
                            {
                              "name": "Create Enemies",
                              "enemyList": [
                                {
                                  "name": "Enemy Entry",
                                  "enemyID": {
                                    "displayLines": "8012030"
                                  },
                                  "locationType": "First"
                                },
                                {
                                  "name": "Enemy Entry",
                                  "enemyID": {
                                    "displayLines": "8012030"
                                  },
                                  "locationType": "Last"
                                }
                              ]
                            },
                            {
                              "name": "Create Shared HP Group",
                              "subTarget": {
                                "name": "Target Name",
                                "target": "{{All Team Members(Exclude Self)}}"
                              }
                            },
                            {
                              "name": "Update Max Wave Count",
                              "add": 5
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"852885665\">Monster_Fuyan_RL_HPShared_Part3_2</a>"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "displayLines": "2022110"
                          },
                          "locationType": "First"
                        }
                      ]
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "displayLines": "2022110"
                          },
                          "locationType": "First"
                        },
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "displayLines": "2022110"
                          },
                          "locationType": "Last"
                        }
                      ]
                    },
                    {
                      "name": "Update Max Wave Count",
                      "add": 5
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
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "displayLines": "8012030"
                              },
                              "locationType": "First"
                            },
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "displayLines": "8012030"
                              },
                              "locationType": "Last"
                            }
                          ]
                        },
                        {
                          "name": "Create Shared HP Group",
                          "subTarget": {
                            "name": "Target Name",
                            "target": "{{All Team Members(Exclude Self)}}"
                          }
                        },
                        {
                          "name": "Update Max Wave Count",
                          "add": 5
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"852885665\">Monster_Fuyan_RL_HPShared_Part3_2</a>"
                        }
                      ]
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Anyone]",
              "execute": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "displayLines": "2022110"
                          },
                          "locationType": "First"
                        }
                      ]
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "displayLines": "2022110"
                          },
                          "locationType": "First"
                        },
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "displayLines": "2022110"
                          },
                          "locationType": "Last"
                        }
                      ]
                    },
                    {
                      "name": "Update Max Wave Count",
                      "add": 5
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
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "displayLines": "8012030"
                              },
                              "locationType": "First"
                            },
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "displayLines": "8012030"
                              },
                              "locationType": "Last"
                            }
                          ]
                        },
                        {
                          "name": "Create Shared HP Group",
                          "subTarget": {
                            "name": "Target Name",
                            "target": "{{All Team Members(Exclude Self)}}"
                          }
                        },
                        {
                          "name": "Update Max Wave Count",
                          "add": 5
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"852885665\">Monster_Fuyan_RL_HPShared_Part3_2</a>"
                        }
                      ]
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "displayLines": "2022110"
                          },
                          "locationType": "First"
                        }
                      ]
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "displayLines": "2022110"
                          },
                          "locationType": "First"
                        },
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "displayLines": "2022110"
                          },
                          "locationType": "Last"
                        }
                      ]
                    },
                    {
                      "name": "Update Max Wave Count",
                      "add": 5
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
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "displayLines": "8012030"
                              },
                              "locationType": "First"
                            },
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "displayLines": "8012030"
                              },
                              "locationType": "Last"
                            }
                          ]
                        },
                        {
                          "name": "Create Shared HP Group",
                          "subTarget": {
                            "name": "Target Name",
                            "target": "{{All Team Members(Exclude Self)}}"
                          }
                        },
                        {
                          "name": "Update Max Wave Count",
                          "add": 5
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"852885665\">Monster_Fuyan_RL_HPShared_Part3_2</a>"
                        }
                      ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__288555768\">Monster_Fuyan_LockHP</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1940788756\">Enemy_Fuyan_MonsterDieListener</a>",
          "modifierFlags": [
            "KeepOnDeathrattle",
            "Deathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"288555768\">Monster_Fuyan_LockHP</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]",
                        "invertCondition": true,
                        "includePreDeath": true
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
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "displayLines": "(DeathCount + 1)"
                      },
                      "variableName": "DeathCount"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "ADF_MaxHPValue",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "((1 / MonsterCount) + 0.0009999999)"
                      },
                      "variableName": "ADF_HPDamageRatioValue"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "ADF_CurrentHPValue",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "ADF_CurrentHPValue",
                        "compareType": "<=",
                        "value2": {
                          "displayLines": "((ADF_MaxHPValue * ADF_HPDamageRatioValue) * DeathCount)"
                        }
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Monster_Fuyan_Hit_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Trigger Ability",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "ability": "Monster_Fuyan_Hit_Part01"
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
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "AchievementCount"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemy ID",
                        "ID": 8001010,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Flamespawn"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(AchievementCount + 1)"
                          },
                          "variableName": "AchievementCount"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AchievementCount",
                    "compareType": ">",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Inferno",
                          "desc": "Have #1[i] Flamespawns simultaneously on the field during the \"Illusory Maze: Cirrus\" challenge",
                          "rarity": "Low",
                          "type": "Hidden until Completion",
                          "params": [
                            4
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_Fuyan_Die",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "EnemyDeathEffect",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
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
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Parameter Target's Attack Targets}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1
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
          "for": "<a class=\"gModGreen\" id=\"mod__-51927245\">Enemy_Fuyan_Unselectable</a>",
          "modifierFlags": [
            "ImmuneDebuff"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                "Mark Entity as Non-Target(Unselectable)",
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
                  "statValue": 0
                },
                {
                  "name": "Boss Bar Display",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "show": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"429388357\">Modifier_Heliobus_Suiyang_Ability_StealBP_Enemy</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1278953211\">Modifier_Heliobus_Suiyang_Ability_ActionBonus_Enemy</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-210455569\">Modifier_Heliobus_Suiyang_Ability_DeathBonus_Enemy</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"87920602\">Modifier_Heliobus_Suiyang_Ability_DamageBurn_Enemy</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1274529835\">Modifier_Heliobus_Suiyang_Ability_AttackUp_Enemy</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1988405555\">Enemy_Fuyan_Born</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -90,
              "execute": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "ability": "Monster_Fuyan_Born_Part02",
                  "isTrigger": true
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1642513753\">Enemy_Fuyan_EffectController</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        }
      ],
      "references": []
    },
    "2024021_Monster_Fuyan_Die": {
      "fileName": "2024021_Monster_Fuyan_Die",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_RL_Hit_Part02": {
      "fileName": "2024021_Monster_Fuyan_RL_Hit_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">",
            "value2": 0
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_RL_Hit_Part01": {
      "fileName": "2024021_Monster_Fuyan_RL_Hit_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_Fuyan_RL_Hit_Part02"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "ADF_MaxHPValue",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "((1 / MonsterCount) + 0.0009999999)"
          },
          "variableName": "ADF_HPDamageRatioValue"
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "DeathCount"
          },
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "ADF_CurrentHPValue",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ADF_CurrentHPValue",
                "compareType": "<=",
                "value2": {
                  "displayLines": "(ADF_MaxHPValue * ADF_HPDamageRatioValue)"
                }
              },
              "passed": [
                {
                  "name": "Add to Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "displayLines": "ADF_HPDamageRatioValue"
                  }
                }
              ],
              "failed": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "displayLines": "ADF_HPDamageRatioValue"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "value": 0,
          "variableName": "DeathCount"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_Hit_Part02": {
      "fileName": "2024021_Monster_Fuyan_Hit_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "CurrentHP%",
            "compareType": ">",
            "value2": 0
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_Hit_Part01": {
      "fileName": "2024021_Monster_Fuyan_Hit_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_Fuyan_Hit_Part02"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "ADF_MaxHPValue",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "((1 / MonsterCount) + 0.000010000076)"
          },
          "variableName": "ADF_HPDamageRatioValue"
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "DeathCount"
          },
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "ADF_CurrentHPValue",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ADF_CurrentHPValue",
                "compareType": "<=",
                "value2": {
                  "displayLines": "(ADF_MaxHPValue * ADF_HPDamageRatioValue)"
                }
              },
              "passed": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                }
              ],
              "failed": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "displayLines": "ADF_HPDamageRatioValue"
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
                        "compareType": "<",
                        "value2": 0.1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MonsterCount",
                        "compareType": "=",
                        "value2": 3
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "value": 0,
          "variableName": "DeathCount"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_Born_Part02": {
      "fileName": "2024021_Monster_Fuyan_Born_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1642513753\">Enemy_Fuyan_EffectController</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_Born_Part01": {
      "fileName": "2024021_Monster_Fuyan_Born_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_Fuyan_Born_Part02",
          "isTrigger": true
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_PassiveAbility_Insert2": {
      "fileName": "2024021_Monster_Fuyan_PassiveAbility_Insert2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Update Max Wave Count",
          "add": 3
        },
        {
          "name": "Trigger Modifier Event",
          "target": {
            "name": "Join Targets",
            "TargetList": [
              {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              {
                "name": "Target Name",
                "target": "{{Battle Event List}}"
              }
            ]
          },
          "variableName": null,
          "eventType": "InfiniteDoSummon",
          "value": null
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2135326892\">Monster_Fuyan_Endurance</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "AIFlag",
          "resetValue": 1,
          "scope": "TargetEntity"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1368675926\">Monster_Fuyan_PartController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"574070131\">Monster_Fuyan_LeaveTeam</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"417134444\">Monster_Fuyan_RL_HPShared_Part3</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_PassiveAbility_Insert": {
      "fileName": "2024021_Monster_Fuyan_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "silent": true
        },
        {
          "name": "Mark Entity For Immediate Death",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          }
        },
        {
          "name": "Update Max Wave Count",
          "add": 3
        },
        {
          "name": "Trigger Modifier Event",
          "target": {
            "name": "Join Targets",
            "TargetList": [
              {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              {
                "name": "Target Name",
                "target": "{{Battle Event List}}"
              }
            ]
          },
          "variableName": null,
          "eventType": "InfiniteDoSummon",
          "value": null
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "multiBase": 0
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2135326892\">Monster_Fuyan_Endurance</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "InsertCheck",
          "resetValue": 1,
          "scope": "TargetEntity"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "AIFlag",
          "resetValue": 1,
          "scope": "TargetEntity"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"574070131\">Monster_Fuyan_LeaveTeam</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1663924159\">Monster_Fuyan_RL_HPShared</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_PassiveAbilityInitiate2": {
      "fileName": "2024021_Monster_Fuyan_PassiveAbilityInitiate2",
      "skillTrigger": "SkillP02",
      "abilityType": "Talent",
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
          "modifier": "<a class=\"gModGreen\" id=\"574070131\">Monster_Fuyan_LeaveTeam</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1968119799\">Monster_Fuyan_AddBonus</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-100079329\">Enemy_Fuyan_RL_MonsterDieListener</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1368675926\">Monster_Fuyan_PartController</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_PassiveAbilityInitiate": {
      "fileName": "2024021_Monster_Fuyan_PassiveAbilityInitiate",
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "Assign Unique Name",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "identifier": "Fuyan"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1940788756\">Enemy_Fuyan_MonsterDieListener</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1988405555\">Enemy_Fuyan_Born</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"288555768\">Monster_Fuyan_LockHP</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1856806253\">Standard_MuteAttachWeakness</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-51927245\">Enemy_Fuyan_Unselectable</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_RL_Ability04_Part02": {
      "fileName": "2024021_Monster_Fuyan_RL_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1230803206\">Monster_Fuyan_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Slay Move</span>]",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "displayLines": "{[Skill01[0]]}"
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(DamageUpCount + 1)"
              },
              "variableName": "DamageUpCount"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1579371120\">Monster_Fuyan_RL_SpeedUp</a>[<span class=\"descriptionNumberColor\">Transfer Move</span>]",
                  "valuePerStack": {
                    "MDF_SpeedAddedRatio_PerLayer": {
                      "displayLines": "{[Skill01[1]]}"
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(SpeedAddCount + 1)"
                  },
                  "variableName": "SpeedAddCount"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1230803206\">Monster_Fuyan_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Slay Move</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "displayLines": "{[Skill01[0]]}"
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1579371120\">Monster_Fuyan_RL_SpeedUp</a>[<span class=\"descriptionNumberColor\">Transfer Move</span>]",
                  "valuePerStack": {
                    "MDF_SpeedAddedRatio_PerLayer": {
                      "displayLines": "{[Skill01[1]]}"
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(DamageUpCount + 1)"
                  },
                  "variableName": "DamageUpCount"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(SpeedAddCount + 1)"
                  },
                  "variableName": "SpeedAddCount"
                }
              ]
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "set": 0
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "popUpText": "Action Advance"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_RL_Ability04_Part01": {
      "fileName": "2024021_Monster_Fuyan_RL_Ability04_Part01",
      "childAbilityList": [
        "2024021_Monster_Fuyan_RL_Ability04_Part01",
        "2024021_Monster_Fuyan_RL_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_Fuyan_RL_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_RL_Ability03_Part02": {
      "fileName": "2024021_Monster_Fuyan_RL_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1230803206\">Monster_Fuyan_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Slay Move</span>]",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "displayLines": "{[Skill01[0]]}"
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(DamageUpCount + 1)"
              },
              "variableName": "DamageUpCount"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1579371120\">Monster_Fuyan_RL_SpeedUp</a>[<span class=\"descriptionNumberColor\">Transfer Move</span>]",
                  "valuePerStack": {
                    "MDF_SpeedAddedRatio_PerLayer": {
                      "displayLines": "{[Skill01[1]]}"
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(SpeedAddCount + 1)"
                  },
                  "variableName": "SpeedAddCount"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1230803206\">Monster_Fuyan_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Slay Move</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "displayLines": "{[Skill01[0]]}"
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1579371120\">Monster_Fuyan_RL_SpeedUp</a>[<span class=\"descriptionNumberColor\">Transfer Move</span>]",
                  "valuePerStack": {
                    "MDF_SpeedAddedRatio_PerLayer": {
                      "displayLines": "{[Skill01[1]]}"
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(DamageUpCount + 1)"
                  },
                  "variableName": "DamageUpCount"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(SpeedAddCount + 1)"
                  },
                  "variableName": "SpeedAddCount"
                }
              ]
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "set": 0
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "popUpText": "Action Advance"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_RL_Ability03_Part01": {
      "fileName": "2024021_Monster_Fuyan_RL_Ability03_Part01",
      "childAbilityList": [
        "2024021_Monster_Fuyan_RL_Ability03_Part01",
        "2024021_Monster_Fuyan_RL_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_Fuyan_RL_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_Ability02_Part02": {
      "fileName": "2024021_Monster_Fuyan_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Hesitation"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1642513753\">Enemy_Fuyan_EffectController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1642513753\">Enemy_Fuyan_EffectController</a>"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_Ability02_Part01": {
      "fileName": "2024021_Monster_Fuyan_Ability02_Part01",
      "childAbilityList": [
        "2024021_Monster_Fuyan_Ability02_Part01",
        "2024021_Monster_Fuyan_Ability02_Part02",
        "2024021_Monster_Fuyan_Ability02_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_Fuyan_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_RL_Ability01_Part02": {
      "fileName": "2024021_Monster_Fuyan_RL_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1230803206\">Monster_Fuyan_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Slay Move</span>]",
              "valuePerStack": {
                "MDF_DamageUpRatio_PerLayer": {
                  "displayLines": "{[Skill01[0]]}"
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(DamageUpCount + 1)"
              },
              "variableName": "DamageUpCount"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1579371120\">Monster_Fuyan_RL_SpeedUp</a>[<span class=\"descriptionNumberColor\">Transfer Move</span>]",
                  "valuePerStack": {
                    "MDF_SpeedAddedRatio_PerLayer": {
                      "displayLines": "{[Skill01[1]]}"
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(SpeedAddCount + 1)"
                  },
                  "variableName": "SpeedAddCount"
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1230803206\">Monster_Fuyan_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Slay Move</span>]",
                  "valuePerStack": {
                    "MDF_DamageUpRatio_PerLayer": {
                      "displayLines": "{[Skill01[0]]}"
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1579371120\">Monster_Fuyan_RL_SpeedUp</a>[<span class=\"descriptionNumberColor\">Transfer Move</span>]",
                  "valuePerStack": {
                    "MDF_SpeedAddedRatio_PerLayer": {
                      "displayLines": "{[Skill01[1]]}"
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(DamageUpCount + 1)"
                  },
                  "variableName": "DamageUpCount"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(SpeedAddCount + 1)"
                  },
                  "variableName": "SpeedAddCount"
                }
              ]
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "advanceType": "Set",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "set": 0
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "popUpText": "Action Advance"
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "2024021_Monster_Fuyan_RL_Ability01_Part01": {
      "fileName": "2024021_Monster_Fuyan_RL_Ability01_Part01",
      "childAbilityList": [
        "2024021_Monster_Fuyan_RL_Ability01_Part01",
        "2024021_Monster_Fuyan_RL_Ability01_Part02",
        "2024021_Monster_Fuyan_RL_Ability01_Camera"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_Fuyan_RL_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "references": []
    },
    "2024021_Monster_W2_Fuyan_PassiveAbility_BGM": {
      "fileName": "2024021_Monster_W2_Fuyan_PassiveAbility_BGM",
      "childAbilityList": [
        "2024021_Monster_W2_Fuyan_PassiveAbility_BGM"
      ],
      "skillTrigger": "Passive_BGM",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "whenAdded": [
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Stage Type",
                "stageType": "Challenge"
              },
              {
                "name": "Stage Type",
                "stageType": "VerseSimulation"
              },
              {
                "name": "Stage Type",
                "stageType": "StrongChallengeActivity"
              },
              {
                "name": "Stage Type",
                "stageType": "RogueRelic"
              },
              {
                "name": "Stage Type",
                "stageType": "GridFightActivity"
              }
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Level Entity}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"649895739\">Enemy_W2_Fuyan_ResetStageBGM</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__649895739\">Enemy_W2_Fuyan_ResetStageBGM</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex",
                  "value": "CurWaveIndex"
                }
              ]
            },
            {
              "eventTrigger": "Batch: Enemy Arrival Start",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_WaveIndex2",
                  "value": "CurWaveIndex"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_WaveIndex",
                    "compareType": "NOT=",
                    "value2": {
                      "displayLines": "MDF_WaveIndex2"
                    }
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "2024021_Handling": {
      "fileName": "2024021_Handling",
      "abilityType": "Handling",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Action Handling",
          "values": [
            {
              "name": "Define Handler Boolean",
              "variableName": "ForbidClearSkillUseRecord",
              "value": true
            }
          ],
          "options": [
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 1,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill01"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
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
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 1,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill03"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "Decision01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 1,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill04"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionWeight": 0.5,
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}