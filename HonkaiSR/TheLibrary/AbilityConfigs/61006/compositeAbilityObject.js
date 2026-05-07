const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 61006,
  "trimCharacterName": 61006,
  "abilityList": [
    "61006_ActionEventAbility_Standard_PassiveAbility",
    "61006_HeliobusActionAbilitySetBoom_Camera",
    "61006_HeliobusActionAbilitySetBoom_Boom",
    "61006_ActionEventAbility_Camera_AllDarkTeam",
    "61006_HeliobusActionAbilitySetBoom_Ability03_Part02",
    "61006_HeliobusActionAbilitySetBoom_Ability03_Part01",
    "61006_HeliobusActionAbilitySetBoom_Ability03_EnterReady",
    "61006_HeliobusActionAbilitySetBoom_Deathrattle"
  ],
  "abilityObject": {
    "61006_ActionEventAbility_Standard_PassiveAbility": {
      "fileName": "61006_ActionEventAbility_Standard_PassiveAbility",
      "childAbilityList": [
        "61006_ActionEventAbility_Standard_PassiveAbility"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "toughnessList": null,
      "parse": [
        {
          "name": "Show BattleEvent Button",
          "show": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1945570590\">Modifier_AutoUseUltraAbility</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1945570590\">Modifier_AutoUseUltraAbility</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Automatically use Ultimate",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  }
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
      }
    },
    "61006_HeliobusActionAbilitySetBoom_Camera": {
      "fileName": "61006_HeliobusActionAbilitySetBoom_Camera",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "61006_HeliobusActionAbilitySetBoom_Boom": {
      "fileName": "61006_HeliobusActionAbilitySetBoom_Boom",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "BombCount",
          "value": 0
        },
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Target Has Lowest/Highest Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "partOf": {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;",
            "minOrMax": "Max"
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "variableName": "_MaxAttack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            }
          ]
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
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1931166042\">Modifier_HeliobusActionAbilitySetBoom_BoomReady</a>",
            "justAddedOrActive": true
          },
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "BombCount",
              "value": {
                "operator": "Variables[0] (BombCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(BombCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "BombCount"
                ]
              }
            },
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "valueType": "Layer",
              "variableName": "_BombLayer",
              "modifierName": "<a class=\"gModGreen\" id=\"-1931166042\">Modifier_HeliobusActionAbilitySetBoom_BoomReady</a>",
              "multiplier": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"848367644\">HeliobusActionAbilitySetBoom_Ability03_BreakListener</a>"
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (_BombLayer) || RETURN",
                "displayLines": "_BombLayer",
                "constants": [],
                "variables": [
                  "_BombLayer"
                ]
              },
              "Event": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "modifierName": "<a class=\"gModGreen\" id=\"-890599250\">Modifier_HeliobusActionAbilitySetBoom_BoomCount</a>[<span class=\"descriptionNumberColor\">Quincunx Smite (Max)</span>]",
                  "multiplier": 1
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageFlat": {
                      "operator": "Variables[0] (Damage) || Variables[1] (_MaxAttack) || MUL || Constants[0] (1) || Variables[2] (AdditionRatio) || Variables[3] (_Layer) || MUL || ADD || MUL || RETURN",
                      "displayLines": "((Damage * _MaxAttack) * (1 + (AdditionRatio * _Layer)))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "Damage",
                        "_MaxAttack",
                        "AdditionRatio",
                        "_Layer"
                      ]
                    },
                    "Toughness": {
                      "displayLines": 30
                    },
                    "ToughnessDMGType": {
                      "DamageType": "Fire"
                    },
                    "Tags": null,
                    "attackType": "Follow-up"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-890599250\">Modifier_HeliobusActionAbilitySetBoom_BoomCount</a>[<span class=\"descriptionNumberColor\">Quincunx Smite (Max)</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (_MaxLayer) || RETURN",
                    "displayLines": "_MaxLayer",
                    "constants": [],
                    "variables": [
                      "_MaxLayer"
                    ]
                  },
                  "valuePerStack": {
                    "DisplayRatio": {
                      "operator": "Variables[0] (AdditionRatio) || RETURN",
                      "displayLines": "AdditionRatio",
                      "constants": [],
                      "variables": [
                        "AdditionRatio"
                      ]
                    },
                    "DisplayMaxLayer": {
                      "operator": "Variables[0] (_MaxLayer) || RETURN",
                      "displayLines": "_MaxLayer",
                      "constants": [],
                      "variables": [
                        "_MaxLayer"
                      ]
                    }
                  }
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Targets Adjacent to Parameter Target}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "valueType": "Layer",
                      "variableName": "_Layer",
                      "modifierName": "<a class=\"gModGreen\" id=\"-890599250\">Modifier_HeliobusActionAbilitySetBoom_BoomCount</a>[<span class=\"descriptionNumberColor\">Quincunx Smite (Max)</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "operator": "Variables[0] (AdjoinDamage) || Variables[1] (_MaxAttack) || MUL || Constants[0] (1) || Variables[2] (AdditionRatio) || Variables[3] (_Layer) || MUL || ADD || MUL || RETURN",
                          "displayLines": "((AdjoinDamage * _MaxAttack) * (1 + (AdditionRatio * _Layer)))",
                          "constants": [
                            1
                          ],
                          "variables": [
                            "AdjoinDamage",
                            "_MaxAttack",
                            "AdditionRatio",
                            "_Layer"
                          ]
                        },
                        "Toughness": {
                          "displayLines": 15
                        },
                        "ToughnessDMGType": {
                          "DamageType": "Fire"
                        },
                        "Tags": null,
                        "attackType": "Follow-up"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-890599250\">Modifier_HeliobusActionAbilitySetBoom_BoomCount</a>[<span class=\"descriptionNumberColor\">Quincunx Smite (Max)</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (_MaxLayer) || RETURN",
                        "displayLines": "_MaxLayer",
                        "constants": [],
                        "variables": [
                          "_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "DisplayRatio": {
                          "operator": "Variables[0] (AdditionRatio) || RETURN",
                          "displayLines": "AdditionRatio",
                          "constants": [],
                          "variables": [
                            "AdditionRatio"
                          ]
                        },
                        "DisplayMaxLayer": {
                          "operator": "Variables[0] (_MaxLayer) || RETURN",
                          "displayLines": "_MaxLayer",
                          "constants": [],
                          "variables": [
                            "_MaxLayer"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"848367644\">HeliobusActionAbilitySetBoom_Ability03_BreakListener</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "BombCount",
            "compareType": ">",
            "value2": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-952948637\">Modifier_HeliobusActionAbilitySetBoom_AchievementListener</a>"
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Level Entity}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-952948637\">Modifier_HeliobusActionAbilitySetBoom_AchievementListener</a>"
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1931166042\">Modifier_HeliobusActionAbilitySetBoom_BoomReady</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "InsertFlag",
          "value": 0
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-890599250\">Modifier_HeliobusActionAbilitySetBoom_BoomCount</a>[<span class=\"descriptionNumberColor\">Quincunx Smite (Max)</span>]",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "DisplayRatio",
            "DisplayMaxLayer"
          ],
          "description": "Each stack increases DMG received from Skyfire Curse by <span class=\"descriptionNumberColor\">DisplayRatio</span>, up to <span class=\"descriptionNumberColor\">DisplayMaxLayer</span> stack(s).",
          "type": "Debuff",
          "effectName": "Quincunx Smite (Max)",
          "statusName": "Quincunx Smite (Max)",
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DisplayRatio",
                  "value": {
                    "operator": "Variables[0] (DisplayRatio) || RETURN",
                    "displayLines": "DisplayRatio",
                    "constants": [],
                    "variables": [
                      "DisplayRatio"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "DisplayMaxLayer",
                  "value": {
                    "operator": "Variables[0] (DisplayMaxLayer) || RETURN",
                    "displayLines": "DisplayMaxLayer",
                    "constants": [],
                    "variables": [
                      "DisplayMaxLayer"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-952948637\">Modifier_HeliobusActionAbilitySetBoom_AchievementListener</a>",
          "functionalTurn": "AnyOneTurn",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Quintuple Savage",
                      "desc": "Simultaneously trigger #1[i] or more \"Quincunx Smite\" and end the battle",
                      "rarity": "Low",
                      "type": "Hidden until Completion",
                      "params": [
                        3
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-952948637\">Modifier_HeliobusActionAbilitySetBoom_AchievementListener</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": 0
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-952948637\">Modifier_HeliobusActionAbilitySetBoom_AchievementListener</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-249465188\">HeliobusActionAbilitySetBoom_Ability03_Break</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"483030905\">StanceBreak_Fire</a>",
                  "variables": {}
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-249465188\">HeliobusActionAbilitySetBoom_Ability03_Break</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__848367644\">HeliobusActionAbilitySetBoom_Ability03_BreakListener</a>",
          "execute": [
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-249465188\">HeliobusActionAbilitySetBoom_Ability03_Break</a>"
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "61006_ActionEventAbility_Camera_AllDarkTeam": {
      "fileName": "61006_ActionEventAbility_Camera_AllDarkTeam",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "61006_HeliobusActionAbilitySetBoom_Ability03_Part02": {
      "fileName": "61006_HeliobusActionAbilitySetBoom_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "UI Display Event",
          "popUpText": "Edict: Quincunx Smite"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"694207004\">Modifier_HeliobusActionAbilitySetBoom_Listener</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1380032969\">Modifier_HeliobusActionAbilitySetBoom_Boom</a>[<span class=\"descriptionNumberColor\">Quincunx Smite</span>]",
          "stackLimit": {
            "operator": "Variables[0] (#BattleEvent_P1_ADF) || RETURN",
            "displayLines": "#BattleEvent_P1_ADF",
            "constants": [],
            "variables": [
              "#BattleEvent_P1_ADF"
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1931166042\">Modifier_HeliobusActionAbilitySetBoom_BoomReady</a>",
          "modifierFlags": [
            "KeepOnDeathrattle",
            "Deathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Ability",
                  "abilityName": "HeliobusActionAbilitySetBoom_Deathrattle"
                }
              ]
            },
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "HeliobusActionAbilitySetBoom_Deathrattle",
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
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1380032969\">Modifier_HeliobusActionAbilitySetBoom_Boom</a>[<span class=\"descriptionNumberColor\">Quincunx Smite</span>]",
          "stackType": "ReplaceByCaster",
          "description": "After being attacked, deals DMG to the unit with this effect, and targets adjacent to that unit.",
          "type": "Debuff",
          "effectName": "Quincunx Smite",
          "statusName": "Quincunx Smite",
          "addStacksPerTrigger": 1,
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
                  "modifier": "<a class=\"gModGreen\" id=\"-208900353\">Modifier_HeliobusActionAbilitySetBoom_BoomMarkOff</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-208900353\">Modifier_HeliobusActionAbilitySetBoom_BoomMarkOff</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Battle Event ID",
                    "ID": 61006,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "valueType": "Layer",
                      "variableName": "_BombCountLayer",
                      "multiplier": 1
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1931166042\">Modifier_HeliobusActionAbilitySetBoom_BoomReady</a>",
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_BombCountLayer) || RETURN",
                        "displayLines": "_BombCountLayer",
                        "constants": [],
                        "variables": [
                          "_BombCountLayer"
                        ]
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1380032969\">Modifier_HeliobusActionAbilitySetBoom_Boom</a>[<span class=\"descriptionNumberColor\">Quincunx Smite</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
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
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Target List}}"
                        },
                        "mustBeAlive2": true
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
          "for": "<a class=\"gModGreen\" id=\"mod__-208900353\">Modifier_HeliobusActionAbilitySetBoom_BoomMarkOff</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "Toggle Skill Mark"
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
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player's Aim Target List}}"
                        },
                        "mustBeAlive2": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Toggle Skill Mark"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Toggle Skill Mark",
                      "toggle": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__694207004\">Modifier_HeliobusActionAbilitySetBoom_Listener</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
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
                  "variableName": "InsertFlag"
                }
              ]
            },
            {
              "eventTrigger": "Action End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "InsertFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1931166042\">Modifier_HeliobusActionAbilitySetBoom_BoomReady</a>",
                        "justAddedOrActive": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "HeliobusActionAbilitySetBoom_Boom",
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
                          "valuePerStack": {
                            "Damage": {
                              "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                              "displayLines": "#BattleEvent_P2_ADF",
                              "constants": [],
                              "variables": [
                                "#BattleEvent_P2_ADF"
                              ]
                            },
                            "AdjoinDamage": {
                              "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                              "displayLines": "#BattleEvent_P3_ADF",
                              "constants": [],
                              "variables": [
                                "#BattleEvent_P3_ADF"
                              ]
                            },
                            "AdditionRatio": {
                              "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
                              "displayLines": "#BattleEvent_P4_ADF",
                              "constants": [],
                              "variables": [
                                "#BattleEvent_P4_ADF"
                              ]
                            },
                            "_MaxLayer": {
                              "operator": "Variables[0] (#BattleEvent_P5_ADF) || RETURN",
                              "displayLines": "#BattleEvent_P5_ADF",
                              "constants": [],
                              "variables": [
                                "#BattleEvent_P5_ADF"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "InsertFlag",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "InsertFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1931166042\">Modifier_HeliobusActionAbilitySetBoom_BoomReady</a>",
                        "justAddedOrActive": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "HeliobusActionAbilitySetBoom_Boom",
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
                          "valuePerStack": {
                            "Damage": {
                              "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                              "displayLines": "#BattleEvent_P2_ADF",
                              "constants": [],
                              "variables": [
                                "#BattleEvent_P2_ADF"
                              ]
                            },
                            "AdjoinDamage": {
                              "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                              "displayLines": "#BattleEvent_P3_ADF",
                              "constants": [],
                              "variables": [
                                "#BattleEvent_P3_ADF"
                              ]
                            },
                            "AdditionRatio": {
                              "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
                              "displayLines": "#BattleEvent_P4_ADF",
                              "constants": [],
                              "variables": [
                                "#BattleEvent_P4_ADF"
                              ]
                            },
                            "_MaxLayer": {
                              "operator": "Variables[0] (#BattleEvent_P5_ADF) || RETURN",
                              "displayLines": "#BattleEvent_P5_ADF",
                              "constants": [],
                              "variables": [
                                "#BattleEvent_P5_ADF"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "InsertFlag",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "InsertFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1931166042\">Modifier_HeliobusActionAbilitySetBoom_BoomReady</a>",
                        "justAddedOrActive": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "HeliobusActionAbilitySetBoom_Boom",
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
                          "valuePerStack": {
                            "Damage": {
                              "operator": "Variables[0] (#BattleEvent_P2_ADF) || RETURN",
                              "displayLines": "#BattleEvent_P2_ADF",
                              "constants": [],
                              "variables": [
                                "#BattleEvent_P2_ADF"
                              ]
                            },
                            "AdjoinDamage": {
                              "operator": "Variables[0] (#BattleEvent_P3_ADF) || RETURN",
                              "displayLines": "#BattleEvent_P3_ADF",
                              "constants": [],
                              "variables": [
                                "#BattleEvent_P3_ADF"
                              ]
                            },
                            "AdditionRatio": {
                              "operator": "Variables[0] (#BattleEvent_P4_ADF) || RETURN",
                              "displayLines": "#BattleEvent_P4_ADF",
                              "constants": [],
                              "variables": [
                                "#BattleEvent_P4_ADF"
                              ]
                            },
                            "_MaxLayer": {
                              "operator": "Variables[0] (#BattleEvent_P5_ADF) || RETURN",
                              "displayLines": "#BattleEvent_P5_ADF",
                              "constants": [],
                              "variables": [
                                "#BattleEvent_P5_ADF"
                              ]
                            }
                          },
                          "allowAbilityTriggers": false
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "InsertFlag",
                          "value": 1
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
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      }
    },
    "61006_HeliobusActionAbilitySetBoom_Ability03_Part01": {
      "fileName": "61006_HeliobusActionAbilitySetBoom_Ability03_Part01",
      "childAbilityList": [
        "61006_HeliobusActionAbilitySetBoom_Ability03_EnterReady",
        "61006_HeliobusActionAbilitySetBoom_Ability03_Part01",
        "61006_HeliobusActionAbilitySetBoom_Ability03_Part02",
        "61006_ActionEventAbility_Camera_AllDarkTeam",
        "61006_HeliobusActionAbilitySetBoom_Boom",
        "61006_HeliobusActionAbilitySetBoom_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "HeliobusActionAbilitySetBoom_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "All Enemy Team Members"
      },
      "realTargetData": {
        "primaryTarget": "All Enemy Team"
      }
    },
    "61006_HeliobusActionAbilitySetBoom_Ability03_EnterReady": {
      "fileName": "61006_HeliobusActionAbilitySetBoom_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "61006_HeliobusActionAbilitySetBoom_Deathrattle": {
      "fileName": "61006_HeliobusActionAbilitySetBoom_Deathrattle",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    }
  },
  "enemyData": {
    "Skill03": {
      "skillID": 6100601,
      "trigger": "Skill03",
      "name": "Edict: Quincunx Smite",
      "type": "AoE",
      "slot": "Ultimate",
      "desc": "Apply 1 stack of Skyfire Curse to all enemies for a maximum of #1[i] stacks. This exorcismics only requires 1 charge. Skyfire Curse will detonate after the affected target is attacked. When Skyfire Curse detonates, deals Fire DMG equal to #2[i]% of the ATK of the ally with the highest ATK on the team to affected targets, and deals Fire DMG equal to #3[i]% of the ATK of the ally with the highest ATK to adjacent targets. The target's and adjacent enemies' subsequent Skyfire Curse DMG received are increased by #4[i]%, stacking up to #5[i] time(s).",
      "energyCost": 100,
      "energyRegen": null,
      "energyRate": 0.5,
      "toughnessReductionDisplayed": null,
      "skillPointCost": 0,
      "skillPointGain": 0,
      "params": {
        "1": [
          0
        ]
      },
      "skillEffect": "AoEAttack",
      "maxLevel": 1,
      "configAbilityList": [
        "Avatar_HeliobusActionAbilitySetBoom_Skill03_EnterReady",
        "Avatar_HeliobusActionAbilitySetBoom_Skill03_Phase01",
        "Avatar_HeliobusActionAbilitySetBoom_Skill03_Phase02",
        "ActionEventAbility_Camera_AllDarkTeam",
        "HeliobusActionAbilitySetBoom_Boom",
        "HeliobusActionAbilitySetBoom_Camera"
      ],
      "toughnessList": [
        0,
        0,
        0
      ],
      "hitSplits": []
    }
  },
  "isBattleEvent": true
}