const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Trailblazer - Remembrance",
  "trimCharacterName": "TrailblazerRemembrance",
  "summonName": "Mem",
  "trimSummonName": "Mem",
  "abilityList": [
    "TrailblazerRemembrance_Modifiers",
    "TrailblazerRemembrance_PlayerBoy_30_Trace01",
    "TrailblazerRemembrance_PlayerBoy_30_Eidolon4",
    "TrailblazerRemembrance_PlayerBoy_30_Eidolon2",
    "TrailblazerRemembrance_LocalPlayer_PlayerBoy_30_BeforeBattleDebuffListener",
    "TrailblazerRemembrance_LocalPlayer_StandardAbility_AttackBreak",
    "TrailblazerRemembrance_LocalPlayer_PlayerBoy_30_TechniqueUsage",
    "TrailblazerRemembrance_LocalPlayer_PlayerBoy_30_NormalAtk01",
    "TrailblazerRemembrance_PlayerBoy_30_TechniqueInLevel",
    "TrailblazerRemembrance_PlayerBoy_30_PassiveAbility01",
    "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part02",
    "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part01",
    "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part02_Charge",
    "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part02",
    "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part01",
    "TrailblazerRemembrance_PlayerBoy_30_Ability03_EnterReady",
    "TrailblazerRemembrance_PlayerBoy_30_Ability21_Part02",
    "TrailblazerRemembrance_PlayerBoy_30_Ability21_Part01",
    "TrailblazerRemembrance_PlayerBoy_30_Ability02_Part02",
    "TrailblazerRemembrance_PlayerBoy_30_Ability02_Part01",
    "TrailblazerRemembrance_PlayerBoy_30_Ability01_Part02",
    "TrailblazerRemembrance_PlayerBoy_30_Ability01_Part01",
    "TrailblazerRemembrance_Functions",
    "Mem_Modifiers",
    "Mem_Servant_PlayerBoyServant_30_DeathRattle",
    "Mem_Servant_PlayerBoyServant_30_BattleCry",
    "Mem_Servant_PlayerBoyServant_30_Ability11_Together",
    "Mem_Servant_PlayerBoyServant_30_Ability03_Part02",
    "Mem_Servant_PlayerBoyServant_30_PassiveAbility01",
    "Mem_Servant_PlayerBoyServant_30_Ability11_Part02",
    "Mem_Servant_PlayerBoyServant_30_Ability11_Part01",
    "Mem_Servant_PlayerBoyServant_30_Ability11_Entry",
    "Mem_Servant_PlayerBoyServant_30_Ability01_Part02",
    "Mem_Servant_PlayerBoyServant_30_Ability01_Part01",
    "Mem_Functions"
  ],
  "abilityObject": {
    "TrailblazerRemembrance_Modifiers": {
      "fileName": "TrailblazerRemembrance_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1221389813\">ADV_StageAbility_PlayerBoy_30_BeforeBattleDebuffListener</a>",
          "onBattlePrep": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target List}}"
              },
              "modifier": null,
              "ID": "800701(SkillMaze)",
              "counter": 1,
              "duration": {
                "displayLines": "10"
              },
              "conditions": {
                "name": "Has Flag",
                "flagName": "TimeLock"
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1657383963\">ADV_StageAbility_Maze_PlayerBoy_30</a>",
          "counter": 1,
          "stackType": "Merge",
          "modifierFlags": [
            "TimeLock"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-915997562\">PlayerBoy_30_UltraState_Sub</a>",
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"-1976946957\">PlayerBoy_30_UltraState</a>[<span class=\"descriptionNumberColor\">Epic</span>]",
            "casterFilter": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Basic ATK"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill11",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Show",
                  "abilityName": "Basic ATK"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1976946957\">PlayerBoy_30_UltraState</a>[<span class=\"descriptionNumberColor\">Epic</span>]",
          "stackType": "ReplaceByCaster",
          "description": "When Mem is on the field, Basic ATK is enhanced to \"Together, We Script Tomorrow!\"",
          "type": "Other",
          "effectName": "Epic",
          "statusName": "Epic",
          "stackLimit": 2,
          "addStacksPerTrigger": 1,
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
                    "compareType": "<=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Memosprite}}"
                        },
                        "compareType": ">",
                        "value2": 0,
                        "livingTargets": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-915997562\">PlayerBoy_30_UltraState_Sub</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-915997562\">PlayerBoy_30_UltraState_Sub</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    },
                    "compareType": ">",
                    "value2": 0,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-915997562\">PlayerBoy_30_UltraState_Sub</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-915997562\">PlayerBoy_30_UltraState_Sub</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    },
                    "compareType": ">",
                    "value2": 0,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-915997562\">PlayerBoy_30_UltraState_Sub</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-915997562\">PlayerBoy_30_UltraState_Sub</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "Charm"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-915997562\">PlayerBoy_30_UltraState_Sub</a>"
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
                        "flagName": "Charm",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Memosprite}}"
                        },
                        "compareType": ">",
                        "value2": 0,
                        "livingTargets": true
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
                      "modifier": "<a class=\"gModGreen\" id=\"-915997562\">PlayerBoy_30_UltraState_Sub</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__409195494\">M_PlayerBoy_30_CreateServantPreshow</a>",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "entityType": "Servant",
            "skillType": [
              "Skill",
              "Ultimate"
            ],
            "conditions": {
              "name": "Compare: Target Count",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "compareType": "<=",
              "value2": 0,
              "livingTargets": true
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1937701279\">PlayerBoy_30_Halo_ListenSPChange</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Energy Change",
              "execute": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "_spDelta"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_spDelta",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Memosprite}}"
                        },
                        "compareType": ">=",
                        "value2": 1,
                        "livingTargets": true
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "TeamAddSP"
                          },
                          "variableName": "_tmpTeamAddSP"
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "_tmpTeamAddSP",
                          "context": "ContextModifier",
                          "value": {
                            "displayLines": "_spDelta"
                          }
                        },
                        {
                          "name": "Define Custom Variable with Clamp Configuration",
                          "context": "ContextModifier",
                          "ignoreBelow": 0.00010000006,
                          "variableName": "_tmpTeamAddSP"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "_tmpTeamAddSP"
                          },
                          "variableName": "TeamAddSP"
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
    "TrailblazerRemembrance_PlayerBoy_30_Trace01": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Trace01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1430938835\">M_PlayerBoy_30_Trace01</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"894703898\">M_PlayerBoy_30_Trace01_ListenFirstSummon</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__894703898\">M_PlayerBoy_30_Trace01_ListenFirstSummon</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Character ID",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterID": "ServantID"
                      },
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}.[[getMemosprite]]"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}.[[getMemosprite]]"
                      },
                      "variableName": "CurEnergy",
                      "context": "TargetEntity",
                      "value": {
                        "displayLines": "(0.4 * 100)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1430938835\">M_PlayerBoy_30_Trace01</a>",
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
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "advanceType": "Set",
                      "multiAdd": "(0 - 0.3)"
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
    "TrailblazerRemembrance_PlayerBoy_30_Eidolon4": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Eidolon4",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1646565949\">M_PlayerBoy_30_Eidolon4</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1646565949\">M_PlayerBoy_30_Eidolon4</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}.[[getMemosprite]]"
                    },
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Part Of",
                            "target1": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "target2": {
                              "name": "Target Name",
                              "target": "{{All Team Members with Unselectables}}.[[addMemoAndSummon]]"
                            }
                          },
                          {
                            "name": "Compare: Ability Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
                            "compareType": "<=",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}.[[getMemosprite]]"
                          },
                          "variableName": "CurEnergy",
                          "context": "TargetEntity",
                          "value": {
                            "displayLines": "(0.03 * 100)"
                          }
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
    "TrailblazerRemembrance_PlayerBoy_30_Eidolon2": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Eidolon2",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1545900235\">M_PlayerBoy_30_Eidolon2</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1854522168\">PlayerBoy_30_Eidolon2_Count</a>[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RetainCountZero"
          ],
          "description": "When ally memosprites (aside from Mem) take action, Trailblazer regenerates <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> Energy. This effect can trigger <span class=\"descriptionNumberColor\">MDF_Count</span> more time(s).",
          "type": "Other",
          "statusName": "Gleaner of the Past",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "MDF_Count"
                  },
                  "variableName": "mInit_Count"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": null,
                  "value": {
                    "displayLines": "mInit_Count"
                  }
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "modifierName": "<a class=\"gModGreen\" id=\"1854522168\">PlayerBoy_30_Eidolon2_Count</a>[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                  "variableName": "MDF_Count",
                  "value": {
                    "displayLines": "mInit_Count"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1545900235\">M_PlayerBoy_30_Eidolon2</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1854522168\">PlayerBoy_30_Eidolon2_Count</a>[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                  "counter": {
                    "displayLines": "1"
                  },
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "displayLines": "8"
                    },
                    "MDF_Count": {
                      "displayLines": "1"
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{All Memosprites}} - {{Caster}}.[[getMemosprite]]"
                        }
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "<a class=\"gModGreen\" id=\"1854522168\">PlayerBoy_30_Eidolon2_Count</a>[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "displayLines": "8"
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1854522168\">PlayerBoy_30_Eidolon2_Count</a>[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                      "function": "Add"
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1854522168\">PlayerBoy_30_Eidolon2_Count</a>[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                      "adjustmentType": "+",
                      "variableName": "MDF_Count",
                      "value": -1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{All Memosprites}} - {{Caster}}.[[getMemosprite]]"
                        }
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "<a class=\"gModGreen\" id=\"1854522168\">PlayerBoy_30_Eidolon2_Count</a>[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "displayLines": "8"
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1854522168\">PlayerBoy_30_Eidolon2_Count</a>[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                      "function": "Add"
                    },
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"1854522168\">PlayerBoy_30_Eidolon2_Count</a>[<span class=\"descriptionNumberColor\">Gleaner of the Past</span>]",
                      "adjustmentType": "+",
                      "variableName": "MDF_Count",
                      "value": -1
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
    "TrailblazerRemembrance_LocalPlayer_PlayerBoy_30_BeforeBattleDebuffListener": {
      "fileName": "TrailblazerRemembrance_LocalPlayer_PlayerBoy_30_BeforeBattleDebuffListener",
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
          "modifier": "<a class=\"gModGreen\" id=\"1221389813\">ADV_StageAbility_PlayerBoy_30_BeforeBattleDebuffListener</a>",
          "counter": -1
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
    "TrailblazerRemembrance_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "TrailblazerRemembrance_LocalPlayer_StandardAbility_AttackBreak",
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
    "TrailblazerRemembrance_LocalPlayer_PlayerBoy_30_TechniqueUsage": {
      "fileName": "TrailblazerRemembrance_LocalPlayer_PlayerBoy_30_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "Create Overworld Entity",
          "summonID": 80071
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "TrailblazerRemembrance_LocalPlayer_PlayerBoy_30_NormalAtk01": {
      "fileName": "TrailblazerRemembrance_LocalPlayer_PlayerBoy_30_NormalAtk01",
      "skillTrigger": "NormalAtk",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Overworld Attack Instance"
            }
          ],
          "projectileFinished": [
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
    "TrailblazerRemembrance_PlayerBoy_30_TechniqueInLevel": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_TechniqueInLevel",
      "childAbilityList": [
        "TrailblazerRemembrance_PlayerBoy_30_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"-1770265909\">PlayerBoy_30_Maze</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1506830909\">PlayerBoy_30_Maze_Damage</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1506830909\">PlayerBoy_30_Maze_Damage</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -60,
              "execute": [
                {
                  "name": "IF",
                  "conditions": "Technique Modifies Current Wave",
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "displayLines": "1"
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Technique"
                      }
                    },
                    "Trigger: Attack End"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1770265909\">PlayerBoy_30_Maze</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
              "execute": [
                {
                  "name": "IF",
                  "conditions": "Technique Modifies Current Wave",
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "advanceType": "Delay",
                      "multiAdd": "0.5"
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
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "TrailblazerRemembrance_PlayerBoy_30_PassiveAbility01": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_PassiveAbility01",
      "childAbilityList": [
        "TrailblazerRemembrance_PlayerBoy_30_PassiveAbility01"
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
          "modifier": "<a class=\"gModGreen\" id=\"78289633\">PlayerBoy_30_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"409195494\">M_PlayerBoy_30_CreateServantPreshow</a>",
          "valuePerStack": {
            "ServantID": {
              "displayLines": "ServantID"
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "PointSpecial1"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Character ID",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterID": "8007 (Trailblazer - Remembrance[M])"
              },
              "passed": [
                {
                  "name": "Change Character UI"
                }
              ],
              "failed": [
                {
                  "name": "Change Character UI"
                }
              ]
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__78289633\">PlayerBoy_30_Passive</a>",
          "execute": [
            {
              "eventTrigger": "Entity Death [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target Count",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Memosprite}}"
                    },
                    "compareType": "<=",
                    "value2": 0,
                    "livingTargets": true
                  },
                  "passed": [
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill02",
                      "skillSlot": "Skill",
                      "enableSecondaryType": "ControlSkill02"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "assignState": "False"
                    }
                  ]
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
                      "modifier": "<a class=\"gModGreen\" id=\"1937701279\">PlayerBoy_30_Halo_ListenSPChange</a>"
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
                        "name": "Trace Activated",
                        "conditionList": "PointSpecial1"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1976946957\">PlayerBoy_30_UltraState</a>[<span class=\"descriptionNumberColor\">Epic</span>]",
                      "stackLimit": {
                        "displayLines": "2"
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1937701279\">PlayerBoy_30_Halo_ListenSPChange</a>"
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "TeamAddSP",
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 999,
                  "onChange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "TeamAddSP",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "10"
                        }
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "_chargeEnergy",
                          "resetValue": {
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((TeamAddSP / 10))"
                          },
                          "scope": "ContextModifier"
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}.[[getMemosprite]]"
                          },
                          "variableName": "CurEnergy",
                          "context": "TargetEntity",
                          "value": {
                            "displayLines": "_chargeEnergy"
                          }
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "TeamAddSP",
                          "value": {
                            "displayLines": "(0 - (_chargeEnergy * 10))"
                          }
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
    "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part02": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1976946957\">PlayerBoy_30_UltraState</a>[<span class=\"descriptionNumberColor\">Epic</span>]",
          "addStacksPerTrigger": -1,
          "silentAdd": true
        },
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "toRemove": [
            "STAT_CTRL"
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
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "1.2"
            },
            "Toughness": {
              "displayLines": "(AOE Toughness Value / 2)"
            },
            "Tags": [
              "Joint-Attack"
            ],
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Trigger: Attack End",
          "skipDeathSettle": true
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getMemosprite]]"
          },
          "variableName": "CurEnergy",
          "context": "TargetEntity",
          "value": {
            "displayLines": "(0.1 * 100)"
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part01": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part01",
      "childAbilityList": [
        "TrailblazerRemembrance_PlayerBoy_30_Ability11_Camera",
        "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part01",
        "TrailblazerRemembrance_PlayerBoy_30_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": 30,
      "toughnessList": [
        0,
        10,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getMemosprite]]"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "(AOE Toughness Value / 2)"
          },
          "variableName": "Skill11_Stance"
        },
        {
          "name": "Trigger Joint-Attack Ability",
          "abilityList": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "PlayerBoy_30_Ability11_Part02"
            },
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "ability": "Servant_PlayerBoyServant_30_Ability11_Together"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part02_Charge": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part02_Charge",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getMemosprite]]"
          },
          "variableName": "CurEnergy",
          "context": "TargetEntity",
          "value": {
            "displayLines": "(0.4 * 100)"
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
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part02": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1640803691\">PlayerBoy_30_TryCreateServant</a>"
        },
        {
          "name": "Define Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getMemosprite]]"
          },
          "scope": "TargetEntity",
          "value": {
            "displayLines": "AOE Toughness Value"
          },
          "variableName": "Ultra_Stance"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getMemosprite]]"
          },
          "ability": "Servant_PlayerBoyServant_30_Ability03_Part02",
          "isTrigger": true
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part01": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part01",
      "childAbilityList": [
        "TrailblazerRemembrance_PlayerBoy_30_Ability03_Camera",
        "TrailblazerRemembrance_PlayerBoy_30_Ability03_EnterReady",
        "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part01",
        "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part02",
        "TrailblazerRemembrance_PlayerBoy_30_Ability03_Part02_Charge"
      ],
      "skillTrigger": "Skill03",
      "realAttacker": "Servant",
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
          "ability": "PlayerBoy_30_Ability03_Part02",
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
    "TrailblazerRemembrance_PlayerBoy_30_Ability03_EnterReady": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability21_Part02": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability21_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          },
          "healPercent": {
            "displayLines": "0.6"
          },
          "EnergyGainPercent": "100%",
          "formula": "Heal from Target MaxHP"
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getMemosprite]]"
          },
          "variableName": "CurEnergy",
          "context": "TargetEntity",
          "value": {
            "displayLines": "(0.1 * 100)"
          }
        },
        {
          "name": "Clear DMG Numbers(UI)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster's Memosprite}}"
          }
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability21_Part01": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability21_Part01",
      "childAbilityList": [
        "TrailblazerRemembrance_PlayerBoy_30_Ability21_Part01",
        "TrailblazerRemembrance_PlayerBoy_30_Ability21_Part02"
      ],
      "skillTrigger": "Skill21",
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
          "ability": "PlayerBoy_30_Ability21_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster's Memosprite}}"
      }
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability02_Part02": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1640803691\">PlayerBoy_30_TryCreateServant</a>"
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
            "name": "Target Exists",
            "target": {
              "name": "Target Name",
              "target": "{{BattleEvent60021}}"
            },
            "living": true
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{BattleEvent60021}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1446276332\">MissionBattleEvent60021_TriggerBEAbility</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability02_Part01": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability02_Part01",
      "childAbilityList": [
        "TrailblazerRemembrance_PlayerBoy_30_Ability02_Camera",
        "TrailblazerRemembrance_PlayerBoy_30_Ability02_Part01",
        "TrailblazerRemembrance_PlayerBoy_30_Ability02_Part02"
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
          "ability": "PlayerBoy_30_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability01_Part02": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "displayLines": "1"
                },
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "TrailblazerRemembrance_PlayerBoy_30_Ability01_Part01": {
      "fileName": "TrailblazerRemembrance_PlayerBoy_30_Ability01_Part01",
      "childAbilityList": [
        "TrailblazerRemembrance_PlayerBoy_30_Ability01_Camera",
        "TrailblazerRemembrance_PlayerBoy_30_Ability01_Part01",
        "TrailblazerRemembrance_PlayerBoy_30_Ability01_Part02"
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
          "ability": "PlayerBoy_30_Ability01_Part02",
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
    "TrailblazerRemembrance_Functions": {
      "fileName": "TrailblazerRemembrance_Functions",
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
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1640803691\">PlayerBoy_30_TryCreateServant</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Memosprite}}"
                },
                "compareType": "<=",
                "value2": 0,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "TeamAddSP"
                },
                {
                  "name": "Summon Memosprite",
                  "memoID": {
                    "displayLines": "ServantID"
                  },
                  "valuePerStack": {
                    "Ability03_P1_DamagePercentage": {
                      "displayLines": "2.4"
                    },
                    "Ability11_P2_DamagePercentage": {
                      "displayLines": "1.2"
                    }
                  },
                  "afterSummoning": [
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill21",
                      "skillSlot": "Skill",
                      "enableSecondaryType": "ControlSkill02"
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
    "Mem_Modifiers": {
      "fileName": "Mem_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-745710374\">Memosprite_PlayerBoyServant_30_UltraBonus</a>[<span class=\"descriptionNumberColor\">Mem's Support</span>]",
          "stackType": "ReplaceByCaster",
          "useEntitySnapshot": true,
          "description": "For every 1 instance of DMG dealt, additionally deals 1 instance of True DMG equal to <span class=\"descriptionNumberColor\">MDF_DamagePercentage</span> of the original DMG.",
          "type": "Buff",
          "effectName": "Mem's Support",
          "statusName": "Mem's Support",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}.[[getMemosprite]] | {{Modifier Holder}}.[[getSummoner]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-246894785\">Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy</a>",
              "refModifier": "<a class=\"gModGreen\" id=\"-745710374\">Memosprite_PlayerBoyServant_30_UltraBonus</a>[<span class=\"descriptionNumberColor\">Mem's Support</span>]",
              "aliveOnly": "False",
              "haloStatus": true,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Target Exists",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getMemosprite]]"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getMemosprite]]"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-745710374\">Memosprite_PlayerBoyServant_30_UltraBonus</a>[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
                      }
                    ],
                    "invertCondition": true
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Target Exists",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getSummoner]]"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getSummoner]]"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-745710374\">Memosprite_PlayerBoyServant_30_UltraBonus</a>[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
                      }
                    ],
                    "invertCondition": true
                  }
                ]
              },
              "duration": -1,
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "displayLines": "MDF_PropertyRatio"
                },
                "MDF_BasicDamagePercentage": {
                  "displayLines": "MDF_BasicDamagePercentage"
                },
                "MDF_PointB3_P1_Basic": {
                  "displayLines": "MDF_PointB3_P1_Basic"
                },
                "MDF_PointB3_P2_Delta": {
                  "displayLines": "MDF_PointB3_P2_Delta"
                },
                "MDF_PointB3_P3_Ratio": {
                  "displayLines": "MDF_PointB3_P3_Ratio"
                },
                "MDF_PointB3_P4_Max": {
                  "displayLines": "MDF_PointB3_P4_Max"
                },
                "MDF_Eidolon4_P2_ExtraDamagePercentage": {
                  "displayLines": "MDF_Eidolon4_P2_ExtraDamagePercentage"
                },
                "Is_Copy": 1
              }
            }
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Is_Copy",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}.[[getMemosprite]] | {{Modifier Holder}}.[[getSummoner]]"
                      },
                      "includeDyingTargets": true,
                      "ifTargetFound": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-246894785\">Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}.[[getMemosprite]] | {{Modifier Holder}}.[[getSummoner]]"
                  },
                  "includeDyingTargets": true,
                  "maxTargets": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 1
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-745710374\">Memosprite_PlayerBoyServant_30_UltraBonus</a>[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-745710374\">Memosprite_PlayerBoyServant_30_UltraBonus</a>[<span class=\"descriptionNumberColor\">Mem's Support</span>]",
                        "invertCondition": true
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-246894785\">Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy</a>",
                      "referenceModifier": "<a class=\"gModGreen\" id=\"-745710374\">Memosprite_PlayerBoyServant_30_UltraBonus</a>[<span class=\"descriptionNumberColor\">Mem's Support</span>]",
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "displayLines": "MDF_PropertyRatio"
                        },
                        "MDF_BasicDamagePercentage": {
                          "displayLines": "MDF_BasicDamagePercentage"
                        },
                        "MDF_PointB3_P1_Basic": {
                          "displayLines": "MDF_PointB3_P1_Basic"
                        },
                        "MDF_PointB3_P2_Delta": {
                          "displayLines": "MDF_PointB3_P2_Delta"
                        },
                        "MDF_PointB3_P3_Ratio": {
                          "displayLines": "MDF_PointB3_P3_Ratio"
                        },
                        "MDF_PointB3_P4_Max": {
                          "displayLines": "MDF_PointB3_P4_Max"
                        },
                        "MDF_Eidolon4_P2_ExtraDamagePercentage": {
                          "displayLines": "MDF_Eidolon4_P2_ExtraDamagePercentage"
                        },
                        "Is_Copy": 1
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Post-DMG Effect(like True DMG)",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Damage Data",
                      "variableName": "_originalDamage",
                      "scope": "ContextModifier",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Result_FinalDamageBase</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "_originalDamage",
                        "compareType": ">",
                        "value2": 0,
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Null Type",
                            "DamageFlat": {
                              "displayLines": "(MDF_DamagePercentage * _originalDamage)"
                            },
                            "dmgFormulaFinal": "Converted DMG Base",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "True DMG"
                          },
                          "overrideDamageOwner": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "isConvertedDMG": true,
                          "dealAfterOriginialHit": true
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
                        "modifier": "<a class=\"gModGreen\" id=\"-745710374\">Memosprite_PlayerBoyServant_30_UltraBonus</a>[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-246894785\">Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-246894785\">Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy</a>"
                    }
                  ]
                },
                {
                  "name": "Override Modifier Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-246894785\">Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy</a>",
                  "modifierNameUpdate": "<a class=\"gModGreen\" id=\"-745710374\">Memosprite_PlayerBoyServant_30_UltraBonus</a>[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "CRIT Rate increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>. For every 1 instance of DMG dealt, additionally deals 1 instance of True DMG equal to <span class=\"descriptionNumberColor\">MDF_DamagePercentage</span> of the original DMG."
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                      "statValue": {
                        "displayLines": "MDF_PropertyRatio"
                      }
                    }
                  ]
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-763533094\">TServant_PlayerBoyServant_30_RefreshDamagePercentage</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-745710374\">Memosprite_PlayerBoyServant_30_UltraBonus</a>[<span class=\"descriptionNumberColor\">Mem's Support</span>]"
                      },
                      {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}.[[getMemosprite]] | {{Modifier Holder}}.[[getSummoner]]"
                        }
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
                      "modifier": "<a class=\"gModGreen\" id=\"-246894785\">Memosprite_PlayerBoyServant_30_UltraBonus_Eidolon1Copy</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-763533094\">TServant_PlayerBoyServant_30_RefreshDamagePercentage</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1895406948\">Memosprite_PlayerBoyServant_30_CritDmgUp</a>[<span class=\"descriptionNumberColor\">Friends! Together!</span>]",
          "stackType": "ReplaceByCaster",
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "statusName": "Friends! Together!",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "_propertyBase",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "((_propertyBase * MDF_PropertyConvert) + MDF_PropertyBase)"
                  },
                  "variableName": "MDF_PropertyRatio"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__2058264520\">M_PlayerBoyServant_30_EnableAbility</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      "Is Extra-Turn",
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Current Action Owner}}"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Memosprite"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Force Auto-Battle on Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "isAuto": true
                },
                {
                  "name": "Force Target-Lock on Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "enable": true
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Action-End Phase"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityName": "Skill11",
                  "skillSlot": "Memosprite"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Show",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Force Auto-Battle on Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                },
                {
                  "name": "Force Target-Lock on Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start "
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1274980234\">PlayerBoy_30_TeamSP</a>[<span class=\"descriptionNumberColor\">Charge</span>]",
          "modifierFlags": [
            "RetainCountZero"
          ],
          "description": "When Charge reaches <span class=\"descriptionNumberColor\">MDF_Max</span>, Mem immediately takes action and can use \"Lemme! Help You!\".",
          "type": "Other",
          "statusName": "Charge"
        }
      ],
      "references": []
    },
    "Mem_Servant_PlayerBoyServant_30_DeathRattle": {
      "fileName": "Mem_Servant_PlayerBoyServant_30_DeathRattle",
      "childAbilityList": [
        "Mem_Servant_PlayerBoyServant_30_DeathRattle"
      ],
      "skillTrigger": "SkillP04",
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
          "modifier": "<a class=\"gModGreen\" id=\"1143439505\">Memosprite_PlayerBoyServant_30_DeathRattle</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1143439505\">Memosprite_PlayerBoyServant_30_DeathRattle</a>",
          "modifierFlags": [
            "Deathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Was Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}.[[getSummoner]]"
                  },
                  "advanceType": "Set",
                  "multiAdd": "(0 - 0.25)"
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
    "Mem_Servant_PlayerBoyServant_30_BattleCry": {
      "fileName": "Mem_Servant_PlayerBoyServant_30_BattleCry",
      "childAbilityList": [
        "Mem_Servant_PlayerBoyServant_30_BattleCry"
      ],
      "skillTrigger": "SkillP03",
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
          "modifier": "<a class=\"gModGreen\" id=\"1428217171\">Memosprite_PlayerBoyServant_30_BattleCry</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1428217171\">Memosprite_PlayerBoyServant_30_BattleCry</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CurEnergy",
                  "value": {
                    "displayLines": "(0.5 * 100)"
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
    "Mem_Servant_PlayerBoyServant_30_Ability11_Together": {
      "fileName": "Mem_Servant_PlayerBoyServant_30_Ability11_Together",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "Ability11_P2_DamagePercentage"
            },
            "Toughness": {
              "displayLines": "Skill11_Stance"
            },
            "Tags": [
              "Joint-Attack"
            ],
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Mem_Servant_PlayerBoyServant_30_Ability03_Part02": {
      "fileName": "Mem_Servant_PlayerBoyServant_30_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getSummoner]]"
          },
          "ability": "PlayerBoy_30_Ability03_Part02_Charge",
          "isTrigger": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "Ability03_P1_DamagePercentage"
            },
            "Toughness": {
              "displayLines": "Ultra_Stance"
            },
            "ToughnessDMGType": {
              "DamageType": "Ice"
            },
            "instanceTag": "PlayerBoy_30_Ultra",
            "Tags": null,
            "attackType": "Ultimate"
          }
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling"
      ],
      "whenAdded": [
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
              "modifier": "<a class=\"gModGreen\" id=\"164475936\">M_PlayerBoyServant_30_Eidolon6</a>"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__164475936\">M_PlayerBoyServant_30_Eidolon6</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Ultimate"
                        ]
                      },
                      {
                        "name": "Has DMG Instance Tag",
                        "tag": "PlayerBoy_30_Ultra"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateFIXED</span>&nbsp;",
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
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Mem_Servant_PlayerBoyServant_30_PassiveAbility01": {
      "fileName": "Mem_Servant_PlayerBoyServant_30_PassiveAbility01",
      "childAbilityList": [
        "Mem_Servant_PlayerBoyServant_30_PassiveAbility01",
        "Mem_Servant_PlayerBoyServant_30_Ability03_Part02",
        "Mem_Servant_PlayerBoyServant_30_Ability11_Together"
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
          "modifier": "<a class=\"gModGreen\" id=\"-4188752\">Memosprite_PlayerBoyServant_30_Passive</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1883418109\">Memosprite_PlayerBoyServant_30_Passive_Performance</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1274980234\">PlayerBoy_30_TeamSP</a>[<span class=\"descriptionNumberColor\">Charge</span>]",
          "counter": {
            "displayLines": "CurEnergy"
          },
          "valuePerStack": {
            "MDF_Max": 1
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "CurEnergy"
          },
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}.[[getSummoner]]"
          },
          "maximum": {
            "displayLines": "MDF_Max"
          },
          "assignState": "True",
          "bar#": "Progress"
        },
        {
          "name": "Force Target-Lock on Target",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "enable": true
        },
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
              "modifier": "<a class=\"gModGreen\" id=\"585085986\">Memosprite_PlayerBoyServant_30_Eidolon1</a>",
              "referenceModifier": "<a class=\"gModGreen\" id=\"1832901043\">MReference_Empty</a>"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__145969573\">M_PlayerBoyServant_30_BreakFlag</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break",
                    "invertCondition": true
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1883418109\">Memosprite_PlayerBoyServant_30_Passive_Performance</a>",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
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
                      "target": "{{Caster}}.[[getSummoner]]"
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target List Entities",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                        },
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"145969573\">M_PlayerBoyServant_30_BreakFlag</a>"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Leave Battle"
            },
            {
              "eventTrigger": "Caused Weakness Break [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"145969573\">M_PlayerBoyServant_30_BreakFlag</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "DisableAction"
                      }
                    ],
                    "invertCondition": true
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]",
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
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "DisableAction"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-4188752\">Memosprite_PlayerBoyServant_30_Passive</a>",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1895406948\">Memosprite_PlayerBoyServant_30_CritDmgUp</a>[<span class=\"descriptionNumberColor\">Friends! Together!</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyConvert": {
                  "displayLines": "0.12"
                },
                "MDF_PropertyBase": {
                  "displayLines": "0.24"
                }
              }
            }
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}.[[getSummoner]]"
                  },
                  "maximum": {
                    "displayLines": "MDF_Max"
                  },
                  "assignState": "False",
                  "bar#": "Progress"
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "CurEnergy",
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CurEnergy",
                        "compareType": ">",
                        "value2": {
                          "displayLines": "MDF_Max"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "MDF_Max"
                          },
                          "variableName": "CurEnergy"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CurEnergy",
                        "compareType": "=",
                        "value2": {
                          "displayLines": "MDF_Max"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Current Turn Is",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"2058264520\">M_PlayerBoyServant_30_EnableAbility</a>",
                                "invertCondition": true
                              }
                            ]
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
                          "name": "Action Advance/Delay",
                          "advanceType": "Set",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "set": 0
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2058264520\">M_PlayerBoyServant_30_EnableAbility</a>"
                        }
                      ]
                    },
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "<a class=\"gModGreen\" id=\"-1274980234\">PlayerBoy_30_TeamSP</a>[<span class=\"descriptionNumberColor\">Charge</span>]",
                      "value": {
                        "displayLines": "CurEnergy"
                      }
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "displayLines": "CurEnergy"
                      },
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}.[[getSummoner]]"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1895406948\">Memosprite_PlayerBoyServant_30_CritDmgUp</a>[<span class=\"descriptionNumberColor\">Friends! Together!</span>]",
                      "valuePerStack": {
                        "MDF_PropertyConvert": {
                          "displayLines": "0.12"
                        },
                        "MDF_PropertyBase": {
                          "displayLines": "0.24"
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
    "Mem_Servant_PlayerBoyServant_30_Ability11_Part02": {
      "fileName": "Mem_Servant_PlayerBoyServant_30_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "CurEnergy"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2058264520\">M_PlayerBoyServant_30_EnableAbility</a>"
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
            },
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "advanceType": "Set",
              "multiAdd": "(0 - 1)"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-745710374\">Memosprite_PlayerBoyServant_30_UltraBonus</a>[<span class=\"descriptionNumberColor\">Mem's Support</span>]",
          "duration": {
            "displayLines": "3"
          },
          "valuePerStack": {
            "MDF_PropertyRatio": {
              "displayLines": "0.1"
            },
            "MDF_BasicDamagePercentage": {
              "displayLines": "0.28"
            },
            "MDF_PointB3_P1_Basic": {
              "displayLines": "100"
            },
            "MDF_PointB3_P2_Delta": {
              "displayLines": "10"
            },
            "MDF_PointB3_P3_Ratio": {
              "displayLines": "0.02"
            },
            "MDF_PointB3_P4_Max": {
              "displayLines": "0.2"
            },
            "MDF_Eidolon4_P2_ExtraDamagePercentage": {
              "displayLines": "0.06"
            }
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
        "Trigger: Ability End"
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2111079333\">M_PlayerBoy_30_BE_Ability02_Preshow</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2111079333\">M_PlayerBoy_30_BE_Ability02_Preshow</a>",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player's Aim Target List}}"
            },
            "skillType": [
              "Memosprite"
            ],
            "conditions": {
              "name": "AND",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2058264520\">M_PlayerBoyServant_30_EnableAbility</a>"
                },
                {
                  "name": "Is Part Of",
                  "target1": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "invertCondition": true
                }
              ]
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "displayLines": "(0 - 1)"
              }
            }
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Mem_Servant_PlayerBoyServant_30_Ability11_Part01": {
      "fileName": "Mem_Servant_PlayerBoyServant_30_Ability11_Part01",
      "childAbilityList": [
        "Mem_Servant_PlayerBoyServant_30_Ability11_Entry",
        "Mem_Servant_PlayerBoyServant_30_Ability11_Entry_Camera",
        "Mem_Servant_PlayerBoyServant_30_Ability11_Part01",
        "Mem_Servant_PlayerBoyServant_30_Ability11_Part02",
        "Mem_Servant_PlayerBoyServant_30_Ability11_Camera"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Memosprite",
      "energy": 30,
      "toughnessList": [
        0,
        10,
        0
      ],
      "parse": [
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
            },
            "invertCondition": true
          }
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Servant_PlayerBoyServant_30_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
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
          }
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
    "Mem_Servant_PlayerBoyServant_30_Ability11_Entry": {
      "fileName": "Mem_Servant_PlayerBoyServant_30_Ability11_Entry",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "SWITCH",
          "team": "Player Team",
          "caseTasks": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 3
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 4
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 5
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 6
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 7
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 8
            }
          ],
          "teamCountType": 137
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Mem_Servant_PlayerBoyServant_30_Ability01_Part02": {
      "fileName": "Mem_Servant_PlayerBoyServant_30_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "PointB2"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CurEnergy",
              "value": {
                "displayLines": "(0.05 * 100)"
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "_index"
        },
        {
          "name": "Looped Event",
          "maxLoops": 4,
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(_index + 1)"
              },
              "variableName": "_index"
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target Group}}"
              },
              "paramSequence": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "displayLines": "0.36"
                    },
                    "Toughness": {
                      "displayLines": "ST Toughness Value"
                    },
                    "Tags": null,
                    "attackType": "Memosprite",
                    "EnergyGainPercent": "(1 / (4 + 1))* 100%"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target Group}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "displayLines": "0.9"
            },
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "Tags": null,
            "attackType": "Memosprite",
            "EnergyGainPercent": "(1 / (4 + 1))* 100%"
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
    "Mem_Servant_PlayerBoyServant_30_Ability01_Part01": {
      "fileName": "Mem_Servant_PlayerBoyServant_30_Ability01_Part01",
      "childAbilityList": [
        "Mem_Servant_PlayerBoyServant_30_Ability01_Part01",
        "Mem_Servant_PlayerBoyServant_30_Ability01_Part02",
        "Mem_Servant_PlayerBoyServant_30_Ability01_Camera",
        "Mem_Servant_PlayerBoyServant_30_Ability01_Camera_Charm"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Memosprite",
      "energy": 20,
      "toughnessList": [
        10,
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
          "ability": "Servant_PlayerBoyServant_30_Ability01_Part02",
          "isTrigger": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Charm"
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
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Mem_Functions": {
      "fileName": "Mem_Functions",
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
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-763533094\">TServant_PlayerBoyServant_30_RefreshDamagePercentage</a>",
          "parse": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "MDF_BasicDamagePercentage"
              },
              "variableName": "MDF_DamagePercentage"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "PointB3"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "_maxSP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(0, &nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(((_maxSP - MDF_PointB3_P1_Basic) / MDF_PointB3_P2_Delta)))"
                  },
                  "variableName": "_maxSP"
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "MDF_DamagePercentage",
                  "context": "ContextModifier",
                  "value": {
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>((_maxSP * MDF_PointB3_P3_Ratio), MDF_PointB3_P4_Max)"
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_DamagePercentage",
                      "context": "ContextModifier",
                      "value": {
                        "displayLines": "MDF_Eidolon4_P2_ExtraDamagePercentage"
                      }
                    }
                  ]
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