const configAbility = {
  "fileName": "Cyrene_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__790390625\">ADV_StageAbility_Maze_Cyrene_Female</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1576003496\">ADV_StageAbility_Maze_Cyrene_Male</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__63083859\">ADV_StageAbility_Maze_Cyrene_Enemy</a>",
      "counter": 1,
      "stackType": "Refresh",
      "modifierFlags": [
        "TimeLock"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1940492361\">Cyrene_Passive</a>",
      "onStageEntry": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"501195686\">Cyrene_StateRefreshImmediately</a>"
        }
      ],
      "onForeGround": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"501195686\">Cyrene_StateRefreshImmediately</a>"
        }
      ],
      "onShiftFromFakeModel": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"501195686\">Cyrene_StateRefreshImmediately</a>"
        }
      ],
      "onBuffUpdateComplete": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"501195686\">Cyrene_StateRefreshImmediately</a>"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__501195686\">Cyrene_StateRefreshImmediately</a>",
      "stackType": "RetainGlobalLatest",
      "onStack": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "#CL_SkipNextMazeBuffRefreshState",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_SpecifiedState",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "_SpecifiedState"
                  },
                  "variableName": "_TargetState"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "_SpecifiedState"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier (OVERWORLD)",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"434616416\">ADV_StageAbility_Maze_Cyrene</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 2,
                      "variableName": "_TargetState"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "_TargetState"
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "#CL_SkipNextMazeBuffRefreshState"
            }
          ]
        },
        {
          "name": "SWITCH",
          "switchValue": {
            "displayLines": "_TargetState"
          },
          "caseTasks": [
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 1,
              "execute": [
                {
                  "name": "Set Mapping Point",
                  "point": "CameraRoot",
                  "reset": true
                },
                {
                  "name": "Set Mapping Point",
                  "point": "CameraRootSpine",
                  "reset": true
                }
              ]
            },
            {
              "name": "SWITCH CONDITON",
              "caseValueIs": 2,
              "execute": [
                {
                  "name": "Set Mapping Point",
                  "point": "CameraRoot",
                  "mapTo": "CameraRoot1"
                },
                {
                  "name": "Set Mapping Point",
                  "point": "CameraRootSpine",
                  "mapTo": "CameraRootSpine1"
                }
              ]
            }
          ]
        },
        "Modifier Deletes Itself"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__434616416\">ADV_StageAbility_Maze_Cyrene</a>",
      "counter": 1,
      "stackType": "Merge",
      "modifierTasks": [
        {
          "name": "Looped Event",
          "maxLoops": 999
        }
      ],
      "onCreation": [
        {
          "name": "Create Overworld Entity",
          "summonID": 14151
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"501195686\">Cyrene_StateRefreshImmediately</a>"
        }
      ],
      "onRemoval": [
        {
          "name": "Remove Overworld Entity",
          "targetSummonEntity": {
            "name": "Add Target by Summoned Units",
            "targetSummoner": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "summonID": 14151
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "#CL_IsInLookAtPhone",
                "compareType": "=",
                "value2": 0
              },
              {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Adventure Player(Latest)}}"
                }
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  "Check In Story Mode",
                  "Check TimeScale(VFX)"
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"501195686\">Cyrene_StateRefreshImmediately</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"887707071\">ADV_StageAbility_MazeSpeed_Cyrene</a>"
        }
      ],
      "onStack": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"887707071\">ADV_StageAbility_MazeSpeed_Cyrene</a>",
          "valuePerStack": {
            "MDF_MoveSpeedRatio": {
              "displayLines": "0.5"
            }
          }
        }
      ],
      "onChangeTeamLead": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Adventure Player}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"887707071\">ADV_StageAbility_MazeSpeed_Cyrene</a>",
          "valuePerStack": {
            "MDF_MoveSpeedRatio": {
              "displayLines": "0.5"
            }
          }
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__887707071\">ADV_StageAbility_MazeSpeed_Cyrene</a>",
      "stackType": "Replace",
      "stackData": [
        "MDF_MoveSpeedRatio"
      ],
      "latentQueue": [
        "#CL_IsInLookAtPhone"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1161189096\">Cyrene_Eidolon2_1</a>",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Copy",
              "target": {
                "name": "Target Name",
                "target": "{{Caster's Memosprite}}"
              },
              "variable": "CurAmazingCount",
              "target2": null,
              "variable2": "MDF_Count"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_Count * 0.06)"
              },
              "variableName": "MDF_PropertyValue"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_PropertyValue",
                "compareType": ">=",
                "value2": {
                  "displayLines": "0.24"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "0.24"
                  },
                  "variableName": "MDF_PropertyValue"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1356425425\">Cyrene_Ability02_Bonus_Main</a>[<span class=\"descriptionNumberColor\">Bloom, Elysium of Beyond</span>]",
              "valuePerStack": {
                "MDF_OriginDamagePercentage": {
                  "displayLines": "0.24"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__827249673\">Cyrene_PointB3_Sub3</a>[<span class=\"descriptionNumberColor\">Causality in Trichotomy</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>.",
      "type": "Buff",
      "statusName": "Causality in Trichotomy",
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
                "displayLines": "MDF_DamageIncrease"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__810472054\">Cyrene_PointB3_Sub2</a>[<span class=\"descriptionNumberColor\">Causality in Trichotomy</span>]",
      "stackType": "Replace",
      "description": "Ice RES PEN increases by <span class=\"descriptionNumberColor\">_AddValue</span>.",
      "type": "Buff",
      "statusName": "Causality in Trichotomy",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>(MDF_PropertyValue) * 0.02)"
              },
              "variableName": "_AddValue"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIcePEN</span>&nbsp;",
              "statValue": {
                "displayLines": "_AddValue"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1865411138\">ChrysosMark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1015949385\">Cyrene_PointB3</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1194720287\">Cyrene_PointB3_CheckSpeed</a>"
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
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1194720287\">Cyrene_PointB3_CheckSpeed</a>"
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1194720287\">Cyrene_PointB3_CheckSpeed</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1194720287\">Cyrene_PointB3_CheckSpeed</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1194720287\">Cyrene_PointB3_CheckSpeed</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__619883840\">Cyrene_Passive_Sub</a>[<span class=\"descriptionNumberColor\">Hearts Gather as One</span>]",
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageIncrease</span>.",
      "type": "Buff",
      "statusName": "Hearts Gather as One",
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
                "displayLines": "MDF_DamageIncrease"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1765178435\">Cyrene_Ability03_Sub</a>",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_CritChance"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1470142416\">Cyrene_Ability03</a>[<span class=\"descriptionNumberColor\">Ripples of Past Reverie</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [],
      "description": "Basic ATK is replaced with Enhanced Basic ATK, and the Zone effect from the Skill has no duration limit. Increases this unit's and Demiurge's CRIT Rate by <span class=\"descriptionNumberColor\">#Skill03_P3_CritChance</span>.",
      "type": "Buff",
      "statusName": "Ripples of Past Reverie",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}+{{Caster's Memosprite}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1765178435\">Cyrene_Ability03_Sub</a>",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_CritChance": {
              "displayLines": "0.5"
            }
          }
        }
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Entity Turn-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase1"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": -1,
              "variableName": "FieldLifeTime"
            },
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill11",
              "skillSlot": "Basic ATK"
            },
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill31",
              "skillSlot": "Ultimate",
              "enableSecondaryType": "ControlSkill03"
            },
            {
              "name": "Update Ability Enhance Button",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "display": "Show",
              "abilityName": "Basic ATK"
            },
            {
              "name": "Change Character UI"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "(CurSpecialSP + CurOverflowSpecialSP)"
              },
              "displaySubType": "PureNum",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "assignState": "True",
              "bar#": "Number"
            },
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
              "name": "Set Hit-Class"
            },
            {
              "name": "Change Entity Turn-State",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "phase": "Phase2"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-556268195\">Cyrene_Ability02_Bonus</a>[<span class=\"descriptionNumberColor\">Bloom, Elysium of Beyond</span>]",
      "stackType": "ReplaceByCaster",
      "description": "For every 1 instance of DMG dealt, additionally deals 1 instance of True DMG equal to <span class=\"descriptionNumberColor\">MDF_BasicDamagePercentage</span> of the original DMG.",
      "type": "Buff",
      "statusName": "Bloom, Elysium of Beyond",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any"
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
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1161189096\">Cyrene_Eidolon2_1</a>"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Copy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1161189096\">Cyrene_Eidolon2_1</a>",
                          "variable": "MDF_PropertyValue",
                          "target2": null,
                          "variable2": "MDF_ExtraDamagePercentage"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_OriginDamagePercentage + MDF_ExtraDamagePercentage)"
                      },
                      "variableName": "MDF_BasicDamagePercentage"
                    },
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
                          "displayLines": "(MDF_BasicDamagePercentage * _originalDamage)"
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1161189096\">Cyrene_Eidolon2_1</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1161189096\">Cyrene_Eidolon2_1</a>",
                  "variable": "MDF_PropertyValue",
                  "target2": null,
                  "variable2": "MDF_ExtraDamagePercentage"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_OriginDamagePercentage + MDF_ExtraDamagePercentage)"
              },
              "variableName": "MDF_BasicDamagePercentage"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1356425425\">Cyrene_Ability02_Bonus_Main</a>[<span class=\"descriptionNumberColor\">Bloom, Elysium of Beyond</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "stackData": [
        "MDF_OriginDamagePercentage"
      ],
      "description": "For every 1 instance of DMG dealt, additionally deals 1 instance of True DMG equal to <span class=\"descriptionNumberColor\">MDF_BasicDamagePercentage</span> of the original DMG.",
      "type": "Buff",
      "statusName": "Bloom, Elysium of Beyond",
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]-{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-556268195\">Cyrene_Ability02_Bonus</a>[<span class=\"descriptionNumberColor\">Bloom, Elysium of Beyond</span>]",
          "aliveOnly": "True",
          "haloStatus": true,
          "valuePerStack": {
            "MDF_OriginDamagePercentage": {
              "displayLines": "0.24"
            }
          }
        }
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
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
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1161189096\">Cyrene_Eidolon2_1</a>"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Copy",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1161189096\">Cyrene_Eidolon2_1</a>",
                          "variable": "MDF_PropertyValue",
                          "target2": null,
                          "variable2": "MDF_ExtraDamagePercentage"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_OriginDamagePercentage + MDF_ExtraDamagePercentage)"
                      },
                      "variableName": "MDF_BasicDamagePercentage"
                    },
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
                          "displayLines": "(MDF_BasicDamagePercentage * _originalDamage)"
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
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1470142416\">Cyrene_Ability03</a>[<span class=\"descriptionNumberColor\">Ripples of Past Reverie</span>]"
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
                "modifier": "<a class=\"gModGreen\" id=\"1161189096\">Cyrene_Eidolon2_1</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1161189096\">Cyrene_Eidolon2_1</a>",
                  "variable": "MDF_PropertyValue",
                  "target2": null,
                  "variable2": "MDF_ExtraDamagePercentage"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_OriginDamagePercentage + MDF_ExtraDamagePercentage)"
              },
              "variableName": "MDF_BasicDamagePercentage"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__386083249\">Cyrene_Passive_Teamate_ThanksGift</a>",
      "modifierFlags": [
        "ServantInherit_ModifierContinuation",
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Character ID",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterID": "1415 (Cyrene)"
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Switch",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Varying Data",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_ID",
                      "value": "TargetCharacterID"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Unique Name",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "Cyrene_TargetCount_{MDF_ID}",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Assign Unique Name",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "Cyrene_TargetCount_{MDF_ID}",
                          "unknownBoolean": true
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "CurInsertHitCount",
                          "context": "ContextCaster",
                          "value": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "MDF_Switch"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1931471655\">Cyrene_Passive_Teamate</a>[<span class=\"descriptionNumberColor\">Future</span>]",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "description": "When taking action, grants Cyrene \"Recollection.\"",
      "type": "Other",
      "statusName": "Future",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1682831339\">Cyrene_ChargeEnergy</a>",
              "variables": {
                "parameter[0]_AddValue": {
                  "displayLines": "MDF_SPAdd"
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"386083249\">Cyrene_Passive_Teamate_ThanksGift</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Child of Remembrance",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "entityType": "Memosprite"
                  }
                ]
              },
              "failed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1682831339\">Cyrene_ChargeEnergy</a>",
              "variables": {
                "parameter[0]_AddValue": {
                  "displayLines": "MDF_SPAdd"
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"386083249\">Cyrene_Passive_Teamate_ThanksGift</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Trace Activated",
                    "conditionList": "Child of Remembrance",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "entityType": "Memosprite"
                  }
                ]
              },
              "failed": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    }
  ],
  "references": []
}