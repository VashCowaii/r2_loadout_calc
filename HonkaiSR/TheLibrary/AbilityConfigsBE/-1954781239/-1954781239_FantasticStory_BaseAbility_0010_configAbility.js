const configAbility = {
  "fileName": "-1954781239_FantasticStory_BaseAbility_0010",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0011",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0012",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0013",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0014",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0015",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0016",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0017",
      "scope": "ContextCaster"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DV_FantasticStory_PlusAbility_0018",
      "scope": "ContextCaster"
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
      "variableName": "BattleEvent_BaseHP"
    },
    {
      "name": "Define Custom Variable",
      "value": {
        "displayLines": "(BattleEvent_BaseHP * 90)"
      },
      "variableName": "BattleEvent_BaseHP"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-508947277\">Modifier_FantasticStory_BaseAbility_0010</a>",
      "valuePerStack": {
        "ADF_1": {
          "displayLines": "#ADF_1"
        },
        "ADF_2": {
          "displayLines": "#ADF_2"
        },
        "TempHP": {
          "displayLines": "BattleEvent_BaseHP"
        }
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2046125016\">Modifier_FantasticStory_BaseAbility_0010_plus6_ultraDmgUp</a>[<span class=\"descriptionNumberColor\">Splash</span>]",
      "stackType": "Replace",
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">DmgAddedRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Splash",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "statValue": {
                "displayLines": "DmgAddedRatio"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__637313409\">Modifier_FantasticStory_BaseAbility_0010_plus3_ultraDmgUp</a>[<span class=\"descriptionNumberColor\">Rupture</span>]",
      "stackType": "Replace",
      "description": "Ultimate deals <span class=\"descriptionNumberColor\">DV_FantasticStory_PlusAbility_0013_layerDmg</span> more DMG.",
      "type": "Buff",
      "effectName": "Ultimate DMG Boost",
      "statusName": "Rupture",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "DV_FantasticStory_PlusAbility_0013_layerDmg"
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
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "DV_FantasticStory_PlusAbility_0013_layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(DV_FantasticStory_PlusAbility_0013_layer * DmgAddedRatio)"
              },
              "variableName": "DV_FantasticStory_PlusAbility_0013_layerDmg"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__897813244\">Modifier_FantasticStory_BaseAbility_0010_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "Deathrattle"
      ],
      "description": "When this unit's turn starts or when this unit is defeated, this unit and adjacent targets take a set amount of DMG based on the active number of Shatter stacks.",
      "type": "Debuff",
      "effectName": "Shatter",
      "statusName": "Shatter",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Toggle Skill Mark"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0015",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "Plus5_Layer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-749953922\">Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp</a>[<span class=\"descriptionNumberColor\">Scalded</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(Bomb_Damage * (1 + (Plus5_Layer * DV_FantasticStory_PlusAbility_0015_ADF_1)))"
                  },
                  "variableName": "Plus5_Bomb_Damage"
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageFlat": {
                      "displayLines": "Plus5_Bomb_Damage"
                    },
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Targets Adjacent to Modifier Holder(v2)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 2,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-749953922\">Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp</a>[<span class=\"descriptionNumberColor\">Scalded</span>]"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Modifier Values",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "valueType": "Layer",
                          "variableName": "Plus5_Layer",
                          "modifierName": "<a class=\"gModGreen\" id=\"-749953922\">Modifier_FantasticStory_BaseAbility_0010_plus5_ReceiveDmgUp</a>[<span class=\"descriptionNumberColor\">Scalded</span>]",
                          "multiplier": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "Plus5_Layer"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(Bomb_Damage * (1 + (Plus5_Layer * DV_FantasticStory_PlusAbility_0015_ADF_1)))"
                      },
                      "variableName": "Plus5_Bomb_Damage"
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "displayLines": "Plus5_Bomb_Damage"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "DOT"
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0017",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder and Adjacent Targets}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "displayLines": "(Bomb_Damage * (1 + DV_FantasticStory_PlusAbility_0017_ADF_1))"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "DOT"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Targets Adjacent to Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"897813244\">Modifier_FantasticStory_BaseAbility_0010_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
                      "stackLimit": {
                        "displayLines": "Bomb_MaxLayer"
                      },
                      "valuePerStack": {
                        "Bomb_Damage": {
                          "displayLines": "Bomb_Damage_Initial"
                        },
                        "Bomb_MaxLayer": {
                          "displayLines": "Bomb_MaxLayer"
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder and Adjacent Targets}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageFlat": {
                          "displayLines": "Bomb_Damage"
                        },
                        "dmgFormulaFinal": "Converted DMG Base",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "DOT"
                      }
                    }
                  ]
                }
              ]
            },
            "Modifier Deletes Itself"
          ]
        },
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
              "variableName": "Bomb_Layer",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "Bomb_Damage"
              },
              "variableName": "Bomb_Damage_Initial"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Bomb_Damage * Bomb_Layer)"
              },
              "variableName": "Bomb_Damage"
            },
            {
              "name": "Add Ability",
              "abilityName": "FantasticStory_BaseAbility_0010_Deathrattle_Camera"
            },
            {
              "name": "Add Ability",
              "abilityName": "Modifier_FantasticStory_BaseAbility_0010_Insert"
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0013",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"637313409\">Modifier_FantasticStory_BaseAbility_0010_plus3_ultraDmgUp</a>[<span class=\"descriptionNumberColor\">Rupture</span>]",
                  "stackLimit": {
                    "displayLines": "DV_FantasticStory_PlusAbility_0013_ADF_2"
                  },
                  "valuePerStack": {
                    "DmgAddedRatio": {
                      "displayLines": "DV_FantasticStory_PlusAbility_0013_ADF_1"
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0015",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Modifier_FantasticStory_BaseAbility_0010_Insert",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "EnemyPhaseChange",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "valuePerStack": {
                    "Bomb_Damage_get": {
                      "displayLines": "Bomb_Damage"
                    },
                    "DV_plus5_get": {
                      "displayLines": "DV_FantasticStory_PlusAbility_0015"
                    },
                    "DV_plus5_ADF_1_get": {
                      "displayLines": "DV_FantasticStory_PlusAbility_0015_ADF_1"
                    },
                    "DV_plus5_ADF_2_get": {
                      "displayLines": "DV_FantasticStory_PlusAbility_0015_ADF_2"
                    }
                  },
                  "allowAbilityTriggers": false
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0017",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Modifier_FantasticStory_BaseAbility_0010_Insert",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "valuePerStack": {
                        "Bomb_Damage_get": {
                          "displayLines": "Bomb_Damage"
                        },
                        "DV_plus7_get": {
                          "displayLines": "DV_FantasticStory_PlusAbility_0017"
                        },
                        "DV_plus7_ADF_1_get": {
                          "displayLines": "DV_FantasticStory_PlusAbility_0017_ADF_1"
                        }
                      },
                      "allowAbilityTriggers": false
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Targets Adjacent to Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"897813244\">Modifier_FantasticStory_BaseAbility_0010_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
                      "stackLimit": {
                        "displayLines": "Bomb_MaxLayer"
                      },
                      "valuePerStack": {
                        "Bomb_Damage": {
                          "displayLines": "Bomb_Damage_Initial"
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Inject Ability Use",
                      "abilityName": "Modifier_FantasticStory_BaseAbility_0010_Insert",
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "EnemyPhaseChange",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "valuePerStack": {
                        "Bomb_Damage_get": {
                          "displayLines": "Bomb_Damage"
                        }
                      },
                      "allowAbilityTriggers": false
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
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
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
                    "team": "Player Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Toggle Skill Mark",
                  "toggle": true
                }
              ],
              "failed": [
                {
                  "name": "Toggle Skill Mark"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-808848134\">Modifier_FantasticStory_BaseAbility_0010_sub2_pre</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0011",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
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
                    "value1": "DV_BeingHitCount",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"897813244\">Modifier_FantasticStory_BaseAbility_0010_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
                      "stackLimit": {
                        "displayLines": "ADF_2_get_pre"
                      },
                      "valuePerStack": {
                        "Bomb_Damage": {
                          "displayLines": "(TempHP_get_pre * ADF_1_get_pre)"
                        },
                        "Bomb_MaxLayer": {
                          "displayLines": "ADF_2_get_pre"
                        }
                      },
                      "addStacksPerTrigger": 2
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "DV_BeingHitCount"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0014",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      }
                    ]
                  },
                  "passed": [
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
                            "value1": "DV_BeingHitCount",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Random Chance",
                            "chance": {
                              "displayLines": "DV_FantasticStory_PlusAbility_0014"
                            }
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
                          "modifier": "<a class=\"gModGreen\" id=\"897813244\">Modifier_FantasticStory_BaseAbility_0010_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
                          "stackLimit": {
                            "displayLines": "ADF_2_get_pre"
                          },
                          "valuePerStack": {
                            "Bomb_Damage": {
                              "displayLines": "(TempHP_get_pre * ADF_1_get_pre)"
                            },
                            "Bomb_MaxLayer": {
                              "displayLines": "ADF_2_get_pre"
                            }
                          },
                          "addStacksPerTrigger": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "DV_BeingHitCount"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "DV_FantasticStory_PlusAbility_0018",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextCaster"
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
                            "value1": "DV_BeingHitCount",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "value": 0,
                              "variableName": "DV_BeingHitCount"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": {
                                  "displayLines": "DV_FantasticStory_PlusAbility_0018"
                                }
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"897813244\">Modifier_FantasticStory_BaseAbility_0010_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
                                  "stackLimit": {
                                    "displayLines": "ADF_2_get_pre"
                                  },
                                  "valuePerStack": {
                                    "Bomb_Damage": {
                                      "displayLines": "(TempHP_get_pre * ADF_1_get_pre)"
                                    },
                                    "Bomb_MaxLayer": {
                                      "displayLines": "ADF_2_get_pre"
                                    }
                                  },
                                  "addStacksPerTrigger": 1
                                }
                              ]
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
                            "value1": "DV_BeingHitCount",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"897813244\">Modifier_FantasticStory_BaseAbility_0010_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
                              "stackLimit": {
                                "displayLines": "ADF_2_get_pre"
                              },
                              "valuePerStack": {
                                "Bomb_Damage": {
                                  "displayLines": "(TempHP_get_pre * ADF_1_get_pre)"
                                },
                                "Bomb_MaxLayer": {
                                  "displayLines": "ADF_2_get_pre"
                                }
                              },
                              "addStacksPerTrigger": 1
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": 0,
                              "variableName": "DV_BeingHitCount"
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
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__891295398\">Modifier_FantasticStory_BaseAbility_0010_sub</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Skill Type",
                "skillType": "Ultimate"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-808848134\">Modifier_FantasticStory_BaseAbility_0010_sub2_pre</a>",
                  "valuePerStack": {
                    "TempHP_get_pre": {
                      "displayLines": "TempHP_get"
                    },
                    "ADF_1_get_pre": {
                      "displayLines": "ADF_1_get"
                    },
                    "ADF_2_get_pre": {
                      "displayLines": "ADF_2_get"
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0014",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Skill"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-808848134\">Modifier_FantasticStory_BaseAbility_0010_sub2_pre</a>",
                  "valuePerStack": {
                    "TempHP_get_pre": {
                      "displayLines": "TempHP_get"
                    },
                    "ADF_1_get_pre": {
                      "displayLines": "ADF_1_get"
                    },
                    "ADF_2_get_pre": {
                      "displayLines": "ADF_2_get"
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0018",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-808848134\">Modifier_FantasticStory_BaseAbility_0010_sub2_pre</a>",
                  "valuePerStack": {
                    "TempHP_get_pre": {
                      "displayLines": "TempHP_get"
                    },
                    "ADF_1_get_pre": {
                      "displayLines": "ADF_1_get"
                    },
                    "ADF_2_get_pre": {
                      "displayLines": "ADF_2_get"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Action Completed [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-808848134\">Modifier_FantasticStory_BaseAbility_0010_sub2_pre</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-808848134\">Modifier_FantasticStory_BaseAbility_0010_sub2_pre</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-508947277\">Modifier_FantasticStory_BaseAbility_0010</a>",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "ADF_1",
        "ADF_2",
        "TempHP"
      ],
      "latentQueue": [
        "DV_FantasticStory_PlusAbility_0011",
        "DV_FantasticStory_PlusAbility_0012",
        "DV_FantasticStory_PlusAbility_0013",
        "DV_FantasticStory_PlusAbility_0014",
        "DV_FantasticStory_PlusAbility_0016",
        "DV_FantasticStory_PlusAbility_0018"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"891295398\">Modifier_FantasticStory_BaseAbility_0010_sub</a>",
              "valuePerStack": {
                "TempHP_get": {
                  "displayLines": "TempHP"
                },
                "ADF_1_get": {
                  "displayLines": "ADF_1"
                },
                "ADF_2_get": {
                  "displayLines": "ADF_2"
                }
              }
            }
          ]
        },
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
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"891295398\">Modifier_FantasticStory_BaseAbility_0010_sub</a>",
                  "valuePerStack": {
                    "TempHP_get": {
                      "displayLines": "TempHP"
                    },
                    "ADF_1_get": {
                      "displayLines": "ADF_1"
                    },
                    "ADF_2_get": {
                      "displayLines": "ADF_2"
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0016",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1737739841\">Modifier_FantasticStory_BaseAbility_0010_plus6_sub</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0012",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
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
                    "name": "Random Chance",
                    "chance": {
                      "displayLines": "DV_FantasticStory_PlusAbility_0011"
                    }
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
                  "modifier": "<a class=\"gModGreen\" id=\"897813244\">Modifier_FantasticStory_BaseAbility_0010_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
                  "stackLimit": {
                    "displayLines": "ADF_2"
                  },
                  "valuePerStack": {
                    "Bomb_Damage": {
                      "displayLines": "(TempHP * ADF_1)"
                    },
                    "Bomb_MaxLayer": {
                      "displayLines": "ADF_2"
                    }
                  },
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0015",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1440555734\">Modifier_FantasticStory_BaseAbility_0010_plus5_sub</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "DV_FantasticStory_PlusAbility_0012",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextCaster"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 5,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "displayLines": "DV_FantasticStory_PlusAbility_0011"
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"897813244\">Modifier_FantasticStory_BaseAbility_0010_sub2</a>[<span class=\"descriptionNumberColor\">Shatter</span>]",
                          "stackLimit": {
                            "displayLines": "ADF_2"
                          },
                          "valuePerStack": {
                            "Bomb_Damage": {
                              "displayLines": "(TempHP * ADF_1)"
                            },
                            "Bomb_MaxLayer": {
                              "displayLines": "ADF_2"
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0015",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1440555734\">Modifier_FantasticStory_BaseAbility_0010_plus5_sub</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DV_FantasticStory_PlusAbility_0016",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1737739841\">Modifier_FantasticStory_BaseAbility_0010_plus6_sub</a>"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}