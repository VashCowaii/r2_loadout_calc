const configAbility = {
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
                          "operator": "Variables[0] ({[Skill01[0]]}) || RETURN",
                          "displayLines": "{[Skill01[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill01[0]]}"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (DamageUpCount) || RETURN",
                        "displayLines": "DamageUpCount",
                        "constants": [],
                        "variables": [
                          "DamageUpCount"
                        ]
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
                          "operator": "Variables[0] ({[Skill01[1]]}) || RETURN",
                          "displayLines": "{[Skill01[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill01[1]]}"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (SpeedAddCount) || RETURN",
                        "displayLines": "SpeedAddCount",
                        "constants": [],
                        "variables": [
                          "SpeedAddCount"
                        ]
                      }
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
                  "variableName": "MDF_SummonValue",
                  "value": {
                    "operator": "Variables[0] (MDF_SummonValue) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_SummonValue + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_SummonValue"
                    ]
                  }
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
              "variableName": "MDF_SummonValue",
              "value": {
                "operator": "Variables[0] (MDF_SummonValue) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(MDF_SummonValue + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_SummonValue"
                ]
              }
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
      ],
      "stackData": [],
      "latentQueue": [
        "AIFlag"
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
              "variableName": "MDF_SummonValue",
              "value": {
                "operator": "Variables[0] (MDF_SummonValue) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(MDF_SummonValue + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "MDF_SummonValue"
                ]
              }
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
      ],
      "stackData": [],
      "latentQueue": [
        "InsertCheck",
        "AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1579371120\">Monster_Fuyan_RL_SpeedUp</a>[<span class=\"descriptionNumberColor\">Transfer Move</span>]",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedAddedRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_SpeedAddedRatio_PerLayer * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_SpeedAddedRatio_PerLayer",
                  "ModifierLayers"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_SpeedAddedRatio_PerLayer"
      ],
      "latentQueue": [],
      "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_SpeedAddedRatio_PerLayer</span>. This effect can stack.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "Transfer Move",
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1230803206\">Monster_Fuyan_RL_DamageUp</a>[<span class=\"descriptionNumberColor\">Slay Move</span>]",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_DamageUpRatio_PerLayer * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_DamageUpRatio_PerLayer",
                  "ModifierLayers"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageUpRatio_PerLayer"
      ],
      "latentQueue": [],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageUpRatio_PerLayer</span>. This effect can stack.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Slay Move",
      "addStacksPerTrigger": 1
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
                  "variableName": "DeathCount",
                  "value": {
                    "operator": "Variables[0] (DeathCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(DeathCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "DeathCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "ADF_MaxHPValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ADF_HPDamageRatioValue",
                  "value": {
                    "operator": "Constants[0] (1) || Variables[0] (MonsterCount) || DIV || Constants[1] (0.0009999999) || ADD || RETURN",
                    "displayLines": "((1 / MonsterCount) + 0.0009999999)",
                    "constants": [
                      1,
                      0.0009999999
                    ],
                    "variables": [
                      "MonsterCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "ADF_CurrentHPValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ADF_CurrentHPValue",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (ADF_MaxHPValue) || Variables[1] (ADF_HPDamageRatioValue) || MUL || Variables[2] (DeathCount) || MUL || RETURN",
                      "displayLines": "((ADF_MaxHPValue * ADF_HPDamageRatioValue) * DeathCount)",
                      "constants": [],
                      "variables": [
                        "ADF_MaxHPValue",
                        "ADF_HPDamageRatioValue",
                        "DeathCount"
                      ]
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
              "variableName": "AchievementCount",
              "value": 0
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
                      "variableName": "AchievementCount",
                      "value": {
                        "operator": "Variables[0] (AchievementCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(AchievementCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "AchievementCount"
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
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "mustBeAlive2": true,
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
      ],
      "stackData": [],
      "latentQueue": []
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
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
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
                      "scope": "TargetEntity",
                      "variableName": "InsertCheck"
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
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
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
              },
              "stayInTeam": false
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
                        "operator": "Constants[0] (2022110) || RETURN",
                        "displayLines": "2022110",
                        "constants": [
                          2022110
                        ],
                        "variables": []
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
                            "operator": "Constants[0] (2022110) || RETURN",
                            "displayLines": "2022110",
                            "constants": [
                              2022110
                            ],
                            "variables": []
                          },
                          "locationType": "First"
                        },
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (2022110) || RETURN",
                            "displayLines": "2022110",
                            "constants": [
                              2022110
                            ],
                            "variables": []
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
                                "operator": "Constants[0] (8012030) || RETURN",
                                "displayLines": "8012030",
                                "constants": [
                                  8012030
                                ],
                                "variables": []
                              },
                              "locationType": "First"
                            },
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Constants[0] (8012030) || RETURN",
                                "displayLines": "8012030",
                                "constants": [
                                  8012030
                                ],
                                "variables": []
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
              },
              "stayInTeam": false
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
                        "operator": "Constants[0] (2022110) || RETURN",
                        "displayLines": "2022110",
                        "constants": [
                          2022110
                        ],
                        "variables": []
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
                        "operator": "Constants[0] (2022110) || RETURN",
                        "displayLines": "2022110",
                        "constants": [
                          2022110
                        ],
                        "variables": []
                      },
                      "locationType": "First"
                    },
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Constants[0] (2022110) || RETURN",
                        "displayLines": "2022110",
                        "constants": [
                          2022110
                        ],
                        "variables": []
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
                            "operator": "Constants[0] (8012030) || RETURN",
                            "displayLines": "8012030",
                            "constants": [
                              8012030
                            ],
                            "variables": []
                          },
                          "locationType": "First"
                        },
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (8012030) || RETURN",
                            "displayLines": "8012030",
                            "constants": [
                              8012030
                            ],
                            "variables": []
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
              },
              "stayInTeam": false
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
                        "operator": "Constants[0] (2022110) || RETURN",
                        "displayLines": "2022110",
                        "constants": [
                          2022110
                        ],
                        "variables": []
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
                        "operator": "Constants[0] (2022110) || RETURN",
                        "displayLines": "2022110",
                        "constants": [
                          2022110
                        ],
                        "variables": []
                      },
                      "locationType": "First"
                    },
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Constants[0] (2022110) || RETURN",
                        "displayLines": "2022110",
                        "constants": [
                          2022110
                        ],
                        "variables": []
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
                            "operator": "Constants[0] (8012030) || RETURN",
                            "displayLines": "8012030",
                            "constants": [
                              8012030
                            ],
                            "variables": []
                          },
                          "locationType": "First"
                        },
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (8012030) || RETURN",
                            "displayLines": "8012030",
                            "constants": [
                              8012030
                            ],
                            "variables": []
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
              },
              "stayInTeam": false
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
                        "operator": "Constants[0] (2022110) || RETURN",
                        "displayLines": "2022110",
                        "constants": [
                          2022110
                        ],
                        "variables": []
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
                        "operator": "Constants[0] (2022110) || RETURN",
                        "displayLines": "2022110",
                        "constants": [
                          2022110
                        ],
                        "variables": []
                      },
                      "locationType": "First"
                    },
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Constants[0] (2022110) || RETURN",
                        "displayLines": "2022110",
                        "constants": [
                          2022110
                        ],
                        "variables": []
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
                            "operator": "Constants[0] (8012030) || RETURN",
                            "displayLines": "8012030",
                            "constants": [
                              8012030
                            ],
                            "variables": []
                          },
                          "locationType": "First"
                        },
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (8012030) || RETURN",
                            "displayLines": "8012030",
                            "constants": [
                              8012030
                            ],
                            "variables": []
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
      ],
      "stackData": [],
      "latentQueue": []
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
      ],
      "stackData": [],
      "latentQueue": []
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
                  "variableName": "DeathCount",
                  "value": {
                    "operator": "Variables[0] (DeathCount) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(DeathCount + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "DeathCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "ADF_MaxHPValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ADF_HPDamageRatioValue",
                  "value": {
                    "operator": "Constants[0] (1) || Variables[0] (MonsterCount) || DIV || Constants[1] (0.0009999999) || ADD || RETURN",
                    "displayLines": "((1 / MonsterCount) + 0.0009999999)",
                    "constants": [
                      1,
                      0.0009999999
                    ],
                    "variables": [
                      "MonsterCount"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "ADF_CurrentHPValue",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ADF_CurrentHPValue",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (ADF_MaxHPValue) || Variables[1] (ADF_HPDamageRatioValue) || MUL || Variables[2] (DeathCount) || MUL || RETURN",
                      "displayLines": "((ADF_MaxHPValue * ADF_HPDamageRatioValue) * DeathCount)",
                      "constants": [],
                      "variables": [
                        "ADF_MaxHPValue",
                        "ADF_HPDamageRatioValue",
                        "DeathCount"
                      ]
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
              "variableName": "AchievementCount",
              "value": 0
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
                      "variableName": "AchievementCount",
                      "value": {
                        "operator": "Variables[0] (AchievementCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(AchievementCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "AchievementCount"
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
                    "of": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "mustBeAlive2": true,
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
      ],
      "stackData": [],
      "latentQueue": []
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDBase</span>&nbsp;",
              "value": 0
            },
            {
              "name": "Boss Bar Display",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "display": true
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
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1988405555\">Enemy_Fuyan_Born</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
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
          ],
          "priorityLevel": -90
        }
      ],
      "stackData": [],
      "latentQueue": []
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
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}