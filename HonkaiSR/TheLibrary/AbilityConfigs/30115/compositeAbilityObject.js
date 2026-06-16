const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 30115,
  "trimCharacterName": 30115,
  "abilityList": [
    "30115_Modifiers",
    "30115_BattleEventAbility_Challenge_Month_15",
    "30115_Standard_Servant_Forcekill",
    "30115_Modifier_BattleEventAbility_Challenge_Deathrattle_Camera",
    "30115_Modifier_BattleEventAbility_Challenge_Month_15_Insert",
    "30115_Functions"
  ],
  "abilityObject": {
    "30115_Modifiers": {
      "fileName": "30115_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1651606625\">MDF_RogueDLCAchievementListener</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "count",
                  "value": {
                    "operator": "Variables[0] (count) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(count + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "count"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "count",
                    "compareType": "=",
                    "value2": 10
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "All Watched Over By Machines of Loving Grace",
                          "desc": "In Simulated Universe: Gold and Gears, endure #1[i] or more Resonance Extrapolation(s) in a single battle",
                          "rarity": "Low",
                          "type": "Hidden until Completion",
                          "params": [
                            10
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1651606625\">MDF_RogueDLCAchievementListener</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1216668349\">Challenge_Camera_AllTeam_Temp_2</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1216668349\">Challenge_Camera_AllTeam_Temp_2</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1166335492\">Challenge_Camera_AllTeam_Temp_1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1166335492\">Challenge_Camera_AllTeam_Temp_1</a>"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "30115_BattleEventAbility_Challenge_Month_15": {
      "fileName": "30115_BattleEventAbility_Challenge_Month_15",
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
          "modifier": "<a class=\"gModGreen\" id=\"1204010717\">Modifier_BattleEventAbility_Challenge_Month_15</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__936753060\">Modifier_BattleEventAbility_Challenge_Month_15_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
          "modifierFlags": [
            "Deathrattle",
            "RemoveWhenCasterDead"
          ],
          "description": "Increases the received Skill and Ultimate DMG by <span class=\"descriptionNumberColor\">#BattleEvent_P1_ADF</span>. After this unit gets defeated, inflicts all enemies with Vulnerability.",
          "type": "Debuff",
          "effectName": "Memory Imprint",
          "statusName": "Memory Imprint",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Standard_Servant_Forcekill"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate",
                      "Skill"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "#BattleEvent_P1_ADF"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "Modifier_BattleEventAbility_Challenge_Deathrattle_Camera"
                },
                {
                  "name": "Add Ability",
                  "abilityName": "Modifier_BattleEventAbility_Challenge_Month_15_Insert"
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "NOT",
                        "condition": {
                          "name": "Character ID",
                          "ID": 800205000,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": null
                        }
                      },
                      "noTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Standard_Servant_Forcekill",
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "priorityTag": "EnemyForceKill",
                          "ownerState": "Mask_AliveOrRevivable",
                          "targetState": "Mask_AliveOrRevivable",
                          "canHitNonTargets": true,
                          "allowAbilityTriggers": false
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
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "silent": true
                },
                {
                  "name": "Mark Entity For Immediate Death"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Modifier_BattleEventAbility_Challenge_Month_15_Insert",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "EnemyDeathEffect",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "valuePerStack": {
                    "_LifeTime": {
                      "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P3_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P3_ADF"
                      ]
                    },
                    "_MaxLayer": {
                      "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P4_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P4_ADF"
                      ]
                    },
                    "_DamageTakenRatio": {
                      "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                      "displayLines": "#BattleEvent_P2_ADF",
                      "constants": [],
                      "variables": [
                        "#BattleEvent_P2_ADF"
                      ]
                    }
                  },
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1204010717\">Modifier_BattleEventAbility_Challenge_Month_15</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Enemy Team is Dead",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "compareType": "<=",
                        "value2": 4,
                        "livingTargets": true
                      }
                    ]
                  },
                  "passed": [
                    "Deleted bullshit",
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0.5,
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Constants[0] (800205000) || RETURN",
                            "displayLines": "800205000",
                            "constants": [
                              800205000
                            ],
                            "variables": []
                          },
                          "locationType": "LastDie"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "BattleEventAbility_SummonMonsterInfinite_Camera"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 800205000,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"936753060\">Modifier_BattleEventAbility_Challenge_Month_15_Sub</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                "Deleted bullshit",
                {
                  "name": "Create Enemies",
                  "delayPercent": 0.5,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Constants[0] (800205000) || RETURN",
                        "displayLines": "800205000",
                        "constants": [
                          800205000
                        ],
                        "variables": []
                      },
                      "locationType": "Last"
                    }
                  ]
                }
              ],
              "priorityLevel": -45
            }
          ]
        }
      ]
    },
    "30115_Standard_Servant_Forcekill": {
      "fileName": "30115_Standard_Servant_Forcekill",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Force Entity Death",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "abortInsertedAbilities": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "30115_Modifier_BattleEventAbility_Challenge_Deathrattle_Camera": {
      "fileName": "30115_Modifier_BattleEventAbility_Challenge_Deathrattle_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "30115_Modifier_BattleEventAbility_Challenge_Month_15_Insert": {
      "fileName": "30115_Modifier_BattleEventAbility_Challenge_Month_15_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2070937890\">Modifier_BattleEventAbility_Challenge_Month_15_Sub2</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "duration": {
            "operator": "Variables[0] (_LifeTime) || RETURN",
            "displayLines": "_LifeTime",
            "constants": [],
            "variables": [
              "_LifeTime"
            ]
          },
          "stackLimit": {
            "operator": "Variables[0] (_MaxLayer) || RETURN",
            "displayLines": "_MaxLayer",
            "constants": [],
            "variables": [
              "_MaxLayer"
            ]
          },
          "valuePerStack": {
            "DamageTakenRatio": {
              "operator": "Variables[0] (_DamageTakenRatio) || RETURN",
              "displayLines": "_DamageTakenRatio",
              "constants": [],
              "variables": [
                "_DamageTakenRatio"
              ]
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2070937890\">Modifier_BattleEventAbility_Challenge_Month_15_Sub2</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "stackType": "Replace",
          "stackData": [
            "DamageTakenRatio"
          ],
          "description": "Each stack increases the received DMG by <span class=\"descriptionNumberColor\">DamageTakenRatio</span>, up to 2 stacks.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability",
          "stackLimit": 2,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (DamageTakenRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(DamageTakenRatio * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "DamageTakenRatio",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "30115_Functions": {
      "fileName": "30115_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 1,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__312988714\">BAttleEventAbility_AddWeakness</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Physical",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Function's Target List}}"
                    },
                    "DamageType": "Physical",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoPhysical"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoPhysical"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoPhysical",
                  "value": 1000
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Wind",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Function's Target List}}"
                    },
                    "DamageType": "Wind",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoWind"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoWind"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoWind",
                  "value": 1000
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Fire",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Function's Target List}}"
                    },
                    "DamageType": "Fire",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoFire"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoFire"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoFire",
                  "value": 1000
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Thunder",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Function's Target List}}"
                    },
                    "DamageType": "Thunder",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoThunder"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoThunder"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoThunder",
                  "value": 1000
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Ice",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Function's Target List}}"
                    },
                    "DamageType": "Ice",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoIce"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoIce"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoIce",
                  "value": 1000
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Quantum",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Function's Target List}}"
                    },
                    "DamageType": "Quantum",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoQuantum"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoQuantum"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoQuantum",
                  "value": 1000
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Weakness",
                "target": {
                  "name": "Target Name",
                  "target": "{{Function's Target List}}"
                },
                "DamageType": "Imaginary",
                "weaknessFilter": "All"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Function's Target List}}"
                    },
                    "DamageType": "Imaginary",
                    "weaknessFilter": "AllDefault"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoImaginary"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "ContextTaskTemplate",
                      "variableName": "TDF_NoImaginary"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "ContextTaskTemplate",
                  "variableName": "TDF_NoImaginary",
                  "value": 1000
                }
              ]
            },
            {
              "name": "Random Event",
              "odds": [
                {
                  "operator": "Variables[0] (TDF_NoPhysical) || RETURN",
                  "displayLines": "TDF_NoPhysical",
                  "constants": [],
                  "variables": [
                    "TDF_NoPhysical"
                  ]
                },
                {
                  "operator": "Variables[0] (TDF_NoWind) || RETURN",
                  "displayLines": "TDF_NoWind",
                  "constants": [],
                  "variables": [
                    "TDF_NoWind"
                  ]
                },
                {
                  "operator": "Variables[0] (TDF_NoFire) || RETURN",
                  "displayLines": "TDF_NoFire",
                  "constants": [],
                  "variables": [
                    "TDF_NoFire"
                  ]
                },
                {
                  "operator": "Variables[0] (TDF_NoThunder) || RETURN",
                  "displayLines": "TDF_NoThunder",
                  "constants": [],
                  "variables": [
                    "TDF_NoThunder"
                  ]
                },
                {
                  "operator": "Variables[0] (TDF_NoIce) || RETURN",
                  "displayLines": "TDF_NoIce",
                  "constants": [],
                  "variables": [
                    "TDF_NoIce"
                  ]
                },
                {
                  "operator": "Variables[0] (TDF_NoQuantum) || RETURN",
                  "displayLines": "TDF_NoQuantum",
                  "constants": [],
                  "variables": [
                    "TDF_NoQuantum"
                  ]
                },
                {
                  "operator": "Variables[0] (TDF_NoImaginary) || RETURN",
                  "displayLines": "TDF_NoImaginary",
                  "constants": [],
                  "variables": [
                    "TDF_NoImaginary"
                  ]
                }
              ],
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Function's Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"853477559\">BAttleEventAbility_Weakness_Physical</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Function's Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1329707912\">BAttleEventAbility_Weakness_Wind</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Function's Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-944583698\">BAttleEventAbility_Weakness_Fire</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Function's Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"89731232\">BAttleEventAbility_Weakness_Thunder</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Function's Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"436644401\">BAttleEventAbility_Weakness_Ice</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Function's Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1163813471\">BAttleEventAbility_Weakness_Quantum</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Function's Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1189881261\">BAttleEventAbility_Weakness_Imaginary</a>"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  },
  "enemyData": {},
  "isBattleEvent": true
}