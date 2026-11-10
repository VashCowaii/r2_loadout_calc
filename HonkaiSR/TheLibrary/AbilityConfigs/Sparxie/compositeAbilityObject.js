const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Sparxie",
  "trimCharacterName": "Sparxie",
  "abilityList": [
    "Sparxie_Modifiers",
    "Sparxie_LocalPlayer_StandardAbility_AttackBreak",
    "Sparxie_LocalPlayer_Sparxie_TechniqueUsage",
    "Sparxie_LocalPlayer_Sparxie_NormalAtk01",
    "Sparxie_Sparxie_Ability12_Part01",
    "Sparxie_Sparxie_TechniqueInLevel",
    "Sparxie_Sparxie_PassiveAbility01",
    "Sparxie_Sparxie_Ability04_Part02",
    "Sparxie_Sparxie_Ability04_Part01",
    "Sparxie_Sparxie_Ability03_Part02",
    "Sparxie_Sparxie_Ability03_Part01",
    "Sparxie_Sparxie_Ability03_EnterReady",
    "Sparxie_Sparxie_Ability21_Part02",
    "Sparxie_Sparxie_Ability21_Part01",
    "Sparxie_Sparxie_Ability02_Part02",
    "Sparxie_Sparxie_Ability02_Part01",
    "Sparxie_Sparxie_Ability11_Part02",
    "Sparxie_Sparxie_Ability11_Part01",
    "Sparxie_Sparxie_Ability01_Part02",
    "Sparxie_Sparxie_Ability01_Part01",
    "Sparxie_Functions"
  ],
  "abilityObject": {
    "Sparxie_Modifiers": {
      "fileName": "Sparxie_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-149061418\">ADV_StageAbility_Maze_Sparxie</a>",
          "counter": 1,
          "stackType": "Replace",
          "modifierFlags": [
            "Blind"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-769743474\">Sparxie_Eidolon6</a>[<span class=\"descriptionNumberColor\">#BuiltDifferent #GoingExtinct</span>]",
          "stackType": "ReplaceByCaster",
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "All-Type RES PEN Boost",
          "statusName": "#BuiltDifferent #GoingExtinct",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__2009365349\">Sparxie_Eidolon4_Sub</a>[<span class=\"descriptionNumberColor\">#LockedIn #FaceCard</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Elation increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Elation Boost",
          "statusName": "#LockedIn #FaceCard",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-803298712\">Sparxie_Eidolon4</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
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
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2009365349\">Sparxie_Eidolon4_Sub</a>[<span class=\"descriptionNumberColor\">#LockedIn #FaceCard</span>]",
                      "duration": {
                        "displayLines": "3"
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "0.36"
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
          "for": "<a class=\"gModGreen\" id=\"mod__510555115\">Sparxie_Eidolon2_CriticalDamage</a>[<span class=\"descriptionNumberColor\">#AudienceKnows</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Each stack increases CRIT DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "#AudienceKnows",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(MDF_PropertyValue * _Layer)"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__366587908\">Sparxie_Eidolon1_Sub02</a>[<span class=\"descriptionNumberColor\">#GoingViral #WhoIsShe</span>]",
          "stackType": "ReplaceByCaster",
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "All-Type RES PEN Boost",
          "statusName": "#GoingViral #WhoIsShe",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__416920765\">Sparxie_Eidolon1_Sub01</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"366587908\">Sparxie_Eidolon1_Sub02</a>[<span class=\"descriptionNumberColor\">#GoingViral #WhoIsShe</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "MDF_PropertyValue"
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-719410617\">Sparxie_Eidolon1</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Aha Instant: End",
              "execute": [
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "displayLines": "5"
                  },
                  "adjustment": "Add"
                }
              ]
            }
          ],
          "elationValueChange": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "enteringRange": [
                {
                  "name": "Declare Custom Variable",
                  "variableName": "_CurrentEP",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">BasePoint</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "#SkillRank_Rank01_P3_EPDamageAddRatioMax",
                    "compareType": "<",
                    "value2": {
                      "displayLines": "(0.015 * _CurrentEP)"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"416920765\">Sparxie_Eidolon1_Sub01</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "0.15"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"416920765\">Sparxie_Eidolon1_Sub01</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "(0.015 * _CurrentEP)"
                        }
                      }
                    }
                  ]
                }
              ],
              "leavingRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"416920765\">Sparxie_Eidolon1_Sub01</a>"
                }
              ],
              "onChange": [
                {
                  "name": "Declare Custom Variable",
                  "variableName": "_CurrentEP",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">BasePoint</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "#SkillRank_Rank01_P3_EPDamageAddRatioMax",
                    "compareType": "<",
                    "value2": {
                      "displayLines": "(0.015 * _CurrentEP)"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"416920765\">Sparxie_Eidolon1_Sub01</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "0.15"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"416920765\">Sparxie_Eidolon1_Sub01</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "(0.015 * _CurrentEP)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__9288377\">Sparxie_Eidolon2_InsertActionSave</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -55,
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1792463840\">Temp_Sparxie_Eidolon2_InsertActionSave</a>"
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1792463840\">Temp_Sparxie_Eidolon2_InsertActionSave</a>"
                }
              ]
            },
            {
              "eventTrigger": "Batch: Enemy Arrival",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1792463840\">Temp_Sparxie_Eidolon2_InsertActionSave</a>"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Living State",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "livingState": "Mask_AliveOrRevivable"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-1792463840\">Temp_Sparxie_Eidolon2_InsertActionSave</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1792463840\">Temp_Sparxie_Eidolon2_InsertActionSave</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "displayLines": "MDF_Layer"
                  },
                  "execute": [
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": null,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "afterInjection": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"9288377\">Sparxie_Eidolon2_InsertActionSave</a>"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"9288377\">Sparxie_Eidolon2_InsertActionSave</a>",
                      "addStacksPerTrigger": -1
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_Layer"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1349114975\">Sparxie_Trace03_Sub02</a>[<span class=\"descriptionNumberColor\">Frenzy! Palette of Truth and Lies</span>]",
          "stackType": "ReplaceByCaster",
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Frenzy! Palette of Truth and Lies",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1399447832\">Sparxie_Trace03_Sub01</a>",
          "stackType": "ReplaceByCaster",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1349114975\">Sparxie_Trace03_Sub02</a>[<span class=\"descriptionNumberColor\">Frenzy! Palette of Truth and Lies</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "MDF_PropertyValue"
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1956765834\">Sparxie_Trace03</a>",
          "stackType": "ReplaceByCaster",
          "elationValueChange": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "enteringRange": [
                {
                  "name": "Declare Custom Variable",
                  "variableName": "_CurrentEP",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">BasePoint</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "#SkillTree_PointB3_P2_CriticalDamageMax",
                    "compareType": "<",
                    "value2": {
                      "displayLines": "(0.08 * _CurrentEP)"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1399447832\">Sparxie_Trace03_Sub01</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "0.8"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1399447832\">Sparxie_Trace03_Sub01</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "(0.08 * _CurrentEP)"
                        }
                      }
                    }
                  ]
                }
              ],
              "leavingRange": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1399447832\">Sparxie_Trace03_Sub01</a>"
                }
              ],
              "onChange": [
                {
                  "name": "Declare Custom Variable",
                  "variableName": "_CurrentEP",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">BasePoint</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "#SkillTree_PointB3_P2_CriticalDamageMax",
                    "compareType": "<",
                    "value2": {
                      "displayLines": "(0.08 * _CurrentEP)"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1399447832\">Sparxie_Trace03_Sub01</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "0.8"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1399447832\">Sparxie_Trace03_Sub01</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "(0.08 * _CurrentEP)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1973543453\">Sparxie_Trace02</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"691871761\">Template_Sparxie_Trace02</a>"
                }
              ]
            },
            {
              "eventTrigger": "Character Path [Anyone]: Change",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"691871761\">Template_Sparxie_Trace02</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__691871761\">Template_Sparxie_Trace02</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Matching Path",
                  "variableName": "_Elation_Count",
                  "path": [
                    "Elation"
                  ]
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "displayLines": "_Elation_Count"
                  },
                  "compareType": ">=",
                  "caseTasks": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "8"
                          },
                          "variableName": "Sparxie_SkillTree_PointB2_UltraEPAddValue"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "4"
                          },
                          "variableName": "Sparxie_SkillTree_PointB2_UltraBPAddValue"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "4"
                          },
                          "variableName": "Sparxie_SkillTree_PointB2_UltraEPAddValue"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "1"
                          },
                          "variableName": "Sparxie_SkillTree_PointB2_UltraBPAddValue"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "2"
                          },
                          "variableName": "Sparxie_SkillTree_PointB2_UltraEPAddValue"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "1"
                          },
                          "variableName": "Sparxie_SkillTree_PointB2_UltraBPAddValue"
                        }
                      ]
                    }
                  ],
                  "defaultTasks": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "Sparxie_SkillTree_PointB2_UltraEPAddValue"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "Sparxie_SkillTree_PointB2_UltraBPAddValue"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1914794720\">Sparxie_Trace01_Bonus</a>[<span class=\"descriptionNumberColor\">Sweet! Punchline Signing</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Elation increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Elation Boost",
          "statusName": "Sweet! Punchline Signing",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1923210596\">Sparxie_Trace01</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-333844863\">Sparxie_Trace01_Sub</a>"
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-333844863\">Sparxie_Trace01_Sub</a>",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "_CurrentAttack",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "_CurrentAttackConvert",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((((_CurrentAttack - _CurrentAttackConvert) - 2000) / 100)) * 0.05)"
                  },
                  "variableName": "Sparxie_SkillTree_PointB1_AddedValue"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Sparxie_SkillTree_PointB1_AddedValue",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "Sparxie_SkillTree_PointB1_AddedValue"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1914794720\">Sparxie_Trace01_Bonus</a>[<span class=\"descriptionNumberColor\">Sweet! Punchline Signing</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Sparxie_SkillTree_PointB1_AddedValue",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "0.8"
                        },
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "0.8"
                          },
                          "variableName": "Sparxie_SkillTree_PointB1_AddedValue"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1914794720\">Sparxie_Trace01_Bonus</a>[<span class=\"descriptionNumberColor\">Sweet! Punchline Signing</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "Sparxie_SkillTree_PointB1_AddedValue"
                        }
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-333844863\">Sparxie_Trace01_Sub</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-333844863\">Sparxie_Trace01_Sub</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__153929564\">Sparxie_EnergyPoint</a>[<span class=\"descriptionNumberColor\">Thrill</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Can be used to offset Sparxie's consumption of Skill Points. Consuming \"Thrill\" is considered as consuming Skill Points.",
          "type": "Other",
          "statusName": "Thrill",
          "stackLimit": 9999,
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
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__522571708\">Sparxie_Passive01</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Skill Point Changes",
              "execute": [
                {
                  "name": "Define Custom Variable with SkillPoint Changes",
                  "variableName": "_BPChange",
                  "valueType": "RawDelta"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
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
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_BPChange",
                        "compareType": "<",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "Sparxie_EnergyPoint",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "displayLines": "_BPChange"
                      }
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Dazzling! Persona Kaleidoscope"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1973543453\">Sparxie_Trace02</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Aha Instant: End",
              "execute": [
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
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": null,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "afterInjection": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"9288377\">Sparxie_Eidolon2_InsertActionSave</a>"
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
                          "modifier": "<a class=\"gModGreen\" id=\"9288377\">Sparxie_Eidolon2_InsertActionSave</a>"
                        }
                      ]
                    },
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "Sparxie_EnergyPoint",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "displayLines": "2"
                      }
                    },
                    {
                      "name": "Modify Skill-Point Extras",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "function": "Set",
                      "value": {
                        "displayLines": "Sparxie_EnergyPoint"
                      },
                      "silentChange": true
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Active Ability Chosen [Anyone]",
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
                            "name": "Skill Name",
                            "skillName": "Skill02",
                            "useActive": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "from": {
                              "name": "Target Name",
                              "target": "{{Player Teams}}"
                            },
                            "to": {
                              "name": "Target Name",
                              "target": "{{Enemy Teams}}"
                            },
                            "value1": "Distance_Between_Entities",
                            "compareType": "<=",
                            "value2": 9
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Target List Entities",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                            },
                            "conditions": {
                              "name": "Is Body Part Owner",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              }
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Skill Name",
                            "skillName": "Skill01",
                            "useActive": true
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "Sparxie_EnergyPoint",
              "scope": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Sparxie_EnergyPoint",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "displayLines": "Sparxie_EnergyPoint"
                          },
                          "priorState": "Active"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "displayLines": "Sparxie_EnergyPoint"
                          },
                          "priorState": "Normal"
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "_EPChange"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"153929564\">Sparxie_EnergyPoint</a>[<span class=\"descriptionNumberColor\">Thrill</span>]",
                      "addStacksPerTrigger": {
                        "displayLines": "_EPChange"
                      }
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
                            "value1": "_EPChange",
                            "compareType": "<",
                            "value2": 0
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
                          "modifier": "<a class=\"gModGreen\" id=\"510555115\">Sparxie_Eidolon2_CriticalDamage</a>[<span class=\"descriptionNumberColor\">#AudienceKnows</span>]",
                          "duration": {
                            "displayLines": "2"
                          },
                          "stackLimit": {
                            "displayLines": "4"
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "displayLines": "0.1"
                            }
                          },
                          "addStacksPerTrigger": {
                            "displayLines": "-_EPChange"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-673955819\">Sparxie_Ability02_MustGrandPrize</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "3"
                  },
                  "variableName": "Sparxie_Skill02_GrandPrizeChance"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(28 - Sparxie_Skill02_GrandPrizeChance)"
                  },
                  "variableName": "Sparxie_Skill02_MinorPrizeChance"
                }
              ]
            },
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
                    "compareType": ">",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 100,
                      "variableName": "Sparxie_Skill02_GrandPrizeChance"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "Sparxie_Skill02_MinorPrizeChance"
                    }
                  ],
                  "failed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2022669679\">Sparxie_Ability02_Count</a>",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-177633859\">Sparxie_Ability21_Disable</a>",
          "stackType": "ReplaceByCaster",
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
            }
          ]
        }
      ],
      "references": []
    },
    "Sparxie_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Sparxie_LocalPlayer_StandardAbility_AttackBreak",
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
    "Sparxie_LocalPlayer_Sparxie_TechniqueUsage": {
      "fileName": "Sparxie_LocalPlayer_Sparxie_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": "Ability Has a Target"
        },
        "Deleted bullshit",
        {
          "name": "Random Event",
          "odds": [
            1,
            1,
            1
          ]
        },
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
              "ID": "150101(SkillMaze)",
              "duration": {
                "displayLines": "10"
              }
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Sparxie_LocalPlayer_Sparxie_NormalAtk01": {
      "fileName": "Sparxie_LocalPlayer_Sparxie_NormalAtk01",
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
              "name": "Shot Fired"
            },
            {
              "name": "Shot Fired",
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance"
                }
              ]
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Shot Fired"
            },
            {
              "name": "Shot Fired",
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance"
                }
              ]
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Sparxie_Sparxie_Ability12_Part01": {
      "fileName": "Sparxie_Sparxie_Ability12_Part01",
      "childAbilityList": [
        "Sparxie_Sparxie_Ability12_Part01"
      ],
      "skillTrigger": "Skill12",
      "abilityType": "Basic ATK",
      "energy": 40,
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
          "ability": "Sparxie_Ability11_Part02",
          "isTrigger": true
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"767923714\">Sparxie_Ability02_Effect</a>"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "_PKLineProgress"
        },
        {
          "name": "Define Custom Variable",
          "value": 0.3,
          "variableName": "_PKLineProgress"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "ElationEchoPoint"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "ElationEchoPoint"
          },
          "passed": [
            "Deleted bullshit",
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1607821938\">Sparxie_Ability11_Effect</a>"
            },
            {
              "name": "Update Character Panel Visibility"
            },
            "Toggle View Mode"
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-514028922\">Sparxie_Ability11_Effect_V1</a>"
            },
            "Toggle View Mode"
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      }
    },
    "Sparxie_Sparxie_TechniqueInLevel": {
      "fileName": "Sparxie_Sparxie_TechniqueInLevel",
      "childAbilityList": [
        "Sparxie_Sparxie_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"1052455939\">Sparxie_Maze_Damage</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1052455939\">Sparxie_Maze_Damage</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -60,
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
                      "Technique Modifies Current Wave",
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
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "Damage": {
                          "displayLines": "0.5"
                        },
                        "Toughness": null,
                        "Tags": null
                      }
                    },
                    "Trigger: Attack End",
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": {
                        "displayLines": "2"
                      },
                      "adjustmentType": "+"
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
    "Sparxie_Sparxie_PassiveAbility01": {
      "fileName": "Sparxie_Sparxie_PassiveAbility01",
      "childAbilityList": [
        "Sparxie_Sparxie_PassiveAbility01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        5,
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
          "modifier": "<a class=\"gModGreen\" id=\"522571708\">Sparxie_Passive01</a>"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "3"
          },
          "variableName": "Sparxie_Skill02_GrandPrizeChance"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(28 - Sparxie_Skill02_GrandPrizeChance)"
          },
          "variableName": "Sparxie_Skill02_MinorPrizeChance"
        },
        {
          "name": "Read Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Sparxie_EnergyPoint",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "Sparxie_EnergyPoint"
          },
          "maximum": 1,
          "assignState": "True",
          "bar#": 4
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Sweet! Punchline Signing"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1923210596\">Sparxie_Trace01</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Frenzy! Palette of Truth and Lies"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1956765834\">Sparxie_Trace03</a>"
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-719410617\">Sparxie_Eidolon1</a>"
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-803298712\">Sparxie_Eidolon4</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"-769743474\">Sparxie_Eidolon6</a>[<span class=\"descriptionNumberColor\">#BuiltDifferent #GoingExtinct</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.2"
                }
              }
            }
          ]
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
    "Sparxie_Sparxie_Ability04_Part02": {
      "fileName": "Sparxie_Sparxie_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Looped Event",
          "maxLoops": 5
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1081099960\">Sparxie_ElationAbility_Aoe</a>"
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Sparxie_EnergyPoint",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "displayLines": "2"
          }
        },
        {
          "name": "Modify Skill-Point Extras",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "function": "Set",
          "value": {
            "displayLines": "Sparxie_EnergyPoint"
          },
          "silentChange": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "variableName": "_CurrentEP"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((_CurrentEP / 1))"
              },
              "variableName": "_Rank06_ExtraDamage"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_Rank06_ExtraDamage",
                "compareType": ">",
                "value2": {
                  "displayLines": "(40 - 20)"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(40 - 20)"
                  },
                  "variableName": "_Rank06_ExtraDamage"
                }
              ]
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "(20 + _Rank06_ExtraDamage)"
          },
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1984031563\">Sparxie_ElationAbility_Single</a>"
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Sparxie_Sparxie_Ability04_Part01": {
      "fileName": "Sparxie_Sparxie_Ability04_Part01",
      "childAbilityList": [
        "Sparxie_Sparxie_Ability04_Camera",
        "Sparxie_Sparxie_Ability04_Part01",
        "Sparxie_Sparxie_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Elation",
      "energy": 5,
      "toughnessList": [
        1.6666666666666667,
        6.666666666666667,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Sparxie_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Sparxie_Sparxie_Ability03_Part02": {
      "fileName": "Sparxie_Sparxie_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "displayLines": "5"
              },
              "adjustment": "Add"
            }
          ]
        },
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "displayLines": "(2 + Sparxie_SkillTree_PointB2_UltraEPAddValue)"
          },
          "adjustment": "Add"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Dazzling! Persona Kaleidoscope"
          },
          "passed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "Sparxie_EnergyPoint",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "displayLines": "Sparxie_SkillTree_PointB2_UltraBPAddValue"
              }
            },
            {
              "name": "Modify Skill-Point Extras",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "function": "Set",
              "value": {
                "displayLines": "Sparxie_EnergyPoint"
              },
              "silentChange": true
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "_CurrentElationDamage",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGSUM</span>&nbsp;"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "((_CurrentElationDamage * 0.6) + 0.5)"
            },
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "ElationEchoPoint"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "DamageElation": {
                  "displayLines": "0.48"
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": null,
                "instanceTag": "Sparxie_ElationPursued_EPDamage",
                "Tags": null,
                "attackType": "Elation DMG"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Sparxie_Sparxie_Ability03_Part01": {
      "fileName": "Sparxie_Sparxie_Ability03_Part01",
      "childAbilityList": [
        "Sparxie_Sparxie_Ability03_Camera",
        "Sparxie_Sparxie_Ability03_EnterReady",
        "Sparxie_Sparxie_Ability03_Part01",
        "Sparxie_Sparxie_Ability03_Part02"
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
          "ability": "Sparxie_Ability03_Part02",
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
    "Sparxie_Sparxie_Ability03_EnterReady": {
      "fileName": "Sparxie_Sparxie_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Sparxie_Sparxie_Ability21_Part02": {
      "fileName": "Sparxie_Sparxie_Ability21_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "Sparxie_Skill02_MinorPrizeGetNum",
                "compareType": ">=",
                "value2": {
                  "displayLines": "(7 - 1)"
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "Sparxie_Skill02_GrandPrizeChance",
                "compareType": ">",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1163871467\">Sparxie_Ability02_GrandPrize</a>"
            }
          ],
          "failed": [
            {
              "name": "Random Event",
              "odds": [
                {
                  "displayLines": "Sparxie_Skill02_GrandPrizeChance"
                },
                {
                  "displayLines": "Sparxie_Skill02_MinorPrizeChance"
                }
              ],
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1163871467\">Sparxie_Ability02_GrandPrize</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-758227528\">Sparxie_Ability02_MinorPrize</a>"
                }
              ]
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
            "modifier": "<a class=\"gModGreen\" id=\"-673955819\">Sparxie_Ability02_MustGrandPrize</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-673955819\">Sparxie_Ability02_MustGrandPrize</a>",
              "addStacksPerTrigger": -1
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_SkillUseCount + 1)"
          },
          "variableName": "_SkillUseCount"
        },
        {
          "name": "Sparxie Test Data",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "displayLines": "_SkillUseCount"
          }
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_PKLineProgress + ((0.8 - _PKLineProgress) / 4))"
          },
          "variableName": "_PKLineProgress"
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
          "name": "Define Custom Variable with Ability Property",
          "skillKey": "Skill21",
          "variableName": "_BPNeed",
          "propertyName": "Skill Point Cost"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_SkillUseCount",
            "compareType": ">=",
            "value2": {
              "displayLines": "20"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-177633859\">Sparxie_Ability21_Disable</a>"
            }
          ]
        },
        {
          "name": "Trigger: Ability End",
          "skipAttackSettle": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Sparxie_Sparxie_Ability21_Part01": {
      "fileName": "Sparxie_Sparxie_Ability21_Part01",
      "childAbilityList": [
        "Sparxie_Sparxie_Ability21_Camera",
        "Sparxie_Sparxie_Ability21_Part01",
        "Sparxie_Sparxie_Ability21_Part02"
      ],
      "skillTrigger": "Skill21",
      "skillMuted": true,
      "abilityType": "Skill",
      "energy": null,
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
          "ability": "Sparxie_Ability21_Part02",
          "isTrigger": true
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"132499687\">Sparxie_Ability21_Effect</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      }
    },
    "Sparxie_Sparxie_Ability02_Part02": {
      "fileName": "Sparxie_Sparxie_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Update Ability Binding",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityName": "Skill21",
          "skillSlot": "Skill",
          "enableSecondaryType": "ControlSkill02"
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
          "name": "Sparxie Test Data",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-227453258\">Sparxie_Ability02_Taunt</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-236603905\">Sparxie_Ability02_Taunt_Sub</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "Sparxie_Skill02_MinorPrizeGetNum",
                "compareType": ">=",
                "value2": {
                  "displayLines": "(7 - 1)"
                }
              },
              {
                "name": "Compare: Variable",
                "value1": "Sparxie_Skill02_GrandPrizeChance",
                "compareType": ">",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1163871467\">Sparxie_Ability02_GrandPrize</a>"
            }
          ],
          "failed": [
            {
              "name": "Random Event",
              "odds": [
                {
                  "displayLines": "Sparxie_Skill02_GrandPrizeChance"
                },
                {
                  "displayLines": "Sparxie_Skill02_MinorPrizeChance"
                }
              ],
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1163871467\">Sparxie_Ability02_GrandPrize</a>"
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-758227528\">Sparxie_Ability02_MinorPrize</a>"
                }
              ]
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
            "modifier": "<a class=\"gModGreen\" id=\"-673955819\">Sparxie_Ability02_MustGrandPrize</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-673955819\">Sparxie_Ability02_MustGrandPrize</a>",
              "addStacksPerTrigger": -1
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(_SkillUseCount + 1)"
          },
          "variableName": "_SkillUseCount"
        },
        {
          "name": "Sparxie Test Data",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "displayLines": "_SkillUseCount"
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
          "name": "Define Custom Variable with Ability Property",
          "skillKey": "Skill21",
          "variableName": "_BPNeed",
          "propertyName": "Skill Point Cost"
        },
        {
          "name": "Trigger: Ability End",
          "skipAttackSettle": true
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-236603905\">Sparxie_Ability02_Taunt_Sub</a>",
          "stackType": "ReplaceByCaster",
          "removalDependencies": {
            "name": "Removal Dependency",
            "dependancyName": "<a class=\"gModGreen\" id=\"-227453258\">Sparxie_Ability02_Taunt</a>"
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-227453258\">Sparxie_Ability02_Taunt</a>",
          "stackType": "ReplaceByCaster",
          "targetRestriction": {
            "name": "Target Name",
            "target": "{{Sparxie: EBA Target}}"
          },
          "targetRestrictionFor": "EnemySelect"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Sparxie_Sparxie_Ability02_Part01": {
      "fileName": "Sparxie_Sparxie_Ability02_Part01",
      "childAbilityList": [
        "Sparxie_Sparxie_Ability02_Camera",
        "Sparxie_Sparxie_Ability02_Part01",
        "Sparxie_Sparxie_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "skillMuted": true,
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Update Character Panel Visibility",
          "targetCustom": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}} - {{Caster}} - {{SilverWolf999}}"
          },
          "show": "HideCustom",
          "forceDisplayUltButton": true
        },
        "Toggle View Mode",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target List Entities",
            "target": {
              "name": "Target Name",
              "target": "{{Hostile Entities(AOE, with Unselectables)}}"
            },
            "conditions": {
              "name": "Enemy ID",
              "ID": 100501,
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "characterName": null,
              "isCompareUniqueID": true
            }
          }
        },
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Sparxie_Ability02_Part02",
          "isTrigger": true
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"767923714\">Sparxie_Ability02_Effect</a>"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "_PKLineProgress"
        },
        {
          "name": "Define Custom Variable",
          "value": 0.3,
          "variableName": "_PKLineProgress"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "ElationEchoPoint"
          }
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      }
    },
    "Sparxie_Sparxie_Ability11_Part02": {
      "fileName": "Sparxie_Sparxie_Ability11_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-227453258\">Sparxie_Ability02_Taunt</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE, with Unselectables)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-236603905\">Sparxie_Ability02_Taunt_Sub</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-177633859\">Sparxie_Ability21_Disable</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "ElationEchoPoint"
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": 3
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "(1 + (0.2 * _SkillUseCount))"
                },
                "Toughness": {
                  "displayLines": "ST Toughness Value"
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
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "(0.5 + (0.1 * _SkillUseCount))"
                },
                "Toughness": {
                  "displayLines": "Blast Toughness Value"
                },
                "Tags": null,
                "attackType": "Basic ATK"
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
                "DamageType": "Fire",
                "DamageElation": {
                  "displayLines": "0.4"
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": null,
                "instanceTag": "Sparxie_ElationPursued_EPDamage",
                "Tags": null,
                "attackType": "Elation DMG"
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "DamageElation": {
                  "displayLines": "0.2"
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": null,
                "instanceTag": "Sparxie_ElationPursued_EPDamage",
                "Tags": null,
                "attackType": "Elation DMG"
              }
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "displayLines": "_SkillUseCount"
              },
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
                  "target": {
                    "name": "Target Name",
                    "target": "{{ST and Blast}}"
                  },
                  "paramSequence": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageElation": {
                          "displayLines": "0.2"
                        },
                        "dmgFormula": "Elation Scaling",
                        "Toughness": {
                          "displayLines": 15
                        },
                        "instanceTag": "Sparxie_ElationPursued_EPDamage",
                        "Tags": null,
                        "attackType": "Elation DMG"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "(1 + (0.2 * _SkillUseCount))"
                },
                "Toughness": {
                  "displayLines": "ST Toughness Value"
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
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "(0.5 + (0.1 * _SkillUseCount))"
                },
                "Toughness": {
                  "displayLines": "Blast Toughness Value"
                },
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        "Trigger: Attack End",
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
          "name": "Update Ability Binding",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "abilityName": "Skill01",
          "skillSlot": "Basic ATK"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "_SkillUseCount"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "3"
          },
          "variableName": "Sparxie_Skill02_GrandPrizeChance"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(28 - Sparxie_Skill02_GrandPrizeChance)"
          },
          "variableName": "Sparxie_Skill02_MinorPrizeChance"
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Sparxie_Sparxie_Ability11_Part01": {
      "fileName": "Sparxie_Sparxie_Ability11_Part01",
      "childAbilityList": [
        "Sparxie_Sparxie_Ability11_Camera",
        "Sparxie_Sparxie_Ability11_Camera_V1",
        "Sparxie_Sparxie_Ability11_Part01",
        "Sparxie_Sparxie_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": 40,
      "toughnessList": [
        10,
        0,
        5
      ],
      "parse": [
        {
          "name": "Update Character Panel Visibility"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "ElationEchoPoint"
          },
          "passed": [
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Sparxie_Ability11_Part02",
              "isTrigger": true
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1607821938\">Sparxie_Ability11_Effect</a>"
            },
            {
              "name": "Update Character Panel Visibility"
            },
            "Toggle View Mode"
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "Sparxie_Ability11_Part02",
              "isTrigger": true
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-514028922\">Sparxie_Ability11_Effect_V1</a>"
            },
            "Toggle View Mode"
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      }
    },
    "Sparxie_Sparxie_Ability01_Part02": {
      "fileName": "Sparxie_Sparxie_Ability01_Part02",
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
            "DamageType": "Fire",
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
    "Sparxie_Sparxie_Ability01_Part01": {
      "fileName": "Sparxie_Sparxie_Ability01_Part01",
      "childAbilityList": [
        "Sparxie_Sparxie_Ability01_Camera",
        "Sparxie_Sparxie_Ability01_Part01",
        "Sparxie_Sparxie_Ability01_Part02"
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
          "ability": "Sparxie_Ability01_Part02",
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
    "Sparxie_Functions": {
      "fileName": "Sparxie_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 8,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1081099960\">Sparxie_ElationAbility_Aoe</a>",
          "parse": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "AttackScaling": {
                "DamageType": "Fire",
                "DamageElation": {
                  "displayLines": "0.5"
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": {
                  "displayLines": "AOE Toughness Value"
                },
                "Tags": null,
                "attackType": "Elation DMG",
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1984031563\">Sparxie_ElationAbility_Single</a>",
          "parse": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"247970287\">Bounce_SelectTarget</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "paramSequence": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "DamageElation": {
                      "displayLines": "0.25"
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": {
                      "displayLines": "ST Toughness Value"
                    },
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-758227528\">Sparxie_Ability02_MinorPrize</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-673955819\">Sparxie_Ability02_MustGrandPrize</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(Sparxie_Skill02_MinorPrizeChance - 1)"
                  },
                  "variableName": "Sparxie_Skill02_MinorPrizeChance"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(Sparxie_Skill02_MinorPrizeGetNum + 1)"
                  },
                  "variableName": "Sparxie_Skill02_MinorPrizeGetNum"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Sparxie_Skill02_GrandPrizeChance",
                        "compareType": "<=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Sparxie_Skill02_MinorPrizeChance",
                        "compareType": "<=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "3"
                      },
                      "variableName": "Sparxie_Skill02_GrandPrizeChance"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(28 - Sparxie_Skill02_GrandPrizeChance)"
                      },
                      "variableName": "Sparxie_Skill02_MinorPrizeChance"
                    }
                  ]
                }
              ]
            },
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "popUpText": "Unreal Banger"
            },
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "displayLines": "1"
              },
              "adjustment": "Add"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1163871467\">Sparxie_Ability02_GrandPrize</a>",
          "parse": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2022669679\">Sparxie_Ability02_Count</a>",
              "addStacksPerTrigger": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-673955819\">Sparxie_Ability02_MustGrandPrize</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(Sparxie_Skill02_GrandPrizeChance - 1)"
                  },
                  "variableName": "Sparxie_Skill02_GrandPrizeChance"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "Sparxie_Skill02_MinorPrizeGetNum"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Sparxie_Skill02_GrandPrizeChance",
                        "compareType": "<=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Sparxie_Skill02_MinorPrizeChance",
                        "compareType": "<=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "3"
                      },
                      "variableName": "Sparxie_Skill02_GrandPrizeChance"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(28 - Sparxie_Skill02_GrandPrizeChance)"
                      },
                      "variableName": "Sparxie_Skill02_MinorPrizeChance"
                    }
                  ]
                }
              ]
            },
            {
              "name": "UI Display Event (On Entity)",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "popUpText": "Straight Fire"
            },
            {
              "name": "Skill Points Modification",
              "adjustmentValue": {
                "displayLines": "2"
              },
              "adjustmentType": "+"
            },
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "displayLines": "2"
              },
              "adjustment": "Add"
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__767923714\">Sparxie_Ability02_Effect</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__132499687\">Sparxie_Ability21_Effect</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-514028922\">Sparxie_Ability11_Effect_V1</a>",
          "parse": []
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__1607821938\">Sparxie_Ability11_Effect</a>",
          "parse": []
        }
      ],
      "references": []
    }
  }
}