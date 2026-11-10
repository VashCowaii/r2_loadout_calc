const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Sparkle",
  "trimCharacterName": "Sparkle",
  "abilityList": [
    "Sparkle_Modifiers",
    "Sparkle_LocalPlayer_StandardAbility_AttackBreak",
    "Sparkle_LocalPlayer_Sparkle_TechniqueUsage",
    "Sparkle_LocalPlayer_Sparkle_NormalAtk01",
    "Sparkle_Advanced_Sparkle_TechniqueInLevel",
    "Sparkle_Advanced_Sparkle_Eidolon6_BP",
    "Sparkle_Advanced_Sparkle_PassiveAbility_1",
    "Sparkle_Advanced_Sparkle_Ability03_Part02",
    "Sparkle_Advanced_Sparkle_Ability03_Part01",
    "Sparkle_Advanced_Sparkle_Ability03_EnterReady",
    "Sparkle_Advanced_Sparkle_Ability02_Others_Part02",
    "Sparkle_Advanced_Sparkle_Ability02_Self_Part02",
    "Sparkle_Advanced_Sparkle_Ability02_Part01",
    "Sparkle_Advanced_Sparkle_Ability01_Part02",
    "Sparkle_Advanced_Sparkle_Ability01_Part01"
  ],
  "abilityObject": {
    "Sparkle_Modifiers": {
      "fileName": "Sparkle_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-685638153\">ADV_StageAbility_Maze_Sparkle_Hide</a>",
          "counter": 1,
          "stackType": "Merge"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__212298658\">ADV_StageAbility_Maze_Sparkle</a>",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1118089721\">Advanced_Sparkle_Tree03</a>[<span class=\"descriptionNumberColor\">Nocturne</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue3</span>.",
          "type": "Buff",
          "effectName": "Nocturne",
          "statusName": "Nocturne",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "MDF_PropertyValue"
                  },
                  "variableName": "MDF_PropertyValue3"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "displayLines": "MDF_PropertyValue"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-922966375\">Advanced_Sparkle_PassiveAbility_Real_AllDamageAddedRatio</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
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
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1966292851\">Advanced_Sparkle_Ability03_PowerUp</a>[<span class=\"descriptionNumberColor\">Cipher</span>]"
                      },
                      {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "((MDF_PropertyValue2 + MDF_PropertyValue3) * MDF_Count)"
                      },
                      "variableName": "MDF_PropertyValue4"
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue4"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_PropertyValue2 * MDF_Count)"
                      },
                      "variableName": "MDF_PropertyValue4"
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                          "value": "MDF_PropertyValue4"
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
          "for": "<a class=\"gModGreen\" id=\"mod__582121474\">Advanced_Sparkle_Eidolon6_Mark</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
                  "includeDyingTargets": true,
                  "maxTargets": 10,
                  "conditions": {
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
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"582121474\">Advanced_Sparkle_Eidolon6_Mark</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1471334562\">Advanced_Sparkle_PassiveAbility_AllDamageAddedRatio02</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "stackType": "ReplaceByCaster",
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-922966375\">Advanced_Sparkle_PassiveAbility_Real_AllDamageAddedRatio</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"94548241\">Advanced_Sparkle_PassiveAbility_Real_DefenceDownRatio</a>"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Count",
                  "modifierName": "<a class=\"gModGreen\" id=\"1755645655\">Advanced_Sparkle_PassiveAbility_Halo</a>[<span class=\"descriptionNumberColor\">Figment</span>]",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_Count",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "MDF_PassiveMaxLayer"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "MDF_PassiveMaxLayer"
                      },
                      "variableName": "MDF_Count"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_PropertyValue2 * MDF_Count)"
                  },
                  "variableName": "MDF_PropertyValue"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-922966375\">Advanced_Sparkle_PassiveAbility_Real_AllDamageAddedRatio</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue2": {
                      "displayLines": "MDF_PropertyValue2"
                    },
                    "MDF_PropertyValue3": {
                      "displayLines": "MDF_PropertyValue3"
                    },
                    "MDF_Count": {
                      "displayLines": "MDF_Count"
                    },
                    "MDF_DefenceAddedRatio2": {
                      "displayLines": "MDF_DefenceAddedRatio2"
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 2
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and DEF decreases by <span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio2</span>."
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_DefenceAddedRatio2 * MDF_Count)"
                      },
                      "variableName": "MDF_DefenceAddedRatio2"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"94548241\">Advanced_Sparkle_PassiveAbility_Real_DefenceDownRatio</a>",
                      "referenceModifier": "<a class=\"gModGreen\" id=\"779501689\">MReference_DefenceRatioDown</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "MDF_DefenceAddedRatio2"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]"
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]"
            },
            {
              "eventTrigger": "When Modifier is Added [Anyone]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1755645655\">Advanced_Sparkle_PassiveAbility_Halo</a>[<span class=\"descriptionNumberColor\">Figment</span>]",
          "stackType": "ReplaceByCaster",
          "description": "The DMG taken by all enemies increases.",
          "type": "Buff",
          "statusName": "Figment",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1471334562\">Advanced_Sparkle_PassiveAbility_AllDamageAddedRatio02</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
              "aliveOnly": "True",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue2": {
                  "displayLines": "MDF_PropertyValue2"
                },
                "MDF_PropertyValue3": {
                  "displayLines": "MDF_PropertyValue3"
                },
                "MDF_DefenceAddedRatio2": {
                  "displayLines": "MDF_DefenceAddedRatio2"
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__208852691\">Advanced_Sparkle_Eidolon6_CritDmgAddedRatio01</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "MDF_PropertyValueConvert"
                  },
                  "variableName": "MDF_PropertyValue"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
                  "value": {
                    "displayLines": "MDF_PropertyValueConvert"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__980417237\">Advanced_Sparkle_Ability02_CritDmgAddedRatio02</a>",
          "stackType": "Replace",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_PropertyValueConvert2 + MDF_PropertyValueBase2)"
                  },
                  "variableName": "MDF_PropertyValue2"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
                  "value": {
                    "displayLines": "MDF_PropertyValue2"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
          "stackType": "ReplaceByCaster",
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Dreamdiver",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"980417237\">Advanced_Sparkle_Ability02_CritDmgAddedRatio02</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(MDF_PropertyValueConvert + MDF_PropertyValueBase)"
                  },
                  "variableName": "MDF_PropertyValue"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageConverted</span>&nbsp;",
                  "value": {
                    "displayLines": "(MDF_PropertyValueConvert + MDF_PropertyValueBase)"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Nocturne",
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
                        "entityType": "Character"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypePenetrate</span>."
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                      "value": {
                        "displayLines": "MDF_AllDamageTypePenetrate"
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
          "for": "<a class=\"gModGreen\" id=\"mod__2103842601\">Advanced_Sparkle_Eidolon4_CD</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Action-End Phase",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1966292851\">Advanced_Sparkle_Ability03_PowerUp</a>[<span class=\"descriptionNumberColor\">Cipher</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "description": "Each stack of the Vulnerability effect provided by Sparkle's Talent additionally increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Cipher",
          "statusName": "Cipher",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
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
                        "displayLines": "MDF_PropertyValue2"
                      }
                    },
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>, and additionally enhances each stack of the Vulnerability effect provided by Sparkle's Talent by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>."
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1010036084\">Advanced_Sparkle_PointB2_FreeAbility</a>[<span class=\"descriptionNumberColor\">Artificial Flower</span>]",
          "description": "The next use of Skill does not consume any Skill Points.",
          "type": "Buff",
          "statusName": "Artificial Flower",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Properties",
                  "abilityTagList": [
                    "Skill02"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Reset to Default"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Properties",
                  "abilityTagList": [
                    "Skill02"
                  ],
                  "propertyList": [
                    {
                      "name": "Ability Property Action",
                      "propertyName": "Skill Point Cost",
                      "propertyAction": "Remove"
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
                    "name": "Skill Name",
                    "skillName": "Skill02"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1887140599\">Advanced_Sparkle_Ability03ExtraBP</a>[<span class=\"descriptionNumberColor\">The Hero with a Thousand Faces</span>]",
          "stackType": "Replace",
          "description": "After an ally's turn ends, if the current Skill Points are not at maximum, immediately recovers Skill Points for the team.",
          "type": "Buff",
          "statusName": "The Hero with a Thousand Faces",
          "execute": [
            {
              "eventTrigger": "Turn [Anyone]: End",
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
                          "target": "{{Current Turn Owner}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        },
                        "entityType": "Character"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Skill Points",
                      "variableName": "MDF_CurrentBP"
                    },
                    {
                      "name": "Define Custom Variable with Skill Points",
                      "variableName": "MDF_BPDirty"
                    },
                    {
                      "name": "Define Custom Variable with Skill Point Max",
                      "variableName": "MDF_BPMax"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "((MDF_BPMax - MDF_CurrentBP) - MDF_BPDirty)"
                      },
                      "variableName": "MDF_BPGap1"
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "Layer",
                      "variableName": "MDF_Layer",
                      "multiplier": 1
                    },
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(MDF_Layer, MDF_BPGap1)"
                      },
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "compareType": ">",
                            "value2": 1,
                            "valueType": "Layer"
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1887140599\">Advanced_Sparkle_Ability03ExtraBP</a>[<span class=\"descriptionNumberColor\">The Hero with a Thousand Faces</span>]",
                              "addStacksPerTrigger": -1
                            },
                            {
                              "name": "Skill Points Modification",
                              "adjustmentValue": 1,
                              "adjustmentType": "+"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Skill Points Modification",
                              "adjustmentValue": 1,
                              "adjustmentType": "+"
                            },
                            "Modifier Deletes Itself"
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
      ],
      "references": []
    },
    "Sparkle_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Sparkle_LocalPlayer_StandardAbility_AttackBreak",
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
    "Sparkle_LocalPlayer_Sparkle_TechniqueUsage": {
      "fileName": "Sparkle_LocalPlayer_Sparkle_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Adventure Lineup}}"
          },
          "modifier": null,
          "ID": "130601()",
          "duration": {
            "displayLines": "20"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "130602(SkillMaze)",
          "duration": {
            "displayLines": "20"
          }
        },
        "Submit Technique Use"
      ],
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Sparkle_LocalPlayer_Sparkle_NormalAtk01": {
      "fileName": "Sparkle_LocalPlayer_Sparkle_NormalAtk01",
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
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier (OVERWORLD)",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-659142427\">ADV_Modifier_Maze_SparkleMask</a>"
                      },
                      "passed": [
                        "Deleted bullshit"
                      ],
                      "failed": [
                        "Deleted bullshit"
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-659142427\">ADV_Modifier_Maze_SparkleMask</a>",
                      "duration": 1.1
                    },
                    {
                      "name": "Overworld Attack Instance"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "onAbortReg": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-659142427\">ADV_Modifier_Maze_SparkleMask</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-659142427\">ADV_Modifier_Maze_SparkleMask</a>",
          "stackType": "Refresh"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Sparkle_Advanced_Sparkle_TechniqueInLevel": {
      "fileName": "Sparkle_Advanced_Sparkle_TechniqueInLevel",
      "childAbilityList": [
        "Sparkle_Advanced_Sparkle_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"-762225535\">Advanced_Sparkle_Maze_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-762225535\">Advanced_Sparkle_Maze_Modifier</a>",
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
                      "name": "Skill Points Modification",
                      "adjustmentValue": {
                        "displayLines": "3"
                      },
                      "adjustmentType": "+"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "displayLines": "20"
                      },
                      "isFixed": "* ERR"
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
    "Sparkle_Advanced_Sparkle_Eidolon6_BP": {
      "fileName": "Sparkle_Advanced_Sparkle_Eidolon6_BP",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Current Action Holder Is",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "MDF_Sparkle_CritDmgValue",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "MDF_Sparkle_CritDmgValue"
          },
          "variableName": "MDF_CriticalDamageBase_change"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(MDF_CriticalDamageBase_change * 0.24)"
          },
          "variableName": "MDF_CriticalDamageBase_change"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
          "duration": {
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_PropertyValueConvert": {
              "displayLines": "MDF_CriticalDamageBase_change"
            },
            "MDF_PropertyValueBase": {
              "displayLines": "0.45"
            },
            "MDF_AllDamageTypePenetrate": {
              "displayLines": "0.1"
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Is Part Of",
            "target1": {
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
              "advanceType": "Advance",
              "multiAdd": "-0.5"
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Sparkle_Advanced_Sparkle_PassiveAbility_1": {
      "fileName": "Sparkle_Advanced_Sparkle_PassiveAbility_1",
      "childAbilityList": [
        "Sparkle_Advanced_Sparkle_PassiveAbility_1",
        "Sparkle_Advanced_Sparkle_Eidolon6_BP"
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
          "modifier": "<a class=\"gModGreen\" id=\"-2031508716\">Advanced_Sparkle_PassiveAbility_Listen</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-489784205\">Advanced_Sparkle_AbilityPreshow</a>"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "3"
          },
          "variableName": "MDF_PassiveMaxLayer"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2031508716\">Advanced_Sparkle_PassiveAbility_Listen</a>",
          "modifierFlags": [
            "ListenBattleEventSkill"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Change Skill Point Max",
                      "function": "Add",
                      "value": {
                        "displayLines": "(2 + 1)"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Change Skill Point Max",
                      "function": "Add",
                      "value": {
                        "displayLines": "2"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Skill Point Max",
                  "function": "Add",
                  "value": {
                    "displayLines": "-2"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Turn [Anyone]: Start",
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
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "entityType": "Character"
                      },
                      {
                        "name": "Trace Activated",
                        "conditionList": "Artificial Flower"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_BPCount"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_BPCountAll"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_BPCountAll",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "3"
                        }
                      },
                      {
                        "name": "Trace Activated",
                        "conditionList": "Artificial Flower"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1010036084\">Advanced_Sparkle_PointB2_FreeAbility</a>[<span class=\"descriptionNumberColor\">Artificial Flower</span>]"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_BPCount"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_BPCountAll"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Nocturne"
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
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "entityType": "Memosprite"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1118089721\">Advanced_Sparkle_Tree03</a>[<span class=\"descriptionNumberColor\">Nocturne</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "0.45"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Skill Point Changes",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "MDF_BPCount",
                  "value": "ParamValue"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "-MDF_BPCount"
                  },
                  "variableName": "MDF_BPCount"
                },
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
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Player Team"
                      },
                      {
                        "name": "Is Entity Type",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "entityType": "Character"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Artificial Flower"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(MDF_BPCountAll + MDF_BPCount)"
                          },
                          "variableName": "MDF_BPCountAll"
                        }
                      ]
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
                            "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]"
                          },
                          {
                            "name": "Is Entity Type",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "entityType": "Character"
                          },
                          {
                            "name": "Trace Activated",
                            "conditionList": "Almanac"
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
                            "displayLines": "1"
                          },
                          "isFixed": "* ERR"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1755645655\">Advanced_Sparkle_PassiveAbility_Halo</a>[<span class=\"descriptionNumberColor\">Figment</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "stackLimit": {
                        "displayLines": "MDF_PassiveMaxLayer"
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue2": {
                          "displayLines": "0.04"
                        },
                        "MDF_PropertyValue3": {
                          "displayLines": "0.06"
                        },
                        "MDF_DefenceAddedRatio2": {
                          "displayLines": "0.1"
                        }
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "MDF_BPCount"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Anyone]"
            },
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 1
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1178065515\">Advanced_Sparkle_SpeedUP</a>[<span class=\"descriptionNumberColor\">Suspension of Disbelief</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "referenceModifier": "<a class=\"gModGreen\" id=\"1020254741\">MReference_SpeedRatioUp</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "0.15"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Nocturne"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1118089721\">Advanced_Sparkle_Tree03</a>[<span class=\"descriptionNumberColor\">Nocturne</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "0.45"
                        }
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
          "for": "<a class=\"gModGreen\" id=\"mod__-489784205\">Advanced_Sparkle_AbilityPreshow</a>",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player's Aim Target List}}"
            },
            "skillType": [
              "Skill"
            ],
            "conditions": {
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
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": -0.5
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
    "Sparkle_Advanced_Sparkle_Ability03_Part02": {
      "fileName": "Sparkle_Advanced_Sparkle_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Skill Points",
          "variableName": "MDF_PassiveLayer01"
        },
        {
          "name": "Define Custom Variable with Skill Points",
          "variableName": "MDF_PassiveLayerDirty"
        },
        {
          "name": "Define Custom Variable with Skill Point Max",
          "variableName": "TeamBpMax"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "((TeamBpMax - MDF_PassiveLayer01) - MDF_PassiveLayerDirty)"
          },
          "variableName": "MDF_BPGap"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Eidolon Activated",
                "eidolon": 4
              }
            ]
          },
          "passed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": {
                "displayLines": "(6 + 1)"
              },
              "adjustmentType": "+"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(6 + 1)"
              },
              "variableName": "BPAdd"
            },
            {
              "name": "Define Custom Variable with Skill Points",
              "variableName": "MDF_PassiveLayer02"
            }
          ],
          "failed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": {
                "displayLines": "6"
              },
              "adjustmentType": "+"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "6"
              },
              "variableName": "BPAdd"
            },
            {
              "name": "Define Custom Variable with Skill Points",
              "variableName": "MDF_PassiveLayer02"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "BPAdd",
            "compareType": ">",
            "value2": {
              "displayLines": "MDF_BPGap"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1887140599\">Advanced_Sparkle_Ability03ExtraBP</a>[<span class=\"descriptionNumberColor\">The Hero with a Thousand Faces</span>]",
              "stackLimit": {
                "displayLines": "10"
              },
              "addStacksPerTrigger": {
                "displayLines": "(BPAdd - MDF_BPGap)"
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1966292851\">Advanced_Sparkle_Ability03_PowerUp</a>[<span class=\"descriptionNumberColor\">Cipher</span>]",
          "duration": {
            "displayLines": "3"
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.06"
            },
            "MDF_PropertyValue2": {
              "displayLines": "0.4"
            }
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
              "name": "Define Custom Variable with Stat",
              "variableName": "MDF_Sparkle_CritDmgValue",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_Sparkle_CritDmgValue * 0.3)"
              },
              "variableName": "NDF_Sparkle_Rank06_CritDmg"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValueConvert": {
                      "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)"
                    },
                    "MDF_PropertyValueBase": {
                      "displayLines": "0.45"
                    },
                    "MDF_AllDamageTypePenetrate": {
                      "displayLines": "0.1"
                    }
                  }
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"980417237\">Advanced_Sparkle_Ability02_CritDmgAddedRatio02</a>"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
                          "invertCondition": true
                        }
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"980417237\">Advanced_Sparkle_Ability02_CritDmgAddedRatio02</a>",
                  "duration": {
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "MDF_PropertyValueConvert2": {
                      "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)"
                    },
                    "MDF_PropertyValueBase2": {
                      "displayLines": "0.45"
                    },
                    "MDF_AllDamageTypePenetrate": {
                      "displayLines": "0.1"
                    }
                  }
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
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{All Team Members}}"
      }
    },
    "Sparkle_Advanced_Sparkle_Ability03_Part01": {
      "fileName": "Sparkle_Advanced_Sparkle_Ability03_Part01",
      "childAbilityList": [
        "Sparkle_Sparkle_Ability03_Camera",
        "Sparkle_Advanced_Sparkle_Ability03_EnterReady",
        "Sparkle_Advanced_Sparkle_Ability03_Part01",
        "Sparkle_Advanced_Sparkle_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
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
          "ability": "Advanced_Sparkle_Ability03_Part02"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{All Team Members}}"
      },
      "realTargetData": {
        "primaryTarget": "{{All Team Members}}"
      }
    },
    "Sparkle_Advanced_Sparkle_Ability03_EnterReady": {
      "fileName": "Sparkle_Advanced_Sparkle_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Sparkle_Advanced_Sparkle_Ability02_Others_Part02": {
      "fileName": "Sparkle_Advanced_Sparkle_Ability02_Others_Part02",
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
              "modifier": "<a class=\"gModGreen\" id=\"1178065515\">Advanced_Sparkle_SpeedUP</a>[<span class=\"descriptionNumberColor\">Suspension of Disbelief</span>]",
              "duration": {
                "displayLines": "2"
              },
              "referenceModifier": "<a class=\"gModGreen\" id=\"1020254741\">MReference_SpeedRatioUp</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.15"
                }
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "MDF_Sparkle_CritDmgValue",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "MDF_Sparkle_CritDmgValue"
          },
          "variableName": "MDF_CriticalDamageBase_change"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(MDF_CriticalDamageBase_change * 0.24)"
          },
          "variableName": "MDF_CriticalDamageBase_change"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_Sparkle_CritDmgValue * 0.3)"
              },
              "variableName": "NDF_Sparkle_Rank06_CritDmg"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "OR",
                      "conditionList": [
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1966292851\">Advanced_Sparkle_Ability03_PowerUp</a>[<span class=\"descriptionNumberColor\">Cipher</span>]"
                        },
                        {
                          "name": "Is Part Of",
                          "target1": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "target2": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
              "duration": {
                "displayLines": "2"
              },
              "valuePerStack": {
                "MDF_PropertyValueConvert": {
                  "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)"
                },
                "MDF_PropertyValueBase": {
                  "displayLines": "0.45"
                },
                "MDF_AllDamageTypePenetrate": {
                  "displayLines": "0.1"
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
              "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
              "duration": {
                "displayLines": "2"
              },
              "valuePerStack": {
                "MDF_PropertyValueConvert": {
                  "displayLines": "MDF_CriticalDamageBase_change"
                },
                "MDF_PropertyValueBase": {
                  "displayLines": "0.45"
                },
                "MDF_AllDamageTypePenetrate": {
                  "displayLines": "0.1"
                }
              }
            }
          ]
        },
        {
          "name": "Action Advance/Delay",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "advanceType": "Advance",
          "multiAdd": "-0.5"
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
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Sparkle_Advanced_Sparkle_Ability02_Self_Part02": {
      "fileName": "Sparkle_Advanced_Sparkle_Ability02_Self_Part02",
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
              "modifier": "<a class=\"gModGreen\" id=\"1178065515\">Advanced_Sparkle_SpeedUP</a>[<span class=\"descriptionNumberColor\">Suspension of Disbelief</span>]",
              "duration": {
                "displayLines": "2"
              },
              "referenceModifier": "<a class=\"gModGreen\" id=\"1020254741\">MReference_SpeedRatioUp</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.15"
                }
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "MDF_Sparkle_CritDmgValue",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "MDF_Sparkle_CritDmgValue"
          },
          "variableName": "MDF_CriticalDamageBase_change"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(MDF_CriticalDamageBase_change * 0.24)"
          },
          "variableName": "MDF_CriticalDamageBase_change"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_Sparkle_CritDmgValue * 0.3)"
              },
              "variableName": "NDF_Sparkle_Rank06_CritDmg"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
              "duration": {
                "displayLines": "2"
              },
              "valuePerStack": {
                "MDF_PropertyValueConvert": {
                  "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)"
                },
                "MDF_PropertyValueBase": {
                  "displayLines": "0.45"
                },
                "MDF_AllDamageTypePenetrate": {
                  "displayLines": "0.1"
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "OR",
                      "conditionList": [
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1966292851\">Advanced_Sparkle_Ability03_PowerUp</a>[<span class=\"descriptionNumberColor\">Cipher</span>]"
                        }
                      ]
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
              "duration": {
                "displayLines": "2"
              },
              "valuePerStack": {
                "MDF_PropertyValueConvert": {
                  "displayLines": "(MDF_CriticalDamageBase_change + NDF_Sparkle_Rank06_CritDmg)"
                },
                "MDF_PropertyValueBase": {
                  "displayLines": "0.45"
                },
                "MDF_AllDamageTypePenetrate": {
                  "displayLines": "0.1"
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
              "modifier": "<a class=\"gModGreen\" id=\"930084380\">Advanced_Sparkle_Ability02_CritDmgAddedRatio01</a>[<span class=\"descriptionNumberColor\">Dreamdiver</span>]",
              "duration": {
                "displayLines": "2"
              },
              "valuePerStack": {
                "MDF_PropertyValueConvert": {
                  "displayLines": "MDF_CriticalDamageBase_change"
                },
                "MDF_PropertyValueBase": {
                  "displayLines": "0.45"
                },
                "MDF_AllDamageTypePenetrate": {
                  "displayLines": "0.1"
                }
              }
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
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Sparkle_Advanced_Sparkle_Ability02_Part01": {
      "fileName": "Sparkle_Advanced_Sparkle_Ability02_Part01",
      "childAbilityList": [
        "Sparkle_Advanced_Sparkle_Ability02_Part01",
        "Sparkle_Sparkle_Ability02_Self_Camera",
        "Sparkle_Advanced_Sparkle_Ability02_Self_Part02",
        "Sparkle_Sparkle_Ability02_Others_Camera",
        "Sparkle_Advanced_Sparkle_Ability02_Others_Part02"
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
          "name": "IF",
          "conditions": {
            "name": "Current Action Holder Is",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            }
          },
          "passed": [
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Advanced_Sparkle_Ability02_Self_Part02",
              "isTrigger": true
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Advanced_Sparkle_Ability02_Others_Part02",
              "isTrigger": true
            }
          ]
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
    "Sparkle_Advanced_Sparkle_Ability01_Part02": {
      "fileName": "Sparkle_Advanced_Sparkle_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Almanac"
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "displayLines": "10"
              },
              "isFixed": "* ERR"
            }
          ]
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
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "attackType": "Basic ATK",
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
    "Sparkle_Advanced_Sparkle_Ability01_Part01": {
      "fileName": "Sparkle_Advanced_Sparkle_Ability01_Part01",
      "childAbilityList": [
        "Sparkle_Sparkle_Ability01_Camera",
        "Sparkle_Advanced_Sparkle_Ability01_Part01",
        "Sparkle_Advanced_Sparkle_Ability01_Part02"
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
          "ability": "Advanced_Sparkle_Ability01_Part02",
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