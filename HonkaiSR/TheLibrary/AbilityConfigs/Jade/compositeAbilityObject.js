const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Jade",
  "trimCharacterName": "Jade",
  "abilityList": [
    "Jade_Modifiers",
    "Jade_Jade_Trace02",
    "Jade_LocalPlayer_StandardAbility_AttackBreak",
    "Jade_LocalPlayer_Jade_TechniqueUsage",
    "Jade_LocalPlayer_Jade_NormalAtk01",
    "Jade_Jade_TechniqueInLevel",
    "Jade_Jade_Passive_Part02_02",
    "Jade_Jade_Passive_Part02_01",
    "Jade_Jade_Passive_Part01",
    "Jade_Jade_PassiveAbility01",
    "Jade_Jade_Ability03_Part02",
    "Jade_Jade_Ability03_Part01",
    "Jade_Jade_Ability03_EnterReady",
    "Jade_Jade_Ability02_Part02",
    "Jade_Jade_Ability02_Part01",
    "Jade_Jade_Ability01_Part02",
    "Jade_Jade_Ability01_Part01"
  ],
  "abilityObject": {
    "Jade_Modifiers": {
      "fileName": "Jade_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-842574102\">ADV_StageAbility_Maze_Jade</a>",
          "counter": 1,
          "stackType": "Replace",
          "modifierFlags": [
            "Blind"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1106061455\">ADV_StageAbility_Maze_Jade_Flag</a>",
          "counter": 1,
          "stackType": "Merge"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1900960567\">ADV_StageAbility_Maze_Jade_TiggerExit</a>",
          "stackType": "Merge",
          "onCreation": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Team Leader",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                }
              },
              "passed": [
                {
                  "name": "Create Overworld Entity",
                  "summonID": 13141
                }
              ]
            }
          ],
          "onRemoval": [
            {
              "name": "Remove Overworld Entity",
              "summon": {
                "name": "Add Target by Summoned Units",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "summonID": 13141
              }
            }
          ],
          "onStageEntry": [
            {
              "name": "Create Overworld Entity",
              "summonID": 13141
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__68476876\">Jade_Eidolon6_QuantumPenetrate</a>",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumPEN</span>&nbsp;",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1189146824\">Jade_Eidolon4_DefPenetrate</a>[<span class=\"descriptionNumberColor\">Sincerity? Put Option Only</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of enemy targets' DEF.",
          "type": "Buff",
          "effectName": "Sincerity? Put Option Only",
          "statusName": "Sincerity? Put Option Only",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                          "value": "-MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-759179558\">Jade_Eidolon2_CriticalChance</a>[<span class=\"descriptionNumberColor\">Morality? Herein Authenticated</span>]",
          "description": "Increases CRIT Rate by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT Rate Boost",
          "statusName": "Morality? Herein Authenticated",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1701847025\">Jade_Eidolon1_InsertDamageRatio</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "MDF_PropertyValue"
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
          "for": "<a class=\"gModGreen\" id=\"mod__477418814\">Jade_Passive_contract</a>",
          "modifierFlags": [
            "KeepOnDeathrattle",
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage End [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_AttackFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1749110767\">Jade_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"119818662\">Jade_Eidolon6_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                              }
                            ]
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "_HitFlag",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_HitFlag",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_RateLayer",
                          "value": {
                            "operator": "Variables[0] (_RateLayer) || Variables[1] (Jade_Passive_BPBuffAddLayer) || ADD || RETURN",
                            "displayLines": "(_RateLayer + Jade_Passive_BPBuffAddLayer)",
                            "constants": [],
                            "variables": [
                              "_RateLayer",
                              "Jade_Passive_BPBuffAddLayer"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked [Owner]: Start",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_AttackFlag",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1749110767\">Jade_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"119818662\">Jade_Eidolon6_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_AttackFlag",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_HitFlag",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2143808418\">Jade_Passive_Rate</a>[<span class=\"descriptionNumberColor\">Pawned Asset</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Each stack increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Pawned Asset",
          "statusName": "Pawned Asset",
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
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_Layer",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (15) || RETURN",
                          "displayLines": "15",
                          "constants": [],
                          "variables": [
                            15
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-759179558\">Jade_Eidolon2_CriticalChance</a>[<span class=\"descriptionNumberColor\">Morality? Herein Authenticated</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.18) || RETURN",
                          "displayLines": "0.18",
                          "constants": [],
                          "variables": [
                            0.18
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue",
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Asset Forfeiture"
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                        "displayLines": "(MDF_PropertyValue2 * MDF_Layer)",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue2",
                          "MDF_Layer"
                        ]
                      }
                    },
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "Every stack increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1339849421\">Jade_Passive_Count</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        }
      ],
      "references": []
    },
    "Jade_Jade_Trace02": {
      "fileName": "Jade_Jade_Trace02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1956050692\">Jade_Tree02</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1956050692\">Jade_Tree02</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
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
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "advanceType": "Advance",
                      "multiAdd": "-0.5"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Jade_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Jade_LocalPlayer_StandardAbility_AttackBreak",
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Physical"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Fire"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Ice"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Thunder"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Wind"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Quantum"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Imaginary"
            }
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
    "Jade_LocalPlayer_Jade_TechniqueUsage": {
      "fileName": "Jade_LocalPlayer_Jade_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Overworld Attack Instance",
          "onAttack": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": null,
              "ID": "131401(SkillMaze)",
              "duration": {
                "operator": "Variables[0] (10) || RETURN",
                "displayLines": "10",
                "constants": [],
                "variables": [
                  10
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1106061455\">ADV_StageAbility_Maze_Jade_Flag</a>",
              "duration": {
                "operator": "Variables[0] (10) || RETURN",
                "displayLines": "10",
                "constants": [],
                "variables": [
                  10
                ]
              }
            }
          ]
        }
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
    "Jade_LocalPlayer_Jade_NormalAtk01": {
      "fileName": "Jade_LocalPlayer_Jade_NormalAtk01",
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
    "Jade_Jade_TechniqueInLevel": {
      "fileName": "Jade_Jade_TechniqueInLevel",
      "childAbilityList": [
        "Jade_Jade_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"-78900852\">StageAbility_Maze_Jade_Modifier</a>",
          "valuePerStack": {
            "MDF_HitNumb_Maze": 0
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-78900852\">StageAbility_Maze_Jade_Modifier</a>",
          "stackData": [
            "MDF_HitNumb_Maze"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
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
                          "target": "{{Level Entity}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1904238030\">StageAbility_MazeStandard_EnterBattle_Monster_Modifier</a>",
                        "invertCondition": true
                      },
                      {
                        "name": "Technique Modifies Current Wave"
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
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Quantum",
                            "Damage": {
                              "operator": "Variables[0] (0.5) || RETURN",
                              "displayLines": "0.5",
                              "constants": [],
                              "variables": [
                                0.5
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Technique"
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_RateLayer",
                          "value": {
                            "operator": "Variables[0] (_RateLayer) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(_RateLayer + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_RateLayer"
                            ]
                          }
                        }
                      ]
                    },
                    "Trigger: Attack End",
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2143808418\">Jade_Passive_Rate</a>[<span class=\"descriptionNumberColor\">Pawned Asset</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (50) || RETURN",
                        "displayLines": "50",
                        "constants": [],
                        "variables": [
                          50
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.024) || RETURN",
                          "displayLines": "0.024",
                          "constants": [],
                          "variables": [
                            0.024
                          ]
                        },
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (0.005) || RETURN",
                          "displayLines": "0.005",
                          "constants": [],
                          "variables": [
                            0.005
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (15) || RETURN",
                        "displayLines": "15",
                        "constants": [],
                        "variables": [
                          15
                        ]
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -60
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
    "Jade_Jade_Passive_Part02_02": {
      "fileName": "Jade_Jade_Passive_Part02_02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1701847025\">Jade_Eidolon1_InsertDamageRatio</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.32) || RETURN",
                  "displayLines": "0.32",
                  "constants": [],
                  "variables": [
                    0.32
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_RateLayer",
          "value": {
            "operator": "Variables[0] (_RateLayer) || Variables[1] (_InsertTriggerCount) || SUB || RETURN",
            "displayLines": "(_RateLayer - _InsertTriggerCount)",
            "constants": [],
            "variables": [
              "_RateLayer",
              "_InsertTriggerCount"
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (_RateLayer) || RETURN",
            "displayLines": "_RateLayer",
            "constants": [],
            "variables": [
              "_RateLayer"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2143808418\">Jade_Passive_Rate</a>[<span class=\"descriptionNumberColor\">Pawned Asset</span>]",
          "stackLimit": {
            "operator": "Variables[0] (50) || RETURN",
            "displayLines": "50",
            "constants": [],
            "variables": [
              50
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.024) || RETURN",
              "displayLines": "0.024",
              "constants": [],
              "variables": [
                0.024
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (5) || RETURN",
            "displayLines": "5",
            "constants": [],
            "variables": [
              5
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || Variables[1] (0.8) || ADD || RETURN",
              "displayLines": "(1.2 + 0.8)",
              "constants": [],
              "variables": [
                1.2,
                0.8
              ]
            },
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || Variables[1] (0.8) || ADD || RETURN",
              "displayLines": "(1.2 + 0.8)",
              "constants": [],
              "variables": [
                1.2,
                0.8
              ]
            },
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || Variables[1] (0.8) || ADD || RETURN",
              "displayLines": "(1.2 + 0.8)",
              "constants": [],
              "variables": [
                1.2,
                0.8
              ]
            },
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || Variables[1] (0.8) || ADD || RETURN",
              "displayLines": "(1.2 + 0.8)",
              "constants": [],
              "variables": [
                1.2,
                0.8
              ]
            },
            "HitSplit": 0.1,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || Variables[1] (0.8) || ADD || RETURN",
              "displayLines": "(1.2 + 0.8)",
              "constants": [],
              "variables": [
                1.2,
                0.8
              ]
            },
            "HitSplit": 0.6,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1701847025\">Jade_Eidolon1_InsertDamageRatio</a>"
            }
          ]
        },
        {
          "name": "Define Modifier Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"-1732030848\">Jade_Ultimate_Insert</a>[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]",
          "function": "Add"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Jade_Jade_Passive_Part02_01": {
      "fileName": "Jade_Jade_Passive_Part02_01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1701847025\">Jade_Eidolon1_InsertDamageRatio</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.32) || RETURN",
                  "displayLines": "0.32",
                  "constants": [],
                  "variables": [
                    0.32
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_RateLayer",
          "value": {
            "operator": "Variables[0] (_RateLayer) || Variables[1] (_InsertTriggerCount) || SUB || RETURN",
            "displayLines": "(_RateLayer - _InsertTriggerCount)",
            "constants": [],
            "variables": [
              "_RateLayer",
              "_InsertTriggerCount"
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (_RateLayer) || RETURN",
            "displayLines": "_RateLayer",
            "constants": [],
            "variables": [
              "_RateLayer"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2143808418\">Jade_Passive_Rate</a>[<span class=\"descriptionNumberColor\">Pawned Asset</span>]",
          "stackLimit": {
            "operator": "Variables[0] (50) || RETURN",
            "displayLines": "50",
            "constants": [],
            "variables": [
              50
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.024) || RETURN",
              "displayLines": "0.024",
              "constants": [],
              "variables": [
                0.024
              ]
            }
          },
          "addStacksPerTrigger": {
            "operator": "Variables[0] (5) || RETURN",
            "displayLines": "5",
            "constants": [],
            "variables": [
              5
            ]
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
              ]
            },
            "HitSplit": 0.15,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
              ]
            },
            "HitSplit": 0.15,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
              ]
            },
            "HitSplit": 0.15,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
              ]
            },
            "HitSplit": 0.15,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
              ]
            },
            "HitSplit": 0.4,
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Follow-up",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1701847025\">Jade_Eidolon1_InsertDamageRatio</a>"
            }
          ]
        },
        {
          "name": "Define Modifier Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifierName": "<a class=\"gModGreen\" id=\"-1732030848\">Jade_Ultimate_Insert</a>[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]",
          "function": "Add"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Jade_Jade_Passive_Part01": {
      "fileName": "Jade_Jade_Passive_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Fang of Flare Flaying"
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1732030848\">Jade_Ultimate_Insert</a>[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]",
            "invertCondition": true
          },
          "passed": [
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
              "ability": "Jade_Passive_Part02_01",
              "isTrigger": true
            }
          ],
          "failed": [
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
              "ability": "Jade_Passive_Part02_02",
              "isTrigger": true
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1732030848\">Jade_Ultimate_Insert</a>[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]"
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
            "modifier": "<a class=\"gModGreen\" id=\"-1732030848\">Jade_Ultimate_Insert</a>[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]"
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
            "modifier": "<a class=\"gModGreen\" id=\"-1732030848\">Jade_Ultimate_Insert</a>[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]",
            "invertCondition": true
          },
          "passed": [
            "Deleted bullshit",
            {
              "name": "IF",
              "conditions": {
                "name": "NOT",
                "condition": {
                  "name": "Enemies Still Alive",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "includeNonTargets": true
                }
              },
              "passed": [
                "Deleted bullshit"
              ]
            }
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Jade_Jade_PassiveAbility01": {
      "fileName": "Jade_Jade_PassiveAbility01",
      "childAbilityList": [
        "Jade_Jade_Passive_Camera_Start",
        "Jade_Jade_Passive_Camera_End01",
        "Jade_Jade_Passive_Camera_End01_ToStandBy",
        "Jade_Jade_Passive_Camera_End02",
        "Jade_Jade_PassiveAbility01",
        "Jade_Jade_Passive_Part01",
        "Jade_Jade_Passive_Part02_01",
        "Jade_Jade_Passive_Part02_02"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 10,
      "toughnessList": [
        0,
        10,
        0
      ],
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1980539643\">Jade_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1820252727\">Jade_Passive_CharacterCreateRate</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2083260524\">Jade_AbilityPreShowModifier</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_Pursued_DamagePercentage",
          "value": {
            "operator": "Variables[0] (0.25) || RETURN",
            "displayLines": "0.25",
            "constants": [],
            "variables": [
              0.25
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_InsertTriggerCount",
          "value": {
            "operator": "Variables[0] (8) || RETURN",
            "displayLines": "8",
            "constants": [],
            "variables": [
              8
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (_RateLayer) || RETURN",
            "displayLines": "_RateLayer",
            "constants": [],
            "variables": [
              "_RateLayer"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (_InsertTriggerCount) || RETURN",
            "displayLines": "_InsertTriggerCount",
            "constants": [],
            "variables": [
              "_InsertTriggerCount"
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 2
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Jade_Passive_BPBuffAddLayer",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Reverse Repo"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-479321621\">Jade_PointB1_Passive</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"589579985\">Jade_Eidolon6_Check</a>"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__589579985\">Jade_Eidolon6_Check</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2083260524\">Jade_AbilityPreShowModifier</a>",
          "stackType": "ReplaceByCaster",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "OR",
                  "conditionList": [
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1749110767\">Jade_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                    },
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"119818662\">Jade_Eidolon6_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                    }
                  ],
                  "invertCondition": true
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
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "30(SPD Change)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-479321621\">Jade_PointB1_Passive</a>",
          "stackData": [
            "MDF_PropertyValue"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Anyone]: Start Pre-action Phase",
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
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1687174133\">Jade_BPAbilitySelf</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"553729296\">Jade_Eidolon6_BPAbilitySelf</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1749110767\">Jade_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"119818662\">Jade_Eidolon6_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2143808418\">Jade_Passive_Rate</a>[<span class=\"descriptionNumberColor\">Pawned Asset</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (50) || RETURN",
                            "displayLines": "50",
                            "constants": [],
                            "variables": [
                              50
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.024) || RETURN",
                              "displayLines": "0.024",
                              "constants": [],
                              "variables": [
                                0.024
                              ]
                            },
                            "MDF_PropertyValue2": {
                              "operator": "Variables[0] (0.005) || RETURN",
                              "displayLines": "0.005",
                              "constants": [],
                              "variables": [
                                0.005
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
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
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1820252727\">Jade_Passive_CharacterCreateRate</a>",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"477418814\">Jade_Passive_contract</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Reverse Repo"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2143808418\">Jade_Passive_Rate</a>[<span class=\"descriptionNumberColor\">Pawned Asset</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (50) || RETURN",
                            "displayLines": "50",
                            "constants": [],
                            "variables": [
                              50
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.024) || RETURN",
                              "displayLines": "0.024",
                              "constants": [],
                              "variables": [
                                0.024
                              ]
                            },
                            "MDF_PropertyValue2": {
                              "operator": "Variables[0] (0.005) || RETURN",
                              "displayLines": "0.005",
                              "constants": [],
                              "variables": [
                                0.005
                              ]
                            }
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__1980539643\">Jade_Passive</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1687174133\">Jade_BPAbilitySelf</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"553729296\">Jade_Eidolon6_BPAbilitySelf</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Attack Targets of Modifier Holder}}"
                          },
                          "includeDyingTargets": true,
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_RateLayer",
                              "value": {
                                "operator": "Variables[0] (_RateLayer) || Constants[0] (1) || ADD || Variables[1] (Jade_Passive_BPBuffAddLayer) || ADD || RETURN",
                                "displayLines": "((_RateLayer + 1) + Jade_Passive_BPBuffAddLayer)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "_RateLayer",
                                  "Jade_Passive_BPBuffAddLayer"
                                ]
                              }
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_HitNumb_Self",
                              "value": {
                                "operator": "Variables[0] (MDF_HitNumb_Self) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(MDF_HitNumb_Self + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "MDF_HitNumb_Self"
                                ]
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Attack Targets of Modifier Holder}}"
                          },
                          "includeDyingTargets": true,
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_RateLayer",
                              "value": {
                                "operator": "Variables[0] (_RateLayer) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(_RateLayer + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "_RateLayer"
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
                        "name": "Eidolon Activated",
                        "eidolon": 1
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_HitNumb_Self",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_RateLayer",
                              "value": {
                                "operator": "Variables[0] (_RateLayer) || Variables[1] (1) || ADD || RETURN",
                                "displayLines": "(_RateLayer + 1)",
                                "constants": [],
                                "variables": [
                                  "_RateLayer",
                                  1
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "MDF_HitNumb_Self",
                                "compareType": "=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "_RateLayer",
                                  "value": {
                                    "operator": "Variables[0] (_RateLayer) || Variables[1] (2) || ADD || RETURN",
                                    "displayLines": "(_RateLayer + 2)",
                                    "constants": [],
                                    "variables": [
                                      "_RateLayer",
                                      2
                                    ]
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
                      "variableName": "MDF_HitNumb_Self",
                      "value": 0
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
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_RateLayer",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (_InsertTriggerCount) || RETURN",
                          "displayLines": "_InsertTriggerCount",
                          "constants": [],
                          "variables": [
                            "_InsertTriggerCount"
                          ]
                        }
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
                      "abilityName": "Jade_Passive_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
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
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"477418814\">Jade_Passive_contract</a>"
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
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
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_RateLayer",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (_InsertTriggerCount) || RETURN",
                          "displayLines": "_InsertTriggerCount",
                          "constants": [],
                          "variables": [
                            "_InsertTriggerCount"
                          ]
                        }
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
                      "abilityName": "Jade_Passive_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
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
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_RateLayer",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (_InsertTriggerCount) || RETURN",
                          "displayLines": "_InsertTriggerCount",
                          "constants": [],
                          "variables": [
                            "_InsertTriggerCount"
                          ]
                        }
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Modifier Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "STAT_CTRL"
                          },
                          {
                            "name": "Modifier Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "DisableAction"
                          }
                        ]
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
                      "abilityName": "Jade_Passive_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
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
            },
            {
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
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
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_RateLayer",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (_InsertTriggerCount) || RETURN",
                          "displayLines": "_InsertTriggerCount",
                          "constants": [],
                          "variables": [
                            "_InsertTriggerCount"
                          ]
                        }
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
                      "abilityName": "Jade_Passive_Part01",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
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
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "_RateLayer",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 99,
                  "whenValueChanges": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (_RateLayer) || RETURN",
                        "displayLines": "_RateLayer",
                        "constants": [],
                        "variables": [
                          "_RateLayer"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
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
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "DisableAction",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "_RateLayer",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (_InsertTriggerCount) || RETURN",
                              "displayLines": "_InsertTriggerCount",
                              "constants": [],
                              "variables": [
                                "_InsertTriggerCount"
                              ]
                            }
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
                          "abilityName": "Jade_Passive_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
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
    "Jade_Jade_Ability03_Part02": {
      "fileName": "Jade_Jade_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1732030848\">Jade_Ultimate_Insert</a>[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]",
          "counter": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            },
            "MDF_Count": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1189146824\">Jade_Eidolon4_DefPenetrate</a>[<span class=\"descriptionNumberColor\">Sincerity? Put Option Only</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.12) || RETURN",
                  "displayLines": "0.12",
                  "constants": [],
                  "variables": [
                    0.12
                  ]
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
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (2.4) || RETURN",
              "displayLines": "2.4",
              "constants": [],
              "variables": [
                2.4
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1732030848\">Jade_Ultimate_Insert</a>[<span class=\"descriptionNumberColor\">Follow-Up ATK Boost</span>]",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "MDF_PropertyRatio",
            "MDF_Count"
          ],
          "description": "Increases the multiplier for the DMG dealt by Talent's Follow-Up ATK by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>. This can take effect for up to <span class=\"descriptionNumberColor\">MDF_Count</span> time(s).",
          "type": "Buff",
          "effectName": "Follow-Up ATK Boost",
          "statusName": "Follow-Up ATK Boost",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Jade_Jade_Ability03_Part01": {
      "fileName": "Jade_Jade_Ability03_Part01",
      "childAbilityList": [
        "Jade_Jade_Ability03_Camera",
        "Jade_Jade_Ability03_EnterReady",
        "Jade_Jade_Ability03_Part01",
        "Jade_Jade_Ability03_Part02"
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
          "ability": "Jade_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Jade_Jade_Ability03_EnterReady": {
      "fileName": "Jade_Jade_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Jade_Jade_Ability02_Part02": {
      "fileName": "Jade_Jade_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-252730677\">Jade_BPAbilityBonusListen</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1749110767\">Jade_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1687174133\">Jade_BPAbilitySelf</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"119818662\">Jade_Eidolon6_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"553729296\">Jade_Eidolon6_BPAbilitySelf</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
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
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"553729296\">Jade_Eidolon6_BPAbilitySelf</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1687174133\">Jade_BPAbilitySelf</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-252730677\">Jade_BPAbilityBonusListen</a>",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"119818662\">Jade_Eidolon6_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (30) || RETURN",
                      "displayLines": "30",
                      "constants": [],
                      "variables": [
                        30
                      ]
                    },
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "MDF_Eidolon1_Flag": 1,
                    "MDF_Eidolon1_HitNumb": 0,
                    "MDF_LoseHP": {
                      "operator": "Variables[0] (0.02) || RETURN",
                      "displayLines": "0.02",
                      "constants": [],
                      "variables": [
                        0.02
                      ]
                    },
                    "MDF_Eidolon1_AddRateLayer": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "MDF_Eidolon1_AddRateLayer02": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1749110767\">Jade_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (30) || RETURN",
                          "displayLines": "30",
                          "constants": [],
                          "variables": [
                            30
                          ]
                        },
                        "MDF_Eidolon1_Flag": 1,
                        "MDF_Eidolon1_HitNumb": 0,
                        "MDF_LoseHP": {
                          "operator": "Variables[0] (0.02) || RETURN",
                          "displayLines": "0.02",
                          "constants": [],
                          "variables": [
                            0.02
                          ]
                        },
                        "MDF_Eidolon1_AddRateLayer": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        },
                        "MDF_Eidolon1_AddRateLayer02": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1749110767\">Jade_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (30) || RETURN",
                          "displayLines": "30",
                          "constants": [],
                          "variables": [
                            30
                          ]
                        },
                        "MDF_Eidolon1_Flag": 0,
                        "MDF_Eidolon1_HitNumb": 0,
                        "MDF_LoseHP": {
                          "operator": "Variables[0] (0.02) || RETURN",
                          "displayLines": "0.02",
                          "constants": [],
                          "variables": [
                            0.02
                          ]
                        },
                        "MDF_Eidolon1_AddRateLayer": 0,
                        "MDF_Eidolon1_AddRateLayer02": 0
                      }
                    }
                  ]
                }
              ]
            }
          ]
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
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__553729296\">Jade_Eidolon6_BPAbilitySelf</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "stackData": [
            "MDF_PropertyRatio"
          ],
          "description": "Quantum RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>. After attacking, for each enemy target hit, Jade gains 1 point of Charge and deals Additional DMG.",
          "type": "Buff",
          "effectName": "Debt Collector",
          "statusName": "Debt Collector",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"68476876\">Jade_Eidolon6_QuantumPenetrate</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Skill"
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"68476876\">Jade_Eidolon6_QuantumPenetrate</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
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
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (_Pursued_DamagePercentage) || RETURN",
                          "displayLines": "_Pursued_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "_Pursued_DamagePercentage"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
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
          "for": "<a class=\"gModGreen\" id=\"mod__119818662\">Jade_Eidolon6_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "Unknow",
          "modifierFlags": [
            "STAT_SpeedUp",
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill"
          ],
          "stackData": [
            "MDF_PropertyValue",
            "MDF_PropertyRatio",
            "MDF_Rank01_Flag",
            "MDF_Rank01_HitNumb",
            "MDF_LoseHP",
            "MDF_Rank01_AddRateLayer",
            "MDF_Rank01_AddRateLayer02"
          ],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. After using an attack, consumes a small amount of HP. For each enemy target hit, Jade gains 1 point of Charge and deals Additional DMG.",
          "type": "Buff",
          "effectName": "Debt Collector",
          "statusName": "Debt Collector",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-252730677\">Jade_BPAbilityBonusListen</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Anyone]: Start Pre-action Phase",
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
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": "<a class=\"gModGreen\" id=\"119818662\">Jade_Eidolon6_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
                      "function": "Add",
                      "valueType": "Duration"
                    }
                  ]
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                    "displayLines": "MDF_PropertyValue",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"553729296\">Jade_Eidolon6_BPAbilitySelf</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
                      "duration": {
                        "operator": "Variables[0] (3) || RETURN",
                        "displayLines": "3",
                        "constants": [],
                        "variables": [
                          3
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (MDF_LoseHP) || RETURN",
                    "displayLines": "MDF_LoseHP",
                    "constants": [],
                    "variables": [
                      "MDF_LoseHP"
                    ]
                  },
                  "consumeFloor": 1,
                  "attackType": "BPSkill"
                },
                {
                  "name": "Define Custom Variable with Attack Targets",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_Rank01_HitNumb"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (_Pursued_DamagePercentage) || RETURN",
                          "displayLines": "_Pursued_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "_Pursued_DamagePercentage"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Rank01_Flag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Rank01_HitNumb",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_RateLayer",
                          "value": {
                            "operator": "Variables[0] (_RateLayer) || Variables[1] (MDF_Eidolon1_AddRateLayer) || ADD || RETURN",
                            "displayLines": "(_RateLayer + MDF_Eidolon1_AddRateLayer)",
                            "constants": [],
                            "variables": [
                              "_RateLayer",
                              "MDF_Eidolon1_AddRateLayer"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_Rank01_HitNumb",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_RateLayer",
                              "value": {
                                "operator": "Variables[0] (_RateLayer) || Variables[1] (MDF_Eidolon1_AddRateLayer02) || ADD || RETURN",
                                "displayLines": "(_RateLayer + MDF_Eidolon1_AddRateLayer02)",
                                "constants": [],
                                "variables": [
                                  "_RateLayer",
                                  "MDF_Eidolon1_AddRateLayer02"
                                ]
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
                  "variableName": "MDF_Rank01_HitNumb",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1687174133\">Jade_BPAbilitySelf</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "description": "After using an attack, for each enemy target hit, Jade gains 1 point of Charge and deals Additional DMG.",
          "type": "Buff",
          "effectName": "Debt Collector",
          "statusName": "Debt Collector",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Skill"
                  ]
                }
              ]
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
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (_Pursued_DamagePercentage) || RETURN",
                          "displayLines": "_Pursued_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "_Pursued_DamagePercentage"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1749110767\">Jade_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "Unknow",
          "modifierFlags": [
            "STAT_SpeedUp",
            "RemoveWhenCasterDead",
            "ListenBattleEventSkill"
          ],
          "stackData": [
            "MDF_PropertyValue",
            "MDF_Rank01_Flag",
            "MDF_Rank01_HitNumb",
            "MDF_LoseHP",
            "MDF_Rank01_AddRateLayer",
            "MDF_Rank01_AddRateLayer02"
          ],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>. After using an attack, consumes a small amount of HP. For each enemy target hit, Jade gains 1 point of Charge and deals Additional DMG.",
          "type": "Buff",
          "effectName": "Debt Collector",
          "statusName": "Debt Collector",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-252730677\">Jade_BPAbilityBonusListen</a>"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Anyone]: Start Pre-action Phase",
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
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "modifierName": "<a class=\"gModGreen\" id=\"-1749110767\">Jade_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]",
                      "function": "Add",
                      "valueType": "Duration"
                    }
                  ]
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
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
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Consume",
                  "consumeFrom": "MaxHP",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "consumePercent": {
                    "operator": "Variables[0] (MDF_LoseHP) || RETURN",
                    "displayLines": "MDF_LoseHP",
                    "constants": [],
                    "variables": [
                      "MDF_LoseHP"
                    ]
                  },
                  "consumeFloor": 1,
                  "attackType": "BPSkill"
                },
                {
                  "name": "Define Custom Variable with Attack Targets",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_Rank01_HitNumb"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Attack Targets of Modifier Holder}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (_Pursued_DamagePercentage) || RETURN",
                          "displayLines": "_Pursued_DamagePercentage",
                          "constants": [],
                          "variables": [
                            "_Pursued_DamagePercentage"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Rank01_Flag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Rank01_HitNumb",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_RateLayer",
                          "value": {
                            "operator": "Variables[0] (_RateLayer) || Variables[1] (MDF_Eidolon1_AddRateLayer) || ADD || RETURN",
                            "displayLines": "(_RateLayer + MDF_Eidolon1_AddRateLayer)",
                            "constants": [],
                            "variables": [
                              "_RateLayer",
                              "MDF_Eidolon1_AddRateLayer"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_Rank01_HitNumb",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_RateLayer",
                              "value": {
                                "operator": "Variables[0] (_RateLayer) || Variables[1] (MDF_Eidolon1_AddRateLayer02) || ADD || RETURN",
                                "displayLines": "(_RateLayer + MDF_Eidolon1_AddRateLayer02)",
                                "constants": [],
                                "variables": [
                                  "_RateLayer",
                                  "MDF_Eidolon1_AddRateLayer02"
                                ]
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
                  "variableName": "MDF_Rank01_HitNumb",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-252730677\">Jade_BPAbilityBonusListen</a>",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1749110767\">Jade_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1687174133\">Jade_BPAbilitySelf</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"553729296\">Jade_Eidolon6_BPAbilitySelf</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"119818662\">Jade_Eidolon6_BPAbility</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"553729296\">Jade_Eidolon6_BPAbilitySelf</a>[<span class=\"descriptionNumberColor\">Debt Collector</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Skill"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Jade_Jade_Ability02_Part01": {
      "fileName": "Jade_Jade_Ability02_Part01",
      "childAbilityList": [
        "Jade_Jade_Ability02_Camera",
        "Jade_Jade_Ability02_Camera_Self",
        "Jade_Jade_Ability02_Part01",
        "Jade_Jade_Ability02_Part02"
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
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Jade_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Ally Target"
      }
    },
    "Jade_Jade_Ability01_Part02": {
      "fileName": "Jade_Jade_Ability01_Part02",
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
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null,
            "attackType": "Basic ATK"
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
    "Jade_Jade_Ability01_Part01": {
      "fileName": "Jade_Jade_Ability01_Part01",
      "childAbilityList": [
        "Jade_Jade_Ability01_Camera",
        "Jade_Jade_Ability01_Part01",
        "Jade_Jade_Ability01_Part02"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        5
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Jade_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      }
    }
  }
}