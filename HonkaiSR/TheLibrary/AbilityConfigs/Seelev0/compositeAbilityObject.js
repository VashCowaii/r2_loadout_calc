const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Seele_v0",
  "trimCharacterName": "Seelev0",
  "abilityList": [
    "Seelev0_Modifiers",
    "Seelev0_Seele_Trace01",
    "Seelev0_Seele_Eidolon6",
    "Seelev0_Seele_Eidolon4",
    "Seelev0_Seele_Eidolon1",
    "Seelev0_LocalPlayer_StandardAbility_AttackBreak",
    "Seelev0_LocalPlayer_Seele_NormalAtk01",
    "Seelev0_Seele_TechniqueInLevel",
    "Seelev0_Seele_Bonus",
    "Seelev0_Seele_PassiveAbility_1",
    "Seelev0_Seele_Ability03_Part02",
    "Seelev0_Seele_Ability03_Part01",
    "Seelev0_Seele_Ability03_EnterReady",
    "Seelev0_Seele_Ability02_Part02",
    "Seelev0_Seele_Ability02_Part01",
    "Seelev0_Seele_Ability01_Part02",
    "Seelev0_Seele_Ability01_Part01"
  ],
  "abilityObject": {
    "Seelev0_Modifiers": {
      "fileName": "Seelev0_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1119246325\">ADV_Modifier_MazeEffect_Stealth</a>",
          "counter": 1,
          "stackType": "Refresh",
          "duration": 1.5
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2022324518\">ADV_Modifier_MazeEffect_Seele</a>",
          "counter": 1,
          "stackType": "Refresh",
          "modifierFlags": [
            "Stealth"
          ],
          "duration": 20,
          "onCreation": [
            {
              "name": "Overworld Filter Enemies",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Task Action Target}}"
                  },
                  "modifier": null,
                  "ID": "1000118()"
                }
              ]
            }
          ],
          "onStageExit": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__156399431\">ADV_Modifier_Maze_Seele</a>",
          "counter": 1,
          "stackType": "Refresh",
          "duration": 20,
          "onStageExit": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-451187688\">ADV_StageAbility_Maze_Seele</a>",
          "counter": 1,
          "stackType": "Refresh"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-426535006\">Seele_BPAbility_SpeedUpEidolon2</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "description": "Each stack increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, up to 2 stacks.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost",
          "stackLimit": 3,
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
                  "variableName": "SpeedUp_Count",
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
                    "displayLines": "(MDF_PropertyValue * SpeedUp_Count)"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-456765622\">Seele_BPAbility_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "description": "SPD +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_PropertyValue"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1401924350\">Seele_Passive_DamageUp</a>[<span class=\"descriptionNumberColor\">Amplification</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">seele_dmg_percent</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Amplification",
          "duration": 1,
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "seele_dmg_percent"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Lacerate"
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "DMG dealt increases by <span class=\"descriptionNumberColor\">seele_dmg_percent</span>, and Quantum RES PEN +<span class=\"descriptionNumberColor\">MDF_Penetrate</span>."
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceQuantumPEN</span>&nbsp;",
                      "statValue": {
                        "displayLines": "MDF_Penetrate"
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  }
                }
              ]
            },
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
                        "skillType": "Ultimate"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "Seelev0_Seele_Trace01": {
      "fileName": "Seelev0_Seele_Trace01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-730910953\">Seele_LowHP_AggroDown</a>",
          "valuePerStack": {
            "MDF_HPRatio": {
              "displayLines": "0.5"
            },
            "MDF_AggroDown": {
              "displayLines": "0.5"
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1465401968\">Seele_Trace_AggroDown</a>[<span class=\"descriptionNumberColor\">Nightshade</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "description": "Lowers the chances of being attacked by enemies.",
          "type": "Buff",
          "effectName": "Aggro Chance Reduction",
          "statusName": "Nightshade",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(0 - MDF_PropertyValue)"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-730910953\">Seele_LowHP_AggroDown</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "MDF_HPRatio",
            "MDF_AggroDown"
          ],
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
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1465401968\">Seele_Trace_AggroDown</a>[<span class=\"descriptionNumberColor\">Nightshade</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "MDF_AggroDown"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
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
                    "value2": {
                      "displayLines": "MDF_HPRatio"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1465401968\">Seele_Trace_AggroDown</a>[<span class=\"descriptionNumberColor\">Nightshade</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "MDF_AggroDown"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1465401968\">Seele_Trace_AggroDown</a>[<span class=\"descriptionNumberColor\">Nightshade</span>]",
                      "onlyRemoveOwnersInstance": true
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
      }
    },
    "Seelev0_Seele_Eidolon6": {
      "fileName": "Seelev0_Seele_Eidolon6",
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
          "modifier": "<a class=\"gModGreen\" id=\"-301677957\">Seele_Eidolon6</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-301677957\">Seele_Eidolon6</a>",
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"995458646\">Seele_Eidolon6_Flag</a>[<span class=\"descriptionNumberColor\">Butterfly Flurry</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Action Holder Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "Seele_Rank6_Listen"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 5,
                      "variableName": "Seele_Rank6_Listen"
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
      }
    },
    "Seelev0_Seele_Eidolon4": {
      "fileName": "Seelev0_Seele_Eidolon4",
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
          "modifier": "<a class=\"gModGreen\" id=\"-268122719\">Seele_Eidolon4</a>",
          "valuePerStack": {
            "MDF_AddSP": {
              "displayLines": "15"
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-268122719\">Seele_Eidolon4</a>",
          "stackData": [
            "MDF_AddSP"
          ],
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "displayLines": "MDF_AddSP"
                  },
                  "isFixed": "* ERR"
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
    "Seelev0_Seele_Eidolon1": {
      "fileName": "Seelev0_Seele_Eidolon1",
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
          "modifier": "<a class=\"gModGreen\" id=\"-217789862\">Seele_Eidolon1</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-217789862\">Seele_Eidolon1</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
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
                      "displayLines": "0.8"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                          "value": "0.15"
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
      }
    },
    "Seelev0_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Seelev0_LocalPlayer_StandardAbility_AttackBreak",
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
            "damageType": "Physical"
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
            "damageType": "Fire"
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
            "damageType": "Ice"
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
            "damageType": "Thunder"
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
            "damageType": "Wind"
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
            "damageType": "Quantum"
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
            "damageType": "Imaginary"
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
    "Seelev0_LocalPlayer_Seele_NormalAtk01": {
      "fileName": "Seelev0_LocalPlayer_Seele_NormalAtk01",
      "skillTrigger": "NormalAtk",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier (OVERWORLD)",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"156399431\">ADV_Modifier_Maze_Seele</a>"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": "Ability Has a Target",
              "passed": [
                "Deleted bullshit",
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": null,
                  "overworldID": 110202
                },
                {
                  "name": "Overworld Attack Instance",
                  "onBattle": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": null,
                      "ID": "110201(SkillMaze)"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": null,
                  "overworldID": 110203
                }
              ],
              "failed": [
                "Deleted bullshit",
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": null,
                  "overworldID": 110202
                },
                {
                  "name": "Overworld Attack Instance",
                  "onBattle": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": null,
                      "ID": "110201(SkillMaze)"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": null,
                  "overworldID": 110203
                }
              ]
            }
          ],
          "failed": [
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
                        "flag": "Run"
                      },
                      "passed": [
                        "Deleted bullshit",
                        {
                          "name": "Overworld Attack Instance"
                        }
                      ],
                      "failed": [
                        "Deleted bullshit",
                        {
                          "name": "Overworld Attack Instance"
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
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Seelev0_Seele_TechniqueInLevel": {
      "fileName": "Seelev0_Seele_TechniqueInLevel",
      "childAbilityList": [
        "Seelev0_Seele_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"1623171006\">Seele_Maze_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1623171006\">Seele_Maze_Modifier</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1401924350\">Seele_Passive_DamageUp</a>[<span class=\"descriptionNumberColor\">Amplification</span>]",
                      "duration": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "seele_dmg_percent": {
                          "displayLines": "0.8"
                        },
                        "MDF_Penetrate": {
                          "displayLines": "0.2"
                        }
                      }
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
    "Seelev0_Seele_Bonus": {
      "fileName": "Seelev0_Seele_Bonus",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Update Displayed Energy Bar",
          "priorState": "Active"
        },
        {
          "name": "UI Display Event",
          "popUpText": "Resurgence"
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Seelev0_Seele_PassiveAbility_1": {
      "fileName": "Seelev0_Seele_PassiveAbility_1",
      "childAbilityList": [
        "Seelev0_Seele_Bonus_Camera",
        "Seelev0_Seele_PassiveAbility_1",
        "Seelev0_Seele_Bonus"
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
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Rippling Waves"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1743016793\">Ability01PreShowModifier_Fixed</a>",
              "valuePerStack": {
                "MDF_Ability01_Delay": {
                  "displayLines": "0.2"
                }
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-894890999\">Ability02PreShowModifier</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"959272575\">Local_Seele_ListenKill</a>",
          "valuePerStack": {
            "dmg_percent": {
              "displayLines": "0.8"
            }
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 1,
          "cooldown": 0
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1311778178\">Local_Seele_PassiveActionModifier</a>[<span class=\"descriptionNumberColor\">Resurgence</span>]",
          "description": "Currently in the extra turn provided by \"Resurgence\".",
          "type": "Other",
          "statusName": "Resurgence"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__959272575\">Local_Seele_ListenKill</a>",
          "stackData": [
            "dmg_percent"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "InsertAction"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Anyone]: End",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "priorState": "Normal"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1311778178\">Local_Seele_PassiveActionModifier</a>[<span class=\"descriptionNumberColor\">Resurgence</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          "Is Extra-Turn",
                          {
                            "name": "Compare: Variable",
                            "value1": "Seele_BonusInsertAction",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      {
                        "name": "Is Ability Ongoing",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "InsertAction"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1401924350\">Seele_Passive_DamageUp</a>[<span class=\"descriptionNumberColor\">Amplification</span>]",
                      "duration": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "seele_dmg_percent": {
                          "displayLines": "dmg_percent"
                        },
                        "MDF_Penetrate": {
                          "displayLines": "0.2"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Got a Queued Kill [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          "Is Extra-Turn",
                          {
                            "name": "Compare: Variable",
                            "value1": "Seele_BonusInsertAction",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      {
                        "name": "Is Ability Ongoing",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "InsertAction"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1401924350\">Seele_Passive_DamageUp</a>[<span class=\"descriptionNumberColor\">Amplification</span>]",
                      "duration": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "seele_dmg_percent": {
                          "displayLines": "dmg_percent"
                        },
                        "MDF_Penetrate": {
                          "displayLines": "0.2"
                        }
                      }
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Seele_Rank6_Listen",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "InsertAction",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "InsertAction"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeUnselectable": true
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "priorState": "Active"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1311778178\">Local_Seele_PassiveActionModifier</a>[<span class=\"descriptionNumberColor\">Resurgence</span>]"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "priorState": "Normal"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1311778178\">Local_Seele_PassiveActionModifier</a>[<span class=\"descriptionNumberColor\">Resurgence</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": [
                        "Seele_BonusInsertAction"
                      ],
                      "abilityName": "Seele_Bonus",
                      "afterInjection": [
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "Seele_BonusInsertAction"
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
                      "Is Extra-Turn",
                      {
                        "name": "Compare: Variable",
                        "value1": "Seele_BonusInsertAction",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "priorState": "Normal"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1311778178\">Local_Seele_PassiveActionModifier</a>[<span class=\"descriptionNumberColor\">Resurgence</span>]"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "value2": "Seele_BonusInsertAction"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "Seele_BonusInsertAction"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "Seele_BonusInsertAction"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-894890999\">Ability02PreShowModifier</a>",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "NOT",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-456765622\">Seele_BPAbility_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
                  }
                },
                {
                  "name": "OR",
                  "conditionList": [
                    {
                      "name": "NOT",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-426535006\">Seele_BPAbility_SpeedUpEidolon2</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
                      }
                    },
                    {
                      "name": "Compare: Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value1": "<a class=\"gModGreen\" id=\"-426535006\">Seele_BPAbility_SpeedUpEidolon2</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                      "compareType": "<",
                      "value2": {
                        "displayLines": "2"
                      },
                      "valueType": "Layer"
                    }
                  ]
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0.25(SPD Change)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1743016793\">Ability01PreShowModifier_Fixed</a>",
          "stackData": [
            "MDF_Skill01_Delay"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "skillType": [
              "Basic ATK"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "displayLines": "-MDF_Skill01_Delay"
              }
            }
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Seelev0_Seele_Ability03_Part02": {
      "fileName": "Seelev0_Seele_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1401924350\">Seele_Passive_DamageUp</a>[<span class=\"descriptionNumberColor\">Amplification</span>]",
          "duration": {
            "displayLines": "1"
          },
          "valuePerStack": {
            "seele_dmg_percent": {
              "displayLines": "0.8"
            },
            "MDF_Penetrate": {
              "displayLines": "0.2"
            }
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
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "4.25"
            },
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
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
              "modifier": "<a class=\"gModGreen\" id=\"995458646\">Seele_Eidolon6_Flag</a>[<span class=\"descriptionNumberColor\">Butterfly Flurry</span>]",
              "duration": {
                "displayLines": "1"
              },
              "valuePerStack": {
                "MDF_Eidolon6_Damage": {
                  "displayLines": "(4.25 * 0.15)"
                }
              }
            }
          ]
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__995458646\">Seele_Eidolon6_Flag</a>[<span class=\"descriptionNumberColor\">Butterfly Flurry</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "stackData": [
            "MDF_Rank06_Damage"
          ],
          "description": "On a hit, receives an extra Quantum DMG from Seele.",
          "type": "Debuff",
          "effectName": "Butterfly Flurry",
          "statusName": "Butterfly Flurry",
          "execute": [
            {
              "eventTrigger": "Being Attacked [Owner]: End",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Quantum",
                    "Damage": {
                      "displayLines": "MDF_Rank06_Damage"
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
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Seelev0_Seele_Ability03_Part01": {
      "fileName": "Seelev0_Seele_Ability03_Part01",
      "childAbilityList": [
        "Seelev0_Seele_Ability03_Camera",
        "Seelev0_Seele_Ability03_EnterReady",
        "Seelev0_Seele_Ability03_Part01",
        "Seelev0_Seele_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        30,
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
          "ability": "Seele_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Seelev0_Seele_Ability03_EnterReady": {
      "fileName": "Seelev0_Seele_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Seelev0_Seele_Ability02_Part02": {
      "fileName": "Seelev0_Seele_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-426535006\">Seele_BPAbility_SpeedUpEidolon2</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
              "duration": {
                "displayLines": "2"
              },
              "stackLimit": {
                "displayLines": "2"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.25"
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-456765622\">Seele_BPAbility_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
              "duration": {
                "displayLines": "2"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.25"
                }
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "(2.2 * 0.2)"
            },
            "Toughness": {
              "displayLines": "(ST Toughness Value * 0.2)"
            },
            "Tags": null,
            "EnergyGainPercent": "20%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "(2.2 * 0.1)"
            },
            "Toughness": {
              "displayLines": "(ST Toughness Value * 0.1)"
            },
            "Tags": null,
            "EnergyGainPercent": "10%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "(2.2 * 0.1)"
            },
            "Toughness": {
              "displayLines": "(ST Toughness Value * 0.1)"
            },
            "Tags": null,
            "EnergyGainPercent": "10%"
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
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "(2.2 * 0.6)"
            },
            "Toughness": {
              "displayLines": "(ST Toughness Value * 0.6)"
            },
            "Tags": null,
            "EnergyGainPercent": "60%"
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
    "Seelev0_Seele_Ability02_Part01": {
      "fileName": "Seelev0_Seele_Ability02_Part01",
      "childAbilityList": [
        "Seelev0_Seele_Ability02_Camera",
        "Seelev0_Seele_Ability02_Part01",
        "Seelev0_Seele_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
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
          "ability": "Seele_Ability02_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of",
            "target1": {
              "name": "Target Name",
              "target": "{{Ability Target List}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "W5_GluttonyParts_00"
            }
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Seelev0_Seele_Ability01_Part02": {
      "fileName": "Seelev0_Seele_Ability01_Part02",
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
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "1"
            },
            "HitSplit": 0.7,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Rippling Waves"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": "Is Extra-Turn",
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1624938404\">Seele_Trace02_ModifyAction</a>",
                      "valuePerStack": {
                        "MDF_DelayCost": {
                          "displayLines": "0.2"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "advanceType": "Advance",
                      "multiAdd": "-0.2"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Assign Advance/Delay to Current Ability Use",
                  "adjustmentValue": {
                    "displayLines": "-0.2"
                  },
                  "adjustmentType": "Advance"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"333617615\">Ability01PreShowModifier_AppliedRatio</a>",
                  "valuePerStack": {
                    "MDF_Ability01_Delay": {
                      "displayLines": "0.2"
                    }
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__333617615\">Ability01PreShowModifier_AppliedRatio</a>",
          "stackType": "Multiple",
          "stackData": [
            "MDF_Skill01_Delay"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "skillType": [
              "Basic ATK"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "displayLines": "-MDF_Skill01_Delay"
              }
            }
          },
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1624938404\">Seele_Trace02_ModifyAction</a>",
          "stackType": "Multiple",
          "stackData": [
            "MDF_DelayCost"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "skillType": [
              "Basic ATK"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "displayLines": "-0.2"
              }
            }
          },
          "execute": [
            {
              "eventTrigger": "Turn [Anyone]: End",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Advance",
                  "multiAdd": "-0.2"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Seelev0_Seele_Ability01_Part01": {
      "fileName": "Seelev0_Seele_Ability01_Part01",
      "childAbilityList": [
        "Seelev0_Seele_Ability01_Camera",
        "Seelev0_Seele_Ability01_Part01",
        "Seelev0_Seele_Ability01_Part02"
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
          "ability": "Seele_Ability01_Part02",
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