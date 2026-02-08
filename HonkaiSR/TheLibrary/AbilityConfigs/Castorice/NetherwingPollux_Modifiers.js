const configAbility = {
  "fileName": "NetherwingPollux_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__313910489\">Memosprite_CastoriceServant_Eidolon6_StancePreview</a>",
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "whenValueChanges": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (CASTORICE_OBJECT_UNUSED_8) || RETURN",
                    "displayLines": "CASTORICE_OBJECT_UNUSED_8",
                    "constants": [],
                    "variables": [
                      "CASTORICE_OBJECT_UNUSED_8"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "skillType": "Memosprite",
        "toughnessForcedReductionPreview": {
          "operator": "Variables[0] (CASTORICE_OBJECT_UNUSED_8) || RETURN",
          "displayLines": "CASTORICE_OBJECT_UNUSED_8",
          "constants": [],
          "variables": [
            "CASTORICE_OBJECT_UNUSED_8"
          ]
        },
        "showAsForcedReduction": true
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-902705289\">Memosprite_CastoriceServant_Eidolon6_ForceStanceDamage</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "ForceStanceDamage"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessReductionForced%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (CASTORICE_OBJECT_UNUSED_8) || RETURN",
                "displayLines": "CASTORICE_OBJECT_UNUSED_8",
                "constants": [],
                "variables": [
                  "CASTORICE_OBJECT_UNUSED_8"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1420894416\">Memosprite_CastoriceServant_Ability23Check</a>",
      "stackData": [],
      "latentQueue": [
        "CL_PlayTimes",
        "CL_EnterBattlePlayTimes"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-256072391\">Memosprite_CastoriceServant_BP_Explode</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": ">=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill22",
                  "skillSlot": "Memosprite",
                  "enableSecondaryType": "ControlSkill02"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": "<=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill21",
                  "skillSlot": "Memosprite",
                  "enableSecondaryType": "ControlSkill02"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": "<",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill02",
                  "skillSlot": "Memosprite",
                  "enableSecondaryType": "ControlSkill02"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1341939671\">Memosprite_CastoriceServant_Disable</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1341939671\">Memosprite_CastoriceServant_Disable</a>"
            },
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill23",
              "skillSlot": "Memosprite",
              "enableSecondaryType": "ControlSkill02"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "CL_PlayTimes",
        "CL_EnterBattlePlayTimes"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1341939671\">Memosprite_CastoriceServant_Disable</a>",
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
              "abilityTypes": null,
              "controlTypes": [
                "ControlSkill01"
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "CL_EnterBattlePlayTimes",
        "CL_PlayTimes",
        "CastoriceServant_BPSkill_Level"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__131262836\">Memosprite_CastoriceServant_BPCost_3</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": ">=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Set Netherwing Skill Phase",
                  "level": 3
                },
                {
                  "name": "Update Action Bar Display",
                  "triggerName": "Level_3",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill22",
                  "skillSlot": "Memosprite",
                  "enableSecondaryType": "ControlSkill02"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Set Netherwing Skill Phase",
                  "level": 2
                },
                {
                  "name": "Update Action Bar Display",
                  "triggerName": "Level_2",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill21",
                  "skillSlot": "Memosprite",
                  "enableSecondaryType": "ControlSkill02"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CastoriceServant_BPSkill_Level",
                "compareType": "<",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill02",
                  "skillSlot": "Memosprite",
                  "enableSecondaryType": "ControlSkill02"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__148040455\">Memosprite_CastoriceServant_BPCost_2</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill22",
              "skillSlot": "Memosprite",
              "enableSecondaryType": "ControlSkill02"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "CastoriceServant_BPSkill_Level"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__164818074\">Memosprite_CastoriceServant_BPCost_1</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Update Ability Binding",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityName": "Skill21",
              "skillSlot": "Memosprite",
              "enableSecondaryType": "ControlSkill02"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "CastoriceServant_BPSkill_Level"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__847472600\">Memosprite_CastoriceServant_Flag01</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2133723962\">Memosprite_CastoriceServant_InsideExplode</a>[<span class=\"descriptionNumberColor\">Back to the Black</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "description": "Triggers the Talent effect of \"Wings Sweep the Ruins\" the next time \"Breath Scorches the Shadow\" is used.",
      "type": "Other",
      "statusName": "Back to the Black"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1793501095\">Memosprite_CastoriceServant_GoDie</a>",
      "modifierFlags": [
        "DisableHPBarRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1387518623\">Memosprite_CastoriceServant_HitDamageSplit</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Lock HP",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "lockHolder": "<a class=\"gModGreen\" id=\"-1387518623\">Memosprite_CastoriceServant_HitDamageSplit</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Fatal Damage [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"123456163\">Standard_Departed</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is HP-Locked",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Lock HP",
                      "threshold": 0,
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "lockHolder": "<a class=\"gModGreen\" id=\"-1387518623\">Memosprite_CastoriceServant_HitDamageSplit</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Was Overhealed [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"123456163\">Standard_Departed</a>",
                "invertCondition": true
              },
              "passed": [
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
                        "name": "Target is HP-Locked",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "lockHolder": "<a class=\"gModGreen\" id=\"-1387518623\">Memosprite_CastoriceServant_HitDamageSplit</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "MDF_OwnerDeltaHP"
                    },
                    {
                      "name": "Consume",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "flatConsume": {
                        "operator": "Variables[0] (MDF_OwnerDeltaHP) || INVERT || Variables[1] (5) || MUL || RETURN",
                        "displayLines": "(-MDF_OwnerDeltaHP * 5)",
                        "constants": [],
                        "variables": [
                          "MDF_OwnerDeltaHP",
                          5
                        ]
                      },
                      "attackType": "Unknown"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Lock HP",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "lockHolder": "<a class=\"gModGreen\" id=\"-1387518623\">Memosprite_CastoriceServant_HitDamageSplit</a>"
            }
          ]
        },
        {
          "eventTrigger": "Locked HP Floor Reached [Owner]",
          "execute": [
            {
              "name": "Lock HP",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "lockHolder": "<a class=\"gModGreen\" id=\"-1387518623\">Memosprite_CastoriceServant_HitDamageSplit</a>"
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1340712313\">Memosprite_CastoriceServant_OnListenHitDamageSplit</a>",
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]].[[removeMemosprite]]"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1387518623\">Memosprite_CastoriceServant_HitDamageSplit</a>",
          "haloStatus": true
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-858784788\">Memosprite_CastoriceServant_LoseHPPreShow</a>",
      "execute": [
        {
          "eventTrigger": "Update Target Selected(UI) [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_PreShowMaxHP",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "value1": "Castorice_Rank02_Count",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-47761406\">Memosprite_CastoriceServant_LifeTime</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Update UI Preview",
                      "show": "Show",
                      "skillType": [
                        "Memosprite"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "previewType": null,
                      "previewValue": {
                        "operator": "Variables[0] (MDF_PreShowMaxHP) || RETURN",
                        "displayLines": "MDF_PreShowMaxHP",
                        "constants": [],
                        "variables": [
                          "MDF_PreShowMaxHP"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update UI Preview",
                      "show": "Show",
                      "skillType": [
                        "Memosprite"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "previewType": null,
                      "previewValue": {
                        "operator": "Variables[0] (MDF_PreShowMaxHP) || Variables[1] (0.25) || MUL || RETURN",
                        "displayLines": "(MDF_PreShowMaxHP * 0.25)",
                        "constants": [],
                        "variables": [
                          "MDF_PreShowMaxHP",
                          0.25
                        ]
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-47761406\">Memosprite_CastoriceServant_LifeTime</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Update UI Preview",
                      "show": "Show",
                      "skillType": [
                        "Memosprite"
                      ],
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "previewType": null,
                      "previewValue": {
                        "operator": "Variables[0] (MDF_PreShowMaxHP) || RETURN",
                        "displayLines": "MDF_PreShowMaxHP",
                        "constants": [],
                        "variables": [
                          "MDF_PreShowMaxHP"
                        ]
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
                          "name": "Set Netherwing's Ardent Will Stacks",
                          "display": {
                            "operator": "Variables[0] (CastoriceServant_Rank02_Count) || RETURN",
                            "displayLines": "CastoriceServant_Rank02_Count",
                            "constants": [],
                            "variables": [
                              "CastoriceServant_Rank02_Count"
                            ]
                          },
                          "preview": {
                            "operator": "Variables[0] (CastoriceServant_Rank02_Count) || RETURN",
                            "displayLines": "CastoriceServant_Rank02_Count",
                            "constants": [],
                            "variables": [
                              "CastoriceServant_Rank02_Count"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 2
                      },
                      "passed": [
                        {
                          "name": "Set Netherwing's Ardent Will Stacks",
                          "display": {
                            "operator": "Variables[0] (CastoriceServant_Rank02_Count) || RETURN",
                            "displayLines": "CastoriceServant_Rank02_Count",
                            "constants": [],
                            "variables": [
                              "CastoriceServant_Rank02_Count"
                            ]
                          },
                          "preview": 1
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
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-509656395\">Memosprite_CastoriceServant_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">Roar Rumbles the Realm</span>]",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Roar Rumbles the Realm"
    }
  ],
  "references": []
}