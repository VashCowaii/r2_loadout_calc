const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Luocha",
  "trimCharacterName": "Luocha",
  "abilityList": [
    "Luocha_Modifiers",
    "Luocha_Luocha_Trace03",
    "Luocha_LocalPlayer_StandardAbility_AttackBreak",
    "Luocha_LocalPlayer_Luocha_TechniqueUsage",
    "Luocha_LocalPlayer_Luocha_NormalAtk01",
    "Luocha_Luocha_TechniqueInLevel",
    "Luocha_Luocha_Ability02_InsertAbility",
    "Luocha_Luocha_Passive01_InsertAbility",
    "Luocha_Luocha_PassiveAbility01",
    "Luocha_Luocha_Ability03_Part02",
    "Luocha_Luocha_Ability03_Part01",
    "Luocha_Luocha_Ability03_EnterReady",
    "Luocha_Luocha_Ability02_Part02",
    "Luocha_Luocha_Ability02_Part01",
    "Luocha_Luocha_Ability01_Part02",
    "Luocha_Luocha_Ability01_Part01"
  ],
  "abilityObject": {
    "Luocha_Modifiers": {
      "fileName": "Luocha_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1327928354\">ADV_StageAbility_Maze_Luocha</a>",
          "counter": 1,
          "stackType": "Merge"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-470154310\">Luocha_Eidolon6_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Reunion With the Dust</span>]",
          "stackType": "ReplaceByCaster",
          "description": "All-Type DMG RES -<span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Debuff",
          "effectName": "All-Type RES Reduction",
          "statusName": "Reunion With the Dust",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(0 - MDF_PropertyRatio)"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1394916865\">Luocha_Eidolon1_ATKUp</a>[<span class=\"descriptionNumberColor\">Ablution of the Quick</span>]",
          "stackType": "ReplaceByCaster",
          "description": "ATK +<span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Ablution of the Quick",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_PropertyRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__905229597\">Luocha_Passive01_InsertMark</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1784149745\">Luocha_Passive01_DisableActionInsertMark</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 1,
                  "variableName": "_insertCheck_"
                },
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Luocha_Passive01_InsertAbility",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "CharacterBuffSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 2,
                  "maximum": 2,
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 2
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Type Was",
                        "statusType": "Debuff"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_insertCheck_",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertCount",
                        "typeValue": 1
                      },
                      "abilityName": "Luocha_Passive01_InsertAbility",
                      "priorityTag": "CharacterBuffSelf",
                      "canHitNonTargets": true,
                      "showInActionOrder": true,
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ],
                      "allowAbilityTriggers": false
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-390780291\">Luocha_Passive01Modifier</a>[<span class=\"descriptionNumberColor\">Abyss Flower</span>]",
          "stackType": "ReplaceByCaster",
          "description": "When the Abyss Flower is fully stacked, Luocha can consume all the stacks to deploy a Zone against the enemy.",
          "type": "Other",
          "statusName": "Abyss Flower",
          "stackLimit": 2,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "HeiyuanLayer",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HeiyuanLayer",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "MDF_PassiveLayer"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"905229597\">Luocha_Passive01_InsertMark</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "displayLines": "HeiyuanLayer"
                      },
                      "bar#": 2
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1468187936\">Luocha_Passive01_HealHPCD</a>[<span class=\"descriptionNumberColor\">Prayer of Abyss Flower</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "description": "Skill effect auto-trigger is on cooldown.",
          "type": "Other",
          "statusName": "Prayer of Abyss Flower",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1298017769\">Luocha_Ability02_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Shield"
          ],
          "description": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
          "type": "Buff",
          "effectName": "Shield",
          "statusName": "Shield",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Hit-Class"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Set Hit-Class",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Create Shield",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "displayLines": "MDF_ShieldValue"
                  },
                  "valuePercent": {
                    "displayLines": "MDF_ShieldPercentage"
                  },
                  "formula": "ATK Scaling (Shield)"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__774057346\">Luocha_Ability02_AddHealRatio</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Heal Target Start [Owner]",
              "execute": [
                {
                  "name": "Adjust Target Healing Stats",
                  "on": "Healer",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
                  "value": {
                    "displayLines": "MDF_AddHealRatio"
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1784149745\">Luocha_Passive01_DisableActionInsertMark</a>",
          "execute": [
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "STAT_CTRL"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "DisableAction"
                          }
                        ]
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"905229597\">Luocha_Passive01_InsertMark</a>"
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
      "references": []
    },
    "Luocha_Luocha_Trace03": {
      "fileName": "Luocha_Luocha_Trace03",
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
          "modifier": "<a class=\"gModGreen\" id=\"-579247332\">M_Luocha_Trace03</a>",
          "valuePerStack": {
            "MDF_Resistance": {
              "displayLines": "0.7"
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-579247332\">M_Luocha_Trace03</a>",
          "stackData": [
            "MDF_Resistance"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": {
                    "displayLines": "MDF_Resistance"
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
    "Luocha_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Luocha_LocalPlayer_StandardAbility_AttackBreak",
      "skillTrigger": "MazeCommonPassve01",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"951318209\">ADV_StageAbility_MazeStandard_OnStageEffect</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-247093964\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Standard</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Physical"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"761715744\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Physical</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Fire"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-380086631\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Fire</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Ice"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-97518784\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Ice</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Thunder"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1597144751\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Thunder</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Wind"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1816746695\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Wind</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Quantum"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-418599870\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Quantum</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Element",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "DamageType": "Imaginary"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1882459002\">ADV_StageAbility_MazeStandard_ListenEnterBattle_Imaginary</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1927069485\">ADV_StageAbility_MazeStandard_ListenEnterBattle_TeamLeader</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Luocha_LocalPlayer_Luocha_TechniqueUsage": {
      "fileName": "Luocha_LocalPlayer_Luocha_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "120301(SkillMaze)",
          "duration": -1
        },
        "Submit Technique Use"
      ],
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Luocha_LocalPlayer_Luocha_NormalAtk01": {
      "fileName": "Luocha_LocalPlayer_Luocha_NormalAtk01",
      "skillTrigger": "NormalAtk",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": "Ability Has a Target",
          "passed": [
            "Deleted bullshit",
            {
              "name": "Overworld Attack Instance"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "In Motion (Overworld)",
                "flag": "FastRun"
              },
              "passed": [
                "Deleted bullshit"
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "In Motion (Overworld)",
                    "flag": "Run"
                  },
                  "passed": [
                    "Deleted bullshit"
                  ],
                  "failed": [
                    "Deleted bullshit"
                  ]
                }
              ]
            },
            {
              "name": "Overworld Attack Instance"
            }
          ]
        }
      ],
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Luocha_Luocha_TechniqueInLevel": {
      "fileName": "Luocha_Luocha_TechniqueInLevel",
      "childAbilityList": [
        "Luocha_Luocha_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-669115084\">Technique_Luocha_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-669115084\">Technique_Luocha_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-390780291\">Luocha_Passive01Modifier</a>[<span class=\"descriptionNumberColor\">Abyss Flower</span>]",
                      "valuePerStack": {
                        "MDF_PassiveLayer": {
                          "displayLines": "2"
                        }
                      },
                      "addStacksPerTrigger": 2
                    }
                  ]
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
    "Luocha_Luocha_Ability02_InsertAbility": {
      "fileName": "Luocha_Luocha_Ability02_InsertAbility",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "IsInserAbilityTrigger"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "TargetList": [
              {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                ]
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Is Entity a Battle Event/Summon",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "invertCondition": true
                }
              }
            ]
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Target Has Lowest/Highest Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "partOf": {
                  "name": "Target Sequence",
                  "TargetList": [
                    {
                      "name": "Join Targets",
                      "TargetList": [
                        {
                          "name": "Target Name",
                          "target": "{{All Team Members(Exclude Self)}}"
                        },
                        {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      ]
                    },
                    {
                      "name": "Target Filter",
                      "conditions": {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    }
                  ]
                },
                "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
                "minOrMax": "Min"
              },
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<=",
                "value2": {
                  "displayLines": "0.5"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1468187936\">Luocha_Passive01_HealHPCD</a>[<span class=\"descriptionNumberColor\">Prayer of Abyss Flower</span>]",
                  "duration": {
                    "displayLines": "2"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1001666346\">Luocha_InsertAbility02_Mark</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-704950893\">Luocha_InsertAbility02_Retarget</a>"
                },
                "Deleted bullshit",
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Luocha_Ability02_Part02",
                  "isTrigger": true
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1001666346\">Luocha_InsertAbility02_Mark</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-704950893\">Luocha_InsertAbility02_Retarget</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "IsInserAbilityTrigger"
                }
              ]
            }
          ]
        }
      ],
      "onAbort": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1001666346\">Luocha_InsertAbility02_Mark</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-704950893\">Luocha_InsertAbility02_Retarget</a>"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "IsInserAbilityTrigger"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "OR",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "STAT_CTRL"
              },
              {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "DisableAction"
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"905229597\">Luocha_Passive01_InsertMark</a>"
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"905229597\">Luocha_Passive01_InsertMark</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1784149745\">Luocha_Passive01_DisableActionInsertMark</a>"
                }
              ]
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Luocha_Luocha_Passive01_InsertAbility": {
      "fileName": "Luocha_Luocha_Passive01_InsertAbility",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "_insertCheck_"
        },
        {
          "name": "Update Displayed Energy Bar",
          "priorState": "Active",
          "bar#": 1
        },
        {
          "name": "UI Display Event",
          "popUpText": "Cycle of Life"
        },
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1807885982\">Luocha_Passive01_HealHPArea</a>",
          "duration": {
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.18"
            },
            "MDF_PropertyRatio": {
              "displayLines": "0.12"
            },
            "MDF_PropertyHealValue": {
              "displayLines": "240"
            },
            "MDF_PropertyValueTraceB2": {
              "displayLines": "0.07"
            },
            "MDF_PropertyHealValueTraceB2": {
              "displayLines": "93"
            },
            "MDF_PropertyRatio_Eidolon1": {
              "displayLines": "0.2"
            },
            "MDF_LifeTime": {
              "displayLines": "2"
            }
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-390780291\">Luocha_Passive01Modifier</a>[<span class=\"descriptionNumberColor\">Abyss Flower</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"905229597\">Luocha_Passive01_InsertMark</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__572527518\">Luocha_Eidolon4_Fatigue</a>[<span class=\"descriptionNumberColor\">Weaken</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_Fatigue"
          ],
          "description": "Deals <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> less DMG.",
          "type": "Debuff",
          "effectName": "Weaken",
          "statusName": "Weaken",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_PropertyRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1838655775\">Luocha_Passive01_HealHPSelf</a>[<span class=\"descriptionNumberColor\">Cycle of Life</span>]",
          "stackType": "ReplaceByCaster",
          "description": "After using an attack on an enemy, restores HP to self.",
          "type": "Other",
          "statusName": "Cycle of Life",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "displayLines": "MDF_PropertyValue"
                  },
                  "healFlat": {
                    "displayLines": "MDF_PropertyHealValue"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Sanctified"
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
                      },
                      "healPercent": {
                        "displayLines": "MDF_PropertyValueSkillTreeB2"
                      },
                      "healFlat": {
                        "displayLines": "MDF_PropertyHealValueSkillTreeB2"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1378311281\">Luocha_Passive01_HealHP</a>[<span class=\"descriptionNumberColor\">Cycle of Life</span>]",
          "stackType": "ReplaceByCaster",
          "description": "After using an attack on an enemy, restores HP to self.",
          "type": "Other",
          "statusName": "Cycle of Life",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "displayLines": "MDF_PropertyValue"
                  },
                  "healFlat": {
                    "displayLines": "MDF_PropertyHealValue"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Sanctified"
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
                      },
                      "healPercent": {
                        "displayLines": "MDF_PropertyValueSkillTreeB2"
                      },
                      "healFlat": {
                        "displayLines": "MDF_PropertyHealValueSkillTreeB2"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1807885982\">Luocha_Passive01_HealHPArea</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "MDF_PropertyValue",
            "MDF_PropertyRatio",
            "MDF_PropertyHealValue",
            "MDF_PropertyValueSkillTreeB2",
            "MDF_PropertyHealValueSkillTreeB2",
            "MDF_PropertyRatio_Rank01",
            "MDF_LifeTime"
          ],
          "latentQueue": [
            "_insertCheck_"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1838655775\">Luocha_Passive01_HealHPSelf</a>[<span class=\"descriptionNumberColor\">Cycle of Life</span>]",
              "duration": {
                "displayLines": "MDF_LifeTime"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "MDF_PropertyValue"
                },
                "MDF_PropertyHealValue": {
                  "displayLines": "MDF_PropertyHealValue"
                },
                "MDF_PropertyValueTraceB2": {
                  "displayLines": "MDF_PropertyValueSkillTreeB2"
                },
                "MDF_PropertyHealValueTraceB2": {
                  "displayLines": "MDF_PropertyHealValueSkillTreeB2"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1378311281\">Luocha_Passive01_HealHP</a>[<span class=\"descriptionNumberColor\">Cycle of Life</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "MDF_PropertyValue"
                },
                "MDF_PropertyHealValue": {
                  "displayLines": "MDF_PropertyHealValue"
                },
                "MDF_PropertyValueTraceB2": {
                  "displayLines": "MDF_PropertyValueSkillTreeB2"
                },
                "MDF_PropertyHealValueTraceB2": {
                  "displayLines": "MDF_PropertyHealValueSkillTreeB2"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1394916865\">Luocha_Eidolon1_ATKUp</a>[<span class=\"descriptionNumberColor\">Ablution of the Quick</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "displayLines": "MDF_PropertyRatio_Rank01"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"572527518\">Luocha_Eidolon4_Fatigue</a>[<span class=\"descriptionNumberColor\">Weaken</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "displayLines": "MDF_PropertyRatio"
                }
              }
            }
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "maximum": 2,
                  "priorState": "Normal",
                  "bar#": 2
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "maximum": 2,
                  "priorState": "Normal",
                  "bar#": 2
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
    "Luocha_Luocha_PassiveAbility01": {
      "fileName": "Luocha_Luocha_PassiveAbility01",
      "childAbilityList": [
        "Luocha_Luocha_PassiveAbility01_Camera",
        "Luocha_Luocha_PassiveAbility01",
        "Luocha_Luocha_Passive01_InsertAbility",
        "Luocha_Luocha_Ability02_InsertAbility"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-613660626\">Luocha_Passive01_QuickHealthHP</a>",
          "valuePerStack": {
            "MDF_HPRatio": {
              "displayLines": "0.5"
            }
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": 2,
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 2
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1001666346\">Luocha_InsertAbility02_Mark</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Luocha_Ability02_InsertAbility",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "CharacterHealOthers",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-704950893\">Luocha_InsertAbility02_Retarget</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-704950893\">Luocha_InsertAbility02_Retarget</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Join Targets",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{All Team Members(Exclude Self)}}"
                          },
                          {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          }
                        ]
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Is Entity a Battle Event/Summon",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "invertCondition": true
                        }
                      }
                    ]
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Target Has Lowest/Highest Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "partOf": {
                          "name": "Target Sequence",
                          "TargetList": [
                            {
                              "name": "Join Targets",
                              "TargetList": [
                                {
                                  "name": "Target Name",
                                  "target": "{{All Team Members(Exclude Self)}}"
                                },
                                {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              ]
                            },
                            {
                              "name": "Target Filter",
                              "conditions": {
                                "name": "Is Entity a Battle Event/Summon",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "invertCondition": true
                              }
                            }
                          ]
                        },
                        "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
                        "minOrMax": "Min"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP",
                        "compareType": ">",
                        "value2": 0
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1001666346\">Luocha_InsertAbility02_Mark</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-613660626\">Luocha_Passive01_QuickHealthHP</a>",
          "stackData": [
            "MDF_HPRatio"
          ],
          "execute": [
            {
              "eventTrigger": "HP Change [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      },
                      {
                        "name": "Is Entity a Battle Event/Summon",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "NOT",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1468187936\">Luocha_Passive01_HealHPCD</a>[<span class=\"descriptionNumberColor\">Prayer of Abyss Flower</span>]"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "flagName": "STAT_CTRL"
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "flagName": "DisableAction"
                              }
                            ]
                          },
                          "failed": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Sequence",
                                "TargetList": [
                                  {
                                    "name": "Join Targets",
                                    "TargetList": [
                                      {
                                        "name": "Target Name",
                                        "target": "{{All Team Members(Exclude Self)}}"
                                      },
                                      {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      }
                                    ]
                                  },
                                  {
                                    "name": "Target Filter",
                                    "conditions": {
                                      "name": "Is Entity a Battle Event/Summon",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "invertCondition": true
                                    }
                                  }
                                ]
                              },
                              "searchRandom": true,
                              "maxTargets": 1,
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Target Has Lowest/Highest Value",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "partOf": {
                                      "name": "Target Sequence",
                                      "TargetList": [
                                        {
                                          "name": "Join Targets",
                                          "TargetList": [
                                            {
                                              "name": "Target Name",
                                              "target": "{{All Team Members(Exclude Self)}}"
                                            },
                                            {
                                              "name": "Target Name",
                                              "target": "{{Caster}}"
                                            }
                                          ]
                                        },
                                        {
                                          "name": "Target Filter",
                                          "conditions": {
                                            "name": "Is Entity a Battle Event/Summon",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Parameter Target}}"
                                            },
                                            "invertCondition": true
                                          }
                                        }
                                      ]
                                    },
                                    "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;",
                                    "minOrMax": "Min"
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "value1": "CurrentHP",
                                    "compareType": ">",
                                    "value2": 0
                                  },
                                  {
                                    "name": "Is Entity a Battle Event/Summon",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "invertCondition": true
                                  }
                                ]
                              },
                              "ifTargetFound": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "value1": "CurrentHP%",
                                    "compareType": "<=",
                                    "value2": {
                                      "displayLines": "MDF_HPRatio"
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-704950893\">Luocha_InsertAbility02_Retarget</a>"
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
              "eventTrigger": "Injected Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "DisableAction"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1001666346\">Luocha_InsertAbility02_Mark</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-704950893\">Luocha_InsertAbility02_Retarget</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "IsInserAbilityTrigger"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"905229597\">Luocha_Passive01_InsertMark</a>"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"905229597\">Luocha_Passive01_InsertMark</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1784149745\">Luocha_Passive01_DisableActionInsertMark</a>"
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
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Luocha_Luocha_Ability03_Part02": {
      "fileName": "Luocha_Luocha_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": {
                  "displayLines": "1"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-470154310\">Luocha_Eidolon6_AllDamageTypeResistance</a>[<span class=\"descriptionNumberColor\">Reunion With the Dust</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "displayLines": "0.2"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "typeOverride": "Buff",
          "dispelCount": {
            "displayLines": "1"
          },
          "dispelOrder": "LastAdded",
          "counterKey": "BuffNumber"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1807885982\">Luocha_Passive01_HealHPArea</a>"
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-390780291\">Luocha_Passive01Modifier</a>[<span class=\"descriptionNumberColor\">Abyss Flower</span>]",
              "valuePerStack": {
                "MDF_PassiveLayer": {
                  "displayLines": "2"
                }
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "displayLines": "2"
            },
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "BuffNumber"
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Luocha_Luocha_Ability03_Part01": {
      "fileName": "Luocha_Luocha_Ability03_Part01",
      "childAbilityList": [
        "Luocha_Luocha_Ability03_Camera",
        "Luocha_Luocha_Ability03_EnterReady",
        "Luocha_Luocha_Ability03_Part01",
        "Luocha_Luocha_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        20,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Luocha_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Luocha_Luocha_Ability03_EnterReady": {
      "fileName": "Luocha_Luocha_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Luocha_Luocha_Ability02_Part02": {
      "fileName": "Luocha_Luocha_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Cleansing Revival"
          },
          "passed": [
            {
              "name": "Dispel Debuffs",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "dispelCount": {
                "displayLines": "1"
              },
              "dispelOrder": "LastAdded"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "value1": "CurrentHP%",
                "compareType": "<",
                "value2": 0.5
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"774057346\">Luocha_Ability02_AddHealRatio</a>",
                  "valuePerStack": {
                    "MDF_AddHealRatio": {
                      "displayLines": "0.3"
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1298017769\">Luocha_Ability02_Shield</a>[<span class=\"descriptionNumberColor\">Shield</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "MDF_ShieldPercentage": {
                      "displayLines": "0.18"
                    },
                    "MDF_ShieldValue": {
                      "displayLines": "240"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "healPercent": {
            "displayLines": "0.6"
          },
          "healFlat": {
            "displayLines": "800"
          }
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Current Action Holder Is",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1807885982\">Luocha_Passive01_HealHPArea</a>"
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-390780291\">Luocha_Passive01Modifier</a>[<span class=\"descriptionNumberColor\">Abyss Flower</span>]",
              "valuePerStack": {
                "MDF_PassiveLayer": {
                  "displayLines": "2"
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "IsInserAbilityTrigger",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            "Trigger: Ability End"
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "IsInserAbilityTrigger"
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Luocha_Luocha_Ability02_Part01": {
      "fileName": "Luocha_Luocha_Ability02_Part01",
      "childAbilityList": [
        "Luocha_Luocha_Ability02_Camera",
        "Luocha_Luocha_Ability02_Part01",
        "Luocha_Luocha_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Luocha_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Ally Target"
      }
    },
    "Luocha_Luocha_Ability01_Part02": {
      "fileName": "Luocha_Luocha_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "displayLines": "1"
            },
            "HitSplit": 0.3,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "displayLines": "1"
            },
            "HitSplit": 0.3,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "displayLines": "1"
            },
            "HitSplit": 0.4,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Luocha_Luocha_Ability01_Part01": {
      "fileName": "Luocha_Luocha_Ability01_Part01",
      "childAbilityList": [
        "Luocha_Luocha_Ability01_Camera",
        "Luocha_Luocha_Ability01_Part01",
        "Luocha_Luocha_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Luocha_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    }
  }
}